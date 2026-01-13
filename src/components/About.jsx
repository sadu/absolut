import React, { useState, useEffect, useCallback, useMemo } from 'react';

// Network Node Component with hover interactions
const NetworkNode = ({ x, y, size, color, delay, isActive, onClick, id, label }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <g 
      className="cursor-pointer transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(id)}
    >
      {/* Subtle breathing outer ring */}
      {isActive && (
        <circle
          cx={x}
          cy={y}
          r={size * 1.8}
          fill="none"
          stroke={color}
          strokeWidth="1"
          opacity="0.3"
        >
          <animate
            attributeName="r"
            values={`${size * 1.5};${size * 2};${size * 1.5}`}
            dur="2.5s"
            repeatCount="indefinite"
            begin={`${delay}ms`}
          />
          <animate
            attributeName="opacity"
            values="0.3;0.15;0.3"
            dur="2.5s"
            repeatCount="indefinite"
            begin={`${delay}ms`}
          />
        </circle>
      )}
      {/* Middle ring - static glow */}
      <circle
        cx={x}
        cy={y}
        r={isHovered ? size * 1.6 : size * 1.3}
        fill={color}
        opacity={isActive ? 0.15 : 0.08}
        className="transition-all duration-300"
      />
      {/* Core node */}
      <circle
        cx={x}
        cy={y}
        r={isHovered ? size * 1.2 : size}
        fill={color}
        className="transition-all duration-300"
        style={{ filter: isActive ? `drop-shadow(0 0 ${size * 0.5}px ${color})` : 'none' }}
      />
      {/* Label on hover */}
      {isHovered && (
        <text
          x={x}
          y={y - size * 2.5}
          textAnchor="middle"
          fill="currentColor"
          className="text-xs font-mono text-zinc-300"
          fontSize="10"
        >
          {label}
        </text>
      )}
    </g>
  );
};

// Animated Connection Line
const ConnectionLine = ({ x1, y1, x2, y2, isActive, threat }) => {
  const color = threat ? '#ef4444' : isActive ? '#06b6d4' : '#52525b';
  
  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth={isActive ? 2 : 1}
        strokeDasharray={threat ? "4 2" : "8 4"}
        opacity={isActive ? 0.8 : 0.3}
        className="transition-all duration-500"
      >
        {isActive && (
          <animate
            attributeName="stroke-dashoffset"
            values="0;-24"
            dur="1s"
            repeatCount="indefinite"
          />
        )}
      </line>
      {/* Data packet animation */}
      {isActive && (
        <circle r="3" fill={color}>
          <animateMotion
            dur="2s"
            repeatCount="indefinite"
            path={`M${x1},${y1} L${x2},${y2}`}
          />
        </circle>
      )}
    </g>
  );
};

