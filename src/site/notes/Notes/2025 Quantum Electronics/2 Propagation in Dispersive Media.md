---
{"dg-publish":true,"permalink":"/notes/2025-quantum-electronics/2-propagation-in-dispersive-media/","hide":"true","updated":"2025-06-04T15:34:02.000+02:00"}
---

Jump back to ==[[Notes/2025 Quantum Electronics/Quantum Electronics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[#2.1 Origin of Dispersion|2.1 Origin of Dispersion]]
[[#2.2 Kramers-Kronig Relations|2.2 Kramers-Kronig Relations]]
[[#2.3 Equations in Frequency Domain|2.3 Equations in Frequency Domain]]
[[#2.4 Helmholtz Equation|2.4 Helmholtz Equation]]
[[#2.5 Refractive Index in Dispersive Media|2.5 Refractive Index in Dispersive Media]]
[[#2.6 Light Pulses|2.6 Light Pulses]]
[[#2.7 Time-Bandwidth Product of Wavepackets|2.7 Time-Bandwidth Product of Wavepackets]]
[[#2.8 Phase, Group and Front Velocity|2.8 Phase, Group and Front Velocity]]

---
# 2 Propagation in Dispersive Media
[[Notes/2025 Quantum Electronics/01_Introduction_and_theoretical_foundation.pdf#page=71&selection=0,16,0,16| ]] [[Notes/2025 Quantum Electronics/QE_script.pdf#page=32&selection=1,0,1,31| ]]

Thinking back to [[Notes/2025 Quantum Electronics/1 Electromagnetic Theory of Light#1.4 Macroscopic Approximation\|approximation 4 in Chapter 1]], we assumed that the polarisation and magnetisation depend linearly on the instantaneous values of the electric and magnetic fields. However, as we noted, this is only true for slow changes in the fields with time and cannot be entirely true for rapidly oscillating fields. In other words, we assumed the system (material) to have no [[Notes/Signals and Systems/1 Signals and Systems#1.9.1 Memory\|memory]]. This assumption implies an absence of dispersion, as we will see soon. While it seems obvious that the polarisation and magnetisation cannot depend on _future_ field values ([[Notes/Signals and Systems/1 Signals and Systems#1.9.3 Causality\|causality]]), real materials do possess some limited memory of past fields:
$$
\begin{align}
&\mathbf{P}(\mathbf{r}, t)\quad \text{depends on} \quad\mathbf{E}\left(\mathbf{r}, t^{\prime}\right) \quad\text{for}\quad t^{\prime} \le t\quad\text{and} \\
&\mathbf{M}(\mathbf{r}, t) \quad \text{depends on}\quad \mathbf{H}\left(\mathbf{r}, t^{\prime}\right) \quad\text{for}\quad t^{\prime} \le t.
\end{align}
$$
Intuitively, consider that the electric field creates a polarisation by inducing an oscillation of the bound electrons in the atoms of the medium, collectively producing the polarisation density. A time delay between cause ($\mathbf{E}$) and effect ($\mathbf{P}$) arises from the finite response time of the atoms; they cannot react infinitely fast to sudden changes in the applied fields.

With our prior assumption of an instantaneous response, we were able to drop the integral in the general response function. This is no longer the case for dispersive media. For a linear, causal system, the response is a convolution in the time domain:
$$
\begin{aligned}
\mathbf{P}(t) & =\int_{-\infty}^{\infty} \varepsilon_0 \chi_e\left(t-t^{\prime}\right) \mathbf{E}\left(t^{\prime}\right) dt^{\prime} = \varepsilon_0 (\chi_e * \mathbf{E})(t), \\
\mathbf{M}(t) & =\int_{-\infty}^{\infty} \chi_m\left(t-t^{\prime}\right) \mathbf{H}\left(t^{\prime}\right) dt^{\prime} = (\chi_m * \mathbf{H})(t).
\end{aligned}
$$
Here, $\chi_e(t)$ and $\chi_m(t)$ are the time-dependent electric and magnetic susceptibility response functions, respectively. Causality requires $\chi_e(\tau)=0$ and $\chi_m(\tau)=0$ for $\tau < 0$. The presence of these convolution integrals signifies that the material has memory.
A significant advantage of Fourier transformation is that convolution in the time domain becomes simple multiplication in the frequency domain. The above equations are equivalent to:
$$
\begin{aligned}
\mathbf{P}(\omega) & =\varepsilon_0 \chi_e(\omega) \mathbf{E}(\omega), \\
\mathbf{M}(\omega) & =\chi_m(\omega) \mathbf{H}(\omega).
\end{aligned}
$$
The frequency-dependent susceptibilities $\chi_e(\omega)$ and $\chi_m(\omega)$ are generally complex quantities. Their form is analogous to the transfer function in [[Notes/Signals and Systems/2 Linear Time-Invariant Systems#2 Linear Time-Invariant Systems\|linear systems theory]]: the response ($\mathbf{P}(\omega)$ or $\mathbf{M}(\omega)$) is the product of the input signal spectrum ($\mathbf{E}(\omega)$ or $\mathbf{H}(\omega)$) and the system's transfer function (the susceptibility). We can now properly define dispersion: **Dispersion means that the material response function (susceptibility, and thus permittivity or permeability) depends on frequency.**

To understand the meaning of a complex susceptibility, consider applying a real electric field $\mathbf{E}(t)=\mathbf{E}_0 \cos\left(\omega_0 t\right)$ to a medium. The Fourier transform of this field is:
$$
\begin{aligned}
\mathbf{E}(\omega) & = \mathcal{F}\left\{\mathbf{E}_0 \cos(\omega_0 t)\right\} = \frac{1}{2} \mathbf{E}_0 \mathcal{F}\left\{e^{i \omega_0 t}+e^{-i \omega_0 t}\right\} \\
& = \pi \mathbf{E}_0\left(\delta\left(\omega-\omega_0\right)+\delta\left(\omega+\omega_0\right)\right).
\end{aligned}
$$
With the frequency-domain relation $\mathbf{P}(\omega)=\varepsilon_0 \chi_e(\omega) \mathbf{E}(\omega)$, we obtain the polarisation spectrum:
$$
\mathbf{P}(\omega)=\pi \varepsilon_0 \chi_e(\omega) \mathbf{E}_0\left(\delta\left(\omega-\omega_0\right)+\delta\left(\omega+\omega_0\right)\right).
$$
Transforming back to the time domain gives the polarisation as a function of time:
$$
\begin{aligned}
\mathbf{P}(t) & = \mathcal{F}^{-1}\{\mathbf{P}(\omega)\} = \frac{1}{2 \pi} \int_{-\infty}^{\infty} \mathbf{P}(\omega) e^{i \omega t} d\omega \\
& = \frac{\varepsilon_0}{2} \mathbf{E}_0\left(\chi_e\left(\omega_0\right) e^{i \omega_0 t}+\chi_e\left(-\omega_0\right) e^{-i \omega_0 t}\right).
\end{aligned}
$$
Since the impulse response $\chi_e(t)$ must be real for a physical system responding to a real field $\mathbf{E}(t)$ with a real polarisation $\mathbf{P}(t)$, its Fourier transform $\chi_e(\omega)$ must satisfy the conjugate symmetry property $\chi_e(-\omega_0)=\chi_e^*(\omega_0)$. Thus,
$$
\mathbf{P}(t) = \frac{\varepsilon_0}{2} \mathbf{E}_0\left(\chi_e\left(\omega_0\right) e^{i \omega_0 t} + \left[\chi_e\left(\omega_0\right) e^{i \omega_0 t}\right]^*\right) = \varepsilon_0 \mathbf{E}_0 \mathfrak{Re}\left[\chi_e\left(\omega_0\right) e^{i \omega_0 t}\right].
$$
Therefore, $|\chi_e(\omega_0)|$ relates the amplitude of the polarisation density response $P_0$ to the applied electric field amplitude $E_0$ (as $P_0 = \varepsilon_0 |\chi_e(\omega_0)| E_0$), while the phase of the complex $\chi_e(\omega_0)$ introduces a phase shift between the polarisation $\mathbf{P}(t)$ and the driving field $\mathbf{E}(t)$. This is shown in the next figure:

![Attachments/Notes/2025 Quantum Electronics/2 Propagation in Dispersive Media/01_Introduction_and_theoretical_foundation 9.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/2%20Propagation%20in%20Dispersive%20Media/01_Introduction_and_theoretical_foundation%209.webp)[[Notes/2025 Quantum Electronics/01_Introduction_and_theoretical_foundation.pdf#page=75&rect=583,279,814,476| ]]

Similarly, for the magnetisation response to an applied magnetic field $\mathbf{H}(t) = \mathbf{H}_0 \cos(\omega_0 t)$:
$$
\mathbf{M}(t)=\mathfrak{Re}\left[\chi_m\left(\omega_0\right) \mathbf{H}_0 e^{i \omega_0 t}\right].
$$
This is shown in the next figure:

![Attachments/Notes/2025 Quantum Electronics/2 Propagation in Dispersive Media/01_Introduction_and_theoretical_foundation 10.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/2%20Propagation%20in%20Dispersive%20Media/01_Introduction_and_theoretical_foundation%2010.webp)[[Notes/2025 Quantum Electronics/01_Introduction_and_theoretical_foundation.pdf#page=76&rect=520,103,680,213| ]]

We will later see that the imaginary part of the susceptibility, $\mathfrak{Im}\left[\chi_e(\omega)\right]$, is related to absorption or gain of electromagnetic energy in the medium.

---
## 2.1 Origin of Dispersion
[[Notes/2025 Quantum Electronics/QE_script.pdf#page=34&selection=125,0,127,30| ]] [[Notes/2025 Quantum Electronics/01_Introduction_and_theoretical_foundation.pdf#page=78&selection=0,0,0,30| ]]

### 2.1.1 Drude-Lorentz model

Let us start with a simple classical model, where we treat an electron in an atom (or a bound charge carrier) as being connected by a spring to a much heavier, effectively immobile ion core. We assume the electron mass is $m_e$. The equation of motion for the displacement $x$ of the electron from its equilibrium position, driven by an external electric field and subject to damping, is that of a simple damped harmonic oscillator:
$$
m_e \frac{d^2 x}{d t^2} + m_e \gamma \frac{d x}{d t} + m_e \omega_0^2 x = F(t).
$$
Here, $\omega_0$ is the natural resonance frequency of the oscillator, and $\gamma$ is a damping coefficient representing energy loss mechanisms. The driving force is $F(t)=-eE(t)$, where $-e$ is the charge of the electron and $E(t)$ is the local electric field experienced by the electron.
The induced dipole moment for one such oscillator is $p(t)=-ex(t)$. If there are $N$ such oscillators per unit volume, the macroscopic polarisation density is $P(t)=Np(t)=-Nex(t)$. Substituting $x(t) = -P(t)/(Ne)$, the equation of motion for $P(t)$ becomes:
$$
\frac{d^2 P(t)}{d t^2}+\gamma \frac{d P(t)}{d t}+\omega_0^2 P(t)=\frac{N e^2}{m_e} E(t).
$$
Next, we Fourier transform this equation (assuming $E(t) \leftrightarrow E(\omega)$ and $P(t) \leftrightarrow P(\omega)$ with $\partial/\partial t \leftrightarrow i\omega$ for fields like $e^{i\omega t}$):
$$
(-\omega^2 + i \gamma \omega + \omega_0^2) P(\omega)=\frac{N e^2}{m_e} E(\omega).
$$
This allows us to solve for $P(\omega)$ in terms of $E(\omega)$ and thus find the electric susceptibility $\chi_e(\omega) = P(\omega) / (\varepsilon_0 E(\omega))$:
$$
\chi_e(\omega)=\frac{N e^2 / (\varepsilon_0 m_e)}{\omega_0^2-\omega^2+i \gamma \omega}=\chi_0 \frac{\omega_0^2}{\omega_0^2-\omega^2+i \gamma \omega},
$$
where the static susceptibility $\chi_0$ is defined as:
$$
\chi_0=\frac{N e^2}{\varepsilon_0 m_e \omega_0^2}.
$$
The real and imaginary parts of $\chi_e(\omega) = \chi_e'(\omega) + i\chi_e''(\omega)$ are:
$$
\begin{aligned}
& \mathfrak{Re}\left[\chi_e(\omega)\right] \equiv \chi_e^{\prime}(\omega)=\chi_0 \frac{\omega_0^2\left(\omega_0^2-\omega^2\right)}{\left(\omega_0^2-\omega^2\right)^2+(\gamma \omega)^2}, \\
& \mathfrak{Im}\left[\chi_e(\omega)\right] \equiv \chi_e^{\prime \prime}(\omega)=\chi_0 \frac{\omega_0^2 \omega \gamma}{\left(\omega_0^2-\omega^2\right)^2+(\gamma \omega)^2}.
\end{aligned}
$$
Both functions are plotted in the next figure, assuming weak damping ($\gamma \ll \omega_0$):

![Attachments/Notes/2025 Quantum Electronics/2 Propagation in Dispersive Media/QE_script.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/2%20Propagation%20in%20Dispersive%20Media/QE_script.webp)[[Notes/2025 Quantum Electronics/QE_script.pdf#page=36&rect=93,440,520,675| ]]

For high frequencies ($\omega \gg \omega_0$), the susceptibility $\chi_e'(\omega)$ becomes small and negative, approaching zero, while $\chi_e''(\omega)$ also approaches zero. The polarisation is out of phase with the electric field by nearly $\pi$ if $\chi_e' < 0$.
At resonance ($\omega=\omega_0$), the real part $\chi_e'(\omega_0)=0$, and the susceptibility is purely imaginary: $\chi_e(\omega_0) = -i \chi_0 \frac{\omega_0}{\gamma}$ from the original formula or $i \chi_0 \frac{\omega_0}{\gamma}$ with the sign correction for $\chi_e''$. If $\chi_e'' > 0$, then $\chi_e(\omega_0) = i \chi_0 \frac{\omega_0}{\gamma}$. The polarisation is phase-shifted by $\pi/2$ relative to the electric field. The peak magnitude of $\chi_e''(\omega_0)$ is $Q\chi_0$, where $Q=\omega_0/\gamma$ is the quality factor of the resonator. It quantifies how much energy is stored in the resonator compared to the energy lost per oscillation cycle. Reducing the damping $\gamma$ makes the resonance peak narrower and higher.
The same general arguments apply to magnetisation density, but at optical frequencies, magnetic resonances ($\chi_m(\omega)$) are often negligible for most materials.

Very often, real systems can be represented as collections of resonators with a distribution of resonance frequencies $\omega_0^{(j)}$ and damping factors $\gamma^{(j)}$:
$$
\chi_e(\omega)=\sum_j \chi_0^{(j)} \frac{(\omega_0^{(j)})^2}{(\omega_0^{(j)})^2-\omega^2+i \gamma^{(j)} \omega}.
$$
These different resonances can arise from different electronic transitions, vibrational modes, and so on.

### 2.1.2 Drude Model

A simplification of the Drude-Lorentz model for free charge carriers (like conduction electrons in a metal) is the Drude model. In this model, the electrons experience no restoring spring force, so the resonance frequency is $\omega_0=0$. The equation of motion becomes:
$$
m_e \frac{d^2 x}{d t^2}+m_e \gamma \frac{d x}{d t}=-e E(t),
$$
where we have replaced the damping rate with a collision (or scattering) rate $\gamma$. Assuming $E(t) = E_0 e^{i\omega t}$, the steady-state solution for $x(t) = x_0 e^{i\omega t}$ is:
$$
x_0=\frac{-e/m_e}{-\omega^2+i \gamma \omega} E_0.
$$
With $P(t) = -Nex(t)$, we obtain $P(\omega) = -Nex_0 = \frac{Ne^2/m_e}{\omega^2-i\gamma\omega}E(\omega)$.
The susceptibility $\chi_e(\omega) = P(\omega)/(\varepsilon_0 E(\omega))$ is then:
$$
\chi_e(\omega)=\frac{Ne^2 / (m_e \varepsilon_0)}{\omega^2-i \gamma \omega} = -\frac{\omega_p^2}{\omega^2-i \gamma \omega},
$$
where $\omega_p=\sqrt{N e^2 / (m_e \varepsilon_0)}$ is the **plasma frequency**, and $N$ is the free carrier concentration.
The real and imaginary parts are:
$$
\begin{align}
&\mathfrak{Re}\left[\chi_e(\omega)\right]=\chi_e^{\prime}(\omega)=-\frac{\omega_p^2 \omega^2}{\omega^2(\omega^2+\gamma^2)} = -\frac{\omega_p^2}{\omega^2+\gamma^2},\\
&\mathfrak{Im}\left[\chi_e(\omega)\right]=\chi_e^{\prime \prime}(\omega)=-\frac{\omega_p^2 \gamma \omega}{\omega^2(\omega^2+\gamma^2)} = -\frac{\omega_p^2 \gamma}{\omega(\omega^2+\gamma^2)}.
\end{align}
$$
In the high-frequency limit where $\omega \gg \gamma$ (low damping), the susceptibility is predominantly real, and the relative permittivity $\varepsilon_r(\omega) = 1+\chi_e(\omega)$ becomes:
$$
\varepsilon_r(\omega) \approx 1-\frac{\omega_p^2}{\omega^2} 
$$
This is the dispersion relation for an undamped plasma, and we differentiate between different cases:
- For frequencies below the plasma frequency ($\omega < \omega_p$), we have $\varepsilon_r(\omega) < 0$. The refractive index $n=\sqrt{\varepsilon_r}$ is imaginary, so the wavevector $k=n\omega/c$ is imaginary. The wave does not propagate but is attenuated (evanescent) within the metal. Metals are highly reflective.
- For frequencies above the plasma frequency ($\omega > \omega_p$), we have $0 < \varepsilon_r(\omega) < 1$. Both $n$ and $k$ are real. The wave propagates. The metal becomes transparent.
- For $\omega=\omega_p$, we have $\varepsilon_r(\omega_p)=0$. In this idealised case, $n=0$, $k=0$. This frequency marks the onset of propagation of transverse waves. Longitudinal plasma oscillations (volume plasmons) occur at $\omega_p$ where $\varepsilon_r(\omega_p)=0$.

Next, let us compare both the Drude-Lorentz and Drude model for the reflectivity $R = |r|^2$, where
$$
r=\frac{\tilde{n}-1}{\tilde{n}+1} = \frac{(n^{\prime}-1)+i n^{\prime \prime}}{(n^{\prime}+1)+i n^{\prime \prime}},
$$
is the Fresnel reflection coefficient for normal incidence from vacuum onto a medium with complex refractive index $\tilde{n} = n' + in''$.

![Attachments/Notes/2025 Quantum Electronics/2 Propagation in Dispersive Media/QE_script 1.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/2%20Propagation%20in%20Dispersive%20Media/QE_script%201.webp)[[Notes/2025 Quantum Electronics/QE_script.pdf#page=40&rect=112,436,506,688| ]]

To model silver, the fit is usually done using a combination:
$$
\varepsilon_r(\omega)=\varepsilon_{\text{Drude}}(\omega)+\sum_j \varepsilon_{\text{Lorentz},j}(\omega),
$$
where the Drude part accounts for free electrons and Lorentz oscillators account for interband transitions. The Drude model alone is often a good fit for the low frequency (infrared) region. However, at higher frequencies (visible/UV), contributions from Lorentz oscillators representing interband transitions must be taken into account.

Lastly, let us discuss a simple implication of the plasma frequency. Consider gold, which has high reflectivity for wavelengths above approximately $500-600 \, \text{nm}$ (red/yellow light) but lower reflectivity (and increased absorption) for shorter wavelengths (green/blue light). This results in reflected white light appearing yellowish/golden, while transmitted light through a very thin gold film can appear bluish-green. This behaviour is related to its plasma frequency and interband transitions. For a thin film of gold, while some absorption occurs, the relation $A+R+T=1$ (Absorbance + Reflectance + Transmittance) holds.

![Attachments/Notes/2025 Quantum Electronics/2 Propagation in Dispersive Media/01_Introduction_and_theoretical_foundation 11.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/2%20Propagation%20in%20Dispersive%20Media/01_Introduction_and_theoretical_foundation%2011.webp)[[Notes/2025 Quantum Electronics/01_Introduction_and_theoretical_foundation.pdf#page=95&rect=426,233,709,407| ]]

In this framework, the colour of metals can be understood by considering the effect of both the plasma frequency (Drude response) and interband transitions (Lorentz oscillators) on the spectral reflectivity.

---
## 2.2 Kramers-Kronig Relations
[[Notes/2025 Quantum Electronics/QE_script.pdf#page=42&selection=173,0,175,28| ]]

From the previous section, we have seen that the frequency dependence of the refractive index (dispersion, related to $\chi_e'$) and absorption (related to $\chi_e''$) are interconnected. A dispersive material _must_ be absorptive over some frequency range, and _must_ exhibit a frequency-dependent absorption coefficient if it is dispersive. This general principle is mathematically captured by the Kramers-Kronig relations. Even with our very simplistic models for susceptibility, linear response theory has important implications regarding causality.

The Kramers-Kronig relations connect the real and imaginary parts of a complex response function, such as the electric susceptibility $\chi_e(\omega)$. They are a direct mathematical consequence of causality (the response cannot precede the stimulus) and the assumption that the response function $\chi_e(t)$ is real.
The relations are:
$$
\begin{aligned}
& \mathfrak{Re}\left[\chi_e(\omega)\right] \equiv \chi_e^{\prime}(\omega)=\frac{1}{\pi} \mathcal{P} \int_{-\infty}^{\infty} \frac{\chi_e^{\prime \prime}(\omega_1)}{\omega_1-\omega} d \omega_1 = \frac{2}{\pi} \mathcal{P} \int_0^{\infty} \frac{\omega_1 \chi_e^{\prime \prime}\left(\omega_1\right)}{\omega_1^2-\omega^2} d \omega_1, \\
& \mathfrak{Im}\left[\chi_e(\omega)\right] \equiv \chi_e^{\prime \prime}(\omega)=-\frac{1}{\pi} \mathcal{P} \int_{-\infty}^{\infty} \frac{\chi_e^{\prime}(\omega_1)}{\omega_1-\omega} d \omega_1 = -\frac{2\omega}{\pi} \mathcal{P} \int_0^{\infty} \frac{\chi_e^{\prime}\left(\omega_1\right)}{\omega_1^2-\omega^2} d \omega_1.
\end{aligned}
$$
$\mathcal{P}$ denotes the Cauchy Principal Value of the integral. The response function $\chi_e(t)$ being real ensures $\chi_e(\omega) = \chi_e^*(-\omega)$, leading to $\chi_e'(\omega)$ being even and $\chi_e''(\omega)$ being odd, allowing the integrals to be written over $[0, \infty)$.
These relations are powerful: they allow the calculation of one part of the complex susceptibility (or permittivity, or refractive index) if the other part is known over the entire frequency spectrum. Practically, measuring over all frequencies is impossible, but measurements over a broad range combined with physically reasonable extrapolations or models for regions far from resonances can be used. For instance, measuring the absorption spectrum ($\sim \chi_e''(\omega)$) over a wide range allows the calculation of the refractive index dispersion ($\sim \chi_e'(\omega)$).

Consider sending light through a medium and detecting the transmitted intensity with a photodetector:

![Attachments/Notes/2025 Quantum Electronics/2 Propagation in Dispersive Media/01_Introduction_and_theoretical_foundation 12.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/2%20Propagation%20in%20Dispersive%20Media/01_Introduction_and_theoretical_foundation%2012.webp)[[Notes/2025 Quantum Electronics/01_Introduction_and_theoretical_foundation.pdf#page=98&rect=81,180,503,372| ]]

If the goal is to determine the complex susceptibility $\chi_e(\omega)$, one typically needs to measure both amplitude and phase changes upon interaction with the medium. A simple photodetector measures intensity, thereby losing phase information which is crucial for the real part of the refractive index (and thus $\chi_e'$). However, by carefully measuring the absorption spectrum (related to $\chi_e''$) as a function of frequency, the Kramers-Kronig relations can be used to reconstruct the dispersive part $\chi_e'$ (and thus the full complex refractive index).

---
## 2.3 Equations in Frequency Domain
[[Notes/2025 Quantum Electronics/QE_script.pdf#page=43&selection=281,0,283,39| ]] [[Notes/2025 Quantum Electronics/01_Introduction_and_theoretical_foundation.pdf#page=102&selection=0,36,0,36| ]]

Consider again the macroscopic field relations in the time domain:
$$
\begin{align}
&\mathbf{D}(t)=\varepsilon_0 \mathbf{E}(t)+\mathbf{P}(t),\\
&\mathbf{B}(t)=\mu_0(\mathbf{H}(t)+\mathbf{M}(t)).
\end{align}
$$
Assuming linear responses $\mathbf{P}(t) = \varepsilon_0 (\chi_e * \mathbf{E})(t)$ and $\mathbf{M}(t) = (\chi_m * \mathbf{H})(t)$, Fourier transforming these equations (convolution becomes multiplication) results in:
$$
\begin{align}
&\mathbf{D}(\omega)=\varepsilon_0 (1+\chi_e(\omega))\mathbf{E}(\omega) = \varepsilon_0 \varepsilon_r(\omega)\mathbf{E}(\omega) = \varepsilon(\omega)\mathbf{E}(\omega),\\
&\mathbf{B}(\omega)=\mu_0 (1+\chi_m(\omega))\mathbf{H}(\omega) = \mu_0 \mu_r(\omega)\mathbf{H}(\omega) = \mu(\omega)\mathbf{H}(\omega).
\end{align}
$$
Here, $\varepsilon_r(\omega)=1+\chi_e(\omega)$ is the complex relative permittivity (or dielectric function), and $\mu_r(\omega)=1+\chi_m(\omega)$ is the complex relative permeability. $\varepsilon(\omega)=\varepsilon_0\varepsilon_r(\omega)$ and $\mu(\omega)=\mu_0\mu_r(\omega)$ are the absolute complex permittivity and permeability, respectively. 
Next, let us transform Maxwell's equations to frequency space. Using the Fourier transform property that $\frac{\partial}{\partial t} \leftrightarrow i\omega$:
For no free charges ($\rho_f=0$) and no free currents ($\mathbf{j}_f=0$), we find:

| **Time Domain**                                                                                    | $\longrightarrow$ | **Frequency Domain**                                                                      |
| -------------------------------------------------------------------------------------------------- | ----------------- | ----------------------------------------------------------------------------------------- |
| $\nabla \cdot \mathbf{D}(\mathbf{r}, t) = 0$                                                       |                   | $\nabla \cdot \mathbf{D}(\mathbf{r}, \omega) = 0$                                         |
| $\nabla \cdot \mathbf{B}(\mathbf{r}, t) = 0$                                                       |                   | $\nabla \cdot \mathbf{B}(\mathbf{r}, \omega) = 0$                                         |
| $\nabla \times \mathbf{E}(\mathbf{r}, t) = -\frac{\partial \mathbf{B}(\mathbf{r}, t)}{\partial t}$ |                   | $\nabla \times \mathbf{E}(\mathbf{r}, \omega) = -i \omega \mathbf{B}(\mathbf{r}, \omega)$ |
| $\nabla \times \mathbf{H}(\mathbf{r}, t) = \frac{\partial \mathbf{D}(\mathbf{r}, t)}{\partial t}$  |                   | $\nabla \times \mathbf{H}(\mathbf{r}, \omega) = i \omega \mathbf{D}(\mathbf{r}, \omega)$  |

It should be noted here that a truly non-dispersive medium has an instantaneous response. If $\chi_e(\omega) = \hat{\chi}_e$ (a constant independent of frequency), then its inverse Fourier transform is:
$$
\chi_e(t)=\frac{1}{2 \pi} \int_{-\infty}^{+\infty} \hat{\chi}_e e^{i \omega t} d \omega = \hat{\chi}_e \delta(t).
$$
This means $\mathbf{P}(t) = \varepsilon_0 \hat{\chi}_e \mathbf{E}(t)$, an instantaneous relation.

---
## 2.4 Helmholtz Equation
[[Notes/2025 Quantum Electronics/QE_script.pdf#page=50&selection=4,0,7,16| ]] [[Notes/2025 Quantum Electronics/01_Introduction_and_theoretical_foundation.pdf#page=105&selection=0,18,0,17| ]]

Let us start from Faraday's law in the frequency domain, $\nabla \times \mathbf{E}(\mathbf{r},\omega) = -i\omega \mathbf{B}(\mathbf{r},\omega)$, and apply the curl operator:
$$
\nabla \times (\nabla \times \mathbf{E}) = -i\omega (\nabla \times \mathbf{B}).
$$
Using the vector identity $\nabla \times (\nabla \times \mathbf{A}) = \nabla(\nabla \cdot \mathbf{A}) - \nabla^2\mathbf{A}$, and assuming a homogeneous medium where $\nabla \cdot \mathbf{E} = 0$ (which follows from $\nabla \cdot \mathbf{D}=0$ if $\varepsilon_r$ is spatially constant and $\rho_f=0$), the left side becomes $-\nabla^2\mathbf{E}$.
For the right side, substitute $\mathbf{B} = \mu_0\mu_r(\omega)\mathbf{H}$ and then Ampère-Maxwell's law $\nabla \times \mathbf{H} = i\omega \mathbf{D}$ (for $\mathbf{j}_f=0$):
$$
-\nabla^2\mathbf{E} = -i\omega (\mu_0\mu_r(\omega) (i\omega \mathbf{D})) = \omega^2 \mu_0\mu_r(\omega) \mathbf{D}.
$$
Substitute $\mathbf{D} = \varepsilon_0\varepsilon_r(\omega)\mathbf{E}$:
$$
-\nabla^2\mathbf{E} = \omega^2 \mu_0\mu_r(\omega) \varepsilon_0\varepsilon_r(\omega) \mathbf{E}.
$$
Rearranging gives the Helmholtz equation:
$$
\nabla^2 \mathbf{E}(\mathbf{r}, \omega) + \omega^2 \mu_0\varepsilon_0 \mu_r(\omega)\varepsilon_r(\omega) \mathbf{E}(\mathbf{r}, \omega) = 0.
$$
Using $c^2 = 1/(\mu_0\varepsilon_0)$ and defining the complex refractive index $n(\omega) = \sqrt{\mu_r(\omega)\varepsilon_r(\omega)}$, this becomes:
$$
\nabla^2 \mathbf{E}(\mathbf{r}, \omega) + \frac{\omega^2 n(\omega)^2}{c^2} \mathbf{E}(\mathbf{r}, \omega) = 0.
$$
This is the wave equation in the frequency domain for a linear, homogeneous, isotropic medium.
We can write $n(\omega)=n'(\omega)+in''(\omega)$. This makes the wavevector $\mathbf{k}(\omega)$ complex. For a plane wave propagating in the $\mathbf{r}$-direction, $\mathbf{k}(\omega) = k(\omega)\hat{\mathbf{r}} = n(\omega)\frac{\omega}{c}\hat{\mathbf{r}}$.
The Fourier transform of a monochromatic plane wave $E(t) = \tilde{E}_0 e^{i(\omega_1 t - \mathbf{k}(\omega_1)\cdot\mathbf{r})}$ is $E(\omega) = 2\pi \tilde{E}_0 \delta(\omega-\omega_1)e^{-i\mathbf{k}(\omega_1)\cdot\mathbf{r}}$. A general solution can be built from these.
For a specific frequency $\omega$, a plane wave solution is $\mathbf{E}(\mathbf{r},t) = \tilde{\mathbf{E}}_0 e^{i(\mathbf{k}(\omega)\cdot\mathbf{r} - \omega t)}$.
Let $\mathbf{k}(\omega) = \mathbf{k}'(\omega) + i\mathbf{k}''(\omega)$. Then the spatial part is $e^{i\mathbf{k}'(\omega)\cdot\mathbf{r}} e^{-\mathbf{k}''(\omega)\cdot\mathbf{r}}$.
The term $e^{i\mathbf{k}'(\omega)\cdot\mathbf{r}}$ represents the oscillating phase, while $e^{-\mathbf{k}''(\omega)\cdot\mathbf{r}}$ represents an exponential decay of the wave amplitude if $\mathbf{k}''(\omega)$ is positive and points in the direction of propagation $\mathbf{r}$. This decay causes a loss of energy carried by the wave as it moves through the medium.
The imaginary part of the refractive index, $n''(\omega)$, determines $\mathbf{k}''(\omega)$. For a passive, lossy medium, $n''(\omega) > 0$ (by common convention). If so, $\mathbf{k}'(\omega)$ and $\mathbf{k}''(\omega)$ are parallel.
The wavelength in the medium is defined by the real part of the wavevector: $\lambda_n = \frac{2\pi}{|\mathbf{k}'(\omega)|}$.
The phase velocity is given by $v_p(\omega) = \frac{\omega}{|\mathbf{k}'(\omega)|} = \frac{c}{n'(\omega)}$. It describes the speed at which surfaces of constant phase propagate.
The time-averaged intensity of the wave is related to $|\tilde{\mathbf{E}}_0|^2 e^{-2\mathbf{k}''(\omega)\cdot\mathbf{r}}$. We define the intensity absorption coefficient as $\alpha(\omega) = 2|\mathbf{k}''(\omega)| = 2n''(\omega)\omega/c$. The intensity then decays as $I(z) = I_0 e^{-\alpha(\omega)z}$ (if propagating in $z$-direction). This is illustrated next:

![Attachments/Notes/2025 Quantum Electronics/2 Propagation in Dispersive Media/01_Introduction_and_theoretical_foundation 13.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/2%20Propagation%20in%20Dispersive%20Media/01_Introduction_and_theoretical_foundation%2013.webp)[[Notes/2025 Quantum Electronics/01_Introduction_and_theoretical_foundation.pdf#page=109&rect=49,105,354,479| ]]

---
## 2.5 Refractive Index in Dispersive Media
[[Notes/2025 Quantum Electronics/01_Introduction_and_theoretical_foundation.pdf#page=112&selection=0,39,0,39| ]] [[Notes/2025 Quantum Electronics/QE_script.pdf#page=43&selection=281,1,283,39| ]]

Again, let us stress that the frequency-dependence of the real part of the refractive index $n'(\omega)$ (dispersion) is inherently related via the Kramers-Kronig relations to the frequency-dependence of its imaginary part $n''(\omega)$ (absorption). If there is absorption ($n''(\omega) \neq 0$) at some frequencies, the refractive index $n'(\omega)$ must be dispersive (frequency-dependent) over all frequencies, and vice-versa. While absorption resonances ($\text{peaks in } n''(\omega)$) are often localised in frequency, the associated changes in the refractive index $n'(\omega)$ extend over a much broader frequency range. We have seen: If there is absorption _anywhere_ in the spectrum, the refractive index $n'(\omega)$ becomes dispersive _everywhere_. This is shown in the next figure for a material with three distinct absorption resonances:

![Attachments/Notes/2025 Quantum Electronics/2 Propagation in Dispersive Media/01_Introduction_and_theoretical_foundation 14.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/2%20Propagation%20in%20Dispersive%20Media/01_Introduction_and_theoretical_foundation%2014.webp)[[Notes/2025 Quantum Electronics/01_Introduction_and_theoretical_foundation.pdf#page=113&rect=342,151,752,471| ]]

For most optically transparent media (meaning they have low absorption in the visible range), the strongest electronic absorption resonances (corresponding to $\omega_0$ in the Lorentz model) typically lie in the ultraviolet. For frequencies $\omega$ in the visible range, we are often in the regime $\omega \ll \omega_0$. Assuming weak damping ($\gamma \ll \omega_0$), the imaginary part of the susceptibility $\chi_e''(\omega)$ (and thus $n''(\omega)$) becomes very small in this transparent region, while its real part $\chi_e'(\omega)$ typically increases with $\omega$. Since $n'(\omega) \approx \sqrt{1+\chi_e'(\omega)}$ (for $\chi_e'$ small or $(n')^2 \approx 1+\chi_e'$), this implies that the refractive index exhibits 'normal' dispersion:
$$
\begin{align}
\text{Normal dispersion:}\quad&\frac{dn'}{d\omega}>0,\\
\text{Anomalous dispersion:}\quad&\frac{dn'}{d\omega}<0.
\end{align}
$$
Near an absorption resonance ($\omega \approx \omega_0$), the dispersion typically becomes anomalous before returning to normal at higher frequencies above the resonance.
In practice, empirical interpolation formulas are used to describe $n'(\omega)$ (or $n'(\lambda_0)$) in regions of transparency. The imaginary part is often ignored if absorption is small. The most well-known of these formulas is the **Sellmeier equation**:
$$
(n'(\lambda_0))^2 = 1+\sum_j \frac{B_j \lambda_0^2}{\lambda_0^2-C_j},
$$
where the vacuum wavelength $\lambda_0=c/f$ is often expressed in micrometres. Usually, two or three terms in the sum are sufficient to fit experimental data for many glasses over the visible and near-infrared. The similarity of the Sellmeier equation to a sum of Lorentz oscillators arises because it can be derived assuming resonances are very narrow (like delta functions in $\chi_e''(\omega)$), which is a good approximation far from these resonances. The coefficients $B_j$ are related to the strength of the $j$-th resonance, and $C_j = \lambda_{0,j}^2$ where $\lambda_{0,j}$ is the resonance wavelength of the $j$-th oscillator.

Lastly, note that the Sellmeier equation typically lacks accuracy in the XUV (extreme ultraviolet) and X-ray range (short wavelengths), where the refractive index of any material is very close to 1. These small deviations from unity are often described using $n(\omega)=1-\delta(\omega)+i\beta_{\text{abs}}(\omega)$ (here $\beta_{\text{abs}}$ is the absorption index, not propagation constant). Both $\delta$ and $\beta_{\text{abs}}$ are usually small and positive for $\lambda_0 \sim 0.1 \, \text{nm}$ to $100 \, \text{nm}$, unless the frequency is very close to an atomic absorption edge (which corresponds to an ionisation threshold or inner-shell transition).

---
## 2.6 Light Pulses
[[Notes/2025 Quantum Electronics/QE_script.pdf#page=52&selection=135,0,140,5| ]] [[Notes/2025 Quantum Electronics/01_Introduction_and_theoretical_foundation.pdf#page=120&selection=0,0,0,25| ]]

Let us consider an important example of a non-monochromatic wave: a light pulse. Light pulses, as opposed to continuous monochromatic plane waves, are finite in time duration and thus also have a finite spatial extent along the propagation direction. Here, we still treat them as infinitely extended transverse to the propagation direction, so as plane wave pulses. It is understood that a pulse can be represented as a superposition of plane waves of varying wavelengths or frequencies:

![Attachments/Notes/2025 Quantum Electronics/2 Propagation in Dispersive Media/QE_script 2.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/2%20Propagation%20in%20Dispersive%20Media/QE_script%202.webp)[[Notes/2025 Quantum Electronics/QE_script.pdf#page=54&rect=144,439,478,671| ]]

In this conceptual image, a 'red' (lower frequency) and a 'violet' (higher frequency) wave are superposed to get the resultant 'blue' wave (the pulse envelope). The colours are illustrative and not necessarily related to physical colours. It turns out that the more frequency components (waves with different frequencies) are added coherently, the 'narrower' in time the resulting pulse can become:

![Attachments/Notes/2025 Quantum Electronics/2 Propagation in Dispersive Media/QE_script 3.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/2%20Propagation%20in%20Dispersive%20Media/QE_script%203.webp)[[Notes/2025 Quantum Electronics/QE_script.pdf#page=55&rect=142,106,483,349| ]]

The general effect of superimposing multiple waves with frequencies $\omega_m = \omega_a + m\Delta\omega$ (where $m$ is an integer) is to produce constructive interference at times $t_p = p \cdot 2\pi/\Delta\omega$ (where $p$ is an integer) and destructive interference elsewhere, leading to a train of pulses. If many waves with a broad spectrum around a centre frequency $\omega_a$ are superposed, and if $\Delta\omega$ represents the approximate overall bandwidth, then a short pulse of duration $\sim 1/\Delta\omega$ can be formed.

**Constructive interference of two waves**
Let us take a step back and consider the superposition of two plane waves with real amplitudes $\mathbf{E}_0$, frequencies $\omega_1$ and $\omega_2$, and corresponding wavevectors $\mathbf{k}(\omega_1)$ and $\mathbf{k}(\omega_2).$ Assume they are in phase at $\mathbf{r}=0, t=0$.
$$
\begin{aligned}
\mathbf{E}_1(\mathbf{r}, t)=\mathbf{E}_0 \cos \left(\omega_1 t-\mathbf{k}(\omega_1) \cdot \mathbf{r}\right) \quad\text{and}\quad
\mathbf{E}_2(\mathbf{r}, t)=\mathbf{E}_0 \cos \left(\omega_2 t-\mathbf{k}(\omega_2) \cdot \mathbf{r}\right).
\end{aligned}
$$
Let $\omega_a = (\omega_1+\omega_2)/2$ be the average (carrier) frequency and $\Delta\omega = (\omega_2-\omega_1)$ be the frequency difference. Similarly, let $\mathbf{k}_a = (\mathbf{k}(\omega_1)+\mathbf{k}(\omega_2))/2$ and $\Delta\mathbf{k} = (\mathbf{k}(\omega_2)-\mathbf{k}(\omega_1))$.
The superposition $\mathbf{E}(t) = \mathbf{E}_1(t) + \mathbf{E}_2(t)$ at $\mathbf{r}=0$ can be rewritten using trigonometric identities as:
$$
\mathbf{E}(0, t)=2\mathbf{E}_0 \cos \left( \frac{(\omega_2-\omega_1)t}{2} \right) \cos \left( \frac{(\omega_1+\omega_2)t}{2} \right) = 2\mathbf{E}_0 \cos \left(\frac{\Delta\omega}{2} t\right) \cos \left(\omega_a t\right).
$$
This represents a fast oscillation at $\omega_a$ modulated by a slower envelope oscillating at $\Delta\omega/2$.
To find the speed of this envelope maximum (a point of constructive interference), consider the condition that the phases of the two waves remain equal as the wave propagates a distance $\Delta z$ in time $\Delta t$ (assuming 1D propagation along $z$, so $k = k_z$):
$$
\omega_1 \Delta t-k'(\omega_1) \Delta z = \omega_2 \Delta t-k'(\omega_2) \Delta z \quad (\text{modulo } 2\pi).
$$
This leads to $\Delta z (\Delta k') = \Delta t (\Delta \omega)$, where $\Delta k' = k'(\omega_2)-k'(\omega_1)$.
The velocity of this constant-phase point of the envelope is the group velocity $v_g$:
$$
v_g = \frac{\Delta z}{\Delta t} = \frac{\Delta \omega}{\Delta k'}.
$$
In the limit of a small frequency difference ($\Delta\omega \to 0$), we obtain the group velocity as:
$$
v_g=\left.\frac{d \omega}{d k'}\right|_{\omega=\omega_a}.
$$
Using $k'(\omega) = n'(\omega)\omega/c$, we can express $v_g$ as:
$$
v_g = \frac{c}{n'(\omega_a)+\omega_a \left.\frac{d n'}{d \omega}\right|_{\omega=\omega_a}} = \frac{c}{n'(\lambda_0)-\lambda_0 \left.\frac{d n'}{d \lambda_0}\right|_{\lambda_0=\lambda_a}}.
$$
Sometimes, the _group index_ $n_g$ is used, defined as:
$$
n_g \equiv \frac{c}{v_g} = c \frac{d k'}{d \omega} = n'(\omega) + \omega \frac{d n'}{d \omega} = n'(\lambda_0) - \lambda_0 \frac{d n'}{d \lambda_0}.
$$
The group velocity represents the speed of the pulse envelope if the envelope changes slowly and the spectral bandwidth is narrow enough that $v_g$ is approximately constant over that bandwidth. Deviations from this ideal condition lead to pulse broadening and distortion, known as group velocity dispersion (GVD). For transparent optical materials away from resonances, the group velocity is usually smaller than the phase velocity $v_p=c/n'$.

Lastly, consider the following figure illustrating phase and group velocities:

![Attachments/Notes/2025 Quantum Electronics/2 Propagation in Dispersive Media/Wave_group.gif|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/2%20Propagation%20in%20Dispersive%20Media/Wave_group.gif)

In this animation, the green points represent points moving at the group velocity (envelope speed), while red points represent points moving at the phase velocity (carrier wave speed). The figure illustrates how these two velocities can differ in a dispersive medium.

---
## 2.7 Time-Bandwidth Product of Wavepackets
[[Notes/2025 Quantum Electronics/01_Introduction_and_theoretical_foundation.pdf#page=130&selection=0,0,0,27| ]] [[Notes/2025 Quantum Electronics/QE_script.pdf#page=57&selection=86,0,88,39| ]]

A light pulse is formed by superimposing plane waves with different frequencies. In a continuous form, this superposition is described by the inverse Fourier transform:
$$
\mathbf{E}(t)=\frac{1}{2 \pi} \int_{-\infty}^{\infty} \mathbf{E}(\omega) e^{i \omega t} d \omega.
$$
We generally call $\mathbf{E}(\omega)$ the spectrum of the pulse, indicating the complex amplitude (magnitude and phase) of each monochromatic constituent of the pulse. The spread of frequencies in the spectrum is its bandwidth $\Delta\omega$ (or $\Delta f = \Delta\omega/2\pi$), which is usually much smaller than the average/centre frequency $\omega_a$ of the pulse for well-defined pulses. The spectral energy density is proportional to $|\mathbf{E}(\omega)|^2$.

The electric field as a function of frequency, $\mathbf{E}(\omega)$, and the electric field as a function of time, $\mathbf{E}(t)$, are Fourier transform pairs. This mathematical relationship has an important implication: there is a fundamental limit to how short a pulse duration $\Delta t$ can be for a given spectral bandwidth $\Delta\omega$. This is quantified by the time-bandwidth product (TBP).
Consider the next figure, showing the intensity profile in time, $|E(t)|^2$, and the spectral intensity, $|E(\omega)|^2$:

![Attachments/Notes/2025 Quantum Electronics/2 Propagation in Dispersive Media/01_Introduction_and_theoretical_foundation 18.webp](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/2%20Propagation%20in%20Dispersive%20Media/01_Introduction_and_theoretical_foundation%2018.webp)[[Notes/2025 Quantum Electronics/01_Introduction_and_theoretical_foundation.pdf#page=130&rect=156,187,762,346| ]]

The Fourier transform uncertainty principle states that the product $\Delta t \cdot \Delta\omega$ (or $\Delta t \cdot \Delta f$) has a minimum possible value, which depends on the pulse shape (definitions of $\Delta t$ and $\Delta\omega$, such as Full Width at Half Maximum, also affect this value). We call this product the _time-bandwidth product_. Pulses that achieve this minimum are called _transform-limited pulses_. For such pulses, the spectral phase $\arg[\mathbf{E}(\omega)]$ is constant or, at most, linear in frequency across the pulse bandwidth.

Pulses that are not transform-limited possess a non-linear spectral phase. This results in a pulse duration $\Delta t$ that is longer than the minimum allowed by its spectral bandwidth. These pulses have a time-dependent instantaneous oscillation frequency, a phenomenon known as **chirp**. If $\varphi(t)$ is the total phase of the complex analytic signal associated with $\mathbf{E}(t)$, the instantaneous frequency is $\omega(t)=\frac{d\varphi(t)}{dt}$. A chirp means $\omega(t)$ is not constant.

Consider a transform-limited (therefore unchirped) Gaussian pulse:

![Attachments/Notes/2025 Quantum Electronics/2 Propagation in Dispersive Media/01_Introduction_and_theoretical_foundation 19.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/2%20Propagation%20in%20Dispersive%20Media/01_Introduction_and_theoretical_foundation%2019.webp)

The next figure shows a chirped Gaussian pulse. By definition, its time-bandwidth product is greater than the minimum possible for a Gaussian shape: $\Delta t \cdot \Delta \nu > \text{TBP}_{\text{Gaussian}}$.

![Attachments/Notes/2025 Quantum Electronics/2 Propagation in Dispersive Media/01_Introduction_and_theoretical_foundation.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/2%20Propagation%20in%20Dispersive%20Media/01_Introduction_and_theoretical_foundation.webp)[[Notes/2025 Quantum Electronics/01_Introduction_and_theoretical_foundation.pdf#page=132&rect=60,259,314,436| ]]
To illustrate the effect of a chirp, consider the difference between an unchirped (blue) and a chirped (orange) light pulse, both having the same spectral amplitude magnitude:

![Attachments/Notes/2025 Quantum Electronics/2 Propagation in Dispersive Media/01_Introduction_and_theoretical_foundation 21.webp|700](/img/user/Attachments/Notes/2025%20Quantum%20Electronics/2%20Propagation%20in%20Dispersive%20Media/01_Introduction_and_theoretical_foundation%2021.webp)[[Notes/2025 Quantum Electronics/01_Introduction_and_theoretical_foundation.pdf#page=132&rect=400,240,774,496| ]]

We can see that the pulse duration (FWHM) of the unchirped blue pulse is shorter than that of the chirped orange pulse. If a chirp is positive (up-chirp), lower frequencies precede higher frequencies in time. If a chirp is negative (down-chirp), higher frequencies precede lower frequencies. The type of chirp acquired by a pulse propagating through a dispersive medium depends on the sign of the group velocity dispersion (GVD) of the medium.
Usually, GVD is quantified by the dispersion parameter $D_{\lambda}$:
$$
D_{\lambda}=-\frac{1}{v_g^2} \frac{dv_g}{d \lambda_0} \approx -\frac{\lambda_0}{c} \frac{d^2 n'}{d \lambda_0^2},
$$
with its units typically being ps/(nm$\cdot$km) in telecommunications, where optical fibres can be kilometres long. The duration $\tau_p(\Delta z)$ of an initially transform-limited Gaussian pulse with duration $\Delta t_0$ (FWHM) after propagating a distance $\Delta z$ through a medium with dispersion $D_\lambda$ and initial spectral width $\Delta\lambda_0$ can be approximated by:
$$
\tau_p(\Delta z) \approx \sqrt{(\Delta t_0)^2+\left(D_\lambda \Delta \lambda_0 \Delta z\right)^2}.
$$
This shows pulse broadening due to dispersion.

---
## 2.8 Phase, Group and Front Velocity
[[Notes/2025 Quantum Electronics/01_Introduction_and_theoretical_foundation.pdf#page=133&selection=0,0,0,33| ]] [[Notes/2025 Quantum Electronics/QE_script.pdf#page=58&selection=99,0,101,31| ]]

It is known that the phase velocity $v_p = c/n'(\omega)$ can exceed the speed of light in vacuum $c$ (for $n'(\omega) < 1$), particularly for XUV light in materials or near absorption resonances in any spectral range. The group velocity $v_g = c/n_g(\omega)$ can also exceed $c$ (if $n_g(\omega) < 1$) or even become negative near a strong absorption line where $dn'/d\omega$ can be large and negative. However, these phenomena do not violate the principles of relativity, which state that no energy or information can be transmitted faster than $c$.

Neither the phase velocity nor the group velocity are, in general, reliable measures for the speed of information transmission. The phase velocity describes the velocity of points of constant phase (such as wave crests or zero-crossings). Since a monochromatic wave extends infinitely in time and space, observing one zero-crossing allows prediction of all others, so no new information is conveyed by its propagation at $v_p$. The group velocity describes the velocity of the peak of the pulse envelope under certain conditions (narrow bandwidth, slowly varying envelope, negligible higher-order dispersion). However, for pulses with broad bandwidths or in regions of strong dispersion, the pulse shape can change dramatically, and the group velocity may not accurately represent the speed of any particular feature of the pulse, nor the speed of information. For analytic pulse shapes (whose future is determined by their past), the propagation of the envelope peak may not constitute signal transmission in the strictest sense.

The true maximum speed of information or energy transmission is the **front velocity** of a pulse, which is the speed of any non-analytic feature at the very beginning of a pulse (the wavefront). It has been shown that the front velocity is always equal to $c$ in vacuum, regardless of the medium the pulse subsequently enters, and it cannot exceed $c$ in any medium.

---