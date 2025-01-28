---
{"dg-publish":true,"permalink":"/notes/signals-and-systems/5-the-discrete-time-fourier-transform/","hide":"true","updated":"2025-01-28T21:55:35.021+01:00"}
---

Jump back to chapter selection: [[Notes/Signals and Systems/Signals and Systems#Table of Contents\|chapter selection]].

---
**Table of Contents**


---
# 5 The discrete-time Fourier transform
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=389&selection=2,0,8,9|•]]


Consider the general sequence $x[n]$ of finite duration, e.g. $x[n]=0$ outride of $\left[-N_{1}, N_{2}\right]$.
Then, the discrete-time Fourier transform is $\tilde{x}\left(e^{i \omega}\right)=\sum_{n} x[n] e^{-i \omega n}$, and then also $\sim^{n}$ "Analysis equation" $x[n]=\frac{1}{2 \pi} \int_{2 \pi} d \omega \cdot \tilde{x}\left(e^{i \omega}\right) e^{i \omega}$. Note, $\tilde{x}\left(e^{i \omega}\right)$ has a period of $2 \pi$.
"Synthesis equation"
Thus, an aperiodic sequence can be thought of as a linear combination of complex exponentials.

---
## 5.1 Convergence issue
The analysis equation will converge either if
1)... $x[n]$ is absolutely summable: $\sum_{n}|x[n]|<\infty$
2)... $x[n]$ has finite energy: $\quad \sum_{n}|x[n]|^{2}<\infty$

The synthesis equation on the other hand will always converge, since the integral is over a finite interval.

---
## 5.2 Fourier transform for periodic signals
Consider the sequence $x[n]$ with periodicity $N$ and Fourier series representation
$x[n]=\sum_{k=\sim N} a_{k} e^{i k \frac{2 \pi}{N} n}$. Then, its Fourier transform is $\tilde{x}\left(e^{i \omega}\right)=\sum_{k} 2 \pi a_{k} \cdot \delta\left(\omega-\frac{2 \pi k}{N}\right)$.

---
## 5.3 Properties of the discrete-time Fourier transform
![](https://cdn.mathpix.com/cropped/2025_01_18_fe980612f9d3f033eaf5g-09.jpg?height=2682&width=1974&top_left_y=198&top_left_x=47)
![](https://cdn.mathpix.com/cropped/2025_01_18_fe980612f9d3f033eaf5g-10.jpg?height=641&width=1955&top_left_y=108&top_left_x=42)

---
