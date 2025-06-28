import React, { useState } from 'react';
import { Key, Sparkles } from 'lucide-react';

const ApiKeyInput = ({ onApiKeySet }: { onApiKeySet: (key: string) => void }) => {
  const [apiKey, setApiKey] = useState('');
  const [isValidating, setIsValidating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsValidating(true);
    // In a real app, you might validate the key format here
    setTimeout(() => {
      onApiKeySet(apiKey);
      setIsValidating(false);
    }, 500);
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <Key className="text-purple-600" size={24} />
        <h2 className="text-2xl font-bold text-gray-800">API Key Setup</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="api-key" className="block text-sm font-medium text-gray-700 mb-1">
            Your OpenAI/DeepSeek API Key
          </label>
          <input
            type="password"
            id="api-key"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="sk-...your-api-key..."
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            required
          />
          <p className="mt-2 text-xs text-gray-500">
            Your API key is stored locally and never sent to our servers.
          </p>
        </div>
        <button
          type="submit"
          disabled={!apiKey || isValidating}
          className={`w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 ${(!apiKey || isValidating) ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isValidating ? (
            'Validating...'
          ) : (
            <>
              <Sparkles size={20} />
              Save API Key
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ApiKeyInput;
