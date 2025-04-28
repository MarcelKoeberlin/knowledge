---
{"dg-publish":true,"permalink":"/courses/2025-quantum-electronics-gallmann/8-laser-fundamentals/","hide":"true","updated":"2025-04-28T19:00:34.074+02:00"}
---

CJump back to ==[[Courses/2025 Quantum Electronics Gallmann/Quantum Electronics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Courses/2025 Quantum Electronics Gallmann/8 Laser Fundamentals#8.1 Fundamental Light-Matter Interaction\|8.1 Fundamental Light-Matter Interaction]]
- [[Courses/2025 Quantum Electronics Gallmann/8 Laser Fundamentals#8.2 Einstein Coefficients and Rate Equation\|8.2 Einstein Coefficients and Rate Equation]]
- [[Courses/2025 Quantum Electronics Gallmann/8 Laser Fundamentals#8.3 Lasers\|8.3 Lasers]]
- [[Courses/2025 Quantum Electronics Gallmann/8 Laser Fundamentals#8.4 Laser Rate Equations\|8.4 Laser Rate Equations]]
- [[Courses/2025 Quantum Electronics Gallmann/8 Laser Fundamentals#8.5 Experimental Parameters of Lasers\|8.5 Experimental Parameters of Lasers]]
- [[Courses/2025 Quantum Electronics Gallmann/8 Laser Fundamentals#8.6 Initial Laser Dynamics\|8.6 Initial Laser Dynamics]]
- [[Courses/2025 Quantum Electronics Gallmann/8 Laser Fundamentals#8.7 Mode Selection\|8.7 Mode Selection]]
- [[Courses/2025 Quantum Electronics Gallmann/8 Laser Fundamentals#8.8 Hole Burning\|8.8 Hole Burning]]

---
# 8 Laser Fundamentals 
[[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=144&selection=1,0,1,18|•]] [[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=2&selection=0,0,0,29|•]]

In this chapter, the fundamental principles of the underlying physics of a laser are discussed. However, before delving into the physics, let us understand what 'Laser' stands for:
$$
\text{Laser} \equiv \text{Light Amplification by Stimulated Emission of Radiation}
$$
Later on, we will understand why each word in this acronym plays a crucial work for these devices to work. A laser requires at the very basic level an amplifying medium (called _gain medium_), a feedback mechanism, and an energy source (called _pump_). For now, we will just take the word Laser as an optical resonator system capable of emitting coherent light. We will discuss this in more detail [[Courses/2025 Quantum Electronics Gallmann/8 Laser Fundamentals#Lasers\|here]]. The following figure sketches the minimum requirements that a laser needs to have as already mentioned:

![Attachments/Courses/2025 Quantum Electronics Gallmann/8 Laser Fundamentals/04_Laser_fundamentals.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/8%20Laser%20Fundamentals/04_Laser_fundamentals.webp)[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=3&rect=302,93,794,301|•]]

In the following section, we will first introduce Einstein coefficients and deduce from this the requirements for the gain medium.

---
## 8.1 Fundamental Light-Matter Interaction
[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=6&selection=0,37,0,37|•]] [[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=149&selection=6,0,8,46|•]]

This chapter aims to give a brief overview of light-matter / photon-atom interactions that are relevant to understand lasers. A full treatment of this topic requires a QED treatment, which goes much beyond this course. First, let us consider a quantum-mechanical material, that is a material with quantised energy levels. To keep it simple, imagine that there are only two states, the ground state $|1\rangle$ and the excited state $|2\rangle.$ Both these states have energy $E_1$, respectively $E_2,$ where by definition $E_1<E_2.$ We will focus on interactions of photons with energy $hf=E_2-E_1.$ Further, we will only consider the transition $|1\rangle\rightarrow|2\rangle$ to be dipole allowed. Consider the following three interactions:

![Attachments/Courses/2025 Quantum Electronics Gallmann/8 Laser Fundamentals/QE_script 5.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/8%20Laser%20Fundamentals/QE_script%205.webp)[[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=150&rect=105,365,498,687|•]]

In the following, we will assume that all these processes are instantaneous:

- a) Spontaneous emission: This process is independent on the presence of other photons. An excited electron may jump down to the ground state, thus releasing a photon with energy $hf$. The probability of this process is $P^\text{sp}_{21}$.
- b) Absorption: An incoming photon of energy $hf$ is absorbed by an electron in the ground state, such that it is now in an excited state. The probability of this process is $P^\text{abs}_{12}\sim n$, since we will assume these processes to be independent. The number of incoming photon is denoted $n$.
- c) Stimulated emission: An incoming photon with energy $hf$ interacts with an electron in the excited state. The result is the emission of another photon with energy $hf$, such that there are two **identical/indistinguishable** photons. This property is critical: The created photon has exactly the same properties as the incoming photon - frequency, phase, direction, and polarisation are identical. As is the case for absorption, the probability of stimulated emission is denoted $P^\text{stim}_{21}\sim n,$ and is assumed to be proportional to the number of incoming photons.

From these points it should be clear that the probabilities for absorption and stimulated emission are **not** constant, but dependent on $n,$ the number of incoming photons with the right energy $hf.$ 

---
## 8.2 Einstein Coefficients and Rate Equation
[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=12&selection=0,38,0,38|•]] [[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=151&selection=4,0,9,31|•]]

Keeping the notation from above, $P_{21}^{\text{spon}}$ is the probability for spontaneous emission from level 2 to 1 to occur. The differential probability $dP_{21}^{\text{spon}}$ depends on factors such as photon frequency, polarisation, and cavity modes. We can then define the total **rate** of spontaneous emission for **one** as
$$
A_{21}=\sum_j \frac{d P_{21, j}^{\mathrm{spon}}}{d t}=\frac{1}{t_{s p}},
$$
where $t_{sp}$ is the so-called 'lifetime'. The sum runs over all resonator modes, so longitudinal and transversal modes for all polarisation states. The lifetime is atom and transition-specific but does not depend on the electromagnetic modes. Typical values are $t_{sp}=10^{-8}$ s for atomic transitions. The lifetime can also be understood as the time when the probability to be in state 2 has decayed to $1/e:$

![Attachments/04_Laser_fundamentals.webp|700](/img/user/Attachments/04_Laser_fundamentals.webp) [[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=13&rect=183,148,660,467|•]]

Similarly, we can define an absorption **rate** for one atom, which assumes that all modes are resonant with the transition $\hbar\omega_0=\Delta E.$

$$
\begin{aligned}
W_{12} & =\sum_j \frac{d P_{12, j}^{\mathrm{abs}}}{d t} 
\equiv B_{12} \rho\left(\omega_0\right),
\end{aligned}
$$
where $B_{12}$ is a constant define by this relation. As usual, $\rho (\omega)$ is the energy density of the electromagnetic field. Last, we define the stimulation emission **rate** for one atom:
$$
W_{21}=\sum_j \frac{d P_{21, j}^{\mathrm{stim}}}{d t}=B_{21} \rho\left(\omega_0\right).
$$
Therefore, we have that $A_{21},$ $B_{12}$ and $B_{21}$ are properties of the atomic transition, but they are independent of the electromagnetic field inside the cavity. The question now is whether they are independent of each other as well? The answer is no, and the answer was given by Albert Einstein in 1917:

The trick is to consider a collection of two-level atoms inside an optical cavity, and that both atoms and the electromagnetic field inside the cavity are in mutual thermal equilibrium. Therefore, the relative probability of having atoms in state $|1\rangle$ and state $|2\rangle$ is determined by the Boltzmann distribution: The probability of being in a state with energy $\varepsilon$ is simply given by
$$
P\sim e^{-\varepsilon/k_BT}.
$$
Thus, the ratio between the state population densities is given by
$$
\frac{N_2}{N_1}=\frac{P_2}{P_1}=e^{-\left(E_2-E_1\right) / k_B T}=e^{-\hbar \omega_0 / k_B T}.
$$
The rate of change of $N_2$ is the sum of all transition rates for each process that leads to a change of the atom state. Therefore, we have
$$
\begin{aligned}
\begin{gathered}
\frac{d N_2}{d t}&=\left(\frac{d N_2}{d t}\right)_{a b s}+\left(\frac{d N_2}{d t}\right)_{s p o n}+\left(\frac{d N_2}{d t}\right)_{s t i m}
\end{gathered}
\end{aligned}
$$
where
$$
\begin{aligned}
\begin{gathered}
\left(\frac{d N_2}{d t}\right)_{a b s}&=&W_{12} N_1=B_{12} \rho\left(f_0\right) N_1, \\
\left(\frac{d N_2}{d t}\right)_{s p o n}&=&-A_{21} N_2, \\
\left(\frac{d N_2}{d t}\right)_{\text {stim }}&=&-W_{21} N_2=-B_{21} \rho\left(f_0\right) N_2.
\end{gathered}
\end{aligned}
$$
It is worth considering each individually first. The first term, considering the rate of absorption, depends on the availability of atoms in the ground state, hence on $N_1.$ The second term, which considers the spontaneous emission rate depends on atoms in the excited state, and is further negative since emission reduces population. The last term, taking care of the stimulated emission rate, is negative because it is again an emission process. Therefore, we obtain
$$
\frac{d N_2}{d t}=-A_{21} N_2+\left(B_{12} N_1-B_{21} N_2\right) \rho\left(\omega_0\right)=0,
$$
where we set the change in population to zero since we are considering thermal equilibrium. The result is then 
$$
\rho\left(\omega\right)=\frac{A_{21} N_2}{B_{12} N_1-B_{21} N_2}=\frac{A_{21}}{B_{12}} \cdot \frac{1}{e^{\hbar \omega/ k_B T}-B_{21} / B_{12}}.
$$
Let us independently consider the Planck distribution function. It treats photons as bosons (quantum particles with integer spins) in thermal equilibrium:
$$
\rho(f)=\frac{8 \pi h f^3}{c^3} \cdot \frac{1}{e^{h f/ k_B T}-1}.
$$
This allows a direct comparison between the two results, such that we obtain
$$
\frac{A_{21}}{B_{21}}=\frac{8 \pi h f^3}{c^3}=\frac{8 \pi h}{\lambda^3}\quad\text{and}\quad B_{21}=B_{12}.
$$
Thus, we simplify the notation to $A=A_{21}$ and $B=B_{12}=B_{21}.$ The Einstein relation is then
$$
B=\frac{\lambda^3}{8 \pi h} A=\frac{\lambda^3}{8 \pi h t_{s p}}.
$$
This allows relating both probabilities for absorption and stimulated emission to the probability for spontaneous emission. The derivation also shows that there is a symmetry between stimulated emission and absorption. We can see that stimulated emission is crucial to make the thermal equilibrium condition agree with Planck's radiation law and without it, the derivation of Planck’s law would not close. Another point worth mentioning is that the derivation assumed thermal equilibrium between atoms and photons, however **these relations are universal!** Further, $A$ and $B$ depend on the type of atom and transition, but also on the geometry of the resonator. However, this last point only becomes relevant once the resonator dimensions become comparable to the wavelength of the transition. 

### 8.2.1 Transition Width

Consider the energy difference between two states to be $\omega_0=(E_2-E_1)/\hbar.$ We expect the real transition to be a infinitely narrow peak at that frequency. However, this is not what happens in a realistic, non-ideal system:

![Attachments/04_Laser_fundamentals 1.webp|700](/img/user/Attachments/04_Laser_fundamentals%201.webp) [[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=23&rect=378,107,680,485|•]]

Therefore we can see, a real transition has a finite width in energy. Importantly, this is even the case with an ideal spectrometer with arbitrarily high spectral resolution. There are many effects that contribute to the broadening of the emitted spectrum. 

### 8.2.2 Homogeneous vs Inhomogeneous Broadening

In the case of homogeneous broadening, the broadening of emissions from individual (same) atoms is considered:

![Attachments/04_Laser_fundamentals 2.webp|700](/img/user/Attachments/04_Laser_fundamentals%202.webp) [[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=24&rect=25,352,384,488|•]]

Two examples are lifetime broadening, assuming the atoms are all the same. Another is collision broadening. The transition energy is the same for all atoms. On the other hand, inhomogeneous broadening considers the emission from the ensemble of many atoms. 

![Attachments/04_Laser_fundamentals 3.webp|700](/img/user/Attachments/04_Laser_fundamentals%203.webp) [[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=24&rect=21,161,371,295|•]]

This is for example in Doppler broadening. Inhomogeneous broadening occurs when atoms experience slightly different local environments or conditions, leading to a distribution of transition energies within the ensemble. Then, the transition energy varies slightly from atom to atom within the ensemble. 

Let us consider lifetime broadening again. The intensity of light emitted by an ensemble of initially excited atoms through spontaneous emission behaves as
$$
I(t) \sim \begin{cases}0 & t \leq 0 \\ e^{-t / t_{s p}} & t>0\end{cases},
$$
whereas the electric field behaves as
$$
E(t) \sim \begin{cases}0 & t \leq 0 \\ e^{-t / 2 t_{s p}} e^{i 2 \pi f_0 t} & t>0.\end{cases}
$$
Fourier transforming this result leads to the intensity spectrum 
$$
I(f) \sim \frac{1}{\left(f-f_0\right)^2+(\Delta f / 2)^2},
$$
	with $\Delta f=\frac{1}{2\pi t_{sp}}$ the lifetime-broadening linewidth. x

![Attachments/04_Laser_fundamentals 5.webp|700](/img/user/Attachments/04_Laser_fundamentals%205.webp) [[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=26&rect=245,81,589,252|•]]

This corresponds to an ensemble of atoms where each atoms emits light at random times. The power spectral density of randomly emitted light is of Lorentzian shape. Therefore, there is a lineshape function associated:
$$
g(f)=\frac{\Delta f / 2 \pi}{\left(f-f_0\right)^2+(\Delta f / 2)^2}.
$$
The general properties of the lineshape function are 
- $I(f)\sim g(f)$,
- $\int^\infty_{-\infty}g(f)df=1.$

Generally, homogeneous broadening processes result in Lorentzian lineshapes. 

### 8.2.3 Absorption Cross-Section

We consider the cross-section $\sigma$ of an atom, so how many photons are 'intercepted' by the atom in a time $dt.$ We obtain
$$
d n_{\mathrm{abs}}=(\sigma c \cdot d t) \cdot \frac{n_j}{V_j},
$$
where $n_j$ is the number of photons in mode $j,$ while $V_j$ is the volume of said mode. Then, we have
$$
\frac{d P_{12, j}^{\mathrm{abs}}}{d t}=\frac{d n_{\mathrm{abs}}}{d t}=\sigma\left(f_j\right) \cdot c \frac{n_j}{V_j}=\phi_j \sigma\left(f_j\right),
$$
where $\sigma(f_j)$ is the absorption cross-section. Here, $\phi_j$ is the photon flux, e.g. photons per area per time. We then find that
$$
\sigma(f)=\frac{\lambda_0^2}{8 \pi t_{s p}} g(f),
$$
and it is the same for emission. 

---
## 8.3 Lasers
[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=38&selection=0,0,0,30|•]] [[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=153&selection=23,0,25,14|•]] 

Let us return now to obtaining a functioning laser. For simplicity, we will only consider a laser cavity, designed to amplify only a small number of modes:

![Attachments/Courses/2025 Quantum Electronics Gallmann/8 Laser Fundamentals/04_Laser_fundamentals.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/8%20Laser%20Fundamentals/04_Laser_fundamentals.webp)[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=3&rect=302,93,794,301|•]]

### 8.3.1 Population Inversion, Lasing Conditions and Gain

The ultimate goal of a laser is increasing the photon number $\bar n$ within the cavity. In a two-level system, the photon number is given by photons generated by spontaneous and stimulated emission, and those left by absorption. We obtain a rate equation
$$
\begin{align}
\frac{d \bar{n}}{d t}&=N_2 A_{21}+\rho(f)\left[N_2 B_{21}-N_1 B_{12}\right].
\end{align}
$$
Lasing requires a net amplification of light by stimulated emission in the thermodynamic equilibrium. The laser then operates with occupation numbers given by the Boltzmann distribution:

$$
\frac{d \bar{n}}{d t}=N_2 A_{21}+\rho(f) B_{21}\left[1-e^{\frac{h f}{k_B^T}}\right].
$$

The second term is always negative, and therefore will be absorbing and stimulated emission will always be weaker than absorption. Therefore, no net amplification is possible. 

Obviously, we also want the number of photons to increase, hence
$$
\frac{d\bar n}{dt}>0.
$$
This translates to population inversion
$$
N=N_2-N_1>0,
$$
such that the number of electrons in the excited state should be larger than the number of electrons in the ground state. Population inversion is in strong contrast to Boltzmann statistics, due to the probability of an excited state being occupied being larger than that of the ground state. Inversion of the electron populations thus requires us to operate the gain medium far from thermal equilibrium. This is achieved by externally providing energy to the atoms. This process is called **pumping**, and is done either optically or electrically. Optical pumping is really just done by illuminating the lasing medium with a suitable light source, such as another laser or even just a simple flash lamp. One must make sure the light source contains photons with energies matching the gain medium's transition, so that they can be absorbed efficiently. In the case of electrical pumping, a voltage is applied to the material to provide the atoms with the energy needed. 

Another requirement is that the laser requires a **feedback**. Coherent emission from a laser medium needs to make sure that the spontaneous emission rate is much smaller than the stimulated emission rate. That is, we require $A_{21}\ll W_{21}$ in the photon rate equation. This is achieved by placing two mirrors around the gain medium to make photons pass the medium multiple times. This greatly increases $\rho(f)$ and therefore boosts the stimulated emission rate. 

The notion of **gain** can be simply stated that the photon flux $\phi$ is related to the gain coefficient $\gamma(f)$ by 
$$
\frac{d \phi}{d z}=\gamma(\nu) \phi.
$$
In words, the gain coefficient refers to the growth of photon flux or intensity. It captures to which extent the light energy density within the cavity increases due to the feedback system and amplification of stimulated emission. The form of the gain coefficient is simply $\gamma(f)=N\sigma(f).$ The total gain is then simply given by
$$
G(f)=e^{\gamma(f)d},
$$
with $d$ being the length of the gain medium. It depends strongly on the amount of population inversion $N.$ 

Thus, schematically a laser can be depicted as follows:

![Attachments/QE_script 5.webp|700](/img/user/Attachments/QE_script%205.webp)[[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=156&rect=73,476,304,616|•]]

The feedback F additionally provides the narrow spectral filtering. 

### 8.3.2 Achieving Population Inversion

We will consider the following notations:

![Attachments/04_Laser_fundamentals 7.webp|700](/img/user/Attachments/04_Laser_fundamentals%207.webp)[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=41&rect=19,98,817,489|•]]

As mentioned, the shown two-levels are not from an ideal system with only two levels available, but two specific levels in a multiple-level system. One can show that ==population inversion is not possible in a two-level system.== This is a very important result, and holds even in an ideal two-level system. By increasing the pumping rate $R_2\rightarrow\infty,$ there is an equilibrium between absorption and emission such that population inversion is not possible. This can be intuitively understood as follows: By increasing the pumping rate, it will be more and more favourable for electrons to be in the excited state. However, we must not forget that an increasing pumping rate increases both the absorption rate, and the stimulated emission rate. Thus, when the ground state population approaches the excited state population, these two rates also approach each other. The chance then becomes equal for an electron to absorb a photon, or for another excited electron to emit a photon by stimulated emission. 

A simpler, standard argument clearly shows why population inversion is impossible in a *pure* two-level system, where pumping occurs directly from level 1 to level 2, and emission occurs from level 2 back to level 1 using the same transition. In steady-state, the total rate of atoms transitioning upwards must equal the total rate of atoms transitioning downwards. The upward rate is driven by absorption (pump): $W_{12} N_1$. The downward rates are spontaneous emission, $A_{21} N_2$, and stimulated emission, $W_{21} N_2$. The steady-state rate balance equation is therefore: 
$$ W_{12} N_1 = A_{21} N_2 + W_{21} N_2 $$
Here, $W_{12}$ and $W_{21}$ are the absorption and stimulated emission rates per atom, respectively, induced by the resonant light field. $A_{21}$ is the spontaneous emission rate. Since both absorption and stimulated emission are driven by the same resonant light field (intensity $\rho$), the rates per atom are equal: $W_{12} = W_{21}$. Let's denote this common induced rate coefficient as $W_i$. Substituting this into the balance equation gives: 
$$ W_i N_1 = A_{21} N_2 + W_i N_2 $$
Rearranging the terms to isolate the populations: 
$$ W_i N_1 - W_i N_2 = A_{21} N_2 $$

and
$$ W_i (N_1 - N_2) = A_{21} N_2. $$
Since the rates $W_i$ and $A_{21}$, and the population $N_2$ must be non-negative ($W_i \ge 0$, $A_{21} > 0$, $N_2 \ge 0$), the right-hand side ($A_{21} N_2$) is non-negative. Therefore: 
$$ N_1 - N_2 = \frac{A_{21}}{W_i} N_2 \ge 0 $$
This inequality clearly shows that $N_1 \ge N_2$. Population inversion, which requires $N_2 > N_1$, is fundamentally impossible in such a system. Even with extremely strong pumping ($W_i \to \infty$), the ratio $A_{21}/W_i \to 0$, leading to the limiting case where the populations equalise ($N_1 \approx N_2$), but the upper state population never exceeds the lower state population.

The last quantity introduced is the small signal gain, which is the maximum gain at maximum inversion, e.g. in the limit of no photons within the cavity: $\gamma_0(f)=N_0\sigma(f).$ 

### 8.3.3 Three-Level Laser Systems
[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=46&selection=0,0,0,22|•]] [[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=165&selection=4,0,6,18|•]]

We now have all the tools needed to discuss the first realistic laser system. As we have seen, population inversion is unobtainable in the ideal two-level laser system. We will therefore start with a three-level system, before we discuss the four-level system. It turns out that in reality, all optical gain media are described by either a three- or a four-level system. 

The system under consideration generally takes the following layout: 

![Attachments/04_Laser_fundamentals 8.webp|700](/img/user/Attachments/04_Laser_fundamentals%208.webp)[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=46&rect=33,225,403,362|•]]

In this case, the lasing transition is between the ground-state (labelled $|1\rangle$) and the long-lived level (labelled $|2\rangle$). Nothing prevents the rapid decay to be between these two states, and the lasing transition to be between the upper two levels, but the discussion is fairly similar. The highest lying, short-lived level (labelled $|3\rangle$) is actually constituted of several states making up the pumping band. All these states quickly and non-radiatively decay to level $|2\rangle,$ with a time constant $\tau_{32}.$ Given that this time is short enough, and the lifetime of $|2\rangle$ to be long enough, the population of the short-lived level will always be much shorter (read negligible) compared to the long-lived level. Then, the transition from $|3\rangle$ down to $|1\rangle$ is ignored. The full rate equations (writing $\tau_2=\tau_{21}$) are
$$
\begin{aligned}
\frac{d N_3}{d t} & =W_p N_1-W_p N_3-\frac{N_3}{\tau_{32}}=R-\frac{N_3}{\tau_{32}} ,\\
\frac{d N_2}{d t} & =\frac{N_3}{\tau_{32}}-\frac{N_2}{\tau_{21}}-N_2 W_i+N_1 W_i ,\\
\frac{d N_1}{d t} & =-R+\frac{N_2}{\tau_{21}}+N_2 W_i-N_1 W_i,
\end{aligned}
$$

where $W_p$ is the probability of absorbing a pump photon and $R=W(N_1-N_3)$ is the pumping rate, so the number of atoms per unit time that are promoted to the higher level by absorbing a pump photon. We want to solve for $N=N_2-N_1$ under the constraint that the total number of electrons is constant, $N_\text{tot}=N_1+N_2+N_3.$ Solving these equations is tricky, which is why we make some important, but very reasonable assumptions. First, the rapid decay from $|3\rangle$ to $|2\rangle$ implies that the $WN_3$ can be neglected, which is the case if $1\gg W\tau_{32}.$ To solve for the steady-state, all three derivatives are set to zero. The solution is readily found to be
$$
\begin{aligned}
N & =\frac{N_0}{1+\tau_s W_i}, \\
N_0 & =\frac{N_{t o t}\left(\tau_{21} W-1\right)}{1+\tau_{21} W} ,\\
\tau_s & =\frac{2 \tau_{21}}{1+\tau_{21} W}.
\end{aligned}
$$

Note that generally, three-level systems are more difficult to work with, since the ground state population tends to be large, requiring high pump rates to achieve population inversion. Additionally, the large ground state population causes undesirable reabsorption of laser light, where an electron will be excited from the ground state to level $|2\rangle$ by absorption of a photon. 

The first laser used a ruby crystal:

![Attachments/04_Laser_fundamentals 9.webp|700](/img/user/Attachments/04_Laser_fundamentals%209.webp)[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=51&rect=43,111,707,515|•]]

Another common material used in fibre lasers is Erbium-doped Silicium dioxide,  $\mathrm{Er}^{3+}:\mathrm{SiO}_2.$ In such a system, the pumping transition occurs in the Ytterbium, whereas the decay occurs mainly in Erbium:

![Attachments/04_Laser_fundamentals 10.webp|700](/img/user/Attachments/04_Laser_fundamentals%2010.webp)[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=54&rect=84,197,717,454|•]]

Another example is Ytterbium doped YAG, which is used for example also used in some of the most powerful and most efficient solid-state lasers. Therefore, even though they deviate from an ideal system, they are still often used in practical lasers. 

### 8.3.4 Four-Level System
[[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=166&selection=194,0,196,17|•]] [[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=55&selection=0,17,0,17|•]]

As already mentioned, the significant population accumulating in the ground state presents efficiency challenges. Therefore, the four-level system is often used: 

![Attachments/04_Laser_fundamentals 11.webp|700](/img/user/Attachments/04_Laser_fundamentals%2011.webp)[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=55&rect=93,186,655,458|•]]

In comparison to before, the lasing transition is now between two states of which neither are the highest excited, nor the ground state. The rapid decay to $|0\rangle$ generally helps to keep the $|1\rangle$ population low, thus favouring inversion. The four-level system is therefore the ideal configuration to implement a laser. In the case of $E_1>k_BT,$ the $|1\rangle$ has basically no population in thermal equilibrium. Since a rapid decay is assumed for the transition from $|3\rangle$ to $|2\rangle,$ the population $N_3$ is very small and all pumped electrons appear almost immediately in state $|2\rangle$ at the full pumping rate. A similar analysis to before reveals
$$
\begin{aligned}
&N=\frac{N_0}{1+\tau_s W_i},\\
&N_0 \approx \frac{\tau_{21} N_{t o t} W_p}{1+\tau_{21} W_p},\\
&\tau_s \approx \frac{\tau_{21}}{1+\tau_{21} W_p}.
\end{aligned}
$$

Comparing these equation to before, we note that $N>0$ is much easier to achieve for a given $W_p.$ One example of a four-level laser system is Nd:glass (neodymium-doped silicate or phosphate glasses), which are used in high-power applications and for high energy systems. 

![Attachments/04_Laser_fundamentals 12.webp|700](/img/user/Attachments/04_Laser_fundamentals%2012.webp)[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=57&rect=52,117,420,391|•]]

### 8.3.5 Pumping Schemes
[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=62&selection=0,0,0,15|•]] 

There exists a variety of pumping schemes to achieve a given pumping rate. Some examples:

![Attachments/04_Laser_fundamentals 13.webp|700](/img/user/Attachments/04_Laser_fundamentals%2013.webp)[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=62&rect=20,140,578,460|•]]

- (a) Gas laser pumped by direct current (DC) discharge.
- (b) Solid-state laser by flash lamp.
- (c) $\mathrm{Nd}: \mathrm{YVO}_4$ solid-state laser optically pumped by a laser diode array.
- (d) Fibre laser (e.g., erbium-doped silica fibre) with fibre Bragg grating reflectors, pumped with a laser diode.
- (e) Laser diode (forward-biased pn junction) with cleaved surfaces acting as mirrors, pumped by electric-current injection.
- (f) Quantum-well semiconductor laser, pumped electrically.

---
## 8.4 Laser Rate Equations
[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=63&selection=0,0,0,50|•]] 

