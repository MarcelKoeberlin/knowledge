---
{"dg-publish":true,"permalink":"/notes/2025-quantum-electronics/8-laser-fundamentals/","hide":"true","updated":"2025-06-04T15:34:06.000+02:00"}
---

Jump back to ==[[Notes/2025 Quantum Electronics/Quantum Electronics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/2025 Quantum Electronics/8 Laser Fundamentals#8.1 Fundamental Light-Matter Interaction\|8.1 Fundamental Light-Matter Interaction]]
[[Notes/2025 Quantum Electronics/8 Laser Fundamentals#8.2 Einstein Coefficients and Rate Equation\|8.2 Einstein Coefficients and Rate Equation]]
[[Notes/2025 Quantum Electronics/8 Laser Fundamentals#8.3 Lasers\|8.3 Lasers]]
[[Notes/2025 Quantum Electronics/8 Laser Fundamentals#8.4 Laser Rate Equations\|8.4 Laser Rate Equations]]
[[Notes/2025 Quantum Electronics/8 Laser Fundamentals#8.5 Experimental Parameters of Lasers\|8.5 Experimental Parameters of Lasers]]
[[Notes/2025 Quantum Electronics/8 Laser Fundamentals#8.6 Initial Laser Dynamics\|8.6 Initial Laser Dynamics]]
[[Notes/2025 Quantum Electronics/8 Laser Fundamentals#8.7 Mode Selection\|8.7 Mode Selection]]
[[Notes/2025 Quantum Electronics/8 Laser Fundamentals#8.8 Hole Burning\|8.8 Hole Burning]]
[[Notes/2025 Quantum Electronics/8 Laser Fundamentals#8.9 Pulsed Lasers - Overview\|8.9 Pulsed Lasers - Overview]]
[[Notes/2025 Quantum Electronics/8 Laser Fundamentals#8.10 Examples of Lasers\|8.10 Examples of Lasers]]

---
# 8 Laser Fundamentals
[[Notes/2025 Quantum Electronics/QE_script.pdf#page=144&selection=1,0,1,18| ]] [[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=2&selection=0,0,0,29| ]]

In this chapter, the fundamental principles underlying the physics of a laser are discussed. However, before delving into the physics, let us understand what 'Laser' stands for:
$$
\text{Laser} \equiv \text{Light Amplification by Stimulated Emission of Radiation}
$$
Later on, we will understand why each word in this acronym plays a crucial role for these devices to function. A laser requires, at a very basic level, an amplifying medium (called the _gain medium_), a feedback mechanism (typically an optical resonator), and an energy source (called the _pump_). For now, we will consider a laser as an optical resonator system capable of emitting coherent light. We will discuss this in more detail in [[Notes/2025 Quantum Electronics/8 Laser Fundamentals#8.3 Lasers\|section 8.3]]. The following figure sketches the minimum requirements that a laser needs to have, as already mentioned:

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals.webp)[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=3&rect=302,93,794,301| ]]

In the following section, we will first introduce Einstein coefficients and deduce from these the requirements for the gain medium.

---
## 8.1 Fundamental Light-Matter Interaction
[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=6&selection=0,37,0,37| ]] [[Notes/2025 Quantum Electronics/QE_script.pdf#page=149&selection=6,0,8,46| ]]

This section aims to give a brief overview of light-matter (or photon-atom) interactions that are relevant to understanding lasers. A full treatment of this topic requires quantum electrodynamics (QED), which goes much beyond the scope of this course. First, let us consider a quantum-mechanical material, that is, a material with quantised energy levels. To keep it simple, imagine a two-level system, comprising a ground state $|1\rangle$ and an excited state $|2\rangle$. These states have energies $E_1$ and $E_2$, respectively, where by definition $E_1 < E_2$. We will focus on interactions with photons of energy $h\nu = E_2-E_1$ (where $\nu$ is the frequency and $h$ is Planck's constant, or $\hbar\omega = E_2-E_1$ for angular frequency $\omega$). Furthermore, we will only consider the transition $|1\rangle \leftrightarrow |2\rangle$ to be dipole allowed. Consider the following three fundamental interaction processes:

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/QE_script 5.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/QE_script%205.webp)[[Notes/2025 Quantum Electronics/QE_script.pdf#page=150&rect=105,365,498,687| ]]

In the following, we will assume that all these processes occur effectively instantaneously relative to other timescales of interest:

- a) **Spontaneous emission:** This process is independent of the presence of other photons. An atom or molecule in an excited state $|2\rangle$ may spontaneously transition to the ground state $|1\rangle$, releasing its excess energy as a photon with energy $h\nu = E_2-E_1$. The probability per unit time (rate) of this process for a single atom is denoted $A_{21}$.
- b) **Absorption:** An incoming photon of energy $h\nu$ can be absorbed by an atom in the ground state $|1\rangle$, exciting it to state $|2\rangle$. The probability per unit time of this process, $W_{12}^{\text{abs}}$, is proportional to the energy density of incident photons at frequency $\nu$. If $N_{ph}$ is the number of incident photons (or related to field intensity), the rate is proportional to $N_{ph}$.
- c) **Stimulated emission:** An incoming photon with energy $h\nu$ can interact with an atom already in the excited state $|2\rangle$. This interaction can stimulate the atom to transition back to the ground state $|1\rangle$, emitting a second photon. This emitted photon is **identical** to the incident (stimulating) photon – it has the same frequency, phase, direction of propagation, and polarisation. This property is critical for light amplification. As with absorption, the probability per unit time of stimulated emission, $W_{21}^{\text{stim}}$, is proportional to the energy density of incident photons at frequency $\nu$.

From these points, it should be clear that the rates for absorption and stimulated emission are not constant intrinsic atomic properties alone but depend on the strength of the incident electromagnetic field (related to $N_{ph}$ or energy density $\rho(\nu)$).

---
## 8.2 Einstein Coefficients and Rate Equation
[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=12&selection=0,38,0,38| ]] [[Notes/2025 Quantum Electronics/QE_script.pdf#page=151&selection=4,0,9,31| ]]

Keeping the notation from above, $A_{21}$ is the **rate** of spontaneous emission for a single atom from level 2 to level 1 (units of $\text{s}^{-1}$). It is an intrinsic property of the specific atomic transition and is related to the radiative lifetime $t_{sp}$ of the excited state by:
$$
A_{21} = \frac{1}{t_{sp}}.
$$
The lifetime $t_{sp}$ depends on the atom and the specific transition but not directly on the external electromagnetic field modes (though it can be modified by the local density of optical states, for instance in a cavity – the Purcell effect). Typical values for allowed atomic transitions are $t_{sp} \sim 10^{-8} \, \text{s}$. The population $N_2(t)$ of an ensemble of initially excited atoms decays as $N_2(t) = N_2(0)e^{-A_{21}t} = N_2(0)e^{-t/t_{sp}}$.

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals-1.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals-1.webp) [[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=13&rect=183,148,660,467| ]]

Similarly, we can define the absorption rate per atom, $W_{12}$, for the transition from level 1 to level 2, and the stimulated emission rate per atom, $W_{21}$, from level 2 to level 1. These rates are proportional to the spectral energy density $\rho(\nu_0)$ of the electromagnetic field at the transition frequency $\nu_0 = (E_2-E_1)/h$:
$$
\begin{aligned}
W_{12} & \equiv B_{12} \rho(\nu_0), \\
W_{21} & \equiv B_{21} \rho(\nu_0).
\end{aligned}
$$
Here, $B_{12}$ and $B_{21}$ are the Einstein B coefficients for absorption and stimulated emission, respectively. These coefficients are properties of the atomic transition and are independent of the electromagnetic field strength (though they depend on the transition frequency and dipole moment). The question now is whether $A_{21}, B_{12},$ and $B_{21}$ are independent of each other. The answer is no, as shown by Albert Einstein in 1917.

Consider a collection of two-level atoms inside an optical cavity, with both the atoms and the electromagnetic field inside the cavity in mutual thermal equilibrium at temperature $T$. The relative population densities of atoms in state $|1\rangle$ ($N_1$) and state $|2\rangle$ ($N_2$) are determined by the Boltzmann distribution:
$$
\frac{N_2}{N_1} = \frac{g_2}{g_1} e^{-(E_2-E_1) / k_B T} = \frac{g_2}{g_1} e^{-h\nu_0 / k_B T},
$$
where $g_1, g_2$ are the degeneracies of the levels, often assumed $g_1=g_2=1$ for simplicity.
The rate of change of $N_2$ is the sum of rates for all processes:
$$
\begin{align}
\frac{dN_2}{dt} &= (\text{absorption rate})\\& - (\text{spontaneous emission rate}) \\&- (\text{stimulated emission rate}).
\end{align}
$$
For population densities $N_1, N_2$:
$$
\begin{aligned}
\left(\frac{dN_2}{dt}\right)_{\text{abs}} &= W_{12} N_1 = B_{12} \rho(\nu_0) N_1, \\
\left(\frac{dN_2}{dt}\right)_{\text{spon}} &= -A_{21} N_2, \\
\left(\frac{dN_2}{dt}\right)_{\text{stim}} &= -W_{21} N_2 = -B_{21} \rho(\nu_0) N_2.
\end{aligned}
$$
In thermal equilibrium, $dN_2/dt = 0$, so:
$$
B_{12} \rho(\nu_0) N_1 - A_{21} N_2 - B_{21} \rho(\nu_0) N_2 = 0.
$$
Solving for $\rho(\nu_0)$:
$$
\rho(\nu_0) = \frac{A_{21} N_2}{B_{12} N_1 - B_{21} N_2} = \frac{A_{21}/B_{21}}{(B_{12}/B_{21})(N_1/N_2) - 1}.
$$
Substituting $N_1/N_2 = (g_1/g_2)e^{h\nu_0/k_B T}$:
$$
\rho(\nu_0) = \frac{A_{21}/B_{21}}{(B_{12}g_1)/(B_{21}g_2) e^{h\nu_0/k_B T} - 1}.
$$
This expression for $\rho(\nu_0)$ must be identical to Planck's blackbody radiation law for spectral energy density:
$$
\rho(\nu_0) = \frac{8 \pi h \nu_0^3 n^3}{c^3} \frac{1}{e^{h\nu_0/k_B T}-1},
$$
(where $n$ is the refractive index of the medium, $n \approx 1$ if cavity is near vacuum).
Comparing these two expressions for $\rho(\nu_0)$ yields the Einstein relations:
$$
\frac{B_{12}}{B_{21}} = \frac{g_2}{g_1} \quad \text{and} \quad \frac{A_{21}}{B_{21}} = \frac{8 \pi h \nu_0^3 n^3}{c^3}.
$$
If $g_1=g_2$ (non-degenerate levels or equally degenerate), then $B_{12}=B_{21} \equiv B$. The Einstein A and B coefficients are then related by:
$$
B = \frac{c^3}{8 \pi h \nu_0^3 n^3} A_{21} = \frac{\lambda_0^3}{8 \pi h n^3 t_{sp}} \quad (\text{using } \nu_0=c/(n\lambda_0) \text{ or } \lambda_0 \text{ as vacuum wavelength}).
$$
This allows relating the probabilities (rates per atom per unit energy density) for absorption and stimulated emission to the probability (rate per atom) for spontaneous emission. The derivation also shows a fundamental symmetry between stimulated emission and absorption ($g_1 B_{12} = g_2 B_{21}$). Without stimulated emission, thermal equilibrium would not be consistent with Planck's law.
Although derived assuming thermal equilibrium, these relations between $A_{21}, B_{12}, B_{21}$ are fundamental properties of the atomic system and hold universally, irrespective of whether the system is in thermal equilibrium. The coefficients $A$ and $B$ depend on the type of atom and specific transition involved. The local electromagnetic environment (for instance, a resonant cavity) can modify the spontaneous emission rate $A_{21}$ ([[Purcell effect\|Purcell effect]]), which would then also modify $B_{12}$ and $B_{21}$ through these relations.

### 8.2.1 Transition Width

The energy difference between two states is $\hbar\omega_0 = E_2-E_1$. Ideally, one might expect transitions to occur at this exact frequency, resulting in an infinitely narrow spectral line. However, this is not observed in realistic systems:

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 1.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%201.webp) [[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=23&rect=378,107,680,485| ]]

Real transitions always have a finite width in energy (and thus frequency). This broadening occurs even with an ideal spectrometer possessing arbitrarily high spectral resolution. Several physical effects contribute to this broadening.

### 8.2.2 Homogeneous vs Inhomogeneous Broadening

**Homogeneous broadening** occurs when the broadening mechanism affects all atoms (or molecules) in the ensemble in an identical way. Each atom effectively has the same resonance frequency and the same broadened lineshape.

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 2.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%202.webp) [[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=24&rect=25,352,384,488| ]]

Examples include:
-   **Lifetime broadening (Natural broadening):** Arises from the finite lifetime $t_{sp}$ of the excited state due to spontaneous emission, dictated by the energy-time uncertainty principle ($\Delta E \Delta t \ge \hbar/2$).
-   **Collision broadening (Pressure broadening):** Collisions between atoms interrupt the emission process, effectively shortening the coherence time of the emitted radiation. In a dense gas or liquid, all atoms experience similar average collision rates.

**Inhomogeneous broadening** occurs when different atoms in the ensemble experience slightly different local environments or conditions, leading to a distribution of individual resonance frequencies. The overall observed spectral line is the sum of many narrower lines, each slightly shifted.

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 3.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%203.webp) [[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=24&rect=21,161,371,295| ]]

An important example is **Doppler broadening** in gases, where atoms moving with different velocities relative to an observer (or a detector) exhibit different apparent transition frequencies due to the Doppler effect. Another example is broadening in solids due to variations in the local crystal field experienced by different active ions.

Let us consider lifetime broadening again. The intensity of light $I(t)$ emitted by an ensemble of atoms, initially excited at $t=0$ and then decaying by spontaneous emission with a lifetime $t_{sp}$, is proportional to $e^{-t/t_{sp}}$ for $t>0$. The corresponding electric field $E(t)$ of the emitted wave behaves as:
$$
E(t) \sim \begin{cases}0 & t \leq 0 \\ e^{-t/(2t_{sp})} e^{i 2 \pi \nu_0 t} & t>0.\end{cases}
$$
(The factor of $1/2$ in the exponential decay of the field amplitude ensures the intensity decays as $e^{-t/t_{sp}}$).
Fourier transforming this decaying sinusoidal field yields a spectral intensity profile $I(\nu)$ that is Lorentzian:
$$
I(\nu) \sim \frac{1}{(\nu-\nu_0)^2+(\Delta\nu_L/2)^2},
$$
where $\Delta\nu_L = A_{21}/(2\pi) = 1/(2\pi t_{sp})$ is the FWHM linewidth of this lifetime-broadened (natural) lineshape.

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 5.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%205.webp) [[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=26&rect=245,81,589,252| ]]

This corresponds to an ensemble of atoms where each atom emits light with this characteristic spectral profile. The normalised lineshape function $g(\nu)$ associated with a Lorentzian profile is:
$$
g(\nu)=\frac{\Delta\nu_L/(2\pi)}{(\nu-\nu_0)^2+(\Delta\nu_L/2)^2}.
$$
Its general properties are $I(\nu) \sim g(\nu)$ (at peak) and $\int_{-\infty}^{\infty}g(\nu)d\nu=1$. Generally, homogeneous broadening processes result in Lorentzian lineshapes.
In contrast, if a Doppler broadened spectrum consists of a statistical distribution of individual, shifted (but perhaps still lifetime-broadened) Lorentzian spectra, the overall observed lineshape for inhomogeneous broadening is often Gaussian.

### 8.2.3 Absorption Cross-Section

The absorption cross-section $\sigma(\nu)$ quantifies the effective area an atom presents to incident photons of frequency $\nu$ for absorption. The number of photons $dn_{\text{abs}}$ absorbed from a single mode $j$ by one atom in time $dt$ is $dP_{12,j}^{\text{abs}} = W_{12,j} dt$. This can also be expressed using the photon flux $\phi_j$ (photons per unit area per unit time) in mode $j$:
$$
\frac{dP_{12, j}^{\text{abs}}}{dt} = \sigma(\nu_j) \phi_j.
$$
The absorption cross-section $\sigma(\nu)$ is related to the Einstein B coefficient and also to the A coefficient and the lineshape function $g(\nu)$:
$$
\sigma(\nu) = \frac{h\nu}{c/n} B_{12} g(\nu) = \frac{g_2}{g_1} \frac{\lambda_0^2}{8 \pi n^2 t_{sp}} g(\nu),
$$
where $\lambda_0$ is the vacuum wavelength of the transition, $n$ is the refractive index of the medium, and $g(\nu)$ is the normalised lineshape function ($\int g(\nu)d\nu=1$). The same cross-section (with appropriate level degeneracies $g_1, g_2$) applies to stimulated emission: $\sigma_{em}(\nu) = (g_1/g_2)\sigma_{abs}(\nu)$.

---
## 8.3 Lasers
[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=38&selection=0,0,0,30| ]] [[Notes/2025 Quantum Electronics/QE_script.pdf#page=153&selection=23,0,25,14| ]]

Let us now return to achieving a functioning laser. For simplicity, we will consider a laser cavity designed to amplify light primarily in a small number of resonant modes:

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals.webp)[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=3&rect=302,93,794,301| ]]

### 8.3.1 Population Inversion, Lasing Conditions and Gain

The ultimate goal of a laser is to increase the photon number $\bar{n}$ (average number of photons in a cavity mode) through net stimulated emission. In a two-level system, the rate of change of $\bar{n}$ within a single cavity mode due to interaction with atoms having populations $N_1$ (ground) and $N_2$ (excited) is:
$$
\begin{align}
\frac{d \bar{n}}{d t} &= (\text{Stimulated Emission Rate}) \\&- (\text{Absorption Rate}) \\&+ (\text{Spontaneous Emission into mode}).
\end{align}
$$
Using Einstein coefficients, this can be written as (ignoring cavity losses for now):
$$
\frac{d \bar{n}}{d t} = N_2 B_{21} \rho(\nu_0) - N_1 B_{12} \rho(\nu_0) + N_2 A_{21}^{\text{mode}},
$$
where $A_{21}^{\text{mode}}$ is the rate of spontaneous emission into the specific lasing mode (often proportional to $A_{21}$).
For net amplification by stimulated emission, we need $N_2 B_{21} \rho(\nu_0) > N_1 B_{12} \rho(\nu_0)$.
Using $g_1 B_{12} = g_2 B_{21}$, this condition becomes $N_2 (g_1/g_2) > N_1$, or for $g_1=g_2$, simply $N_2 > N_1$.
This condition, $N_2 > N_1$ (or more generally $N_2/g_2 > N_1/g_1$), is called **population inversion**. It means there are more atoms in the excited state (per degeneracy) than in the lower state involved in the lasing transition. Population inversion is a non-equilibrium condition, strongly contrasting with Boltzmann statistics for thermal equilibrium, where $N_2/g_2 < N_1/g_1$ always holds. Achieving population inversion requires externally supplying energy to the atoms. This process is called **pumping** and can be done optically (using another light source like a flashlamp or another laser) or electrically (using an electrical discharge or current injection).

Another requirement for lasing is **feedback**. To ensure that stimulated emission dominates spontaneous emission and to build up a substantial photon number in a specific mode, the emitted photons must be confined and made to pass through the gain medium multiple times. This is achieved by placing the gain medium within an optical resonator (cavity), typically formed by two mirrors. The resonator selectively enhances specific frequencies (its resonant modes) and provides the feedback, greatly increasing $\rho(\nu_0)$ within these modes and thus boosting the stimulated emission rate.

The notion of **gain** quantifies the amplification. If a photon flux $\phi$ (or intensity $I$) propagates through an inverted medium, its rate of increase with distance $z$ is:
$$
\frac{d \phi(z)}{dz} = \gamma(\nu) \phi(z), \quad \text{or} \quad \frac{d I(z)}{dz} = g_I(\nu) I(z).
$$
Here, $\gamma(\nu)$ (or $g_I(\nu)$) is the gain coefficient (per unit length). It is proportional to the population inversion $N = N_2 - (g_2/g_1)N_1$ and the emission cross-section $\sigma_{em}(\nu)$: $\gamma(\nu) = N \sigma_{em}(\nu)$ (if $N$ is inversion density $(N_2/g_2 - N_1/g_1)g_2$).
The total gain $G(\nu)$ after passing through a gain medium of length $d$ is $G(\nu) = e^{\gamma(\nu)d}$. It depends strongly on the amount of population inversion.

Thus, schematically a laser involves pumping to achieve population inversion in a gain medium, which is placed inside an optical resonator to provide feedback and mode selection:

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/QE_script 5-1.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/QE_script%205-1.webp)[[Notes/2025 Quantum Electronics/QE_script.pdf#page=156&rect=73,476,304,616| ]]
The feedback also provides narrow spectral filtering due to the cavity resonances.

### 8.3.2 Achieving Population Inversion

As mentioned, pumping the system from state $|1\rangle$ to state $|2\rangle$ and expecting lasing on the same $|2\rangle \to |1\rangle$ transition (a pure two-level system) does not lead to population inversion. The steady-state rate balance equation, $W_{12}^{\text{pump}} N_1 = A_{21} N_2 + W_{21}^{\text{stim}} N_2$, where $W_{12}^{\text{pump}}$ is the pumping rate from 1 to 2, and $W_{21}^{\text{stim}}$ is the stimulated emission rate from 2 to 1 due to the generated photons, shows this. If $g_1 B_{12} = g_2 B_{21}$, then $W_{12}^{\text{stim}} = (g_2/g_1) W_{21}^{\text{stim}}$. Even with very strong pumping, the best one can achieve is $N_2/g_2 \approx N_1/g_1$ (saturation), but not $N_2/g_2 > N_1/g_1$. Therefore, **population inversion is not possible in a simple two-level system when pumped and lased on the same transition.** This necessitates using systems with at least three or four energy levels.

The small-signal gain coefficient $\gamma_0(\nu)$ is the maximum gain achieved when the population inversion $N_0$ is at its maximum (for instance, in the absence of photons in the cavity to cause stimulated emission, $I \approx 0$): $\gamma_0(\nu)=N_0\sigma_{em}(\nu)$.

### 8.3.3 Three-Level Laser Systems
[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=46&selection=0,0,0,22| ]] [[Notes/2025 Quantum Electronics/QE_script.pdf#page=165&selection=4,0,6,18| ]]

Since population inversion is unobtainable in an ideal two-level system pumped on the lasing transition, we consider systems with more levels. A three-level system is the minimum required for achieving inversion.

The general layout is:

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 8.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%208.webp)[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=46&rect=33,225,403,362| ]]

Atoms are pumped from the ground state $|1\rangle$ to a higher energy level $|3\rangle$. This level $|3\rangle$ is typically a broad absorption band and is short-lived, with atoms rapidly decaying (often non-radiatively, lifetime $\tau_{32}$) to an intermediate metastable level $|2\rangle$. The lasing transition then occurs between level $|2\rangle$ and the ground state $|1\rangle$. The lifetime of level $|2\rangle$ due to spontaneous emission to state $|1\rangle$ is $\tau_{21}$, which needs to be long to allow population to accumulate in $|2\rangle$.
The rate equations (assuming $N_3$ is small due to fast decay $\tau_{32} \ll \tau_{21}$, so pumped atoms quickly arrive in state $|2\rangle$ at a rate $R_p \approx W_p N_1$) become approximately:
$$
\begin{aligned}
\frac{d N_2}{d t} & \approx R_p - \frac{N_2}{\tau_{21}} - W_i (N_2 - N_1) \\
\frac{d N_1}{d t} & \approx -R_p + \frac{N_2}{\tau_{21}} + W_i (N_2 - N_1)
\end{aligned}
$$
where $N_1+N_2 \approx N_{\text{total}}$ (total active atom density) and $W_i = B \rho(\nu_0)$ is the stimulated transition rate for the $|2\rangle \leftrightarrow |1\rangle$ transition.
Solving for steady-state ($dN_2/dt=0, dN_1/dt=0$), the population inversion $N=N_2-N_1$ can be found.
Achieving inversion ($N_2>N_1$) in a three-level system is possible, but requires strong pumping because the lower laser level is the ground state, which is heavily populated at thermal equilibrium. More than half of the total atoms must be pumped out of the ground state into the excited state $|2\rangle$ to achieve $N_2>N_1$. This makes three-level lasers generally less efficient and require higher pump powers. Additionally, reabsorption of laser photons by ground state atoms can be a significant loss.

The first laser, the ruby laser ($\text{Cr}^{3+}$ in $\text{Al}_2\text{O}_3$), was a three-level system:

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 9.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%209.webp)[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=51&rect=43,111,707,515| ]]

Erbium-doped silica fibre amplifiers/lasers can also operate on a quasi-three-level scheme depending on the wavelength.

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 10.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%2010.webp)[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=54&rect=84,197,717,454| ]]

Ytterbium-doped YAG ($\text{Yb:YAG}$) is another important gain medium that can operate as a quasi-three-level system (the lower laser level is very close to the ground state).

### 8.3.4 Four-Level System
[[Notes/2025 Quantum Electronics/QE_script.pdf#page=166&selection=194,0,196,17| ]] [[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=55&selection=0,17,0,17| ]]

The challenges of high pump thresholds in three-level systems are largely overcome in a four-level system:

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 11.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%2011.webp)[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=55&rect=93,186,655,458| ]]

Here, atoms are pumped from the ground state $|0\rangle$ to a higher pump band $|3\rangle$. They rapidly decay from $|3\rangle$ to the upper laser level $|2\rangle$ (metastable). The lasing transition occurs between $|2\rangle$ and a lower laser level $|1\rangle$. Crucially, level $|1\rangle$ is above the ground state $|0\rangle$ and rapidly depopulates to the ground state (lifetime $\tau_{10}$ is very short).
This rapid depopulation of the lower laser level $|1\rangle$ ensures that its population $N_1$ remains very small. Thus, population inversion ($N_2 > N_1$) between levels $|2\rangle$ and $|1\rangle$ can be achieved with much lower pumping rates than in a three-level system, as $N_1 \approx 0$.
The rate equations simplify under these assumptions ($\tau_{32} \to 0$, $\tau_{10} \to 0$). The steady-state inversion $N=N_2-N_1 \approx N_2$ is given by similar forms as for the three-level system but with parameters that make $N>0$ much easier to achieve for a given pump rate $W_p$.
One example of a four-level laser system is Nd:YAG or Nd:glass (neodymium-doped YAG crystal or glass), widely used in high-power applications.

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 12.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%2012.webp)[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=57&rect=52,117,420,391| ]]

### 8.3.5 Pumping Schemes
[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=62&selection=0,0,0,15| ]]

A variety of pumping schemes are used to deliver energy to the gain medium. Some examples include:

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 13.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%2013.webp)[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=62&rect=20,140,578,460| ]]

- (a) Gas laser pumped by direct current (DC) electrical discharge.
- (b) Solid-state laser pumped by a flashlamp.
- (c) $\text{Nd:YVO}_4$ solid-state laser optically pumped by a laser diode array.
- (d) Fibre laser (such as erbium-doped silica fibre) with fibre Bragg grating reflectors, pumped with a laser diode.
- (e) Laser diode (a forward-biased p-n junction) with cleaved facets acting as mirrors, pumped by electrical current injection.
- (f) Quantum-well semiconductor laser, pumped electrically.

---
## 8.4 Laser Rate Equations
[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=63&selection=0,0,0,50| ]]

We will treat an ideal four-level system in more detail. Assume an ideal system where $\tau_{32} \to 0$ (atoms pumped to $|3\rangle$ immediately transfer to $|2\rangle$) and $\tau_{10} \to 0$ (atoms arriving in $|1\rangle$ immediately decay to $|0\rangle$, so $N_1 \approx 0$). The lasing transition is $|2\rangle \to |1\rangle$.

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 14.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%2014.webp)[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=63&rect=127,287,372,461| ]]

Consider a single lasing mode within the cavity, and assume a homogeneously broadened gain medium. Let $n$ be the number of photons in the lasing mode and $N_2$ be the population density of the upper laser level (we can denote $N_2 \equiv N_{\text{inv}}$ as the inversion density, since $N_1 \approx 0$). Two coupled rate equations can describe the system:
$$
\begin{aligned}
&\frac{dn}{dt} = K n N_{\text{inv}} + K N_{\text{inv}} - \gamma_c n \quad\text{(Photon number rate equation)} \\
&\frac{dN_{\text{inv}}}{dt} = R_p - K n N_{\text{inv}} - \gamma_L N_{\text{inv}} \quad\text{(Population inversion rate equation)}
\end{aligned}
$$
where:
- $K$ is a coupling constant proportional to the stimulated emission cross-section and mode volume ($K \sim B_{21}$).
- $K N_{\text{inv}}$ is the rate of spontaneous emission into the lasing mode (the "+1" in $K(n+1)N_{\text{inv}}$ from some texts is written as $K N_{\text{inv}}$ here, as spontaneous emission into the mode).
- $K n N_{\text{inv}}$ is the rate of stimulated emission into the lasing mode.
- $\gamma_c$ is the cavity photon decay rate (loss rate from cavity, $\gamma_c = 1/\tau_{\text{photon}}$, where $\tau_{\text{photon}}$ is photon lifetime).
- $R_p$ is the pumping rate into the upper laser level $N_2$.
- $\gamma_L$ is the total decay rate of the upper laser level $N_2$ due to all processes other than stimulated emission into the lasing mode (primarily spontaneous emission, $\gamma_L \approx 1/\tau_{21}$).

In stationary solutions ($dn/dt=0, dN_{\text{inv}}/dt=0$):
From the first equation (for $n>0$): $K(n_s+1)N_s = \gamma_c n_s \implies (K N_s - \gamma_c)n_s = -K N_s$.
This implies $K N_s = \gamma_c$ for steady-state lasing (gain equals loss), assuming $n_s \gg 1$ so the spontaneous term $KN_s$ is small compared to $Kn_sN_s$.
This defines the **threshold inversion density**:
$$
N_{\text{th}} = \frac{\gamma_c}{K}.
$$
Above threshold, the inversion clamps at $N_s \approx N_{\text{th}}$.
From the second equation, $R_p = K n_s N_s + \gamma_L N_s$. Substituting $N_s \approx N_{\text{th}}$ for $r>1$:
$$
n_s \approx \frac{R_p - \gamma_L N_{\text{th}}}{K N_{\text{th}}} = \frac{R_p}{K N_{\text{th}}} - \frac{\gamma_L}{K}.
$$
The threshold pumping rate $R_{p,th}$ is when $n_s \approx 0$, so $R_{p,th} \approx \gamma_L N_{\text{th}} = \frac{\gamma_L \gamma_c}{K}$.
Let $r = R_p/R_{p,th}$ be the normalised pumping rate.
Then $n_s \approx \frac{\gamma_L}{K}(r-1)$.

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 15.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%2015.webp)
![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 16.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%2016.webp)[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=66&rect=454,107,785,364| ]]

- **Above threshold ($r>1$):**
  $$N_s \approx N_{\text{th}} = \frac{\gamma_c}{K}$$
  $$n_s \approx \frac{\gamma_L}{K}(r-1)$$
  The inversion is clamped to its threshold value. Every additionally pumped atom primarily contributes to stimulated emission, increasing the coherent photon number $n_s$.
- **Below threshold ($r<1$):**
  Stimulated emission is negligible ($n_s \approx 0$). $dN_{\text{inv}}/dt \approx R_p - \gamma_L N_s = 0 \implies N_s \approx R_p/\gamma_L = r R_{p,th}/\gamma_L = r (N_{\text{th}}/\tau_L) \tau_L = r N_{\text{th}}$.
  The photon number $n_s$ is very small, dominated by spontaneous emission into the mode: $n_s \approx K N_s / \gamma_c = K (r N_{\text{th}}) / \gamma_c = r$.

The output power is proportional to $n_s$. Well above threshold ($r \gg 1$), the photon number $n_s$ (and thus output power) is approximately linearly proportional to the pump rate $R_p$.

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 17.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%2017.webp)
![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 18.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%2018.webp)[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=68&rect=416,94,709,286| ]]
The exact solutions show a smooth transition around the threshold:

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 19.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%2019.webp)[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=69&rect=236,179,612,465| ]]

