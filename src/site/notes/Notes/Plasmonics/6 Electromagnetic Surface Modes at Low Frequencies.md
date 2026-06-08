---
{"dg-publish":true,"permalink":"/notes/plasmonics/6-electromagnetic-surface-modes-at-low-frequencies/","hide":"true","updated":"2026-06-07T20:36:51.093+02:00"}
---


Jump back to chapter selection: ==[[Notes/Plasmonics/Plasmonics#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[Notes/Plasmonics/6 Electromagnetic Surface Modes at Low Frequencies#6.1 Surface Plasmon Polaritons at THz Frequencies\|6.1 Surface Plasmon Polaritons at THz Frequencies]]
[[Notes/Plasmonics/6 Electromagnetic Surface Modes at Low Frequencies#6.2 Excitation of Acoustic Surface Plasmons\|6.2 Excitation of Acoustic Surface Plasmons]]
[[Notes/Plasmonics/6 Electromagnetic Surface Modes at Low Frequencies#6.3 Designer Surface Plasmon Polaritons\|6.3 Designer Surface Plasmon Polaritons]]

---
# 6 Electromagnetic Surface Modes at Low Frequencies
[ ](/img/user/Reading/Books/Plasmonics/Plasmonics%20-%20Fundamentals%20and%20Applications.pdf)

We have seen that surface plasmon polaritons can confine electromagnetic fields to the interface between a dielectric and a conductor over length scales significantly smaller than the free-space wavelength. This high field localisation is strongest when the optical frequency is not too far below the intrinsic plasma frequency of the conductor. At much lower frequencies, the SPP dispersion relation approaches the light line of the dielectric. The propagation constant then becomes almost indistinguishable from the wave vector of ordinary radiation in the dielectric, and the surface confinement breaks down.

For typical noble metals such as gold and silver, SPPs therefore evolve into grazing-incidence light fields when the frequency is lowered. A mode that was once tightly bound to the interface extends over many wavelengths into the dielectric and propagates with almost the same phase velocity as unbound radiation. Microscopically, this happens because an appreciable electric field inside the metal is required to build the oscillating surface charge distribution. In the perfect-conductor limit the field penetration vanishes, the tangential electric field at the surface is forced to zero, and the usual SPP disappears.

There are two important ways around this limitation. Highly doped semiconductors can shift the plasma frequency into the mid-IR or THz range, making low-frequency SPPs possible at the cost of larger absorption. Alternatively, a structured metal surface can mimic the dispersion of a plasmonic surface even when the metal itself behaves almost like a perfect conductor. These artificial modes are often called _designer_ plasmons.

---
## 6.1 Surface Plasmon Polaritons at THz Frequencies
[ ](/img/user/Reading/Books/Plasmonics/Plasmonics%20-%20Fundamentals%20and%20Applications.pdf)

As discussed earlier, the localisation and concomitant field enhancement coming from SPPs at the interface is due to a large in-plane propagation constant $\beta>k_0n$, which forces the fields to decay evanescently perpendicular to the surface. The larger $\beta$ is relative to the light line, the shorter the penetration depth into the adjacent media.

For two media with permittivities $\varepsilon_1$ and $\varepsilon_2$, the transverse decay constants satisfy
$$
\frac{\kappa_2}{\kappa_1}=-\frac{\varepsilon_2}{\varepsilon_1}\quad\text{with}\quad  
\begin{cases}
\kappa_1^2 =\beta^2-k_0^2\varepsilon_1, \\
\kappa_2^2=\beta^2-k_0^2\varepsilon_2.
\end{cases} 
$$
Here $\kappa_1$ and $\kappa_2$ are the perpendicular decay constants in the two media. This is the relation that complements the dispersion derivation in [[Notes/Plasmonics/2 Surface Plasmon Polaritons at Metal-Insulator Interfaces\|chapter 2]]. Conversely, localisation decreases strongly for frequencies $\omega\ll\omega_p$, where $\beta\rightarrow k_0n$.

Metals have a large free electron density $n_e\approx 10^{23}\,\mathrm{cm}^{-3}$ and therefore support _well-confined_ SPPs mainly at visible and near-IR frequencies. Consider the next figure as an example, showing the SPP dispersion for a silver/air interface.

![Attachments/Plasmonics - Fundamentals and Applications 24.webp|700](/img/user/Attachments/Plasmonics%20-%20Fundamentals%20and%20Applications%2024.webp)[ ](/img/user/Reading/Books/Plasmonics/Plasmonics%20-%20Fundamentals%20and%20Applications.pdf)

We see that $\beta\approx k_0$ in the THz regime. This is due to the large complex permittivity, often with $|\varepsilon|\approx 10^5$, which leads to negligible field penetration into the conductor and therefore to highly delocalised fields. For metals, SPPs at these frequencies nearly resemble a homogeneous light field in air incident under a grazing angle to the interface. These weakly bound modes are also known as Sommerfeld-Zenneck waves.

The figure above also shows the SPP dispersion relation for the interface between air and highly doped InSb. Due to the lower free electron density $n_e\approx10^{17}\,\mathrm{cm}^{-3}$, such semiconductors exhibit a SPP propagation constant $\beta>k_0n$ and thus field localisation at THz frequencies resembling that of metals at visible frequencies, although with larger absorption. One practical advantage is tunability: the carrier density, and therefore $\omega_p$, can be adjusted by thermal excitation, photo-carrier generation, or carrier injection.

---
## 6.2 Excitation of Acoustic Surface Plasmons
[ ](/img/user/Reading/Papers/Plasmonics/Theory%20of%20surface%20plasmons%20and%20surface-plasmon.pdf)

Acoustic surface plasmons are expected to be excitable not only by moving electrons, but also by light. As with conventional surface plasmons, free-space light alone usually cannot provide the required in-plane momentum. The missing momentum can be supplied by a deliberately structured surface, for example a periodic grating.

Consider a periodic grating of constant $L$:

![Attachments/Theory of surface plasmons and surface-plasmon 1.webp|700](/img/user/Attachments/Theory%20of%20surface%20plasmons%20and%20surface-plasmon%201.webp)[ ](/img/user/Reading/Papers/Plasmonics/Theory%20of%20surface%20plasmons%20and%20surface-plasmon.pdf)

If light hits such a surface at an angle $\theta$, the periodic structure can add or subtract reciprocal-lattice momentum. The in-plane wave vector along the grating is then
$$
k_{\parallel}=\frac{\omega}{c}\sin\theta\pm\frac{2\pi}{L}n,
$$
where $n=1,2,3,\ldots$. Therefore, the linear dispersion of free light is folded into a set of parallel straight lines, which can intersect the acoustic-plasmon dispersion relation:

![Attachments/Theory of surface plasmons and surface-plasmon 2.webp|700](/img/user/Attachments/Theory%20of%20surface%20plasmons%20and%20surface-plasmon%202.webp)[ ](/img/user/Reading/Papers/Plasmonics/Theory%20of%20surface%20plasmons%20and%20surface-plasmon.pdf)

The key point is the same as for prism or grating coupling in [[Notes/Plasmonics/3 Excitation of Surface Plasmon Polaritons at Planar Interfaces\|chapter 3]]: the surface structure changes the momentum bookkeeping. Once the phase-matching condition is satisfied, optical excitation of a mode that would otherwise be inaccessible becomes possible.

---
## 6.3 Designer Surface Plasmon Polaritons
[ ](/img/user/Reading/Books/Plasmonics/Plasmonics%20-%20Fundamentals%20and%20Applications.pdf)

At microwave and THz frequencies, real metals are often close to perfect conductors. A flat perfect conductor cannot support a conventional SPP because the tangential electric field at the surface vanishes and no longitudinal surface-charge oscillation can be sustained. However, if the surface is textured with grooves, holes, or corrugations, electromagnetic fields can penetrate into the subwavelength structure and acquire an effective surface impedance.

The structured surface then behaves as an artificial medium. Its geometry creates a bound mode whose dispersion can be engineered to look similar to that of an optical SPP. The field is not bound because the metal has a plasmonic dielectric function in the Drude sense; it is bound because the surface pattern stores electromagnetic energy and modifies the boundary condition seen by the propagating wave.

This is the physical meaning of _designer_ plasmons:

1. The operating frequency is set mainly by the surface geometry rather than by the intrinsic plasma frequency of the metal.
2. The confinement can be tuned by changing groove depth, period, filling factor, or hole geometry.
3. Losses are often dominated by ohmic dissipation and fabrication imperfections, not by interband absorption.
4. The same design idea can be scaled from microwave frequencies into the THz and far-infrared regimes.

Designer SPPs are therefore useful when one wants plasmon-like confinement at frequencies where ordinary noble-metal SPPs would be too weakly bound. Conceptually, they also clarify the difference between a true material plasmon and a surface electromagnetic mode whose dispersion has been engineered to mimic plasmonic behaviour.