We will treat the ideal four-level system in some more detail. Since we assume an ideal system, we assume $\tau_3\rightarrow0$ and $\tau_1\rightarrow0,$ such that the lifetimes of the highest excited and ground state are zero:

![Attachments/04_Laser_fundamentals 14.webp|700](/img/user/Attachments/04_Laser_fundamentals%2014.webp)[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=63&rect=127,287,372,461|•]]

We will consider that the cavity only supports a single mode, so we call it a single mode laser. Further, we assume a homogeneously broadened material. Two equations can easily be written down:

$$
\begin{aligned}
&\frac{d n}{d t}=K(n+1) N-\gamma_c n \quad\text{and}\\
&\frac{d N}{d t}=R_p-K n N-\gamma_L N,
\end{aligned}
$$
where $\gamma_c$ and $\gamma_L$ are the cavity photon decay rate and the spontaneous decay rate of level $|2\rangle,$ respectively. Then, we can identify $KN$ as the spontaneous emission rate and $KnN$ as the stimulated emission rate. We can find the stationary solutions by setting both derivatives to zero and obtain 

$$
n_s=\frac{N_s}{\gamma_c / K-N_s} \equiv \frac{N_s}{N_{t h}-N_s},
$$
with 
$$
N_{t h} \equiv \gamma_c / K
$$
the threshold inversion. As the inversion reaches the threshold inversion, the stimulated emission rate compensates for the resonator losses $\gamma_cn=KnN_\text{th}.$ Continuing, the stationary solutions are obtained as 
$$
N_s=\frac{R_p \tau_2}{1+K \tau_2 n_s} \quad\text{and}\quad n_s=\frac{R_p \tau_2-N_s}{K \tau_2 N_s}.
$$
Approaching the threshold inversion will make the photon number grow faster. For small photon numbers $n,$ the inversion increases linearly with pump rate $N_s\approx R_p\tau_2.$ Below the threshold, the stimulated emission rate $Kn_sN_s$ is much smaller than the spontaneous emission rate $\gamma_2N_s.$ This allows defining a threshold pumping rate $R_{p,th}$ and a normalised pumping rate $r$ through 