---
## 8.5 Experimental Parameters of Lasers
[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=70&selection=0,34,0,34| ]]

In practice, inversion and photon number are not always the most directly accessible experimental quantities. Gain, loss, and output power (related to photon flux) are often more useful.
The gain coefficient is $\gamma(\nu)=N_{\text{inv}} \sigma_{em}(\nu)$, where $N_{\text{inv}} = N_2 - (g_2/g_1)N_1$.
The small-signal gain coefficient (unsaturated gain) is $\gamma_0(\nu)=N_{0,\text{inv}} \sigma_{em}(\nu)$, where $N_{0,\text{inv}}$ is the inversion achieved by pumping in the absence of cavity photons ($n \approx 0$).
Gain clamping above threshold means $N_s \approx N_{\text{th}}$, so the actual gain coefficient in steady-state lasing clamps at the threshold value required to overcome losses.
The resonator losses $l$ per round trip consist of unwanted losses (absorption, scattering, diffraction) and output coupling losses $T_{oc}$ (transmission through the output mirror). If $R_1, R_2$ are mirror power reflectivities, $l = (1-R_1R_2) + \text{internal losses}$.
After one resonator round trip of length $L_{\text{RT}} = 2L$ (for a linear cavity of length $L$), the intensity reduces by a factor $e^{-l}$. The cavity photon decay rate $\gamma_c$ is related to losses by $\gamma_c = l c / (n L_{\text{RT}})= l / T_R$, where $T_R = nL_{\text{RT}}/c$ is the round-trip time.
The total round trip gain (power) is $G(\nu)=e^{2 \gamma(\nu) L_g}$ (where $L_g$ is length of gain medium).
The net gain per round trip $G_{\text{net}} = G(\nu)e^{-l}$. For steady-state lasing, $G_{\text{net}}=1$, so $2\gamma(\nu)L_g = l$. The gain must equal the losses.
Thus, $\gamma(\nu) = l/(2L_g)$. The gain coefficient clamps to this value.
The gain coefficient saturates with increasing intra-cavity intensity $I$ (or photon flux $\phi$) as:
$$
\gamma(I)=\frac{\gamma_0}{1+I / I_{\mathrm{sat}}}, \quad \text{or} \quad \gamma(\phi)=\frac{\gamma_0}{1+\phi / \phi_{\mathrm{sat}}},
$$
where $I_{\text{sat}}$ and $\phi_{\text{sat}}$ are the saturation intensity and saturation photon flux, respectively.
$I_{\text{sat}}=\frac{h\nu}{\sigma_{em} \tau_{21}}$ where $\tau_{21}$ is the upper laser level lifetime (including all decay channels). The saturation fluence is $F_{\text{sat}} = I_{\text{sat}}\tau_{21} = h\nu/\sigma_{em}$.
Both saturation intensity and fluence are material and transition-specific properties.

