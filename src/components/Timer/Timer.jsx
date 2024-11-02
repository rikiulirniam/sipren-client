export const useDate = () => {
    const updateDate = () => {
        const now = new Date();
        setDate({
          second: String(now.getSeconds()).padStart(2, "0"),
          minute: String(now.getMinutes()).padStart(2, "0"),
          hour: String(now.getHours()).padStart(2, "0"),
          day: String(now.getDate()).padStart(2, "0"),
          month: String(now.getMonth() + 1).padStart(2, "0"),
          year: String(now.getFullYear()),
        });
      };
  
      updateDate();
      const intervalId = setInterval(updateDate, 1000);
  
      return () => clearInterval(intervalId);
}