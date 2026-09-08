"use client";

import React, { useState, useRef, useEffect, FormEvent } from "react";

interface CommandItem {
  cmd: string;
  output: React.ReactNode;
}

export default function TerminalPortfolio() {
  const [activeTab, setActiveTab] = useState<"interactive" | "gui">("interactive");
  const [inputVal, setInputVal] = useState<string>("");
  const [commandHistory, setCommandHistory] = useState<CommandItem[]>([
    {
      cmd: "welcome",
      output: (
        <div className="text-slate-300">
          <p className="text-emerald-400 font-bold">
            Priya Kumari v1.0.0 (Full Stack Developer Shell)[cite: 2]
          </p>
          <p className="mt-1">
            Type <span className="text-cyan-400 font-semibold">&apos;help&apos;</span> to list commands or try <span className="text-amber-400 font-semibold">&apos;vscode&apos;</span> to inspect the extension project[cite: 2].
          </p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [commandHistory]);

  const handleCommand = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = inputVal.trim().toLowerCase();
    let response: React.ReactNode = null;

    switch (trimmed) {
      case "help":
        response = (
          <div className="space-y-1 text-slate-300">
            <p><span className="text-cyan-400 font-semibold">about</span>    - Learn about Priya&apos;s summary &amp; contact details[cite: 2]</p>
            <p><span className="text-cyan-400 font-semibold">skills</span>   - List technical skills, languages &amp; tools[cite: 2]</p>
            <p><span className="text-cyan-400 font-semibold">projects</span> - View all 5 deployed projects[cite: 2]</p>
            <p><span className="text-cyan-400 font-semibold">vscode</span>   - View VS Code Text Color Extension project details[cite: 2]</p>
            <p><span className="text-cyan-400 font-semibold">exp</span>      - See internship experience[cite: 2]</p>
            <p><span className="text-cyan-400 font-semibold">edu</span>      - View education history[cite: 2]</p>
            <p><span className="text-cyan-400 font-semibold">achieve</span>  - View certifications &amp; achievements[cite: 2]</p>
            <p><span className="text-cyan-400 font-semibold">clear</span>    - Clear terminal screen</p>
          </div>
        );
        break;

      case "about":
        response = (
          <div className="text-slate-300 space-y-2">
            <p className="text-emerald-400 font-bold">PRIYA KUMARI[cite: 2]</p>
            <p>
              Full Stack Developer with hands-on experience building responsive, production-grade web applications using React.js, Next.js, Node.js, Express.js, MongoDB, and MySQL[cite: 2]. Contributed frontend development to a Smart India Hackathon civic-tech platform and independently built five projects[cite: 2]. Strong foundation in DSA, OOP, and DBMS[cite: 2].
            </p>
            <p>Location: Mashrak, Saran, Bihar, India[cite: 2]</p>
            <p>Email: <span className="text-cyan-400">nagvaipriya@gmail.com</span> | Phone: +91 76439 55169[cite: 2]</p>
            <p>GitHub: <a href="https://github.com/sripriyaassit" target="_blank" rel="noreferrer" className="text-indigo-400 underline">github.com/sripriyaassit</a>[cite: 2]</p>
          </div>
        );
        break;

      case "skills":
        response = (
          <div className="text-slate-300 space-y-1">
            <p><span className="text-amber-400">Languages:</span> JavaScript, Java, SQL, HTML5, CSS3[cite: 2]</p>
            <p><span className="text-amber-400">Frontend:</span> React.js, Next.js, Tailwind CSS, Responsive Web Design[cite: 2]</p>
            <p><span className="text-amber-400">Backend:</span> Node.js, Express.js, REST APIs, JWT Authentication[cite: 2]</p>
            <p><span className="text-amber-400">Databases:</span> MongoDB, MySQL[cite: 2]</p>
            <p><span className="text-amber-400">Core CS:</span> Data Structures &amp; Algorithms (DSA), Object-Oriented Programming (OOP), DBMS[cite: 2]</p>
            <p><span className="text-amber-400">Tools:</span> Git, GitHub, VS Code, Postman, Vercel[cite: 2]</p>
          </div>
        );
        break;

      case "vscode":
        response = (
          <div className="text-slate-300 space-y-2 border-l-2 border-amber-400 pl-3">
            <p className="text-amber-400 font-bold">VS Code Text Color Extension[cite: 2]</p>
            <p className="text-xs">
              Developed a Visual Studio Code extension using the VS Code Extension API to customize in-editor text color, packaged and published for developer use[cite: 2].
            </p>
            <p className="text-xs text-indigo-400">
              Repository: <a href="https://github.com/sripriyaassit/vs-code-text-color" target="_blank" rel="noreferrer" className="underline">https://github.com/sripriyaassit/vs-code-text-color</a>[cite: 2]
            </p>
          </div>
        );
        break;

      case "projects":
        response = (
          <div className="space-y-3 text-slate-300">
            <div>
              <p className="text-emerald-400 font-bold">1. VS Code Text Color Extension[cite: 2]</p>
              <p className="text-xs text-slate-400">VS Code Extension API | GitHub: https://github.com/sripriyaassit/vs-code-text-color[cite: 2]</p>
            </div>
            <div>
              <p className="text-emerald-400 font-bold">2. Civic Issue Reporting System (Smart India Hackathon)[cite: 2]</p>
              <p className="text-xs text-slate-400">React.js | Vercel | Live: https://frontend-for-civic.vercel.app/[cite: 2]</p>
            </div>
            <div>
              <p className="text-emerald-400 font-bold">3. AI Resume Score Project[cite: 2]</p>
              <p className="text-xs text-slate-400">Full-Stack AI platform using REST APIs | GitHub: https://github.com/sripriyaassit/AI-RESUME-SCORE-PROJECT[cite: 2]</p>
            </div>
            <div>
              <p className="text-emerald-400 font-bold">4. Personal Portfolio Website[cite: 2]</p>
              <p className="text-xs text-slate-400">React.js, Tailwind CSS, GitHub Pages | Live: https://sripriyaassit.github.io/its me/[cite: 2]</p>
            </div>
            <div>
              <p className="text-emerald-400 font-bold">5. Food Delivery Web Application[cite: 2]</p>
              <p className="text-xs text-slate-400">React.js, Dynamic Cart &amp; Navigation | GitHub: https://github.com/sripriyaassit/Food-Delivery[cite: 2]</p>
            </div>
          </div>
        );
        break;

      case "exp":
        response = (
          <div className="text-slate-300 space-y-1">
            <p className="text-emerald-400 font-bold">Frontend Developer Intern @ Placemantra (July 2025)[cite: 2]</p>
            <p className="text-sm">
              Built responsive React.js interfaces for a SIH civic issue reporting platform[cite: 2]. Collaborated via Git/GitHub on component-based architecture[cite: 2]. Earned a Letter of Recommendation[cite: 2].
            </p>
          </div>
        );
        break;

      case "edu":
        response = (
          <div className="text-slate-300 space-y-2">
            <div>
              <p className="text-emerald-400 font-bold">Budge Budge Institute of Technology, Kolkata[cite: 2]</p>
              <p className="text-xs">B.Tech in Computer Science and Engineering (2023 – Present)[cite: 2]</p>
            </div>
            <div>
              <p className="text-emerald-400 font-bold">Mashrak College, Bihar[cite: 2]</p>
              <p className="text-xs">12th Board Science – Score: 82%[cite: 2]</p>
            </div>
            <div>
              <p className="text-emerald-400 font-bold">ACME Public School, Bihar[cite: 2]</p>
              <p className="text-xs">10th Board – Score: 84% (School Topper)[cite: 2]</p>
            </div>
          </div>
        );
        break;

      case "achieve":
        response = (
          <div className="text-slate-300 space-y-1 text-xs">
            <p>• School Topper (Class 10th)[cite: 2]</p>
            <p>• Received Letter of Recommendation from Placemantra[cite: 2]</p>
            <p>• Built and deployed 5 full-stack and frontend projects[cite: 2]</p>
          </div>
        );
        break;

      case "clear":
        setCommandHistory([]);
        setInputVal("");
        return;

      default:
        response = (
          <p className="text-rose-400">
            Command not recognized: &quot;{trimmed}&quot;. Type <span className="text-cyan-400">&apos;help&apos;</span> for commands.
          </p>
        );
    }

    setCommandHistory((prev) => [...prev, { cmd: inputVal, output: response }]);
    setInputVal("");
  };

  return (
    <main className="min-h-screen p-4 md:p-12 flex flex-col items-center justify-center bg-slate-950">
      <div className="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden flex flex-col h-[80vh]">
        
        {/* Top Control Bar */}
        <div className="bg-slate-950 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-rose-500"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="text-xs text-slate-400 ml-2 font-mono">priya@developer:~</span>
          </div>

          <div className="flex space-x-2 text-xs font-sans">
            <button
              onClick={() => setActiveTab("interactive")}
              className={`px-3 py-1 rounded transition ${
                activeTab === "interactive"
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              Terminal
            </button>
            <button
              onClick={() => setActiveTab("gui")}
              className={`px-3 py-1 rounded transition ${
                activeTab === "gui"
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              GUI Cards
            </button>
          </div>
        </div>

        {/* Tab 1: Terminal */}
        {activeTab === "interactive" ? (
          <div className="p-4 flex-1 overflow-y-auto space-y-4 font-mono text-sm">
            {commandHistory.map((item, idx) => (
              <div key={idx} className="space-y-1">
                {item.cmd && (
                  <div className="flex items-center space-x-2 text-slate-400">
                    <span className="text-emerald-400">priya@dev:~$</span>
                    <span className="text-slate-100">{item.cmd}</span>
                  </div>
                )}
                <div className="pl-4">{item.output}</div>
              </div>
            ))}

            <form onSubmit={handleCommand} className="flex items-center space-x-2">
              <span className="text-emerald-400">priya@dev:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="bg-transparent focus:outline-none text-slate-100 flex-1 font-mono"
                placeholder="type 'help'..."
                autoFocus
              />
            </form>
            <div ref={bottomRef} />
          </div>
        ) : (
          /* Tab 2: GUI Dashboard */
          <div className="p-6 flex-1 overflow-y-auto space-y-6 text-slate-200">
            <div className="border-b border-slate-800 pb-4">
              <h1 className="text-2xl font-bold text-indigo-400">Priya Kumari</h1>
              <p className="text-sm text-slate-400">Full Stack Developer | B.Tech CSE (2023–Present)[cite: 2]</p>
              <p className="text-xs text-slate-400 mt-1">Mashrak, Saran, Bihar, India | nagvaipriya@gmail.com | +91 76439 55169[cite: 2]</p>
            </div>

            <div>
              <h2 className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">Key Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-950 border border-amber-500/30 rounded-lg">
                  <h3 className="font-bold text-amber-400">VS Code Text Color Extension[cite: 2]</h3>
                  <p className="text-xs text-slate-400 mt-1">In-editor text color customization using VS Code Extension API[cite: 2].</p>
                  <a href="https://github.com/sripriyaassit/vs-code-text-color" target="_blank" rel="noreferrer" className="text-xs text-indigo-400 mt-2 inline-block">GitHub ↗[cite: 2]</a>
                </div>
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg">
                  <h3 className="font-bold text-slate-100">Civic Issue Reporting System[cite: 2]</h3>
                  <p className="text-xs text-slate-400 mt-1">Smart India Hackathon civic platform[cite: 2].</p>
                  <a href="https://frontend-for-civic.vercel.app/" target="_blank" rel="noreferrer" className="text-xs text-indigo-400 mt-2 inline-block">Live App ↗[cite: 2]</a>
                </div>
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg">
                  <h3 className="font-bold text-slate-100">AI Resume Score Project[cite: 2]</h3>
                  <p className="text-xs text-slate-400 mt-1">REST API powered full-stack resume analyzer[cite: 2].</p>
                  <a href="https://github.com/sripriyaassit/AI-RESUME-SCORE-PROJECT" target="_blank" rel="noreferrer" className="text-xs text-indigo-400 mt-2 inline-block">GitHub ↗[cite: 2]</a>
                </div>
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg">
                  <h3 className="font-bold text-slate-100">Food Delivery Web Application[cite: 2]</h3>
                  <p className="text-xs text-slate-400 mt-1">React.js web app with menu, cart, and navigation[cite: 2].</p>
                  <a href="https://github.com/sripriyaassit/Food-Delivery" target="_blank" rel="noreferrer" className="text-xs text-indigo-400 mt-2 inline-block">GitHub ↗[cite: 2]</a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">Experience &amp; Education</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg space-y-1">
                  <span className="font-bold text-indigo-300">Placemantra – Frontend Intern[cite: 2]</span>
                  <p className="text-slate-400">July 2025 | Remote[cite: 2]</p>
                  <p className="text-slate-300 mt-1">Built SIH UI platform components. Received Letter of Recommendation[cite: 2].</p>
                </div>
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg space-y-1 text-slate-300">
                  <p>• <strong>Budge Budge Institute of Tech:</strong> B.Tech CSE[cite: 2]</p>
                  <p>• <strong>Mashrak College:</strong> 12th Board Science (82%)[cite: 2]</p>
                  <p>• <strong>ACME Public School:</strong> 10th Board (84%)[cite: 2]</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}