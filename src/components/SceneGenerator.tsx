import React, { useState, useEffect } from 'react';
import Clip from './Clip';
import { Sparkles, Camera, Mic2, Film, Settings2, Plus, Trash2 } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import ApiKeyInput from './ApiKeyInput';
import { generateScene } from './ApiService';

const SceneGenerator = () => {
  const [scenes, setScenes] = useState<any[]>([]);
  const [scenePrompt, setScenePrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [sceneCount, setSceneCount] = useState(1);
  const [hasApiKey, setHasApiKey] = useState(false);

  useEffect(() => {
    const storedKey = localStorage.getItem('cinegen-ai-api-key');
    if (storedKey) {
      setApiKey(storedKey);
      setHasApiKey(true);
    }
  }, []);

  const handleApiKeySet = (key: string) => {
    localStorage.setItem('cinegen-ai-api-key', key);
    setApiKey(key);
    setHasApiKey(true);
  };

  const generateScenes = async () => {
    setIsGenerating(true);
    setScenes([]);
    
    try {
      const newScenes = [];
      for (let i = 0; i < sceneCount; i++) {
        const response = await generateScene({
          prompt: scenePrompt,
          sceneNumber: i + 1,
          apiKey
        });
        newScenes.push(response);
      }
      setScenes(newScenes);
    } catch (error) {
      console.error("Error generating scenes:", error);
      alert("Failed to generate scenes. Please check your API key and try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const addScene = () => {
    if (sceneCount < 5) {
      setSceneCount(sceneCount + 1);
    }
  };

  const removeScene = () => {
    if (sceneCount > 1) {
      setSceneCount(sceneCount - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />
      
      <main className="flex-grow py-12 px-4 sm:px-6">
        {!hasApiKey ? (
          <ApiKeyInput onApiKeySet={handleApiKeySet} />
        ) : (
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center mb-12">
              <div className="w-full max-w-2xl">
                <div className="relative">
                  <textarea
                    className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg h-32 shadow-sm"
                    placeholder="Describe the scene you want to create (e.g. 'A tense confrontation in a space station between two rival astronauts')"
                    value={scenePrompt}
                    onChange={(e) => setScenePrompt(e.target.value)}
                  />
                  <div className="flex justify-between mt-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={removeScene}
                        disabled={sceneCount <= 1}
                        className={`p-2 rounded-full ${sceneCount <= 1 ? 'text-gray-400' : 'text-purple-600 hover:bg-purple-100'}`}
                      >
                        <Trash2 size={20} />
                      </button>
                      <span className="font-medium text-gray-700">
                        {sceneCount} Scene{sceneCount !== 1 ? 's' : ''}
                      </span>
                      <button
                        onClick={addScene}
                        disabled={sceneCount >= 5}
                        className={`p-2 rounded-full ${sceneCount >= 5 ? 'text-gray-400' : 'text-purple-600 hover:bg-purple-100'}`}
                      >
                        <Plus size={20} />
                      </button>
                    </div>
                    <button
                      onClick={generateScenes}
                      disabled={!scenePrompt || isGenerating}
                      className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 ${(!scenePrompt || isGenerating) ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isGenerating ? (
                        'Generating...'
                      ) : (
                        <>
                          <Sparkles size={20} />
                          Generate {sceneCount} Scene{sceneCount !== 1 ? 's' : ''}
                        </>
                      )}
                    </button>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Our AI will create complete scene breakdowns including concept, location, cinematic setup, characters, and clips.
                </p>
              </div>
            </div>

            {isGenerating && (
              <div className="flex justify-center items-center py-12">
                <div className="animate-pulse flex flex-col items-center">
                  <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Sparkles className="text-purple-600" size={32} />
                  </div>
                  <p className="text-gray-600 text-lg">Generating your cinematic masterpiece...</p>
                  <p className="text-sm text-gray-500 mt-2">This may take a moment</p>
                </div>
              </div>
            )}

            {scenes.length > 0 && !isGenerating && (
              <div className="space-y-12">
                {scenes.map((scene, sceneIndex) => (
                  <div key={sceneIndex} className="space-y-8">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200">
                      <div className="flex items-center gap-3 mb-6">
                        <Film className="text-purple-600" size={28} />
                        <h2 className="text-3xl font-bold text-gray-800">
                          🎬 Scene {sceneIndex + 1}: "{scene.title}"
                        </h2>
                      </div>
                      
                      <div className="prose max-w-none">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Scene Concept</h3>
                        <p className="text-gray-700">{scene.concept}</p>
                        
                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">📍 Scene Location</h3>
                        <p className="text-gray-700">{scene.location.description}</p>
                        
                        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Ambiance</h3>
                        <p className="text-gray-700">{scene.ambiance}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200">
                        <div className="flex items-center gap-3 mb-4">
                          <Camera className="text-purple-600" size={24} />
                          <h2 className="text-2xl font-bold text-gray-800">🎥 Cinematic Setup</h2>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-semibold text-gray-800 mb-1">Resolution: {scene.cinematicSetup.resolution}</h3>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800 mb-2">Cameras:</h3>
                            <ul className="list-disc pl-5 space-y-1">
                              {scene.cinematicSetup.cameras.map((cam: string, index: number) => (
                                <li key={index} className="text-gray-700">{cam}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800 mb-2">Lighting:</h3>
                            <ul className="list-disc pl-5 space-y-1">
                              {scene.cinematicSetup.lighting.map((light: string, index: number) => (
                                <li key={index} className="text-gray-700">{light}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200">
                        <div className="flex items-center gap-3 mb-4">
                          <Mic2 className="text-purple-600" size={24} />
                          <h2 className="text-2xl font-bold text-gray-800">🎭 Characters</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                          {scene.characterDetails.map((char: any, index: number) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                              <h3 className="font-bold text-gray-800 mb-2">{char.name}</h3>
                              <div className="space-y-2">
                                <p><span className="font-semibold">Core Concept:</span> {char.coreConcept}</p>
                                <p><span className="font-semibold">Physical Attributes:</span> {char.physicalAttributes}</p>
                                <p><span className="font-semibold">Voice & Dialogue:</span> {char.voiceDialogue}</p>
                                <p><span className="font-semibold">Demeanor:</span> {char.demeanor}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <Film className="text-purple-600" size={24} />
                        <h2 className="text-2xl font-bold text-gray-800">🎬 Clips</h2>
                      </div>
                      
                      {scene.clips.map((clip: any, index: number) => (
                        <Clip 
                          key={index} 
                          clip={clip} 
                          index={index}
                          onChange={(updatedClip) => {
                            const newScenes = [...scenes];
                            const newClips = [...newScenes[sceneIndex].clips];
                            newClips[index] = updatedClip;
                            newScenes[sceneIndex].clips = newClips;
                            setScenes(newScenes);
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default SceneGenerator;
