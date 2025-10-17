"use client"
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AosProvider({ children }) {
    useEffect(() => {
        AOS.init({
            easing: 'ease-in-sine',
            once: true,
            delay: 100,
            disable: false,
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            useClassNames: true,
            disableMutationObserver: false,
            throttleDelay: 99,
            disableGlobalCallback: false,
            errorClass: 'aos-error',
            anchorPlacement: 'bottom-bottom',
            
        });
    }, []);
  return (
    <>{children}</>
  )
}
