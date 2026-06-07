---
{"dg-publish":true,"permalink":"/notes/signals-and-systems/12-communication-and-feedback-systems/","hide":"true","updated":"2026-06-07T00:00:00.000+02:00"}
---

Jump back to ==[[Notes/Signals and Systems/Signals and Systems#Table of Contents|chapter selection]]==.

---
**Table of Contents**

[[Notes/Signals and Systems/12 Communication and Feedback Systems#12.1 Modulation as Frequency Shifting|12.1 Modulation as Frequency Shifting]]
[[Notes/Signals and Systems/12 Communication and Feedback Systems#12.2 Amplitude Modulation and Demodulation|12.2 Amplitude Modulation and Demodulation]]
[[Notes/Signals and Systems/12 Communication and Feedback Systems#12.3 Multiplexing and Pulse-Amplitude Modulation|12.3 Multiplexing and Pulse-Amplitude Modulation]]
[[Notes/Signals and Systems/12 Communication and Feedback Systems#12.4 Frequency Modulation|12.4 Frequency Modulation]]
[[Notes/Signals and Systems/12 Communication and Feedback Systems#12.5 Linear Feedback Systems|12.5 Linear Feedback Systems]]
[[Notes/Signals and Systems/12 Communication and Feedback Systems#12.6 Stability Margins|12.6 Stability Margins]]

---
# 12 Communication and Feedback Systems
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim%2CWillsky_Signals%20and%20Systems.pdf#page=613) [ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim%2CWillsky_Signals%20and%20Systems.pdf#page=847)

The earlier chapters develop the tools: convolution, Fourier transforms, sampling, Laplace transforms, z-transforms, and filters. Communication and feedback systems show why these tools matter. Communication uses modulation to move information around in frequency. Feedback uses system interconnection to change sensitivity, tracking, stability, and robustness.

---
## 12.1 Modulation as Frequency Shifting
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim%2CWillsky_Signals%20and%20Systems.pdf#page=613)

Multiplication by a complex exponential shifts a spectrum. If
$$
y(t)=x(t)e^{j\omega_c t},
$$
then
$$
Y(j\omega)=X(j(\omega-\omega_c)).
$$
The whole spectrum of $x(t)$ is moved up by $\omega_c$.

Multiplication by a cosine creates two shifted copies:
$$
y(t)=x(t)\cos(\omega_c t)
=\frac{1}{2}x(t)e^{j\omega_c t}
+\frac{1}{2}x(t)e^{-j\omega_c t}.
$$
Thus
$$
Y(j\omega)
=\frac{1}{2}X(j(\omega-\omega_c))
+\frac{1}{2}X(j(\omega+\omega_c)).
$$

This is the mathematical basis of amplitude modulation, frequency-division multiplexing, heterodyne detection, radio transmission, and many measurement techniques. The carrier does not create new information by itself; it relocates the spectrum to a band where transmission, filtering, or detection is convenient.

---
## 12.2 Amplitude Modulation and Demodulation
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim%2CWillsky_Signals%20and%20Systems.pdf#page=616)

In double-sideband suppressed-carrier amplitude modulation,
$$
s(t)=x(t)\cos(\omega_c t).
$$
If $x(t)$ is bandlimited to $|\omega|<\omega_M$ and
$$
\omega_c>\omega_M,
$$
then the shifted spectral copies do not overlap around the origin.

Coherent demodulation multiplies by the same carrier again:
$$
2s(t)\cos(\omega_c t)
=x(t)\left[1+\cos(2\omega_c t)\right].
$$
The desired baseband term is $x(t)$, while the second term is shifted to twice the carrier frequency. A lowpass filter recovers $x(t)$.

If the receiver oscillator has phase error $\phi$,
$$
2s(t)\cos(\omega_c t+\phi)
$$
recovers a baseband term proportional to
$$
x(t)\cos\phi.
$$
Thus coherent demodulation requires carrier phase synchronization. A phase error of $\pi/2$ can completely suppress the recovered signal.

Standard AM with transmitted carrier uses
$$
s(t)=A_c[1+k_a x(t)]\cos(\omega_c t).
$$
If $1+k_a x(t)$ remains positive, the envelope contains the message and envelope detection is possible. If the modulation is too strong, overmodulation causes distortion.

Single-sideband modulation transmits only one sideband. It is more bandwidth efficient, but generation and demodulation require sharper filtering or Hilbert-transform methods.

---
## 12.3 Multiplexing and Pulse-Amplitude Modulation
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim%2CWillsky_Signals%20and%20Systems.pdf#page=625)

Frequency-division multiplexing places different messages in different frequency bands:
$$
s(t)=\sum_k x_k(t)\cos(\omega_{c,k}t).
$$
The carrier frequencies are chosen so that the shifted spectra do not overlap. Bandpass filters and coherent demodulators recover the individual messages.

Time-division multiplexing assigns different signals to different time slots. This is naturally connected to sampling. Each source is sampled, the samples are interleaved, and the receiver separates the streams by timing.

Pulse-amplitude modulation (PAM) represents information by pulse amplitudes:
$$
s(t)=\sum_{n=-\infty}^{\infty}a_n p(t-nT),
$$
where $a_n$ are sample or symbol values and $p(t)$ is a pulse shape.

If pulses overlap at the sampling instants, symbols interfere with each other. This is intersymbol interference. A Nyquist pulse shape satisfies
$$
p(kT)=
\begin{cases}
1,& k=0,\\
0,& k\neq 0,
\end{cases}
$$
so that neighbouring symbols do not contribute at the decision times.

Pulse-code modulation (PCM) adds quantization and binary coding. It is the basis for many digital communication and storage systems: sample, quantize, encode, transmit, decode, reconstruct.

---
## 12.4 Frequency Modulation
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim%2CWillsky_Signals%20and%20Systems.pdf#page=642)

In frequency modulation, the message changes the instantaneous frequency rather than the amplitude. A typical FM signal is
$$
s(t)=A_c\cos\left(\omega_c t+k_f\int_{-\infty}^{t}x(\tau)\,d\tau\right).
$$
The instantaneous phase is
$$
\theta(t)=\omega_c t+k_f\int_{-\infty}^{t}x(\tau)\,d\tau,
$$
so the instantaneous angular frequency is
$$
\omega_i(t)=\frac{d\theta}{dt}
=\omega_c+k_f x(t).
$$

For small modulation index, FM can be approximated by a carrier plus small sidebands. For larger modulation index, many sidebands appear. FM is more bandwidth-consuming than simple AM, but it can be more robust to amplitude noise because the information is carried primarily in phase/frequency.

This phase viewpoint also connects modulation to later topics such as phase-locked loops and frequency combs: controlling phase means controlling instantaneous frequency, and vice versa.

---
## 12.5 Linear Feedback Systems
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim%2CWillsky_Signals%20and%20Systems.pdf#page=847)

In a basic negative-feedback loop, the forward system is $G$ and the feedback system is $H$. The closed-loop transfer function is
$$
T=\frac{G}{1+GH}.
$$
The denominator
$$
1+G(s)H(s)=0
$$
or
$$
1+G(z)H(z)=0
$$
is the characteristic equation. Its roots are the closed-loop poles, and they determine stability and transient behaviour.

Feedback can be used for:

- reducing sensitivity to plant variations;
- making an output track a reference;
- rejecting disturbances;
- stabilising an unstable system;
- approximating an inverse system;
- compensating nonideal components.

The benefit is not free. Feedback can also destabilise a system if the loop gain has the wrong phase at frequencies where its magnitude is large. This is why feedback analysis is inseparable from pole locations, frequency response, and phase.

For high loop gain $|GH|\gg 1$,
$$
T\approx \frac{1}{H}.
$$
Thus the closed-loop response is set mainly by the feedback path, not by the forward plant. This is the basic robustness intuition behind feedback control.

---
## 12.6 Stability Margins
[ ](/img/user/Reading/Books/Electrical%20Engineering%20and%20Signal%20Processing/Oppenheim%2CWillsky_Signals%20and%20Systems.pdf#page=878)

For continuous-time rational systems, closed-loop stability requires all closed-loop poles to lie in the left half-plane. For discrete-time systems, they must lie inside the unit circle.

Root-locus analysis studies how the closed-loop poles move as a scalar gain $K$ changes. If
$$
1+KG(s)H(s)=0,
$$
the root locus shows the possible closed-loop pole locations as $K$ varies from $0$ to $\infty$. This gives direct insight into transient response, damping, and stability.

The Nyquist stability criterion uses the frequency response of the open-loop transfer function $G(s)H(s)$ to infer closed-loop stability. The critical point is $-1$ in the complex plane because
$$
1+G(s)H(s)=0
$$
means
$$
G(s)H(s)=-1.
$$
Encirclements of this point determine whether closed-loop poles move into the unstable region.

In engineering design, gain and phase margins are practical summaries:

- **Gain margin:** how much the loop gain can increase before instability.
- **Phase margin:** how much additional phase lag can be tolerated before instability.

Large margins usually mean robust but slower response. Small margins can give fast response but ringing, overshoot, and fragility. Feedback design is therefore a controlled compromise between speed, accuracy, disturbance rejection, and stability.
