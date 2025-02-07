---
{"dg-publish":true,"dg-path":"Notes/Signals and Systems","permalink":"/notes/signals-and-systems/","dgShowBacklinks":"false","dgShowLocalGraph":true,"dgShowInlineTitle":true,"dgShowToc":"false","updated":"2025-02-07T10:58:53.000+01:00"}
---

These notes will mostly follow along the book [Signals and Systems - 2nd edition](https://www.amazon.com/Signals-Systems-2nd-Alan-Oppenheim/dp/0138147574) by Alan V. Oppenheim and Alan S. Willsky. 

==[[Notes/Signals and Systems/Signals and Systems#Table of Contents\|Table of Contents]]==

---
While working on my master’s thesis and trying to figure out how to perform accurate noise measurements, I discovered that signal processing is about much more than just Fourier transforming your measured signal. This realisation hit me when we were using a highly sensitive oscilloscope to measure laser noise. After Fourier transforming the data—which was time-consuming and computationally intensive—we noticed something surprising: the noise trace was _still_ too noisy.
Naturally, my first instinct was to Google "how to make noisy data smooth." I quickly learned there are countless ways to tackle this problem. However, I also realised how important it is in signal processing to truly understand _where_ and _how_ the data was obtained in the first place, and how you process it. Sure, applying a moving average might smooth the trace, but should I do that in the time domain or the frequency domain? And what if the issue isn’t the processing at all—what if my measurement setup itself isn’t suited to the task? How could that even be possible when I’m using the best and fastest oscilloscope on the market?
It didn’t take long for me to realise this was a fascinating topic, and I started reading more about it in my free time.

---
# Table of Contents
- [[Notes/Signals and Systems/1 Signals and Systems\|1 Signals and Systems]]
- [[Notes/Signals and Systems/2 Linear Time-Invariant Systems\|2 Linear Time-Invariant Systems]]
- [[Notes/Signals and Systems/3 Fourier Series Representation of Periodic Signals\|3 Fourier Series Representation of Periodic Signals]]
- [[Notes/Signals and Systems/4 Continuous-Time Fourier Transform\|4 Continuous-Time Fourier Transform]]

---