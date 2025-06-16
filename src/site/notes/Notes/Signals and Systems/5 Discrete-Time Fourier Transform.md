---
{"dg-publish":true,"permalink":"/notes/signals-and-systems/5-discrete-time-fourier-transform/","hide":"true","updated":"2025-05-30T20:32:50.000+02:00"}
---

Jump back to ==[[Notes/Signals and Systems/Signals and Systems#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/Signals and Systems/5 Discrete-Time Fourier Transform#5.1 Representation of Aperiodic Signals: The Discrete-Time Fourier Transform\|5.1 Representation of Aperiodic Signals: The Discrete-Time Fourier Transform]]
[[Notes/Signals and Systems/5 Discrete-Time Fourier Transform#5.2 The Fourier Transform for Periodic Signals\|5.2 The Fourier Transform for Periodic Signals]]
[[Notes/Signals and Systems/5 Discrete-Time Fourier Transform#5.3 Properties of the Discrete-Time Fourier Transform\|5.3 Properties of the Discrete-Time Fourier Transform]]
[[Notes/Signals and Systems/5 Discrete-Time Fourier Transform#5.4 Duality Between the Discrete-Time and Continuous-Time Fourier Transform\|5.4 Duality Between the Discrete-Time and Continuous-Time Fourier Transform]]

---
# 5 Discrete-Time Fourier Transform
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=389&selection=2,0,8,9| ]]

---
## 5.1 Representation of Aperiodic Signals: The Discrete-Time Fourier Transform
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=390&selection=24,0,40,9| ]]

Consider a general aperiodic sequence $x[n]$. For heuristic derivation, we can initially imagine $x[n]$ as being of finite duration, such that $x[n] = 0$ outside some range, for instance $N_1 \le n \le N_2$. From this aperiodic signal, we can construct a periodic signal $\tilde{x}[n]$ by repeating $x[n]$ with a period $N > (N_2-N_1+1)$, so that the original $x[n]$ (padded with zeros to length $N$ if necessary) forms one period of $\tilde{x}[n]$:

![Attachments/Oppenheim,Willsky_Signals and Systems 20.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%2020.webp)
![Attachments/Oppenheim,Willsky_Signals and Systems 21.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%2021.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=390&rect=141,92,456,171| ]]

As we increase the period $N \to \infty$, the periodic signal $\tilde{x}[n]$ becomes identical to the aperiodic signal $x[n]$ for all $n$. By considering the Discrete-Time Fourier Series (DTFS) of $\tilde{x}[n]$ and taking this limit, we can derive the Discrete-Time Fourier Transform (DTFT) pair:
$$
\text{Synthesis (Inverse DTFT): } \quad x[n] = \frac{1}{2\pi} \int_{2\pi} X(e^{i\omega}) e^{i\omega n} d\omega,
$$
$$
\text{Analysis (Forward DTFT): } \quad X(e^{i\omega}) = \sum_{n=-\infty}^{+\infty} x[n] e^{-i\omega n}.
$$
The function $X(e^{i\omega})$ is the Fourier transform of $x[n]$, often called its **spectrum**. A key property of $X(e^{i\omega})$ is that it is always periodic in $\omega$ with period $2\pi$, i.e., $X(e^{i(\omega+2\pi)}) = X(e^{i\omega})$. Consequently, the integral in the synthesis equation can be evaluated over _any_ interval of length $2\pi$, commonly $[0, 2\pi]$ or $[-\pi, \pi]$.

Compared to the [[Notes/Signals and Systems/4 Continuous-Time Fourier Transform\|continuous-time Fourier transform (CTFT)]], where the spectrum $X(i\Omega)$ is generally aperiodic, the discrete-time spectrum $X(e^{i\omega})$ is always periodic. The synthesis integral for DTFT is also over a finite frequency interval, whereas for CTFT it is over an infinite interval. The periodicity of $X(e^{i\omega})$ arises because discrete-time complex exponentials $e^{i\omega n}$ are themselves periodic in $\omega$ with period $2\pi$ (since $e^{i(\omega+2\pi)n} = e^{i\omega n}e^{i2\pi n} = e^{i\omega n}$ for integer $n$).

A consequence of this $2\pi$-periodicity is that frequencies $\omega$ and $\omega+2\pi m$ (for any integer $m$) are indistinguishable for discrete-time signals. Low frequencies (slowly varying signals $x[n]$) correspond to values of $\omega$ near integer multiples of $2\pi$ (for example, $\omega \approx 0, \pm 2\pi, \dots$). High frequencies (rapidly varying signals $x[n]$) correspond to values of $\omega$ near odd multiples of $\pi$ (for example, $\omega \approx \pm\pi, \pm 3\pi, \dots$; $e^{i\pi n} = (-1)^n$ is the most rapidly varying sequence). This behaviour is illustrated below:

![Attachments/Oppenheim,Willsky_Signals and Systems 22.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%2022.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=393&rect=90,213,452,508| ]]

### 5.1.1 Convergence Issues of the Discrete-Time Fourier Transform

The derivation above heuristically assumed a finite-duration $x[n]$. However, the DTFT pair also holds for many signals of infinite duration. For the infinite summation in the analysis equation $X(e^{i\omega}) = \sum_{n=-\infty}^{+\infty} x[n] e^{-i\omega n}$ to converge, $x[n]$ must satisfy certain conditions. Sufficient conditions include:
1.  $x[n]$ is **absolutely summable**:
    $$\sum_{n=-\infty}^{+\infty} |x[n]| < \infty.$$
    If this holds, $X(e^{i\omega})$ converges uniformly to a continuous function of $\omega$.
2.  $x[n]$ has **finite energy** (is square-summable):
    $$\sum_{n=-\infty}^{+\infty} |x[n]|^2 < \infty.$$
    If this holds, $X(e^{i\omega})$ converges in the mean-square sense over one period.

These conditions are analogous to those for the continuous-time Fourier transform. Notably, the inverse transform integral (synthesis equation) always converges if $X(e^{i\omega})$ is a valid DTFT that is, for instance, square-integrable over one period, because the integration is over a finite interval.

---
## 5.2 The Fourier Transform for Periodic Signals
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=398&selection=160,0,170,7| ]]

