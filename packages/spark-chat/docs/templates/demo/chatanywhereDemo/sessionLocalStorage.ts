const sessionLocalStorage = {
  get() {
    const localStorageDataString = localStorage.getItem(
      'chat-anywhere-session',
    );

    if (localStorageDataString) {
      return JSON.parse(localStorageDataString);
    } else {
      return {
        sessionList: [
          {
            label: Date.now().toString(),
            key: '9ed1150f-6046-4917-a124-6e85ba1ea933',
            messages: [[]],
          },
        ],
        currentSessionKey: '9ed1150f-6046-4917-a124-6e85ba1ea933',
        currentRegenerateIndex: 0,
      };
    }
  },
  set(data) {
    const beforeData = sessionLocalStorage.get() || {};
    
    localStorage.setItem(
      'chat-anywhere-session',
      JSON.stringify({
        ...beforeData,
        ...data,
      }),
    );
  },
};

export default sessionLocalStorage;