Gain clamping:

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 20.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%2020.webp)[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=74&rect=210,167,640,483| ]]

The small-signal gain $\gamma_0$ increases with pump power. The actual gain $\gamma$ clamps at the threshold value (gain = losses) once lasing starts. At saturation intensity $I=I_{sat}$, the gain is reduced to $\gamma_0/2$.

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 21.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%2021.webp)[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=75&rect=294,152,803,457| ]]
Figure shows gain $g = \gamma L_g$.

---
## 8.6 Initial Laser Dynamics
[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=76&selection=0,0,0,22| ]]

Initially, when pumping starts, the photon flux in the cavity is negligible (originating from spontaneous emission). The population inversion $N_{\text{inv}}$ builds up towards its small-signal value $N_0$. Eventually, by chance, a spontaneously emitted photon will be emitted into a cavity mode that has net gain ($2\gamma_0 L_g > l$). This photon initiates stimulated emission. As the photon flux builds up through many round trips of amplification, it starts to deplete the population inversion (gain saturation). The gain is reduced until it exactly balances the losses. The photon flux then asymptotically reaches its steady-state value.

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 22.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%2022.webp)[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=76&rect=47,127,376,437| ]]

Initially, there is primarily incoherent spontaneous emission. As lasing threshold is reached and surpassed, coherent stimulated emission into one or a few cavity modes dominates. The total spontaneous emission into all $4\pi$ steradians may still occur, but the output beam consists mainly of coherent light.

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 23.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%2023.webp)[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=77&rect=210,162,637,459| ]]

