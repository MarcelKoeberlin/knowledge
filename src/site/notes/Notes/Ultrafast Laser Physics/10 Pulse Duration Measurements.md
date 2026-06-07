---
{"dg-publish":true,"permalink":"/notes/ultrafast-laser-physics/10-pulse-duration-measurements/","hide":"true","updated":"2026-06-07T20:12:14.459+02:00"}
---

Jump back to ==[[Notes/Ultrafast Laser Physics/Ultrafast Laser Physics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/Ultrafast Laser Physics/10 Pulse Duration Measurements#10.1 Why Pulse Duration Is Not Directly Obvious\|10.1 Why Pulse Duration Is Not Directly Obvious]]
[[Notes/Ultrafast Laser Physics/10 Pulse Duration Measurements#10.2 Electronic Measurements\|10.2 Electronic Measurements]]
[[Notes/Ultrafast Laser Physics/10 Pulse Duration Measurements#10.3 Optical Autocorrelation\|10.3 Optical Autocorrelation]]
[[Notes/Ultrafast Laser Physics/10 Pulse Duration Measurements#10.4 Frequency-Resolved Optical Gating\|10.4 Frequency-Resolved Optical Gating]]
[[Notes/Ultrafast Laser Physics/10 Pulse Duration Measurements#10.5 SPIDER\|10.5 SPIDER]]
[[Notes/Ultrafast Laser Physics/10 Pulse Duration Measurements#10.6 Practical Cross-Checks\|10.6 Practical Cross-Checks]]

---
# 10 Pulse Duration Measurements
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf)

Measuring ultrashort pulses is difficult because the pulse can be shorter than any available electronic detector response. A femtosecond pulse cannot simply be sent to a photodiode and read from an oscilloscope. Instead, one usually uses the pulse itself, or a related nonlinear optical process, as the time reference.

The goal is also more subtle than measuring one number. The pulse duration depends on the temporal intensity profile, but the full pulse is described by a complex field
$$
E(t)=|E(t)|\exp(i\phi(t)).
$$
Knowing only the optical spectrum or only an autocorrelation is not enough to reconstruct the full field. Complete pulse characterisation requires both amplitude and phase.

---
## 10.1 Why Pulse Duration Is Not Directly Obvious
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf)

The spectrum gives a lower bound on the pulse duration through the time-bandwidth product:
$$
\Delta \nu\,\Delta t\geq \mathrm{const.}
$$
For a transform-limited Gaussian pulse,
$$
\Delta \nu_{\mathrm{FWHM}}\Delta t_{\mathrm{FWHM}}\approx 0.44,
$$
while for a transform-limited $\operatorname{sech}^2$ intensity pulse,
$$
\Delta \nu_{\mathrm{FWHM}}\Delta t_{\mathrm{FWHM}}\approx 0.315.
$$
If the measured pulse is longer than the transform limit, it is chirped or otherwise phase distorted. Thus a spectrometer can tell whether a short pulse is possible, but not whether the actual pulse is short.

The pulse duration convention must also be stated. In these notes, $\tau_p$ usually refers to an intensity full-width at half maximum unless another definition is explicitly given.

For few-cycle pulses, the usual separation between envelope and carrier becomes less comfortable. A pulse can have a short intensity FWHM but still have a distorted electric-field waveform because of spectral phase. This is why pulse duration measurements and CEO measurements are complementary in experiments connected to [[Notes/Attosecond Physics/3 Characterisation of Attosecond Pulses\|attosecond pulse characterisation]].

---
## 10.2 Electronic Measurements
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf)

Electronic detection is useful for nanosecond and sometimes picosecond pulses, but it is limited by photodiode bandwidth, oscilloscope bandwidth, cable dispersion, and detector capacitance. A detector with load resistance $R_L$ and capacitance $C$ has an approximate RC bandwidth
$$
f_{\mathrm{3dB}}\approx \frac{1}{2\pi R_L C}.
$$
The rise time of a bandwidth-limited Gaussian-like response is often estimated by
$$
t_r\approx \frac{0.35}{f_{\mathrm{3dB}}}.
$$
If several independent Gaussian response functions contribute, the measured width is approximately the quadrature sum
$$
\tau_{\mathrm{meas}}^2\approx \tau_{\mathrm{pulse}}^2+\tau_{\mathrm{det}}^2+\tau_{\mathrm{scope}}^2+\cdots .
$$
Thus the pulse width can only be deconvolved reliably if the instrument response is known and not much slower than the pulse.

For modelocked lasers, electronics are very useful for measuring repetition rate, timing jitter, intensity noise, and long pulse envelopes. They are generally not enough for femtosecond pulse duration.

---
## 10.3 Optical Autocorrelation
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf)

An optical autocorrelator splits the pulse into two replicas, delays one by $\tau$, recombines them in a nonlinear crystal, and measures a nonlinear signal as a function of delay. For second-harmonic generation, the intensity autocorrelation is
$$
A_I(\tau)=\int_{-\infty}^{\infty} I(t)I(t-\tau)\,dt.
$$
The autocorrelation is not the pulse itself. Its width must be divided by a deconvolution factor that depends on the assumed pulse shape:
$$
\begin{aligned}
\tau_{\mathrm{AC}}&=\sqrt{2}\,\tau_p &&\text{Gaussian intensity},\\
\tau_{\mathrm{AC}}&\approx 1.543\,\tau_p &&\operatorname{sech}^2 \text{ intensity}.
\end{aligned}
$$
This is why an autocorrelation trace should always be reported together with the assumed pulse shape.

The main advantages of intensity autocorrelation are simplicity and high time resolution. The main limitation is ambiguity. Many different pulse shapes can give similar autocorrelations, and the method does not directly retrieve the spectral phase.

Another practical ambiguity is contrast. A weak pedestal can carry substantial pulse energy while barely changing the autocorrelation peak. Conversely, small satellite pulses can appear as side peaks only if the scan range and dynamic range are sufficient. For amplifier systems used in strong-field physics, this matters because pre-pulses and pedestals can ionise the target before the main pulse arrives.

An interferometric autocorrelation keeps the optical interference between the two replicas:
$$
A_{\mathrm{IAC}}(\tau)=\int_{-\infty}^{\infty}|E(t)+E(t-\tau)|^4\,dt.
$$
This contains additional phase-sensitive information and can reveal coherence, chirp signatures, and satellite pulses. However, it is still not a complete field measurement by itself.

---
## 10.4 Frequency-Resolved Optical Gating
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf)

Frequency-resolved optical gating (FROG) records a spectrogram rather than a single autocorrelation curve. A delayed gate function selects part of the pulse, and the spectrum of the gated field is measured:
$$
I_{\mathrm{FROG}}(\omega,\tau)
=\left|
\int_{-\infty}^{\infty} E(t)G(t-\tau)\exp(-i\omega t)\,dt
\right|^2.
$$
For second-harmonic-generation FROG, the gate is another copy of the pulse:
$$
G(t-\tau)=E(t-\tau),
$$
so
$$
I_{\mathrm{SHG\text{-}FROG}}(\omega,\tau)
=\left|
\int_{-\infty}^{\infty} E(t)E(t-\tau)\exp(-i\omega t)\,dt
\right|^2.
$$

The FROG trace is two-dimensional: delay and frequency. This redundancy allows iterative algorithms to reconstruct the temporal intensity and phase, or equivalently the spectral intensity and phase. Unlike a simple autocorrelation, FROG can distinguish many pulse-shape ambiguities.

The retrieved field must be checked by comparing the measured FROG trace with the trace calculated from the retrieved pulse. The usual figure of merit is a trace error. A low trace error does not remove all experimental doubts, but a high trace error is a clear sign that the measurement geometry, background subtraction, phase matching, or retrieval assumptions are not adequate.

The practical requirements are:

- enough phase matching bandwidth in the nonlinear crystal;
- accurate delay calibration;
- sufficient spectrometer resolution;
- a retrieval algorithm that converges to a trace matching the measured one.

FROG is robust and widely used, but it is not always the fastest or simplest method when the pulse is very weak, very broadband, or needs real-time characterisation.

---
## 10.5 SPIDER
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf)

SPIDER stands for spectral phase interferometry for direct electric-field reconstruction. Instead of retrieving the field iteratively, SPIDER measures the phase difference between two spectrally sheared replicas of the pulse.

The core idea is to interfere $\tilde E(\omega)$ with a shifted copy $\tilde E(\omega+\Omega)$:
$$
S(\omega)\propto
\left|\tilde E(\omega)+\tilde E(\omega+\Omega)\exp(i\omega\tau)\right|^2.
$$
The interference term contains the phase difference
$$
\Phi(\omega+\Omega)-\Phi(\omega).
$$
For small shear $\Omega$, this approximates the spectral phase derivative:
$$
\Phi(\omega+\Omega)-\Phi(\omega)\approx \Omega\frac{d\Phi}{d\omega}.
$$
Integrating over frequency reconstructs the spectral phase up to an irrelevant constant and linear phase. The linear phase corresponds to an absolute time shift, which does not affect the pulse duration.

SPIDER is attractive because it can be direct and fast. Its difficulty is experimental: the spectral shear and delay must be well calibrated, and the nonlinear mixing process must cover the pulse bandwidth without introducing uncontrolled phase errors.

The strength of SPIDER is that it directly measures a spectral phase difference. The weakness is that a wrong shear calibration integrates into a wrong phase. For very broadband pulses, spatial chirp, imperfect overlap, and spectrometer calibration can become limiting. This is why serious few-cycle pulse characterisation often compares several diagnostics rather than trusting one trace.

---
## 10.6 Practical Cross-Checks
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf)

No single pulse measurement should be trusted blindly. Useful cross-checks are:

- compare the measured pulse duration with the transform limit from the optical spectrum;
- check whether the assumed pulse shape is justified before applying an autocorrelation deconvolution factor;
- measure and compensate dispersion before concluding that the oscillator cannot produce shorter pulses;
- check for satellite pulses or pedestals, which can hide in an autocorrelation;
- verify that nonlinear crystals, optics, and detectors have enough bandwidth for the pulse.

In practice, an optical spectrum plus autocorrelation is often enough for routine alignment, while FROG or SPIDER is needed when the actual electric field, chirp, or pulse pedestal matters.

Attosecond diagnostics build on the same logic but must go further, because the XUV pulse is usually too weak and too short for direct nonlinear autocorrelation. Methods such as [[Notes/Attosecond Physics/3 Characterisation of Attosecond Pulses#3.2 RABBITT Reconstruction of Attosecond Beating by Interference of Two-Photon Transitions\|RABBITT]] and [[Notes/Attosecond Physics/3 Characterisation of Attosecond Pulses#3.3 Attosecond Pulse Characterisation FROG-CRAB\|FROG-CRAB]] transfer timing and phase information into measurable photoelectron spectra.
