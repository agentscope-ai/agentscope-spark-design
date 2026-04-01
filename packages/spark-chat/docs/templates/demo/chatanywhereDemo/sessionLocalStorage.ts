const sessionLocalStorage = {
  get() {
    const localStorageDataString = localStorage.getItem(
      'chat-anywhere-session',
    );

    var data: {
      currentSessionKey: string;
      currentRegenerateIndex: number;
      sessionList: {
        label: string;
        key: string;
        messages: any[][];
      }[];
    };

    if (localStorageDataString) {
      data = JSON.parse(localStorageDataString);
    } else {
      data = {
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

    data.sessionList = (data.sessionList || []).map((session) => {
      return {
        ...session,
        messages: (session.messages || []).map((messageGroup) => {
          return (messageGroup || []).map((message) => {
            if (!message || typeof message !== 'object') return message;
            return {
              ...message,
              history: true,
            };
          });
        }),
      };
    });

    return data;
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