Above threshold, pumping harder primarily increases the flux of coherent photons, while the population inversion (and thus gain) remains clamped at the threshold value $N_{\text{th}}$.

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 24.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%2024.webp)[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=78&rect=50,208,548,432| ]]

To optimise the laser output power $P_{out} \sim \phi_{out}$, consider one mirror perfectly reflecting and the other having a power transmittance $\mathcal{T}$ (output coupler). The output photon flux $\phi_{out}$ is related to the intracavity flux $\phi_{intra}$ by $\phi_{out} = \phi_{intra} \mathcal{T} / (\text{round trip factor})$. It can be shown that an optimal transmittance $\mathcal{T}_{opt}$ exists that maximises output power for given laser parameters.

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 25.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%2025.webp)[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=82&rect=145,204,667,447| ]]

Another useful form for the threshold inversion density is:
$$
N_{\text{th}}=\frac{l / (2L_g)}{\sigma_{em}(\nu)} = \frac{\text{Loss per unit length}}{\sigma_{em}(\nu)} = \frac{8 \pi n^2 t_{sp} (\text{Loss per unit length})}{\lambda_0^2 g(\nu)},
$$
This shows that it is more difficult to reach threshold (higher $N_{th}$) for shorter wavelengths (due to $\lambda_0^2$ in denominator) and for frequencies away from the peak of the gain lineshape $g(\nu)$. This is one reason why building, for instance, ultraviolet or X-ray lasers is challenging.