As in the continuous-time case, the DTFT can be extended to include periodic signals by allowing Dirac impulse functions in the frequency domain representation. Consider a single complex exponential sequence:
$$
x[n] = e^{i\omega_0 n}.
$$
In continuous time, the Fourier transform of $e^{i\omega_0 t}$ is $2\pi\delta(\omega-\omega_0)$. For discrete time, due to the $2\pi$-periodicity of the DTFT spectrum, we expect a periodic train of impulses:
$$
X(e^{i\omega}) = \sum_{l=-\infty}^{+\infty} 2\pi \delta(\omega - \omega_0 - 2\pi l).
$$
This represents impulses at $\omega_0, \omega_0 \pm 2\pi, \omega_0 \pm 4\pi, \dots$.

![Attachments/Oppenheim,Willsky_Signals and Systems 23.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%2023.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=400&rect=47,401,342,491| ]]

To verify, the inverse DTFT over any interval of length $2\pi$ (which will contain exactly one impulse from the train, say at $\omega_0+2\pi r$ for some integer $r$) gives:
$$
\begin{align}
\frac{1}{2\pi} \int_{2\pi} X(e^{i\omega}) e^{i\omega n} d\omega &= \frac{1}{2\pi} \int_{2\pi} \left( \sum_{l=-\infty}^{+\infty} 2\pi \delta(\omega - \omega_0 - 2\pi l) \right) e^{i\omega n} d\omega \\&= e^{i(\omega_0 + 2\pi r)n} = e^{i\omega_0 n}e^{i2\pi rn} = e^{i\omega_0 n}.
\end{align}
$$
Now, consider a general discrete-time periodic sequence $x[n]$ with fundamental period $N$. Its Discrete-Time Fourier Series (DTFS) representation is:
$$
x[n] = \sum_{k=\langle N \rangle} a_k e^{ik(2\pi/N)n},
$$
where $a_k$ are the DTFS coefficients. The DTFT of this periodic signal $x[n]$ is obtained by taking the DTFT of each term in the sum:
$$
X(e^{i\omega}) = \sum_{k=\langle N \rangle} a_k \left( \sum_{l=-\infty}^{+\infty} 2\pi \delta\left(\omega - \frac{2\pi k}{N} - 2\pi l\right) \right).
$$
This can be written more compactly by understanding that the sum over $k$ for $a_k$ can be extended from $-\infty$ to $\infty$ (since $a_k$ are periodic with period $N$) and combined with the sum over $l$:
$$
X(e^{i\omega}) = \sum_{m=-\infty}^{+\infty} 2\pi a_m \delta\left(\omega - \frac{2\pi m}{N}\right),
$$
where it is understood that $a_m$ here refers to the periodically extended sequence of the $N$ unique DTFS coefficients. This shows that the DTFT of a periodic signal is a train of impulses located at the harmonic frequencies $m(2\pi/N)$, with the weight of each impulse proportional to the corresponding DTFS coefficient $a_m$.

