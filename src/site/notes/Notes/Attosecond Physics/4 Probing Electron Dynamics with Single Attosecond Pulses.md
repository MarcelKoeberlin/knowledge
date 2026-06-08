---
{"dg-publish":true,"permalink":"/notes/attosecond-physics/4-probing-electron-dynamics-with-single-attosecond-pulses/","hide":"true","updated":"2026-06-07T20:38:28.414+02:00"}
---

Jump back to ==[[Notes/Attosecond Physics/Attosecond Physics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/Attosecond Physics/4 Probing Electron Dynamics with Single Attosecond Pulses#4.1 Description of Electron Dynamics and Measurements\|4.1 Description of Electron Dynamics and Measurements]]
[[Notes/Attosecond Physics/4 Probing Electron Dynamics with Single Attosecond Pulses#4.2 Ultrafast Autoionisation Dynamics of Fano Resonances\|4.2 Ultrafast Autoionisation Dynamics of Fano Resonances]]
[[Notes/Attosecond Physics/4 Probing Electron Dynamics with Single Attosecond Pulses#4.3 Transient Photoabsorption Spectroscopy\|4.3 Transient Photoabsorption Spectroscopy]]
[[Notes/Attosecond Physics/4 Probing Electron Dynamics with Single Attosecond Pulses#4.4 Propagation of Light in the Transmission Medium\|4.4 Propagation of Light in the Transmission Medium]]
[[Notes/Attosecond Physics/4 Probing Electron Dynamics with Single Attosecond Pulses#4.5 General Features of ATA Spectra\|4.5 General Features of ATA Spectra]]


---
# 4 Probing Electron Dynamics with Single Attosecond Pulses
[ ](/img/user/Reading/Books/Attosecond%20Physics/Attosecond%20and%20Strong-Field%20Physics%20Principles%20and%20Applications.pdf)

Attosecond technology makes it possible to probe electron dynamics on their natural timescale. The central difficulty is not only generating a sufficiently short pulse, but also deciding which observable actually contains the electronic phase information. Electron densities, photoelectron spectra, and absorption spectra are all measurable, but none of them directly equal the time-dependent wavefunction.

This chapter focuses on single-attosecond-pulse probing. The main idea is to use an XUV pulse to create or interrogate an electronic wave packet and then use a delayed infrared field to modify, streak, or dress the dynamics. The measured delay-dependent signal is then interpreted as a spectrogram of the evolving electronic coherence.

---
## 4.1 Description of Electron Dynamics and Measurements
[ ](/img/user/Reading/Books/Attosecond%20Physics/Attosecond%20and%20Strong-Field%20Physics%20Principles%20and%20Applications.pdf)

An electron is not a classical particle with a well-defined trajectory. Its dynamics are governed by the time-dependent Schrödinger equation, and after the external field is over the state may be expanded in eigenstates of the field-free Hamiltonian:

$$
\Psi(\mathbf{r}, t)=\sum_i a_i(0) e^{-i E_i t/\hbar} \phi_i(\mathbf{r}).
$$
Each $\phi_i(\mathbf{r})$ is an eigenstate with energy $E_i$. The index $i$ may represent a discrete sum, a continuum integral, or both. The coefficients $a_i(0)$ are complex scattering amplitudes. Their magnitudes determine state populations, while their phases determine the subsequent temporal interference. This coherent superposition is an _electron wave packet_.

As a simple example, consider a wave packet consisting of only two eigenstates $|1\rangle$ and $|2\rangle$. The charge density contains an interference term:

$$
\begin{aligned}
N(\mathbf{r}, t)= & \left|a_1(0) \phi_1(\mathbf{r})\right|^2+\left|a_2(0) \phi_2(\mathbf{r})\right|^2 \\
& +2 \operatorname{Re}\left[a_1^*(0) a_2(0) \phi_1^*(\mathbf{r}) \phi_2(\mathbf{r})\right] \cos \left[\frac{\left(E_1-E_2\right)t}{\hbar}\right] \\
& -2 \operatorname{Im}\left[a_1^*(0) a_2(0) \phi_1^*(\mathbf{r}) \phi_2(\mathbf{r})\right] \sin \left[\frac{\left(E_1-E_2\right)t}{\hbar}\right].
\end{aligned}
$$
The density oscillates at the Bohr frequency $\omega_{12}=|E_1-E_2|/\hbar$. This frequency alone gives only limited information. The phase of $a_1^*a_2$ determines where the oscillation is at a chosen time, and therefore determines the subsequent evolution. Without phase information, the dynamics are incomplete.

If the wave packet is composed of continuum states with bandwidth $\Delta E$ centred around $E_0$, its full description requires the complex amplitude over the relevant energy interval. The coordinate-space density may move outward, broaden, and change shape, but a density snapshot is not enough to propagate the state forward. This is why attosecond probing is often a phase-retrieval problem, closely analogous to retrieving the spectral phase of an isolated attosecond pulse.

---
## 4.2 Ultrafast Autoionisation Dynamics of Fano Resonances

A Fano resonance is a scattering phenomenon in photoionisation, electron collisions, and related processes. It occurs when a discrete excited state and a continuum state lead to the same final channel. The two pathways interfere, producing an asymmetric spectral lineshape rather than a simple Lorentzian peak.

For attosecond physics, the important point is that autoionisation is a coherent decay. A short XUV pulse can populate the resonant state, and the delayed response encodes both its lifetime and its phase relative to the direct continuum path. The resonance width $\Gamma$ is related to the lifetime approximately by

$$
\tau \sim \frac{\hbar}{\Gamma}.
$$

A width of $0.1\,\mathrm{eV}$ corresponds to a few femtoseconds, which is slow enough to be sampled by attosecond pump-probe methods but fast enough that ordinary femtosecond spectroscopy would blur the details.

---
## 4.3 Transient Photoabsorption Spectroscopy
[ ](/img/user/Reading/Books/Attosecond%20Physics/Attosecond%20and%20Strong-Field%20Physics%20Principles%20and%20Applications.pdf)

In attosecond transient absorption spectroscopy (ATAS), an attosecond XUV pulse excites an electronic wave packet, followed by a moderately intense IR pulse at a controlled delay. With the XUV pulse alone, the atom or molecule develops a time-dependent dipole moment whose Fourier transform gives the ordinary absorption spectrum. In the presence of the IR field, the electronic wave packet and its dipole response are modified. Experimentally, this modification appears as a delay-dependent change in the transmitted XUV spectrum.

The result is an attosecond transient absorption (ATA) spectrogram. It is conceptually similar to a photoelectron-streaking trace, but it measures transmitted photons instead of emitted electrons and can therefore offer very high spectral resolution. The XUV and IR pulses must be synchronised, but determining the absolute zero of delay is often difficult. In typical ATAS experiments the IR intensity is kept below the threshold for strong ground-state ionisation, often below about $10^{13}\,\mathrm{W/cm^2}$. The IR field then mainly dresses excited states, couples nearby levels, and modifies the amplitude and phase of the induced dipole.

Usually, ATAS is performed with single attosecond pulses that create a complex electron wave packet. A nonlinear IR probe is then used to extract phase-sensitive information. The temporal overlap region is especially rich, because the IR field changes the medium's instantaneous polarisability rather than merely reading out a field-free evolution.

**Formulation**

In ATAS, there is an exchange of energy between the light (two-colour field) and the atom. The Hamiltonian of an atom in the two-colour field can be written as
$$
H=H_A+\varepsilon(t)z,
$$
where $\varepsilon(t)$ is the two-colour field consisting of a single attosecond pulse (SAP) and an IR laser. Both are taken to be linearly polarised along the $z$-direction. The atomic Hamiltonian is $H_A$. The rate of change of the atomic energy is

$$
\frac{d E}{d t}=\frac{d}{d t}\langle\Psi| H|\Psi\rangle=\langle\Psi| \frac{\partial H}{\partial t}|\Psi\rangle=\langle\Psi| z|\Psi\rangle \frac{\partial \varepsilon}{\partial t}=-\mu(t) \frac{\partial \varepsilon}{\partial t},
$$
where $\mu(t)$ is the induced dipole in the time domain, up to the sign convention chosen for the electron charge and field interaction. Using $\varepsilon^*(\omega)=\varepsilon(-\omega)$, one can write

$$
\Delta E=-\int_{-\infty}^{\infty} \mu(t) \frac{\partial \varepsilon}{\partial t} d t=-\int_{-\infty}^{\infty} i \omega \mu(\omega) \varepsilon^*(\omega) d \omega=\int_0^{\infty} \omega S(\omega) d \omega
$$
where

$$
S(\omega)=-2 \cdot\mathfrak{Im}\left[\mu(\omega) \varepsilon^*(\omega)\right].
$$
A generalised absorption cross-section $\bar{\sigma}(\omega)$ can be defined as the ratio of energy absorbed per unit time per unit frequency divided by the incident intensity at a given frequency:

$$
\bar{\sigma}(\omega)=\frac{\omega S(\omega)}{I_0(\omega)}=\frac{\omega S(\omega)}{c|\varepsilon(\omega)|^2 / 4 \pi}=4 \pi \alpha \frac{\omega S(\omega)}{|\varepsilon(\omega)|^2}.
$$
In the last expression atomic units are used, so that $c=1/\alpha$ with $\alpha$ the fine-structure constant. This generalised absorption cross-section can be used for both weak- and strong-field light pulses. In the weak-field limit it reduces to the usual absorption cross-section; in the strong-field case it remains useful because it is defined through the actual energy exchange with the time-dependent dipole.

---
## 4.4 Propagation of Light in the Transmission Medium
When light interacts [[Notes/Ultrafast Laser Physics/2 Linear Pulse Propagation\|linearly]] with the medium, the absorption is described by Beer's law:

$$
I(\omega,x)=I(\omega,0)e^{-\rho\sigma(\omega)x},
$$
where $I$ is the spectral intensity at position $x$, $\rho$ is the number density, and $\sigma(\omega)$ is the absorption cross-section. In this linear expression the cross-section depends only on photon energy and has no explicit spatial or temporal dependence.

With both XUV and IR present, the medium response is more complicated because the IR field modifies the dipole during propagation. The propagation problem is then treated similarly to harmonic generation in a medium, except that the IR intensity in ATAS is usually one or two orders of magnitude weaker and not tightly focused. One can therefore often neglect transverse field variation and reduce Maxwell's equation to

$$
\frac{\partial E\left(x, t^{\prime}\right)}{\partial x}=-\frac{\rho}{c \varepsilon_0} \frac{\partial \mu\left(x, t^{\prime}\right)}{\partial t^{\prime}},
$$
where the equation is written in the moving frame $t^\prime=t-x/c$. The right-hand side is the induced dipole from the atoms at position $x$. In practice, the calculation alternates between microscopic response and macroscopic propagation: solve the atomic dynamics for the local field, extract the dipole, propagate the field, and repeat through the medium.

**Calculation of Single-Atom-Induced Transition Dipole**
To obtain the induced dipole at each time delay, one can in principle solve the TDSE, evaluate

$$
d(t)=\langle\Psi(t)|z|\Psi(t)\rangle,
$$

and Fourier-transform it to obtain $d(\omega)$. Such calculations can be accurate for one-electron targets. For simple systems, calculated spectra may even be used as controlled "experimental data", since the XUV and IR pulses are exactly known in the simulation. Extending the TDSE to many-electron atoms and molecules is conceptually straightforward but numerically much harder, especially because ATAS can reach meV-scale spectral resolution. Small errors in energies and dipole phases can therefore become visible in the simulated spectrogram.

---
## 4.5 General Features of ATA Spectra
[ ](/img/user/Reading/Books/Attosecond%20Physics/Attosecond%20and%20Strong-Field%20Physics%20Principles%20and%20Applications.pdf)

For resonances below the first ionisation threshold, ATA spectra often show narrow absorption lines whose strength, position, and phase are modulated by the delayed IR pulse. Several recurring features are useful when reading such spectra:

1. **Line shifts:** The IR field can Stark-shift bound or quasi-bound levels, causing delay-dependent movement of absorption features.
2. **Line-shape changes:** Interference between direct excitation and resonant pathways can turn absorption into emission-like features or asymmetric Fano profiles.
3. **Quantum beats:** If the XUV pulse excites several coherent states, the absorption oscillates at the energy differences between them.
4. **State coupling:** The IR pulse can couple bright and dark states, making otherwise weak transitions visible.
5. **Propagation effects:** At sufficient optical density, the measured spectrum is not only a single-atom response but also contains reshaping during propagation through the medium.

The interpretation is therefore more subtle than reading a static absorption spectrum. The delay axis carries phase information, while the photon-energy axis identifies the participating states. Together they provide a window into electron dynamics that is complementary to photoelectron streaking and RABBITT measurements from [[Notes/Attosecond Physics/3 Characterisation of Attosecond Pulses\|chapter 3]].