---
## 8.7 Mode Selection
[[Notes/2025 Quantum Electronics/QE_script.pdf#page=156&selection=14,0,16,34| ]] [[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=85&selection=0,32,0,32| ]] [[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=94&selection=0,0,0,27| ]]

So far, we have assumed that the energy emitted by an atomic transition is quantised, ideally leading to emitted light at a single frequency $\nu_0=(E_2-E_1)/h$. However, we have also seen that in reality, broadening effects give the gain spectrum a finite width $g(\nu)$. Additionally, an optical cavity supports a discrete set of resonant modes (longitudinal and transverse). Longitudinal modes are narrowly peaked in frequency, spaced by the Free Spectral Range (FSR). These cavity resonances are typically much narrower than the gain bandwidth $g(\nu)$.
Lasing will occur preferentially for those cavity modes that fall within the gain bandwidth $g(\nu)$ and for which the gain exceeds the losses. The cavity modes gain energy over many round trips through amplification by stimulated emission. In a multi-mode laser, several longitudinal modes may lase simultaneously. In many single-mode lasers, the cavity mode closest to the peak of the gain lineshape will experience the highest net gain and will dominate over other modes. As it builds up intensity, it saturates the gain medium, potentially suppressing other modes below their threshold.

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/QE_script 6.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/QE_script%206.webp)[[Notes/2025 Quantum Electronics/QE_script.pdf#page=157&rect=118,199,483,384| ]]

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 26.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%2026.webp)[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=91&rect=51,96,802,441| ]]

For some applications, single-longitudinal-mode operation is required. This can be achieved by introducing spectrally selective loss elements into the cavity (such as etalons or birefringent filters) to ensure only one desired mode remains above threshold. The following figures show some methods for longitudinal mode selection:

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 27.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%2027.webp)[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=94&rect=324,213,793,386| ]]
![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 28.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%2028.webp)[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=95&rect=156,93,730,397| ]]

