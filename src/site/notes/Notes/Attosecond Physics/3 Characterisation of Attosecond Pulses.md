---
{"dg-publish":true,"permalink":"/notes/attosecond-physics/3-characterisation-of-attosecond-pulses/","hide":"true","updated":"2025-05-22T11:31:25.000+02:00"}
---

Jump back to ==[[Notes/Attosecond Physics/Attosecond Physics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Notes/Attosecond Physics/3 Characterisation of Attosecond Pulses#3.1 Characterisation of Ultrashort Pulses\|3.1 Characterisation of Ultrashort Pulses]]
- [[Notes/Attosecond Physics/3 Characterisation of Attosecond Pulses#3.2 RABBITT: Reconstruction of Attosecond Beating by Interference of Two-Photon Transitions\|3.2 RABBITT: Reconstruction of Attosecond Beating by Interference of Two-Photon Transitions]]
- [[Notes/Attosecond Physics/3 Characterisation of Attosecond Pulses#3.3 Attosecond Pulse Characterisation: FROG-CRAB\|3.3 Attosecond Pulse Characterisation: FROG-CRAB]]
- [[Notes/Attosecond Physics/3 Characterisation of Attosecond Pulses#3.4 Control of Amplitude and Phase of an APT\|3.4 Control of Amplitude and Phase of an APT]]
- [[Notes/Attosecond Physics/3 Characterisation of Attosecond Pulses#3.5 Temporal Information Extracted from Attosecond Pulse Train (APT) Photoionisation Experiments\|3.5 Temporal Information Extracted from Attosecond Pulse Train (APT) Photoionisation Experiments]]
- [[Notes/Attosecond Physics/3 Characterisation of Attosecond Pulses#3.6 PROBE and PROBD\|3.6 PROBE and PROBD]]
- [[Notes/Attosecond Physics/3 Characterisation of Attosecond Pulses#3.7 From RABBITT to Streaking Regime\|From RABBITT to Streaking Regime]]

---
# 3 Characterisation and Control of Attosecond Pulses
Before diving into the characterisation of attosecond pulses, the characterisation of ultrashort pulses needs to be discussed first.

---
## 3.1 Characterisation of Ultrashort Pulses
[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=103&selection=28,0,28,43|•]]

### 3.1.1 Autocorrelation
The duration of short pulses can be easily estimated using autocorrelation. A pulse is split into two replicas with relative delay. Both replicas are focused inside a second-hamonic generation (SHG) crystal. Then, the SHG signal is
$$
S(\tau)\sim\int^\infty_{-\infty}I(t)I(t-\tau)dt.
$$
This signal goes to zero if there is no overlap of the replicas. However note that this only gives an estimate of the pulse duration, but contains no information of the pulse profile or its phase. Complete pulse characterisation requires the knowledge of the phase:
$$
\tilde{E}(\omega)=|\tilde{E}(\omega)|e^{i\Phi(\omega)}.$$
Then the electric field as function of time, $E(t)$, can be obtained via a Fourier transform. The absolute value $|\tilde{E}(\omega)|$, can be measured with a spectrometer. Then, the remaining task is to measure $\Phi(\omega).$ Note that the next two methods, FROG and SPIDER, are also discussed in my [[Notes/Ultrafast Laser Physics/Ultrafast Laser Physics\|Ultrafast Laser Physics]] notes, however in more detail and from a different perspective. 

### 3.1.2 FROG: Frequency-Resolved Optical Gating
The most widely used FROG implementation is that of the SHG-FROG. The signal then reads
$$
S(\omega, \tau)=\left|\int_{-\infty}^{\infty} E(t) E(t-\tau) e^{i \omega t} d t\right|^2.
$$
This method is considered a type of amplitude gating, since the conversion efficiency increases with laser intensity. The next figure shows the schematic setup of SHG-FROG. Usually, a simple Michelson interferometer implements the delay. 

![Attachments/No file.webp|700](/img/user/Attachments/No%20file.webp)[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=104&rect=192,395,430,450|•]]

The next figure shows the generated 2D signal, or FROG trace:

![Attachments/No file 1.webp|700](/img/user/Attachments/No%20file%201.webp)[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=104&rect=205,229,369,381|•]]

To retrieve the phase, an iterative algorithm is used. The sampling covers both time (x-axis) and frequency (y-axis). Since the signal is slowly-varying , the retrieval is sensitive to noise and the detector uniformity. 

### 3.1.3 SPIDER: Spectral Phase Interferometry for Direct Electric-Field Reconstruction

Another method is SPIDER, based on the spectral interference between a pulse and its replica, but shifted in time and frequency. The interference between $\tilde{E}(\omega)$ and a delayed $\tilde{E}(\omega+\omega^\prime)$ is 
$$
\begin{aligned}
I(\omega, \tau)= & \left|\bar{E}(\omega)+\bar{E}(\omega-\omega^\prime) e^{i \omega \tau}\right|^2 \\
= & |\bar{E}(\omega)|^2+|\bar{E}(\omega-\omega^\prime)|^2+2|\bar{E}(\omega)||\bar{E}(\omega-\omega^\prime)| \\ &\cdot \cos \left(\Phi(\omega)-\Phi(\omega-\omega^\prime)-\omega \tau\right) .
\end{aligned}
$$
Taking the Fourier transform of $I(\omega,\tau)$, at each value of $\omega$, we therefore obtain
$$
I_\tau(\omega) \sim \cos \left(\Phi(\omega)-\Phi(\omega-\omega^\prime)-\omega \tau\right),
$$
and with this the phase as 

$$
\varphi(\omega)=\Phi(\omega)-\Phi(\omega-\omega^\prime)-\omega \tau.
$$
This directly gives the spectral distance between $\omega$ and $\omega+\omega^\prime.$ To obtain the spectral phase of single pulse, one generates a spectral shear between carrier frequencies of two replicas of this pulse. This shear is obtained by sum or difference-frequency generation in a nonlinear optical crystal between the two replicas and a strongly chirped pulse:

![Attachments/Attosecond and Strong-Field Physics Principles and Applications 8.webp|700](/img/user/Attachments/Attosecond%20and%20Strong-Field%20Physics%20Principles%20and%20Applications%208.webp)[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=104&rect=190,83,440,199|•]]

## 3.2 RABBITT: Reconstruction of Attosecond Beating by Interference of Two-Photon Transitions
[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=306&selection=16,0,16,49|•]]

The RABBITT (Reconstruction of Attosecond Beating by Interference of Two-Photon Transitions) method enables the determination of the spectral phase of an attosecond pulse train by retrieving the phase difference between neighbouring harmonics. Consider XUV harmonics combined with a delayed multi-cycle IR field to ionise target atoms. The intensity of the XUV harmonics is sufficiently low to prevent nonlinear effects, allowing ionisation to occur primarily through single-photon absorption.

In the absence of the IR field, the photo-electron spectrum consists of peaks at:

$$
E = (2q + 1)\omega - I_p,
$$

where $\omega$ is the fundamental frequency used to generate the high harmonics, and $I_p$ is the ionisation potential of the target. Since the delayed IR field typically originates from the same source as the harmonic-generating field, it shares the same frequency $\omega$.

In the RABBITT scheme, the IR intensity is kept very low (on the order of 1 mW), such that an electron can only absorb or emit one additional IR photon. In this weak-field regime, the generation of even harmonics can be described using second-order perturbation theory. As a result, sidebands appear at:

$$
E = 2q\omega - I_p,
$$

when ionisation occurs in the presence of the IR field:

![Attachments/Attosecond and Strong-Field Physics Principles and Applications 4.webp|700](/img/user/Attachments/Attosecond%20and%20Strong-Field%20Physics%20Principles%20and%20Applications%204.webp)[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=307&rect=184,341,404,636|•]]

The figure shows the photo-electron spectra of argon ionised by (a) XUV harmonics only, while (b) and (c) depict the spectra with both XUV harmonics and an IR field. The time delay between the XUV and IR pulses increases from (b) to (c), causing significant changes in the sideband amplitudes. The intensity of the sideband signals varies as a function of the time delay $t_d$. This variation can be understood using a two-path interference model, where the sideband signal $S_{2q}$ results from the interference between:

1. An electron ionised by the $(2q - 1)\omega$ harmonic, followed by the absorption of one IR photon.
2. An electron ionised by the $(2q + 1)\omega$ harmonic, followed by the emission of one IR photon.

The total sideband signal can be mathematically expressed as:

$$
S_{2q} = \sum_{f, i} \left| M_{f, i}^{(+)} + M_{f, i}^{(-)} \right|^2 = A_{2q} + B_{2q} \cos \left[ 2\omega t_d - \left( \varphi_{2q+1} - \varphi_{2q-1} \right) - \Delta \varphi_{2q}^{\text{atomic}} \right].
$$

Here:
- $M_{f, i}^{(\pm)}$ are the complex two-photon transition amplitudes, with $(+)$ corresponding to the absorption path $(2q - 1)\omega + \omega$, and $(–)$ corresponding to the emission path $(2q + 1)\omega - \omega$.
- $i$ and $f$ denote the quantum numbers of the initial bound state and the final continuum state, respectively.
- $A_{2q}$ and $B_{2q}$ are constants representing DC terms.
- The summation accounts for all possible two-photon ionisation channels.

As evident from the equation, the $S_{2q}$ signal oscillates at a frequency of $2\omega$ as a function of the XUV-IR delay $t_d$. This highlights that a simple photon/particle picture is insufficient to fully describe the process. Further, the sideband intensity depends on the relative phase between both quantum paths. The atomic phase $\Delta \varphi_{2q}^{\text{atomic}}$ is generally small compared to the harmonic phase.

We can see that the side band oscillations are shifted with respect to the maximum of the XUV pulse by a RABBITT delay $\tau_\text{RABBITT}.$ It can not be stressed enough: Since the oscillation is determined by the relative phase between two quantum pathways, a quantum property, RABBITT spectrograms cannot be interpreted within a classical picture. However, it can still be shown that the RABBITT delay reveals the photo-emission time. That is, the time the photo-electron to interact with the IR pulse after its creation. In a solid, it would correspond to the time it takes for the electron to be emitted until it reaches the surface of the solid. It turns out, the RABBITT delay is the same in solids as in attosecond streaking experiments ([source](https://www.mdpi.com/2076-3417/9/3/592)). 

![Attachments/Equivalence of RABBITT and Streaking Delays 1.webp|700](/img/user/Attachments/Equivalence%20of%20RABBITT%20and%20Streaking%20Delays%201.webp) [[Reading/Papers/Attosecond/Equivalence of RABBITT and Streaking Delays.pdf#page=2&rect=132,162,466,275|•]]


By fitting the oscillations of the measured sideband intensity as a function of time delay to the equation above, the phase difference between adjacent odd harmonics can be extracted:

$$
\Delta \varphi_{2q}^{\text{XUV}} = \varphi_{2q+1} - \varphi_{2q-1}.
$$

The RABBITT method is sensitive to the chirp of both the IR and XUV pulses, making it a powerful tool for characterising the temporal properties of attosecond pulse trains.

![Attachments/Lecture 6.webp|700](/img/user/Attachments/Lecture%206.webp)[[Courses/3. Semester/Ultrafast Laser Physics/Lecture.pdf#page=610&rect=98,47,477,793|•]]

---
## 3.3 Attosecond Pulse Characterisation: FROG-CRAB
[[Reading/Books/Attosecond Physics/Attosecond Physics Attosecond Measurements and Control.pdf#page=81&selection=14,0,30,67|•]] [[Reading/Books/Attosecond Physics/Attosecond Physics Attosecond Measurements and Control.pdf#page=81&selection=12,0,12,36|•]] [[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=326&selection=34,0,34,26|•]] [[Reading/Books/Attosecond Physics/Attosecond Physics Attosecond Measurements and Control.pdf#page=81&selection=12,0,12,36|•]]
Attosecond science relies on characterising single attosecond pulses. While the spectral amplitude, $U(\omega)$, can be measured directly, determining the pulse duration requires retrieving the spectral phase, $\Phi(\omega)$. This is because the temporal profile of the SAP (Strong Attosecond Pulse) depends on both the spectral amplitude and phase, as described by:

$$
E_{XUV}(t) = \sqrt{I(t)} \cos[\omega_0 t + \phi(t)]
$$

or equivalently in the frequency domain:

$$
\tilde{E}_{XUV}(\omega) = U(\omega)e^{i\Phi(\omega)}
$$

Here, $I(t)$ represents the temporal intensity profile (from which the pulse duration can be deduced), $\phi(t)$ is the temporal phase (which may include attochirps), and $\omega_0$ is the central frequency of the SAP. $U(\omega)$ and $\Phi(\omega)$ are the spectral amplitude and phase, respectively.

Traditional methods for characterising femtosecond pulses (like autocorrelation, SPIDER, and FROG) cannot be directly applied to attosecond pulses. This is due to the lack of suitable nonlinear materials in the XUV range and the low photon flux of SAPs. Instead, attosecond pulse characterisation often utilises the interaction of the AP with a time-delayed infrared field. Photo-electrons, generated by the XUV pulse, act as a "replica" of the XUV pulse, and the IR field imprints phase information onto the photo-electron spectrum.

### 3.3.1 Attosecond Streaking and the Strong-Field Approximation

The core of this characterisation method is attosecond streaking.  The process begins with a single attosecond pulse ionising atoms, creating a photo-electron wavepacket. A time-delayed IR field then interacts with this wavepacket, modifying the final momentum of the emitted electrons. By systematically varying the delay between the XUV and IR pulses, a streaking spectrogram (a 2D plot of photo-electron yield as a function of energy and delay) is generated. This spectrogram contains valuable information about both the XUV and IR pulses:

![Attachments/Equivalence of RABBITT and Streaking Delays 2.webp|700](/img/user/Attachments/Equivalence%20of%20RABBITT%20and%20Streaking%20Delays%202.webp)[[Reading/Papers/Attosecond/Equivalence of RABBITT and Streaking Delays.pdf#page=2&rect=131,273,466,388|•]]

Note that there is an important difference to the [[Notes/Attosecond Physics/3 Characterisation of Attosecond Pulses#3.2 RABBITT Reconstruction of Attosecond Beating by Interference of Two-Photon Transitions\|RABBITT]] technique: 
- The IR fields used in RABBITT experiments are weak, such that the field property is less important than the particle property.
- RABBITT employs attosecond pulse trains, such that the spectrum has multiple peaks instead of a continuous spectrum.
- In both RABBITT and streaking, there is a photo-emission delay associated with the process from photo-emission until interaction with the IR field. It can be [shown](https://www.mdpi.com/2076-3417/9/3/592), that both delays are equal in solids and gases. 
- Streaking can be understood and explained in a simple classical picture, whereas RABBITT requires a quantum mechanical treatment due to the interference of multiple quantum pathways.
- However, it is not obvious how you can compare the two delays, since the kinetic energies within the material in RABBITT are at the $(n-1)\text{-th}$ and $(n+1)\text{-th}$, while in the streaking experiment, the electrons have their energy centred around the $(n)\text{-th}$ harmonic.

A quantum mechanical description of attosecond streaking typically employs the strong-field approximation (SFA).  The SFA relies on several key approximations:

1.  **Single Active Electron Approximation:** The atom is treated as if it has only one electron that participates in the ionisation process.  This neglects the complexities of multi-electron ionisation.

2.  **Strong Field Approximation (SFA) itself:**  The influence of the atomic Coulomb potential on the photo-electron in the continuum is neglected.  The photo-electron is treated as a free particle moving solely under the influence of the strong IR field.

3.  **Ground State and Continuum Consideration:** The influence of other bound states of the atom on the ionisation process is neglected.  Only transitions from the ground state to the continuum are considered.

Within the SFA, the transition amplitude for photo-ionisation, considering the interaction with both the XUV and IR fields, can be expressed as:

$$
a_{\mathbf{v}}(\tau) = -i \int_{-\infty}^{\infty} dt \, e^{i \phi(t)} \mathbf{d}_{\mathbf{p}(t)} \mathbf{E}_X(t - \tau) e^{i(W + I_p)t}
$$
where:

*   $\tau$ is the temporal delay between the XUV and IR pulses.
*   $\mathbf{p}(t) = \mathbf{v} + \mathbf{A}(t)$ is the instantaneous kinetic momentum of the photo-electron.
*   $\mathbf{A}(t)$ is the vector potential of the IR field.
*   $\mathbf{d}_{\mathbf{p}(t)}$ is the dipole transition matrix element from the ground state to the continuum with momentum $\mathbf{p}(t)$.
*   $\phi(t) = -\int_t^{\infty} dt^{\prime}\left[\mathbf{v} \cdot \mathbf{A}\left(t^{\prime}\right)+\mathbf{A}^2\left(t^{\prime}\right) / 2\right]$ represents the temporal phase modulation imposed by the IR field on the electron wavepacket.
*   $\mathbf{E}_X(t)$ is the electric field of the XUV pulse.
*   $W = \mathbf{v}^2 / 2$ is the final kinetic energy of the photo-electron (in atomic units).
*   $I_p$ is the ionisation potential of the atom.

The IR field's primary role is to induce an ultrafast phase modulation, $\phi(t)$, on the electron wavepacket generated by the XUV pulse. For accurate characterisation of the XUV pulse, the bandwidth of this phase modulation (which corresponds to the maximum energy shift of the photo-electron spectrum, a process commonly referred to as "streaking") should be a significant fraction of the bandwidth of the attosecond field being characterised.

**FROG-CRAB: A FROG Analogy**

The photo-electron spectra, $\|a_{\mathbf{v}}(\tau)\|^2$, measured as a function of the delay, $\tau$, between the XUV and IR pulses, contain all the necessary information for a complete reconstruction of the temporal characteristics of both the attosecond XUV pulse and the IR streaking pulse.  This dataset can be interpreted as a FROG trace.

In a typical FROG measurement, the pulse to be characterised is effectively "sliced" temporally using an appropriate gate pulse. The FROG trace, $S(\omega, \tau)$, is obtained by measuring the evolution of the spectrum of these temporal slices as a function of the delay, $\tau$, between the pulse to be measured, $E(t)$, and the gate pulse, $G(t)$. The gate pulse can act as either an amplitude gate or a phase gate:

$$
S(\omega, \tau) = \left|\int_{-\infty}^{\infty} dt \, G(t) E(t - \tau) e^{i \omega t}\right|^2
$$

By comparing the expression for the FROG trace with the expression for the transition amplitude, $a_{\mathbf{v}}(\tau)$, it becomes clear that the FROG-CRAB trace, $\|a_{\mathbf{v}}(\tau)\|^2$, can be viewed as a FROG spectrogram of the electron wavepacket generated by the attosecond pulse. In this analogy, the phase gate is given by $G(t) = e^{i \phi(t)}$.  To retrieve the temporal phase and intensity profile of the attosecond pulse, various iterative algorithms, such as the principal component generalised projection algorithm (PCGPA) or the least squares generalised projection algorithm (LSGPA), can be employed.

**Central Momentum Approximation and Key Assumptions**

A crucial point to note is that while the phase term, $\phi(t)$, depends on the photo-electron energy, $W$, the standard FROG algorithm assumes an energy-independent phase modulation. This approximation, known as the Central Momentum Approximation (CMA), is valid as long as the energy bandwidth of the attosecond pulse does not exceed its central energy.  Additionally, in the analysis of FROG-CRAB traces, the dipole transition matrix element, $\mathbf{d}_{\mathbf{p}}(t)$, is typically assumed to be constant, both with respect to momentum (consistent with the CMA) and with respect to time. With these assumptions, the spectrogram obtained by measuring the energy of the emitted photo-electrons as a function of the delay between the XUV and IR pulses can be treated as a conventional FROG trace, allowing the application of established FROG retrieval algorithms.

**Streaking Trace and Pulse Reconstruction**

As outlined in your provided text, by employing the central momentum approximation and assuming a slowly varying dipole matrix element, the expression for the streaking trace, $S(p, t_d)$, can be manipulated to resemble the form of a FROG trace:

$$
S\left(E, t_d\right) \approx\left|\int_{-\infty}^{\infty} \chi\left(t-t_d\right) G(t) e^{i E t} d t\right|^2
$$

where $\chi(t)$ represents the temporal electron wavepacket. This FROG-like equation enables the use of iterative algorithms to simultaneously extract both $\chi(t)$ and $G(t)$ from the measured streaking trace. From the retrieved $G(t)$, the vector potential, $A(t)$, of the IR field can be calculated (provided that the central momentum, $p_0$, is known).  This allows for the retrieval of the IR field. If the amplitude and phase of the atomic dipole matrix element, $d(E)$, are considered known (perhaps from theoretical calculations), then the XUV pulse, $E_{XUV}(t)$, can be deduced from the extracted wavepacket, $\tilde{\chi}(E)$. These combined methods are generally referred to as FROG-CRAB.

The FROG-CRAB technique offers several significant advantages. It is remarkably versatile, allowing it to analyse not only isolated attosecond pulses (with durations shorter or longer than the period of the modulating IR field) but also attosecond pulse trains and other more complex temporal structures.  FROG-CRAB also inherits several advantages from the broader FROG technique. One key advantage is the high redundancy of information inherent in the FROG trace. This redundancy makes the technique highly robust against noise in the experimental data. Furthermore, this redundancy reduces the likelihood of the retrieval algorithm converging to an incorrect solution, even in the presence of experimental imperfections or flaws.

In the specific case of isolated attosecond pulses, accurate reconstruction theoretically requires only one optical cycle of the gating IR field. However, in practice, FROG-CRAB traces are typically acquired over a longer time span, often several IR cycles. This extended acquisition period further increases the redundancy of information and enhances the robustness of the retrieval process.

Another significant benefit of FROG-CRAB is that the retrieval process yields not only the characteristics of the XUV pulse but also the electric field of the IR modulating pulse. The retrieved IR field can be compared with results obtained using standard techniques for characterising visible or near-infrared pulses, providing a cross-check on the accuracy of the FROG-CRAB measurement.

Despite these advantages, FROG-CRAB also has limitations. Accurate reconstruction can be challenging, particularly when dealing with extremely short pulses (sub-100-as durations) or when the XUV pulse contains complex temporal structures, such as a residual satellite pulse, where a weaker pulse closely following the main pulse. In these situations, the approximations underlying the FROG-CRAB retrieval may break down, leading to inaccuracies in the reconstructed pulse profiles. Furthermore, the FROG-CRAB technique, like other streaking-based methods, is sensitive to both XUV and IR chirp:

![Attachments/Lecture 5.webp|700](/img/user/Attachments/Lecture%205.webp)[[Courses/3. Semester/Ultrafast Laser Physics/Lecture.pdf#page=602&rect=36,148,478,713|•]]

---

## 3.4 Control of Amplitude and Phase of an APT
[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=309&selection=53,0,53,46|•]]

The RABBITT method, discussed in the previous chapter, determines the spectral phase of each frequency component of an attosecond pulse train (APT). To achieve transform-limited (TL) attosecond pulses, the spectral phase of each harmonic must be adjusted so that all harmonics are emitted simultaneously. Neglecting the atomic phase, we can rewrite the relevant equation as:

$$
S_{2q} \approx A_{2q} + B_{2q} \cos \left[2\omega \left(t_d - t_{2q}^e\right)\right],
$$
where 
$$
t_{2q}^e = \frac{\Delta \varphi_{2q}^{\text{XUV}}}{2\omega}
$$
is the XUV group delay centered at the photon energy $2q\omega$. If the group delay is constant across all harmonics, they are perfectly synchronised, resulting in TL pulses with the shortest duration permitted by the spectral bandwidth. 

However, experimental measurements show that the group delay increases linearly with photon energy (see the next figure, white line). This linear dependence indicates a positive chirp in the attosecond pulse, leading to temporal broadening. By focusing the laser beam ahead of the gas jet, macroscopic selection of the short electron trajectory can be achieved through phase matching, enhancing the generation of well-synchronised harmonics.

![Attachments/Attosecond and Strong-Field Physics Principles and Applications 6.webp|700](/img/user/Attachments/Attosecond%20and%20Strong-Field%20Physics%20Principles%20and%20Applications%206.webp)[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=310&rect=120,511,300,639|•]]

The positive chirp in the emitted attosecond bursts primarily originates from the single-atom response under well-phase-matched conditions. Although experimental optimisation of generation conditions can minimise this chirp, it cannot be completely eliminated. To compensate for the positive chirp introduced during high-harmonic generation (HHG), the harmonics can be propagated through a medium with negative group delay dispersion (GDD), such as thin aluminum films, effectively restoring TL pulse characteristics.

---

## 3.5 Temporal Information Extracted from Attosecond Pulse Train (APT) Photoionisation Experiments
[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=310&selection=132,0,133,11|•]]

In characterising attosecond pulse trains with the RABBITT method, the atomic phase, denoted as $\Delta\varphi^{\text{atomic}}$, is typically calculated theoretically and often considered negligible due to its small magnitude. However, in certain cases, extracting the atomic phase directly from measurements is desirable. For this purpose, we define the intrinsic atomic delay as:

$$
\tau^{(2)} = \frac{\Delta\varphi^{\text{atomic}}}{2\omega},
$$

which represents the delay associated with the two-photon ionisation process. Using this definition, the sideband signal can be expressed as:

$$
S_{2q} = A_{2q} + B_{2q} \cos \left[ 2\omega \left( t_d - t^e - \tau^{(2)} \right) \right],
$$

where $t^e$ is the group delay of the XUV harmonics. The total time shift, $t^e + \tau^{(2)}$, can be directly extracted from a RABBITT measurement. To isolate the intrinsic atomic delay, one can characterise the XUV pulse train using a well-known reference target. Alternatively, the same XUV+IR pulse can be used to ionise two different targets or two distinct ionisation channels within the same target. By comparing the time shifts from two RABBITT traces corresponding to the same photon energy, the difference in atomic delays, $\Delta\tau^{(2)}$, can be determined.

The two-photon atomic delay, $\tau^{(2)}$, includes contributions from the probing IR field. However, it is often more insightful to isolate the phase information related to the single-photon ionisation process, which is independent of the external field. Fortunately, the IR-induced contribution can be factored out in the RABBITT analysis. This leads to the following relationship:

$$
\tau^{(2)} \approx \tau^{(1)} + \tau^{\text{cc}},
$$

where $\tau^{(1)}$ represents the delay associated with the electronic wave packet ionised by single-photon absorption, and $\tau^{\text{cc}}$ is the IR-induced continuum-to-continuum delay. While $\tau^{\text{cc}}$ is target-independent, it varies with the photo-electron energy. Despite being an approximation, this expression holds even when electron correlation effects are considered.

It is important to note that the RABBITT method relies on second-order perturbation theory, necessitating low laser intensities to avoid higher-order contributions to the sidebands. Moreover, the derived equations are strictly valid when the ionised electron originates from an s-state, where one XUV photon promotes the electron to an intermediate p partial wave. In cases where the electron originates from a p subshell, intermediate partial waves can be either s or d, leading to interference between quantum paths ($p \to s \to p$ and $p \to d \to p$). This interference results in more complex atomic delay dynamics that must be considered in such scenarios.

---
## 3.6 PROBE and PROBD
[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=332&selection=156,0,156,49|•]]

While FROG-CRAB is the most widely used technique to characterise single attosecond pulses (SAPs), it has two notable limitations:
11. The central momentum approximation (CMA) restricts its applicability to broadband SAPs.
12. The iterative algorithm used in FROG may fail to converge, particularly when mid-IR pulses are employed as the streaking field.

In this section, two new methods are introduced that address these limitations. They remain effective for broadband light pulses and improve the accuracy of FROG-CRAB for narrowband pulses.

### 3.6.1 PROBD

PROBD stands for *Phase Retrieval of Broadband Pulses*. The starting equation for the streaking spectrogram in PROBD is the same as in FROG-CRAB, based on the Strong-Field Approximation (SFA):

$$
S(p, t_d) = \left|\int_{-\infty}^{\infty} E_{\text{XUV}}(t - t_d) \, d(p + A(t)) \, e^{-i \Phi(p, t)} \, e^{i \left( \frac{p^2}{2} + I_p \right) t} \, dt \right|^2,
$$

where the phase $\Phi(p, t)$ is defined as:

$$
\Phi(p, t) = \int_t^{\infty} \left[ p A(t') + \frac{A^2(t')}{2} \right] dt'.
$$

In FROG-CRAB, the momentum $p$ in $\Phi(p, t)$ is approximated by a constant value $p_0$. This approximation is not employed in PROBD, where the objective is to solve the original equation without such simplifications. To accelerate the convergence of the iterative procedure, the number of unknown parameters is minimised. These unknowns typically include the amplitude and phase of the XUV and IR fields, as well as the atomic dipole transition matrix elements.

For broadband XUV pulse characterisation, it is assumed that the amplitude and phase of the dipole transition matrix elements can be accurately computed using atomic structure calculations. The amplitude of the XUV pulse in the energy domain can be determined from ionisation measurements with the XUV field alone. Consequently, the remaining unknowns are the spectral phase of the XUV pulse and the amplitude and phase of the IR field.

In PROBD, the unknown functions are expanded using B-spline functions:

$$
f(x) = \sum_{i=1}^{n} g_i B_i^k(x),
$$

where $g_i$ are the expansion coefficients, and $B_i^k(x)$ are the B-spline basis functions of order $k$. 

The following example illustrates an XUV pulse with a duration of 52 as, a central photon energy of 80 eV, and a bandwidth of 90 eV. The FROG-CRAB method fails to retrieve the broadband XUV phase accurately, while PROBD successfully reconstructs both the spectral phase and the time-domain intensity of the XUV pulse.

![Attachments/Attosecond and Strong-Field Physics Principles and Applications 7.webp|700](/img/user/Attachments/Attosecond%20and%20Strong-Field%20Physics%20Principles%20and%20Applications%207.webp)[[Reading/Books/Attosecond Physics/Attosecond and Strong-Field Physics Principles and Applications.pdf#page=336&rect=120,347,479,641|•]]

This example clearly demonstrates that the CMA used in FROG-CRAB is inadequate for broadband XUV pulses.

### 3.6.2 PROOF

PROOF (*Phase Retrieval by Omega Oscillation Filtering*) is a generalisation of the RABBITT technique for SAPs. It is applicable when the IR intensity is sufficiently weak to allow the use of second-order perturbation theory for modelling the streaking trace.

Consider photo-electrons detected along the polarisation axis of collinear XUV and IR pulses, assuming a monochromatic IR field. Under second-order perturbation theory, the streaking spectrogram is given by:

$$
\begin{aligned}
S(E, t_d) = & \left| \tilde{E}_{\text{XUV}}(\Omega) \, d^{(1)}(E) 
+ \tilde{E}_{\text{XUV}}(\Omega - \omega) \frac{E_{\text{IR}}}{2} e^{-i \omega t_d} d^{(+)}(E) \right. \\
& \left. + \tilde{E}_{\text{XUV}}(\Omega + \omega) \frac{E_{\text{IR}}}{2} e^{i \omega t_d} d^{(-)}(E) \right|^2,
\end{aligned}
$$

where higher-order terms in the IR field strength are neglected. Here:
- $E = \frac{k^2}{2}$ is the photo-electron energy,
- $\Omega = E + I_p$ is the XUV photon energy,
- $\omega$ is the IR frequency,
- $E_{\text{IR}}$ is the IR field strength,
- $d^{(1)}(E)$ is the single-photon transition dipole,
- $d^{(\pm)}(E)$ are the two-photon transition dipole matrix elements corresponding to absorption (+) and emission (–) of an IR photon.

Expanding this expression to the lowest orders in $E_{\text{IR}}$, we obtain:

$$
S(E, t_d) \approx S_{\text{XUV}}(E) + S_{\text{FSI}}(E, t_d),
$$

where $S_{\text{XUV}}(E)$ represents the XUV-only contribution, and $S_{\text{FSI}}(E, t_d)$ is the first-second order interference (FSI) term, given by:

$$
\begin{aligned}
S_{\text{FSI}}(E, t_d) = & E_{\text{IR}} \, \text{Re} \left\{ 
\tilde{E}_{\text{XUV}}(\Omega) \tilde{E}_{\text{XUV}}^*(\Omega - \omega) e^{i \omega t_d} d^{(1)} d^{(+)*} \right. \\
& \left. + \tilde{E}_{\text{XUV}}(\Omega) \tilde{E}_{\text{XUV}}^*(\Omega + \omega) e^{-i \omega t_d} d^{(1)} d^{(-)*}
\right\}.
\end{aligned}
$$

For a fixed electron energy $E$, the FSI term oscillates with the delay $t_d$ at the IR frequency $\omega$. This can be written as:

$$
S_{\text{FSI}}(E, t_d) = A(E) \cos \left[ \omega t_d + \Psi(E) \right],
$$

where the spectral phase of the XUV pulse is embedded within $A(E)$ and $\Psi(E)$.

From the experimental spectrogram, the FSI term can be isolated by filtering the data to extract the frequency component at $\omega$. This approach forms the basis of the PROOF method.

Since PROOF requires weak IR fields (intensities below $10^{12}$ W/cm²), the relatively small streaking signal-to-noise ratio can introduce uncertainties in the retrieved phase of the SAP. Nevertheless, PROOF provides an effective method for phase retrieval in weak-field conditions, expanding the capabilities of attosecond metrology.

---
## 3.7 From RABBITT to Streaking Regime

This discussion comes from the paper ''Equivalence of RABBITT and Streaking Delays'.
The transition from the conditions of a RABBITT to a streaking experiment in a simplified solid-surface system can be demonstrated by successively reducing the XUV pulse duration, implying a broadening of the corresponding XUV excitation spectrum. This is shown in the following figure: 

![Attachments/Equivalence of RABBITT and Streaking Delays 3.webp|700](/img/user/Attachments/Equivalence%20of%20RABBITT%20and%20Streaking%20Delays%203.webp)[[Reading/Papers/Attosecond/Equivalence of RABBITT and Streaking Delays.pdf#page=7&rect=197,214,402,389|•]]

The solid line represents the normalised intensity of the XUV excitation pulses corresponding to the spectra in the next figure. The dashed line is the pulse train envelope. 

![Attachments/Equivalence of RABBITT and Streaking Delays 4.webp|700](/img/user/Attachments/Equivalence%20of%20RABBITT%20and%20Streaking%20Delays%204.webp) [[Reading/Papers/Attosecond/Equivalence of RABBITT and Streaking Delays.pdf#page=8&rect=91,435,509,754|•]]

- In the 'pure' RABBITT experiment with (a) and 6.7 fs FWHM pulse duration, the spectrum consists of two spectral lines at the 59th and 61st harmonic order. 
- In the 'pure' streaking experiment reduced pulse duration of the APT envelope, fewer and fewer subpulses of the APT interfere with each other. Therefore, the spectral features becomes broader. In (b) and (c) with reduced pulse duration, the sidebands become very weak and the main attosecond pulse is strongly pronounced. 



---