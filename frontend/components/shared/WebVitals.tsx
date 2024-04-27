"use client";

import React from 'react';
import { useReportWebVitals } from "next/web-vitals";

const WebVitals = () => {
  useReportWebVitals((metric: any) => {
    console.log(metric)
  });
};

export default WebVitals;