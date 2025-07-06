import Container from "./Container";
import { useState } from "react";

export default function Achievements() {
  const [showAll, setShowAll] = useState(false);
  const achievements = [
    { text: "Flew to the Middle East for a month to build an on-prem AI solution running on real government data", date: "Mar 2025" },
    { text: "Joined a stealth AI startup as the 1st engineer building AI agents for F500 companies + governments", date: "Dec 2024" },
    { text: "Worked with Sebastian Thrun and Eric Schmidt on applications of video generation models", date: "May-Aug 2024" },
    { text: "Published a paper in AR + flew to Hawaii to present it at CHI", date: "May 2024" },
    { text: "Spent a semester in SF working on a stealth AI project and flew to Qatar to pitch it", date: "Oct 2024" },
    { text: "Ran a marathon with two weeks notice", date: "Jan 2023" },
    { text: "Backpacked Western Europe with my best friend for a month", date: "Jul-Aug 2023" },
    { text: "Lived in Colombia for 3 months coding and creating content", date: "Jun-Aug 2022" },
    { text: "Grew a TikTok profile to 50k+ followers in 21 days talking about nonfiction books", date: "Aug 2021" },
    { text: "Interned at the Qatar Computing Research Institute researching and building deepfake detection models", date: "May-Jul 2021" },
    { text: "Read a book a week for a year (mostly self-help and \"wantrepreneur\" books)", date: "2020" },
    { text: "Won an applied math competition with 3000+ students", date: "Mar 2020" },
    { text: "Made $1k+ selling fidget spinners from China to people in my school", date: "2017" }
  ];

  return (
    <section className="py-8">
      <Container>
        <h3 className="text-2xl font-bold text-white mb-8 text-center">What have I done? (Me in 10 Seconds)</h3>
        
        <div className="grid gap-4">
          {(() => {
            const sortedAchievements = achievements.sort((a, b) => {
              // Helper function to parse dates into comparable format
              const parseDate = (dateStr: string) => {
                // Handle various date formats
                if (dateStr.includes('-')) {
                  // Handle ranges like "May-Aug 2024" or "Jun-Aug 2022"
                  const parts = dateStr.split(' ');
                  const year = parseInt(parts[parts.length - 1]);
                  const monthRange = parts[0];
                  const endMonth = monthRange.split('-')[1];
                  
                  // Map month abbreviations to numbers
                  const monthMap: { [key: string]: number } = {
                    'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6,
                    'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12
                  };
                  
                  return year * 100 + (monthMap[endMonth] || 0);
                } else if (dateStr.includes(' ')) {
                  // Handle formats like "Mar 2025", "Oct 2024"
                  const [month, year] = dateStr.split(' ');
                  const monthMap: { [key: string]: number } = {
                    'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6,
                    'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12
                  };
                  
                  return parseInt(year) * 100 + (monthMap[month] || 0);
                } else {
                  // Handle year only format like "2020"
                  return parseInt(dateStr) * 100;
                }
              };
              
              return parseDate(b.date) - parseDate(a.date); // Sort descending (newest first)
            });

            const visibleAchievements = sortedAchievements.slice(0, 5);
            const hiddenAchievements = sortedAchievements.slice(5);

            return (
              <>
                {visibleAchievements.map((achievement, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-300 leading-relaxed flex-1">
                {achievement.text.includes("wantrepreneur") ? (
                  <>
                    Read a book a week for a year (mostly self-help and{" "}
                    <a 
                      href="https://en.wiktionary.org/wiki/wantrepreneur" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      "wantrepreneur"
                    </a>
                    {" "}books)
                  </>
                ) : (
                  achievement.text
                )}
              </p>
              <span className="text-sm text-gray-400 font-mono">{achievement.date}</span>
            </div>
                ))}
                
                {hiddenAchievements.length > 0 && (
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      showAll ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="grid gap-4 pt-4">
                      {hiddenAchievements.map((achievement, index) => (
                        <div 
                          key={index + 5}
                          className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 leading-relaxed flex-1">
                            {achievement.text.includes("wantrepreneur") ? (
                              <>
                                Read a book a week for a year (mostly self-help and{" "}
                                <a 
                                  href="https://en.wiktionary.org/wiki/wantrepreneur" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-blue-400 hover:underline"
                                >
                                  "wantrepreneur"
                                </a>
                                {" "}books)
                              </>
                            ) : (
                              achievement.text
                            )}
                          </p>
                          <span className="text-sm text-gray-400 font-mono">{achievement.date}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            );
          })()}
        </div>
        
        {achievements.length > 5 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 
                         rounded-xl px-6 py-3 text-white font-medium transition-all duration-300 
                         backdrop-blur-sm hover:scale-105 active:scale-95"
            >
              <span className="flex items-center gap-2">
                {showAll ? `Show less` : `Show ${achievements.length - 5} more`}
                <span className={`transition-transform duration-300 ${showAll ? 'rotate-180' : 'rotate-0'}`}>
                  ↓
                </span>
              </span>
            </button>
          </div>
        )}
        
        <div className="text-center mt-8">
          <p className="text-gray-400">
            Click{" "}
            <a 
              href="https://krisselberg.github.io/about" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              here
            </a>
            {" "}for Me in 10 Minutes.
          </p>
        </div>
      </Container>
    </section>
  );
}