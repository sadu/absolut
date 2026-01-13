import React, { useState, useEffect } from 'react';

// Mock data generation utilities
const generateFlightData = () => ({
  altitude: Math.floor(8500 + Math.random() * 200 - 100),
  speed: Math.floor(185 + Math.random() * 20 - 10),
  heading: Math.floor(275 + Math.random() * 10 - 5),
  pitch: (Math.random() * 4 - 2).toFixed(1),
  roll: (Math.random() * 6 - 3).toFixed(1),
});

const generateSystemHealth = () => ({
  battery: Math.floor(78 + Math.random() * 5 - 2.5),
  motorTemp: Math.floor(42 + Math.random() * 8 - 4),
  signalStrength: Math.floor(92 + Math.random() * 8 - 4),
  cpuLoad: Math.floor(45 + Math.random() * 20 - 10),
});

const generateAIPerception = () => ({
  objectCount: Math.floor(12 + Math.random() * 6 - 3),
  confidence: Math.floor(94 + Math.random() * 6 - 3),
  threats: Math.floor(Math.random() * 3),
  processing: Math.floor(18 + Math.random() * 8 - 4),
});

const detectionEvents = [
  { type: 'VEHICLE', class: 'T-72 MBT', conf: 98, grid: 'NK-4521' },
  { type: 'VESSEL', class: 'Patrol Boat', conf: 95, grid: 'MR-1138' },
  { type: 'AIRCRAFT', class: 'Rotary Wing', conf: 92, grid: 'AK-7744' },
  { type: 'PERSONNEL', class: 'Squad Element', conf: 88, grid: 'NK-4519' },
  { type: 'STRUCTURE', class: 'SAM Site', conf: 96, grid: 'BK-2201' },
];

const missionLogs = [
  'Waypoint ALPHA reached - initiating loiter pattern',
  'Sensor calibration complete - EO/IR online',
  'Target handoff received from COMMANDER',
  'Updating mission profile per new ROE',
  'Multi-agent coordination established with TITAN-02',
  'RF signature detected - analyzing threat level',
  'Autonomous navigation engaged - avoiding restricted zone',
  'Data burst transmitted to ground station',
];

