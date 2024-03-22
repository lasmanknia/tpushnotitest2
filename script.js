const checkPermission = () => {
    if (!("serviceWorker" in navigator)) {
      throw new Error("No support");
    }
    if (!("Notification" in window)) {
      throw new Error("error noti");
    }
  };
  
  const registerSw = async () => {
    try {
      const registration = await navigator.serviceWorker.register("sw.js");
      return registration;
    } catch (error) {
      console.error("Service worker registration failed:", error);
      // You can handle the error here, such as showing a user-friendly message
      // or performing fallback behavior.
      throw error; // Re-throwing the error to propagate it up
    }
  };
  
  const requestnotificationPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      throw new Error("noti not work");
    } else {
      new Notification("Hello world");
    }
  };
  
  try {
    checkPermission();
    await registerSw(); // Wait for registration to complete before proceeding
    await requestnotificationPermission(); // Wait for permission request to complete
  } catch (error) {
    console.error("Error during service worker setup:", error);
    // You can handle the error here, such as showing a user-friendly message
    // or performing fallback behavior.
  }
  