$$
\begin{aligned}
r & \equiv \frac{R_p}{R_{p, t h}} \implies
\Rightarrow R_{p, t h}  \approx \frac{N_{t h}}{\tau_2}=\frac{\gamma_c}{K \tau_2}.
\end{aligned}
$$
![Attachments/04_Laser_fundamentals 15.webp|700](/img/user/Attachments/04_Laser_fundamentals%2015.webp)

![Attachments/04_Laser_fundamentals 16.webp|700](/img/user/Attachments/04_Laser_fundamentals%2016.webp)[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=66&rect=454,107,785,364|•]]

For high pumping rates well above the threshold, the photon number $n_s$ is large, such that $N_s\approx N_{th}.$ Therefore, the inversion is clamped to the threshold inversion above threshold. Every additionally inverted atom will release its energy through stimulated emission as a coherent photon. In this regime, stimulated emission is orders of magnitude stronger than spontaneous emission. Here, we then find 
$$
n_s\approx\frac{N_{t h}}{\gamma_c \tau_2}(r-1)\quad\text{and}\quad n_s\approx\frac{1}{K N_{t h}}\left(R_p-R_{p, t h}\right).
$$
Therefore, well above the threshold ($r\gg 1$), the photon number is directly proportional to the pump rate. 
![Attachments/04_Laser_fundamentals 17.webp|700](/img/user/Attachments/04_Laser_fundamentals%2017.webp)
![Attachments/04_Laser_fundamentals 18.webp|700](/img/user/Attachments/04_Laser_fundamentals%2018.webp)[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=68&rect=416,94,709,286|•]]