export default function Telemetry() {
  const [flightData, setFlightData] = useState(generateFlightData());
  const [systemHealth, setSystemHealth] = useState(generateSystemHealth());
  const [aiPerception, setAiPerception] = useState(generateAIPerception());
  const [currentDetection, setCurrentDetection] = useState(detectionEvents[0]);
  const [currentLog, setCurrentLog] = useState(missionLogs[0]);
  const [timestamp, setTimestamp] = useState(new Date());
  const [isCalibrating, setIsCalibrating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlightData(generateFlightData());
      setSystemHealth(generateSystemHealth());
      setAiPerception(generateAIPerception());
      setTimestamp(new Date());
    }, 800);

    const detectionInterval = setInterval(() => {
      setCurrentDetection(detectionEvents[Math.floor(Math.random() * detectionEvents.length)]);
    }, 3000);

    const logInterval = setInterval(() => {
      setCurrentLog(missionLogs[Math.floor(Math.random() * missionLogs.length)]);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearInterval(detectionInterval);
      clearInterval(logInterval);
    };
  }, []);

  const handleRecalibrate = () => {
    setIsCalibrating(true);
    setTimeout(() => setIsCalibrating(false), 2000);
  };

  return (
    <section className="py-16 bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-green-400 font-mono text-xs uppercase tracking-wider">Live Telemetry Feed</span>
            </div>
            <h3 className="text-2xl font-bold text-white">GHOSTHAWK-01 // Active Mission</h3>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-xs text-zinc-500 uppercase">Mission Time</div>
              <div className="font-mono text-cyan-400">{timestamp.toISOString().split('T')[1].split('.')[0]} UTC</div>
            </div>
            <button 
              onClick={handleRecalibrate}
              disabled={isCalibrating}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider border transition-all ${
                isCalibrating 
                  ? 'border-amber-500 text-amber-400 animate-pulse' 
                  : 'border-zinc-700 text-zinc-400 hover:border-cyan-500 hover:text-cyan-400'
              }`}
            >
              {isCalibrating ? 'Calibrating...' : 'Recalibrate'}
            </button>
          </div>
        </div>

        {/* Telemetry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Flight Dynamics */}
          <div className="bg-zinc-950 border border-zinc-800 p-4">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-4 flex items-center justify-between">
              <span>Flight Dynamics</span>
              <svg className="w-4 h-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-zinc-400 text-sm">Altitude</span>
                <span className="font-mono text-white">{flightData.altitude.toLocaleString()}m</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400 text-sm">Speed</span>
                <span className="font-mono text-white">{flightData.speed} m/s</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400 text-sm">Heading</span>
                <span className="font-mono text-white">{flightData.heading}°</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400 text-sm">Pitch/Roll</span>
                <span className="font-mono text-white">{flightData.pitch}° / {flightData.roll}°</span>
              </div>
            </div>
          </div>

          {/* System Health */}
          <div className="bg-zinc-950 border border-zinc-800 p-4">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-4 flex items-center justify-between">
              <span>System Health</span>
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-zinc-400 text-sm">Battery</span>
                  <span className="font-mono text-white">{systemHealth.battery}%</span>
                </div>
                <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-500 to-cyan-500 transition-all duration-300"
                    style={{ width: `${systemHealth.battery}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400 text-sm">Motor Temp</span>
                <span className={`font-mono ${systemHealth.motorTemp > 50 ? 'text-amber-400' : 'text-white'}`}>
                  {systemHealth.motorTemp}°C
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400 text-sm">Signal</span>
                <span className="font-mono text-white">{systemHealth.signalStrength}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400 text-sm">CPU Load</span>
                <span className="font-mono text-white">{systemHealth.cpuLoad}%</span>
              </div>
            </div>
          </div>

          {/* AI Perception */}
          <div className="bg-zinc-950 border border-zinc-800 p-4">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-4 flex items-center justify-between">
              <span>AI Perception</span>
              <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-zinc-400 text-sm">Objects Tracked</span>
                <span className="font-mono text-white">{aiPerception.objectCount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400 text-sm">Avg Confidence</span>
                <span className="font-mono text-cyan-400">{aiPerception.confidence}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400 text-sm">Active Threats</span>
                <span className={`font-mono ${aiPerception.threats > 0 ? 'text-red-400' : 'text-green-400'}`}>
                  {aiPerception.threats}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400 text-sm">Processing</span>
                <span className="font-mono text-white">{aiPerception.processing}ms</span>
              </div>
            </div>
          </div>

          {/* Latest Detection */}
          <div className="bg-zinc-950 border border-zinc-800 p-4">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-4 flex items-center justify-between">
              <span>Latest Detection</span>
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-ping"></div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-zinc-400 text-sm">Type</span>
                <span className="font-mono text-amber-400">{currentDetection.type}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400 text-sm">Classification</span>
                <span className="font-mono text-white text-xs">{currentDetection.class}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400 text-sm">Confidence</span>
                <span className="font-mono text-cyan-400">{currentDetection.conf}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400 text-sm">Grid Ref</span>
                <span className="font-mono text-white">{currentDetection.grid}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Log */}
        <div className="bg-zinc-950 border border-zinc-800 p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Mission Log // Nexus OS Intent-to-Task</span>
            <span className="text-xs font-mono text-zinc-600">{timestamp.toISOString()}</span>
          </div>
          <div className="font-mono text-sm text-zinc-300 flex items-center gap-2">
            <span className="text-cyan-500">[NEXUS]</span>
            <span className={isCalibrating ? 'opacity-50' : ''}>{currentLog}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
