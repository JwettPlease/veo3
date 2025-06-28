import React from 'react';
import { MapPin, Video, Mic, Volume2 } from 'lucide-react';

const Clip = ({ clip, index, onChange }) => {
  const handleChange = (field, value) => {
    onChange({
      ...clip,
      [field]: value
    });
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-purple-100 text-purple-600 w-10 h-10 rounded-full flex items-center justify-center">
          {index + 1}
        </div>
        <h3 className="text-xl font-bold text-gray-800">Clip {index + 1}</h3>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <MapPin className="text-purple-600 mt-1 flex-shrink-0" size={20} />
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 mb-1">Location</h4>
            <textarea
              className="w-full p-2 border border-gray-200 rounded-lg"
              rows={2}
              value={clip.location}
              onChange={(e) => handleChange('location', e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Video className="text-purple-600 mt-1 flex-shrink-0" size={20} />
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 mb-1">Camera</h4>
            <textarea
              className="w-full p-2 border border-gray-200 rounded-lg"
              rows={2}
              value={clip.camera}
              onChange={(e) => handleChange('camera', e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="text-purple-600 mt-1 flex-shrink-0">🎭</div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 mb-1">Action</h4>
            <textarea
              className="w-full p-2 border border-gray-200 rounded-lg"
              rows={3}
              value={clip.action}
              onChange={(e) => handleChange('action', e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Mic className="text-purple-600 mt-1 flex-shrink-0" size={20} />
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 mb-1">Dialogue</h4>
            <textarea
              className="w-full p-2 border border-gray-200 rounded-lg"
              rows={3}
              value={clip.dialogue}
              onChange={(e) => handleChange('dialogue', e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Volume2 className="text-purple-600 mt-1 flex-shrink-0" size={20} />
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 mb-1">SFX / Audio Notes</h4>
            <textarea
              className="w-full p-2 border border-gray-200 rounded-lg"
              rows={2}
              value={clip.sfx}
              onChange={(e) => handleChange('sfx', e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clip;