To summarise: 
$$
\begin{aligned}
&\text { Above threshold }r>1\iff \left\{\begin{array}{l}
n_s \approx \frac{N_{t h}}{\gamma_c \tau_2}(r-1)=\frac{\gamma_2}{K}(r-1)\\
N_s \approx N_{t h}=\frac{\gamma_c}{K}
\end{array}\right.& \\
&\text {Below threshold }r<1\iff \left\{\begin{array}{l}
n_s=\frac{r}{1-r} \\
N_s \approx r N_{t h}
\end{array}\right.&
\end{aligned}
$$
The exact solution takes the form 

![Attachments/04_Laser_fundamentals 19.webp|700](/img/user/Attachments/04_Laser_fundamentals%2019.webp)[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=69&rect=236,179,612,465|•]]

Our previous analysis is valid only well below or well above the threshold. 

---
## 8.5 Experimental Parameters of Lasers
[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=70&selection=0,34,0,34|•]] 

In principle, the discussion of lasers could be stopped now since the main quantities have been analysed and derived. However, inversion and photon number are experimental quantities that are hard to access experimentally. Instead, gain, loss and photon flux are better quantities. We already know the gain coefficient 
$$
\gamma(\nu)=N \sigma(\nu)=N \frac{\lambda^2}{8 \pi t_{s p}} g(\nu)
$$
and the small signal gain
$$
\gamma_0(\nu)=N_0 \sigma(\nu)=N_0 \frac{\lambda^2}{8 \pi t_{s p}} g(\nu).
$$
From the first, we see that inversion clamping implies gain clamping above threshold. From the second equation, we $N_0$ is the maximum inversion in the absence of photons. In a lossy resonator without gain, the photon number decays exponentially with the leakage rate $\gamma_c.$ The total resonator losses $l$ consists of unwanted (such as scattering and absorption) and output coupling losses. After one resonator round trip, the intensity reduces as
$$
I_1=I_0 e^{-l}=I_0 e^{-2 \alpha_r L},
$$
where $L$ is the resonator length, passed twice per round trip. We can derive that
$$
\gamma_c=\frac{l}{T_R}.
$$
The total round trip gain is 
$$
G(\nu)=e^{2 \gamma(\nu) L} \quad\text{with}\quad \gamma(\nu)=N \sigma(\nu).
$$
The net gain, which is gain minus losses is then
$$
G_{\mathrm{net}}=e^{2 \gamma L-l}=e^{2 \gamma L-2 \alpha_r L}.
$$
Therefore, in steady-state, gain must be equal to losses:
$$
\gamma = \alpha_r.
$$
Above the threshold ($r>1$), the gain is clamped to the losses via 
$$
\gamma=N_s \sigma=\frac{R_p \tau_2 \sigma}{1+K \tau_2 n_s}.
$$
Then for $n_s\rightarrow0,$ the small signal gain coefficient is 
$$
\gamma_0=N_0\sigma=R_p\tau_2\sigma,
$$
which implies that for increasing photon number, the gain is reduced. We call this _saturation_ and say the gain is saturated. Another way write the gain is 
$$
\gamma=\frac{\gamma_0}{1+I / I_{\mathrm{sat}}}=\frac{\gamma_0}{1+\phi / \phi_{\mathrm{s}}},
$$
where $I_\text{sat}$ and $\phi_\text{sat}$ are the saturation intensity and fluence, respectively. They may be written as 
$$
I_{\mathrm{sat}}=\frac{h \nu}{\sigma \tau_2}\quad\text {and}\quad \phi_\text{sat}=\frac{1}{\sigma \tau_2}.
$$
Both saturation intensity and fluence are material properties, making them specific to the involved lasing transition. 