// Threat Detection Radar
const ThreatRadar = ({ threats, onThreatClick }) => {
  const [rotation, setRotation] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev - 2 + 360) % 360);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Radar circles */}
        {[1, 2, 3, 4].map(i => (
          <circle
            key={i}
            cx="100"
            cy="100"
            r={i * 22}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-zinc-700"
            opacity={0.5}
          />
        ))}
        
        {/* Cross lines */}
        <line x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="0.5" className="text-zinc-700" opacity={0.3} />
        <line x1="10" y1="100" x2="190" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-zinc-700" opacity={0.3} />
        
        {/* Radar sweep - subtle trailing glow */}
        <g transform={`rotate(${rotation} 100 100)`}>
          <defs>
            <linearGradient id="sweepGradient" gradientUnits="userSpaceOnUse" x1="100" y1="100" x2="70" y2="40">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Multiple thin arcs for smooth fade effect */}
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="100"
              x2={100 + 88 * Math.sin((i * 2 * Math.PI) / 180)}
              y2={100 - 88 * Math.cos((i * 2 * Math.PI) / 180)}
              stroke="#06b6d4"
              strokeWidth="1"
              opacity={0.12 - i * 0.01}
            />
          ))}
          {/* Main sweep line */}
          <line x1="100" y1="100" x2="100" y2="12" stroke="#06b6d4" strokeWidth="1.5" opacity="0.8" />
        </g>
        
        {/* Threat blips */}
        {threats.map((threat, i) => {
          const cx = 100 + threat.distance * Math.cos((threat.angle * Math.PI) / 180);
          const cy = 100 + threat.distance * Math.sin((threat.angle * Math.PI) / 180);
          const baseRadius = threat.severity === 'high' ? 6 : threat.severity === 'medium' ? 4 : 3;
          const color = threat.severity === 'high' ? '#ef4444' : threat.severity === 'medium' ? '#f59e0b' : '#22c55e';
          
          return (
            <g key={i} onClick={() => onThreatClick(threat)} className="cursor-pointer">
              {/* Core blip */}
              <circle
                cx={cx}
                cy={cy}
                r={baseRadius}
                fill={color}
              />
              {/* Breathing outer ring */}
              <circle
                cx={cx}
                cy={cy}
                r={baseRadius * 1.8}
                fill="none"
                stroke={color}
                strokeWidth="1"
                opacity="0.25"
              >
                <animate
                  attributeName="r"
                  values={`${baseRadius * 1.6};${baseRadius * 2};${baseRadius * 1.6}`}
                  dur="3s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.25;0.15;0.25"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}
        
        {/* Center point */}
        <circle cx="100" cy="100" r="4" fill="#06b6d4" />
        <circle cx="100" cy="100" r="8" fill="none" stroke="#06b6d4" strokeWidth="1" opacity="0.5" />
      </svg>
    </div>
  );
};

// Real-time Metrics Display
const MetricDisplay = ({ label, value, unit, trend, color = 'cyan' }) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    const target = parseFloat(value);
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setDisplayValue(target);
        clearInterval(timer);
      } else {
        setDisplayValue(current);
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [value]);

  const colorClasses = {
    cyan: 'text-cyan-500 border-cyan-500',
    green: 'text-green-500 border-green-500',
    amber: 'text-amber-500 border-amber-500',
    red: 'text-red-500 border-red-500',
  };

  return (
    <div className="group p-4 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 cursor-default">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">{label}</span>
        {trend && (
          <span className={`text-xs ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
          </span>
        )}
      </div>
      <div className={`text-2xl md:text-3xl font-mono font-bold ${colorClasses[color].split(' ')[0]}`}>
        {typeof value === 'number' ? displayValue.toFixed(value % 1 === 0 ? 0 : 2) : value}
        {unit && <span className="text-sm ml-1 text-zinc-500">{unit}</span>}
      </div>
      <div className={`h-0.5 w-0 group-hover:w-full ${colorClasses[color].split(' ')[0].replace('text', 'bg')} transition-all duration-500 mt-2`}></div>
    </div>
  );
};

// Timeline Event Component
const TimelineEvent = ({ time, event, type, isLatest }) => {
  const typeStyles = {
    detection: 'border-amber-500 bg-amber-500/10',
    neutralized: 'border-green-500 bg-green-500/10',
    alert: 'border-red-500 bg-red-500/10',
    system: 'border-cyan-500 bg-cyan-500/10',
  };

  return (
    <div className={`flex items-start gap-3 p-3 border-l-2 ${typeStyles[type]} ${isLatest ? 'animate-pulse' : ''}`}>
      <div className="text-xs font-mono text-zinc-500 whitespace-nowrap">{time}</div>
      <div className="text-sm text-zinc-700 dark:text-zinc-300">{event}</div>
    </div>
  );
};

export default function About() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [activeConnections, setActiveConnections] = useState([0, 2, 4]);
  const [selectedThreat, setSelectedThreat] = useState(null);
  const [activeTab, setActiveTab] = useState('network');
  const [systemTime, setSystemTime] = useState(new Date());
  
  // Network nodes configuration
  const nodes = useMemo(() => [
    { id: 'cmd', x: 200, y: 80, size: 8, color: '#06b6d4', label: 'COMMAND-01' },
    { id: 'sat1', x: 350, y: 120, size: 6, color: '#3b82f6', label: 'SAT-UPLINK' },
    { id: 'drone1', x: 120, y: 180, size: 5, color: '#8b5cf6', label: 'UAV-ALPHA' },
    { id: 'drone2', x: 280, y: 220, size: 5, color: '#8b5cf6', label: 'UAV-BETA' },
    { id: 'ground1', x: 80, y: 300, size: 6, color: '#22c55e', label: 'GROUND-STA-1' },
    { id: 'ground2', x: 220, y: 350, size: 6, color: '#22c55e', label: 'GROUND-STA-2' },
    { id: 'sensor1', x: 380, y: 280, size: 4, color: '#f59e0b', label: 'SENSOR-NET' },
    { id: 'relay', x: 300, y: 380, size: 5, color: '#06b6d4', label: 'RELAY-NODE' },
  ], []);

  const connections = useMemo(() => [
    { from: 0, to: 1 }, { from: 0, to: 2 }, { from: 0, to: 3 },
    { from: 1, to: 6 }, { from: 2, to: 4 }, { from: 3, to: 5 },
    { from: 4, to: 5 }, { from: 5, to: 7 }, { from: 6, to: 7 },
  ], []);

  // Simulated threats for radar
  const [threats, setThreats] = useState([
    { id: 1, angle: 45, distance: 60, severity: 'low', type: 'Reconnaissance' },
    { id: 2, angle: 150, distance: 40, severity: 'medium', type: 'Drone Intrusion' },
    { id: 3, angle: 280, distance: 75, severity: 'high', type: 'Cyber Attack Vector' },
  ]);

  const [events, setEvents] = useState([
    { time: '14:32:01', event: 'Perimeter scan completed - All sectors clear', type: 'system' },
    { time: '14:31:45', event: 'Threat vector neutralized - Sector 7', type: 'neutralized' },
    { time: '14:31:12', event: 'Anomaly detected - Analyzing signature', type: 'detection' },
    { time: '14:30:58', event: 'Network node SAT-UPLINK synchronized', type: 'system' },
  ]);

  // Update system time
  useEffect(() => {
    const timer = setInterval(() => {
      setSystemTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate changing active connections
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveConnections(prev => {
        const newConnections = [...prev];
        const randomIndex = Math.floor(Math.random() * connections.length);
        if (newConnections.includes(randomIndex)) {
          return newConnections.filter(c => c !== randomIndex);
        } else {
          return [...newConnections.slice(-3), randomIndex];
        }
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [connections.length]);

  // Simulate threat updates
  useEffect(() => {
    const interval = setInterval(() => {
      setThreats(prev => prev.map(threat => ({
        ...threat,
        angle: (threat.angle + (Math.random() * 4 - 2)) % 360,
        distance: Math.max(20, Math.min(85, threat.distance + (Math.random() * 6 - 3))),
      })));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Add new events periodically
  useEffect(() => {
    const eventTypes = [
      { event: 'Autonomous patrol completed - Zone Alpha', type: 'system' },
      { event: 'Signal analysis complete - No threats detected', type: 'system' },
      { event: 'Firmware update pushed to drone fleet', type: 'system' },
      { event: 'Suspicious activity flagged - Under review', type: 'detection' },
    ];
    
    const interval = setInterval(() => {
      const randomEvent = eventTypes[Math.floor(Math.random() * eventTypes.length)];
      const time = new Date().toLocaleTimeString('en-US', { hour12: false });
      setEvents(prev => [{ time, ...randomEvent }, ...prev.slice(0, 4)]);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  const handleNodeClick = useCallback((id) => {
    setSelectedNode(prev => prev === id ? null : id);
  }, []);

  const handleThreatClick = useCallback((threat) => {
    setSelectedThreat(threat);
  }, []);

  return (
    <section id="company" className="py-24 bg-white dark:bg-zinc-950 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-zinc-100/50 to-transparent dark:from-zinc-900/30 dark:to-transparent skew-x-12 transform origin-bottom translate-x-32 pointer-events-none"></div>
      
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1.5 border-l-2 border-cyan-500 bg-zinc-100 dark:bg-zinc-900/50">
            <span className="text-zinc-600 dark:text-zinc-400 font-mono text-xs tracking-wider uppercase">Mission Briefing // Classified</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-zinc-900 dark:text-zinc-50 tracking-tight">
            REDEFINING <span className="text-cyan-600 dark:text-cyan-500">DETERRENCE</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Pioneering the convergence of artificial intelligence, autonomous systems, and next-generation defense infrastructure.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          
          {/* Left Column - Company Details */}
          <div className="space-y-8">
            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-cyan-500"></span>
                Our Foundation
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Absolut Defense Systems was established on the principle that <span className="text-zinc-900 dark:text-zinc-200 font-semibold">autonomous systems</span> represent 
                the inevitable evolution of modern defense. Our founders—veterans of both Silicon Valley's fastest-moving companies and the nation's 
                most demanding defense programs—recognized a critical gap: the traditional defense industry's decades-long development cycles could 
                not keep pace with rapidly evolving threats.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We bridge this gap by combining <span className="text-zinc-900 dark:text-zinc-200 font-semibold">commercial-grade speed</span> with 
                <span className="text-zinc-900 dark:text-zinc-200 font-semibold"> defense-grade reliability</span>. Our software-defined approach means 
                our platforms can receive capability upgrades in hours, not years—adapting to new threat signatures in real-time through 
                over-the-air updates that would take traditional primes months to certify.
              </p>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-cyan-500"></span>
                Core Philosophy
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Our engineering-first culture rejects the conventional wisdom that defense systems must be static. Every platform we build 
                is designed as a <span className="text-zinc-900 dark:text-zinc-200 font-semibold">learning system</span>—continuously ingesting 
                operational data, refining threat models, and autonomously optimizing response protocols. This creates a compounding advantage: 
                the longer our systems operate, the more effective they become.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We maintain a relentless focus on what we call the <span className="text-cyan-600 dark:text-cyan-400 font-semibold">"20ms imperative"</span>—the 
                understanding that in modern conflict, decisions must be made faster than human reaction time allows. Our AI cores 
                process sensor fusion, threat assessment, and response optimization in under 20 milliseconds, enabling truly autonomous 
                defensive operations.
              </p>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-cyan-500"></span>
                Strategic Capabilities
              </h3>
              <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">▸</span>
                  <span><strong className="text-zinc-900 dark:text-zinc-200">Multi-Domain Autonomy:</strong> Coordinated operations across air, ground, sea, and cyber domains with unified command protocols.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">▸</span>
                  <span><strong className="text-zinc-900 dark:text-zinc-200">Edge Intelligence:</strong> AI inference runs locally on each platform, enabling operation in GPS-denied and communications-degraded environments.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">▸</span>
                  <span><strong className="text-zinc-900 dark:text-zinc-200">Mesh Resilience:</strong> Self-healing network topology with no single point of failure. Loss of any node triggers automatic redistribution.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">▸</span>
                  <span><strong className="text-zinc-900 dark:text-zinc-200">Threat Prediction:</strong> Machine learning models trained on petabytes of historical data predict adversary behavior with 94.7% accuracy.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Interactive Visualization */}
          <div className="space-y-6">
            {/* Visualization Tabs */}
            <div className="flex border-b border-zinc-200 dark:border-zinc-800">
              {['network', 'radar', 'timeline'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-mono uppercase tracking-wider transition-all duration-300 border-b-2 -mb-px ${
                    activeTab === tab 
                      ? 'text-cyan-500 border-cyan-500' 
                      : 'text-zinc-500 border-transparent hover:text-zinc-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
              <div className="ml-auto text-xs font-mono text-zinc-500 self-center">
                {systemTime.toLocaleTimeString('en-US', { hour12: false })} UTC
              </div>
            </div>

            {/* Network Visualization */}
            {activeTab === 'network' && (
              <div className="aspect-square rounded-sm border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                
                <svg viewBox="0 0 450 450" className="w-full h-full relative z-10">
                  {/* Connection lines */}
                  {connections.map((conn, i) => (
                    <ConnectionLine
                      key={i}
                      x1={nodes[conn.from].x}
                      y1={nodes[conn.from].y}
                      x2={nodes[conn.to].x}
                      y2={nodes[conn.to].y}
                      isActive={activeConnections.includes(i)}
                      threat={false}
                    />
                  ))}
                  
                  {/* Network nodes */}
                  {nodes.map((node, i) => (
                    <NetworkNode
                      key={node.id}
                      {...node}
                      delay={i * 200}
                      isActive={selectedNode === node.id || activeConnections.some(c => 
                        connections[c]?.from === i || connections[c]?.to === i
                      )}
                      onClick={handleNodeClick}
                    />
                  ))}
                </svg>

                {/* Selected node info panel */}
                {selectedNode && (
                  <div className="absolute top-4 left-4 bg-zinc-900/95 text-white p-4 text-xs font-mono max-w-[220px] border-l-2 border-cyan-500 backdrop-blur-sm">
                    <div className="mb-2 text-cyan-400 font-bold">NODE: {selectedNode.toUpperCase()}</div>
                    <div className="space-y-1 opacity-80">
                      <div className="flex justify-between"><span>STATUS:</span><span className="text-green-400">ONLINE</span></div>
                      <div className="flex justify-between"><span>LATENCY:</span><span>{(Math.random() * 20 + 5).toFixed(1)}ms</span></div>
                      <div className="flex justify-between"><span>BANDWIDTH:</span><span>{(Math.random() * 500 + 200).toFixed(0)} Mbps</span></div>
                      <div className="flex justify-between"><span>UPTIME:</span><span>99.{Math.floor(Math.random() * 9) + 90}%</span></div>
                    </div>
                  </div>
                )}

                {/* Telemetry overlay */}
                <div className="absolute bottom-4 right-4 bg-zinc-900/95 text-white p-4 text-xs font-mono max-w-[200px] border-l-2 border-cyan-500 backdrop-blur-sm">
                  <div className="mb-2 text-cyan-400 font-bold">LIVE TELEMETRY</div>
                  <div className="space-y-1 opacity-80">
                    <div className="flex justify-between"><span>NODES_ACTIVE:</span><span>{nodes.length}</span></div>
                    <div className="flex justify-between"><span>CONNECTIONS:</span><span>{activeConnections.length}/{connections.length}</span></div>
                    <div className="flex justify-between"><span>MESH_HEALTH:</span><span className="text-green-400">OPTIMAL</span></div>
                  </div>
                </div>
              </div>
            )}

            {/* Radar Visualization */}
            {activeTab === 'radar' && (
              <div className="aspect-square rounded-sm border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 relative overflow-hidden">
                <ThreatRadar threats={threats} onThreatClick={handleThreatClick} />
                
                {/* Threat details panel */}
                {selectedThreat && (
                  <div className="absolute top-4 left-4 bg-zinc-900/95 text-white p-4 text-xs font-mono max-w-[220px] border-l-2 border-red-500 backdrop-blur-sm">
                    <div className="mb-2 text-red-400 font-bold">THREAT ANALYSIS</div>
                    <div className="space-y-1 opacity-80">
                      <div className="flex justify-between"><span>TYPE:</span><span>{selectedThreat.type}</span></div>
                      <div className="flex justify-between"><span>SEVERITY:</span><span className={
                        selectedThreat.severity === 'high' ? 'text-red-400' : 
                        selectedThreat.severity === 'medium' ? 'text-amber-400' : 'text-green-400'
                      }>{selectedThreat.severity.toUpperCase()}</span></div>
                      <div className="flex justify-between"><span>DISTANCE:</span><span>{selectedThreat.distance.toFixed(0)} km</span></div>
                      <div className="flex justify-between"><span>BEARING:</span><span>{selectedThreat.angle.toFixed(0)}°</span></div>
                    </div>
                    <button 
                      onClick={() => setSelectedThreat(null)}
                      className="mt-3 w-full py-1 bg-red-500/20 border border-red-500/50 text-red-400 hover:bg-red-500/30 transition-colors"
                    >
                      DISMISS
                    </button>
                  </div>
                )}

                {/* Legend */}
                <div className="absolute bottom-4 right-4 bg-zinc-900/95 text-white p-3 text-xs font-mono border-l-2 border-cyan-500 backdrop-blur-sm">
                  <div className="mb-2 text-cyan-400 font-bold">THREAT LEGEND</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-500"></span><span>High Severity</span></div>
                    <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span><span>Medium Severity</span></div>
                    <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span><span>Low Severity</span></div>
                  </div>
                </div>
              </div>
            )}

            {/* Timeline View */}
            {activeTab === 'timeline' && (
              <div className="aspect-square rounded-sm border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 relative overflow-hidden p-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-500">Event Log</span>
                  <span className="text-xs font-mono text-zinc-500">Live Feed</span>
                </div>
                <div className="space-y-2 overflow-y-auto max-h-[calc(100%-3rem)]">
                  {events.map((event, i) => (
                    <TimelineEvent 
                      key={i} 
                      {...event} 
                      isLatest={i === 0}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Operational Metrics</h3>
            <p className="text-sm text-zinc-500">Real-time performance indicators across global deployments</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricDisplay label="Systems Deployed" value={458} trend={12} color="cyan" />
            <MetricDisplay label="Contract Value" value="2.4" unit="B" trend={8} color="green" />
            <MetricDisplay label="Response Time" value={0.02} unit="s" trend={-15} color="cyan" />
            <MetricDisplay label="Network Uptime" value={99.99} unit="%" color="green" />
            <MetricDisplay label="Threats Neutralized" value={12847} trend={23} color="amber" />
            <MetricDisplay label="AI Accuracy" value={94.7} unit="%" trend={3} color="cyan" />
            <MetricDisplay label="Active Nodes" value={342} trend={5} color="green" />
            <MetricDisplay label="Data Processed" value={847} unit="TB" trend={45} color="cyan" />
          </div>
        </div>

        {/* Company Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 group">
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-cyan-500/10 border border-cyan-500/30 group-hover:bg-cyan-500/20 transition-colors">
              <svg className="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">Speed of Innovation</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We operate on commercial timelines, not government fiscal years. Our agile development cycles deliver 
              production-ready capabilities in months, not decades. When threats evolve, so do we—immediately.
            </p>
          </div>

          <div className="p-6 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 group">
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-cyan-500/10 border border-cyan-500/30 group-hover:bg-cyan-500/20 transition-colors">
              <svg className="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">Defense-Grade Reliability</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Commercial speed never compromises mission assurance. Every system undergoes rigorous testing—thermal cycling, 
              electromagnetic hardening, and adversarial AI attacks—before deployment to the field.
            </p>
          </div>

          <div className="p-6 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 group">
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-cyan-500/10 border border-cyan-500/30 group-hover:bg-cyan-500/20 transition-colors">
              <svg className="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">Global Operational Reach</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Our systems operate across six continents, from Arctic installations to equatorial deployments. 
              24/7 support from distributed operations centers ensures continuous mission capability worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