---
## 5.3 Properties of the Discrete-Time Fourier Transform
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=403&selection=94,0,106,9| ]]

If $x[n] \stackrel{DTFT}{\longleftrightarrow} X(e^{i\omega})$ and $y[n] \stackrel{DTFT}{\longleftrightarrow} Y(e^{i\omega})$, the DTFT satisfies several useful properties. Note that $X(e^{i\omega})$ and $Y(e^{i\omega})$ are periodic with period $2\pi$.

| Property                           |                                                      Aperiodic Signal $x[n], y[n]$                                                      | Fourier Transform $X(e^{i\omega}), Y(e^{i\omega})$ (periodic with period $2\pi$)                                                                                                                     |
| :--------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Linearity                          |                                                              $ax[n]+by[n]$                                                              | $aX(e^{i\omega})+bY(e^{i\omega})$                                                                                                                                                                    |
| Time Shifting                      |                                                               $x[n-n_0]$                                                                | $e^{-i\omega n_0} X(e^{i\omega})$                                                                                                                                                                    |
| Frequency Shifting (Modulation)    |                                                         $e^{i\omega_0 n} x[n]$                                                          | $X(e^{i(\omega-\omega_0)})$                                                                                                                                                                          |
| Conjugation                        |                                                                $x^*[n]$                                                                 | $X^*(e^{-i\omega})$                                                                                                                                                                                  |
| Time Reversal                      |                                                                 $x[-n]$                                                                 | $X(e^{-i\omega})$                                                                                                                                                                                    |
| Time Expansion (Upsampling)        | $x_{(k)}[n]= \begin{cases}x[n/k], & \text{if } n \text{ is a multiple of } k \\ 0, & \text{otherwise}\end{cases}$ ($k$ is integer $>0$) | $X(e^{ik\omega})$                                                                                                                                                                                    |
| Convolution                        |                                           $x[n] * y[n] = \sum_{m=-\infty}^\infty x[m]y[n-m]$                                            | $X(e^{i\omega}) Y(e^{i\omega})$                                                                                                                                                                      |
| Multiplication                     |                                                               $x[n] y[n]$                                                               | $\frac{1}{2\pi} \int_{2\pi} X(e^{i\theta}) Y(e^{i(\omega-\theta)}) d\theta$ (Periodic Convolution)                                                                                                   |
| Differencing in Time               |                                                              $x[n]-x[n-1]$                                                              | $(1-e^{-i\omega}) X(e^{i\omega})$                                                                                                                                                                    |
| Accumulation (Summation)           |                                                        $\sum_{m=-\infty}^n x[m]$                                                        | $\frac{1}{1-e^{-i\omega}}X(e^{i\omega}) + \pi X(e^{i0}) \sum_{l=-\infty}^{+\infty} \delta(\omega-2\pi l)$ (where $X(e^{i0})=\sum x[n]$)                                                              |
| Differentiation in Frequency       |                                                                 $nx[n]$                                                                 | $i \frac{dX(e^{i\omega})}{d\omega}$                                                                                                                                                                  |
| Conjugate Symmetry for Real $x[n]$ |                                                             $x[n]$ is real                                                              | $X(e^{i\omega})=X^*(e^{-i\omega})$; $\mathfrak{Re}\left[X(e^{i\omega})\right]$ is even, $\mathfrak{Im}\left[X(e^{i\omega})\right]$ is odd; $X(e^{i\omega})$ is even, $\angle X(e^{i\omega})$ is odd. |
| Symmetry for Real and Even $x[n]$  |                                                         $x[n]$ is real and even                                                         | $X(e^{i\omega})$ is real and even.                                                                                                                                                                   |
| Symmetry for Real and Odd $x[n]$   |                                                         $x[n]$ is real and odd                                                          | $X(e^{i\omega})$ is purely imaginary and odd.                                                                                                                                                        |
| Even-Odd Decomp. for Real $x[n]$   |                                      $x_e[n]=\mathcal{E}v\{x[n]\}$, $x_o[n]=\mathcal{O}d\{x[n]\}$                                       | $x_e[n] \leftrightarrow \mathfrak{Re}\left[X(e^{i\omega})\right]$; $x_o[n] \leftrightarrow i\mathfrak{Im}\left[X(e^{i\omega})\right]$                                                                |
| Parseval's Relation                |                                                   $\sum_{n=-\infty}^{+\infty}x[n]^2$                                                    | $\frac{1}{2\pi} \int_{2\pi}X(e^{i\omega})^2 d\omega$                                                                                                                                                 |

