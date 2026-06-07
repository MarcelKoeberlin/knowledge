---
{"dg-publish":true,"permalink":"/notes/signals-and-systems/7-sampling/","hide":"true","updated":"2026-06-07T20:05:43.062+02:00"}
---

Jump back to ==[[Notes/Signals and Systems/Signals and Systems#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/Signals and Systems/7 Sampling#7.1 The Sampling Theorem\|7.1 The Sampling Theorem]]
[[Notes/Signals and Systems/7 Sampling#7.2 Reconstruction and Interpolation\|7.2 Reconstruction and Interpolation]]
[[Notes/Signals and Systems/7 Sampling#7.3 Aliasing\|7.3 Aliasing]]
[[Notes/Signals and Systems/7 Sampling#7.4 Discrete-Time Processing of Continuous-Time Signals\|7.4 Discrete-Time Processing of Continuous-Time Signals]]
[[Notes/Signals and Systems/7 Sampling#7.5 Discrete-Time Sampling, Decimation, and Interpolation\|7.5 Discrete-Time Sampling, Decimation, and Interpolation]]
[[Notes/Signals and Systems/7 Sampling#7.6 Quantization and Practical Conversion\|7.6 Quantization and Practical Conversion]]

---
# 7 Sampling
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim,Willsky_Signals%20and%20Systems.pdf) [ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Discrete-Time%20Signal%20Processing%20Oppenheimer.pdf)

Sampling is the bridge between continuous-time and discrete-time signal processing. The surprising result is that a continuous-time signal can be represented exactly by equally spaced samples if it is bandlimited and if the sampling rate is high enough.

The exact theorem is idealised. Real systems need anti-aliasing filters, sample-and-hold circuits, quantizers, clocks with finite jitter, and reconstruction filters. The ideal theorem is still the right starting point because it tells us what the unavoidable failure mode is: overlapping spectral replicas, or aliasing.

---
## 7.1 The Sampling Theorem
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim,Willsky_Signals%20and%20Systems.pdf)

Sampling a continuous-time signal at period $T$ can be represented by multiplying it with an impulse train
$$
p(t)=\sum_{n=-\infty}^{\infty}\delta(t-nT).
$$
The sampled impulse train is
$$
x_p(t)=x(t)p(t)
=\sum_{n=-\infty}^{\infty}x(nT)\delta(t-nT).
$$
The sampling angular frequency is
$$
\omega_s=\frac{2\pi}{T}.
$$

Multiplication in time corresponds to convolution in frequency. Since the Fourier transform of the impulse train is another impulse train, the sampled spectrum is
$$
X_p(j\omega)=\frac{1}{T}
\sum_{k=-\infty}^{\infty}
X\!\left(j(\omega-k\omega_s)\right).
$$
Thus sampling creates shifted replicas of the original spectrum at integer multiples of $\omega_s$.

If $x(t)$ is bandlimited such that
$$
X(j\omega)=0\qquad\text{for}\qquad |\omega|>\omega_M,
$$
then the replicas do not overlap if
$$
\omega_s>2\omega_M.
$$
This is the sampling theorem. The frequency $2\omega_M$ is the Nyquist rate. Equality is not enough in the usual theorem statement because it leaves no transition band for reconstruction and can fail at spectral endpoints.

---
## 7.2 Reconstruction and Interpolation
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim,Willsky_Signals%20and%20Systems.pdf)

If the sampling theorem is satisfied, the original signal is recovered by an ideal lowpass filter that selects the central spectral replica and rejects all others. The required reconstruction filter has gain $T$ in the passband:
$$
H_r(j\omega)=
\begin{cases}
T,& |\omega|<\omega_c,\\
0,& |\omega|>\omega_c,
\end{cases}
$$
with
$$
\omega_M<\omega_c<\omega_s-\omega_M.
$$

Choosing $\omega_c=\omega_s/2=\pi/T$ gives the familiar sinc interpolation formula:
$$
x(t)=\sum_{n=-\infty}^{\infty}x(nT)
\frac{\sin\left[\pi(t-nT)/T\right]}{\pi(t-nT)/T}.
$$
Each sample multiplies a shifted sinc function. The continuous-time reconstruction is the superposition of these interpolation functions.

In practice, impulse trains are not generated directly. A zero-order hold keeps each sample value constant until the next sample. This can be modelled as impulse-train sampling followed by a rectangular pulse:
$$
h_0(t)=
\begin{cases}
1,& 0\leq t<T,\\
0,& \text{otherwise}.
\end{cases}
$$
Its frequency response is
$$
H_0(j\omega)=e^{-j\omega T/2}\frac{2\sin(\omega T/2)}{\omega}.
$$
The magnitude has a sinc droop, so perfect reconstruction after a zero-order hold would require an equalising reconstruction filter. Often the droop is small enough over the signal band that it is treated as part of the analogue output-stage design.

---
## 7.3 Aliasing
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim,Willsky_Signals%20and%20Systems.pdf)

If the shifted spectral replicas overlap, the original spectrum cannot be recovered by lowpass filtering. This overlap is aliasing.

For a sinusoid
$$
x(t)=\cos(\omega_0t+\phi),
$$
sampling at $\omega_s$ makes frequencies separated by integer multiples of $\omega_s$ indistinguishable. A component above $\omega_s/2$ is folded into the baseband. For example, a sinusoid with frequency $\omega_0$ in the range
$$
\frac{\omega_s}{2}<\omega_0<\omega_s
$$
appears after ideal reconstruction as a sinusoid at
$$
\omega_s-\omega_0.
$$
The phase can also be reversed by this folding.

Aliasing is not just a mathematical nuisance. It is the reason a stroboscope can make a rotating wheel appear slower or even reversed. It is also why every practical A/D converter needs an anti-aliasing filter before sampling. Once aliasing has occurred, the overlapped frequency components are added together and cannot be separated by later digital processing.

---
## 7.4 Discrete-Time Processing of Continuous-Time Signals
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim,Willsky_Signals%20and%20Systems.pdf) [ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Discrete-Time%20Signal%20Processing%20Oppenheimer.pdf)

A common processing chain is
$$
x_c(t)\rightarrow x[n]\rightarrow y[n]\rightarrow y_c(t),
$$
where the first arrow is sampling, the middle operation is a discrete-time system, and the final arrow is reconstruction.

If the input is bandlimited and the sampling theorem is satisfied, there is a direct mapping between continuous-time frequency $\Omega$ and discrete-time frequency $\omega$:
$$
\omega=\Omega T.
$$
The discrete-time frequency response $H_d(e^{j\omega})$ therefore acts on the continuous-time baseband as
$$
H_{\mathrm{eff}}(j\Omega)=H_d(e^{j\Omega T}),
\qquad |\Omega|<\frac{\pi}{T}.
$$
This is the central idea behind digital filtering of analogue signals: design a discrete-time system that has the desired response after the frequency-axis mapping.

There are three important practical caveats:

- analogue prefiltering is needed to suppress frequencies above $\pi/T$ before sampling;
- the discrete-time filter only controls the sampled baseband, not aliased components already present;
- reconstruction introduces analogue output filtering and often sample-and-hold distortion.

---
## 7.5 Discrete-Time Sampling, Decimation, and Interpolation
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim,Willsky_Signals%20and%20Systems.pdf) [ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Discrete-Time%20Signal%20Processing%20Oppenheimer.pdf)

Sampling ideas also apply entirely within discrete time. Downsampling by an integer factor $M$ keeps every $M$-th sample:
$$
y[n]=x[nM].
$$
Its DTFT is
$$
Y(e^{j\omega})=\frac{1}{M}\sum_{r=0}^{M-1}
X\!\left(e^{j(\omega-2\pi r)/M}\right).
$$
Thus downsampling compresses and overlaps spectral replicas. To avoid aliasing, one should lowpass filter before downsampling so that the retained bandwidth is at most $\pi/M$.

Upsampling by an integer factor $L$ inserts zeros:
$$
y[n]=
\begin{cases}
x[n/L],& n/L\in\mathbb{Z},\\
0,& \text{otherwise}.
\end{cases}
$$
Its DTFT is
$$
Y(e^{j\omega})=X(e^{j\omega L}).
$$
This creates spectral images. A lowpass interpolation filter is then used to remove the images and fill in the missing sample values.

Changing a sampling rate by a rational factor $L/M$ is done by interpolation by $L$, lowpass filtering, and decimation by $M$. Efficient implementations combine these operations with polyphase filter structures, but the conceptual requirements are just anti-imaging and anti-aliasing.

---
## 7.6 Quantization and Practical Conversion
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Discrete-Time%20Signal%20Processing%20Oppenheimer.pdf)

An A/D converter does not only sample in time; it also quantizes amplitude. If the quantization step is $\Delta$, the quantized value can be modelled as
$$
x_Q[n]=x[n]+e[n],
$$
where $e[n]$ is the quantization error. Under the usual high-resolution assumptions, $e[n]$ is treated as approximately uniformly distributed over $[-\Delta/2,\Delta/2]$, giving
$$
\sigma_e^2=\frac{\Delta^2}{12}.
$$
This model is not exact for every signal, but it gives a useful noise-floor estimate.

Oversampling spreads quantization noise over a larger bandwidth. If the signal occupies only a small part of the sampled bandwidth, digital lowpass filtering can remove much of the out-of-band quantization noise. Noise-shaping converters go further by feeding quantization error back so that more of the noise is pushed outside the signal band.

For practical conversion, the ideal sampling theorem becomes a design checklist:

- choose a sample rate high enough for the signal bandwidth and transition bands;
- use an anti-aliasing filter before the ADC;
- ensure clock jitter is small enough for the highest input frequencies;
- choose enough quantization bits for the desired signal-to-noise ratio;
- use reconstruction and anti-imaging filters after the DAC.
