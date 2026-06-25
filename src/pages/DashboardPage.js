import { Button } from "../components/Button.js";
import { Card } from "../components/Card.js";
import { Container } from "../components/Container.js";

export function DashboardPage() {
  return `
        <main class="min-h-screen bg-slate-100 py-8">
            
            ${Container(`
                <div class="space-y-6">

                    <h1 class="text-4x1 font-bold>
                        SaaS Dashboard
                    </h1>

                    ${Card(`
                        <h2 class="tet-xl font-semibold mb-4">
                            Welcome
                        </h2>
                    

                    ${Button({
                      label: "Get Started",
                    })}
                    `)}
                </div>

                `)}

        </main>
    `;
}