Note: The factor of $2\pi$ in Parseval's relation depends on the definition of the DTFT pair; with $1/(2\pi)$ in the inverse transform, this form is correct.

### 5.3.1 Parseval's Relation
For an aperiodic discrete-time signal $x[n]$ and its Fourier transform $X(e^{i\omega})$, Parseval's relation states:
$$
\sum_{n=-\infty}^{+\infty} |x[n]|^2 = \frac{1}{2\pi} \int_{2\pi} \left|X\left(e^{i\omega}\right)\right|^2 d\omega.
$$
This expresses the total energy of the signal $x[n]$ (sum of squared magnitudes) in terms of the integral of its energy-density spectrum $|X(e^{i\omega})|^2$ over one period in the frequency domain. The term $|X(e^{i\omega})|^2$ is called the _energy-density spectrum_ of $x[n]$.

---
## 5.4 Duality
[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=426&selection=8,0,21,30| ]]

A notable duality exists that interrelates the mathematical forms of different Fourier representations. Specifically, there is a strong structural similarity between the Discrete-Time Fourier Transform (DTFT) and the Continuous-Time Fourier Series (CTFS).
The DTFT analysis equation is $X(e^{i\omega}) = \sum_{n=-\infty}^{\infty} x[n]e^{-i\omega n}$. This involves a summation over a discrete variable $n$ and produces a continuous, periodic function of $\omega$.
The CTFS synthesis equation is $x(t) = \sum_{k=-\infty}^{\infty} a_k e^{ik\omega_0 t}$. This involves a summation over a discrete variable $k$ and produces a continuous, periodic function of $t$.
A similar structural correspondence exists between the DTFT synthesis equation (integral over continuous $\omega$ to get discrete $x[n]$) and the CTFS analysis equation (integral over continuous $t$ to get discrete $a_k$). By appropriately interchanging time and frequency variables, and summation with integration, these transform pairs exhibit a formal duality.

![Attachments/Oppenheim,Willsky_Signals and Systems 24.webp|700](/img/user/Attachments/Oppenheim,Willsky_Signals%20and%20Systems%2024.webp)[[Reading/Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=427&rect=45,117,493,263| ]]

---