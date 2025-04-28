---
{"dg-publish":true,"permalink":"/courses/2025-quantum-electronics-gallmann/2-propagation-in-dispersive-media/","hide":"true","updated":"2025-04-05T17:29:44.556+02:00"}
---

Jump back to ==[[Courses/2025 Quantum Electronics Gallmann/Quantum Electronics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Courses/2025 Quantum Electronics Gallmann/2 Propagation in Dispersive Media#2.1 Origin of Dispersion\|2.1 Origin of Dispersion]]
- [[Courses/2025 Quantum Electronics Gallmann/2 Propagation in Dispersive Media#2.2 Kramers-Kronig Relations\|2.2 Kramers-Kronig Relations]]
- [[Courses/2025 Quantum Electronics Gallmann/2 Propagation in Dispersive Media#2.3 Equations in Frequency Domain\|2.3 Equations in Frequency Domain]]
- [[Courses/2025 Quantum Electronics Gallmann/2 Propagation in Dispersive Media#2.4 Helmholtz Equation\|2.4 Helmholtz Equation]]
- [[Courses/2025 Quantum Electronics Gallmann/2 Propagation in Dispersive Media#2.5 Refractive Index in Dispersive Media\|2.5 Refractive Index in Dispersive Media]]
- [[Courses/2025 Quantum Electronics Gallmann/2 Propagation in Dispersive Media#2.6 Light Pulses\|2.6 Light Pulses]]
- [[Courses/2025 Quantum Electronics Gallmann/2 Propagation in Dispersive Media#2.7 Time-Bandwidth Product of Wavepackets\|2.7 Time-Bandwidth Product of Wavepackets]]
- [[Courses/2025 Quantum Electronics Gallmann/2 Propagation in Dispersive Media#2.8 Phase, Group and Front Velocity\|2.8 Phase, Group and Front Velocity]]

---
# 2 Propagation in Dispersive Media
[[Courses/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=71&selection=0,16,0,16|•]] [[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=32&selection=1,0,1,31|•]]

Thinking back to [[Courses/2025 Quantum Electronics Gallmann/1 Electromagnetic Theory of Light#1.4 Macroscopic Approximation\|approximation 4]], we assumed that the polarisation and magnetisation depends linearly on the instantaneous values of the electric and magnetic field. However, as we noted, this is only true for slow changes in the fields with time and can not be true for faster oscillating fields. In other words, we assumed the system (material) to have no [[Notes/Signals and Systems/1 Signals and Systems#1.9.1 Memory\|memory]]. This assumption means that there is no dispersion, as we will see soon. While it seems that obvious that the polarisation and magnetisation can not depend on _future_ values ([[Notes/Signals and Systems/1 Signals and Systems#1.9.3 Causality\|causality]]), real materials in reality do have some limited memory:
$$
\begin{align}
&\mathbf{P}(\mathbf{r}, t)\quad \text{depends on} \quad\mathbf{E}\left(\mathbf{r}, t^{\prime}\right) \quad\text{for}\quad t^{\prime}<t\quad\text{and}
\\
&\mathbf{M}(\mathbf{r}, t) \quad \text{depends on}\quad \mathbf{H}\left(\mathbf{r}, t^{\prime}\right) \quad\text{for}\quad t^{\prime}<t.
\end{align}
$$
Intuitively, consider that the electric fields creates a polarisation by inducing an oscillation of the bound electrons in the atoms of the medium, collectively producing the polarisation density. A time delay between cause and effect comes from the finite response time of the atoms. In other words, they can not react infinitely fast to sudden changes in the fields.

With our prior assumption, we were able to drop the integral. This is no longer the case, hence we use
$$
\begin{aligned}
\mathbf{P}(t) & =\int_{-\infty}^{\infty} \varepsilon_0 \chi\left(t-t^{\prime}\right) \mathbf{E}\left(t^{\prime}\right) d t^{\prime}, \\
\mathbf{M}(t) & =\int_{-\infty}^{\infty} \chi_m\left(t-t^{\prime}\right) \mathbf{H}\left(t^{\prime}\right) d t^{\prime}.
\end{aligned}
$$
We see that both the susceptibility and magnetic susceptibility are time-dependent. Since the system can not predict the future, the susceptibilities must be zero before $t=0.$ Therefore, the susceptibility is generally complex in frequency space, since it has to fulfil the [[Courses/2025 Quantum Electronics Gallmann/2 Propagation in Dispersive Media#2.2 Kramers-Kronig Relations\|Kramers-Kronig relation]]. A good thing about the convolution is that it becomes a simple multiplication after Fourier transforming. The above equations are equivalent to 
$$
\begin{aligned}
\mathbf{P}(\omega) & =\varepsilon_0 \chi(\omega) \mathbf{E}(\omega) \\
\mathbf{M}(\omega) & =\chi_m(\omega) \mathbf{H}(\omega).
\end{aligned}
$$
These quantities are in general complex. The form of these two quantities has the same form as in [[Notes/Signals and Systems/2 Linear Time-Invariant Systems#2 Linear Time-Invariant Systems\|linear systems theory]]: The response $(\mathbf{P}$ and $\mathbf{M})$ is a convolution of an input signal ($\mathbf{E}$ and $\mathbf{H}$) with a transfer/impulse response (the susceptibilities). We are finally at a point, where we can define dispersion properly: ==Dispersion means that the response function depends on frequency.==

To understand the meaning of a complex susceptibility, consider applying an electric field $\mathbf{E}(t)=\mathbf{E}_0 \cos \left(\omega_0 t\right)$ to a medium. The Fourier transform is readily obtained as
$$
\begin{aligned}
\mathbf{E}(\omega) & =\frac{1}{2} \int_{-\infty}^{\infty} \mathbf{E}_0\left(e^{i \omega_0 t}+e^{-i \omega_0 t}\right) e^{-i \omega t} d t \\
& =\frac{1}{2} \int_{-\infty}^{\infty} \mathbf{E}_0\left(e^{i\left(\omega_0-\omega\right) t}+e^{-i\left(\omega_0+\omega\right) t}\right) d t \\
& =\pi \mathbf{E}_0\left(\delta\left(\omega-\omega_0\right)+\delta\left(\omega+\omega_0\right)\right).
\end{aligned}
$$
With our discussion above, we obtain the polarisation as

$$
\mathbf{P}(\omega)=\pi \varepsilon_0 \chi(\omega) \mathbf{E}_0\left(\delta\left(\omega-\omega_0\right)+\delta\left(\omega+\omega_0\right)\right)
$$
Transforming back gives us the polarisation as function of time:
$$
\begin{aligned}
\mathbf{P}(t) & =\frac{1}{2 \pi} \int_{-\infty}^{\infty} \mathbf{P}(\omega) e^{i \omega t} d \omega \\
& =\frac{\varepsilon_0}{2} \mathbf{E}_0\left(\chi\left(\omega_0\right) e^{i \omega_0 t}+\chi\left(-\omega_0\right) e^{-i \omega_0 t}\right)\\
&=\varepsilon_0 \mathbf{E}_0 \mathfrak{Re}\left[\chi\left(\omega_0\right) e^{i \omega_0 t}\right].
\end{aligned}
$$
where we used that the time-domain susceptibility is real, $\chi\left(-\omega_0\right)=\chi\left(\omega_0\right)^*.$ 
Therefore, we can see that $\left|\chi(\omega_0)\right|=\frac{P_0}{\varepsilon_0E_0}$ gives the amplitude of the polarisation density response, whereas the complex phase of $\chi\left(\omega_0\right)$ gives a phase shift in time. This is shown in the next figure:

![Attachments/Courses/2025 Quantum Electronics Gallmann/2 Propagation in Dispersive Media/01_Introduction_and_theoretical_foundation 9.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/2%20Propagation%20in%20Dispersive%20Media/01_Introduction_and_theoretical_foundation%209.webp)[[Courses/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=75&rect=583,279,814,476|•]]

Similarly, we obtain for the magnetisation:
$$
\mathbf{M}(t)=\mathbf{H}_0 \mathfrak{Re}\left[\chi_m\left(\omega_0\right) e^{i \omega_0 t}\right],
$$
which is shown in the next figure: 

![Attachments/Courses/2025 Quantum Electronics Gallmann/2 Propagation in Dispersive Media/01_Introduction_and_theoretical_foundation 10.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/2%20Propagation%20in%20Dispersive%20Media/01_Introduction_and_theoretical_foundation%2010.webp)[[Courses/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=76&rect=520,103,680,213|•]]

We will later see that the imaginary part of the susceptibility causes an attenuation of the wave via absorption. 

---
## 2.1 Origin of Dispersion
[[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=34&selection=125,0,127,30|•]] [[Courses/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=78&selection=0,0,0,30|•]]

### 2.1.1 Drude-Lorentz model

Let us start with a simple model, where we treat the electron charge of the atom as being connected with a spring to an ion. We assume that the ion mass $m_i$ is much greater than the electron mass $m_e,$ e.g. $m_e\ll m_i.$ This allows us to ignore the term for the ion movement. Then, we use the equation of motion of a simple damped harmonic oscillator:
$$
\frac{d^2 x}{d t^2}+\gamma \frac{d x}{d t}+\omega_0^2 x=F / m_e.
$$
Here, $x$ is the displacement. For the force term, we will simply assume that the force is proportional to the electric fields:
$$
F(t)=-qE(t).
$$
We ignore vector notation for now and assume $E(t)$ is the magnitude of the real electric field. We use $p=-qx$ for the dipole moment, and multiply by the number of dipoles per unit volume $N$  , such that we obtain 
$$
\frac{d^2 P(t)}{d t^2}+\gamma \frac{d P(t)}{d t}+\omega_0^2 P(t)=N q^2 E(t) / m_e,
$$
where $P=Np$ is the polarisation density. Next, we Fourier transform the equation to obtain

$$
-\omega^2 P(\omega)+i \gamma \omega P(\omega)+\omega_0^2 P(\omega)=N q^2 E(\omega) / m_e,
$$
which allows to solve for $P(\omega):$
$$
P(\omega)=\frac{N q^2 / m_e}{\omega_0^2-\omega^2+i \gamma \omega} E(\omega)
$$
Therefore, we obtain for the susceptibility:
$$
\chi(\omega)=\frac{N q^2 / \varepsilon_0 m}{\omega_0^2-\omega^2+i \gamma \omega}=\chi_0 \frac{\omega_0^2}{\omega_0^2-\omega^2+i \gamma \omega},
$$
where
$$
\chi_0=\frac{N q^2}{\varepsilon_0 m \omega_0^2}.
$$
We obtain the real and imaginary parts as 

$$
\begin{aligned}
& \mathfrak{Re}[\chi(\omega)] \equiv \chi^{\prime}(\omega)=\chi_0 \frac{\omega_0^2\left(\omega_0^2-\omega^2\right)}{\left(\omega_0^2-\omega^2\right)^2+(\gamma \omega)^2}, \\
& \mathfrak{Im}[\chi(\omega)] \equiv \chi^{\prime \prime}(\omega)=-\chi_0 \frac{\omega_0^2 \omega \gamma}{\left(\omega_0^2-\omega^2\right)^2+(\gamma \omega)^2}.
\end{aligned}
$$

Both functions are plotted in the next figure assuming that the damping is weak $\gamma\ll \omega_0:$

![Attachments/Courses/2025 Quantum Electronics Gallmann/2 Propagation in Dispersive Media/QE_script.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/2%20Propagation%20in%20Dispersive%20Media/QE_script.webp)[[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=36&rect=93,440,520,675|•]]

For high frequencies $\omega\gg\omega_0,$ the susceptibility becomes real, and asymptotically approaches zero. This means that overdriving the oscillator will make the polarisation be out of phase with the electric field by $\pi.$ 
For the case that $\omega=\omega_0,$ the the susceptibility is completely imaginary (pure phase shift) such that the polarisation is shifted by $\pi/2$ to the electric field. The height of the maximum is given by $Q\chi_0,$ where $Q=\omega_0/\gamma$ is the quality factor of the resonator. It quantifies how much energy is stored in the resonator compared to the losses per oscillation cycle. Reducing the damping $\gamma$ will make the peak narrower and higher. The same argumentation applies to the magnetisation density, but note that at optical frequencies, magnetic resonances are often not important.

Very often, we can represent real systems as collections of resonator with a distribution of resonance frequencies:
$$
\chi(\omega)=\sum_j \chi_0^{(j)} \frac{\omega_0^{(j)}}{\left(\omega_0^{(j)}\right)^2-\omega^2+i \gamma^{(j)} \omega}.
$$
These different resonances come from different orbitals, vibrational modes, electronic transitions, and so on$\dots$ 

### 2.1.2 Drude Model

A simplification of the Drude-Lorentz model is the Drude model, where free carriers experience no restoring force. Therefore, the resonance frequency is $\omega_0=0.$ Then, we can write
$$
m \frac{d^2 x}{d t^2}+m \gamma \frac{d x}{d t}=-e E_0 e^{i \omega t},
$$
where we have replaced the damping rate with a collision rate $\gamma.$ In this treatment the electron will bounce around the heavier, immobile ions, similar to a pinball machine. The solution of this equation is 
$$
x(t)=\frac{e}{m} \frac{E_0 e^{i \omega t}}{-\omega^2+i \gamma \omega}.
$$
Therefore, we obtain 
$$
\chi=-\frac{\omega_p^2}{\omega^2-i \gamma \omega},
$$
where $\omega_p=\sqrt{N e^2 / m \varepsilon_0}$ is the ==plasma frequency== and $N$ is the carrier concentration. We further find that 
$$
\begin{align}
&\mathfrak{Re}\left[\chi\right]=\chi^{\prime}=-\frac{\omega_p^2}{\omega^2+\gamma^2},\\ &\mathfrak{Im}\left[\chi\right]=\chi^{\prime \prime}=-\frac{\omega_p^2 \gamma}{\omega\left(\omega^2+\gamma^2\right)}.
\end{align}
$$
In the regime where $\omega \gg \gamma,$ the susceptibility is predominantly real and the permittivity becomes
$$
\varepsilon_r=1+\chi=1-\frac{\omega_p^2}{\omega^2-i \gamma \omega} \approx 1-\frac{\omega_p^2}{\omega^2}.
$$
This is the dispersion relation of the undamped free electron _plasma_. We can differentiate between different cases:
- For frequencies below the plasma frequency, we have $\varepsilon_r< 0,$ such that $n$ must be imaginary and then $k$ is imaginary as well. The wave does not propagate, but is attenuated within a metal.
- For frequencies above the plasma frequency, we have $\varepsilon_r>0,$ such that both $n$ and $k$ are real. The wave propagates with the plasmonic dispersion relation given above.
- For $\omega=\omega_p,$ we have that $\varepsilon_r=0$ and thus $n$ and $k$ vanish. In this case, the wave does not propagate in the medium. All energy is stored in an oscillation of the electric current density of free electrons in the material. This oscillation is called (volume/bulk) plasma oscillation, but often simply called 'plasmon'. 

Next, lets compare both the Drude-Lorentz and Drude model for the reflectivity
$$
r=\frac{\left(n^{\prime}+i n^{\prime \prime}-1\right)}{\left(n^{\prime}+i n^{\prime \prime}+1\right)},
$$
which is the Fresnel reflection coefficient for a wave impinging on an interface between a medium with refractive index $n$ and vacuum. 

![Attachments/Courses/2025 Quantum Electronics Gallmann/2 Propagation in Dispersive Media/QE_script 1.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/2%20Propagation%20in%20Dispersive%20Media/QE_script%201.webp)[[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=40&rect=112,436,506,688|•]]

To model silver, the fit is usually done with both models, e.g.
$$
\varepsilon=\varepsilon_{\text {drude }}+\varepsilon_{\text {Lorentz }},
$$
where we use the Drude-Lorentz model with multiple resonances. The Drude model alone is a good fit for the low frequency region, however at higher frequencies, contributions from Lorentz oscillators must be taken into account. 

Lastly, lets discuss a simple implication of the plasma frequency. Consider gold, which has high reflectivity above 600 nm wavelength, but poor (30%) reflectivity below. This implies that reflected white light appears orange, while transmitted light appears greenish. Superimposing both results again in white light. This can be understood considering that the sum of absorption, transmission and reflectance must be one. For a thin film of gold, the absorbance (for light in the visble) is however negligible, such that $T+R\approx 1$.

![Attachments/Courses/2025 Quantum Electronics Gallmann/2 Propagation in Dispersive Media/01_Introduction_and_theoretical_foundation 11.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/2%20Propagation%20in%20Dispersive%20Media/01_Introduction_and_theoretical_foundation%2011.webp)[[Courses/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=95&rect=426,233,709,407|•]]

In this framework, the colour of metals can be understood, by considering the effect of the plasma frequency on the reflectivity. 

---
## 2.2 Kramers-Kronig Relations
[[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=42&selection=173,0,175,28|•]]

From the section before, we have seen that the frequency dependence of the refractive index and absorption is related. Then, a dispersive material _must_ be absorptive and _must_ exhibit a frequency-dependent absorption coefficient. This statement extends to a more general rule, which is captured by the so-called Kramers-Kronig relation. Despite our very simplistic assumptions about the system so far (a single charge is attached to a rigid lattice), it can be shown that a linear response has important implications. 
This relation shows the connection between the real (dispersion) and imaginary part (absorption) of response function (susceptibility). This allows to compute one from the other. 
The Kramers-Kronig relation follows from two important 'assumptions' about linear systems:
1. The response function is real (in time), and
2. The response function is causal.

Then, we find the Kramers-Kronig relation to be
$$
\begin{aligned}
& \mathfrak{Re}[\chi(\omega)] \equiv \chi^{\prime}(\omega)=\frac{2}{\pi} \int_0^{\infty} \frac{\omega_1 \chi^{\prime \prime}\left(\omega_1\right)}{\omega_1^2-\omega^2} d \omega_1, \\
& \mathfrak{Im}[\chi(\omega)] \equiv \chi^{\prime \prime}(\omega)=\frac{2}{\pi} \omega \int_0^{\infty} \frac{\chi^{\prime}\left(\omega_1\right)}{\omega^2-\omega_1^2} d \omega_1.
\end{aligned}
$$

The response function can only be real is both $\mathbf{P}(t)$ and $\mathbf{E}(t)$ are real. This is a powerful relation: It allows to measure the full complex susceptibility if one measures one component at all frequencies. Practically, this is impossible, but usually measurements are taken away from resonances which interpolation in between. 

Consider that we send light through a medium and detect the transmitted intensity with a photodetector:

![Attachments/Courses/2025 Quantum Electronics Gallmann/2 Propagation in Dispersive Media/01_Introduction_and_theoretical_foundation 12.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/2%20Propagation%20in%20Dispersive%20Media/01_Introduction_and_theoretical_foundation%2012.webp)[[Courses/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=98&rect=81,180,503,372|•]]

If our goal is to find the susceptibility, we need to take two independent measurements at each frequency. Further, the photodetector can only measure intensity, and therefore phase information is lost, which encodes the refractive index information. However, recording the absorption as a function of frequency allows to reconstruct the refractive index using the Kramers-Kronig relation (or equivalently the complex susceptibility).

---
## 2.3 Equations in Frequency Domain
[[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=43&selection=281,0,283,39|•]] [[Courses/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=102&selection=0,36,0,36|•]]

Consider again the expressions for the displacement and magnetic field:
$$
\begin{align}
&\mathbf{D}(t)=\varepsilon_0 \mathbf{E}(t)+\mathbf{P}(t),\\
&\mathbf{B}(t)=\mu_0[\mathbf{H}(t)+\mathbf{M}(t)].
\end{align}
$$
Fourier transforming both equations results in
$$
\begin{align}
&\mathbf{D}(\omega)=\varepsilon(\omega) \mathbf{E}(\omega),\\
&\mathbf{B}(\omega)=\mu(\omega)\mathbf{H}(t).
\end{align}
$$
The permittivity and permeability are therefore both complex:
$$ 
\varepsilon(\omega)=1+\chi(\omega) \quad\text{and}\quad\mu(\omega)=1+\chi_m(\omega).
$$
Next, let us consider transforming the Maxwell equations to frequency space. For this, we note that 
$$
\partial_t\rightarrow i\omega.
$$
Therefore, for no free charges and free currents, we find:

| **Time Domain**                                                                              | $\longrightarrow$ | **Frequency Domain**                                                                |
| -------------------------------------------------------------------------------------------- | ----------------- | ----------------------------------------------------------------------------------- |
|                                                                                              |                   |                                                                                     |
| $\mathbf{\nabla} \cdot \mathbf{D}(\mathbf{r}, t) = 0$                                                 |                   | $\mathbf{\nabla} \cdot \mathbf{D}(\mathbf{r}, \omega) = 0$                                   |
| $\mathbf{\nabla} \cdot \mathbf{B}(\mathbf{r}, t) = 0$                                                 |                   | $\mathbf{\nabla} \cdot \mathbf{B}(\mathbf{r}, \omega) = 0$                                   |
| $\mathbf{\nabla} \times \mathbf{E}(\mathbf{r}, t) = -\frac{\partial \mathbf{B}(\mathbf{r}, t)}{\partial t}$ |                   | $\mathbf{\nabla} \times \mathbf{E}(\mathbf{r}, \omega) = -i \omega \mathbf{B}(\mathbf{r}, \omega)$ |
| $\mathbf{\nabla} \times \mathbf{H}(\mathbf{r}, t) = \frac{\partial \mathbf{D}(\mathbf{r}, t)}{\partial t}$  |                   | $\mathbf{\nabla} \times \mathbf{H}(\mathbf{r}, \omega) = i \omega \mathbf{D}(\mathbf{r}, \omega)$  |

It should be noted here that a nondispersive medium has an instantaneous response:
$$
\chi(t)=\frac{1}{2 \pi} \int_{-\infty}^{+\infty} \hat{\chi}(\omega) e^{i \omega t} d \omega=\frac{1}{2 \pi} \hat{\chi} \int_{-\infty}^{+\infty} e^{+i \omega t} d \omega=\hat{\chi} \cdot \delta(t).
$$

---
## 2.4 Helmholtz Equation
[[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=50&selection=4,0,7,16|•]] [[Courses/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=105&selection=0,18,0,17|•]] 

Let us start from Faradays's law and apply the curl operation:
$$
\begin{aligned}
& &\nabla \times (\nabla \times \mathbf{E})&=-\nabla \times \frac{\partial \mathbf{B}}{\partial t}=-\frac{\partial(\nabla \times \mathbf{B})}{\partial t} \\ \iff&
& \nabla(\nabla \cdot \mathbf{E})-\nabla^2 \mathbf{E}&=-\mu \frac{\partial(\nabla \times \mathbf{H})}{\partial t} \\ \iff&
& \nabla^2 \mathbf{E}&=\mu \frac{\partial}{\partial t}\left(\mathbf{j}_{\mathbf{f}}+\frac{\partial \mathbf{D}}{\partial t}\right).
\end{aligned}
$$

Next, assume again no free currents, and by using the harmonic ansatz for both electric and magnetic field allows us to obtain:
$$
\nabla^2 \mathbf{E}+\mu_0 \mu_r \varepsilon_0 \omega^2 \mathbf{E}=-\mu_0 \mu_r \varepsilon_0 \chi^{(1)} \omega^2 \mathbf{E},
$$
from which follows
$$
\nabla^2 \mathbf{E}+\mu \varepsilon \omega^2 \mathbf{E}=0.
$$
Finally, we obtain the Helmholtz equation:
$$
\nabla^2 \mathbf{E}(\mathbf{r}, \omega)=-\frac{\omega^2 n(\omega)^2}{c^2} \mathbf{E}(\mathbf{r}, \omega).
$$
Note that this is nothing else than the [[Courses/2025 Quantum Electronics Gallmann/1 Electromagnetic Theory of Light#1.5 Wave Equation\|wave equation]] in frequency domain. We have defined here the complex-valued refractive index as 
$$
n(\omega)=\sqrt{\mu(\omega)\varepsilon(\omega)}=n^\prime(\omega)+in^{\prime\prime}(\omega).
$$
This also makes the wavevector complex through $k(\omega)=n(\omega)\frac{\omega}{c}.$ It is not hard to guess that the solution are again monochromatic plane waves with frequency $\omega_1:$ 
$$
\mathbf{E}(\mathbf{r}, \omega)=\mathbf{C} \delta\left(\omega-\omega_1\right) e^{-i \mathbf{k}\left(\omega_1\right) \cdot \mathbf{r}}.
$$
We recover the more familiar form 
$$
\mathbf{E}(\mathbf{r}, t)=\tilde{\mathbf{E}}_0 e^{i\left(\omega_1 t-\mathbf{k}\left(\omega_1\right) \cdot \mathbf{r}\right)},
$$
if we set $\tilde{\mathbf{E}}_0=\mathbf{C} / 2 \pi.$ Next, we split the wavevector into real and imaginary parts

$$
\mathbf{k}(\omega)=\mathbf{k}^{\prime}(\omega)+i \mathbf{k}^{\prime \prime}(\omega),
$$
which results in
$$
\mathbf{E}(\mathbf{r}, t)=\tilde{\mathbf{E}}_0 e^{i\left(\omega_1 t-\mathbf{k}^{\prime}\left(\omega_1\right) \cdot \mathbf{r}\right)} e^{\mathbf{k}^{\prime \prime}\left(\omega_1\right) \cdot \mathbf{r}}.
$$
Therefore it becomes evident that the real part of the wavevector corresponds to an oscillating phase factor, whereas the imaginary part leads to a decay of the wave amplitude. This causes a loss of the energy carried by the wave as it moves through the medium. Since the imaginary part of the refractive index is negative, we have that 

$$
\mathbf{k}^\prime \parallel -\mathbf{k}^{\prime\prime},
$$  
meaning that they are antiparallel. We define the wavelength as the distance over which the phase oscillates once:
$$
\lambda=\frac{2\pi}{\left|\mathbf{k}^\prime(\omega)\right|}
$$
The phase velocity is given by 
$$
v_p(\omega)=\frac{c}{n^\prime(\omega)}.
$$
It describes the apparent speed that the phase of the oscillating part has while moving through the medium, in other words the speed at which the field nodes propagate. Similar to before, the wave's intensity is obtained by averaging over fast oscillations to be 
$$
I=\frac{1}{2 Z\left(\omega_1\right)}\left|\tilde{\mathbf{E}}_0\right|^2 e^{2 \mathbf{k}^{\prime \prime}\left(\omega_1\right) \cdot \mathbf{r}},
$$
with $Z(\omega)=\sqrt{\mu(\omega)/\varepsilon(\omega)}$ the complex impedance. We call
$$
\alpha(\omega)=2n^{\prime\prime}(\omega)\omega/c
$$
the attenuation/absorption factor. It is the inverse of the distance over which the intensity drops by $1/e.$ Note that for our notation, $n^{\prime \prime}$ is negative, and so is $\alpha$ and $k^{\prime \prime}$, such that the wave actually decays as it propagates. This effect is shown in the next figure:

![Attachments/Courses/2025 Quantum Electronics Gallmann/2 Propagation in Dispersive Media/01_Introduction_and_theoretical_foundation 13.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/2%20Propagation%20in%20Dispersive%20Media/01_Introduction_and_theoretical_foundation%2013.webp)[[Courses/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=109&rect=49,105,354,479|•]]

---
## 2.5 Refractive Index in Dispersive Media
[[Courses/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=112&selection=0,39,0,39|•]] [[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=43&selection=281,1,283,39|•]]

Again, let us stress that the frequency-dependence of the refractive index is inherently related to a corresponding dependence of the absorption. This is given by the Kramers-Kronig relation. While absorption resonances are quite local, refractive index changes often extend over a large frequency range. We have seen: If there is absorption _anywhere_, the refractive index becomes dispersive _everywhere_. This is shown in the next figure for three resonances:

![Attachments/Courses/2025 Quantum Electronics Gallmann/2 Propagation in Dispersive Media/01_Introduction_and_theoretical_foundation 14.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/2%20Propagation%20in%20Dispersive%20Media/01_Introduction_and_theoretical_foundation%2014.webp)[[Courses/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=113&rect=342,151,752,471|•]]

For most optically transparent media (meaning that they have low attenuation), the strongest electronic resonances lie at higher energies, corresponding to $\omega\ll\omega_0.$ Further assuming weak damping makes the imaginary part of the susceptibility become very small, while its real part approaches $\chi_0$. Since $\frac{\operatorname{d}\chi}{\operatorname{d}\omega}>0,$ and $n(\omega)=\sqrt{1+\chi(\omega)},$ this implies that the refractive index exhibits 'normal' dispersion, e.g.
 $$
 \begin{align}
 \text{Normal dispersion:}\quad&\frac{\operatorname{d}n}{\operatorname{d}\omega}>0,\\
 \text{Anomalous dispersion:}\quad&\frac{\operatorname{d}n}{\operatorname{d}\omega}<0. 
 \end{align}
 $$

On the resonance, the dispersion is anomalous, but returns back to normal at higher frequencies.
In practice, interpolation formulas are used to find the real part of the refractive index at any given frequencies. The imaginary part is often ignored, since optically transparent materials have small absorption, and thus $\mathfrak{Im}\left[n\right]$ is small. The most well known of these formulas is the ==Sellmeier equation==:
$$
n^2\left(\lambda_0\right)=1+\sum_j \frac{B_j \lambda_0^2}{\lambda_0^2-C_j},
$$
where the **vacuum** wavelength $\lambda_0=c/f$ is in units of micrometre. Usually two or three terms in the sum are considered. The similarity of the Sellmeier equation with the collection of Lorentz oscillator is due to the assumption in its derivation, that the resonances are delta functions, which is typically a good approximation far from these resonances. The coefficients $B_j$ and $C_j$ can then be understood as the strength of the resonance and the square of the resonance wavelength. 

Lastly, note that the Sellmeier equation severely lacks accuracy in the XUV range (short wavelengths) where the refractive index in any case is around 1. Therefore, these small deviations are denoted with 
$$
n=1-\delta-i\beta,
$$
where $\delta$ and $\beta$ are usually small for $\lambda\sim 0.1$ nm, unless close a resonance. In this wavelength range, a resonance corresponds to an ionisation threshold. 

---
## 2.6 Light Pulses
[[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=52&selection=135,0,140,5|•]] [[Courses/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=120&selection=0,0,0,25|•]]

Let us consider an important example a non-monochromatic wave. Light pulses, as opposed to monochromatic plane waves, are neither infinite in space nor infinite in time. Light pulses have finite time duration and thus also a finite spatial extent in the propagation direction. Still, they are treated as infinitely extended transverse to the propagation direction. It is easy to understand that they are a superposition of plane waves of varying wavelengths or frequencies:

![Attachments/Courses/2025 Quantum Electronics Gallmann/2 Propagation in Dispersive Media/QE_script 2.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/2%20Propagation%20in%20Dispersive%20Media/QE_script%202.webp)[[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=54&rect=144,439,478,671|•]]

In this case, we overlap a 'red' and a 'violet' wave to get the new 'blue' wave. Note that the colours are not related to the physical colours. It turns out that the more waves we add on top of each other, the 'narrower' the resulting pulses become:

![Attachments/Courses/2025 Quantum Electronics Gallmann/2 Propagation in Dispersive Media/QE_script 3.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/2%20Propagation%20in%20Dispersive%20Media/QE_script%203.webp)[[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=55&rect=142,106,483,349|•]]

The general effect is suppressing oscillations away from $t=m\cdot2\pi/\Delta\omega,$ where $m$ is an integer, and $\Delta\omega$ is the constant frequency difference between the waves. With many overlapping waves, and $\Delta\omega\ll\omega_a,$ with $\omega_a$ the centre frequency, we approach a train of equally spaced single-cycle pulses.  

**Constructive interference of two waves**
Let us take a step back, and consider the superposition of two waves at frequencies $\omega_1$ and $\omega_2.$ Then, the frequency spacing is $\Delta\omega=\omega_2-\omega_1,$ while the centre frequency is $\omega_a=\frac{\omega_1+\omega_2}{2}.$ We describe both waves as plane waves, and assume they are in phase at $t=0.$ 
$$
\begin{aligned}
\mathbf{E}_1(\mathbf{r}, t)=\mathbf{E}_0 \cos \left(\omega_1 t-\mathbf{k}\left(\omega_1\right) \mathbf{r}\right) \quad\text{and{\quad}}
\mathbf{E}_2(\mathbf{r}, t)=\mathbf{E}_0 \cos \left(\omega_2 t-\mathbf{k}\left(\omega_2\right) \mathbf{r}\right).
\end{aligned}
$$
Consider the case $\mathbf{r}=0,$ and we can easily see that there is constructive interference at $t=0.$ The resulting superposition may be rewritten as 
$$
\mathbf{E}(t)=2\mathbf{E}_0 \cos \left(\omega_a t\right) \cos (\Delta \omega t / 2).
$$
To obtain an expression for the evolution of this interference maximum, we solve the condition for constructive interference at $\Delta z,$ assuming propagation in z-direction. Therefore, we set their phases equal and obtain
$$
\begin{gathered}
\varphi_1=\varphi_2\\
\omega_1 \Delta t-k^{\prime}\left(\omega_1\right) \Delta z=\omega_2 \Delta t-k^{\prime}\left(\omega_2\right) \Delta z \\
\Longrightarrow \Delta z=\frac{\omega_2-\omega_1}{k^{\prime}\left(\omega_2\right)-k^{\prime}\left(\omega_1\right)} \Delta t.
\end{gathered}
$$
Then, it is natural to define the group velocity as
$$
\frac{\Delta z}{\Delta t} \approx \frac{d \omega}{d k^{\prime}},
$$
which can be understood as the (apparent) speed of the pulse envelope. In the limit of zero frequency difference, we obtain 
$$
v_g=\left.\frac{d \omega}{d k^{\prime}}\right|_{\omega=\omega_a}=\frac{c}{n^{\prime}\left(\omega_a\right)+\left.\omega_a \frac{d n^{\prime}}{d \omega}\right|_{\omega=\omega_a}}=\frac{c}{n^{\prime}-\lambda_0 \frac{d n^{\prime}}{d \lambda_0}}.
$$
Sometimes, we also use the so-called _group index_, defined as 
$$
n_g \equiv c / v_g=c \frac{d k^{\prime}}{d \omega}=n^{\prime}+\omega \frac{d n^{\prime}}{d \omega}=n^{\prime}-\lambda_0 \frac{d n^{\prime}}{d \lambda_0}.
$$
The group velocity in this form is also valid for many frequency components, as long as the group velocity does not change much over the spectral bandwidth of the pulse (e.g. all frequency components have similar 'speed'). Small deviations away from this ideal condition lead to pulse broadening. For transparent optical materials, the group velocity is usually smaller than the phase velocity. 

Lastly, consider the following figure:

![Attachments/Courses/2025 Quantum Electronics Gallmann/2 Propagation in Dispersive Media/Wave_group.gif|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/2%20Propagation%20in%20Dispersive%20Media/Wave_group.gif)

In this figure, the green points represent the group velocity, while red represents the phase velocity. Note, we defined the group velocity as the speed of the envelope maximum, but the figure is valid as well to show the difference, since it assumes no pulse broadening. 

---
## 2.7 Time-Bandwidth Product of Wavepackets
[[Courses/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=130&selection=0,0,0,27|•]] [[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=57&selection=86,0,88,39|•]]

A light pulse is formed by superimposing plane waves with slightly different frequencies. In a continuous form, this is exactly what the inverse Fourier transform does:
$$
\mathbf{E}(t)=\frac{1}{2 \pi} \int_{-\infty}^{\infty} \mathbf{E}(\omega) e^{i \omega t} d \omega.
$$
We generally call $\mathbf{E}(\omega)$  the spectrum of the pulse, indicating the amplitude and phase of each monochromatic constituent of the pulse. We call the spread of frequencies in the spectrum the bandwidth, and it is usually much smaller than the average/centre frequency of the pulse. The spectral power density is then 
$$
I(\omega)=\frac{1}{2Z}\left|\mathbf{E}(\omega)\right|^2.
$$
Now, it is clear that the electric field as function of frequency and the electric field as function of time are not independent of each other. This has an important implication, since it implies that there is a transform limit: There is a limit in the pulse duration for a given optical spectrum of a pulse. Consider the next figure, showing the intensity and spectrum:

![Attachments/Courses/2025 Quantum Electronics Gallmann/2 Propagation in Dispersive Media/01_Introduction_and_theoretical_foundation 18.webp](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/2%20Propagation%20in%20Dispersive%20Media/01_Introduction_and_theoretical_foundation%2018.webp)[[Courses/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=130&rect=156,187,762,346|•]]

The Fourier transform limit states that $\Delta t\cdot\Delta\omega$ is lower limited, and this limit depends on the pulse shape. Note that this is purely mathematical. We call the product of the two the _time-bandwidth product_, and it is specific to the pulse shape. Different pulse shapes have different lower limits for the time-bandwidth product. It turns out that a constant or linear (in frequency) phase gives the shortest pulse duration, and we call these _transform-limited pulses_. 

This implies that pulses which are not transform-limited, do not have a constant or linear phase across their bandwidth, and are longer than the transform-limited pulse. Therefore, these pulses have a time-dependent instantaneous oscillation frequency, and we call this a **chirp**. If $\varphi$ is the pulses phase, we can define a chirp as the time-dependence of 
$$
\omega(t)=\frac{\operatorname{d}\varphi}{\operatorname{d}t}.
$$
Consider a transform-limited (therefore unchirped) Gaussian pulse:

![Attachments/Courses/2025 Quantum Electronics Gallmann/2 Propagation in Dispersive Media/01_Introduction_and_theoretical_foundation 19.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/2%20Propagation%20in%20Dispersive%20Media/01_Introduction_and_theoretical_foundation%2019.webp)

The next figure shows a chirped Gaussian pulse:

![Attachments/Courses/2025 Quantum Electronics Gallmann/2 Propagation in Dispersive Media/01_Introduction_and_theoretical_foundation 20.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/2%20Propagation%20in%20Dispersive%20Media/01_Introduction_and_theoretical_foundation%2020.webp)[[Courses/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=132&rect=53,232,317,460|•]]

To really bring home the effect of a chirp, consider the difference between an unchirped (blue), and a chirped (orange) light pulse:

![Attachments/Courses/2025 Quantum Electronics Gallmann/2 Propagation in Dispersive Media/01_Introduction_and_theoretical_foundation 21.webp|700](/img/user/Attachments/Courses/2025%20Quantum%20Electronics%20Gallmann/2%20Propagation%20in%20Dispersive%20Media/01_Introduction_and_theoretical_foundation%2021.webp)[[Courses/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=132&rect=400,240,774,496|•]]

We can see that the pulse duration (FWHM) of the blue pulse is shorter than that of the orange pulse. If a chirp is positive, the 'red' part of the spectrum is faster than the 'blue' faster, while for negative chirp, 'blue' comes before 'red'. This depends on the sign of the GVD. 
Usually, dispersion is defined as
$$
D=-\frac{1}{v_g^2} \frac{d v_g}{d \lambda_0}=-\frac{\lambda_0}{c} \frac{d^2 n^{\prime}}{d \lambda_0^2},
$$
with its dimensions being time over distance squared. Often, the units ps/nm/km are used in telecommunications, where optical fibres can be kilometres long. The duration of the broadened pulse can then be obtained via
$$
\tau \approx \sqrt{\Delta t^2+\left(D \Delta \lambda_0 \Delta z\right)^2},
$$
where $\Delta t$ is the initial duration, $\Delta \lambda_0$ is the bandwidth expressed in wavelengths (and units of nm) and $\Delta z$ is the propagation distance, expressed in km.

---
## 2.8 Phase, Group and Front Velocity
[[Courses/2025 Quantum Electronics Gallmann/01_Introduction_and_theoretical_foundation.pdf#page=133&selection=0,0,0,33|•]] [[Courses/2025 Quantum Electronics Gallmann/QE_script.pdf#page=58&selection=99,0,101,31|•]]

The phase velocity of XUV light can exceed the speed of light in vacuum. The group velocity can do the same near a resonance, where $dn/d\omega$ can be very negative, which can enforce $n_g<1,$ and thus $v_g>c.$ However, there is no reason to worry: The principles of relativity are not broken. Neither the phase nor the group velocity are good measures for the speed of information transmission. The phase velocity only describes the velocity of the zero node, which is not a good measure of information speed, since it is easy to guess the time of another zero-crossing by knowing the centre frequency and an earlier crossing time. On the other hand, the group velocity is the velocity of the envelope. It is also not a good measure, since for analytic pulse shapes, we already know all the amplitudes and phases at each time. 

The maximum speed of information is the front velocity of a pulse, which is the speed of a non-analytic feature. It is always equal to $c,$ independent of the medium. 

---