Selection of a single transverse mode (typically the fundamental $TEM_{00}$ Gaussian mode) is also crucial for good beam quality. Transverse modes depend on the resonator geometry and can experience different diffraction losses, for instance, due to finite mirror sizes or intracavity apertures. By carefully designing the resonator and potentially including an aperture, higher-order transverse modes (which are typically larger in spatial extent) can be made to experience higher losses, thus ensuring fundamental mode operation.

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 30.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%2030.webp)[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=99&rect=104,320,606,429| ]]

Mode selection also depends on the type of pumping scheme and how well the pumped volume in the gain medium overlaps with the desired lasing mode volume:

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 29.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%2029.webp)[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=98&rect=115,118,808,469| ]]

---
## 8.8 Hole Burning

There are two main types of hole burning relevant to lasers:

- **Spatial hole burning:** This occurs in linear laser resonators where a standing wave intensity pattern is formed by the counter-propagating waves. Gain saturation is strongest at the antinodes of this standing wave and weakest at the nodes. This means that near the standing wave minima, the gain is not effectively saturated by the lasing mode. Consequently, other longitudinal modes, whose standing wave patterns might have antinodes where the primary mode has nodes, can reach threshold and lase. This leads to multi-mode operation. Ring laser cavities, where light propagates in one direction, avoid the formation of strong standing waves and thus mitigate spatial hole burning.
- **Spectral hole burning:** This occurs predominantly in inhomogeneously broadened gain media. When a particular longitudinal mode starts lasing at frequency $\nu_L$, it primarily interacts with and saturates only those atoms (or molecules) whose individual resonance frequencies are close to $\nu_L$. Once these atoms are saturated, they no longer contribute significantly to the gain at $\nu_L$. This effectively "burns a hole" in the gain spectrum at that frequency, reducing the gain for that specific mode. Other modes at different frequencies, interacting with different sub-ensembles of atoms, might still be above threshold.