Gain clamping can be seen as an upper limit in the gain coefficient:

![Attachments/04_Laser_fundamentals 20.webp|700](/img/user/Attachments/04_Laser_fundamentals%2020.webp)[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=74&rect=210,167,640,483|•]]

This clamping occurs at the laser threshold to the threshold condition "gain equals losses". Increasing the pump parameter will make the small signal gain increase linearly. Small signal gain remains a relevant parameter, for example to describe the lasers response to perturbations. At the saturation intensity, the gain is half the small signal gain:

![Attachments/04_Laser_fundamentals 21.webp|700](/img/user/Attachments/04_Laser_fundamentals%2021.webp)[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=75&rect=294,152,803,457|•]]

The figure shows $g=\gamma L_g$ and $g_0=\gamma_0 L_g$ with $L_g$ the length of the gain material. 

## 8.6 Initial Laser Dynamics
[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=76&selection=0,0,0,22|•]]

Initially, laser oscillation starts from an initially negligible small photon flux. Inversion is at its small signal value $N_0.$ Eventually, by chance, a photon from spontaneous emission will be emitted into the cavity mode, such that it sees the full small-signal gain. As photon flux builds up, the population inversion is depleted, and gain is being saturated. The photon flux then asymptotically reaches its steady state value, dictated by the condition that gain must equal losses:

![Attachments/04_Laser_fundamentals 22.webp|700](/img/user/Attachments/04_Laser_fundamentals%2022.webp)[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=76&rect=47,127,376,437|•]]

In other words, there is first incoherent spontaneous emission, followed by coherent emission into a single mode. At the lasing threshold, the incoherent output is clamped to the threshold power. Note that this incoherent emission is radiated in a $4\pi$ angle, instead of a well defined beam. However, well above threshold, this contribution becomes negligible.

![Attachments/04_Laser_fundamentals 23.webp|700](/img/user/Attachments/04_Laser_fundamentals%2023.webp)[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=77&rect=210,162,637,459|•]]

Further, above threshold pumping harder will not generate more gain but just increase the flux of coherent photons. All additional atoms being excited by the pump will decay through stimulated emission such that the population inversion remains constant at $N_\text{th}.$ 

![Attachments/04_Laser_fundamentals 24.webp|700](/img/user/Attachments/04_Laser_fundamentals%2024.webp)[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=78&rect=50,208,548,432|•]]

To optimise the laser output power, we assume that one mirror is perfectly reflecting, while the other is not. We can derive the output photon flux as 
$$
\phi_o=\frac{1}{2} \phi \mathcal{T}=\frac{1}{2} \phi_s \mathcal{T}\left[\frac{g_0}{2 \alpha L-\ln (1-\mathcal{T})}-1\right],
$$
where $\mathcal{T}$ is the power transmission and $\phi$ the intracavity photon flux. Then, there exists an optimal power transmittance $\mathcal{T}$ that maximises the output power for given laser parameters:

