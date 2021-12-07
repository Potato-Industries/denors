# denors
portable Deno based reverse shell

https://deno.land/

**Cross Compile**

https://deno.land/manual/tools/compiler

```
root@1953260a0bbd:/var/tmp# deno compile --allow-run --allow-net ./denors.ts --target x86_64-unknown-linux-gnu
Check file:///var/tmp/denors.ts
Bundle file:///var/tmp/denors.ts
Compile file:///var/tmp/denors.ts
Emit denors

root@1953260a0bbd:/var/tmp# file denors
denors: ELF 64-bit LSB pie executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, for GNU/Linux 3.2.0, BuildID[xxHash]=9e745bc08590cc72, with debug_info, not stripped
```

Limitations
-Massive binary.. lol
