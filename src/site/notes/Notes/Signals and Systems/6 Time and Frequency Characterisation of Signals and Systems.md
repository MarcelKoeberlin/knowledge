---
{"dg-publish":true,"permalink":"/notes/signals-and-systems/6-time-and-frequency-characterisation-of-signals-and-systems/","hide":"true","updated":"2026-06-07T00:00:00.000+02:00"}
---

Jump back to ==[[Notes/Signals and Systems/Signals and Systems#Table of Contents|chapter selection]]==.

---
**Table of Contents**

[[Notes/Signals and Systems/6 Time and Frequency Characterisation of Signals and Systems#6.1 Magnitude and Phase|6.1 Magnitude and Phase]]
[[Notes/Signals and Systems/6 Time and Frequency Characterisation of Signals and Systems#6.2 Frequency Response of LTI Systems|6.2 Frequency Response of LTI Systems]]
[[Notes/Signals and Systems/6 Time and Frequency Characterisation of Signals and Systems#6.3 Linear Phase and Group Delay|6.3 Linear Phase and Group Delay]]
[[Notes/Signals and Systems/6 Time and Frequency Characterisation of Signals and Systems#6.4 Ideal and Nonideal Filters|6.4 Ideal and Nonideal Filters]]
[[Notes/Signals and Systems/6 Time and Frequency Characterisation of Signals and Systems#6.5 First-Order and Second-Order Systems|6.5 First-Order and Second-Order Systems]]

---
# 6 Time and Frequency Characterisation of Signals and Systems
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim%2CWillsky_Signals%20and%20Systems.pdf#page=454)

The Fourier transform gives a complete frequency-domain description of a signal, but it is easy to lose sight of what the separate pieces mean. This chapter connects the magnitude and phase of a transform to the time-domain behaviour of signals and systems. For LTI systems, this is also where filters become more than algebraic transfer functions: their magnitude response shapes amplitudes, while their phase response determines delays and waveform distortion.

---
## 6.1 Magnitude and Phase
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim%2CWillsky_Signals%20and%20Systems.pdf#page=454)

A Fourier transform is generally complex. For continuous time,
$$
X(j\omega)=|X(j\omega)|e^{j\angle X(j\omega)},
$$
and for discrete time,
$$
X(e^{j\omega})=|X(e^{j\omega})|e^{j\angle X(e^{j\omega})}.
$$
The magnitude describes how much of each frequency is present. The phase describes how the frequency components are aligned relative to one another.

The phase is not a decorative part of the spectrum. Two signals can have the same magnitude spectrum and very different time-domain shapes. For example, a phase change can shift a signal in time, make a pulse asymmetric, or smear a transient, even when the spectral magnitude is unchanged.

For real-valued signals, the Fourier transform has conjugate symmetry:
$$
X(-j\omega)=X^*(j\omega),
$$
or in discrete time,
$$
X(e^{-j\omega})=X^*(e^{j\omega}).
$$
Thus the magnitude is even and the phase is odd, apart from phase wrapping by multiples of $2\pi$.

---
## 6.2 Frequency Response of LTI Systems
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim%2CWillsky_Signals%20and%20Systems.pdf#page=458)

For an LTI system with impulse response $h$, the Fourier transform of the impulse response is the frequency response. In continuous time,
$$
Y(j\omega)=H(j\omega)X(j\omega),
$$
and in discrete time,
$$
Y(e^{j\omega})=H(e^{j\omega})X(e^{j\omega}).
$$
This means that each complex exponential is an eigenfunction of the system. The system does not change its frequency, only its complex amplitude:
$$
e^{j\omega t}\rightarrow H(j\omega)e^{j\omega t},
\qquad
e^{j\omega n}\rightarrow H(e^{j\omega})e^{j\omega n}.
$$

The magnitude response $|H|$ tells us the gain applied to each frequency. The phase response $\angle H$ tells us the phase shift applied to each frequency. For a general input made from many frequency components, both matter:
$$
Y(j\omega)=|H(j\omega)||X(j\omega)|
e^{j[\angle H(j\omega)+\angle X(j\omega)]}.
$$
If $|H|$ is flat but $\angle H$ is nonlinear, the output can still be distorted. This is especially important for pulses, images, and communication signals, where waveform shape carries information.

---
## 6.3 Linear Phase and Group Delay
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim%2CWillsky_Signals%20and%20Systems.pdf#page=459)

A system has linear phase over a frequency band if
$$
\angle H(j\omega)=-\omega t_0+\phi_0
$$
or, in discrete time,
$$
\angle H(e^{j\omega})=-\omega n_0+\phi_0.
$$
The term $-\omega t_0$ corresponds to a delay by $t_0$. A constant phase $\phi_0$ can change signs or rotate complex signals, but does not introduce frequency-dependent delay.

The group delay is defined as
$$
\tau_g(\omega)=-\frac{d}{d\omega}\angle H(j\omega)
$$
in continuous time, and
$$
\tau_g(\omega)=-\frac{d}{d\omega}\angle H(e^{j\omega})
$$
in discrete time. For a perfectly linear phase response, $\tau_g$ is constant.

Group delay is the delay experienced by a narrowband packet centred around a given frequency. If different parts of a broadband pulse experience different group delays, the pulse is dispersed. This is the same physical idea that appears in optics as group-delay dispersion, but here it is a general property of LTI systems.

For a real, causal FIR filter with symmetric impulse response
$$
h[n]=h[M-n],
$$
the frequency response has generalized linear phase and the group delay is
$$
\tau_g=\frac{M}{2}
$$
samples, up to possible phase jumps at zeros of the response. This is one of the main reasons symmetric FIR filters are attractive in signal processing.

---
## 6.4 Ideal and Nonideal Filters
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim%2CWillsky_Signals%20and%20Systems.pdf#page=470)

The ideal continuous-time lowpass filter has
$$
H(j\omega)=
\begin{cases}
1,& |\omega|<\omega_c,\\
0,& |\omega|>\omega_c.
\end{cases}
$$
Its impulse response is
$$
h(t)=\frac{\sin(\omega_c t)}{\pi t}.
$$
This impulse response is infinitely long and noncausal, so the ideal lowpass filter cannot be realised exactly. It is still useful because it defines the limiting behaviour that practical filters approximate.

The ideal discrete-time lowpass filter has
$$
H(e^{j\omega})=
\begin{cases}
1,& |\omega|<\omega_c,\\
0,& \omega_c<|\omega|\leq \pi,
\end{cases}
$$
with impulse response
$$
h[n]=
\begin{cases}
\dfrac{\omega_c}{\pi},& n=0,\\[6pt]
\dfrac{\sin(\omega_c n)}{\pi n},& n\neq 0.
\end{cases}
$$
Again the impulse response has infinite duration. A finite-length approximation necessarily creates transition bands and ripple.

Practical filters are described by specifications rather than ideal cutoffs:

- passband edge and allowed passband ripple;
- stopband edge and required stopband attenuation;
- transition width;
- phase or group-delay constraints;
- implementation cost and numerical sensitivity.

This is a recurring tradeoff: sharper frequency selectivity requires a longer impulse response or a higher-order system, which usually increases delay, ringing, and sensitivity.

---
## 6.5 First-Order and Second-Order Systems
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim%2CWillsky_Signals%20and%20Systems.pdf#page=479)

A continuous-time first-order lowpass system can be written as
$$
H(s)=\frac{1}{1+s\tau}.
$$
On the Fourier axis,
$$
H(j\omega)=\frac{1}{1+j\omega\tau},
$$
so
$$
|H(j\omega)|=\frac{1}{\sqrt{1+(\omega\tau)^2}},
\qquad
\angle H(j\omega)=-\tan^{-1}(\omega\tau).
$$
The cutoff frequency is on the order of $1/\tau$, and the impulse response is a decaying exponential.

A simple discrete-time first-order system has
$$
H(z)=\frac{1}{1-az^{-1}},
$$
with impulse response
$$
h[n]=a^n u[n].
$$
It is causal and stable if
$$
|a|<1.
$$
Its frequency response is obtained by evaluating on the unit circle:
$$
H(e^{j\omega})=\frac{1}{1-ae^{-j\omega}}.
$$
If $a$ is positive and close to $1$, the system behaves like a lowpass smoother. If $a$ is negative and close to $-1$, it emphasizes high frequencies.

Second-order systems introduce complex-conjugate poles. In continuous time, a standard form is
$$
H(s)=\frac{\omega_0^2}{s^2+2\zeta\omega_0 s+\omega_0^2},
$$
where $\omega_0$ is the natural frequency and $\zeta$ is the damping ratio. Small damping gives resonance and ringing; large damping gives a slower but less oscillatory response.

In discrete time, second-order sections are usually written as
$$
H(z)=\frac{b_0+b_1z^{-1}+b_2z^{-2}}{1+a_1z^{-1}+a_2z^{-2}}.
$$
The pole radii determine decay time, and the pole angles determine oscillation frequency. This pole-zero viewpoint becomes much more systematic in the [[Notes/Signals and Systems/9 Z-Transform|z-transform]] chapter.
