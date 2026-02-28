import React, { useState, useEffect } from 'react';
import { Truck, AlertTriangle, Zap, TrendingDown, MessageCircle, BarChart3, Clock, Fuel, Wrench, DollarSign, ChevronRight, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function FleetGuardDashboard() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [fraudAlerts, setFraudAlerts] = useState([]);
  const [maintenanceAlerts, setMaintenanceAlerts] = useState([]);

  // Simulated fleet data
  const fleetData = [
    {
      id: 1,
      plate: 'AGL 456 KJ',
      driver: 'Chioma Okafor',
      fuelStatus: 'anomaly_detected',
      maintenanceRisk: 'high',
      expectedFuelCost: 25000,
      actualFuelCost: 38000,
      lastMaintenance: '45 days ago',
      predictedBreakdown: '12 days',
      mileage: 145200,
      status: 'active',
    },
    {
      id: 2,
      plate: 'LSG 789 ML',
      driver: 'Adebayo Hassan',
      fuelStatus: 'normal',
      maintenanceRisk: 'medium',
      expectedFuelCost: 22000,
      actualFuelCost: 21500,
      lastMaintenance: '20 days ago',
      predictedBreakdown: 'none',
      mileage: 98700,
      status: 'active',
    },
    {
      id: 3,
      plate: 'ABJ 234 XY',
      driver: 'Fatima Ibrahim',
      fuelStatus: 'anomaly_detected',
      maintenanceRisk: 'critical',
      expectedFuelCost: 24000,
      actualFuelCost: 41000,
      lastMaintenance: '89 days ago',
      predictedBreakdown: '3 days',
      mileage: 267800,
      status: 'active',
    },
    {
      id: 4,
      plate: 'PH 567 BN',
      driver: 'Oluwaseun Adeyemi',
      fuelStatus: 'normal',
      maintenanceRisk: 'low',
      expectedFuelCost: 23000,
      actualFuelCost: 23200,
      lastMaintenance: '10 days ago',
      predictedBreakdown: 'none',
      mileage: 45600,
      status: 'active',
    },
  ];

  // Calculate savings
  const totalSavings = fleetData.reduce((acc, v) => {
    return acc + Math.max(0, v.expectedFuelCost - v.actualFuelCost);
  }, 0);

  const totalLosses = fleetData.reduce((acc, v) => {
    return acc + Math.max(0, v.actualFuelCost - v.expectedFuelCost);
  }, 0);

  const criticalAlerts = fleetData.filter(v => v.maintenanceRisk === 'critical').length;

  const getRiskColor = (risk) => {
    if (risk === 'critical') return 'bg-red-500/10 text-red-600 border-red-200';
    if (risk === 'high') return 'bg-orange-500/10 text-orange-600 border-orange-200';
    if (risk === 'medium') return 'bg-yellow-500/10 text-yellow-600 border-yellow-200';
    return 'bg-green-500/10 text-green-600 border-green-200';
  };

  const getRiskBadge = (risk) => {
    if (risk === 'critical') return { text: 'CRITICAL', bg: 'bg-red-600', icon: '🔴' };
    if (risk === 'high') return { text: 'HIGH', bg: 'bg-orange-600', icon: '🟠' };
    if (risk === 'medium') return { text: 'MEDIUM', bg: 'bg-yellow-600', icon: '🟡' };
    return { text: 'LOW', bg: 'bg-green-600', icon: '🟢' };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-slate-800/50 backdrop-blur-sm sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-white tracking-tight">FleetGuard AI</h1>
                <p className="text-xs text-slate-400">WhatsApp-First Fleet Management</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl">
                <MessageCircle className="w-4 h-4" />
                Connect WhatsApp
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-8">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {/* Active Vehicles */}
            <div className="group relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:via-cyan-500/10 group-hover:to-cyan-500/0 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-slate-400 text-sm font-medium">Active Vehicles</p>
                  <Truck className="w-5 h-5 text-cyan-400" />
                </div>
                <p className="text-3xl font-black text-white">{fleetData.length}</p>
                <p className="text-xs text-slate-500 mt-1">All operational</p>
              </div>
            </div>

            {/* Fuel Fraud Detected */}
            <div className="group relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-xl p-6 hover:border-orange-500/30 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:via-orange-500/10 group-hover:to-orange-500/0 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-slate-400 text-sm font-medium">Fuel Anomalies</p>
                  <AlertTriangle className="w-5 h-5 text-orange-400" />
                </div>
                <p className="text-3xl font-black text-white">{fleetData.filter(v => v.fuelStatus === 'anomaly_detected').length}</p>
                <p className="text-xs text-slate-500 mt-1">₦{totalLosses.toLocaleString()} lost</p>
              </div>
            </div>

            {/* Critical Maintenance */}
            <div className="group relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-red-500/10 group-hover:to-red-500/0 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-slate-400 text-sm font-medium">Maintenance Risk</p>
                  <Wrench className="w-5 h-5 text-red-400" />
                </div>
                <p className="text-3xl font-black text-white">{criticalAlerts}</p>
                <p className="text-xs text-slate-500 mt-1">Need immediate attention</p>
              </div>
            </div>

            {/* Monthly Savings */}
            <div className="group relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-xl p-6 hover:border-green-500/30 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:via-green-500/10 group-hover:to-green-500/0 transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-slate-400 text-sm font-medium">Potential Monthly Savings</p>
                  <TrendingDown className="w-5 h-5 text-green-400" />
                </div>
                <p className="text-3xl font-black text-white">₦{totalSavings.toLocaleString()}</p>
                <p className="text-xs text-slate-500 mt-1">If fraud is stopped</p>
              </div>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Fleet List */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-black text-white">Your Fleet</h2>
                <button className="text-cyan-400 hover:text-cyan-300 text-sm font-bold flex items-center gap-1">
                  View All <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3">
                {fleetData.map((vehicle) => {
                  const fuelLoss = Math.max(0, vehicle.actualFuelCost - vehicle.expectedFuelCost);
                  const riskBadge = getRiskBadge(vehicle.maintenanceRisk);
                  
                  return (
                    <div
                      key={vehicle.id}
                      onClick={() => setSelectedVehicle(vehicle)}
                      className={`group relative rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                        selectedVehicle?.id === vehicle.id
                          ? 'border-cyan-500/50 bg-gradient-to-r from-cyan-500/10 to-blue-500/10'
                          : 'border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50 hover:bg-slate-800/50'
                      }`}
                    >
                      <div className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <p className="text-sm font-black text-white">{vehicle.plate}</p>
                              <span className={`px-2 py-1 rounded text-xs font-bold ${riskBadge.bg} text-white`}>
                                {riskBadge.icon} {riskBadge.text}
                              </span>
                            </div>
                            <p className="text-xs text-slate-400">Driver: {vehicle.driver}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-slate-400">Mileage</p>
                            <p className="text-sm font-bold text-white">{vehicle.mileage.toLocaleString()} km</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                          {/* Fuel Status */}
                          <div className={`rounded-lg p-2.5 ${vehicle.fuelStatus === 'anomaly_detected' ? 'bg-orange-500/10 border border-orange-500/30' : 'bg-slate-700/30 border border-slate-600/30'}`}>
                            <p className="text-xs text-slate-400 mb-1 font-medium">Fuel Status</p>
                            {vehicle.fuelStatus === 'anomaly_detected' ? (
                              <>
                                <p className="text-xs font-bold text-orange-400">Anomaly</p>
                                <p className="text-xs text-orange-400 mt-1">Loss: ₦{fuelLoss.toLocaleString()}</p>
                              </>
                            ) : (
                              <p className="text-xs font-bold text-green-400">Normal</p>
                            )}
                          </div>

                          {/* Maintenance */}
                          <div className="bg-slate-700/30 border border-slate-600/30 rounded-lg p-2.5">
                            <p className="text-xs text-slate-400 mb-1 font-medium">Maintenance</p>
                            <p className="text-xs font-bold text-slate-200">{vehicle.lastMaintenance}</p>
                            {vehicle.predictedBreakdown !== 'none' && (
                              <p className="text-xs text-red-400 mt-1 font-bold">⚠️ In {vehicle.predictedBreakdown}</p>
                            )}
                          </div>

                          {/* Cost Info */}
                          <div className="bg-slate-700/30 border border-slate-600/30 rounded-lg p-2.5">
                            <p className="text-xs text-slate-400 mb-1 font-medium">Fuel Cost</p>
                            <p className="text-xs text-slate-200">Expected: ₦{vehicle.expectedFuelCost.toLocaleString()}</p>
                            <p className={`text-xs font-bold mt-1 ${vehicle.actualFuelCost > vehicle.expectedFuelCost ? 'text-orange-400' : 'text-green-400'}`}>
                              Actual: ₦{vehicle.actualFuelCost.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sidebar - Alerts & Recommendations */}
            <div className="space-y-4">
              {/* Critical Alert Banner */}
              {criticalAlerts > 0 && (
                <div className="bg-gradient-to-br from-red-500/20 to-red-500/5 border border-red-500/30 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-black text-red-200 mb-1">Critical Maintenance Alert</p>
                      <p className="text-xs text-red-300 mb-3">{criticalAlerts} vehicle(s) need immediate service to prevent costly breakdowns.</p>
                      <button className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1">
                        View Details <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Fuel Fraud Alert */}
              {fleetData.some(v => v.fuelStatus === 'anomaly_detected') && (
                <div className="bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/30 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <Fuel className="w-5 h-5 text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-black text-orange-200 mb-1">Fuel Anomalies Detected</p>
                      <p className="text-xs text-orange-300 mb-3">AI detected unusual fuel consumption patterns on {fleetData.filter(v => v.fuelStatus === 'anomaly_detected').length} vehicle(s).</p>
                      <button className="text-xs font-bold text-orange-400 hover:text-orange-300 flex items-center gap-1">
                        Investigate <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* WhatsApp Integration */}
              <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/30 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <MessageCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-black text-green-200 mb-1">WhatsApp Driver Integration</p>
                    <p className="text-xs text-green-300 mb-3">Drivers send fuel receipts & mileage via WhatsApp. AI analyzes automatically. Zero cost, instant setup.</p>
                    <button className="text-xs font-bold text-green-400 hover:text-green-300 flex items-center gap-1">
                      Setup Now <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* AI Insights */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 backdrop-blur-sm">
                <p className="text-sm font-black text-white mb-4">AI Predictions</p>
                <div className="space-y-3">
                  {fleetData
                    .filter(v => v.predictedBreakdown !== 'none')
                    .map((v) => (
                      <div key={v.id} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                        <p className="text-xs font-bold text-slate-200 mb-1">{v.plate}</p>
                        <p className="text-xs text-red-400 font-bold">⚠️ Likely breakdown in {v.predictedBreakdown}</p>
                        <p className="text-xs text-slate-400 mt-1">Engine wear detected. Schedule service soon.</p>
                      </div>
                    ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20 rounded-xl p-4">
                <p className="text-sm font-black text-white mb-3">Pricing</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400">Per Vehicle/Month</span>
                    <span className="text-sm font-bold text-cyan-400">₦5,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400">Setup Fee</span>
                    <span className="text-sm font-bold text-green-400">FREE</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400">Hardware Cost</span>
                    <span className="text-sm font-bold text-green-400">None</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-2 rounded-lg transition-all duration-200 text-sm">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
        
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
