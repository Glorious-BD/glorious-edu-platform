"use client";

import { useState, useEffect } from "react";
import { Clock, ShieldAlert, CheckCircle, Award } from "lucide-react";

interface ExamQuestion {
  id: string;
  text: string;
  options: string[];
  points: number;
}

const PRACTICE_EXAM_QUESTIONS: ExamQuestion[] = [
  {
    id: "Q1",
    text: "Which of the following elements has the highest electronegativity on the Pauling scale?",
    options: ["Fluorine (F)", "Oxygen (O)", "Chlorine (Cl)", "Nitrogen (N)"],
    points: 1,
  },
  {
    id: "Q2",
    text: "What is the primary product of the reaction between an alkene and hydrogen bromide (HBr) under peroxide conditions?",
    options: ["Markovnikov Bromide", "Anti-Markovnikov Bromide", "Vicinal Dibromide", "Alkyne"],
    points: 1,
  },
];

export default function OnlineExamPage() {
  const [examStarted, setExamStarted] = useState(false);
  const [examCompleted, setExamCompleted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [timeLeft, setTimeLeft] = useState<number>(120); // 120 seconds for demo

  useEffect(() => {
    if (!examStarted || examCompleted || timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [examStarted, examCompleted, timeLeft]);

  // Handle automatic submission on timer depletion
  useEffect(() => {
    if (timeLeft === 0 && examStarted) {
      setExamCompleted(true);
    }
  }, [timeLeft, examStarted]);

  const handleSelectOption = (qId: string, optIdx: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  };

  const handleStartExam = () => {
    setExamStarted(true);
    setTimeLeft(120);
    setExamCompleted(false);
    setSelectedAnswers({});
  };

  const handleFinishExam = () => {
    setExamCompleted(true);
  };

  return (
    <div className="min-h-screen bg-surface py-12">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          
          {!examStarted ? (
            /* Exam Briefing Screen */
            <div className="bg-white border border-border rounded-large p-8 shadow-soft text-center space-y-6">
              <div className="w-16 h-16 bg-secondary/5 text-secondary rounded-full flex items-center justify-center mx-auto">
                <ShieldAlert size={32} />
              </div>
              <h1 className="text-h2 font-extrabold text-primary">Practice Test Terminal</h1>
              <p className="text-body text-primary/70 max-w-md mx-auto">
                This diagnostic test contains standard multiple-choice chemistry questions designed to measure retention.
              </p>
              
              <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto border-y border-border py-4 text-sm font-semibold text-primary/70">
                <div>Total Questions: 2</div>
                <div>Allocated Time: 2 mins</div>
              </div>

              <div className="pt-4">
                <button onClick={handleStartExam} className="btn-premium-primary">
                  Begin Practice Exam
                </button>
              </div>
            </div>
          ) : examCompleted ? (
            /* Exam Results Summary */
            <div className="bg-white border border-border rounded-large p-8 shadow-soft text-center space-y-6">
              <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto">
                <CheckCircle size={32} />
              </div>
              <h2 className="text-h2 font-extrabold text-primary">Exam Completed</h2>
              <p className="text-body text-primary/70 max-w-md mx-auto">
                Your answers have been securely logged. Scores are indexed against class statistics.
              </p>

              <div className="p-4 bg-surface rounded-premium border border-border max-w-xs mx-auto text-sm font-semibold">
                <div className="flex justify-between py-1.5">
                  <span className="text-primary/60">Logged Answers:</span>
                  <span className="text-primary">{Object.keys(selectedAnswers).length}/2</span>
                </div>
                <div className="flex justify-between py-1.5 border-t border-border mt-1.5 pt-1.5">
                  <span className="text-primary/60">Time Expended:</span>
                  <span className="text-primary">{120 - timeLeft}s</span>
                </div>
              </div>

              <div className="pt-4">
                <button onClick={handleStartExam} className="btn-premium-secondary">
                  Re-attempt Exam
                </button>
              </div>
            </div>
          ) : (
            /* Active Exam Console */
            <div className="space-y-6">
              <div className="bg-white border border-border rounded-large p-6 shadow-soft flex items-center justify-between sticky top-[90px] z-20">
                <span className="text-xs font-bold text-primary/40 uppercase tracking-widest">Active Chemistry Session</span>
                <div className="flex items-center gap-2 text-sm font-bold text-danger bg-danger/5 px-3 py-1.5 rounded-premium border border-danger/10">
                  <Clock size={16} /> Timer: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
                </div>
              </div>

              {/* Questions Feed */}
              <div className="space-y-6">
                {PRACTICE_EXAM_QUESTIONS.map((question, qIdx) => (
                  <div key={question.id} className="bg-white border border-border rounded-large p-6 lg:p-8 space-y-4 shadow-soft">
                    <h3 className="font-heading text-base font-bold text-primary leading-snug">
                      <span className="text-secondary mr-1">Q{qIdx + 1}.</span> {question.text}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {question.options.map((option, optIdx) => {
                        const isSelected = selectedAnswers[question.id] === optIdx;
                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleSelectOption(question.id, optIdx)}
                            className={`p-4 text-left text-sm font-semibold rounded-premium border transition-all duration-300 ${
                              isSelected 
                                ? "bg-secondary/5 border-secondary text-secondary" 
                                : "bg-surface hover:bg-surface-muted border-border text-primary/70"
                            }`}
                          >
                            <span className="inline-block w-6 h-6 rounded-full bg-white border border-border text-center leading-6 text-xs mr-3 shrink-0">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* End of Exam submission */}
              <div className="flex justify-end pt-4">
                <button onClick={handleFinishExam} className="btn-premium-gold">
                  Submit Answers
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}