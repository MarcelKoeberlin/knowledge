---
{"dg-publish":true,"permalink":"/notes/ultrafast-laser-physics/11-intensity-noise-and-timing-jitter-of-modelocked-lasers/","hide":"true","updated":"2026-06-07T00:00:00.000+02:00"}
---

Jump back to ==[[Notes/Ultrafast Laser Physics/Ultrafast Laser Physics#Table of Contents|chapter selection]]==.

---
**Table of Contents**

[[Notes/Ultrafast Laser Physics/11 Intensity Noise and Timing Jitter of Modelocked Lasers#11.1 Noise Variables of a Pulse Train|11.1 Noise Variables of a Pulse Train]]
[[Notes/Ultrafast Laser Physics/11 Intensity Noise and Timing Jitter of Modelocked Lasers#11.2 Power Spectral Density and RMS Noise|11.2 Power Spectral Density and RMS Noise]]
[[Notes/Ultrafast Laser Physics/11 Intensity Noise and Timing Jitter of Modelocked Lasers#11.3 Photodetection Noise Limits|11.3 Photodetection Noise Limits]]
[[Notes/Ultrafast Laser Physics/11 Intensity Noise and Timing Jitter of Modelocked Lasers#11.4 Measuring Intensity Noise and Timing Jitter|11.4 Measuring Intensity Noise and Timing Jitter]]
[[Notes/Ultrafast Laser Physics/11 Intensity Noise and Timing Jitter of Modelocked Lasers#11.5 Noise Characteristics of Modelocked Lasers|11.5 Noise Characteristics of Modelocked Lasers]]
[[Notes/Ultrafast Laser Physics/11 Intensity Noise and Timing Jitter of Modelocked Lasers#11.6 Signal-to-Noise Optimisation|11.6 Signal-to-Noise Optimisation]]

---
# 11 Intensity Noise and Timing Jitter of Modelocked Lasers
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf#page=607)

A modelocked laser is not only described by its pulse duration, spectrum, and average power. For many applications, especially frequency combs, pump-probe experiments, and precision timing, the noise of the pulse train is equally important.

Two noise types are central:

- **intensity noise:** pulse energy or average power fluctuations;
- **timing jitter:** fluctuations of the pulse arrival time.

They are different physical quantities, but they can couple to each other through detectors, nonlinear processes, and laser dynamics.

---
## 11.1 Noise Variables of a Pulse Train
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf#page=607)

An ideal pulse train has pulses at times
$$
t_m=mT_R.
$$
A real pulse train has fluctuating pulse energies and arrival times:
$$
\begin{aligned}
E_m&=\bar E+\delta E_m,\\
t_m&=mT_R+\Delta T_m.
\end{aligned}
$$
Here $\delta E_m$ describes pulse-energy noise and $\Delta T_m$ describes timing jitter.

Because the pulse train is sampled once per roundtrip, noise on pulse-to-pulse quantities is only physically distinct up to the Nyquist frequency
$$
f_{\mathrm{Nyq}}=\frac{f_{\mathrm{rep}}}{2}.
$$
Noise above this is aliased in a discrete pulse-to-pulse measurement. Continuous photodetection of the optical pulse train can show microwave harmonics at much higher frequencies, but the independent baseband timing and energy fluctuations are still linked to the repetition rate.

---
## 11.2 Power Spectral Density and RMS Noise
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf#page=611)

Noise is usually described by a power spectral density (PSD). If $x(t)$ is a zero-mean fluctuation with single-sided PSD $S_x(f)$, the variance in a measurement bandwidth $[f_1,f_2]$ is
$$
\sigma_x^2=\int_{f_1}^{f_2}S_x(f)\,df.
$$

For intensity noise one often uses relative intensity noise (RIN):
$$
\mathrm{RIN}(f)=S_{\delta P/P}(f).
$$
The integrated relative rms intensity noise is
$$
\sigma_{\mathrm{rel}}=
\sqrt{\int_{f_1}^{f_2}\mathrm{RIN}(f)\,df}.
$$
RIN is often plotted in $\mathrm{dBc/Hz}$, which is a logarithmic representation of the noise power relative to the carrier power per hertz.

For timing jitter, the timing-noise PSD $S_{\Delta T}(f)$ gives
$$
\sigma_T=
\sqrt{\int_{f_1}^{f_2}S_{\Delta T}(f)\,df}.
$$
Timing jitter is also often measured as phase noise on a microwave harmonic of the repetition rate. For the $n$-th harmonic,
$$
\phi_n(t)=2\pi n f_{\mathrm{rep}}\Delta T(t),
$$
so
$$
S_{\phi,n}(f)=\left(2\pi n f_{\mathrm{rep}}\right)^2S_{\Delta T}(f).
$$
This $n^2$ scaling is useful experimentally: timing jitter becomes easier to see on higher harmonics, while pure intensity noise does not scale the same way.

One must keep the units straight. $S_{\Delta T}(f)$ has units of $\mathrm{s^2/Hz}$, while $S_{\phi}(f)$ has units of $\mathrm{rad^2/Hz}$. Single-sideband phase noise $L(f)$ is often quoted in $\mathrm{dBc/Hz}$ and is related to phase-noise PSD by a convention-dependent factor of roughly two for small phase noise.

---
## 11.3 Photodetection Noise Limits
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf#page=618)

Photodetection converts optical power into current. If the average photocurrent is $J_{\mathrm{av}}$, the shot-noise current PSD is
$$
S_J^{\mathrm{shot}}=2qJ_{\mathrm{av}},
$$
where $q$ is the elementary charge. The thermal current noise of a load resistor $R_L$ at temperature $T$ is approximately
$$
S_J^{\mathrm{th}}=\frac{4k_BT}{R_L}.
$$
For a measurement bandwidth $B$, the corresponding mean-square noise currents are
$$
\langle i_{\mathrm{shot}}^2\rangle=2qJ_{\mathrm{av}}B,
\qquad
\langle i_{\mathrm{th}}^2\rangle=\frac{4k_BT}{R_L}B.
$$

Shot noise increases with photocurrent, but the signal power increases faster. Therefore, the shot-noise-limited signal-to-noise ratio improves with optical power until detector saturation, thermal effects, or technical noise become dominant.

In real measurements, detector saturation is a common problem with ultrashort pulses. The average power may look acceptable, while the peak current or microwave harmonic power drives the photodiode or amplifier into a nonlinear regime. This can convert intensity noise into apparent phase noise or create false noise floors.

This AM-to-PM conversion is a major practical limitation. If the photodiode response time or space-charge dynamics depend on pulse energy, then intensity noise changes the apparent arrival time. A timing-jitter measurement can then be limited by detector physics rather than by the laser.

---
## 11.4 Measuring Intensity Noise and Timing Jitter
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf#page=623)

Intensity noise can be measured by detecting the laser power with a photodiode and analysing the baseband voltage noise. The DC component gives the average power, while the AC component gives the fluctuations. Care is needed to subtract detector noise and electronic noise floors.

Timing jitter is often measured from the microwave spectrum of the photodetected pulse train. The pulse train produces harmonics at
$$
f_n=n f_{\mathrm{rep}}.
$$
Timing fluctuations broaden these harmonics and create phase-noise sidebands. A phase-noise analyser or signal-source analyser can measure the single-sideband phase noise $L(f)$ around a chosen harmonic.

Balanced optical cross-correlation can measure timing jitter with much higher sensitivity between two pulse trains. In that case, a nonlinear signal depends on the relative delay between the pulses. Near the zero crossing, delay fluctuations are converted into voltage fluctuations with a calibrated slope.

The calibration slope is essential. If the balanced cross-correlator output is $V(\tau)$, then small timing fluctuations are converted as
$$
\delta V(t)\approx \left.\frac{dV}{d\tau}\right|_{\tau_0}\Delta T(t).
$$
Thus
$$
S_{\Delta T}(f)=\frac{S_V(f)}{\left(dV/d\tau\right)^2}.
$$
Without this calibration, the voltage noise cannot be interpreted as timing noise.

For both intensity and timing measurements, the bandwidth and averaging method must be stated. Integrated rms noise depends strongly on the chosen lower and upper integration limits.

---
## 11.5 Noise Characteristics of Modelocked Lasers
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf#page=630)

Noise in a modelocked laser can come from many sources:

- pump intensity noise;
- spontaneous emission in the gain medium;
- mechanical cavity-length fluctuations;
- thermal drift;
- acoustic noise;
- intracavity nonlinearities;
- absorber fluctuations;
- electronic noise in actuators or stabilisation loops.

Intensity noise and timing jitter often have different spectral shapes. Slow technical noise dominates at low Fourier frequencies. At higher Fourier frequencies, the noise may approach shot-noise or quantum-limited behaviour, depending on the laser and detection system.

The microwave harmonics help distinguish noise types. Intensity noise changes the amplitude of the harmonic signals. Timing jitter changes their phase and becomes more visible at higher harmonic number. However, real photodiodes and microwave amplifiers can mix amplitude and phase noise, so this distinction is not automatic unless the measurement system is calibrated.

The most common mistake is to quote a single rms number without the integration bandwidth. A laser with excellent high-frequency noise can still have poor long-term drift, and a laser with low integrated noise over a narrow bandwidth can still be unsuitable for an experiment sensitive to another band.

---
## 11.6 Signal-to-Noise Optimisation
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf#page=635)

Optimising signal-to-noise ratio depends on the experiment. General strategies include:

- reduce pump noise or use a lower-noise pump source;
- isolate the cavity mechanically and thermally;
- avoid detector saturation;
- use balanced detection to suppress common-mode intensity noise;
- choose optical power so the measurement is shot-noise limited but not nonlinear;
- use lock-in detection when the signal can be modulated;
- stabilise repetition rate, carrier-envelope offset, or cavity length when phase coherence matters.

For pump-probe experiments, intensity noise often limits the smallest measurable differential signal. For frequency-comb applications, timing jitter and optical phase noise can be more important. The correct noise metric is therefore set by the physical observable, not by the easiest number to measure.

In [[Notes/Attosecond Physics/3 Characterisation of Attosecond Pulses#3.7 From RABBITT to Streaking Regime|attosecond pump-probe measurements]], both kinds of noise can matter at once. Intensity noise changes ionisation and HHG yield, while timing jitter changes the delay axis. Slow timing drift can wash out sub-cycle dynamics even when every individual laser shot is short.
