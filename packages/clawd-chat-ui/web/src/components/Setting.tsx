import React from 'react';
import { useLocalStorageState } from 'ahooks';

export interface ClawdConfig {
  host: string;
  token: string;
  clientId: string;
}

export function useClawdConfig() {
  const [config, setConfig] = useLocalStorageState<ClawdConfig>('clawd_config', {
    defaultValue: { host: '', token: '', clientId: '' }
  });
  return [config, setConfig] as const;
}

interface SettingProps {
  onSave?: () => void;
  onCancel?: () => void;
}

export const Setting: React.FC<SettingProps> = ({ onSave, onCancel }) => {
  const [config, setConfig] = useClawdConfig();

  const { host, token, clientId } = config || { host: '', token: '', clientId: '' };

  const setHost = (newHost: string) => {
    setConfig((prev: ClawdConfig | undefined) => ({ ...prev!, host: newHost }));
  };

  const setToken = (newToken: string) => {
    setConfig((prev: ClawdConfig | undefined) => ({ ...prev!, token: newToken }));
  };

  const setClientId = (newClientId: string) => {
    setConfig((prev: ClawdConfig | undefined) => ({ ...prev!, clientId: newClientId }));
  };

  const handleSave = () => {
    // ahooks useLocalStorageState auto saves, so just call onSave
    if (onSave) {
      onSave();
    } else {
      alert('配置已保存 / Configuration saved');
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#0f172a',
      backgroundImage: `
        radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
        radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), 
        radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%)
      `,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      color: 'white',
      zIndex: 2000,
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        padding: '24px',
        marginTop: '10vh',
        borderRadius: '24px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        width: '440px',
        maxWidth: '90%',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '8px' }}>
          <h2 style={{
            margin: '0 0 8px 0',
            fontSize: '28px',
            fontWeight: '600',
            background: 'linear-gradient(to right, #e2e8f0, #94a3b8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.5px',
          }}>
            Server Settings
          </h2>
          <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>
            Configure your connection details
          </p>
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: '500', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Host Address
          </label>
          <input
            type="text"
            value={host}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHost(e.target.value)}
            placeholder="ws(s?)://0.0.0.0:18789"
            style={{
              width: '100%',
              padding: '14px 16px',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              color: 'white',
              fontSize: '15px',
              outline: 'none',
              transition: 'all 0.2s',
            }}
            onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
            }}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: '500', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Access Token
          </label>
          <input
            type="password"
            value={token}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setToken(e.target.value)}
            placeholder="Enter your token"
            style={{
              width: '100%',
              padding: '14px 16px',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              color: 'white',
              fontSize: '15px',
              outline: 'none',
              transition: 'all 0.2s',
            }}
            onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
            }}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: '500', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Client ID
          </label>
          <input
            type="text"
            value={clientId}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setClientId(e.target.value)}
            placeholder="Enter your client ID"
            style={{
              width: '100%',
              padding: '14px 16px',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              color: 'white',
              fontSize: '15px',
              outline: 'none',
              transition: 'all 0.2s',
            }}
            onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
            }}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              style={{
                flex: 1,
                padding: '14px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                color: '#e2e8f0',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}
            >
              Cancel
            </button>
          )}
          <button
            type="button"
            onClick={handleSave}
            style={{
              flex: 1,
              padding: '14px',
              backgroundColor: '#6366f1',
              backgroundImage: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
              border: 'none',
              borderRadius: '12px',
              color: 'white',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(99, 102, 241, 0.4)';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.3)';
            }}
            onMouseDown={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.transform = 'translateY(1px)'}
            onMouseUp={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.transform = 'translateY(-1px)'}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};