---
## 8.9 Pulsed Lasers - Overview
[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=102&selection=0,0,0,30| ]] [[Notes/2025 Quantum Electronics/QE_script.pdf#page=180&selection=4,0,6,23| ]]

Previously, the discussion largely focused on continuous wave (CW) and single-mode lasers, which (ideally) have a constant intensity output as a function of time. Very often, however, pulsed laser operation is desired, as pulsed lasers are crucial for a wide range of applications. The average power of a laser is typically limited by thermal effects in the gain medium and pump source capabilities. A laser emitting short pulses essentially concentrates its energy into very brief intervals of light, which in turn leads to very high _peak_ power and _peak_ intensity, even if the _average_ power is moderate. High peak power enables various nonlinear optical applications important for industrial processes and scientific research. Furthermore, short pulses allow for high time-resolution in measurements of dynamical processes, such as molecular vibrations or even electronic wavepacket motion. These measurements and techniques form the core of [[Notes/Ultrafast Laser Physics/Ultrafast Laser Physics\|Ultrafast Laser Physics]]. The following is an overview of common methods to produce laser pulses.
- **Gain Switching:** This is perhaps the simplest technique to produce pulses of light. The pump source is rapidly turned on and off, effectively switching the gain above and below the threshold. The duration of the pulses achievable with this method is limited by several timescales, including the initial build-up time of photons in the cavity and the decay time after the gain is switched off, both of which depend on the gain medium and cavity properties. The speed of switching the pump (and thus the gain) also limits the pulse duration. This method is typically suitable for generating relatively long pulses, with durations of several microseconds or longer.
    ![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals-2.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals-2.webp)[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=102&rect=53,107,723,447| ]]
- **Q-Switching:** This method involves modulating the quality factor (Q-factor) of the laser cavity, which is inversely related to the cavity losses. Lasing requires gain to exceed losses. The idea is to initially keep the cavity losses very high (low Q), suppressing lasing, which allows the pump to build up a very large population inversion in the gain medium, far above the normal threshold level. At a chosen moment, the losses are suddenly reduced (Q is switched to a high value). With the gain now significantly exceeding the (lowered) losses, stimulated emission rapidly depopulates the inversion, releasing the stored energy as a short, intense pulse of light. This Q-switching can be achieved using active modulators (such as electro-optic or acousto-optic switches) or passive saturable absorbers. Compared to gain switching, the population inversion is already established at a high level before the pulse emits, allowing for shorter pulse durations and much higher peak powers. It is the method of choice for achieving pulses with large pulse energy (millijoules to joules). The duration is typically limited to nanoseconds.
    ![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 2-1.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%202-1.webp)[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=103&rect=139,90,638,485| ]]
    ![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 3-1.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%203-1.webp)[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=104&rect=488,246,824,455| ]]
