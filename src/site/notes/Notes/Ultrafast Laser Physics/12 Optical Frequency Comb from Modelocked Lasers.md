---
{"dg-publish":true,"permalink":"/notes/ultrafast-laser-physics/12-optical-frequency-comb-from-modelocked-lasers/","hide":"true","updated":"2026-06-07T20:14:09.450+02:00"}
---

Jump back to ==[[Notes/Ultrafast Laser Physics/Ultrafast Laser Physics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/Ultrafast Laser Physics/12 Optical Frequency Comb from Modelocked Lasers#12.1 Comb Lines from a Modelocked Laser\|12.1 Comb Lines from a Modelocked Laser]]
[[Notes/Ultrafast Laser Physics/12 Optical Frequency Comb from Modelocked Lasers#12.2 Carrier-Envelope Offset Phase and Frequency\|12.2 Carrier-Envelope Offset Phase and Frequency]]
[[Notes/Ultrafast Laser Physics/12 Optical Frequency Comb from Modelocked Lasers#12.3 Measuring the CEO Frequency\|12.3 Measuring the CEO Frequency]]
[[Notes/Ultrafast Laser Physics/12 Optical Frequency Comb from Modelocked Lasers#12.4 Phase Noise and Frequency Noise\|12.4 Phase Noise and Frequency Noise]]
[[Notes/Ultrafast Laser Physics/12 Optical Frequency Comb from Modelocked Lasers#12.5 Optical Linewidth and Stability\|12.5 Optical Linewidth and Stability]]
[[Notes/Ultrafast Laser Physics/12 Optical Frequency Comb from Modelocked Lasers#12.6 Stabilised Frequency Combs\|12.6 Stabilised Frequency Combs]]
[[Notes/Ultrafast Laser Physics/12 Optical Frequency Comb from Modelocked Lasers#12.7 Practical Comb Technology\|12.7 Practical Comb Technology]]

---
# 12 Optical Frequency Comb from Modelocked Lasers
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf)

A modelocked laser is simultaneously an ultrashort-pulse source and an optical frequency comb. In the time domain it emits a periodic train of pulses. In the frequency domain this periodicity produces a set of equally spaced optical lines. The line spacing is the pulse repetition rate, and the absolute position of the comb is set by the carrier-envelope offset.

This chapter connects the pulse picture to precision frequency metrology. The key result is
$$
\nu_m=f_{\mathrm{CEO}}+m f_{\mathrm{rep}},
$$
where $m$ is a large integer, $f_{\mathrm{rep}}$ is the repetition rate, and $f_{\mathrm{CEO}}$ is the carrier-envelope offset frequency.

---
## 12.1 Comb Lines from a Modelocked Laser
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf)

The electric field of a pulse can be written as
$$
E(t)=A(t)\exp\!\left[i\left(\omega_c t+\varphi(t)\right)\right],
$$
where $A(t)$ is the pulse envelope and $\varphi(t)$ is the phase fluctuation relative to a perfect carrier at $\omega_c$.

For a periodic pulse train, the envelope repeats every roundtrip time $T_R$. A purely periodic train would produce comb lines exactly at integer multiples of $f_{\mathrm{rep}}=1/T_R$. However, the carrier wave does not generally slip by an integer number of optical cycles under the envelope after one roundtrip. The carrier-envelope phase changes by
$$
\Delta\phi_{\mathrm{CEO}}
$$
from one pulse to the next. This shifts the entire comb by
$$
f_{\mathrm{CEO}}=\frac{\Delta\phi_{\mathrm{CEO}}}{2\pi}f_{\mathrm{rep}}
\quad \mathrm{mod}\ f_{\mathrm{rep}}.
$$
Thus the optical frequencies are
$$
\nu_m=f_{\mathrm{CEO}}+m f_{\mathrm{rep}}.
$$
Both degrees of freedom are needed. Knowing only $f_{\mathrm{rep}}$ fixes the spacing but not the absolute offset of the comb teeth.

This is the key difference between "a stable repetition rate" and "a fully known optical comb". A photodiode can measure $f_{\mathrm{rep}}$ from the pulse train, but it cannot by itself tell where the carrier phase sits under the envelope. The CEO frequency supplies that missing optical phase information.

---
## 12.2 Carrier-Envelope Offset Phase and Frequency
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf)

The carrier-envelope offset describes the position of the optical carrier relative to the pulse envelope. A useful time-domain definition is
$$
\Delta T_{\mathrm{CEO}}=\frac{\phi_{\mathrm{CEO}}}{\omega_c}.
$$
For long pulses, a changing carrier-envelope phase often has little direct effect on the intensity envelope. For few-cycle pulses, the peak electric field depends strongly on this phase, so CEO stability becomes essential in strong-field and attosecond experiments.

For example, in a near-infrared pulse with only a few optical cycles, changing $\phi_{\mathrm{CEO}}$ can move the largest electric-field half-cycle from the centre of the envelope to a neighbouring half-cycle. In [[Notes/Attosecond Physics/2 Generation of Attosecond Pulses#2.2 Amplitude Gating\|amplitude gating]], that can decide whether one attosecond burst or a train of bursts is generated.

The instantaneous optical frequency is the time derivative of the total phase:
$$
\omega(t)=\frac{d}{dt}\left[\omega_c t+\varphi(t)\right]
=\omega_c+\frac{d\varphi}{dt}
=\omega_c+\delta\omega(t).
$$
Thus phase noise and frequency noise are not independent. Frequency fluctuations are the time derivative of phase fluctuations.

In a modelocked laser, the CEO phase is determined by the difference between phase and group propagation per roundtrip. The pulse envelope returns after the group delay, while the carrier phase accumulates according to the phase velocity. Dispersion, nonlinear phase shifts, gain dynamics, and intracavity elements can all affect the CEO frequency.

---
## 12.3 Measuring the CEO Frequency
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf)

The standard self-referencing technique is an $f$-to-$2f$ interferometer. It requires an octave-spanning comb spectrum. Consider one comb tooth at the low-frequency side:
$$
\nu_m=f_{\mathrm{CEO}}+m f_{\mathrm{rep}}.
$$
After frequency doubling, it becomes
$$
2\nu_m=2f_{\mathrm{CEO}}+2m f_{\mathrm{rep}}.
$$
This can be beaten against the comb tooth at the high-frequency side with index $2m$:
$$
\nu_{2m}=f_{\mathrm{CEO}}+2m f_{\mathrm{rep}}.
$$
The beat note is
$$
2\nu_m-\nu_{2m}=f_{\mathrm{CEO}}.
$$
Thus an octave-spanning spectrum allows direct measurement of the CEO frequency.

If the oscillator does not directly produce an octave, the spectrum is broadened in a nonlinear fibre or waveguide. This broadening must preserve coherence; otherwise the CEO beat becomes weak or noisy.

Another route is difference-frequency generation. If two spectral components from the same comb generate a difference frequency, the CEO terms can cancel. This can produce an offset-free comb, although the implementation has its own bandwidth and power requirements.

The $f$-to-$2f$ beat is only useful if it has enough signal-to-noise ratio for phase locking. In practice, this requires careful control of spectral broadening, polarisation, dispersion, and spatial mode overlap. A broad optical spectrum is not sufficient; the octave-spanning light must remain mutually coherent across the octave.

---
## 12.4 Phase Noise and Frequency Noise
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf)

Optical phase noise is usually described by the phase fluctuation $\varphi(t)$ or its PSD $S_\varphi(f)$. The corresponding frequency fluctuation in cycles per second is
$$
\delta\nu(t)=\frac{1}{2\pi}\frac{d\varphi}{dt}.
$$
In terms of Fourier frequency $f$, the PSDs obey
$$
S_{\delta\nu}(f)=f^2S_\varphi(f).
$$
This relation is useful because narrow linewidths are often easier to interpret in terms of frequency noise, while phase-locking electronics often measure phase noise.

For a comb line
$$
\nu_m=f_{\mathrm{CEO}}+m f_{\mathrm{rep}},
$$
the frequency fluctuation is
$$
\delta\nu_m=\delta f_{\mathrm{CEO}}+m\,\delta f_{\mathrm{rep}}.
$$
Since $m$ is very large for optical frequencies, small repetition-rate fluctuations can produce large optical-frequency fluctuations. This is why stabilising a comb requires controlling both $f_{\mathrm{rep}}$ and $f_{\mathrm{CEO}}$.

Timing jitter and optical phase noise are related but not identical. Timing jitter moves the pulse envelope in time and therefore changes the repetition phase. CEO noise changes the carrier phase under the envelope. Both affect the optical comb lines.

For the comb tooth $m$, repetition-rate noise is multiplied by the large integer $m$. CEO noise shifts all comb teeth together. This means two actuators can have very different effects: a cavity-length actuator primarily changes $f_{\mathrm{rep}}$, while pump power or nonlinear phase often couples more strongly to $f_{\mathrm{CEO}}$. Real lasers have cross-couplings, so comb locks are usually multiple-input control problems.

---
## 12.5 Optical Linewidth and Stability
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf)

The linewidth of a comb tooth depends on the integrated phase noise of that tooth. Slow frequency drift can broaden the line over long measurement times, even if the short-term linewidth is narrow. For this reason, linewidth always depends on observation time and noise spectrum.

A useful stability measure is the fractional frequency fluctuation
$$
y(t)=\frac{\delta\nu(t)}{\nu_0}.
$$
The Allan variance for averaging time $\tau$ is
$$
\sigma_y^2(\tau)
=\frac{1}{2}\left\langle
\left(\bar y_{k+1}-\bar y_k\right)^2
\right\rangle.
$$
It characterises how frequency stability improves or worsens with averaging time. This is more meaningful than a single linewidth number when low-frequency drift dominates.

Another useful concept is the separation between phase noise that contributes strongly to the central linewidth and noise that appears mainly as sidebands. In practice, this is handled through linewidth estimates from the measured frequency-noise PSD, often using a beta-separation-line type argument.

---
## 12.6 Stabilised Frequency Combs
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf)

A fully stabilised comb controls both degrees of freedom:
$$
\nu_m=f_{\mathrm{CEO}}+m f_{\mathrm{rep}}.
$$
The repetition rate is usually controlled by changing the cavity length with a piezo, intracavity electro-optic actuator, or other fast length actuator. The CEO frequency can be controlled through pump power, intracavity dispersion, nonlinear phase, an acousto-optic modulator, or other actuators depending on the laser design.

The locks are usually implemented as phase-locked loops:

- detect $f_{\mathrm{rep}}$ on a photodiode and compare it to an RF reference;
- detect $f_{\mathrm{CEO}}$ with an $f$-to-$2f$ interferometer and compare it to an RF reference;
- feed back to actuators with enough bandwidth to suppress the relevant noise.

Once both are locked, every comb tooth is known. The comb can then divide an optical frequency down to radio frequencies or transfer a radio-frequency reference up to optical frequencies. This is the central reason frequency combs transformed precision metrology.

The same comb can also be locked to an optical reference. In that case one comb tooth, or a beat with a narrow-linewidth cw laser, is stabilised. The repetition rate and CEO then inherit the optical reference stability, subject to the lock topology.

For amplified ultrafast systems, the oscillator comb is often only the beginning. Chirped-pulse amplification, nonlinear broadening, and compression must preserve enough phase coherence that the final high-energy pulse train still has a meaningful CEO phase. Any amplifier or compressor noise that changes the nonlinear phase can reintroduce CEO noise downstream.

---
## 12.7 Practical Comb Technology
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf)

A practical frequency comb system contains more than the oscillator. Typical components are:

- a low-noise modelocked laser oscillator;
- dispersion management for stable short pulses;
- nonlinear broadening for octave-spanning spectra;
- an $f$-to-$2f$ interferometer or another CEO detection method;
- fast and slow actuators for $f_{\mathrm{rep}}$ and $f_{\mathrm{CEO}}$;
- RF electronics for phase detection and feedback;
- optical references or RF references, depending on the application.

The oscillator design still matters. A comb with high CEO beat signal-to-noise ratio, low intensity noise, low timing jitter, and enough actuator bandwidth is much easier to stabilise. Conversely, an oscillator that looks good by pulse duration and average power alone can be poor as a comb if its noise or actuator response is bad.

In ultrafast science, CEO-stabilised combs connect pulse physics to strong-field physics. For few-cycle pulses, stabilising $\phi_{\mathrm{CEO}}$ fixes the absolute electric field waveform, not just the intensity envelope. This is why the same technology is important for both optical clocks and attosecond pulse generation.

This is also why frequency-comb language appears even when the experiment is not "metrology" in the narrow sense. If an experiment depends on the absolute electric-field waveform, it depends on phase coherence between pulses, even if the final observable is an electron spectrum or an XUV burst rather than an optical frequency measurement.
