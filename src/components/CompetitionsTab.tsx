import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Clock, Gift, User, Phone, CheckCircle, X, Award } from 'lucide-react';
import { COMPETITIONS_DATA } from '../data';
import { TriviaCompetition } from '../types';

export default function CompetitionsTab() {
  const [selectedComp, setSelectedComp] = useState<TriviaCompetition | null>(null);
  const [submissions, setSubmissions] = useState<Record<string, any>>({});
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Form Fields
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [contactNum, setContactNum] = useState('');
  const [userPrediction, setUserPrediction] = useState('');
  const [formError, setFormError] = useState('');

  const handleEnterClick = (comp: TriviaCompetition) => {
    if (submissions[comp.id]) {
      return; // Already submitted
    }
    setSelectedComp(comp);
    setFormError('');
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormError('');

    // Verification
    if (!fullName.trim() || !dob || !idNumber.trim() || !contactNum.trim() || !userPrediction.trim()) {
      setFormError('All fields are strictly required to register your prediction entry.');
      return;
    }

    // Capture submission
    const newSubmission = {
      fullName,
      dob,
      idNumber,
      contactNum,
      userPrediction,
      submittedAt: new Date().toISOString()
    };

    if (selectedComp) {
      setSubmissions(prev => ({
        ...prev,
        [selectedComp.id]: newSubmission
      }));

      // Trigger success confirmation message
      setSuccessMsg(`Congratulations ${fullName}! Your prediction for "${selectedComp.title}" has been securely logged. Good luck!`);
      
      // Clean states
      setSelectedComp(null);
      setFullName('');
      setDob('');
      setIdNumber('');
      setContactNum('');
      setUserPrediction('');
    }
  };

  return (
    <div id="competitions-container" className="h-full overflow-y-auto px-4 py-4 space-y-4 pb-24">
      <div id="competitions-header" className="mb-2">
        <h2 className="text-xl font-bold text-[#C9A84C] tracking-tight">Predict & Win</h2>
        <p className="text-xs text-gray-400">Answer weekly trivia, predict correct scores, and win premium PSL merchandise</p>
      </div>

      {/* Success Notification Banner */}
      <AnimatePresence>
        {successMsg && (
          <motion.div
            id="success-toast"
            className="p-4 bg-green-500/10 border border-green-500 rounded-xl text-green-400 flex gap-3 shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <CheckCircle className="shrink-0 text-green-500" size={18} />
            <div className="flex-1 text-xs">
              <span className="font-bold text-white block mb-0.5">Entry Submitted Successfully</span>
              <p className="leading-relaxed">{successMsg}</p>
              <button 
                onClick={() => setSuccessMsg(null)}
                className="mt-2 text-[10px] font-black underline tracking-wide cursor-pointer uppercase text-[#C9A84C]"
              >
                Dismiss
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Competitions Card List */}
      <div id="competitions-list" className="space-y-4">
        {COMPETITIONS_DATA.map((comp, idx) => {
          const isSubmitted = !!submissions[comp.id];

          return (
            <motion.div
              key={comp.id}
              id={`comp-card-${comp.id}`}
              className={`bg-[#1A1A2E] rounded-xl p-4 border border-gray-800/60 shadow-md relative overflow-hidden flex flex-col justify-between transition-all ${
                isSubmitted ? 'border-green-500/30 bg-[#1A1A2E]/60' : 'hover:border-[#C9A84C]/25'
              }`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
            >
              {/* Badge Overlay */}
              <div className="absolute right-0 top-0 w-24 h-24 pointer-events-none opacity-5">
                <Trophy className="w-full h-full text-[#C9A84C]" />
              </div>

              {/* Header Title */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-[#8B0000]/30 rounded-lg text-[#C9A84C] border border-[#8B0000]/50">
                    <Trophy size={14} className="text-[#C9A84C]" />
                  </div>
                  <h3 className="text-sm font-extrabold text-white">
                    {comp.title}
                  </h3>
                </div>

                {isSubmitted && (
                  <span className="px-2.5 py-0.5 bg-green-500/10 border border-green-500/30 rounded-full text-[9px] font-bold text-green-400 flex items-center gap-1">
                    <CheckCircle size={10} />
                    Entered
                  </span>
                )}
              </div>

              {/* Contest Prompt */}
              <div className="bg-black/25 rounded-lg p-3 border border-gray-800/40 mb-3.5">
                <span className="text-[9px] font-black text-[#C9A84C] uppercase tracking-wider block mb-1">Weekly Prompt</span>
                <p className="text-xs text-gray-200 font-medium leading-relaxed">
                  {comp.question}
                </p>
              </div>

              {/* Contest Metadata */}
              <div className="space-y-2 border-t border-gray-800/40 pt-3 text-[10px] text-gray-400">
                <div className="flex items-center gap-1.5">
                  <Clock size={12} className="text-[#C9A84C]" />
                  <span>Deadline: <span className="font-bold text-gray-300">{comp.deadline}</span></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Gift size={12} className="text-emerald-500" />
                  <span>Grand Prize: <span className="font-bold text-white">{comp.prize}</span></span>
                </div>
              </div>

              {/* Enter/Action Button */}
              <button
                id={`enter-btn-${comp.id}`}
                onClick={() => handleEnterClick(comp)}
                disabled={isSubmitted}
                className={`w-full mt-4 py-2.5 px-4 rounded-lg font-bold text-xs transition-all tracking-wide flex items-center justify-center gap-1.5 shadow-md ${
                  isSubmitted
                    ? 'bg-gray-800 text-gray-500 border border-gray-750 cursor-not-allowed'
                    : 'bg-[#C9A84C] hover:bg-[#b0913f] text-[#1A1A2E] cursor-pointer shadow-[#C9A84C]/10'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={13} />
                    Submission Secured
                  </>
                ) : (
                  <>
                    <Award size={13} />
                    Enter Competition
                  </>
                )}
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Form Submission Modal Overlay */}
      <AnimatePresence>
        {selectedComp && (
          <motion.div
            id="comp-form-modal"
            className="absolute inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              id="comp-form-container"
              className="bg-[#1A1A2E] w-full max-w-sm rounded-2xl border border-[#C9A84C]/30 flex flex-col shadow-2xl overflow-hidden my-auto"
              initial={{ scale: 0.92, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            >
              {/* Modal Header */}
              <div className="px-4 py-3.5 bg-[#8B0000] border-b border-[#C9A84C]/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Trophy size={16} className="text-[#C9A84C]" />
                  <div className="flex flex-col">
                    <span className="text-[9px] text-[#C9A84C] font-black uppercase tracking-wider">Predict & Win registration</span>
                    <h3 className="text-xs font-black text-white truncate max-w-[210px]">
                      {selectedComp.title}
                    </h3>
                  </div>
                </div>
                <button
                  id="close-comp-modal"
                  onClick={() => setSelectedComp(null)}
                  className="p-1.5 rounded-full bg-black/40 text-gray-300 hover:text-white hover:bg-black/60 transition-colors"
                >
                  <X size={14} />
                </button>
              </div>

              {/* Form Content */}
              <form onSubmit={handleFormSubmit} className="p-4 space-y-4">
                {formError && (
                  <div className="p-2.5 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg text-[11px] font-bold text-center">
                    {formError}
                  </div>
                )}

                <div className="bg-black/30 p-3 rounded-lg border border-gray-800/60">
                  <span className="text-[9px] font-bold text-[#C9A84C] uppercase block mb-1">Trivia Prompt</span>
                  <p className="text-[11px] text-gray-200 font-medium leading-relaxed">
                    {selectedComp.question}
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-gray-300 font-bold block">Full Name</label>
                    <input
                      id="input-fullname"
                      type="text"
                      placeholder="e.g. Tendai Moyo"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#0F0F1A] border border-gray-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                    />
                  </div>

                  {/* DOB and ID Number in Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-gray-300 font-bold block">Date of Birth</label>
                      <input
                        id="input-dob"
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="w-full bg-[#0F0F1A] border border-gray-800 rounded-lg p-2 text-white focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-gray-300 font-bold block">ID/Passport No</label>
                      <input
                        id="input-idnumber"
                        type="text"
                        placeholder="e.g. 59-1234567A00"
                        value={idNumber}
                        onChange={(e) => setIdNumber(e.target.value)}
                        className="w-full bg-[#0F0F1A] border border-gray-800 rounded-lg p-2 text-white focus:outline-none focus:border-[#C9A84C]/50 transition-colors placeholder:text-gray-600"
                      />
                    </div>
                  </div>

                  {/* Contact Number */}
                  <div className="space-y-1">
                    <label className="text-gray-300 font-bold block">Contact Number (WhatsApp)</label>
                    <input
                      id="input-contact"
                      type="tel"
                      placeholder="e.g. +263 77 123 4567"
                      value={contactNum}
                      onChange={(e) => setContactNum(e.target.value)}
                      className="w-full bg-[#0F0F1A] border border-gray-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                    />
                  </div>

                  {/* Prediction/Answer Input */}
                  <div className="space-y-1">
                    <label className="text-gray-300 font-bold block">Your Answer / Prediction</label>
                    <textarea
                      id="input-prediction"
                      rows={2}
                      placeholder="Write your prediction details here..."
                      value={userPrediction}
                      onChange={(e) => setUserPrediction(e.target.value)}
                      className="w-full bg-[#0F0F1A] border border-gray-800 rounded-lg p-2.5 text-white focus:outline-none focus:border-[#C9A84C]/50 transition-colors resize-none placeholder:text-gray-650"
                    />
                  </div>
                </div>

                {/* Form Buttons */}
                <div className="flex items-center gap-2 pt-2">
                  <button
                    id="cancel-comp-form"
                    type="button"
                    onClick={() => setSelectedComp(null)}
                    className="flex-1 py-2 px-3 bg-gray-800 hover:bg-gray-750 rounded-lg text-gray-300 hover:text-white font-semibold transition-colors text-center"
                  >
                    Cancel
                  </button>
                  <button
                    id="submit-comp-form"
                    type="submit"
                    className="flex-1 py-2 px-3 bg-[#C9A84C] hover:bg-[#b0913f] text-[#1A1A2E] font-extrabold rounded-lg transition-colors text-center shadow-md shadow-[#C9A84C]/10"
                  >
                    Submit Entry
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
