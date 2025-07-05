---
{"dg-publish":true,"permalink":"/website/website-github-clone/src/site/notes/notes/attosecond-physics/2-generation-of-attosecond-pulses/","updated":"2025-07-03T20:20:02.049+02:00"}
---


Jump back to ==[[Notes/Attosecond Physics/Attosecond Physics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/Attosecond Physics/2 Generation of Attosecond Pulses#2.1 Attosecond Pulse Trains\|2.1 Attosecond Pulse Trains]]
[[Notes/Attosecond Physics/2 Generation of Attosecond Pulses#2.2 Amplitude Gating\|2.2 Amplitude Gating]]
[[Notes/Attosecond Physics/2 Generation of Attosecond Pulses#2.3 Polarisation Gating\|2.3 Polarisation Gating]]
[[Notes/Attosecond Physics/2 Generation of Attosecond Pulses#2.4 Interference Polarisation Gating\|2.4 Interference Polarisation Gating]]
[[Notes/Attosecond Physics/2 Generation of Attosecond Pulses#2.5 Two-Colour Gating Method\|2.5 Two-Colour Gating Method]]
[[Notes/Attosecond Physics/2 Generation of Attosecond Pulses#2.6 (Generalised) Double Optical Gating (DOG)\|2.6 (Generalised) Double Optical Gating (DOG)]]
[[Notes/Attosecond Physics/2 Generation of Attosecond Pulses#2.7 Ionisation Gating\|2.7 Ionisation Gating]]
[[Notes/Attosecond Physics/2 Generation of Attosecond Pulses#2.8 Spatial Gating\|2.8 Spatial Gating]]
[[Notes/Attosecond Physics/2 Generation of Attosecond Pulses#2.9 Generating Circularly Polarised High Harmonics\|2.9 Generating Circularly Polarised High Harmonics]]

---
# 2 Generation of Single Attosecond Pulses
[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=304&selection=2,0,3,20| ]] [[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=318&selection=20,0,20,22| ]]

High-order harmonics were first observed around 1987 and 1988. However, it took nearly a decade before the first attosecond pulses were reported. In 2001, both the first attosecond pulse train (APT) and the first single attosecond pulse (SAP) were demonstrated. It was already known from theoretical considerations and spectral measurements that high-order harmonics exhibit a flat plateau in their spectra. Furthermore, theoretical models indicated that these harmonics possess nearly constant relative phases. This led to the speculation that the coherent superposition of such harmonics could produce a train of attosecond pulses.

For a long time, the phase relationship between high-order harmonics remained experimentally inaccessible. The emergence of attosecond science, and particularly the generation and measurement of attosecond pulses, became possible only after reliable experimental techniques, such as RABBITT (Reconstruction of Attosecond Beating By Interference of Two-photon Transitions) and attosecond streaking, were developed to determine these phases.

Although each burst in an APT has a sub-femtosecond duration, the overall pulse train typically spans several tens of femtoseconds, mirroring the envelope of the driving laser pulse. For many applications requiring sub-femtosecond temporal resolution to probe ultrafast electron dynamics, single attosecond pulses are necessary. In the following sections, we will discuss the most common *gating* techniques employed to isolate or generate SAPs.

---

## 2.1 Attosecond Pulse Trains
[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=304&selection=29,0,29,8| ]]

The harmonic spectrum produced during high-order harmonic generation (HHG) consists of a series of narrow peaks. When a multi-cycle (long) driving laser pulse is used, and the generation medium possesses inversion symmetry (like noble gas atoms), only odd harmonics of the fundamental laser frequency $\omega_0$ are generated, due to symmetry considerations. Thus, the harmonic peaks are separated by $2\omega_0$. Measuring the harmonic spectrum with a spectrometer reveals only the spectral amplitudes (or intensities) of these harmonics, leaving their relative phases inaccessible. These phases, however, are crucial for reconstructing the temporal profile of the emitted pulse.

Consider the superposition of different odd harmonics. If we represent the spectral amplitude of the $(2q+1)$-th harmonic as $U_{2q+1}$ and its phase as $\varphi_{2q+1}$, the temporal profile of the synthesised electric field $E(t)$ (and thus intensity $I(t) = |E(t)|^2$) is given by:
$$
E(t) = \sum_q U_{2q+1} e^{-i((2q+1)\omega_0 t - \varphi_{2q+1})}, \quad I(t) = \left| \sum_q U_{2q+1} e^{-i((2q+1)\omega_0 t - \varphi_{2q+1})} \right|^2.
$$
In the simplest case, if the spectral phase is linear with frequency, meaning $\varphi_{2q+1} = (2q+1)\omega_0 t_e + \phi_{\text{offset}}$ (where $t_e$ is a constant often referred to as the *emission time* relative to a reference point in the laser cycle, and $\phi_{\text{offset}}$ is a common phase offset), and if the amplitudes $U_{2q+1}$ are approximately constant over a range of $N_h$ harmonics, the summation for $E(t)$ results in a temporal profile whose intensity $I(t)$ is:
$$
I(t) \sim \frac{\sin^2 \left[ N_h \omega_0 (t - t_e) \right]}{\sin^2 \left[ \omega_0 (t - t_e) \right]}.
$$
This expression describes an attosecond pulse train (APT): a series of short bursts of radiation separated in time by $T_0/2 = \pi/\omega_0$, where $T_0 = 2\pi/\omega_0$ is the period of the driving laser. Each individual burst has a duration (for instance, FWHM) of approximately $\frac{T_0}{2N_h}$. In this specific case of constant amplitude and linear spectral phase, each attosecond burst is *transform-limited* (TL), meaning it has the shortest possible duration for its given spectral bandwidth.

It is important to note that a TL attosecond burst does not require all harmonic components to have the same absolute phase ($\varphi_{2q+1} = \text{constant}$). Instead, it requires that the group delay, or effective emission time $t_e$, is constant across the harmonics contributing to the burst; that is, the spectral phase $\varphi(\Omega)$ should be linear with the harmonic frequency $\Omega=(2q+1)\omega_0$.

Interestingly, the regular pulsed structure of $I(t)$ as an APT is not significantly affected by moderate variations in the amplitudes $U_{2q+1}$ of different harmonics, as long as many harmonics contribute. This behaviour is analogous to that of a [[Notes/Ultrafast Laser Physics/7 Q-Switching#7 Modelocking\|mode-locked laser]], where many phase-locked longitudinal cavity modes superpose to form a train of short pulses. If the effective emission time $t_e$ varies with harmonic frequency (i.e., the spectral phase is non-linear), the pulse becomes *chirped*, resulting in a longer duration for each attosecond burst than that of the TL pulse.

Due to the Heisenberg uncertainty principle, it is impossible to define an "instant" of emission precisely associated with a specific XUV frequency $\Omega$. The effective emission time (or group delay) of the harmonic components around frequency $\Omega$ is defined as:
$$
t_e(\Omega) = \frac{\partial \varphi(\Omega)}{\partial \Omega}.
$$
For discrete harmonics, this can be approximated by the phase difference between adjacent harmonics:
$$
t_e \approx \frac{\varphi_{2q+1} - \varphi_{2q-1}}{2\omega_0},
$$
which applies to harmonics centred around the frequency $\Omega \approx 2q\omega_0$. When a synthesised wave includes a broad range of harmonics with significantly varying emission times (a non-zero group delay dispersion, GDD, or "attochirp"), the temporal profile of each burst deviates from the TL condition and is broadened. External phase correction techniques (using, for instance, thin metallic filters or adaptive optics in the XUV) can sometimes be employed to compensate for these variations, thereby shortening the attosecond pulses and bringing them closer to their transform limit.

Consider a typical experimental setup used for the generation and characterisation of attosecond pulse trains:

![Attachments/Attosecond and Strong-Field Physics Principles and Applications 3.webp|700](/img/user/Attachments/Attosecond%20and%20Strong-Field%20Physics%20Principles%20and%20Applications%203.webp)[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=306&rect=123,407,483,637| ]]

In this setup:
- High-order harmonics are generated by focusing an intense femtosecond laser pulse into a gas target (such as argon).
- An aperture may be used to block the highly divergent part of the fundamental IR beam, allowing the generated XUV harmonics (which are often more collimated) and a portion of the IR beam to co-propagate along the same axis.
- A suitable mirror (like a holey mirror or a spatially separated dual mirror) deflects or transmits the combined beam into a secondary gas target (often the same gas species) within a spectrometer. Here, the XUV photons ionise the target atoms, generating photoelectrons.
- The kinetic energy spectra of these photoelectrons are measured, typically as a function of the time delay between the IR pulse and the XUV APT, which is controlled by an optical delay line. The IR field acts as a "streaking" or "modulating" field for the photoemission process.

The two-dimensional electron spectra (energy versus delay) obtained from these measurements are known as *spectrograms* or *streaking traces* (or RABBITT traces if specific sidebands are analysed). These traces contain encoded information about the spectral amplitudes and phases of the harmonics, allowing for the reconstruction of the temporal structure of the attosecond pulses in the train.

---
## 2.2 Amplitude Gating
[[Reading/Books/Attosecond Physics/Attosecond Physics Attosecond Measurements and Control.pdf#page=59&selection=53,0,76,0| ]]

In high-order harmonic generation driven by a multi-cycle laser pulse, discrete harmonics arise from the coherent superposition of XUV bursts generated with a periodicity of $T_0/2$. However, if the conditions are such that high-energy harmonics (particularly those in the cutoff region of the HHG spectrum) are produced efficiently only during a single optical cycle (or even a single half-cycle) of the driving laser, the corresponding harmonic spectrum in that cutoff region can become continuous, rather than a series of discrete peaks. By spectrally filtering this continuous part of the spectrum, it is possible to isolate a single attosecond pulse (SAP). This technique is known as amplitude gating because it relies on the rapid variation of the driving laser field's amplitude to confine efficient HHG to a very short temporal window.

For this method to be effective, ultrashort driving laser pulses (typically few-cycle, duration $\lesssim 10 \, \text{fs}$) are required. Furthermore, the carrier-envelope phase (CEP), $\phi_{\text{CEP}}$, of the pulse, which defines the phase of the carrier wave relative to the peak of the pulse envelope, must be stabilised and controlled.
When the driving pulse consists of only a few optical cycles, the highest photon energies—those near the cutoff region—are predominantly generated during the single half-cycle of the electric field that has the highest peak amplitude. This is illustrated in figure (b) below. This confinement results in a continuous harmonic spectrum in the cutoff region, as shown in (c). By spectrally selecting only these cutoff components from the high-harmonic beam (using appropriate XUV filters or mirrors), an isolated light pulse with an attosecond temporal duration can be obtained, as depicted in (d).

![Attachments/Attosecond Physics Attosecond Measurements and Control.webp|700](/img/user/Attachments/Attosecond%20Physics%20Attosecond%20Measurements%20and%20Control.webp)[[Reading/Books/Attosecond Physics/Attosecond Physics Attosecond Measurements and Control.pdf#page=60&rect=65,410,376,613| ]]

The electric field of the driving laser pulse can be described as:
$$
E(t) = E_0(t) \cos \left( \omega_0 t + \phi_{\text{CEP}} \right),
$$
where $E_0(t)$ is the pulse envelope, for instance, $E_0(t) = E_{peak} \exp \left[ -2 \ln 2 \left( t/\tau_p \right)^2 \right]$, $\tau_p$ is the pulse duration (FWHM), $\omega_0$ is the central carrier frequency, and $\phi_{\text{CEP}}$ is the carrier-envelope phase. If $\phi_{\text{CEP}}$ fluctuates randomly from one laser shot to the next, the temporal structure of the electric field waveform, and particularly the timing and strength of the peak half-cycle, will also vary. This directly impacts the properties of the generated attosecond pulse. Therefore, precise stabilisation and control of the CEP are essential for generating reproducible single attosecond pulses via amplitude gating.

---
## 2.3 Polarisation Gating
[[Reading/Books/Attosecond Physics/Attosecond Physics Attosecond Measurements and Control.pdf#page=61&selection=64,0,64,60| ]]

Polarisation gating (PG) is a technique that uses the strong dependence of HHG efficiency on the ellipticity of the driving laser field to create a short temporal window for harmonic generation. The method typically involves synthesising a driving laser field whose polarisation state changes rapidly with time. One common approach is to combine a right-circularly polarised pulse with a time-delayed left-circularly polarised pulse of similar characteristics. This creates a composite laser field which is elliptically (or circularly) polarised at the leading and trailing edges of the pulse superposition, but becomes transiently linearly polarised around the point of temporal overlap (pulse centre).

Since HHG efficiency is very high for linearly polarised light but is strongly suppressed for elliptically or circularly polarised light (because the electron trajectory is less likely to return to the parent ion), efficient harmonic generation is confined to the short time interval when the field is predominantly linear.
The *polarisation gate width* ($\Delta t_G$), defined as the time interval during which the effective ellipticity is low enough for HHG to be efficient, is approximately given by formulas such as:
$$
\Delta t_G \sim 0.3 \frac{\tau^2}{T_d},
$$
where $\tau$ is the duration of the individual circularly polarised pulses and $T_d$ is the time delay between their centres. If $\Delta t_G$ is shorter than half an optical cycle of the driving laser (for instance, $\Delta t_G < 1.3 \, \text{fs}$ for an $800 \, \text{nm}$ laser), then only a single burst of XUV radiation, corresponding to a single attosecond pulse, is generated, rather than an APT. The gate width $\Delta t_G$ can be reduced by increasing the delay $T_d$. However, $T_d$ must generally remain below approximately $2\tau$ to ensure effective overlap and a central region of linear polarisation. In practical applications, $T_d$ is often set to be comparable to $\tau$.

A limiting factor for PG (and other gating methods) can be the ionisation of the target medium. If the leading parts of the gate (where polarisation might still be somewhat elliptical but intensity is rising) cause significant ionisation, the neutral atom density available for HHG in the linearly polarised part of the gate is depleted, reducing efficiency. For example, if the pulse duration exceeds a certain value ($6.5$ fs in one study), the medium might become fully ionised before the peak of the gate, placing an upper limit on the driving pulse duration for effective PG.

![Attachments/Attosecond Physics Attosecond Measurements and Control 1.webp|700](/img/user/Attachments/Attosecond%20Physics%20Attosecond%20Measurements%20and%20Control%201.webp)[[Reading/Books/Attosecond Physics/Attosecond Physics Attosecond Measurements and Control.pdf#page=62&rect=52,403,389,614| ]]

A PG field with time-dependent ellipticity can be generated experimentally by passing an initially linearly polarised femtosecond pulse through a setup involving birefringent optics. For instance, a first birefringent plate (like a thick quartz plate or a split pair of calcite wedges) can split the pulse into two orthogonally polarised components, introducing a controllable time delay $T_d$ between them. A subsequent quarter-wave plate, with its optical axis typically oriented at $45^\circ$ to the polarisations of these two components, then converts them into counter-rotating circularly polarised pulses, which when superposed form the desired PG pulse.

HHG efficiency is highly sensitive to ellipticity because, in an elliptically polarised field, the ionised electron acquires a significant transverse momentum component. This causes a lateral drift away from the parent ion, reducing the probability of recollision and thus suppressing harmonic emission. Therefore, efficient HHG requires a polarisation gate where the ellipticity remains very low (close to linear polarisation) for at least one optical half-cycle.
The duration $\delta t_{\text{PG}}$ during which the ellipticity $\varepsilon(t)$ remains below a certain threshold $\varepsilon_{\text{th}}$ can be approximated by expressions like:
$$
\delta t_{\text{PG}} \approx \frac{\varepsilon_{\text{th}}}{\ln 2} \frac{\tau^2}{T_d}.
$$
The PG window (for instance, defined as the period during which ellipticity is below $0.2$) must be shorter than $T_0/2$ (the interval between successive attosecond bursts in an APT from a linearly polarised multi-cycle pulse) to ensure SAP generation. This requirement often necessitates the use of driving pulses with durations below approximately $5$ fs. Additionally, CEP stability can be critical for ensuring that the linearly polarised part of the gate aligns optimally with the peak of the laser envelope, leading to reproducible SAP generation.

---
## 2.4 Interference Polarisation Gating
[[Reading/Books/Attosecond Physics/Attosecond Physics Attosecond Measurements and Control.pdf#page=63&selection=62,0,62,38| ]]

Interference Polarisation Gating (IPG), sometimes also related to "generalised polarisation gating", is a more complex but potentially more efficient or flexible variation of the standard polarisation gating technique. The following figure illustrates a conceptual setup, which can involve a double Michelson-type interferometer or cascaded birefringent elements:

![Attachments/Attosecond Physics Attosecond Measurements and Control 2.webp|700](/img/user/Attachments/Attosecond%20Physics%20Attosecond%20Measurements%20and%20Control%202.webp)[[Reading/Books/Attosecond Physics/Attosecond Physics Attosecond Measurements and Control.pdf#page=64&rect=53,464,203,611| ]]

In a typical IPG scheme based on interferometry:
- An initial linearly polarised pulse is split into two or more replicas.
- These replicas traverse different optical paths, where their polarisation states and relative delays are precisely controlled. For instance, one path might create a strong linearly polarised central pulse, while another path creates orthogonally polarised, time-delayed "pedestal" pulses.
- When these beams are recombined collinearly, the interference results in a synthesised pulse that is linearly polarised only at its very centre, while being elliptically or circularly polarised in the leading and trailing wings. This creates a very sharp and effective polarisation gate.

Although IPG techniques can be more demanding in terms of alignment and stability of the interferometric paths, they can offer greater flexibility in tailoring the temporal profile of the gate and potentially allow the use of somewhat longer driving pulses compared to basic PG, while still achieving a very short gating window.

A limitation common to many gating techniques, including IPG, is its sensitivity to the CEP of the driving pulse, especially when using few-cycle pulses. As shown in the figure below, the generated supercontinuum (indicative of SAP generation) can depend strongly on CEP stability. Therefore, CEP-stabilised driving pulses are often essential for producing consistent and isolated attosecond pulses with IPG.

![Attachments/Attosecond Physics Attosecond Measurements and Control 3.webp|700](/img/user/Attachments/Attosecond%20Physics%20Attosecond%20Measurements%20and%20Control%203.webp)[[Reading/Books/Attosecond Physics/Attosecond Physics Attosecond Measurements and Control.pdf#page=64&rect=204,464,387,612| ]]

---
## 2.5 Two-Colour Gating Method
[[Reading/Books/Attosecond Physics/Attosecond Physics Attosecond Measurements and Control.pdf#page=68&selection=19,0,19,27| ]]

To relax the stringent requirement for ultrashort (few-cycle) driving pulses inherent in some gating techniques, the temporal symmetry of the HHG process can be broken by introducing a second, weaker laser field at a different frequency, typically the second harmonic ($2\omega_0$, or $\lambda_0/2$) of the fundamental driving laser field ($\omega_0$). If this two-colour field ($E_{\omega_0}(t) + E_{2\omega_0}(t)$) has the appropriate relative phase and intensity ratio, it can break the half-cycle periodicity of HHG emission. This means that emission from one half-cycle of the fundamental can be enhanced while emission from the subsequent (oppositely polarised) half-cycle is suppressed, effectively modifying the HHG emission periodicity from $T_0/2$ to $T_0$. This allows for the generation of one dominant attosecond burst per fundamental optical cycle.

At the same total pulse energy, this method can sometimes enhance overall HHG efficiency for certain harmonic ranges or reduce ionisation at the leading edge of the driving pulse compared to a single-colour pulse of the same peak intensity, allowing for the use of driving pulses with durations up to, for instance, $25 \, \text{fs}$.

Consider the synthesised electric field from the combination of a fundamental frequency ($\omega_0$) and its $K$-th harmonic ($K\omega_0$, where $K=2$ for second harmonic gating):
$$
\begin{aligned}
E_{\text{mix}}(t) = & E_0(t) \cos \left( \omega_0 t + \phi_{\text{CEP},0} \right) \\
& + E_1(t-\delta t) \cos \left( K \omega_0 (t-\delta t) + \phi_{\text{CEP},1} + \phi_{\text{rel}} \right),
\end{aligned}
$$
where $E_0(t)$ and $E_1(t)$ are the envelopes (for example, Gaussian envelopes with durations $\tau_0$ and $\tau_1$), $\delta t$ is a relative time delay, and $\phi_{\text{rel}}$ is the relative phase between the two fields. Both pulses are typically co-polarised (parallelly polarised), with the fundamental field acting as the main HHG driver and the supplementary (second harmonic) field modulating the total field waveform to break its symmetry.

![Attachments/Attosecond Physics Attosecond Measurements and Control 4.webp|700](/img/user/Attachments/Attosecond%20Physics%20Attosecond%20Measurements%20and%20Control%204.webp)[[Reading/Books/Attosecond Physics/Attosecond Physics Attosecond Measurements and Control.pdf#page=69&rect=52,292,221,607| ]]

As shown, by carefully choosing the relative phase and intensity (for instance, using a weaker second harmonic where $E_{0,peak} \approx 9 E_{1,peak}$), the amplitude of some field crests can be enhanced while others are suppressed within each fundamental cycle. This can lead to the preferential generation of XUV radiation from specific half-cycles, producing a continuous spectrum near the cutoff if the gating is effective, even with relatively long driving pulses (such as $10$ fs). The second harmonic pulse can often have a longer duration than the few-cycle pulses required for amplitude gating, offering more experimental flexibility.

---
## 2.6 (Generalised) Double Optical Gating (DOG)
[[Reading/Books/Attosecond Physics/Attosecond Physics Attosecond Measurements and Control.pdf#page=70&selection=37,0,37,62| ]]

Combining a fundamental laser field with its second harmonic (a two-colour field as discussed in [[Notes/Attosecond Physics/2 Generation of Attosecond Pulses#2.5 Two-Colour Gating Method\|section 2.5]]) inherently breaks the inversion symmetry of the total driving field waveform, $E(t) \neq -E(t+T_0/2)$. This allows both even and odd harmonics to be generated. The resulting harmonic spectrum can exhibit peaks spaced by $\omega_0$, rather than $2\omega_0$. According to Fourier transform theory, in the time domain, this denser harmonic spectrum corresponds to a train of attosecond pulses with an equal separation of $T_0 = 2\pi/\omega_0$ (one attosecond burst per fundamental optical cycle), instead of $T_0/2$.

![Attachments/Attosecond Physics Attosecond Measurements and Control 8.webp|700](/img/user/Attachments/Attosecond%20Physics%20Attosecond%20Measurements%20and%20Control%208.webp)[[Reading/Books/Attosecond Physics/Attosecond Physics Attosecond Measurements and Control.pdf#page=71&rect=192,440,386,611| ]]

The **Double Optical Gating (DOG)** technique often refers to combining such a two-colour gating approach with polarisation gating. By using a two-colour field where the components also have specific, controlled polarisation states (for instance, the fundamental and second harmonic are orthogonally polarised, or both are used to create a time-dependent ellipticity similar to PG but with the added asymmetry of the two-colour field), a very effective temporal gate can be created.
The figure compares standard polarisation gating (PG) with DOG. Unlike conventional PG which might require very short pulses for a narrow linear gate, DOG can offer advantages. For instance, it can allow the generation of single attosecond pulses (SAPs) even when the effective gate width created by the polarisation control is wider than $T_0/2$, because the two-colour field itself already selects for emission once per $T_0$. This potentially enables the use of longer driving pulses, enhancing experimental flexibility and average power.

![Attachments/Attosecond Physics Attosecond Measurements and Control 6.webp|700](/img/user/Attachments/Attosecond%20Physics%20Attosecond%20Measurements%20and%20Control%206.webp)[[Reading/Books/Attosecond Physics/Attosecond Physics Attosecond Measurements and Control.pdf#page=71&rect=166,309,385,421| ]]

Generalised DOG (GDOG) might involve more complex multi-colour fields or polarisation shaping to further optimise the gating.

---
## 2.7 Ionisation Gating
[[Reading/Books/Attosecond Physics/Attosecond Physics Attosecond Measurements and Control.pdf#page=64&selection=43,0,43,21| ]]

Ionisation gating relies on the intrinsic dynamics of the HHG process itself, particularly the strong dependence of HHG efficiency on the availability of neutral atoms and the ionisation rate. When atoms are exposed to an intense laser field whose peak intensity is sufficient to cause significant or even complete ionisation (an "over-saturated" field), rapid ionisation can occur within a single optical cycle or less. If the neutral target is completely depleted at the leading edge of the pulse, subsequent parts of the pulse cannot generate harmonics.

- **Leading Edge:** Rapid ionisation occurs. Harmonics are generated during this phase, but as the neutral atom population depletes, HHG efficiency drops.
- **Trailing Edge:** No significant HHG occurs due to the absence of neutral atoms, which are required for the first step (ionisation) of the [[Notes/Attosecond Physics/1 Fundamentals of High-Order Harmonic Generation#1.1 Simple Man's Model\|three-step model]].

Thus, HHG is effectively confined to the leading edge of the pulse, creating an "ionisation gate" even with multi-cycle driving pulses. The temporal window for HHG is determined by how quickly the medium ionises.

Moreover, as the laser intensity increases rapidly at the leading edge of a very intense pulse, each subsequent half-cycle that encounters neutral atoms reaches a higher peak intensity. This means that progressively higher-order harmonics, extending further into the cutoff, are generated by these successive half-cycles on the rising edge. Once the intensity is high enough to fully ionise the medium, HHG ceases. The highest-order harmonics, forming a continuous spectrum near the overall cutoff, are generated by the last few half-cycles before complete depletion. For instance, harmonics might be suppressed after $t = -2.5 T_0$ (relative to pulse peak), with the highest orders generated in the half-cycle from $-3T_0$ to $-2.5T_0$.

![Attachments/Attosecond Physics Attosecond Measurements and Control 10.webp|700](/img/user/Attachments/Attosecond%20Physics%20Attosecond%20Measurements%20and%20Control%2010.webp)[[Reading/Books/Attosecond Physics/Attosecond Physics Attosecond Measurements and Control.pdf#page=65&rect=77,420,360,612| ]]

By spectrally filtering out the lower-order, discrete harmonics (which might be generated over several half-cycles before complete depletion), a single attosecond pulse (SAP) originating from the continuous spectrum generated at the very leading edge of the pulse can be isolated. Ionisation gating is particularly effective because it utilises the strong-field ionisation dynamics to confine HHG to a narrow temporal window, potentially enabling the generation of isolated attosecond pulses without necessarily requiring extremely short few-cycle driving pulses, provided the intensity rises sharply enough to deplete the medium quickly.

---
## 2.8 Spatial Gating

The key idea behind spatial gating is to spatially separate single attosecond pulses (SAPs) that are generated during different half-cycles (or full cycles, depending on the scheme) of the driving laser field. This is achieved by arranging the HHG process such that each successively generated attosecond burst is emitted in a slightly different direction.

One method to implement this is by introducing a controlled tilt in the phase front of the generating infrared (IR) pulse relative to its intensity front. This is often called inducing a **pulse-front tilt (PFT)**. This can be achieved, for instance, by passing the IR beam through a pair of wedged glass prisms before focusing it into the gas target. With such a tilt, the peak of the laser field arrives at different transverse positions in the focus at slightly different times. Consequently, each attosecond burst generated within what would otherwise be an APT is emitted from a slightly different transverse position or, more importantly, in a slightly different propagation direction.

If the wavefront rotation (angular sweep) within one half-cycle (or full cycle) of the driving laser is larger than the intrinsic divergence angle of the individual attosecond pulses, each burst can be spatially separated in the far field. This allows for the selection of a single attosecond pulse from the train using a spatial filter (like an aperture). However, this method typically still requires relatively short driving pulses, for instance, below $5 \, \text{fs}$, to achieve good temporal resolution for the individual pulses and efficient spatial separation.

One well-known configuration for spatial gating based on PFT is the **Attosecond Lighthouse** setup:

![Attachments/Lecture 3.webp|700](/img/user/Attachments/Lecture%203.webp)[[Courses/3. Semester/Ultrafast Laser Physics/Lecture.pdf#page=599&rect=292,355,426,796| ]]

In the Attosecond Lighthouse, the pulse-front tilt effectively "sweeps" the direction of harmonic emission over time, causing each attosecond burst to be emitted at a distinct angle, analogous to the beam from a lighthouse.

Alternatively, spatial gating can be implemented using **non-collinear optical gating**, where two (or more) driving laser pulses are focused into the gas target at a small angle relative to each other. HHG occurs efficiently only in the region where these pulses overlap constructively and with the correct combined field characteristics. The generated harmonics may then propagate in a direction bisecting the angle of the input beams, or in other specific directions depending on the phase-matching conditions for the non-collinear interaction, allowing spatial separation from the fundamental beams and potentially from harmonics generated by each beam individually.

![Attachments/Lecture 4.webp|700](/img/user/Attachments/Lecture%204.webp)[[Courses/3. Semester/Ultrafast Laser Physics/Lecture.pdf#page=599&rect=39,379,264,694| ]]

Both methods exploit spatial separation to isolate SAPs, offering an alternative or complement to purely temporal gating techniques. However, they require precise control over the pulse-front tilt or the non-collinear angles and overlap.

---
## 2.9 Generating Circularly Polarised High Harmonics
[[Reading/Papers/Attosecond/Generation of circularly polarised high harmonics.pdf#page=1&selection=0,0,1,35| ]]

Based on the paper ["Non-collinear generation of angularly isolated circularly polarized high harmonics"](https://www.nature.com/articles/nphoton.2015.181), one method to generate circularly polarised high-order harmonics involves non-collinearly focusing a left-circularly polarised (LCP) and a right-circularly polarised (RCP) femtosecond laser beam into a gas target. This approach offers several advantages compared to some other methods for generating circularly polarised XUV light. Firstly, it can use a single-colour driving laser (split and then recombined), which helps in maximising the achievable cutoff photon energies compared to multi-colour schemes that might have lower effective peak fields. Secondly, due to the specific non-collinear geometry and selection rules, the generated circularly polarised high harmonic radiation can be angularly isolated from other signals. Lastly, the crossing angle between the two driving lasers can facilitate this angular separation of the desired harmonic beams without necessarily requiring a spectrometer for selection if the angular separation is sufficient.

![Attachments/Generation of circularly polarised high harmonics.webp|700](/img/user/Attachments/Generation%20of%20circularly%20polarised%20high%20harmonics.webp)[[Reading/Papers/Attosecond/Generation of circularly polarised high harmonics.pdf#page=3&rect=127,581,486,739| ]]

The non-collinear HHG process with circularly polarised drivers can be understood from two perspectives:
- **Photon picture:** This method is governed by selection rules that take into account the conservation of energy, parity, linear momentum (phase matching), and spin angular momentum. For HHG, the atom absorbs $N_1$ photons from the first beam (say, LCP, helicity $\sigma_1 = -1$) and $N_2$ photons from the second beam (RCP, helicity $\sigma_2 = +1$) to emit a harmonic photon of order $q = N_1+N_2$ with helicity $\sigma_q$. Conservation of spin angular momentum requires $\sigma_q = N_1\sigma_1 + N_2\sigma_2$. For instance, to generate an RCP harmonic ($\sigma_q = +1$), one possible combination is $N_1$ LCP photons and $N_2=N_1+1$ RCP photons. This dictates specific combinations of photons from each beam for each harmonic order and helicity, leading to distinct emission directions due to linear momentum conservation in the non-collinear geometry (see figure (a) and (c) in the source).
- **Wave picture:** The key is that although each individual driving beam is circularly polarised (for which HHG is strongly suppressed), in the region where the two counter-rotating circularly polarised beams cross, their superposition can create a total electric field that is locally linearly polarised, provided their amplitudes are equal. The orientation of this local linear polarisation, however, rotates in time with a frequency related to the fundamental. HHG is efficiently driven when this local field is linear. This can be thought of as a "rotating polarisation gate." In contrast to the interference pattern formed by two co-polarised or linearly polarised beams (figure (b) in source), the crossing of two orthogonally (counter-rotating) circularly polarised beams (figure (d) in source) does not produce a stationary spatial intensity interference pattern in the crossing plane, but rather this rotating linear polarisation.

For the mixing of linearly polarised laser beams in a non-collinear geometry, a constraint for generating a harmonic of order $q$ is often that the total number of photons absorbed from each beam must satisfy parity rules relative to the harmonic order. For circularly polarised drivers, the spin angular momentum conservation is particularly restrictive.

![Attachments/Generation of circularly polarised high harmonics 2.webp|700](/img/user/Attachments/Generation%20of%20circularly%20polarised%20high%20harmonics%202.webp)[[Reading/Papers/Attosecond/Generation of circularly polarised high harmonics.pdf#page=4&rect=56,493,554,739| ]]

Both driving beams need to be precisely overlapped both in time and space for the combined field to achieve the necessary characteristics for HHG, as individual circularly polarised beams are very inefficient at harmonic generation. The scheme typically produces two XUV beams for each generated harmonic order that satisfies the selection rules, with these two beams being circularly polarised with opposite helicities and emitted at symmetric non-zero angles with respect to the bisector of the driving beams.

![Attachments/Generation of circularly polarised high harmonics 1.webp|700](/img/user/Attachments/Generation%20of%20circularly%20polarised%20high%20harmonics%201.webp)[[Reading/Papers/Attosecond/Generation of circularly polarised high harmonics.pdf#page=3&rect=134,311,259,504| ]]

---