// Google Analytics helper functions
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void
  }
}

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "G-BBJFR5PZ48", {
      page_path: url,
    })
  }
}

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track conversions
export const trackConversion = (planType: string, value: number) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "purchase", {
      event_category: "ecommerce",
      event_label: planType,
      value: value,
      currency: "USD",
    })
  }
}

// Track form submissions
export const trackFormSubmission = (formType: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "form_submit", {
      event_category: "engagement",
      event_label: formType,
    })
  }
}

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "click", {
      event_category: "engagement",
      event_label: `${buttonName} - ${location}`,
    })
  }
}
