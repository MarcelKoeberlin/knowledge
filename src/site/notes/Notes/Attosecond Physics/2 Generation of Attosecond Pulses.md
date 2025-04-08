---
{"dg-publish":true,"permalink":"/notes/attosecond-physics/2-generation-of-attosecond-pulses/","hide":"true","updated":"2025-04-08T14:43:20.000+02:00"}
---

Jump back to ==[[Notes/Attosecond Physics/Attosecond Physics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Notes/Attosecond Physics/2 Generation of Attosecond Pulses#2.1 Attosecond Pulse Trains\|2.1 Attosecond Pulse Trains]]
- [[Notes/Attosecond Physics/2 Generation of Attosecond Pulses#2.2 Amplitude Gating\|2.2 Amplitude Gating]]
- [[Notes/Attosecond Physics/2 Generation of Attosecond Pulses#2.3 Polarisation Gating\|2.3 Polarisation Gating]]
- [[Notes/Attosecond Physics/2 Generation of Attosecond Pulses#2.4 Interference Polarisation Gating\|2.4 Interference Polarisation Gating]]
- [[Notes/Attosecond Physics/2 Generation of Attosecond Pulses#2.5 Two-Colour Gating Method\|2.5 Two-Colour Gating Method]]
- [[Notes/Attosecond Physics/2 Generation of Attosecond Pulses#2.6 (Generalised) Double Optical Gating (DOG)\|2.6 (Generalised) Double Optical Gating (DOG)]]
- [[Notes/Attosecond Physics/2 Generation of Attosecond Pulses#2.7 Ionisation Gating\|2.7 Ionisation Gating]]
- [[Notes/Attosecond Physics/2 Generation of Attosecond Pulses#2.8 Spatial Gating\|2.8 Spatial Gating]]

---
# 2 Generation of Single Attosecond Pulses
[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=304&selection=2,0,3,20|•]] [[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=318&selection=20,0,20,22|•]]

High-order harmonics were first observed around 1987 and 1988. However, it took nearly a decade before the first attosecond pulses were reported. In 2001, both the first attosecond pulse train (APT) and the first single attosecond pulse (SAP) were demonstrated. It was already known that high-order harmonics exhibit a flat plateau in their spectra, and theoretical models indicated that these harmonics possess nearly constant phases. This led to the speculation that the superposition of such harmonics could produce a train of attosecond pulses. 

For a long time, the phase of high-order harmonics remained experimentally inaccessible. The emergence of attosecond pulses became possible only after reliable experimental techniques were developed to determine these phases.

Although each burst in an APT has a sub-femtosecond duration, the overall pulse train spans several tens of femtoseconds. For applications requiring sub-femtosecond temporal resolution, single attosecond pulses are necessary. In the following sections, we will discuss the most common *gating* techniques employed to achieve SAP generation.

---

## 2.1 Attosecond Pulse Trains
[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=304&selection=29,0,29,8|•]]

The harmonic spectrum produced during high-harmonic generation (HHG) consists of a series of narrow peaks separated by twice the frequency of the driving laser field. When a long pulse drives the HHG process, only odd harmonics are generated due to symmetry considerations. However, measuring the harmonic spectrum reveals only the magnitudes of these harmonics, leaving their relative phases inaccessible. These phases are crucial for reconstructing the temporal profile of the pulse.

Consider the superposition of different harmonics. Since only odd harmonics are generated with long driving pulses, we represent the spectral amplitude of each harmonic as $U_{2q+1}$ and its phase as $\varphi_{2q+1}$. The temporal intensity profile, $I(t)$, is then given by:

$$
I(t) = \left| \sum_q U_{2q+1} e^{-i(2q+1)\omega t + i \varphi_{2q+1}} \right|^2,
$$

where $\omega$ is the frequency of the driving IR laser. In the simplest case, if the phase follows $\varphi_{2q+1} = (2q+1)\omega t^e$—with $t^e$ referred to as the *emission time*—and the amplitude $U_{2q+1}$ is independent of $q$, the summation yields:

$$
I(t) \propto \frac{\sin^2 \left[ N \omega (t - t^e) \right]}{\sin^2 \left[ \omega (t - t^e) \right]},
$$

where $N$ is the number of harmonics included in the summation. This expression describes a train of bursts separated by $\frac{T}{2}$, where $T = \frac{2\pi}{\omega}$ is the period of the driving laser. Each burst has a half-width of $\frac{T}{2N}$. In this case, the pulse is called *transform-limited* (TL), meaning it has the shortest possible duration for a given spectral bandwidth.

It is important to note that a TL pulse does not require all harmonic components to have the same phase. Instead, it requires that the phase difference $\Delta \varphi$ between consecutive harmonics is constant. In other words, the emission time $t^e$ must be independent of the harmonic frequency.

Interestingly, the regular pulsed structure of $I(t)$ is not significantly affected by variations in the amplitudes of different harmonics. This behaviour is analogous to that of a [[Notes/Ultrafast Laser Physics/7 Modelocking#7 Modelocking\|mode-locked laser]]. If the emission time varies with harmonic frequency, the pulse becomes *chirped*, resulting in a longer duration than that of the TL pulse.

Due to the uncertainty principle, it is impossible to define an "instant" associated with a specific XUV frequency $\Omega$. The emission time is defined as the group delay of the pulse:

$$
t^e = \frac{\partial \varphi(\Omega)}{\partial \Omega} \approx \frac{\varphi_{2q+1} - \varphi_{2q-1}}{2\omega},
$$

which applies to harmonics centred around $\Omega = 2q\omega$. When a synthesised wave includes a broad range of harmonics with varying emission times, the temporal profile deviates from the TL condition. External phase corrections can be employed to compensate for these variations, thereby shortening the pulse and bringing it closer to the TL limit.

Consider the experimental setup used for the generation and characterisation of attosecond pulse trains:

![Attachments/Attosecond and Strong-Field Physics Principles and Applications 3.webp|700](/img/user/Attachments/Attosecond%20and%20Strong-Field%20Physics%20Principles%20and%20Applications%203.webp)[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=306&rect=123,407,483,637|•]]

In this setup:
- High-order harmonics are generated using argon as the target gas.
- An aperture blocks the divergent IR beam, allowing the IR and XUV harmonics to co-propagate along the same beam axis.
- A mirror deflects the combined beam into a secondary gas target to generate photo-electrons.
- The resulting photo-electron spectra are measured as a function of the delay between the IR and XUV pulses.

The two-dimensional electron spectra obtained from these measurements are known as *spectrograms* or *streaking traces*, which provide valuable information about the temporal structure of the attosecond pulses.
	
---
## 2.2 Amplitude Gating
[[Reading/Books/Attosecond Physics/Attosecond Physics Attosecond Measurements and Control.pdf#page=59&selection=53,0,76,0|•]]

In high-harmonic generation (HHG), discrete harmonics arise from the coherent superposition of continuum harmonics generated during each optical cycle. However, for high-energy harmonics produced within a single optical cycle, the harmonic spectrum becomes continuous. By filtering out the discrete harmonics, it is possible to isolate single attosecond pulses (SAPs).

For this method to be effective, ultrashort driving pulses are required, and the carrier-envelope phase (CEP) of the pulse must be stabilised. When the driving pulse consists of only a few optical cycles, the highest photon energies—near the cutoff region—can be confined to a single half-cycle of the electric field at its central peak, as illustrated in figure (b). This results in a continuous harmonic spectrum near the cutoff region, shown in (c). By selecting only these cutoff components from the high-harmonic beam, an isolated light pulse with an attosecond temporal width can be obtained, as shown in (d).

![Attachments/Attosecond Physics Attosecond Measurements and Control.webp|700](/img/user/Attachments/Attosecond%20Physics%20Attosecond%20Measurements%20and%20Control.webp)[[Reading/Books/Attosecond Physics/Attosecond Physics Attosecond Measurements and Control.pdf#page=60&rect=65,410,376,613|•]]

Here, it is crucial to consider the *absolute phase* or CEP, denoted as $\phi_{\text{CEP}}$, along with the pulse duration of the driving electric field. The electric field can be described as:

$$
E(t) = E_0 \exp \left[ -2 \ln 2 \left( \frac{t}{\tau_0} \right)^2 \right] \cos \left( \omega_0 t + \phi_{\text{CEP}} \right),
$$

where $E_0$ is the peak field amplitude, $\tau_0$ is the pulse duration, $\omega_0$ is the central frequency, and $\phi_{\text{CEP}}$ is the carrier-envelope phase. If $\phi_{\text{CEP}}$ fluctuates from shot to shot, the temporal structure of the electric field will also vary. Therefore, precise stabilisation and control of the CEP are essential for consistent SAP generation.

---

## 2.3 Polarisation Gating
[[Reading/Books/Attosecond Physics/Attosecond Physics Attosecond Measurements and Control.pdf#page=61&selection=64,0,64,60|•]]

Polarisation gating (PG) involves synthesising a right-circularly polarised pulse with a delayed left-circularly polarised pulse, creating a laser field with time-dependent ellipticity. At the leading and trailing edges of the pulse, the field is elliptically polarised, suppressing HHG. In contrast, at the pulse center, the field becomes linearly polarised, enabling efficient HHG.

The *polarisation gate width* ($\Delta t_G$), defined as the time interval during which HHG is effective, is approximately given by:

$$
\Delta t_G \simeq 0.3 \frac{\varepsilon \tau^2}{T_d},
$$

where $\varepsilon$ is the ellipticity, $\tau$ is the pulse duration, and $T_d$ is the delay between the driving pulses. If $\Delta t_G < 1.3$ fs (less than half an optical cycle), only a single attosecond pulse is generated, rather than an attosecond pulse train. The gate width can be reduced by increasing $T_d$, but $T_d$ must remain below $2\tau$ to ensure effective gating. In practical applications, $T_d$ is typically set close to $\tau$.

A limiting factor is the ionisation of the target medium, which depletes neutral atoms and reduces HHG efficiency. Simulations show that if the pulse duration exceeds 6.5 fs, the medium is fully ionised, placing an upper limit on the driving pulse duration:

![Attachments/Attosecond Physics Attosecond Measurements and Control 1.webp|700](/img/user/Attachments/Attosecond%20Physics%20Attosecond%20Measurements%20and%20Control%201.webp)[[Reading/Books/Attosecond Physics/Attosecond Physics Attosecond Measurements and Control.pdf#page=62&rect=52,403,389,614|•]]

A PG field with time-dependent ellipticity can be generated by passing a linearly polarised pulse through two birefringent plates. The first plate splits the pulse into two orthogonally polarised components, introducing a controllable time delay. A quarter-wave plate, with its optic axis aligned to the initial polarisation, converts these components into counter-rotating circularly polarised pulses, forming the desired PG pulse.

HHG efficiency is highly sensitive to ellipticity. In an elliptically polarised field, the ionised electron experiences lateral displacement along the minor axis of the polarisation ellipse, hindering its recombination with the parent ion. If this displacement is too large, recombination does not occur, and HHG is suppressed. Therefore, efficient HHG requires a polarisation gate where the ellipticity remains low for at least one optical cycle.

For a time-dependent ellipticity pulse, the duration during which ellipticity $\varepsilon(t)$ remains below a threshold $\varepsilon_{\text{th}}$ is approximately:

$$
\delta t_{\text{PG}} = \frac{\varepsilon_{\text{th}}}{\ln 2} \frac{\tau^2}{T_d}.
$$

The PG window, defined as the period during which ellipticity is below 0.2, must be shorter than the interval between successive attosecond bursts. This requirement necessitates sub-5 fs driving pulses. Additionally, CEP stability is critical for ensuring the generation of a single attosecond pulse.

---

## 2.4 Interference Polarisation Gating
[[Reading/Books/Attosecond Physics/Attosecond Physics Attosecond Measurements and Control.pdf#page=63&selection=62,0,62,38|•]]

Interference polarisation gating (IPG) is a more complex but also more efficient variation of the standard polarisation gating technique. The following figure illustrates the basic setup, which involves a double Michelson interferometer:

![Attachments/Attosecond Physics Attosecond Measurements and Control 2.webp|700](/img/user/Attachments/Attosecond%20Physics%20Attosecond%20Measurements%20and%20Control%202.webp)[[Reading/Books/Attosecond Physics/Attosecond Physics Attosecond Measurements and Control.pdf#page=64&rect=53,464,203,611|•]]

In this setup:
- A linearly polarised pulse is split into two beams, which are directed into a double Michelson interferometer.
- In the first interferometer, a constructive interference maximum is created at the pulse center by adjusting the delay between its arms.
- The second interferometer introduces a delay that results in destructive interference at the pulse center. 
- A half-wave plate in the second beam rotates its polarisation to be perpendicular to the first beam.

When the two beams are recombined, the resulting synthesised pulse is linearly polarised at its centre and elliptically polarised at the leading and trailing edges. This configuration forms an effective polarisation gate, allowing for precise control over the HHG process. Although the IPG technique requires meticulous alignment of the interferometer, it offers greater flexibility in manipulating the driving fields and enables the use of longer driving pulses.

A limitation of the IPG method is its sensitivity to the CEP of the driving pulse. As shown in the figure below, the supercontinuum generated during HHG depends strongly on CEP stability. Therefore, CEP-stabilised pulses are essential for producing isolated attosecond pulses (IAPs).

![Attachments/Attosecond Physics Attosecond Measurements and Control 3.webp|700](/img/user/Attachments/Attosecond%20Physics%20Attosecond%20Measurements%20and%20Control%203.webp)[[Reading/Books/Attosecond Physics/Attosecond Physics Attosecond Measurements and Control.pdf#page=64&rect=204,464,387,612|•]]

---
## 2.5 Two-Colour Gating Method
[[Reading/Books/Attosecond Physics/Attosecond Physics Attosecond Measurements and Control.pdf#page=68&selection=19,0,19,27|•]]

To relax the stringent requirement of ultrashort driving pulses, the period of high-harmonic generation (HHG) can be modified from $T_0/2$ to $T_0$ by introducing a second harmonic ($\lambda/2$) with appropriate energy and phase to the fundamental driving laser. At the same pulse energy, this method enhances HHG efficiency because it reduces ionisation at the leading edge of the driving pulse. This allows for the use of driving pulses with durations of up to 25 fs.

Consider the interferometric electric field generated by the combination of a fundamental frequency ($\omega_0$) and its $K$-th harmonic ($K\omega_0$):

$$
\begin{aligned}
E_{\text{mix}}(t) = & E_0 \exp \left[ -2 \ln 2 \left( \frac{t}{\tau_0} \right)^2 \right] \cos \left( \omega_0 t + \phi_{\text{CE}} \right) \\
& + E_1 \exp \left[ -2 \ln 2 \left( \frac{t - \delta t}{\tau_1} \right)^2 \right] \cos \left( K \omega_0 t + \phi_{\text{CE}} + \phi_1 \right),
\end{aligned}
$$

where $K$ is the frequency ratio between the fundamental field ($\omega_0$) and the supplementary field ($\omega_1 = K\omega_0$). Both pulses are parallelly polarised, with the fundamental field acting as the main driver and the supplementary field modulating its envelope.

![Attachments/Attosecond Physics Attosecond Measurements and Control 4.webp|700](/img/user/Attachments/Attosecond%20Physics%20Attosecond%20Measurements%20and%20Control%204.webp)[[Reading/Books/Attosecond Physics/Attosecond Physics Attosecond Measurements and Control.pdf#page=69&rect=52,292,221,607|•]]

As shown, the amplitude of the side peaks around the central maximum of the synthesised field is suppressed by introducing a weaker second harmonic ($E_0 \approx 9E_1$). This enables efficient broadband XUV emission near the cutoff, even with relatively long driving pulses (e.g., 10 fs). The second harmonic pulse can have a longer duration, making the setup more flexible.

---

## 2.6 (Generalised) Double Optical Gating (DOG)
[[Reading/Books/Attosecond Physics/Attosecond Physics Attosecond Measurements and Control.pdf#page=70&selection=37,0,37,62|•]]

Combining a fundamental laser field with its second harmonic breaks the inversion symmetry of the system, allowing both even and odd harmonics to be generated. This modifies the harmonic spacing to $\omega_0$. According to Fourier transform theory, in the time domain, this results in a train of attosecond pulses with an equal separation of:

$$
T_0 = \frac{2\pi}{\omega_0} \approx 2.7 \, \text{fs}.
$$

In this configuration, only one attosecond pulse is generated per optical cycle:

![Attachments/Attosecond Physics Attosecond Measurements and Control 8.webp|700](/img/user/Attachments/Attosecond%20Physics%20Attosecond%20Measurements%20and%20Control%208.webp)[[Reading/Books/Attosecond Physics/Attosecond Physics Attosecond Measurements and Control.pdf#page=71&rect=192,440,386,611|•]]

The figure compares standard polarisation gating (PG) with double optical gating (DOG) techniques. Unlike conventional PG, DOG allows the generation of single attosecond pulses (SAPs) even when the gate width is doubled. This enables the use of longer driving pulses, enhancing experimental flexibility.

![Attachments/Attosecond Physics Attosecond Measurements and Control 6.webp|700](/img/user/Attachments/Attosecond%20Physics%20Attosecond%20Measurements%20and%20Control%206.webp)[[Reading/Books/Attosecond Physics/Attosecond Physics Attosecond Measurements and Control.pdf#page=71&rect=166,309,385,421|•]]

---

## 2.7 Ionisation Gating
[[Reading/Books/Attosecond Physics/Attosecond Physics Attosecond Measurements and Control.pdf#page=64&selection=43,0,43,21|•]]

Ionisation gating relies on the fact that HHG efficiency depends on the ionisation dynamics of the target atoms. When atoms are exposed to an over-saturated laser field, rapid ionisation occurs within a single optical cycle, and the neutral target is completely depleted at the leading edge of the pulse:

- **Leading Edge (a):** Rapid ionisation depletes the neutral atoms early in the pulse.  
- **Trailing Edge:** No HHG occurs due to the absence of neutral atoms, as required for the first step of the [[Notes/Attosecond Physics/1 Fundamentals of High-Order Harmonic Generation#1.1 Simple Man's Model\|Simple Man's model]].

Thus, HHG is confined to the leading edge of the pulse, effectively creating an ionisation gate even with multi-cycle driving pulses.

Moreover, the laser intensity increases rapidly at the leading edge. Each subsequent half-cycle reaches a higher peak intensity, generating new spectral components of higher-order harmonics. HHG is suppressed after around $-2.5T_0$, and the highest-order harmonics (approximately the 60th order) are generated in the half-cycle from $-3T_0$ to $-2.5T_0$. These high-order harmonics form a continuous spectrum:

![Attachments/Attosecond Physics Attosecond Measurements and Control 10.webp|700](/img/user/Attachments/Attosecond%20Physics%20Attosecond%20Measurements%20and%20Control%2010.webp)[[Reading/Books/Attosecond Physics/Attosecond Physics Attosecond Measurements and Control.pdf#page=65&rect=77,420,360,612|•]]

By filtering out the lower-order harmonics, an SAP can be isolated from the leading edge of the driving pulse. Ionisation gating is particularly effective because it utilises strong ionisation dynamics to confine HHG to a narrow temporal window, enabling the generation of isolated attosecond pulses without the need for ultrashort driving pulses.

---
## 2.8 Spatial Gating

The key idea behind spatial gating is to spatially separate single attosecond pulses (SAPs) generated during different half-cycles of the driving laser field. This is achieved by introducing a tilt in the phase front of the generating infrared pulse. 

To implement this, a pair of glass prisms is inserted into the beam path before focusing the laser. These prisms induce a *pulse-front tilt* in the driving laser. With such a tilt, each attosecond burst generated within an APT is emitted in a slightly different direction. 

If the wavefront rotation within one half-cycle of the driving laser is larger than the divergence angle of the individual attosecond pulses, each burst can be spatially separated. This enables the isolation of single attosecond pulses from the train. However, this method still requires relatively short driving pulses, typically below 5 fs, to maintain high temporal resolution and efficient separation.

One of the most well-known configurations for spatial gating is the **Attosecond Lighthouse** setup:

![Attachments/Lecture 3.webp|700](/img/user/Attachments/Lecture%203.webp)[[Courses/3. Semester/Ultrafast Laser Physics/Lecture.pdf#page=599&rect=292,355,426,796|•]]

In the Attosecond Lighthouse configuration, the pulse-front tilt causes each attosecond burst to be emitted at a distinct angle, effectively creating a "lighthouse" effect where different pulses are directed in different spatial directions.

Alternatively, spatial gating can be implemented using **non-collinear optical gating**, where the driving pulses are arranged at an angle relative to each other. This configuration also achieves spatial separation of attosecond bursts but relies on non-collinear beam geometry:

![Attachments/Lecture 4.webp|700](/img/user/Attachments/Lecture%204.webp)[[Courses/3. Semester/Ultrafast Laser Physics/Lecture.pdf#page=599&rect=39,379,264,694|•]]

Both methods exploit spatial separation to isolate SAPs, offering an effective approach to attosecond pulse generation without relying solely on temporal gating techniques. However, precise control of the pulse-front tilt or non-collinear angles is essential for optimal performance.

---