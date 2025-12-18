export default function Integration() {
    return (
        <section id="integrations" className="bg-background py-16 sm:py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl text-foreground mb-4">2-Line Integration</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Add the chat widget to any website in minutes. Works with React, Vue, Angular, or plain HTML.</p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
                        <div className="mb-4 flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Add to your website</span>
                            <button className="text-sm text-primary hover:underline">Copy Code</button>
                        </div>
                        <pre className="bg-muted/50 rounded-lg p-4 overflow-x-auto">
                          <code className="text-sm text-foreground">
                            {`<!-- Add before </body> --> 
<script src="https://echo-widget-rust.vercel.app/widget.js" data-organization-id="Your org id"></script>`}
                          </code>
                        </pre>
                    </div>
                    <div className="mt-8 grid sm:grid-cols-3 gap-4">
                        <div className="bg-card border border-border rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">{`< 50KB`}</div>
                            <p className="text-sm text-muted-foreground">Lightweight widget</p>
                        </div>
                        <div className="bg-card border border-border rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">{`2 min`}</div>
                            <p className="text-sm text-muted-foreground">Setup time</p>
                        </div>
                        <div className="bg-card border border-border rounded-xl p-4 text-center">
                            <div className="text-3xl font-bold text-primary mb-2 font-poppins">{`100%`}</div>
                            <p className="text-sm text-muted-foreground">Customizable</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}