![Attachments/04_Laser_fundamentals 25.webp|700](/img/user/Attachments/04_Laser_fundamentals%2025.webp)[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=82&rect=145,204,667,447|•]]

Another useful form to write the laser threshold is 

$$
N_{t h}=\frac{\alpha_r}{\sigma}=\frac{8 \pi t_{s p} \alpha_r}{\lambda^2 g(\nu)},
$$
which implies that is it more difficult to reach the threshold for shorter wavelengths, and also more difficult if moving away from the lineshape maximum, e.g. the transition resonance frequency. That is why it is very difficult to build ultraviolet lasers.

## 8.7 Mode Selection
[[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=156&selection=14,0,16,34|•]] [[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=85&selection=0,32,0,32|•]] [[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=94&selection=0,0,0,27|•]]

Lastly, we want to discuss mode selection and the importance of a resonator. So far, we have assumed that the energy emitted by a transition is quantised, hence the emitted light has a single frequency corresponding to $hf=E_2-E_1.$ We have also seen that in reality, this is not the case since the many effects contribute to a broadening of the emitted spectrum. We depicted the spectral distribution of transition probability as $g(f).$ 
Additionally, we also discussed that a given cavity supports only specific modes. Only frequencies that constructively interfere after each roundtrip survive and emit on a macroscopic level. The cavity resonances are much narrower than the emission spectrum, and can thus be approximated as a sequence of deltas. Cavity modes will start gaining energy over many roundtrips as they can constructively interfere and see amplification by the active medium. In single-mode lasers, the cavity mode closest to the peak of the emission lineshape will dominate over the other modes. With each roundtrip, its energy builds up faster than the other modes. Eventually, this mode completely outruns all others, and the laser is said to operate in the single-mode regime. 

