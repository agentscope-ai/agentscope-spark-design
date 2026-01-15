class SessionApi {
  lsKey: string;
  sessionList: any[];

  constructor() {
    this.lsKey = 'agent-scope-runtime-webui-sessions';
    this.sessionList = [];
  }

  async getSessionList() {
    this.sessionList = JSON.parse(localStorage.getItem(this.lsKey) || '[]');
    return [...this.sessionList];
  }

  async getSession(sessionId: string) {
    return this.sessionList.find((session) => session.id === sessionId);
  }

  async updateSession(session: any) {
    const index = this.sessionList.findIndex((item) => item.id === session.id);
    if (index > -1) {
      this.sessionList[index] = {
        ...this.sessionList[index],
        ...session,
      };
      localStorage.setItem(this.lsKey, JSON.stringify(this.sessionList));
    }

    return [...this.sessionList];
  }

  async createSession(session: any) {
    session.id = Date.now().toString();
    this.sessionList.unshift(session);
    localStorage.setItem(this.lsKey, JSON.stringify(this.sessionList));
    return [...this.sessionList];
  }

  async removeSession(session: any) {
    this.sessionList = this.sessionList.filter(
      (item) => item.id !== session.id,
    );
    localStorage.setItem(this.lsKey, JSON.stringify(this.sessionList));
    return [...this.sessionList];
  }
}

export default new SessionApi();
