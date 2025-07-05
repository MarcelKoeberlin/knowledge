---
{"dg-publish":true,"permalink":"/website/website-github-clone/src/site/notes/notes/crystal-optics-in-intense-light-fields/7-nonlinear-light-control-of-matter/","updated":"2025-07-03T20:20:02.054+02:00"}
---


Jump back to ==[[Notes/Crystal Optics in Intense Light Fields/Crystal Optics in Intense Light Fields#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

---
# 7 Nonlinear Light - Control of Matter
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Lecture1_Horstmann.pdf#page=1| ]]

So far, we have harnessed nonlinear light-matter interaction as probes of electronic, lattice and magnetic structure. Next, we will discuss how nonlinear light-matter interaction can be used to control the lattice and electronic structure. When we say 'matter', what we mean in this context are the electronic and vibrational states of the material that we are interested in. This modifies the properties of light, defined through its frequency, amplitude and phase and so on. Then, the light itself controls the properties of the matter again. We will discuss two cases, the first being the optical control of vibronic states ([[Impulse stimulated Raman scattering\|Impulse stimulated Raman scattering]]), and optical control of electronic states ([[Floquet engineering\|Floquet engineering]]).  

---
## Basis of Raman Scattering
Raman scattering is a type of inelastic scattering of light in matter. It is a common spectroscopy technique. If light of frequency $\omega_0$ is incident on some material, the scattered light frequencies are 
- Stokes: $\omega_0-\omega_\text{ph},$
- Rayleigh: $\omega_0,$
- Anti-Stokes: $\omega_0+\omega_\text{ph}.$
 We can see that these spectroscopically observed frequencies contain sidebands different from the frequency of the excitation source. This is schematically shown in the following figure ([source](https://www.edmundoptics.com/knowledge-center/application-notes/lasers/basic-principles-of-raman-scattering-and-spectroscopy/)):
 
![[Attachments/Pasted image 20250613121616.phg\|700]]
 
 Beware of a common misconception: Light is scattered directly at the nuclei, however this is typically not the core. We can understand the frequency of the scattered light by considering the vibrational ground- and excited state, and the virtual states due to light-matter interaction. They are virtual as they are no eigenstate of the Hamiltonian, and therefore very short-lived ([source](https://www.doitpoms.ac.uk/tlplib/raman/raman_scattering.php)):
 
![[Attachments/Pasted image 20250613122049.phg\|700]]

The vibrational state spans an energy range of ~meV, while the virtual states lie ~eV above them. Since the frequency of light in the visible regime ($\sim 10^3$ THz) is three orders of magnitude above that of phonons ($\sim 10^0$ THz), the nuclei can not follow the electric field of light adiabatically. However, electrons can such that all spectroscopic information in Raman scattering and all control enabled by coherent Raman schemes relies on electron-phonon coupling. 

### Classical Model of Spontaneous Raman Scattering
We give a short recap of IR and Raman-active mode, by considering the polarisability $\alpha(t)$ and the dipole $p(t).$ Consider the three cases ([source](https://www.nature.com/articles/s43586-021-00019-0)):

![[Attachments/Pasted image 20250613143043.phg\|700]]

|                      | Polarisability change $\left(\frac{\partial\alpha}{\partial Q}\right)_0$ | Dipole change$\left(\frac{\partial p}{\partial Q}\right)_0$ |
| -------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------- |
| Symmetrical stretch  | $\neq0,$ Raman-active                                                    | $0,$ Infrared-inactive                                      |
| Asymmetrical stretch | $0,$ Raman-inactive                                                      | $\neq0,$ infrared-active                                    |
| Bending              | $0,$ Raman-inactive                                                      | $\neq0,$ infrared-active                                    |

Consider that at finite temperature, both IR- and Raman-active modes are occupied. Then, there are random oscillations along mode coordinates. For IR-active modes, fluctuating dipoles can **directly** interact with external light field, like a driven harmonic oscillator. For Raman-active modes, the electric field **induces** a dipole a dipole $p(t)=\alpha(t)E(t),$ where $\alpha(t)$ oscillations at the phonon frequency (since $\partial_Q\alpha(t)\neq0$), creating frequency sidebands. 

In a classical theoretical model, we describe the effect of nuclear motion by connecting the dipole moment with the polarisability, so $p(t)=\alpha(t)E(t).$ Expanding $\alpha(t)$ in terms of the phonon coordinates or amplitude $Q(t):$ 
$$
\alpha(t)=\alpha_0+\underbrace{\left(\frac{\partial \alpha}{\partial Q}\right)_0}_{\substack{\text{Coupling strength between} \\ \text{nuclear and electric coor.:}\\\text{"Raman tensor"}}} \cdot\underbrace{Q(t)}_{\substack{\text{Time-dependant}\\\text{vibrational amplitude}}}+\mathcal{O}\left(Q(t)^2\right).
$$
We then model the nuclear motion in terms of classical harmonic oscillators:
$$
\begin{aligned}
Q(t)=&  2  Q_0 \cos (\omega_{\text{ph}} t+\phi)\\=&Q_0\left[e^{-i(\omega_{\text{ph}} t+\phi)}+ e^{+i (\omega_{\text{ph}} t+\phi)}\right].
\end{aligned}
$$
The incoming electric field is written as a monochromatic plane wave, so
$$
E(t)=E_0 e^{-i \omega_1 t}+\mathrm{h.c.}
$$
Then, the dipole moment is 
$$
\begin{aligned}
p(t)= & \underbrace{\alpha_0 E_0 e^{-i \omega_1 t}+\mathrm{h.c.}}_\text{Rayleigh}\\&+\underbrace{E_0\left(\frac{\partial \alpha}{\partial Q}\right)_0 Q_0\left[e^{-i\left(\left(\omega_1-\omega_{p_n}\right) t-\phi\right)} +e^{-i\left(\left(\omega_1+\omega_\text{ph}\right) t+\phi\right)}+\mathrm{h.c.}\right]}_\text{Stokes and Anti-Stokes}.
\end{aligned}
$$
Note that the contribution strongly depends on the symmetry of the mode, leading to Raman selection rules. An instructive example of sideband generation is the case similar to [[Notes/Ultrafast Laser Physics/6 Active Modelocking#6 Active Modelocking\|active modelocking]]: A simple laser cavity with a gain crystal will emit (assuming a single mode) only at a single frequency $\omega_0,$ which is the frequency of the fundamental wave within the cavity. Adding an element that implements a sinusoidally modulated loss function (such as an AOM) at frequency $w_\text{mod},$ the emitted spectrum now contains sidebands at $\omega_0\pm\omega_\text{mod}.$ The comb stretches over $\Delta\omega,$ such that the pulse length is inversely proportional to $\Delta \omega.$ We will see [[later\|later]] that both spontaneous and stimulated Raman scattering are effectively third-order nonlinear processes:
$$
P(t)=\varepsilon_0[\underbrace{\chi^{(1)} E(t)}_{p^{(1)}}+\underbrace{\chi^{(2)} E(t)^2}_{S H G}+\underbrace{\chi^{(3)} E(t)^3}_{\text{Raman }\sim p^{(3)}}+ \mathcal{O}\left(E(t)^4\right)].
$$
Spontaneous Raman (nonresonant) is a very weak effect: Comparing of the external field to the binding potential of atoms, we find that $\chi^{(3)}\approx\frac{\chi^{(1)}}{E^2_\text{atom}}\approx 3\cdot10^{-15}.$ In spontaneous Raman, the radiation is neither directed nor coherent, but instead emitted by unsynchronised dipoles. Therefore, since we are searching for a Raman process with significantly higher efficiency and coherence, we want **stimulated Raman scattering**. 

### Stimulated Raman Scattering

We consider a two-step model:
- **Step 1**: Two incoming fields induce oscillations in the electron cloud, such that the effective force is along the vibrational degree of freedom. A nuclear mode is driven.
- **Step 2**: Driving the nuclear mode is a spatially coherent modulation of the refractive properties of the material. The third light field propagating through the material experiences this modulation, which leads to sideband generation.

Lets consider **step 1** in more detail: We model the electric field by 
$$
E_\mathrm{i}(t)=E_\mathrm{0,i}e^{-i\omega_it}+\mathrm{h.c.}\quad\text{with}\quad\omega_1>\omega_2\gg \omega_\text{ph}.
$$
The nuclear mode is not in resonance with $\omega_1,\omega_2,$ however the electron cloud may be in resonance. For sufficiently strong fields, there is [[Notes/Crystal Optics in Intense Light Fields/5 Nonlinear Optics#5.1 Microscopy for Nonlinear Optics\|difference-frequency generation]] between $\omega_1$ and $\omega_2$ at $\Omega=\omega_1-\omega_2.$ This induces an oscillating dipole close to $\omega_\text{ph}.$ The electric field is then 
$$
\begin{alignat*}{2}
E^2 =& \left|E_1(t)+E_2(t)\right|^2\\=& \quad E_{0,1}^2 \exp(-2i \omega_1 t) + E_{0,2}^2 \exp(-2i \omega_2 t) + \text{h.c.} &&\qquad \text{SHG} \\
& + 2|E_{0,1}|^2 + 2|E_{0,2}|^2 &&\qquad \text{Optical Rectification} \\
& + 2 E_{0,1} E_{0,2} \exp\left[-i (\omega_1 + \omega_2) t\right] + \text{h.c.} &&\qquad \text{SFG} \\
& + 2 E_{0,1} E_{0,2}^* \exp\left[-i (\omega_1 - \omega_2) t\right] + \text{h.c.} &&\qquad \text{DFG}
\end{alignat*}
$$

The energy of a Raman-active mode in an electric field that is oscillating is 
$$
V=-\frac{1}{2}\alpha(Q)E(t)=-\frac{1}{2}(\alpha_0+\underbrace{\left(\frac{\partial \alpha}{\partial \alpha}\right)_0}_{\substack{\text{electron-phonon}\\ \text{coupling}}} Q+\ldots) \cdot E(t)^2.
$$
Therefore, the Raman force at the driving frequency $\Omega$ (DFG term) is 
$$
\begin{aligned}
F & =\frac{1}{2}\left(\frac{\partial \alpha}{\partial Q}\right)_0 E^2(\omega=\Omega) \\
 & =\left(\frac{\partial \alpha}{\partial Q}\right)_0\left[E_{0,1} E_{0,2}^* e^{-i\Omega t}+\mathrm{h.c.}\right],
\end{aligned}
$$
which is the force acting on the phonon mode. In other words, the Raman force on the phonon mode is DFG of $E_1(t)$ and $E_2(t).$ To find the time-dependent phonon amplitude $Q(t),$ we use the model of a driven dampled harmonic oscillator. The equation of motion is then
$$
\frac{\mathrm{d}^2 Q(t)}{\mathrm{d} t^2}+2 \gamma \frac{\mathrm{d} Q(t)}{\mathrm{d} t}+\omega_\text{ph}^2 Q(t)=\frac{1}{m}\left(\frac{\partial \alpha}{\partial Q}\right)_0\left[E_{0,1} E_{0,2}^* e^{-i \Omega t}+\mathrm{h.c.}\right].
$$
Our Ansatz is $Q(t)=Q(\Omega)e^{-i\Omega t}+\mathrm{h.c.},$ such that we obtain 
$$
\begin{aligned}
{\left[\left(\omega_{p_1}^2-\Omega^2\right)-2 i \gamma \Omega\right] \hat{Q}(\Omega) e^{-i \Omega t}+\mathrm{h.c.}}  =\frac{1}{m}\left(\frac{\partial \alpha}{\partial Q}\right) \cdot\left[E_{0,1} E_{0,2}^* e^{-i \Omega t}+\mathrm{h.c.}\right].
\end{aligned}
$$
The solution is found to be
$$
\hat{Q}(\Omega)=\frac{1}{m}\left(\frac{\partial \alpha}{\partial Q}\right)_0 \frac{E_{0,1} E_{0,2}^*}{\left(\omega_\text{ph}^2-\Omega^2\right)-2 i \gamma \Omega},
$$
which completes step 1: The DFG components of the incident light fields $\omega_1$ and $\omega_2$ coherently drives a phonon mode. 

To account for **step 2**, we model the impact of coherent nuclear motion in an incoming light field. Thus, we find

$$
P(t)=N \alpha E(t)=N\left[\alpha_0+\left(\frac{\partial \alpha}{\partial Q}\right)_0 Q(t)+\ldots\right]\left[E_1(t)+E_2(t)\right].
$$
We now consider the relevant term $P_R(t)\sim \left(\frac{\partial \alpha}{\partial Q}\right)_0 Q(t)$:
$$
\begin{aligned}
P_R(t) =\left[\frac{N}{m}\left(\frac{\partial \alpha}{\partial Q}\right)_0 \frac{1}{\left(\omega_0^2-\Omega^2\right)-2 i \gamma\Omega}\right]&\left[E_{0,1} E_{0,2}^* \exp (-i \Omega t)+\mathrm{h.c.}\right] \\
& \cdot\left[E_{0,1} \exp \left(-i \omega_1 t\right)+E_{0,2} \exp \left(-i \omega_2 t\right)+\mathrm{h.c.}\right].
\end{aligned}
$$
There are now two polarisation terms:
$$
P_\text{cs}(t)=\frac{N}{m}\left(\frac{\partial \alpha}{\partial Q}\right)_0^2 \frac{E_1^* E_2^2}{\left(\omega_\text{ph}^2-\Omega^2\right)-2 i \gamma \Omega} \exp \left(-i \omega_\text{cs} t\right)+\mathrm{h.c.}
$$
and
$$
P_\text{as}(t)=\frac{N}{m}\left(\frac{\partial \alpha}{\partial Q}\right)_0^2 \frac{E_1^2 E_2^*}{\left(\omega_\text{ph}^2-\Omega^2\right)-2 i \gamma \Omega} \exp \left(-i \omega_\text{as} t\right)+\mathrm{h.c.}.
$$
These are the source the Maxwells equations. This allows defining the  nonlinear Raman (third order) suscepibility 
$$
\chi_\text{NL}(\Omega)=\frac{N}{6 m \varepsilon_0}\left(\frac{\partial \alpha}{\partial Q}\right)_0^2 \frac{1}{\left(\omega_\text{ph}^2-\Omega^2\right)-2 i \gamma \Omega},
$$
and at last we obtain
$$
\begin{aligned}
& P\left(\omega_1\right)=6 \varepsilon_0 \chi_\text{NL}^*(\Omega)\cdot\left|E_2\right|^2 E_1, \\
& P\left(\omega_2\right)=6 \varepsilon_0 \chi_\text{NL}^*(\Omega)\cdot\left|E_1\right|^2 E_2 ,\\
& P\left(\omega_\text{cs}\right)=6 \varepsilon_0 \chi_\text{NL}^*(\Omega) \cdot E_2^2 E_1^* ,\\
& P\left(\omega_\text{as}\right)=6 \varepsilon_0 \chi_\text{NL}^*(\Omega)\cdot E_1^2 E_2.
\end{aligned}
$$
The key takeway is that stimulated Raman is a third order process, meaning that $\chi_\text{NL}^*$ is of third order. The chain of proportionalities dictates then
$$
I_{\omega_1}\sim |E_{\omega_1}|^2\sim |P_{\omega_1}|^2\sim(|E_2|^2E_1)^2\sim E^6.
$$
Light can thus be used to control and excite coherent vibrational motion. 

---
## Raman-Active Phonon Modes by Impulse Stimulated Raman Scattering (ISRS)




