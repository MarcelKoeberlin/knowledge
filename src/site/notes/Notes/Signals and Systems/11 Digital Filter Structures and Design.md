---
{"dg-publish":true,"permalink":"/notes/signals-and-systems/11-digital-filter-structures-and-design/","hide":"true","updated":"2026-06-07T20:09:33.576+02:00"}
---

Jump back to ==[[Notes/Signals and Systems/Signals and Systems#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/Signals and Systems/11 Digital Filter Structures and Design#11.1 FIR and IIR Filters\|11.1 FIR and IIR Filters]]
[[Notes/Signals and Systems/11 Digital Filter Structures and Design#11.2 Realisation Structures\|11.2 Realisation Structures]]
[[Notes/Signals and Systems/11 Digital Filter Structures and Design#11.3 Linear Phase, All-Pass, and Minimum Phase\|11.3 Linear Phase, All-Pass, and Minimum Phase]]
[[Notes/Signals and Systems/11 Digital Filter Structures and Design#11.4 Filter Specifications\|11.4 Filter Specifications]]
[[Notes/Signals and Systems/11 Digital Filter Structures and Design#11.5 IIR Filter Design\|11.5 IIR Filter Design]]
[[Notes/Signals and Systems/11 Digital Filter Structures and Design#11.6 FIR Filter Design\|11.6 FIR Filter Design]]
[[Notes/Signals and Systems/11 Digital Filter Structures and Design#11.7 Numerical Effects\|11.7 Numerical Effects]]

---
# 11 Digital Filter Structures and Design
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Discrete-Time%20Signal%20Processing%20Oppenheimer.pdf) [ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Discrete-Time%20Signal%20Processing%20Oppenheimer.pdf) [ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Discrete-Time%20Signal%20Processing%20Oppenheimer.pdf)

Once the z-transform has described a discrete-time LTI system, the next question is how to realise and design it. A digital filter is not just a transfer function; it is also a numerical algorithm. Different realisations of the same $H(z)$ can have very different sensitivity to coefficient quantization, round-off noise, overflow, and hardware cost.

---
## 11.1 FIR and IIR Filters
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Discrete-Time%20Signal%20Processing%20Oppenheimer.pdf)

A general causal rational digital filter is described by
$$
y[n]+\sum_{k=1}^{N}a_k y[n-k]
=\sum_{m=0}^{M}b_m x[n-m].
$$
Its system function is
$$
H(z)=
\frac{\sum_{m=0}^{M}b_m z^{-m}}
{1+\sum_{k=1}^{N}a_k z^{-k}}.
$$

If all $a_k=0$, the filter is finite impulse response (FIR):
$$
y[n]=\sum_{m=0}^{M}b_m x[n-m].
$$
The impulse response has finite length. FIR filters are always BIBO stable if their coefficients are finite. They can also be designed to have exact generalized linear phase.

If any feedback coefficient $a_k$ is nonzero, the filter is infinite impulse response (IIR). IIR filters can achieve sharp magnitude responses with lower order than FIR filters, but stability must be checked and exact linear phase is generally not possible for causal stable IIR filters.

The basic tradeoff is:

- FIR: robust stability and linear phase, but often higher order;
- IIR: efficient sharp filters, but nonlinear phase and more numerical sensitivity.

---
## 11.2 Realisation Structures
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Discrete-Time%20Signal%20Processing%20Oppenheimer.pdf)

The same rational $H(z)$ can be implemented in several structures.

The direct-form realisation follows the difference equation directly. Direct Form I uses separate delay lines for feedforward and feedback parts. Direct Form II combines them into one delay line and is more memory efficient. However, direct forms can be sensitive to coefficient quantization for high-order filters.

In cascade form, the system function is factored into first- and second-order sections:
$$
H(z)=G\prod_{r}H_r(z).
$$
Second-order sections are preferred for complex-conjugate pole-zero pairs:
$$
H_r(z)=
\frac{b_{0r}+b_{1r}z^{-1}+b_{2r}z^{-2}}
{1+a_{1r}z^{-1}+a_{2r}z^{-2}}.
$$
Cascade form is numerically safer because each section can be scaled and implemented independently.

In parallel form, partial-fraction expansion gives
$$
H(z)=C+\sum_r H_r(z).
$$
This is useful when the system naturally decomposes into resonant sections.

Transposed structures reverse the signal-flow graph while preserving the transfer function. They often have better numerical behaviour in finite precision and are common in software libraries.

---
## 11.3 Linear Phase, All-Pass, and Minimum Phase
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Discrete-Time%20Signal%20Processing%20Oppenheimer.pdf)

A real FIR filter has exact linear phase if its impulse response is symmetric or antisymmetric:
$$
h[n]=h[M-n]
$$
or
$$
h[n]=-h[M-n].
$$
The corresponding group delay is
$$
\tau_g=\frac{M}{2}.
$$
Linear phase is important when waveform shape matters, because all frequencies in the passband are delayed equally.

An all-pass system has
$$
|A(e^{j\omega})|=1
$$
for all $\omega$. It changes phase without changing magnitude. A first-order discrete-time all-pass section can be written as
$$
A(z)=\frac{z^{-1}-a^*}{1-az^{-1}},
\qquad |a|<1.
$$
More generally, stable all-pass systems have zeros that are reciprocal conjugates of their poles.

A minimum-phase system has all zeros inside the unit circle, assuming it is causal and stable. It has a causal stable inverse. Any stable rational system can often be factored conceptually into
$$
H(z)=H_{\mathrm{min}}(z)A(z),
$$
where $H_{\mathrm{min}}$ is minimum phase and $A$ is all-pass. The all-pass part carries excess phase delay without changing the magnitude response.

This is a useful warning: specifying only $|H(e^{j\omega})|$ does not uniquely determine the filter. Phase and zero placement still matter.

---
## 11.4 Filter Specifications
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Discrete-Time%20Signal%20Processing%20Oppenheimer.pdf)

Digital filter design starts from specifications. For a lowpass filter, typical parameters are:

- passband edge $\omega_p$;
- stopband edge $\omega_s$;
- passband ripple $\delta_p$;
- stopband ripple $\delta_s$;
- transition width $\Delta\omega=\omega_s-\omega_p$.

In magnitude form:
$$
1-\delta_p\leq |H(e^{j\omega})|\leq 1+\delta_p,
\qquad |\omega|\leq\omega_p,
$$
and
$$
|H(e^{j\omega})|\leq \delta_s,
\qquad \omega_s\leq |\omega|\leq\pi.
$$
Stopband attenuation is often given in decibels:
$$
A_s=-20\log_{10}\delta_s.
$$

No finite-order filter can have an ideal brick-wall transition. A narrower transition band or smaller ripple requires a higher-order filter.

---
## 11.5 IIR Filter Design
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Discrete-Time%20Signal%20Processing%20Oppenheimer.pdf)

IIR digital filters are often designed from analogue prototypes. Classical analogue lowpass families include Butterworth, Chebyshev, inverse Chebyshev, and elliptic filters.

A Butterworth filter has maximally flat passband magnitude:
$$
|H_a(j\Omega)|^2=
\frac{1}{1+(\Omega/\Omega_c)^{2N}}.
$$
It is smooth but does not give the sharpest transition for a given order.

Chebyshev and elliptic filters allow ripple in one or both bands to achieve sharper transitions. Elliptic filters are usually the lowest order for given magnitude specifications, but their phase is more nonlinear.

Two common mappings from analogue to digital filters are impulse invariance and the bilinear transform.

Impulse invariance samples the analogue impulse response:
$$
h_d[n]=T h_a(nT).
$$
It maps analogue poles according to
$$
z=e^{sT}.
$$
This preserves time-domain samples of the impulse response, but it aliases the analogue frequency response. It is appropriate only when the analogue response is sufficiently bandlimited.

The bilinear transform maps the $s$-plane to the $z$-plane by
$$
s=\frac{2}{T}\frac{1-z^{-1}}{1+z^{-1}}.
$$
It maps the entire left half-plane into the inside of the unit circle, so stability is preserved and no aliasing occurs. The frequency mapping is nonlinear:
$$
\Omega=\frac{2}{T}\tan\left(\frac{\omega}{2}\right).
$$
Because of this warping, critical frequencies are prewarped before designing the analogue prototype:
$$
\Omega_c=\frac{2}{T}\tan\left(\frac{\omega_c}{2}\right).
$$

---
## 11.6 FIR Filter Design
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Discrete-Time%20Signal%20Processing%20Oppenheimer.pdf)

The ideal lowpass impulse response is infinite:
$$
h_d[n]=
\begin{cases}
\dfrac{\omega_c}{\pi},& n=0,\\[6pt]
\dfrac{\sin(\omega_c n)}{\pi n},& n\neq 0.
\end{cases}
$$
The simplest FIR design method truncates it with a finite window:
$$
h[n]=h_d[n]w[n].
$$
Windowing in time smooths the frequency response but produces a transition band and ripple. The window controls the tradeoff between main-lobe width and side-lobe level.

The Kaiser window is useful because it has an adjustable parameter $\beta$. A common empirical order estimate is
$$
N\approx \frac{A-8}{2.285\Delta\omega},
$$
where $A$ is the desired attenuation in dB and $\Delta\omega$ is the transition width.

Equiripple FIR design instead directly optimises the maximum weighted error between the desired and actual responses. The Parks-McClellan algorithm is the standard method. Its characteristic result is equal ripple in the optimised bands:
$$
E(\omega)=W(\omega)\left[H_d(e^{j\omega})-H(e^{j\omega})\right]
$$
oscillates between equal positive and negative extrema.

Window design is simple and predictable. Equiripple design is usually more efficient for strict specifications. Both methods are widely used.

---
## 11.7 Numerical Effects
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Discrete-Time%20Signal%20Processing%20Oppenheimer.pdf)

Digital filters are implemented with finite word length. This introduces several effects:

- coefficient quantization moves poles and zeros;
- arithmetic round-off injects noise;
- fixed-point overflow can destabilise recursive filters;
- recursive filters can exhibit limit cycles even with zero input.

IIR filters are especially sensitive because pole locations determine stability. A pole that is stable before quantization can move closer to the unit circle, changing resonance and decay time, or in the worst case move outside the unit circle.

This is why high-order IIR filters are almost always implemented as cascaded second-order sections rather than one high-order direct form. Each section can be scaled to avoid overflow and quantized with less pole sensitivity.

FIR filters are more robust because they have no feedback. Coefficient quantization changes the magnitude and phase response but cannot create instability. This robustness is one of the reasons FIR filters are often chosen even when they require more multiplications.
