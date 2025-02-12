---
{"dg-publish":true,"permalink":"/notes/plasmonics/5-localised-surface-plasmons/","hide":"true","updated":"2025-02-12T17:32:04.000+01:00"}
---

Jump back to chapter selection: ==[[Notes/Plasmonics/Plasmonics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Notes/Plasmonics/5 Localised Surface Plasmons#5.1 Normal Modes of Sub-Wavelength Metal Particles\|5.1 Normal Modes of Sub-Wavelength Metal Particles]]
- [[Notes/Plasmonics/5 Localised Surface Plasmons#5.2 Beyond the Quasi-Static Approximation and Plasmon Lifetime\|5.2 Beyond the Quasi-Static Approximation and Plasmon Lifetime]]
- [[Notes/Plasmonics/5 Localised Surface Plasmons#5.3 Coupling Between Localised Plasmons\|5.3 Coupling Between Localised Plasmons]]
- [[Notes/Plasmonics/5 Localised Surface Plasmons#5.4 Void Plasmons and Metallic Nanoshells\|5.4 Void Plasmons and Metallic Nanoshells]]
- [[Notes/Plasmonics/5 Localised Surface Plasmons#5.5 Localised Plasmons and Gain media\|5.5 Localised Plasmons and Gain media]]

---
# 5 Localised Surface Plasmons 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=82&selection=2,0,2,26|•]]

The second fundamental excitation in plasmonics is the so-called localized surface plasmons. In contrast to the propagating SPPs already discussed, these are non-propagating excitations of the conduction electrons coupled to the electromagnetic field.

---
## 5.1 Normal Modes of Sub-Wavelength Metal Particles 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=83&selection=10,0,12,46|•]]

The interaction of a particle of size $d$ with light of wavelength $\lambda$ can be analyzed using the simple _quasi-static approximation_, provided that $d \ll \lambda$. In this case, the phase of the field is practically constant over the particle volume, reducing the problem to the interaction of a particle with an electrostatic field. The harmonic time dependence can then be added to the solution once the field distributions are known. 

Consider the most convenient geometry for analytical treatment: a homogeneous, isotropic sphere of radius $a$ located at the origin in a uniform, static electric field $\textbf{E} = E_0\hat{\textbf{z}}$. The surrounding medium is isotropic and non-absorbing with dielectric constant $\varepsilon_m$. For simplicity, assume that the dielectric response is a simple complex number $\varepsilon$.

![Attachments/Notes/Plasmonics/5 Localised Surface Plasmons/Plasmonics - Fundamentals and Applications 21.webp|700](/img/user/Attachments/Notes/Plasmonics/5%20Localised%20Surface%20Plasmons/Plasmonics%20-%20Fundamentals%20and%20Applications%2021.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=83&rect=107,91,328,188|•]]

In this electrostatic approach, the interest lies in solving the Laplace equation for the potential: 
$$
\nabla^2\Phi = 0.
$$
From this, the electric field can be calculated as $\textbf{E} = -\nabla\Phi$. The general solution is of the form 
$$
\Phi(r, \theta) = \sum_{l=0}^{\infty}\left[A_l r^l + B_l r^{-(l+1)}\right] P_l(\cos \theta),
$$
where $P_l(\cos \theta)$ are the Legendre polynomials of order $l$, and $\theta$ is the angle between the position vector $\mathbf{r}$ at point P and the z-axis. Enforcing boundary conditions, the solution for the potential inside and outside the sphere is obtained as:
$$
\begin{aligned}
\Phi_{\text{in}} & = -\frac{3 \varepsilon_m}{\varepsilon + 2 \varepsilon_m} E_0 r \cos \theta, \\
\Phi_{\text{out}} & = -E_0 r \cos \theta + \frac{\varepsilon - \varepsilon_m}{\varepsilon + 2 \varepsilon_m} E_0 a^3 \frac{\cos \theta}{r^2}.
\end{aligned}
$$

The second equation, $\Phi_{\text{out}}$, describes the superposition of the applied field and that of a dipole located at the particle center. By introducing the dipole moment $\mathbf{p}$, it can be rewritten as:
$$
\begin{aligned}
\Phi_{\text{out}} & = -E_0 r \cos \theta + \frac{\mathbf{p} \cdot \mathbf{r}}{4 \pi \varepsilon_0 \varepsilon_m r^3}, \\
\mathbf{p} & = 4 \pi \varepsilon_0 \varepsilon_m a^3 \frac{\varepsilon - \varepsilon_m}{\varepsilon + 2 \varepsilon_m} \mathbf{E}_0.
\end{aligned}
$$

The applied field induces a dipole moment inside the sphere with magnitude proportional to $\left|\mathbf{E}_0\right|$. By introducing the polarizability $\alpha$, defined as $\mathbf{p} = \varepsilon_0 \varepsilon_m \alpha \mathbf{E}_0$, the polarizability becomes:
$$
\alpha = 4 \pi a^3 \frac{\varepsilon - \varepsilon_m}{\varepsilon + 2 \varepsilon_m}.
$$

This is the main result of this section: the complex polarizability of a small sphere of sub-wavelength diameter in an electrostatic potential. Assuming a Drude form for the dielectric response of silver, we find:

![Attachments/Notes/Plasmonics/5 Localised Surface Plasmons/Plasmonics - Fundamentals and Applications 22.webp|700](/img/user/Attachments/Notes/Plasmonics/5%20Localised%20Surface%20Plasmons/Plasmonics%20-%20Fundamentals%20and%20Applications%2022.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=85&rect=47,109,391,223|•]]

The polarisability experiences a resonant enhancement under the condition that $\varepsilon + 2\varepsilon_m$ is minimised. For a slowly varying $\mathfrak{Im}(\varepsilon)$, this reduces to:
$$
\mathfrak{Re}(\varepsilon(\omega)) = -2\varepsilon_m.
$$
This is known as the Fröhlich condition, and the associated mode is the _dipole surface plasmon_. For our problem, this criterion is met at $\omega_0 = \omega_p / \sqrt{3}$. The resonance strongly depends on the dielectric environment, with a red-shift as $\varepsilon_m$ increases. By calculating the electric field as $\textbf{E} = -\nabla\Phi$, the resonant $\alpha$ implies a resonant enhancement of both the internal and dipolar ($E_{\text{out}}$) fields. This enhancement is the foundation for many promising applications of plasmonics.

For a small sphere ($a \ll \lambda$), its representation as an ideal dipole remains valid in the quasi-static regime, allowing for time-varying fields but neglecting spatial retardation effects over the particle volume. Under plane-wave illumination:
$$
\textbf{E}(\textbf{r}, t) = E_0 e^{-i\omega t},
$$
the fields induce an oscillating dipole moment:
$$
p(t) = \varepsilon_0 \varepsilon_m \alpha E_0 e^{-i\omega t}.
$$
The radiation of this dipole leads to scattering of the plane wave by the sphere, represented as radiation by a point dipole. Resonantly enhanced polarizability $\alpha$ also increases the efficiency of light scattering and absorption by the nanoparticle. The cross sections for scattering and absorption scale as:
$$
\begin{aligned}
C_{\text{sca}} & \sim a^6, \\
C_{\text{abs}} & \sim a^3.
\end{aligned}
$$

Thus, absorption dominates over scattering for smaller particles. The explicit expression for the extinction cross-section in the quasi-static limit is:
$$
C_{\text{ext}} = C_{\text{abs}} + C_{\text{sca}} = 9 \frac{\omega}{c} \varepsilon_m^{3/2} V \frac{\varepsilon_2}{\left[\varepsilon_1 + 2\varepsilon_m\right]^2 + \varepsilon_2^2}.
$$

This is illustrated for a silver sphere:

![Attachments/Notes/Plasmonics/5 Localised Surface Plasmons/Plasmonics - Fundamentals and Applications 23.webp|700](/img/user/Attachments/Notes/Plasmonics/5%20Localised%20Surface%20Plasmons/Plasmonics%20-%20Fundamentals%20and%20Applications%2023.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=88&rect=111,450,321,603|•]]

Despite assuming a spherical shape, this special case describes the basic physics of localized surface plasmon resonances well. For ellipsoidal particles with semi-axes:
$$
a_1 \leq a_2 \leq a_3,
$$
spheroidal nanoparticles exhibit two spectrally separated plasmon resonances, corresponding to conduction electron oscillations along their major or minor axes. Oscillations along the major axis exhibit significant red-shifts compared to a sphere. _Mie Theory_ provides a complete theory for the scattering and absorption of electromagnetic radiation by a sphere.

---
## 5.2 Beyond the Quasi-Static Approximation and Plasmon Lifetime 
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=90&selection=49,0,52,8|•]]

We now consider two regimes beyond the quasi-static approximation:
1. Larger particles, where retardation effects become significant.
2. Very small particles ($a < 10$ nm), where particle dimensions are smaller than the mean free path of oscillating electrons.

**For larger particles**, the breakdown of the quasi-static approximation arises from the size parameter:
$$
x = \frac{\pi a}{\lambda_0}.
$$
Expanding the first TM mode of Mie theory for a sphere of volume $V$ yields:
$$
\alpha_{\text{Sphere}} = \frac{1 - \frac{1}{10}\left(\varepsilon + \varepsilon_m\right)x^2 + O(x^4)}{\frac{1}{3} + \frac{\varepsilon_m}{\varepsilon - \varepsilon_m} - \frac{1}{30}\left(\varepsilon + 10 \varepsilon_m\right)x^2 - i\frac{4 \pi^2 \varepsilon_m^{3/2} V}{3\lambda_0^3} + O(x^4)} V.
$$

The quadratic terms in $x$ account for retardation effects and shift the plasmon resonance to lower energies. This redshift can be intuitively understood as the increasing distance between charges at opposite particle interfaces reduces the restoring force, lowering the resonance frequency. Interband transitions also decrease as the resonance moves away from the interband transition edge. [[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=91&selection=40,15,50,4|•]]

The quadratic term in the denominator also increases the polarisability, thereby reducing the influence of absorption due to the imaginary part of $\varepsilon$. However, this increase is counteracted by a new, fully imaginary term, known as radiation damping, which arises from the direct radiative decay of the coherent electron oscillation into photons. Radiation damping is the primary cause of the weakening of the dipole plasmon resonance as the particle volume increases. Consequently, as the particle volume grows, the strength of the non-radiative decay pathway (absorption) decreases, leading to significant broadening of the resonance. 

To summarise, the plasmon resonance beyond the quasi-static regime is damped by two competing processes: radiative decay into photons, which dominates for larger particles, and non-radiative decay due to absorption:

![Attachments/Notes/Plasmonics/5 Localised Surface Plasmons/Plasmonics - Fundamentals and Applications 24.webp|700](/img/user/Attachments/Notes/Plasmonics/5%20Localised%20Surface%20Plasmons/Plasmonics%20-%20Fundamentals%20and%20Applications%2024.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=91&rect=108,520,329,618|•]]

Non-radiative decay occurs through the creation of electron-hole pairs via intraband excitations within the conduction band or interband transitions from lower-lying d-bands to the sp conduction band (for noble metals). These two damping processes can be incorporated into a simple two-level model of the plasmon resonance. The homogeneous linewidth $\Gamma$ of the plasmon resonance can be related to the internal damping processes by introducing a dephasing time $T_2$:
$$
\Gamma=\frac{2\hbar}{T_2}.
$$
By analogy with dielectric resonators, the strength of a plasmon resonance can be expressed using the quality factor $Q = E_{\text{res}} / \Gamma$, where $E_{\text{res}}$ is the resonant energy.  

Dephasing of the coherent excitation occurs due to either energy decay or scattering events that do not change the electron energy but alter its momentum. This is expressed by relating the dephasing time to the population decay or decay time $T_1$, which describes both radiative and non-radiative energy loss processes. Another important timescale is the pure dephasing time $T^*_2$, which arises from elastic collisions:
$$
\frac{1}{T_2}=\frac{1}{2T_1}+\frac{1}{T^*_2}.
$$
Generally, $T^*_2 \gg T_1$, leading to $T_2 \approx 2T_1$, which is typically on the order of 5 to 10 fs for silver nanoparticles.

**For very small particles** ($a < 10$ nm), an additional effect, loosely termed chemical interface damping, must be considered. The dephasing rate of the oscillation increases due to elastic scattering at the particle surface, as the particle size is much smaller than the electron mean free path. This explains the observed decrease in decay time for small silver nanoparticles. 

For nanoparticles smaller than 1 nm, quantum effects become significant, making a purely classical treatment insufficient. Why only below 1 nm? The conduction electron concentration in metals is high, but when the absolute number of electrons is small, the energy gained by individual electrons per incident excitation becomes comparable to the thermal energy $k_B T$. In this regime, the notion of a plasmon as a coherent electron oscillation breaks down.

---
## 5.3 Coupling Between Localised Plasmons
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=97&selection=164,0,166,35|•]]

The localised plasmon resonance of a single metallic nanoparticle can be shifted in frequency from the Fröhlich frequency $\mathfrak{Re}[\varepsilon(\omega)]=-2 \varepsilon_m$ by changing particle shape and size. In particle ensembles, additional shifts are expected to occur due to electromagnetic interactions between the localised modes. For small particles, these interactions may be treated as an ensemble of interacting dipoles. We will treat these effects only for _ordered_ metal nanoparticle arrays. To justify the dipolar approximation, we assume $a\ll d$, where $d$ is the interparticle spacing. We distinguish two regimes:
**For closely spaced particles $d\ll \lambda$**: Near-field interactions dominate with a distance dependence of $d^{-3}$. The particle array may be described as an array of point dipoles interacting via their near-field. Scattering is drastically suppressed and fields are highly localised. 

We can intuitively understand why interparticle coupling will lead to shifts in the spectral position of the plasmon resonance compared to the case of an isolated particle. Consider the next figure:

![Attachments/Notes/Plasmonics/5 Localised Surface Plasmons/Plasmonics - Fundamentals and Applications 25.webp|700](/img/user/Attachments/Notes/Plasmonics/5%20Localised%20Surface%20Plasmons/Plasmonics%20-%20Fundamentals%20and%20Applications%2025.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=99&rect=116,464,312,620|•]]

Using the simple approximation of an array of interacting point dipoles, the direction of the resonance shifts for in-phase illumination can be determined by considering the Coulomb force associated with the polarisation of the particles. The restoring force acting on the oscillating electrons of each particle in the chain is either increased or decreased by the charge distribution of neighbouring particles. Depending on the polarisation direction of the exciting light, this leads to a blue-shift of the plasmon resonance for transverse mode excitation (upper part), and to a red-shift for longitudinal mode excitation (lower part).   

The next figure shows the plasmon resonance peak for a chain of closely space gold nanoparticles as function of the interparticle spacing. The dotted lines show a $d^{-3}$ dependence of the coupling expected from a point-dipole model. 

![Attachments/Plasmonics - Fundamentals and Applications 21.webp|700](/img/user/Attachments/Plasmonics%20-%20Fundamentals%20and%20Applications%2021.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=100&rect=227,489,363,601|•]]