![Attachments/QE_script 6.webp|700](/img/user/Attachments/QE_script%206.webp)[[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=157&rect=118,199,483,384|•]]

![Attachments/04_Laser_fundamentals 26.webp|700](/img/user/Attachments/04_Laser_fundamentals%2026.webp)[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=91&rect=51,96,802,441|•]]

We have seen that the gain medium and the resonator modes may allow for multiple modes to lase simultaneously. For some applications however, single-mode operation is required. This can be achieved by introducing spectral selective loss, to keep undesired modes below threshold. The following figure shows some ways to longitudinally select modes:

![Attachments/04_Laser_fundamentals 27.webp|700](/img/user/Attachments/04_Laser_fundamentals%2027.webp)[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=94&rect=324,213,793,386|•]]
![Attachments/04_Laser_fundamentals 28.webp|700](/img/user/Attachments/04_Laser_fundamentals%2028.webp)[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=95&rect=156,93,730,397|•]]


The same can and should be achieved for the spatial transversal mode. These modes depend on the resonator geometry, the shape of the active media (especially its symmetry properties) and the transverse losses, for example through finite optics sizes. Due to their specific intensity distribution, different transverse modes experience different gain and losses. One simple way is placing an aperture within the cavity, increasing losses for 'bad' (generally less symmetric) modes:

![Attachments/04_Laser_fundamentals 30.webp|700](/img/user/Attachments/04_Laser_fundamentals%2030.webp)[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=99&rect=104,320,606,429|•]]

Mode selection also depends on  the type of pumping:

![Attachments/04_Laser_fundamentals 29.webp|700](/img/user/Attachments/04_Laser_fundamentals%2029.webp)[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=98&rect=115,118,808,469|•]]

---
## 8.8 Hole Burning
[[Courses/2025 Quantum Electronics Gallmann/04_Laser_fundamentals.pdf#page=92&selection=0,0,0,20|•]] 

There are two types of hole burning:

- Spatial hole burning is defined as a distortion of the gain shape in a laser medium that is caused by the saturation effect of a standing wave. Close to a standing wave minima, a mode can't saturate the gain and those spots do not contribute to population inversion. Therefore, other standing waves can be created within the cavity, with their maxima close to the minima of the main wave. However, this is a problem only in linear resonators, such that ring resonators avoid this problem. 
- Spectral hole burning occurs in inhomogeneously broadened gain media. With the homogeneous linewidth being narrower than the overall linewidth, different spectral components of the gain can be saturated independently from each other.

---