- **Mode-locking (active/passive):** This technique allows the generation of the shortest pulses directly from a laser cavity, routinely reaching picosecond and femtosecond durations. It involves forcing many longitudinal modes of the laser cavity to oscillate with a fixed phase relationship ("phase-locking"). The coherent superposition of these phase-locked modes results in constructive interference at specific points in time, forming a train of ultrashort pulses. The individual pulse duration is inversely proportional to the total locked spectral bandwidth (the range of frequencies of the phase-locked modes). The temporal spacing between pulses in the train is given by the cavity round-trip time $T_R = 2nL/c$ for a linear cavity of length $L$. The discussion of this topic goes well beyond this introductory course and is treated in extensive detail in [[Notes/Ultrafast Laser Physics/Ultrafast Laser Physics\|Ultrafast Laser Physics]].
    ![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 5-1.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%205-1.webp)[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=106&rect=107,113,695,465| ]]
    Mode-locking can be achieved in two main ways:
    -   **Active mode-locking:** An intracavity device (such as an acousto-optic or electro-optic modulator) actively modulates the resonator losses (or gain) at a frequency equal to the FSR ($1/T_R$). This creates short "windows" of net gain once per round trip, forcing the lasing modes to acquire specific phases that lead to pulsed operation.
    -   **Passive mode-locking:** This relies on nonlinear optical elements within the laser cavity whose properties change with light intensity. A common example is a saturable absorber, which has lower loss for higher intensity. An initial intensity fluctuation (pulse) experiences less loss than CW light, is amplified, and can grow to saturate the gain, eventually forming a stable ultrashort pulse circulating in the cavity. Kerr-lens mode-locking (KLM), which exploits the self-focusing effect in a Kerr medium, and semiconductor saturable absorber mirrors (SESAMs) are widely used passive mode-locking techniques.

---
## 8.10 Examples of Lasers
[[Notes/2025 Quantum Electronics/QE_script.pdf#page=181&selection=41,0,43,18| ]] [[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=110&selection=0,14,0,14| ]]

There are many types of lasers, with the ruby and Nd:glass lasers having already been mentioned. The following figures and table show some more common types of lasers and some of their typical parameters:

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 8-1.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%208-1.webp)[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=110&rect=158,176,662,460| ]]

| Laser                   | Type            | Wavelength(s)                                            | Operation Mode                        | Output Power                  |
| :---------------------- | :-------------- | :------------------------------------------------------- | :------------------------------------ | :---------------------------- |
| ArF, KrF, XeCl, XeF     | Gas (Excimer)   | $193\text{nm}, 248\text{nm}, 308\text{nm}, 353\text{nm}$ | Pulsed (ns)                           | $\sim 10\text{W}$ (avg)       |
| Nitrogen ($N_2$)        | Gas             | $337\text{nm}$                                           | Pulsed (ns)                           | $\sim 100\text{mW}$ (avg)     |
| Dye                     | Liquid          | $400-1000\text{nm}$ (tunable)                            | CW, Pulsed (ps-fs)                    | $\sim 1\text{W}$              |
| GaN (diode)             | Semiconductor   | $\sim 405\text{nm}, \sim 450\text{nm}$                   | CW, Pulsed                            | $\sim 50\text{mW}- \text{W}$s |
| Argon-ion               | Gas (Ion)       | $488\text{nm}, 514.5\text{nm}$                           | CW                                    | $\sim 1-20\text{W}$           |
| HeNe                    | Gas             | $632.8\text{nm}$                                         | CW                                    | $\sim 1-50\text{mW}$          |
| AlGaInP, AlGaAs (diode) | Semiconductor   | $630-980\text{nm}$                                       | CW, Pulsed                            | mW - tens of W                |
| Ti:sapphire             | Solid-state     | $650-1100\text{nm}$ (tunable)                            | CW, Pulsed (fs-ps)                    | $\sim 1-20\text{W}$           |
| Yb:YAG                  | Solid-state     | $1030\text{nm}$                                          | CW, Pulsed (ps-fs)                    | W - kW                        |
| Yb-doped glass fibre    | Fibre           | $\sim 1030-1080\text{nm}$                                | CW, Pulsed (fs-ns)                    | W - multi-kW                  |
| Nd:YAG                  | Solid-state     | $1064\text{nm}$ (also $946, 1320\text{nm}$)              | CW, Pulsed (ns-ps)                    | W - multi-kW                  |
| Nd:glass                | Solid-state     | $\sim 1053-1064\text{nm}$                                | Pulsed (ns-ps)                        | High Energy (kJ-MJ)           |
| InGaAs(P) (diode)       | Semiconductor   | $900-2000\text{nm}$                                      | CW, Pulsed                            | mW - W                        |
| Er-doped glass fibre    | Fibre           | $1530-1560\text{nm}$                                     | CW, Pulsed                            | mW - tens of W                |
| Tm:YAG, Ho:YAG          | Solid-state     | $\sim 1900-2100\text{nm}$                                | Pulsed ($\mu\text{s}, \text{ns}$), CW | W - tens of W                 |
| $\text{Cr:ZnSe/ZnS}$    | Solid-state     | $2000-3000\text{nm}$ (tunable)                           | CW, Pulsed (fs-ps)                    | $\sim 1-10\text{W}$           |
| $\text{CO}_2$           | Gas (Molecular) | $9.4\mu\text{m}, 10.6\mu\text{m}$                        | CW, Pulsed ($\mu\text{s}$)            | W - multi-kW                  |

The following figure shows some laser gain bandwidths for common solid-state laser materials:

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 9-1.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%209-1.webp)[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=114&rect=95,137,772,455| ]]

Note that Ti:Al$_2$O$_3$ is the famous Titanium-doped sapphire (Ti:sapphire) laser crystal. Its extremely broad emission bandwidth is due to the strong coupling of the active Ti$^{3+}$ ion's d-orbitals to the crystal lattice vibrations (vibronic broadening). This broad bandwidth supports wide frequency tuning as a continuous-wave laser or the generation of ultrashort (femtosecond) pulses when mode-locked. It operates as a four-level (or quasi-three-level at the short wavelength end) laser system:

![Attachments/Notes/2025 Quantum Electronics/8 Laser Fundamentals/04_Laser_fundamentals 10-1.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/8%20Laser%20Fundamentals/04_Laser_fundamentals%2010-1.webp)[[Notes/2025 Quantum Electronics/04_Laser_fundamentals.pdf#page=115&rect=38,103,344,435| ]]

---