**For larger particle separations**, far-field dipolar coupling with a distance dependence of $d^{-1}$ dominates. Far-field coupling has a strong influence on the plasmon lineshape, both in terms of resonance frequency, as well as spectral width. The latter is due to a strong dependence of the decay time $T_2$ on the grating constant via its influence on the amount of radiative damping as successive grating orders change from evanescent to radiative character. 

![Attachments/Plasmonics - Fundamentals and Applications 22.webp|700](/img/user/Attachments/Plasmonics%20-%20Fundamentals%20and%20Applications%2022.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=101&rect=44,134,196,247|•]]

---
## 5.4 Void Plasmons and Metallic Nanoshells
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=102&selection=10,0,12,37|•]]

Let us consider again plasmon resonances in single particles by taking a closer look at localised modes in the metallic structures containing dielectric inclusions of characteristic dimension $a\ll \lambda$. The simplest such structure is a spherical inclusion of dielectric constant $\varepsilon_m$ in a homogeneous metal described by the dielectric function $\varepsilon(\omega)$:

![Attachments/Plasmonics - Fundamentals and Applications 23.webp|700](/img/user/Attachments/Plasmonics%20-%20Fundamentals%20and%20Applications%2023.webp)[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=102&rect=146,87,298,170|•]]

Such nanovoid can sustain an electromagnetic dipole resonance similar to those in metallic nanoparticles. Compared to that case, we simply swap $\varepsilon_m$ and $\varepsilon(\omega)$. Therefore, the polarisability is 
$$
\alpha=4 \pi a^3 \frac{\varepsilon_m-\varepsilon}{\varepsilon_m+2 \varepsilon} .
$$
Contrary to metal nanoparticles, the induced dipole moment is in this case oriented antiparallel to the applied outside field. The Fröhlich condition now takes the form
$$
\boldsymbol{\operatorname { R e }}[\varepsilon(\omega)]=-\frac{1}{2} \varepsilon_m .
$$
The extra degrees of freedom over the control of the plasmon dipole resonance in the nanoshell geometry enable both shifts of the resonance frequencies into the near-IR of the spectrum, as well as reduced plasmon linewidths. This suggests that nanoshells are superior to solid metal nanoparticles for refractive index sensing applications (for example for biomedical applications). 
While the above voids have been three-dimensional in nature, essentially two-dimensional holes in thin metallic films can also support localised plasmon modes. 

---
## 5.5 Localised Plasmons and Gain media
[[Reading/Books/Plasmonics/Plasmonics - Fundamentals and Applications.pdf#page=104&selection=21,0,23,33|•]]

Let us lastly take a look at an emerging application in plasmonics: The interaction of localised resonances with gain media. The motivation for this application is twofold: the field enhancement sustained by the metallic nanostructures upon resonant excitation can lead to a reduction in the threshold for achieving inversion in the optically active surrounding medium, and the presence of gain can counteract the inherent absorption losses in the metal. 
In the simplest form, this problem can be treated by analysing the case of a sub-wavelength metal nanosphere embedded in a homogeneous medium exhibiting optical gain. The quasi-static approach can be followed, and the presence of gain can be taken care of by replacing $\varepsilon_m\in \mathfrak{R}\longrightarrow \varepsilon_2(\omega).$ With this, it can be shown that the presence of gain, expressed as $\mathfrak{Im}[\varepsilon_2]<0$, can lead to a significant strengthening of the plasmon resonance. 

---