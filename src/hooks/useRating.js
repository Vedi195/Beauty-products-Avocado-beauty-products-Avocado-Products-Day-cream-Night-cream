import { useState, useEffect, useCallback } from 'react';
import { doc, onSnapshot, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const DEVICE_ID_KEY = 'avocado_device_id';

// Generate a unique device ID for rating tracking
const getDeviceId = () => {
  let deviceId = localStorage.getItem(DEVICE_ID_KEY);
  if (!deviceId) {
    deviceId = 'device_' + Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
    localStorage.setItem(DEVICE_ID_KEY, deviceId);
  }
  return deviceId;
};

export const useRating = (productId) => {
  const [ratingData, setRatingData] = useState({
    averageRating: 0,
    totalRatingCount: 0,
    userRating: null,
    ratingBreakdown: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    loading: true,
    error: null
  });

  const deviceId = getDeviceId();

  // Listen to real-time rating updates
  useEffect(() => {
    if (!productId) return;

    // Check if Firebase is configured
    if (!process.env.REACT_APP_FIREBASE_API_KEY) {
      setRatingData(prev => ({
        ...prev,
        loading: false,
        error: 'Firebase not configured'
      }));
      return;
    }

    const ratingRef = doc(db, 'productRatings', productId);

    const unsubscribe = onSnapshot(
      ratingRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          const userRatings = data.userRatings || {};
          const ratingBreakdown = data.ratingBreakdown || { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

          setRatingData({
            averageRating: data.averageRating || 0,
            totalRatingCount: data.totalRatingCount || 0,
            userRating: userRatings[deviceId] || null,
            ratingBreakdown,
            loading: false,
            error: null
          });
        } else {
          setRatingData({
            averageRating: 0,
            totalRatingCount: 0,
            userRating: null,
            ratingBreakdown: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
            loading: false,
            error: null
          });
        }
      },
      (error) => {
        console.error('Error fetching rating:', error);
        setRatingData(prev => ({
          ...prev,
          loading: false,
          error: error.message
        }));
      }
    );

    return () => unsubscribe();
  }, [productId, deviceId]);

  // Submit or update rating
  const submitRating = useCallback(async (rating) => {
    if (!productId || rating < 1 || rating > 5) return false;

    // Check if Firebase is configured
    if (!process.env.REACT_APP_FIREBASE_API_KEY) {
      console.error('Firebase not configured');
      return false;
    }

    try {
      const ratingRef = doc(db, 'productRatings', productId);
      const snapshot = await getDoc(ratingRef);

      let newData;
      const currentData = snapshot.exists() ? snapshot.data() : {
        totalRatingSum: 0,
        totalRatingCount: 0,
        averageRating: 0,
        userRatings: {},
        ratingBreakdown: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
      };

      const userRatings = currentData.userRatings || {};
      const ratingBreakdown = currentData.ratingBreakdown || { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
      const previousRating = userRatings[deviceId];

      if (previousRating) {
        // Update existing rating
        const newSum = currentData.totalRatingSum - previousRating + rating;
        const newAverage = newSum / currentData.totalRatingCount;

        // Update breakdown
        ratingBreakdown[previousRating] = Math.max(0, (ratingBreakdown[previousRating] || 0) - 1);
        ratingBreakdown[rating] = (ratingBreakdown[rating] || 0) + 1;

        newData = {
          ...currentData,
          totalRatingSum: newSum,
          averageRating: Math.round(newAverage * 10) / 10,
          userRatings: { ...userRatings, [deviceId]: rating },
          ratingBreakdown
        };
      } else {
        // New rating
        const newSum = currentData.totalRatingSum + rating;
        const newCount = currentData.totalRatingCount + 1;
        const newAverage = newSum / newCount;

        // Update breakdown
        ratingBreakdown[rating] = (ratingBreakdown[rating] || 0) + 1;

        newData = {
          totalRatingSum: newSum,
          totalRatingCount: newCount,
          averageRating: Math.round(newAverage * 10) / 10,
          userRatings: { ...userRatings, [deviceId]: rating },
          ratingBreakdown
        };
      }

      await setDoc(ratingRef, newData);
      return true;
    } catch (error) {
      console.error('Error submitting rating:', error);
      return false;
    }
  }, [productId, deviceId]);

  return {
    ...ratingData,
    submitRating,
    hasRated: ratingData.userRating !== null
  };
};

export default useRating;