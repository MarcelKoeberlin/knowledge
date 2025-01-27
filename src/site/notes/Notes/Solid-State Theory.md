---
{"dg-publish":true,"dg-path":"Notes/Solid State Theory","permalink":"/notes/solid-state-theory/","updated":"2025-01-27T13:03:29.000+01:00"}
---

For my notes of 'solid-state theory' 2023, taught by Prof. Sigrist, please visit the exam collection of the VMP [here](https://exams.vmp.ethz.ch/user/mkoeberlin/document/notes2023). The pdf might load for quite a while, since its 35 MBs of size. However, it should be noted that the notes of Prof. Sigrist are already extremely high quality, so is it really necessary? Not really, but its damn cool. I spent a bit of time trying to convert the pdf to markdown and latex, and mainly implementing notations seamlessly. All credit to Prof. Sigrist for this great script!

**Table of Contents**

- [[Notes/Solid-State Theory#1 Electrons in the Periodic Crystal\|1 Electrons in the Periodic Crystal]]
- [[Notes/Solid-State Theory#2 Semiconductors\|2 Semiconductors]]
- [[Notes/Solid-State Theory#3 Metals\|3 Metals]]
- [[Notes/Solid-State Theory#4 Itinerant Electrons in a Magnetic Field\|4 Itinerant Electrons in a Magnetic Field]]
- [[Notes/Solid-State Theory#5 Landau's Theory of Fermi Liquids\|5 Landau's Theory of Fermi Liquids]]
- [[Notes/Solid-State Theory#6 Transport Properties of Metals\|6 Transport Properties of Metals]]
- [[Notes/Solid-State Theory#7 Magnetism in Metals\|7 Magnetism in Metals]]
- [[Notes/Solid-State Theory#8 Magnetism of Localised Moments\|8 Magnetism of Localised Moments]]
- [[Notes/Solid-State Theory#9 Identical Quantum Particles - Formalism of Second Quantisation\|9 Identical Quantum Particles - Formalism of Second Quantisation]]

---

Solid state physics, also known as condensed matter physics, investigates the properties of materials and systems with many degrees of freedom. As the largest subfield of physics, it bridges fundamental scientific questions and technological applications, underpinning modern industrialised civilisation.

This field primarily examines phenomena at room temperature or below, corresponding to energy scales much smaller than one Hartree ($e^2 / a_B$). Key length scales include the system size (sample size) and the spatial extent of electronic wave functions. This contrasts with high-energy physics, which seeks to probe unknown high-energy theories using the standard model as a phenomenological framework. In solid state physics, the starting point is a well-defined "high-energy" Hamiltonian, with the challenge being to describe low-energy properties through effective, phenomenological theories.

At its core, solid state physics revolves around the Coulomb interaction, where electrons interact with each other and with ions. Microscopic formulations of these interactions often operate at energy scales too high to directly explain low-energy phenomena. Thus, reduced or effective theories are critical to understanding the "emergent physics" that governs condensed matter systems.

One central goal of solid state physics is characterising a system’s ground state. However, measurable properties often arise from excited states, making the concept of 'elementary excitations' essential. Here, the ground state functions as an effective vacuum, with excitations treated as particles within this framework. According to P. W. Anderson, two fundamental principles underlie the field:

1. **Adiabatic Continuity**: Complex systems can often be replaced by simpler models with equivalent low-energy properties, as they can be smoothly transformed into one another without altering qualitative behaviour. For example, Landau's Fermi liquid theory demonstrates how strongly interacting electrons at low energies behave like non-interacting Fermions with renormalised parameters.

2. **Spontaneously Broken Symmetry**: Phase transitions into states with qualitatively different properties often involve symmetry breaking. Examples include magnetically ordered states, which break rotational and time-reversal symmetry, and superconducting states, which break global gauge symmetry. Symmetry breaking simplifies theoretical descriptions and offers insight into material properties.

These principles, combined with the study of emergent behaviour and excitations, form the foundation of solid state physics, connecting its theoretical richness to practical applications.

---
# 1 Electrons in the Periodic Crystal 
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=8&selection=2,0,4,10|•]]

One defining characteristic of many solids is the regular arrangement of their atoms, forming a crystal. Electrons in such crystals experience a periodic potential, originating from the lattice of ions and the mean interaction with other electrons:

![Attachments/Notes/Solid-State Theory/IMG-0126164731027.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164731027.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=5&rect=207,412,394,513|•]]

The spectrum of these delocalised electronic states—solutions to the Schrödinger equation—forms energy bands separated by gaps of "forbidden" energies. Two limiting approaches help to understand this band formation:
1. **Nearly-free electron approximation**: A weak periodic potential breaks up the continuous spectrum into bands.
2. **Tight-binding approximation**: Independent atomic states overlap as atoms form a lattice, creating delocalised bands from discrete atomic energy levels.

---
## 1.1 Symmetries of Crystals
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=8&selection=34,0,36,22|•]]
### 1.1.1 Space Groups of Crystals

Most solids are built from a repeating lattice of atoms, with the smallest repeating unit known as the unit cell. The symmetries of a crystal are described by its **space group** $\mathcal{R}$, a collection of symmetry operations—translations, rotations, inversions, and combinations—that leave the crystal invariant. In three dimensions, there are 230 unique space groups.

We can visualise the crystal as a lattice of points, each representing either an atom or an entire unit cell. Translations within the space group are linear combinations of primitive lattice vectors $\{\boldsymbol{a}_{i}\}$:

$$
\boldsymbol{R}_{\boldsymbol{n}} = n_{1} \boldsymbol{a}_{1} + n_{2} \boldsymbol{a}_{2} + n_{3} \boldsymbol{a}_{3},
$$

where $\boldsymbol{n} = (n_{1}, n_{2}, n_{3})$ and $n_i \in \mathbb{Z}$. For example, in a 2D square lattice:

![Attachments/Notes/Solid-State Theory/IMG-0126164731145.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164731145.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=9&rect=154,451,440,629|•]]

Here, $\boldsymbol{a}_{1}$ and $\boldsymbol{a}_{2}$ are primitive lattice vectors, and $\boldsymbol{R} = 2\boldsymbol{a}_{1} + \boldsymbol{a}_{2}$ is a lattice vector. The shaded area is the **Wigner-Seitz cell**, a unit cell formed by bisecting lines connecting neighboring lattice points.

### 1.1.2 Symmetry Operations

Symmetry operations in the space group can be expressed in the Wigner notation:

$$
\boldsymbol{r}^{\prime} = g \boldsymbol{r} + \boldsymbol{a} = \{g \mid \boldsymbol{a}\} \boldsymbol{r},
$$

where $g$ represents a rotation, reflection, or inversion with respect to specific points, axes, or planes. These operations generate the **point group** $\mathcal{P}$. Key symmetry operations include:

| **Operation**                         | **Notation**                |
|---------------------------------------|-----------------------------|
| **Basic translations**                | $\{E \mid \boldsymbol{a}\}$ |
| **Rotations, reflections, inversions**| $\{g \mid \mathbf{0}\}$     |
| **Screw axes, glide planes**          | $\{g \mid \boldsymbol{a}\}$ |

Here, $E$ is the identity element of $\mathcal{P}$. A **screw axis** combines a rotation with a translation along the rotation axis, while a **glide plane** combines a reflection with a translation along the plane.

### 1.1.3 Group Properties

The space group $\mathcal{R}$ satisfies the properties of a group:

1. **Associativity**: For any two elements $\{g \mid \boldsymbol{a}\}, \{g^{\prime} \mid \boldsymbol{a}^{\prime}\} \in \mathcal{R}$:

   $$
   \{g \mid \boldsymbol{a}\}\{g^{\prime} \mid \boldsymbol{a}^{\prime}\} = \{gg^{\prime} \mid g\boldsymbol{a}^{\prime} + \boldsymbol{a}\}.
   $$

2. **Identity Element**: The identity is $\{E \mid \mathbf{0}\}$.

3. **Inverse Element**: For every $\{g \mid \boldsymbol{a}\} \in \mathcal{R}$, there exists an inverse:

   $$
   \{g \mid \boldsymbol{a}\}^{-1} = \{g^{-1} \mid -g^{-1}\boldsymbol{a}\}, \quad \text{such that} \quad \{g \mid \boldsymbol{a}\}^{-1}\{g \mid \boldsymbol{a}\} = \{E \mid \mathbf{0}\}.
   $$

In general, space group elements do not commute (non-Abelian group):

$$
\{g \mid \boldsymbol{a}\}\{g^{\prime} \mid \boldsymbol{a}^{\prime}\} \neq \{g^{\prime} \mid \boldsymbol{a}^{\prime}\}\{g \mid \boldsymbol{a}\}.
$$

However, the subgroup of translations $\{\{E \mid \boldsymbol{a}\}\} \subset \mathcal{R}$ is always Abelian. Furthermore, the following relations hold generally:

$$
\begin{aligned}
\{g \mid \boldsymbol{a}\}\{E \mid \boldsymbol{a}^{\prime}\}\{g \mid \boldsymbol{a}\}^{-1} &= \{E \mid g\boldsymbol{a}^{\prime}\}, \\
\{g \mid \boldsymbol{a}\}^{-1}\{E \mid \boldsymbol{a}^{\prime}\}\{g \mid \boldsymbol{a}\} &= \{E \mid g^{-1}\boldsymbol{a}^{\prime}\}.
\end{aligned}
$$

### 1.1.4 Reciprocal Lattice
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=10&selection=338,0,340,18|•]]

The reciprocal lattice is a periodic lattice with its own translation symmetry, defined by a basic set of vectors $\{\boldsymbol{b}_{i}\}$. Any reciprocal lattice vector can be expressed as:

$$
\boldsymbol{G}_{m} = m_{1} \boldsymbol{b}_{1} + m_{2} \boldsymbol{b}_{2} + m_{3} \boldsymbol{b}_{3},
$$

where $m_{i}$ are integers. The relationship between the real lattice vectors $\{\boldsymbol{a}_{i}\}$ and reciprocal lattice vectors $\{\boldsymbol{b}_{i}\}$ is given by:

$$
\boldsymbol{a}_{i} \cdot \boldsymbol{b}_{j} = 2\pi \delta_{ij}, \quad i, j = 1, 2, 3,
$$

with:

$$
\boldsymbol{b}_{i} = 2\pi \frac{\boldsymbol{a}_{j} \times \boldsymbol{a}_{k}}{\boldsymbol{a}_{i} \cdot (\boldsymbol{a}_{j} \times \boldsymbol{a}_{k})}, \quad
\boldsymbol{a}_{i} = 2\pi \frac{\boldsymbol{b}_{j} \times \boldsymbol{b}_{k}}{\boldsymbol{b}_{i} \cdot (\boldsymbol{b}_{j} \times \boldsymbol{b}_{k})}.
$$

For example, the reciprocal lattice of a simple cubic lattice is also simple cubic. However, a body-centered cubic (bcc) lattice corresponds to a face-centered cubic (fcc) reciprocal lattice, and vice versa. 

A key property of real space lattice vectors $\boldsymbol{R}_{n}$ and reciprocal lattice vectors $\boldsymbol{G}_{m}$ is:

$$
\boldsymbol{G}_{m} \cdot \boldsymbol{R}_{n} = 2\pi (m_{1}n_{1} + m_{2}n_{2} + m_{3}n_{3}) = 2\pi N,
$$

where $N$ is an integer. This allows any function $f(\boldsymbol{r})$ periodic in the real lattice to be expanded as:

$$
f(\boldsymbol{r}) = \sum_{\boldsymbol{G}} f_{\boldsymbol{G}} e^{i \boldsymbol{G} \cdot \boldsymbol{r}},
$$

with the periodic property $f(\boldsymbol{r} + \boldsymbol{R}) = f(\boldsymbol{r})$. The expansion coefficients are:

$$
f_{\boldsymbol{G}} = \frac{1}{\Omega_{\mathrm{UC}}} \int_{\mathrm{UC}} d^{3}r \, f(\boldsymbol{r}) e^{-i \boldsymbol{G} \cdot \boldsymbol{r}},
$$

where the integral runs over the unit cell of the periodic lattice with volume $\Omega_{\mathrm{UC}}$. The **first Brillouin zone** is defined as the Wigner-Seitz cell of the reciprocal lattice.

---
## 1.2 Bloch's Theorem and Bloch Functions
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=11&selection=134,0,136,35|•]]

Consider a Hamiltonian $\mathcal{H}$ of electrons invariant under lattice translations $\{E \mid \boldsymbol{a}\}$, introduced by a periodic potential. This implies that the translation operator $\widehat{T}_{\boldsymbol{a}}$ commutes with the Hamiltonian:

$$
[\widehat{T}_{\boldsymbol{a}}, \mathcal{H}] = 0.
$$

The translation operator acts on the Hilbert space as:

$$
\widehat{T}_{\boldsymbol{a}} |\boldsymbol{r}\rangle = |\boldsymbol{r} + \boldsymbol{a}\rangle, \quad
\langle\boldsymbol{r}| \widehat{T}_{\boldsymbol{a}} = \langle\boldsymbol{r} - \boldsymbol{a}|.
$$

Absorbing electron-electron interactions into an effective potential, the Hamiltonian reduces to:

$$
\mathcal{H}_{0} = \frac{\widehat{\boldsymbol{p}}^{2}}{2m} + V(\widehat{\boldsymbol{r}}),
$$

where $V(\boldsymbol{r}) = \sum_{j} V_{\mathrm{ion}}(\boldsymbol{r} - \boldsymbol{R}_{j})$ represents the periodic potential from ions and the mean field of other electrons. Since $V(\boldsymbol{r} + \boldsymbol{a}) = V(\boldsymbol{r})$, $\mathcal{H}_{0}$ commutes with $\widehat{T}_{\boldsymbol{a}}$.

### 1.2.1 Bloch's Theorem

Bloch's theorem states that eigenvalues of $\widehat{T}_{\boldsymbol{a}}$ lie on the unit circle in the complex plane. This means:

$$
\widehat{T}_{\boldsymbol{a}} \psi(\boldsymbol{r}) = \psi(\boldsymbol{r} - \boldsymbol{a}) = \lambda_{\boldsymbol{a}} \psi(\boldsymbol{r}),
$$

where $\lambda_{\boldsymbol{a}} = e^{i\varphi_{\boldsymbol{a}}}$ ensures bounded and delocalised wavefunctions. The eigenstates take the form:

$$
\psi_{n, \boldsymbol{k}}(\boldsymbol{r}) = \frac{1}{\sqrt{\Omega}} e^{i\boldsymbol{k} \cdot \boldsymbol{r}} u_{n, \boldsymbol{k}}(\boldsymbol{r}),
$$

where $u_{n, \boldsymbol{k}}(\boldsymbol{r})$ is periodic, and $n$ is the band index. The eigenfunctions satisfy:

$$
\mathcal{H}_{0} \psi_{n, \boldsymbol{k}}(\boldsymbol{r}) = \epsilon_{n, \boldsymbol{k}} \psi_{n, \boldsymbol{k}}(\boldsymbol{r}).
$$

### 1.2.2 Periodicity in Reciprocal Space

The eigenvalue $\lambda_{\boldsymbol{a}} = e^{-i\boldsymbol{k} \cdot \boldsymbol{a}}$ implies periodicity in reciprocal space. For reciprocal lattice vectors $\boldsymbol{G}$:

$$
\epsilon_{n, \boldsymbol{k} + \boldsymbol{G}} = \epsilon_{n, \boldsymbol{k}}, \quad
\psi_{n, \boldsymbol{k} + \boldsymbol{G}}(\boldsymbol{r}) = \psi_{n, \boldsymbol{k}}(\boldsymbol{r}).
$$

This reduces the discussion to the **first Brillouin zone**. Bloch's theorem simplifies the Schrödinger equation into the Bloch equation for $u_{\boldsymbol{k}}$:

$$
\left(\frac{(\widehat{\boldsymbol{p}} + \hbar \boldsymbol{k})^{2}}{2m} + V(\widehat{\boldsymbol{r}})\right) u_{\boldsymbol{k}}(\boldsymbol{r}) = \epsilon_{\boldsymbol{k}} u_{\boldsymbol{k}}(\boldsymbol{r}),
$$

where $\widehat{\boldsymbol{p}} e^{i\boldsymbol{k} \cdot \boldsymbol{r}} u_{\boldsymbol{k}}(\boldsymbol{r}) = e^{i\boldsymbol{k} \cdot \boldsymbol{r}} (\widehat{\boldsymbol{p}} + \hbar\boldsymbol{k}) u_{\boldsymbol{k}}(\boldsymbol{r})$.

---
## 1.3 Nearly Free Electron Approximation
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=12&selection=370,0,372,34|•]]

The nearly free electron approximation starts from the limit of free electrons, assuming the periodic potential $V(\boldsymbol{r})$ is weak and can be treated perturbatively. The periodic potential is expanded as:

$$
V(\boldsymbol{r}) = \sum_{\boldsymbol{G}} V_{\boldsymbol{G}} e^{i \boldsymbol{G} \cdot \boldsymbol{r}}, \quad
V_{\boldsymbol{G}} = \frac{1}{\Omega_{\mathrm{UC}}} \int_{\mathrm{UC}} d^{3}r \, V(\boldsymbol{r}) e^{-i \boldsymbol{G} \cdot \boldsymbol{r}}.
$$

Here, $V_{\boldsymbol{G}}$ represents Fourier components of the potential, and $\Omega_{\mathrm{UC}}$ is the unit cell volume. The potential $V(\boldsymbol{r})$ is real and inversion-symmetric ($V(\boldsymbol{r}) = V(-\boldsymbol{r})$), leading to $V_{\boldsymbol{G}} = V_{-\boldsymbol{G}}$. The uniform component $V_{0}$ is typically set to zero, as it only introduces a general energy shift.

The Bloch function, being periodic, is expressed similarly:

$$
u_{\boldsymbol{k}}(\boldsymbol{r}) = \sum_{\boldsymbol{G}} c_{\boldsymbol{G}} e^{-i \boldsymbol{G} \cdot \boldsymbol{r}},
$$

where $c_{\boldsymbol{G}} = c_{\boldsymbol{G}}(\boldsymbol{k})$ are $\boldsymbol{k}$-dependent coefficients. Inserting this into the Bloch equation along with the expansion for $V(\boldsymbol{r})$, we obtain:

$$
\left(\frac{\hbar^{2}}{2m} (\boldsymbol{k} - \boldsymbol{G})^{2} - \epsilon_{\boldsymbol{k}}\right) c_{\boldsymbol{G}} + \sum_{\boldsymbol{G}'} V_{\boldsymbol{G}' - \boldsymbol{G}} c_{\boldsymbol{G}'} = 0.
$$

This represents an eigenvalue problem in infinite dimensions, where $c_{\boldsymbol{G}}(\boldsymbol{k})$ are eigenvectors and $\epsilon_{\boldsymbol{k}}$ are eigenvalues, corresponding to the band energies. Without the potential $V(\boldsymbol{r})$, the solutions form parabolic bands:

$$
\epsilon_{\boldsymbol{k}}(\boldsymbol{G}) = \frac{\hbar^{2}}{2m} (\boldsymbol{k} - \boldsymbol{G})^{2}.
$$

This redundancy arises because every $\boldsymbol{G}$ generates the same spectrum, satisfying $\epsilon_{\boldsymbol{k} + \boldsymbol{G}} = \epsilon_{\boldsymbol{k}}$. Restricting to the first Brillouin zone suffices to describe the complete energy spectrum. Within this zone, each $\boldsymbol{k}$ corresponds to an infinite set of eigenvalues forming different bands.

### 1.3.1 Example: 1-Dimensional System

Consider a one-dimensional periodic lattice with lattice constant $a$. The reciprocal lattice vector is $\tilde{G} = 2\pi/a$. Without a periodic potential, the bare spectrum is:

$$
\epsilon_{k}(G) = \frac{\hbar^{2}}{2m} (k - G)^{2},
$$

where $G = n\tilde{G}$, corresponding to the dashed parabolas in the figure.

When a weak periodic potential is introduced with $\lvert V_{G} \rvert \ll \hbar^{2} G^{2}/2m$, the eigenvalue equation simplifies. Near the center of the Brillouin zone ($k \approx 0$), the lowest energy band is non-degenerate, corresponding to:

$$
\epsilon_{k}^{(0)} = \frac{\hbar^{2} k^{2}}{2m}, \quad c_{0}^{(0)} = 1, \quad c_{G}^{(0)} = 0 \, \text{for } G \neq 0.
$$

The first-order correction to the Bloch function is:

$$
c_{G}^{(1)} = \frac{-V_{G} c_{0}^{(0)}}{\frac{\hbar^{2}}{2m} \left((k - G)^{2} - k^{2}\right)} \approx -\frac{\lambda_{G}}{1 - 2k/G},
$$

where $\lambda_{G} = V_{G} / (\hbar^{2} G^{2} / 2m)$ is the small perturbation parameter.

The corrected energy eigenvalues are:

$$
\epsilon_{k} \approx \epsilon_{k}^{(0)} - \sum_{G \neq 0} \frac{\lvert V_{G} \rvert^{2}}{\frac{\hbar^{2}}{2m} \left[(k - G)^{2} - k^{2}\right]} \approx \frac{\hbar^{2} k^{2}}{2m^{*}} + E_{0},
$$

where:

$$
E_{0} = -\sum_{G \neq 0} \lvert \lambda_{G} \rvert^{2} \frac{\hbar^{2} G^{2}}{2m}, \quad \frac{1}{m^{*}} = \frac{1}{m} \left(1 - 4\sum_{G \neq 0} \lvert \lambda_{G} \rvert^{2}\right).
$$

This modifies the dispersion relation, yielding an effective mass $m^{*} > m$, as shown in the figure:

![Attachments/Notes/Solid-State Theory/IMG-0126164731430.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164731430.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=14&rect=176,569,421,754|•]]

The $\boldsymbol{k} \cdot \boldsymbol{p}$ approximation describes this expansion near symmetry points. The next energy level at $k = 0$ results from two crossing parabolas centered at $G_{\pm} = \pm 2\pi/a = \pm\tilde{G}$. Restricting to these components, the eigenvalue problem simplifies to:

$$
\left(\begin{array}{cc}
\frac{\hbar^{2}}{2m}(k - \tilde{G})^{2} - \epsilon_{k} & V_{-2\tilde{G}} \\
V_{2\tilde{G}} & \frac{\hbar^{2}}{2m}(k + \tilde{G})^{2} - \epsilon_{k}
\end{array}\right)
\binom{c_{+\tilde{G}}}{c_{-\tilde{G}}} = 0.
$$

The eigenvalues are:

$$
\epsilon_{k\pm} \approx \frac{\hbar^{2}}{2m}\tilde{G}^{2} \pm \lvert V_{2\tilde{G}} \rvert + \frac{\hbar^{2}}{2m_{\pm}^{*}} k^{2},
$$

with effective masses:

$$
\frac{1}{m_{\pm}^{*}} \approx \frac{1}{m} \left(1 \pm \frac{1}{2\lvert \lambda_{2\tilde{G}} \rvert}\right).
$$

Here, $m_{+}^{*} > 0$ and $m_{-}^{*} < 0$ correspond to bands with opposite curvatures, separated by a band gap. For $V_{2\tilde{G}} \to 0$, the curvature diverges as $m_{\pm}^{*} \to 0$. The wavefunctions at $k = 0$ are:

$$
u_{k=0}(x) =
\begin{cases}
\sin(\tilde{G}x), & \epsilon_{k=0,+}, \\
\cos(\tilde{G}x), & \epsilon_{k=0,-}.
\end{cases}
$$

These states correspond to bonding and antibonding states under parity $x \to -x$. Similar band gaps occur at the Brillouin zone boundary ($k = \pm\pi/a$). The energy spectrum is periodic, satisfying $\epsilon_{k + G} = \epsilon_{k}$ and $\epsilon_{-k} = \epsilon_{+k}$ due to parity and time-reversal symmetry.

### 1.3.2 Appendix: Nearly Free Electron Approximation - Rayleigh-Schrödinger Formulation

We treat here the nearly free electron approximation for the one-dimensional system within the Rayleigh-Schrödinger perturbation theory. For this purpose we introduce the Dirac notation and write the plane wave state for free electrons as $|k\rangle$ with
$$
\begin{align*}
\mathcal{H}_{0}=\frac{\hat{p}^{2}}{2 m} \quad \mathcal{H}_{0}|k\rangle=\frac{\hbar^{2} k^{2}}{2 m}|k\rangle=\epsilon_{k}^{(0)}|k\rangle
\end{align*}
$$

The periodic potential $\widehat{V}$ has the property
$$
\begin{align*}
\widehat{V}|k\rangle=\sum_{k^{\prime}}\left|k^{\prime}\right\rangle\left\langle k^{\prime}\right| \widehat{V}|k\rangle=\sum_{G}|k+G\rangle\langle k+G| \widehat{V}|k\rangle=\sum_{G} V_{G}|k+G\rangle
\end{align*}
$$
where we use that $\left\langle k^{\prime}\right| \widehat{V}|k\rangle$ is only non-vanishing, if $k-k^{\prime}=G$ a reciprocal lattice vector. We now approximate the eigenstates and eigenenergies. We notice that for given $k$ the relevant subspace of the Hilbert-space is $\{|k+G\rangle\}$ including all $G$. Thus the Bloch states can be written as
$$
\begin{align*}
\left|\psi_{k}\right\rangle=\sum_{G} c_{G}|k-G\rangle .
\end{align*}
$$

First we consider the situation around $k \approx$ for the lowest energy state. Within perturbation theory we obtain
$$
\begin{align*}
\left|\psi_{k}\right\rangle \approx|k\rangle-\sum_{G \neq 0}|k-G\rangle \frac{\langle k-G| \widehat{V}|k\rangle}{\epsilon_{k-G}^{(0)}-\epsilon_{k}^{(0)}}=|k\rangle-\sum_{G \neq 0} \frac{V_{-G}}{\epsilon_{k-G}^{(0)}-\epsilon_{k}^{(0)}}|k-G\rangle
\end{align*}
$$
and the energy is given by
$$
\begin{align*}
\epsilon_{k} \approx \epsilon_{k}^{(0)}+\langle k| \widehat{V}|k\rangle-\sum_{G \neq 0} \frac{|\langle k-G| \widehat{V}| k\rangle\left.\right|^{2}}{\epsilon_{k-G}^{(0)}-\epsilon_{k}^{(0)}}=\epsilon_{k}^{(0)}+V_{0}-\sum_{G \neq 0} \frac{\left|V_{-G}\right|^{2}}{\epsilon_{k-G}^{(0)}-\epsilon_{k}^{(0)}} .
\end{align*}
$$

Note that the definitions of $V_{G}$ and $c_{G}$ are in line with those used in Sect.1.3. For the potential,
$$
\begin{align*}
V(x)=\langle x| \widehat{V}|x\rangle=\sum_{k, k^{\prime}}\left\langle x \mid k^{\prime}\right\rangle \underbrace{\left\langle k^{\prime}\right| \widehat{V}|k\rangle}_{V_{G} \delta_{k^{\prime}, k+G}}\langle k \mid x\rangle=\sum_{k, G} V_{G}\langle x \mid k+G\rangle\langle k \mid x\rangle=\sum_{G} V_{G} e^{i G x}
\end{align*}
$$
where we use $\langle x \mid k\rangle=\frac{1}{\sqrt{L}} e^{i k x}$ with $L$ the length of the system. Note that $\frac{1}{L} \sum_{k} 1=1$. For the Bloch function we find,
$$
\begin{align*}
\psi_{k}(x)=\left\langle x \mid \psi_{k}\right\rangle=\sum_{G} c_{G}\langle x \mid k-G\rangle=\frac{1}{\sqrt{L}} e^{i k x} \sum_{G} c_{G} e^{-i G x}=\frac{1}{\sqrt{L}} e^{i k x} u_{k}(x) .
\end{align*}
$$

After the non-degenerate energy level we consider the case where two states are "nearly" degenerate. For example, $|k+\tilde{G}\rangle$ and $|k-\tilde{G}\rangle$ with $\tilde{G}=2 \pi / a$, with the energies $\epsilon_{k+\tilde{G}}^{(0)}$ and $\epsilon_{k-\tilde{G}}^{(0)}$, respectively, which are identical at $k=0$. We treat this situation within the scheme of degenerate perturbation theory by restricting to the subspace of these two states, writing the state as $\left|\psi_{k}\right\rangle=c_{+\tilde{G}}|k+\tilde{G}\rangle+c_{-\tilde{G}}|k-\tilde{G}\rangle$. The Schrödinger equation is given by
$$
\begin{align*}
\mathcal{H}\left|\psi_{k}\right\rangle=E_{k}\left|\psi_{k}\right\rangle \Rightarrow\left\{\begin{array}{l}
\langle k+\tilde{G}| \mathcal{H}\left|\psi_{k}\right\rangle=E_{k} c_{+\tilde{G}} \\
\langle k-\tilde{G}| \mathcal{H}\left|\psi_{k}\right\rangle=E_{k} c_{-\tilde{G}}
\end{array}\right.
\end{align*}
$$
such that
$$
\begin{align*}
\left(\begin{array}{cc}
\epsilon_{k+\tilde{G}}^{(0)}-E_{k} & V_{2 \tilde{G}} \\
V_{-2 \tilde{G}} & \epsilon_{k-\tilde{G}}^{(0)}-E_{k}
\end{array}\right)\binom{c_{+\tilde{G}}}{c_{-\tilde{G}}}=0
\end{align*}
$$
is an eigenvalue equation with
$$
\begin{align*}
E_{k, \pm}=\frac{1}{2}\left[\epsilon_{k+\tilde{G}}^{(0)}+\epsilon_{k-\tilde{G}}^{(0)} \pm \sqrt{\left(\epsilon_{k+\tilde{G}}^{(0)}-\epsilon_{k-\tilde{G}}^{(0)}\right)^{2}+4\left|V_{2 \tilde{G}}\right|^{2}}\right] \approx \frac{\hbar^{2} \tilde{G}^{2}}{2 m} \pm\left|V_{2 \tilde{G}}\right|+\frac{\hbar^{2} k^{2}}{2 m_{ \pm}^{*}}
\end{align*}
$$
with an effective mass $m_{ \pm}^{*}.$ The eigenstate is given by
$$
\begin{align*}
c_{+\tilde{G}}^{( \pm)}(k)=\frac{-V_{2 \tilde{G}}}{\sqrt{\left(\epsilon_{k+\tilde{G}}^{(0)}-E_{k, \pm}\right)^{2}+\left|V_{2 \tilde{G}}\right|^{2}}} \quad \text { and } \quad c_{-\tilde{G}}^{( \pm)}(k)=\frac{\epsilon_{k+\tilde{G}}^{(0)}-E_{k, \pm}}{\sqrt{\left(\epsilon_{k+\tilde{G}}^{(0)}-E_{k, \pm}\right)^{2}+\left|V_{2 \tilde{G}}\right|^{2}}} .
\end{align*}
$$

We find the following relations for the wave functions,
$$
\begin{align*}
\left(c_{+\tilde{G}}^{( \pm)}(k), c_{+\tilde{G}}^{( \pm)}(k)\right) \rightarrow \begin{cases}\left(\frac{1}{\sqrt{2}}, \pm \frac{1}{\sqrt{2}}\right) & k=0 \\ \left(\frac{1 \pm 1}{2}, \frac{1 \mp 1}{2}\right), & k \gg\left|\lambda_{2 \tilde{G}}\right| \tilde{G} \\ \left(\frac{1 \mp 1}{2}, \frac{1 \pm 1}{2}\right), & k \ll-\left|\lambda_{2 \tilde{G}}\right| \tilde{G}\end{cases}
\end{align*}
$$

This means that the two states are completely hybridised at the point of degeneracy $(k=0)$ while shift $k$ sufficiently far away from this point, the wave function are reduce to the original states $|k \pm \tilde{G}\rangle$. Thus, the opening of the band gap at $k=0$ is an effect of hybridisation. The analysis can be done equivalently for every degeneracy point in $k$. In our one-dimensional system this are always point of degeneracy 2 unlike in higher dimensional lattices.

---
## 1.4 Tight-Binding Approximation
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=16&selection=0,0,2,27|•]]

The tight-binding approximation starts from the atomic limit, considering a lattice of well-separated atoms where the overlap between the outermost electronic orbitals is small. In this scenario, electronic states are well-approximated by localised atomic orbitals $\phi_{n}(\boldsymbol{r})$. These orbitals are solutions to the atomic Hamiltonian:

$$
\mathcal{H}_{a}(\boldsymbol{R}) \phi_{n}(\boldsymbol{r} - \boldsymbol{R}) = \epsilon_{n} \phi_{n}(\boldsymbol{r} - \boldsymbol{R}),
$$

where $\mathcal{H}_{a}(\boldsymbol{R})$ is defined as:

$$
\mathcal{H}_{a}(\boldsymbol{R}) = \frac{\hat{\boldsymbol{p}}^{2}}{2m} + V_{a}(\boldsymbol{r} - \boldsymbol{R}),
$$

and $V_{a}(\boldsymbol{r})$ is the rotationally symmetric atomic potential. The potential landscape is depicted below, showing (a) the discrete spectrum of a single atomic Coulomb potential and (b) the periodic potential arising from a regular lattice:

![Attachments/Notes/Solid-State Theory/IMG-0126164731716.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164731716.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=16&rect=98,261,509,397|•]]

At low energies, electrons remain localised near atomic sites, but at higher energies, wavefunctions extend further and can delocalise to form itinerant states, leading to band formation.

The periodic single-particle Hamiltonian for the lattice is:

$$
\mathcal{H} = \frac{\hat{\boldsymbol{p}}^{2}}{2m} + \sum_{\boldsymbol{R}_{j}} V_{a}(\boldsymbol{r} - \boldsymbol{R}_{j}) = \mathcal{H}_{a}(\boldsymbol{R}_{i}) + \Delta V_{\boldsymbol{R}_{i}}(\boldsymbol{r}),
$$

where $\boldsymbol{R}_{i}$ is an arbitrary atomic position and:

$$
\Delta V_{\boldsymbol{R}_{i}}(\boldsymbol{r}) = \sum_{\boldsymbol{R}_{j} \neq \boldsymbol{R}_{i}} V_{a}(\boldsymbol{r} - \boldsymbol{R}_{j}).
$$

### 1.4.1 Linear Combination of Atomic Orbitals (LCAO)
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=16&selection=203,0,205,44|•]]

Extended Bloch states can be approximated by a linear combination of atomic orbitals:

$$
\psi_{\tilde{n} \boldsymbol{k}}(\boldsymbol{r}) = \frac{1}{\sqrt{N}} \sum_{\boldsymbol{R}_{j}} e^{i\boldsymbol{k} \cdot \boldsymbol{R}_{j}} \phi_{\tilde{n}}(\boldsymbol{r} - \boldsymbol{R}_{j}),
$$

where $N$ is the number of atomic positions. This construction satisfies the Bloch condition:

$$
\psi_{\tilde{n} \boldsymbol{k}}(\boldsymbol{r} - \boldsymbol{a}) = e^{-i\boldsymbol{k} \cdot \boldsymbol{a}} \psi_{\tilde{n} \boldsymbol{k}}(\boldsymbol{r}),
$$

for all lattice vectors $\boldsymbol{a}$.

The eigenstates of the Hamiltonian can be expressed as:

$$
\psi_{\boldsymbol{k}}(\boldsymbol{r}) = \sum_{\tilde{n}} A_{\tilde{n}} \psi_{\tilde{n} \boldsymbol{k}}(\boldsymbol{r}),
$$

which remains a Bloch wavefunction. This formulation allows deriving the electronic spectrum from:

$$
\mathcal{H} \psi_{\boldsymbol{k}}(\boldsymbol{r}) = \epsilon_{\boldsymbol{k}} \psi_{\boldsymbol{k}}(\boldsymbol{r}).
$$

By projecting onto the atomic orbitals, the problem reduces to the algebraic eigenvalue equation:

$$
\sum_{\tilde{n}'} \left[\langle \mathcal{H} \rangle_{\tilde{n} \tilde{n}'}(\boldsymbol{k}) - \epsilon_{\boldsymbol{k}} \langle 1 \rangle_{\tilde{n} \tilde{n}'}(\boldsymbol{k})\right] A_{\tilde{n}'} = 0,
$$

with matrix elements:

$$
\langle 1 \rangle_{\tilde{n} \tilde{n}'}(\boldsymbol{k}) = \int d^{3}r \, \psi_{\tilde{n} \boldsymbol{k}}^{*}(\boldsymbol{r}) \psi_{\tilde{n}' \boldsymbol{k}}(\boldsymbol{r}),
$$

and:

$$
\langle \mathcal{H} \rangle_{\tilde{n} \tilde{n}'}(\boldsymbol{k}) = \int d^{3}r \, \psi_{\tilde{n} \boldsymbol{k}}^{*}(\boldsymbol{r}) \mathcal{H} \psi_{\tilde{n}' \boldsymbol{k}}(\boldsymbol{r}).
$$

Using translational invariance, the matrix elements simplify to include terms involving nearest- or next-nearest-neighbor lattice sites.

### 1.4.2 Band Structure Calculation

The energy spectrum is obtained from the secular equation:

$$
\operatorname{det}\left[\langle \mathcal{H} \rangle_{\tilde{n} \tilde{n}'}(\boldsymbol{k}) - \epsilon_{\boldsymbol{k}} \langle 1 \rangle_{\tilde{n} \tilde{n}'}(\boldsymbol{k})\right] = 0.
$$

The tight-binding approach is particularly effective for systems where atomic orbitals are tightly localised, such as 3d orbitals in transition metals (e.g., Mn, Fe, Co) or transition metal oxides. For elements like alkali metals with delocalised s-orbitals, this approximation is less suitable. _Explicit calculation of s and p orbitals skipped._

### 1.4.3 Wannier Functions
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=21&selection=82,0,84,17|•]]

An alternative approach to the tight-binding approximation is through Wannier functions, which are defined as the Fourier transform of the Bloch wave functions:
$$
\psi_{\boldsymbol{k}}(\boldsymbol{r}) = \frac{1}{\sqrt{N}} \sum_{\boldsymbol{R}} e^{i \boldsymbol{k} \cdot \boldsymbol{R}} w(\boldsymbol{r}-\boldsymbol{R}),
\quad
w(\boldsymbol{r}-\boldsymbol{R}) = \frac{1}{\sqrt{N}} \sum_{\boldsymbol{k}} e^{-i \boldsymbol{k} \cdot \boldsymbol{R}} \psi_{\boldsymbol{k}}(\boldsymbol{r}),
$$
where the Wannier function $w(\boldsymbol{r}-\boldsymbol{R})$ is localised at the real-space lattice site $\boldsymbol{R}$. However, the Wannier function is not uniquely defined due to "gauge freedom," which allows multiplication of the Bloch function by an arbitrary phase factor:
$$
\psi_{\boldsymbol{k}}(\boldsymbol{r}) \rightarrow e^{i \chi(\boldsymbol{k})} \psi_{\boldsymbol{k}}(\boldsymbol{r}),
$$
where $\chi(\boldsymbol{k})$ is any real function. The degree of localisation of $w(\boldsymbol{r}-\boldsymbol{R})$ around its center $\boldsymbol{R}$ depends on the choice of $\chi(\boldsymbol{k})$.

For a non-degenerate band, similar to the atomic $s$-orbital case, there is one Wannier function per site. These functions obey the orthogonality relation:
$$
\int d^{3} r \, w^{*}(\boldsymbol{r}-\boldsymbol{R}^{\prime}) w(\boldsymbol{r}-\boldsymbol{R}) = \delta_{\boldsymbol{R} \boldsymbol{R}^{\prime}}.
$$

Considering a one-particle Hamiltonian $\mathcal{H} = -\frac{\hbar^{2}}{2m} \nabla^{2} + V(\boldsymbol{r})$ with a periodic potential $V(\boldsymbol{r})$, the energy $\epsilon_{\boldsymbol{k}}$ can be expressed as:
$$
\epsilon_{\boldsymbol{k}} = \int d^{3} r \, \psi_{\boldsymbol{k}}^{*}(\boldsymbol{r}) \mathcal{H} \psi_{\boldsymbol{k}}(\boldsymbol{r}).
$$
Using the Fourier representation of the Bloch and Wannier functions:
$$
\epsilon_{\boldsymbol{k}} = \sum_{\boldsymbol{R}} e^{-i \boldsymbol{k} \cdot \boldsymbol{R}} \int d^{3} r \, w^{*}(\boldsymbol{r}-\boldsymbol{R}) \mathcal{H} w(\boldsymbol{r}),
$$
where translational invariance is applied. Defining:
$$
\epsilon_{0} = \int d^{3} r \, w^{*}(\boldsymbol{r}) \mathcal{H} w(\boldsymbol{r}),
\quad
t(\boldsymbol{R}) = \int d^{3} r \, w^{*}(\boldsymbol{r}-\boldsymbol{R}) \mathcal{H} w(\boldsymbol{r}),
$$
the band energy becomes:
$$
\epsilon_{\boldsymbol{k}} = \epsilon_{0} + \sum_{\boldsymbol{R}} t(\boldsymbol{R}) e^{-i \boldsymbol{k} \cdot \boldsymbol{R}}.
$$

This result mirrors the tight-binding band structure derived earlier via the LCAO approach.

For multiple bands (e.g., $p$-orbitals), we define:
$$
\psi_{n \boldsymbol{k}}(\boldsymbol{r}) = \frac{1}{\sqrt{N}} \sum_{\boldsymbol{R}, \tilde{n}} e^{i \boldsymbol{k} \cdot \boldsymbol{R}} c_{n \tilde{n}}(\boldsymbol{k}) w_{\tilde{n}}(\boldsymbol{r}-\boldsymbol{R}),
$$
where the matrix $c_{n \tilde{n}}(\boldsymbol{k})$ rotates the Wannier functions from the band basis to the atomic orbital basis. The coefficients satisfy:
$$
\sum_{\tilde{n}} c_{n \tilde{n}}(\boldsymbol{k}) c_{\tilde{n} n^{\prime}}^{*}(\boldsymbol{k}) = \delta_{n n^{\prime}}.
$$

The band energy for multi-band systems can be expressed as:
$$
\epsilon_{n \boldsymbol{k}} = \sum_{\boldsymbol{R}} \sum_{\tilde{n}, \tilde{n}^{\prime}} c_{\tilde{n}^{\prime} n}^{*}(\boldsymbol{k}) c_{n \tilde{n}}(\boldsymbol{k}) e^{-i \boldsymbol{k} \cdot \boldsymbol{R}} t_{\tilde{n}^{\prime} \tilde{n}}(\boldsymbol{R}),
$$
where $t_{\tilde{n}^{\prime} \tilde{n}}(\boldsymbol{R})$ represents the hopping amplitudes. This approach works well for systems with well-localised orbitals.

### 1.4.4 Tight Binding Model in Second Quantisation Formulation
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=22&selection=192,0,194,54|•]]

The tight-binding formulation of band electrons can also be implemented very easily in second quantisation language and provides a rather intuitive interpretation. For simplicity we restrict ourselves to the single-orbital case and define the following Fermionic operators,
$$
\begin{align*}
\begin{aligned}
& \hat{c}_{j, s}^{\dagger} \text { creates an electron of spin } s \text { on lattice site } \boldsymbol{R}_{j}, \\
& \hat{c}_{j, s} \text { annihilates an electron of spin } s \text { on lattice site } \boldsymbol{R}_{j},
\end{aligned}
\end{align*}
$$
in the corresponding Wannier states. We introduce the following Hamiltonian,
$$
\begin{align*}
\mathcal{H}=\sum_{j, s} \epsilon_{0} \hat{c}_{j, s}^{\dagger} \hat{c}_{j, s}+\sum_{i, j} t_{i j} \hat{c}_{i, s}^{\dagger} \hat{c}_{j, s}
\end{align*}
$$
with $t_{i j}=t_{j i}$ real. These coefficients $t_{i j}$ are called "hopping matrix elements", since $\hat{c}_{i, s}^{\dagger} \hat{c}_{j, s}$ annihilates an electron on site $\boldsymbol{R}_{j}$ and creates one on site $\boldsymbol{R}_{i}$, in this way an electron moves (hops) from $\boldsymbol{R}_{j}$ to $\boldsymbol{R}_{i}$. Thus, this Hamiltonian represents the "kinetic energy" of the electron. Let us now diagonalise this Hamiltonian by following Fourier transformation, equivalent to the transformation between Bloch and Wannier functions,
$$
\begin{align*}
\hat{c}_{j, s}^{\dagger}=\frac{1}{\sqrt{N}} \sum_{\boldsymbol{k}} \hat{a}_{\boldsymbol{k} s}^{\dagger} e^{-i \boldsymbol{k} \cdot \boldsymbol{R}_{j}} \quad \text { and } \quad \hat{c}_{j, s}=\frac{1}{\sqrt{N}} \sum_{\boldsymbol{k}} \hat{a}_{\boldsymbol{k} s} e^{i \boldsymbol{k} \cdot \boldsymbol{R}_{j}}
\end{align*}
$$
where $\hat{a}_{\boldsymbol{k} s}^{\dagger}\left(\hat{a}_{\boldsymbol{k} s}\right)$ creates (annihilates) an electron in the Bloch state with lattice momentum $\boldsymbol{k}$ and spin $s$. This leads to
$$
\begin{align*}
\mathcal{H}=\sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}, s}\left\{\frac{1}{N} \sum_{i} \epsilon_{0} e^{i\left(\boldsymbol{k}-\boldsymbol{k}^{\prime}\right) \cdot \boldsymbol{R}_{i}}+\frac{1}{N} \sum_{i, j} t_{i j} e^{i \boldsymbol{k} \cdot \boldsymbol{R}_{j}-i \boldsymbol{k}^{\prime} \cdot \boldsymbol{R}_{i}}\right\} \hat{a}_{\boldsymbol{k}^{\prime} s}^{\dagger} \hat{a}_{\boldsymbol{k} s}=\sum_{\boldsymbol{k}, s} \epsilon_{\boldsymbol{k}} \hat{a}_{\boldsymbol{k} s}^{\dagger} \hat{a}_{\boldsymbol{k} s}
\end{align*}
$$
where $\hat{a}_{\boldsymbol{k} s}^{\dagger} \hat{a}_{\boldsymbol{k} s}=\hat{n}_{\boldsymbol{k} s}$ constitutes the number operator for electrons. The band energy is the same as obtained above from the tight-binding approach. The Hamiltonian (1.83) will be used later for the Hubbard model where a real-space formulation is helpful.
The real-space formulation of the kinetic energy allows also for the introduction of disorder, nonperiodicity which can be most straightforwardly implemented by site dependent potentials $\epsilon_{0} \rightarrow$ $\epsilon_{0 i}$ and to spatially (bond) dependent hopping matrix elements $t_{i j}=t\left(\boldsymbol{R}_{i}, \boldsymbol{R}_{j}\right) \neq t\left(\boldsymbol{R}_{i}-\boldsymbol{R}_{j}\right)$.

---
## 1.5 Symmetry Properties of the Band Structure
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=23&selection=0,0,2,41|•]]

The symmetry properties of crystals are a helpful tool for the analysis of their band structure. They emerge from the symmetry group (space and point group) of the crystal lattice. Consider the action $\widehat{S}_{\{g \mid a\}}$ of an element $\{g \mid \boldsymbol{a}\}$ of the space group on a Bloch wave function $\psi_{\boldsymbol{k}}(\boldsymbol{r})$
$$
\begin{align*}
\widehat{S}_{\{g \mid \boldsymbol{a}\}} \psi_{\boldsymbol{k}}(\boldsymbol{r})=\psi_{\boldsymbol{k}}\left(\{g \mid \boldsymbol{a}\}^{-1} \boldsymbol{r}\right)=\psi_{\boldsymbol{k}}\left(g^{-1} \boldsymbol{r}-g^{-1} \boldsymbol{a}\right).
\end{align*}
$$
Note that in Dirac notation we write for the Bloch state with lattice -momentum $\boldsymbol{k}$ as
$$
\begin{align*}
\psi_{\boldsymbol{k}}(\boldsymbol{r})=\left\langle\boldsymbol{r} \mid \psi_{\boldsymbol{k}}\right\rangle
\end{align*}
$$
The action of the operator $\widehat{S}_{\{g \mid \boldsymbol{a}\}}$ on the state $|\boldsymbol{r}\rangle$ is given by
$$
\begin{align*}
\widehat{S}_{\{g \mid \boldsymbol{a}\}}|\boldsymbol{r}\rangle=|g \boldsymbol{r}+\boldsymbol{a}\rangle \quad \text { and } \quad\langle\boldsymbol{r}| \widehat{S}_{\{g \mid a\}}=\left\langle g^{-1} \boldsymbol{r}-g^{-1} \boldsymbol{a}\right|,
\end{align*}
$$
such that
$$
\begin{align*}
\langle\boldsymbol{r}| \widehat{S}_{\{g \mid \boldsymbol{a}\}}\left|\psi_{\boldsymbol{k}}\right\rangle=\psi_{\boldsymbol{k}}\left(g^{-1} \boldsymbol{r}-g^{-1} \boldsymbol{a}\right) .
\end{align*}
$$

The same holds for pure translations. Note also that this definition has also implications on the sequential application of transformation operators such as
$$
\begin{align*}
\begin{aligned}
\widehat{S}_{\left\{g_{1} \mid \boldsymbol{a}_{1}\right\}} \widehat{S}_{\left\{g_{2} \mid \boldsymbol{a}_{2}\right\}} \psi_{\boldsymbol{k}}(\boldsymbol{r}) & =\langle\boldsymbol{r}| \widehat{S}_{\left\{g_{1} \mid \boldsymbol{a}_{1}\right\}} \widehat{S}_{\left\{g_{2} \mid \boldsymbol{a}_{2}\right\}}\left|\psi_{\boldsymbol{k}}\right\rangle=\left\langle\left\{g_{1} \mid \boldsymbol{a}_{1}\right\}^{-1} \boldsymbol{r}\right| \widehat{S}_{\left\{g_{2} \mid \boldsymbol{a}_{2}\right\}}\left|\psi_{\boldsymbol{k}}\right\rangle \\
& =\left\langle\left\{g_{2} \mid \boldsymbol{a}_{2}\right\}^{-1}\left\{g_{1} \mid \boldsymbol{a}_{1}\right\}^{-1} \boldsymbol{r} \mid \psi_{\boldsymbol{k}}\right\rangle=\psi_{\boldsymbol{k}}\left(\left\{g_{2} \mid \boldsymbol{a}_{2}\right\}^{-1}\left\{g_{1} \mid \boldsymbol{a}_{1}\right\}^{-1} \boldsymbol{r}\right)
\end{aligned}
\end{align*}
$$

Because $\{g \mid \boldsymbol{a}\}$ belongs to the space group of the crystal, we have $\left[\widehat{S}_{\{g \mid \boldsymbol{a}\}}, \mathcal{H}_{0}\right]=0$. Applying a pure translation $\widehat{T}_{\boldsymbol{a}^{\prime}}=\widehat{S}_{\left\{E \mid \boldsymbol{a}^{\prime}\right\}}$ to this new wave function,
$$
\begin{align*}
\begin{aligned}
\widehat{T}_{\boldsymbol{a}^{\prime}} \widehat{S}_{\{g \mid \boldsymbol{a}\}} \psi_{\boldsymbol{k}}(\boldsymbol{r}) & =\widehat{S}_{\{g \mid \boldsymbol{a}\}} \widehat{T}_{g^{-1} \boldsymbol{a}^{\prime}} \psi_{\boldsymbol{k}}(\boldsymbol{r})=\widehat{S}_{\{g \mid \boldsymbol{a}\}} e^{-i \boldsymbol{k} \cdot\left(g^{-1} \boldsymbol{a}^{\prime}\right)} \psi_{\boldsymbol{k}}(\boldsymbol{r}) \\
& =\widehat{S}_{\{g \mid \boldsymbol{a}\}} e^{-i(g \boldsymbol{k}) \cdot \boldsymbol{a}^{\prime}} \psi_{\boldsymbol{k}}(\boldsymbol{r}) \\
& =e^{-i(g \boldsymbol{k}) \cdot \boldsymbol{a}^{\prime}} \widehat{S}_{\{g \mid \boldsymbol{a}\}} \psi_{\boldsymbol{k}}(\boldsymbol{r}),
\end{aligned}
\end{align*}
$$
the latter is found to be an eigenfunction of $\widehat{T}_{\boldsymbol{a}^{\prime}}$ with eigenvalue $e^{-i(g \boldsymbol{k}) \cdot \boldsymbol{a}^{\prime}}$. Remember, that, according to the Bloch theorem, we chose a basis $\left\{\psi_{\boldsymbol{k}}\right\}$ diagonalising both $\widehat{T}_{\boldsymbol{a}}$ and $\mathcal{H}_{0}$. Thus, apart from a phase factor, the action of a symmetry transformation $\{g \mid \boldsymbol{a}\}$ on the wave function corresponds to a rotation from $\boldsymbol{k}$ to $g \boldsymbol{k}$.
$$
\begin{align*}
\widehat{S}_{\{g \mid \boldsymbol{a}\}} \psi_{\boldsymbol{k}}(\boldsymbol{r})=\lambda_{\{g \mid \boldsymbol{a}\}} \psi_{g \boldsymbol{k}}(\boldsymbol{r})
\end{align*}
$$
with $\left|\lambda_{\{g \mid a\}}\right|^{2}=1$, or
$$
\begin{align*}
\widehat{S}_{\{g \mid \boldsymbol{a}\}}|\boldsymbol{k}\rangle=\lambda_{\{g \mid \boldsymbol{a}\}}|g \boldsymbol{k}\rangle .
\end{align*}
$$
in Dirac notation. Here we used the symmetry behaviour of the wave function:
$$
\begin{align*}
\begin{aligned}
\widehat{S}_{\{g \mid \boldsymbol{a}\}} \psi_{\boldsymbol{k}}(\boldsymbol{r}) & =\frac{1}{\sqrt{\Omega}} \widehat{S}_{\{g \mid \boldsymbol{a}\}} e^{i \boldsymbol{k} \cdot \boldsymbol{r}} \sum_{\boldsymbol{G}} c_{\boldsymbol{G}}(\boldsymbol{k}) e^{i \boldsymbol{G} \cdot \boldsymbol{r}}=\frac{1}{\sqrt{\Omega}} e^{i \boldsymbol{k} \cdot\left(g^{-1} \boldsymbol{r}-g^{-1} \boldsymbol{a}\right)} \sum_{\boldsymbol{G}} c_{\boldsymbol{G}}(\boldsymbol{k}) e^{i \boldsymbol{G} \cdot\left(g^{-1} \boldsymbol{r}-g^{-1} \boldsymbol{a}\right)} \\
& =\frac{1}{\sqrt{\Omega}} e^{-i(g \boldsymbol{k}) \cdot \boldsymbol{a}} e^{i(g \boldsymbol{k}) \cdot \boldsymbol{r}} \sum_{\boldsymbol{G}} c_{\boldsymbol{G}}(\boldsymbol{k}) e^{i(g \boldsymbol{G}) \cdot \boldsymbol{r}}=e^{-i(g \boldsymbol{k}) \cdot \boldsymbol{a}} \frac{1}{\sqrt{\Omega}} e^{i(g \boldsymbol{k}) \cdot \boldsymbol{r}} \sum_{\boldsymbol{G}} c_{g^{-1} \boldsymbol{G}}(\boldsymbol{k}) e^{i \boldsymbol{G} \cdot \boldsymbol{r}} \\
& =e^{-i(g \boldsymbol{k}) \cdot \boldsymbol{a}} \frac{1}{\sqrt{\Omega}} e^{i(g \boldsymbol{k}) \cdot \boldsymbol{r}} \sum_{\boldsymbol{G}} c_{\boldsymbol{G}}(g \boldsymbol{k}) e^{i \boldsymbol{G} \cdot \boldsymbol{r}}=\lambda_{\{g \mid \boldsymbol{a}\}} \psi_{g \boldsymbol{k}}(\boldsymbol{r})
\end{aligned}
\end{align*}
$$
where we use the fact that $c_{\boldsymbol{G}}=c_{\boldsymbol{G}}(\boldsymbol{k})$ is a function of $\boldsymbol{k}$ with the property $c_{g^{-1} \boldsymbol{G}}(\boldsymbol{k})=c_{\boldsymbol{G}}(g \boldsymbol{k})$ i.e. $\widehat{S}_{\{g \mid \boldsymbol{a}\}} u_{\boldsymbol{k}}(\boldsymbol{r})=$ $u_{g \boldsymbol{k}}(\boldsymbol{r})$. Then it is easy to see that
$$
\begin{align*}
\epsilon_{g \boldsymbol{k}}=\langle g \boldsymbol{k}| \mathcal{H}_{0}|g \boldsymbol{k}\rangle=\langle\boldsymbol{k}| \widehat{S}_{\{g \mid \boldsymbol{a}\}}^{-1} \mathcal{H}_{0} \widehat{S}_{\{g \mid \boldsymbol{a}\}}|\boldsymbol{k}\rangle=\langle\boldsymbol{k}| \mathcal{H}_{0}|\boldsymbol{k}\rangle=\epsilon_{\boldsymbol{k}} .
\end{align*}
$$

Consequently, there is a star-like structure of equivalent points $g \boldsymbol{k}$ with the same band energy ( $\rightarrow$ degeneracy) for each $\boldsymbol{k}$ in the Brillouin zone:

![Attachments/Notes/Solid-State Theory/IMG-0126164732045.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164732045.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=24&rect=127,512,464,652|•]]
This call the 'star of k-points' in the Brillouin zone with degenerate band energies: Left panel: Star of k; Right panel: contour plot of a two dimensional band $\epsilon_k$ . The dots correspond to the star of  with degenerate energy values, demonstrating $\epsilon_{n,k}=\epsilon_{n,gk}$.

For a general point $\boldsymbol{k}$ the number of equivalent points in the star equals the number of point group elements for this $\boldsymbol{k}$ (without inversion). If $\boldsymbol{k}$ lies on points or lines of higher symmetry, it is left invariant under a subgroup of the point group. Consequently, the number of beams of the star is smaller. The subgroup of the point group leaving $\boldsymbol{k}$ unchanged is called _little group_ of $\boldsymbol{k}$. If inversion is part of the point group, $-\boldsymbol{k}$ is always contained in the star of $\boldsymbol{k}$. In summary, we have the simple relations
$$
\begin{align*}
\epsilon_{k}=\epsilon_{g k}, \quad \epsilon_{k}=\epsilon_{-k}, \quad \epsilon_{k}=\epsilon_{k+G}
\end{align*}
$$

Thus, we can also use symmetries to characterise Bloch states for given lattice -momentum $\boldsymbol{k}$. We now extend our discussion to further symmetry aspects connected with the degeneracy of band energies. Consider the little group for given lattice momentum $\boldsymbol{k}$, which is generally a subgroup of the point group, $\mathcal{P}_{\boldsymbol{k}} \subset \mathcal{P}$. For the given $\boldsymbol{k}$ we assume that there is a $d$-fold degeneracy of the band energy $\epsilon_{n, \boldsymbol{k}}$ with states $|\gamma ; n, \boldsymbol{k}\rangle$ with $\gamma=1, \ldots, d$, with
$$
\begin{align*}
\mathcal{H}|\gamma ; n, \boldsymbol{k}\rangle=\epsilon_{n, \boldsymbol{k}}|\gamma ; n, \boldsymbol{k}\rangle \quad \text { and } \quad\left\langle\gamma ; n, \boldsymbol{k} \mid \gamma^{\prime} ; n, \boldsymbol{k}\right\rangle=\delta_{\gamma \gamma^{\prime}} .
\end{align*}
$$

Operating an element $g \in \mathcal{P}_{\boldsymbol{k}}$ yields again an eigenstate of $\mathcal{H}$ with the same energy, because of $\left[\mathcal{H}, \widehat{S}_{\{g, \mathbf{0}\}}\right.$. Thus, we can write
$$
\begin{align*}
\widehat{S}_{\{g, \mathbf{0}\}}|\gamma, n, \boldsymbol{k}\rangle=\sum_{\gamma^{\prime}}\left|\gamma^{\prime}, n, \boldsymbol{k}\right\rangle \underbrace{\left\langle\gamma^{\prime}, n, \boldsymbol{k}\right| \widehat{S}_{\{g, \mathbf{0}\}}|\gamma, n, \boldsymbol{k}\rangle}_{=M_{\gamma^{\prime}, \gamma}(g)}
\end{align*}
$$
where $M_{\gamma^{\prime}, \gamma}(g)$ is a $d \times d$-matrix corresponding to the element $g$ and describing the transformation exclusively within the vector space defined by $\{|\gamma ; n, \boldsymbol{k}\rangle\}$. The matrices $M_{\gamma^{\prime}, \gamma}(g)$ is a representation of $\mathcal{P}_{\boldsymbol{k}}$ in this vector space. If the degeneracy is symmetry-imposed and not accidental then this representation is even irreducible.

---
## 1.6 Band-Filling and Materials Properties
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=25&selection=423,0,425,36|•]]

Due to the Fermionic character of electrons each of the band states $|n, \boldsymbol{k}, s\rangle$ can be occupied with one electron taking also the spin quantum number into account with spin $s=\uparrow$ and $\downarrow$ (Pauli exclusion principle). The count of electrons has profound implications on the properties of materials. Here we would like to look at the most simple classification of materials based on independent electrons.

### 1.6.1 Electron Count and Band Filling

We consider here a most simple band structure in the one-dimensional tight-binding model with nearest-neighbour coupling. The lattice has $N$ sites ( $N$ even) and we assume periodic boundary conditions. The Hamiltonian is given by
$$
\begin{align*}
\mathcal{H}=-t \sum_{j=1}^{N} \sum_{s=\uparrow, \downarrow}\left\{\hat{c}_{j+1, s}^{\dagger} \hat{c}_{j, s}+\hat{c}_{j, s}^{\dagger} \hat{c}_{j+1, s}\right\}
\end{align*}
$$
where we impose the equivalence $j+N=j$ (periodic boundary conditions). This Hamiltonian can be diagonalised by the Fourier transform
$$
\begin{align*}
\hat{c}_{j, s}=\frac{1}{\sqrt{N}} \sum_{k} \hat{a}_{k, s} e^{i R_{j} k}
\end{align*}
$$
leading to
$$
\begin{align*}
\mathcal{H}=\sum_{k, s} \epsilon_{k} \hat{a}_{k, s}^{\dagger} \hat{a}_{k, s} \quad \text { with } \quad \epsilon_{k}=-2 t \cos k a .
\end{align*}
$$

Now we request
$$
\begin{align*}
e^{i R_{j} k}=e^{i\left(R_{j}+L\right) k} \quad \Rightarrow \quad L k=N a k=2 \pi n \quad \Rightarrow \quad k=\frac{2 \pi}{L} n=\frac{2 \pi}{a} \frac{n}{N}
\end{align*}
$$
with the lattice -momentum $k$ within the first Brillouin zone ( $-\frac{\pi}{a}<k<\frac{\pi}{a}$ ) and $n$ being an integer. On the real-space lattice an electron can take $2 N$ different states. Thus, for $k$ we find that $n$ should take the values, $n+N / 2=1,2, \ldots, N-1, N$. Note that $k=-\pi / a$ and $k=+\pi / a$ differ by a reciprocal lattice vector $G=2 \pi / a$ and are therefore identical. This provides the same number of states $(2 N)$, since per $k$ we have two spins:


![Attachments/Notes/Solid-State Theory/IMG-0126164732256.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164732256.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=27&rect=119,504,478,752|•]]

We can fill these states with electrons following the Pauli exclusion principle.The figure shows the two typical situations: 
1. $N$ electrons corresponding to half of the possible electrons which can be accommodated leading to a half-filled band, and 
2. $2 N$ electrons exhausting all possible states representing a completely filled band. In the case of half-filling we define the Fermi energy as the energy $\epsilon_{F}$ of the highest occupied state, here $\epsilon_{F}=0$. This corresponds to the chemical potential, the energy necessary to add an electron to the system at $T=0 K$.

An important difference between 1. and 2.  is that the former allows for many different states which may be separated from each other by a very small energy. 

### 1.6.2 Metals, Semiconductors and Insulators

The two situations depicted in the next figure are typical as each atom (site) in a lattice contributes an integer number of electrons to the system. So we distinguish the case that there is an odd or an even number of electrons per unit cell. Note that the unit cell may contain more than one atom, unlike the situation shown in our tight-binding example.

In general, we make the distinction between different cases:

- **The bands can be either completely filled or empty when the number of electrons per atom (unit cell) is even**. Thus taking the complete set of energy bands into account, the chemical potential cannot be identified with a Fermi energy but lies within the energy gap separating highest filled and the lowest empty band. There is a finite energy needed to add, to remove or to excite an electron. If the band gap $E_{g}$ is much smaller than the bandwidth, we call the material a semiconductor. for $E_{g}$ of the order of the bandwidth, it is an (band) insulator. In both cases, for temperatures $T \ll E_{g} / k_{B}$ the application of a small electric voltage will not produce an electric transport. The highest filled band is called valence band, whereas the lowest empty band is termed conduction band. Examples for insulators are $C$ as diamond and for semiconductors $S i$ and $G e$. They have diamond lattice structure with two atoms per unit cell. As these atoms belong to the group IV in the periodic table, each provides an even number of electrons suitable for completely filling bands. Note that we will encounter another form of an insulator, the Mott insulator, whose insulating behaviour is not governed by a band structure effect, but by a correlation effect through strong Coulomb interaction.
- **If the number of electrons per unit cell is odd, the uppermost non-empty band is half filled**. Then the system is a metal, in which electrons can move and excitations with arbitrarily small energies are possible. The electrons remain mobile down to arbitrarily low temperatures. The standard example of a metal are the Alkali metals in the first column of the periodic table ( $\mathrm{Li}, \mathrm{Na}, \mathrm{K}, \mathrm{Rb}, \mathrm{Cs}$ ), as all of them have the configuration [noble gas] (ns)${ }^{1}$, i.e., one mobile electron per ion.
- In general, band structures are more complex. Different bands need not to be separated by energy gaps, but can overlap instead. In particular, this happens, if different orbitals are involved in the structure of the bands. In these systems, bands can have any fractional filling (not just filled or half-filled). The earth alkaline metals are an example for this (second column of the periodic table, $\mathrm{Be}, \mathrm{Mg}, \mathrm{Ca}, \mathrm{Sr}, \mathrm{Ba}$ ), which are metallic despite having two $(n, s)$-electrons per unit cell. Systems, where two bands overlap at the Fermi energy but the overlap is small, are termed semi-metals. The extreme case, where valence and conduction band touch in isolated points so that there are no electrons at the Fermi energy and still the band gap is zero, is realised in graphene.

![Attachments/Notes/Solid-State Theory/IMG-0126164732450.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164732450.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=28&rect=74,552,528,760|•]]

The electronic structure is also responsible for the cohesive forces necessary for the formation of a regular crystal. We may also classify materials according to relevant forces. We distinguish four major types of crystals:

**Molecular crystals** are formed from atoms or molecules with closed-shell atomic structures such as the noble gases He , Ne etc. which become solid under pressure. Here the van der Waals forces generate the binding interactions.

**Ionic crystals** combine different atoms, A and B, where A has a small ionisation energy while $B$ has a large electron affinity. Thus, electrons are transferred from A to B giving a positively charged $\mathrm{A}^{+}$and a negatively charge $B^{-}$. In a regular (alternating) lattice the energy gained through Coulomb interaction can overcome the energy expense for the charge transfer stabilising the crystal. A famous example is NaCl where one electron leaves Na ( $[\mathrm{Ne}] 3 s$ ) and is added to $\mathrm{Cl}\left([\mathrm{Ne}] 3 s^{2} 3 p^{5}\right)$ as to bring both atoms to closed-shell electronic configuration.

**Covalent-bonded crystals** form through chemical binding, like in the case of the $\mathrm{H}_{2}$, where neighboring atoms share electrons through the large overlap of the electron orbital wavefunction. Insulators like diamond C or semiconductors like Si or GaAs are important examples of this type as we will discuss later. Note that electrons of covalent bonds are localised between the atoms.

**Metallic bonding** is based on delocalised electrons (in contrast to the covalent bonds) stripped from their atoms. The stability of simple metals like the alkaly metals Li, Na, K etc will be discussed later. Note that many metals, such as the noble metals Au or Pt, can also
involve aspects of covalent or molecular bonding through overlapping but more localised electronic orbitals.

---
## 1.7 Dynamics of Band Electrons - Semiclassical Approach
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=29&selection=3,0,5,51|•]]

In quantum mechanics, the Ehrenfest theorem shows that the expectation values of the position and momentum operators obey equations similar to the equation of motion in Newtonian mechanics. An analogous formulation holds for electrons in a periodic potential, where we assume that the electron may be described as a wave packet of the form
$$
\begin{align*}
\psi_{\boldsymbol{k}}(\boldsymbol{r}, t)=\sum_{\boldsymbol{k}^{\prime}} g_{\boldsymbol{k}}\left(\boldsymbol{k}^{\prime}\right) e^{i \boldsymbol{k}^{\prime} \cdot \boldsymbol{r}-i \epsilon_{\boldsymbol{k}^{\prime}} t / \hbar}
\end{align*}
$$
where $g_{\boldsymbol{k}}\left(\boldsymbol{k}^{\prime}\right)$ is centred around $\boldsymbol{k}$ in reciprocal space and has a width of $\Delta k . \Delta k$ should be much smaller than the size of the Brillouin zone for this Ansatz to make sense, i.e., $\Delta k \ll 2 \pi / a$. Therefore, the wave packet is spread over many unit cells of the lattice since Heisenberg's uncertainty principle $(\Delta k)(\Delta x)>1$ implies $\Delta x \gg a / 2 \pi$. In this way, the lattice -momentum $\boldsymbol{k}$ of the wave packet remains well defined. Furthermore, the applied electric and magnetic fields have to be small enough not to induce transitions between different bands. The latter condition is not very restrictive in practice.

### 1.7.1 Semi-Classical Equations of Motion

We introduce the rules of the semi-classical motion of electrons with applied electric and magnetic fields without proof:

- The band index of an electron is conserved, i.e., there are no transitions between the bands.
- The equations of motion read
	$$
	\begin{align*}
	\begin{aligned}
	\dot{\boldsymbol{r}} & =\boldsymbol{v}_{n}(\boldsymbol{k})=\frac{\partial \epsilon_{n \boldsymbol{k}}}{\partial \hbar \boldsymbol{k}}, \\
	\hbar \dot{\boldsymbol{k}} & =-e \boldsymbol{E}(\boldsymbol{r}, t)-\frac{e}{c} \boldsymbol{v}_{n}(\boldsymbol{k}) \times \boldsymbol{H}(\boldsymbol{r}, t) .
	\end{aligned}
	\end{align*}
	$$
- All electronic states have a wave vector that lies in the first Brillouin zone, as $\boldsymbol{k}$ and $\boldsymbol{k}+\boldsymbol{G}$ label the same state for all reciprocal lattice vectors $\boldsymbol{G}$.
- In thermal equilibrium, the electron density per spin in the $n$-th band in the volume element $d^{3} k /(2 \pi)^{3}$ around $\boldsymbol{k}$ is given by
	$$
	\begin{align*}
	n_{F}\left[\epsilon_{n}(\boldsymbol{k})\right]=\frac{1}{e^{\left[\epsilon_{n}(\boldsymbol{k})-\mu\right] / k_{B} T}+1} .
	\end{align*}
	$$
	Each state of given $\boldsymbol{k}$ and spin can be occupied only once (Pauli principle).

Note that $\hbar \boldsymbol{k}$ is not the momentum of the electron, but the so-called lattice momentum or lattice momentum in the Bloch theory of bands. It is connected with the eigenvalue of the translation operator on the state. Consequently, the right-hand side of the equation (1.112) is not the force that acts on the electron, as the forces exerted by the periodic lattice potential is not included. The latter effect is contained implicitly through the form of the band energy $\epsilon(\boldsymbol{k})$, which governs the first equation. ${ }^{11}$

### 1.7.2 Bloch Oscillations

The fact that the band energy is a periodic function of $\boldsymbol{k}$ leads to a strange oscillatory behaviour of the electron motion in a static electric field. For illustration, consider a one-dimensional system where the band energy $\epsilon_{k}=-2 \cos k a$ leads to the solution of the semi-classical equations:
$$
\begin{align*}
\begin{aligned}
& & \hbar \dot{k} & =-e E \\
\Rightarrow & & k & =-\frac{e E t}{\hbar} \\
\Rightarrow & & \dot{x} & =-\frac{2 a}{\hbar} \sin \left(\frac{e E a t}{\hbar}\right),
\end{aligned}
\end{align*}
$$
in the presence of a homogenous electric field $E$. It follows immediately, that the position $x$ of the electron oscillates like
$$
\begin{align*}
x(t)=\frac{2}{e E} \cos \left(\frac{e E a t}{\hbar}\right) .
\end{align*}
$$

This behaviour is called Bloch oscillation and means that the electron oscillates around its initial position rather than moving in one direction when subjected to a static electric field. This effect can only be observed under very special conditions where the probe is absolutely clean. The effect is easily destroyed by damping or scattering, but has been experimentally observed for accelerated caesium atoms:
![Attachments/Notes/Solid-State Theory/IMG-0126164732631.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164732631.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=31&rect=159,551,427,691|•]]

### 1.7.3 Current Densities

We will see in chapter 6 that homogenous steady current carrying states of electron systems can be described by the momentum distribution $n(\boldsymbol{k})$. Assuming this property, the current density follows from
$$
\begin{align*}
\boldsymbol{j}=-2 e \int_{\mathrm{BZ}} \frac{d^{3} k}{(2 \pi)^{3}} \boldsymbol{v}(\boldsymbol{k}) n(\boldsymbol{k})=-2 e \int_{\mathrm{BZ}} \frac{d^{3} k}{(2 \pi)^{3}} n(\boldsymbol{k}) \frac{\partial \epsilon(\boldsymbol{k})}{\partial \hbar \boldsymbol{k}},
\end{align*}
$$
where the integral extends over all $\boldsymbol{k}$ in the Brillouin zone (BZ) and the factor 2 originates from the two possible spin states of the electrons. Note that for a finite current density $\boldsymbol{j}$, the momentum distribution $n(\boldsymbol{k})$ has to deviate from the equilibrium Fermi-Dirac distribution in equation (1.113). It is straight forward to show that the current density vanishes for an empty band. The same holds true for a completely filled band $(n(\boldsymbol{k})=1)$ where equation (1.111) implies
$$
\begin{align*}
\boldsymbol{j}=-2 e \int_{\mathrm{BZ}} \frac{d^{3} k}{(2 \pi)^{3}} \frac{1}{\hbar} \frac{\partial \epsilon(\boldsymbol{k})}{\partial \boldsymbol{k}}=0
\end{align*}
$$
because $\epsilon(\boldsymbol{k})$ is periodic in the Brillouin zone, i.e., $\epsilon(\boldsymbol{k}+\boldsymbol{G})=\epsilon(\boldsymbol{k})$ when $\boldsymbol{G}$ is a reciprocal lattice vector. Thus, neither empty nor completely filled bands can carry currents.
An interesting aspect of band theory is the picture of holes. We compute the current density for a partially filled band in the framework of the semi-classical approximation,
$$
\begin{align*}
\begin{aligned}
\boldsymbol{j} & =-2 e \int_{\mathrm{BZ}} \frac{d^{3} k}{(2 \pi)^{3}} n(\boldsymbol{k}) \boldsymbol{v}_{n}(\boldsymbol{k}) \\
& =-2 e\left[\int_{\mathrm{BZ}} \frac{d^{3} k}{(2 \pi)^{3}} \boldsymbol{v}(\boldsymbol{k})-\int_{\mathrm{BZ}} \frac{d^{3} k}{4 \pi^{3}}[1-n(\boldsymbol{k})] \boldsymbol{v}(\boldsymbol{k})\right] \\
& =+2 e \int_{\mathrm{BZ}} \frac{d^{3} k}{(2 \pi)^{3}}[1-n(\boldsymbol{k})] \boldsymbol{v}(\boldsymbol{k}) .
\end{aligned}
\end{align*}
$$

This suggests that the current density comes either from electrons in filled states with charge $-e$ or from 'holes', missing electrons carrying positive charge and sitting in the unoccupied electronic states. In band theory, both descriptions are equivalent. However, it is usually easier to work with holes, if a band is almost filled, and with electrons if the filling of an energy band is small.

---
## 1.8 Approximative Band Structure Calcuations
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=32&selection=10,0,12,50|•]]

While the approximation of nearly free electrons gives a qualitative picture of the band structure, it rests on the assumption that the periodic potential is weak, and, thus, may be treated as a small perturbation. Only few states connected with different reciprocal lattice vectors are sufficient within this approximation. However, in reality the ionic potential is strong compared to the electrons' kinetic energy. This leads to strong modulations of the wave function around the ions, which is not well described by slightly perturbed plane waves.

### 1.8.1 Pseudo-Potential

In order to overcome this weakness of the plane wave solution, we would have to superpose a very large number of plane waves, which is not an easy task to put into practice. Alternatively, we can divide the electronic states into the ones corresponding to filled low-lying energy states, which are concentrated around the ionic core (core states), and into extended (and more weakly modulated) states, which form the valence and conduction bands. The core electron states may be approximated by atomic orbitals of isolated atoms. For a metal such as aluminium (Al: $1 s^{2} 2 s^{2} 2 p^{6} 3 s^{2} 3 p$ ) the core electrons correspond to the $1 s$-, $2 s$-, and $2 p$-orbitals, whereas the $3 s$ and $3 p$-orbitals contribute dominantly to the extended states of the valence- and conduction bands. We will focus on the latter, as they determine the low-energy physics of the electrons. The core electrons are deeply bound and can be considered inert.

![Attachments/Notes/Solid-State Theory/IMG-0126164732804.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164732804.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=32&rect=170,222,426,375|•]]

We introduce the core electron states as $\left|\phi_{j}\right\rangle$, with $\mathcal{H}\left|\phi_{j}\right\rangle=E_{j}\left|\phi_{j}\right\rangle$ where $\mathcal{H}$ is the Hamiltonian of the single atom. The remaining states have to be orthogonal to these core states, so that we make the Ansatz
$$
\begin{align*}
\left|\phi_{n, \boldsymbol{k}}\right\rangle=\left|\chi_{n \boldsymbol{k}}\right\rangle-\sum_{j}\left|\phi_{j}\right\rangle\left\langle\phi_{j} \mid \chi_{n, \boldsymbol{k}}\right\rangle,
\end{align*}
$$
with $\left|\chi_{n, \boldsymbol{k}}\right\rangle$ an orthonormal set of states. Then, $\left\langle\phi_{n, \boldsymbol{k}} \mid \phi_{j}\right\rangle=0$ holds for all $j$. If we choose plane waves for the $\left|\chi_{n \boldsymbol{k}}\right\rangle$, the resulting $\left|\phi_{n, \boldsymbol{k}}\right\rangle$ are so-called orthogonalised plane waves (OPW). The

Bloch functions are superpositions of these OPW,
$$
\begin{align*}
\left|\psi_{n, \boldsymbol{k}}\right\rangle=\sum_{\boldsymbol{G}} b_{\boldsymbol{k}+\boldsymbol{G}}\left|\phi_{n, \boldsymbol{k}+\boldsymbol{G}}\right\rangle
\end{align*}
$$
where the coefficients $b_{\boldsymbol{k}+\boldsymbol{G}}$ converge rapidly, such that, hopefully, only a small number of OPWs is needed for a good description.
First, we again consider an arbitrary $\left|\chi_{n \boldsymbol{k}}\right\rangle$ and insert it into the eigenvalue equation $\mathcal{H}\left|\phi_{n \boldsymbol{k}}\right\rangle=$ $E_{n \boldsymbol{k}}\left|\phi_{n \boldsymbol{k}}\right\rangle$,
$$
\begin{align*}
\mathcal{H}\left|\chi_{n \boldsymbol{k}}\right\rangle-\sum_{j} \mathcal{H}\left|\phi_{j}\right\rangle\left\langle\phi_{j} \mid \chi_{n, \boldsymbol{k}}\right\rangle=E_{n \boldsymbol{k}}\left(\left|\chi_{n \boldsymbol{k}}\right\rangle-\sum_{j}\left|\phi_{j}\right\rangle\left\langle\phi_{j} \mid \chi_{n, \boldsymbol{k}}\right\rangle\right)
\end{align*}
$$
or
$$
\begin{align*}
\mathcal{H}\left|\chi_{n \boldsymbol{k}}\right\rangle+\sum_{j}\left(E_{n \boldsymbol{k}}-E_{j}\right)\left|\phi_{j}\right\rangle\left\langle\phi_{j} \mid \chi_{n, \boldsymbol{k}}\right\rangle=E_{n \boldsymbol{k}}\left|\chi_{n \boldsymbol{k}}\right\rangle .
\end{align*}
$$

We introduce the integral operator in real space $\widehat{V}^{\prime}=\sum_{j}\left(E_{n \boldsymbol{k}}-E_{j}\right)\left|\phi_{j}\right\rangle\left\langle\phi_{j}\right|$, describing a non-local and energy-dependent potential. With this operator we can rewrite the eigenvalue equation in the form
$$
\begin{align*}
\left(\mathcal{H}+\widehat{V}^{\prime}\right)\left|\chi_{n, \boldsymbol{k}}\right\rangle=\left(\mathcal{H}_{0}+\widehat{V}+\widehat{V}^{\prime}\right)\left|\chi_{n, \boldsymbol{k}}\right\rangle=\left(\mathcal{H}+\widehat{V}_{\mathrm{ps}}\right)\left|\chi_{n, \boldsymbol{k}}\right\rangle=E_{n \boldsymbol{k}}\left|\chi_{n \boldsymbol{k}}\right\rangle
\end{align*}
$$

This is an eigenvalue equation for the so-called pseudo-wave function (or pseudo-state) $\left|\chi_{n \boldsymbol{k}}\right\rangle$, instead of the Bloch state $\left|\psi_{n \boldsymbol{k}}\right\rangle$, where the modified potential $\widehat{V}_{\mathrm{ps}}=\widehat{V}+\widehat{V}^{\prime}$ is called pseudopotential. The attractive core potential $\widehat{V}=V(\widehat{\boldsymbol{r}})$ is always negative. On the other hand, $E_{n k}>E_{j}$, such that $\widehat{V}^{\prime}$ is positive. It follows that $\widehat{V}_{\mathrm{ps}}$ is weaker than both $\widehat{V}$ and $\widehat{V}^{\prime}$. An arbitrary number of core states $\sum_{j} a_{j}\left|\psi_{j}\right\rangle$ may be added to $\left|\chi_{n \boldsymbol{k}}\right\rangle$ without violating the orthogonality condition (1.126). Consequently, neither the pseudo-potential nor the pseudo-states are uniquely determined and may be optimised variationally with respect to the set $\left\{a_{j}\right\}$ in order to optimally reduce the spatial modulation of either the pseudo-potential or the wave-function.

![Attachments/Notes/Solid-State Theory/IMG-0126164732998.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164732998.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=33&rect=72,210,526,333|•]]

If we are only interested in states inside a small energy window, the energy dependence of the pseudo-potential can be neglected, and $V_{\mathrm{ps}}$ may be approximated by a standard potential (see Figure 1.11). Such a simple Ansatz is exemplified by the atomic pseudo-potential, proposed by Ashcroft, Heine and Abarenkov (AHA). The potential of a single ion is assumed to be of the form
$$
\begin{align*}
v_{\mathrm{ps}}(r)= \begin{cases}V_{0} & r<R_{c} \\ -\frac{Z_{\mathrm{ion}} e^{2}}{r} & r>R_{c}\end{cases}
\end{align*}
$$
where $Z_{\text {ion }}$ is the charge of the ionic core and $R_{c}$ its effective radius (determined by the core electrons). The constants $R_{c}$ and $V_{0}$ are chosen such that the energy levels of the outermost electrons are reproduced correctly for the single-atom calculations.

![Attachments/Notes/Solid-State Theory/IMG-0126164733206.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164733206.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=34&rect=156,585,439,756|•]]

 For example, the $1 s$ -, $2 s$-, and $2 p$-electrons of Na form the ionic core. $R_{c}$ and $V_{0}$ are adjusted such that the one-particle problem $\boldsymbol{p}^{2} / 2 m+v_{\mathrm{ps}}(r)$ leads to the correct ionisation energy of the $3 s$-electron. More flexible approaches allow for the incorporation of more experimental input into the pseudo-potential. The full pseudo-potential of the lattice can be constructed from the contribution of the individual atoms,
$$
\begin{align*}
V_{\mathrm{ps}}(\boldsymbol{r})=\sum_{n} v_{\mathrm{ps}}\left(\left|\boldsymbol{r}-\boldsymbol{R}_{j}\right|\right),
\end{align*}
$$
where $\boldsymbol{R}_{j}$ is the lattice vector. For the method of nearly free electrons we need the Fourier transform of the potential evaluated at the reciprocal lattice vectors,
$$
\begin{align*}
V_{\mathrm{ps}, \boldsymbol{G}}=\frac{1}{\Omega} \int d^{3} r V_{\mathrm{ps}}(\boldsymbol{r}) e^{-i \boldsymbol{G} \cdot \boldsymbol{r}}=\frac{N}{\Omega} \int d^{3} r v_{\mathrm{ps}}(\boldsymbol{r}) e^{-i \boldsymbol{G} \cdot \boldsymbol{r}} .
\end{align*}
$$

For the AHA form, this is given by
$$
\begin{align*}
\begin{aligned}
& V_{\mathrm{ps}, \boldsymbol{G}}=-\frac{4 \pi Z_{\mathrm{ion}} e^{2}}{G^{2}}\left(\cos \left(G R_{c}\right)\right. \\
&\left.+\frac{V_{0}}{Z_{\mathrm{ion}} e^{2} G}\left(\left(R_{c}^{2} G^{2}-2\right) \cos \left(G R_{c}\right)+2-2 R_{c} G \sin \left(G R_{c}\right)\right)\right) .
\end{aligned}
\end{align*}
$$

For small reciprocal lattice vectors, the zeroes of the trigonometric functions on the right-hand side of (1.134) reduce the strength of the potential. For large $G$, the pseudo-potential decays $\propto 1 / G^{2}$. It is thus clear that the pseudo-potential is always weaker than the original potential. Extending this theory for complex unit cells containing more than one atom, the pseudo-potential may be written as
$$
\begin{align*}
V_{\mathrm{ps}}(\boldsymbol{r})=\sum_{n, \alpha} v_{\mathrm{ps}}^{\alpha}\left(\left|\boldsymbol{r}-\left(\boldsymbol{R}_{j}+\boldsymbol{R}_{\alpha}\right)\right|\right),
\end{align*}
$$
where $\boldsymbol{R}_{\alpha}$ denotes the position of the $\alpha$-th base atom in the unit cell. Here, $v_{\mathrm{ps}}^{\alpha}$ is the pseudopotential of the $\alpha$-th ion. In reciprocal space,
$$
\begin{align*}
\begin{aligned}
V_{\mathrm{ps}, \boldsymbol{G}} & =\frac{N}{\Omega} \sum_{\alpha} e^{-i \boldsymbol{G} \cdot \boldsymbol{R}_{\alpha}} \int d^{3} r v_{\mathrm{ps}}^{\alpha}(|\boldsymbol{r}|) e^{-i \boldsymbol{G} \cdot \boldsymbol{r}} \\
& =\sum_{\alpha} e^{-i \boldsymbol{G} \cdot \boldsymbol{R}_{\alpha}} F_{\alpha, \boldsymbol{G}}
\end{aligned}
\end{align*}
$$

The form factor $F_{\alpha, \boldsymbol{G}}$ contains the information of the base atoms and may be calculated or obtained by fitting experimental data.

### 1.8.2 Augmented Plane Wave

We now consider a method introduced by Slater in 1937. It is an extension of the so-called Wigner-Seitz cell method (1933) and consists of approximating the crystal potential by a socalled muffin-tin potential. The latter is a periodic potential, which is taken to be spherically symmetric and position dependent around each atom up to a distance $r_{s}$, and constant for larger distances. The spheres of radius $r_{s}$ are taken to be non-overlapping and are contained completely in the Wigner-Seitz cell:

![Attachments/Notes/Solid-State Theory/IMG-0126164733379.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164733379.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=35&rect=208,418,388,601|•]]

The advantage of this decomposition is that the problem can be solved using a divide-andconquer strategy. Inside the muffin-tin radius we solve the spherically symmetric problem, while the solutions on the outside are given by plane waves; the remaining task is to match the solutions at the boundaries.
The spherically symmetric problem for $|\boldsymbol{r}|<r_{s}$ is solved with the standard Ansatz
$$
\begin{align*}
\varphi(\boldsymbol{r})=\frac{u_{l}(r)}{r} Y_{l m}(\theta, \phi),
\end{align*}
$$
where $(r, \theta, \phi)$ are the spherical coordinates or $\boldsymbol{r}$ and the radial part $u_{l}(r)$ of the wave function obeys the differential equation
$$
\begin{align*}
\left[-\frac{\hbar^{2}}{2 m} \frac{d^{2}}{d r^{2}}+\frac{\hbar^{2} l(l+1)}{2 m r^{2}}+V(r)-E\right] u_{l}(r, E)=0 .
\end{align*}
$$

We define an augmented plane wave (APW) $A(\boldsymbol{k}, \boldsymbol{r}, E)$, which is a pure plane wave with wave vector $\boldsymbol{k}$ outside the Muffin-tin sphere. For this, we employ the representation of plane waves by spherical harmonics,
$$
\begin{align*}
e^{i \boldsymbol{k} \cdot \boldsymbol{r}}=4 \pi \sum_{l=0}^{\infty} \sum_{m=-l}^{l} i^{l} j_{l}(k r) Y_{l m}^{*}(\hat{\boldsymbol{k}}) Y_{l m}(\hat{\boldsymbol{r}}),
\end{align*}
$$

[^10]where $j_{l}(x)$ is the $l$-th spherical Bessel function. We parametrise

$$
\begin{align*}
A(\boldsymbol{k}, \boldsymbol{r}, E)= \begin{cases}\frac{4 \pi}{\sqrt{\Omega_{\mathrm{UC}}}} \sum_{l, m} i^{l} j_{l}\left(k r_{s}\right) \frac{r_{s} u_{l}(r, E)}{r u_{l}\left(r_{s}, E\right)} Y_{l m}^{*}(\hat{\boldsymbol{k}}) Y_{l m}(\hat{\boldsymbol{r}}), & r<r_{s}, \\ \frac{4 \pi}{\sqrt{\Omega_{\mathrm{UC}}}} \sum_{l, m} i^{l} j_{l}(k r) Y_{l m}^{*}(\hat{\boldsymbol{k}}) Y_{l m}(\hat{\boldsymbol{r}}), & r>r_{s}\end{cases}
\end{align*}
$$
where $\Omega_{\mathrm{UC}}$ is the volume of the unit cell. Note that the wave function is always continuous at $r=r_{s}$, but that its derivatives are in general not continuous. We can use an expansion of the wave function $\psi_{\boldsymbol{k}}(\boldsymbol{r})$ similar to the one in the nearly free electron approximation (see equations (1.20) and (1.31)),
$$
\begin{align*}
\psi_{\boldsymbol{k}}(\boldsymbol{r})=\sum_{\boldsymbol{G}} c_{\boldsymbol{G}}(\boldsymbol{k}) A(\boldsymbol{k}+\boldsymbol{G}, \boldsymbol{r}, E)
\end{align*}
$$
where the $\boldsymbol{G}$ are reciprocal lattice vectors. The unknown coefficients can be determined variationally by solving the system of equations
$$
\begin{align*}
\sum_{\boldsymbol{G}}\left\langle A_{\boldsymbol{k}}(E)\right| \mathcal{H}-E\left|A_{\boldsymbol{k}+\boldsymbol{G}}(E)\right\rangle c_{\boldsymbol{G}}(\boldsymbol{k})=0,
\end{align*}
$$
where
$$
\begin{align*}
\left\langle A_{\boldsymbol{k}}(E)\right| \mathcal{H}-E\left|A_{\boldsymbol{k}^{\prime}}(E)\right\rangle=\left(\frac{\hbar^{2} \boldsymbol{k} \cdot \boldsymbol{k}^{\prime}}{2 m}-E\right) \Omega_{\mathrm{UC}} \delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}+V_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}
\end{align*}
$$
with
$$
\begin{align*}
\begin{aligned}
V_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}=4 \pi r_{s}^{2}\left[-\left(\frac{\hbar^{2} \boldsymbol{k} \cdot \boldsymbol{k}^{\prime}}{2 m}-E\right)\right. & \frac{j_{1}\left(\left|\boldsymbol{k}-\boldsymbol{k}^{\prime}\right| r_{s}\right)}{\left|\boldsymbol{k}-\boldsymbol{k}^{\prime}\right|} \\
& \left.+\sum_{l=0}^{\infty} \frac{\hbar^{2}}{2 m}(2 l+1) P_{l}\left(\hat{\boldsymbol{k}} \cdot \hat{\boldsymbol{k}}^{\prime}\right) j_{l}\left(k r_{s}\right) j_{l}\left(k^{\prime} r_{s}\right) \frac{u_{l}^{\prime}\left(r_{s}, E\right)}{u_{l}\left(r_{s}, E\right)}\right] .
\end{aligned}
\end{align*}
$$

Here, $P_{l}(z)$ is the $l$-th Legendre polynomial and $u^{\prime}=d u / d r$. The solution of (1.143) yields the energy bands. The most difficult parts are the approximation of the crystal potential by the muffin-tin potential and the computation of the matrix elements in (1.143). The rapid convergence of the method is its big advantage: just a few dozens of $\boldsymbol{G}$-vectors are needed and the largest angular momentum needed is about $l=5$. Another positive aspect is the fact that the APW-method allows the interpolation between the two extremes of extended, weakly bound electronic states and tightly bound states.

---
# 2 Semiconductors 
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=40&selection=2,0,2,14|•]]

The technological relevance of semiconductors can hardly be overstated. In this chapter, we review some of their basic properties. Regarding the electric conductivity, semiconductors are placed in between metals and insulators. Normal metals are good conductors at all temperatures, and the conductivity usually increases with decreasing temperature. On the other hand, for semiconductors and insulators the conductivity decreases upon cooling

![Attachments/Notes/Solid-State Theory/IMG-0126164733560.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164733560.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=40&rect=158,339,447,501|•]]

We will see that the conductivity may be written in the Drude form as
$$
\begin{align*}
\sigma=\frac{n e^{2} \tau}{m}
\end{align*}
$$
where $n$ is the density of mobile electrons, $\tau$ is the average time between two scattering events of the electrons (transport life time of electrons) and $m$ and $e$ are the electronic mass and charge, respectively. In metals, $n$ is essentially independent of temperature, whereas the scattering time $\tau$ decreases with increasing temperature. Thus, $\tau$ determines mainly the temperature dependence of the conductivity in metals. On the other hand, insulators and semiconductors have no mobile charges at $T=0$. At finite temperature, charges are induced by thermal excitations which have to overcome the band gap $E_{g}$ between the valence and the conduction band, yielding
$$
\begin{align*}
n \sim n_{0}\left(\frac{T}{T_{0}}\right)^{3 / 2} e^{-E_{g} / 2 k_{B} T}
\end{align*}
$$
where $T_{0}=300 \mathrm{~K}$ and the electron density in the material $n_{0}$ is typically $10^{20} \mathrm{~cm}^{-3}$. Actually, one has to count both the excited electrons in the conduction band and the resulting holes in the valence band, as both contribute to the current,
$$
\begin{align*}
\boldsymbol{j}=\left(\sigma_{+}+\sigma_{-}\right) \boldsymbol{E}, \quad \text { with } \quad \sigma_{ \pm}=\frac{n_{ \pm} e^{2} \tau_{ \pm}}{m_{ \pm}}
\end{align*}
$$
where + and - stand for holes and electrons, respectively, and $n_{+}=n_{-}$holds for thermal excitation. Note that, in general, the effective masses and scattering times are not the same for the valence and conduction bands.

For insulators, the energy gap is huge, e.g., 5.5 eV for diamond. Consequently, the charge carrier density at room temperature $T=300 \mathrm{~K}$ is around $n \sim 10^{-27} \mathrm{~cm}^{-3}$. For a higher charge carrier density $n \sim 10^{3}-10^{11} \mathrm{~cm}^{-3}$, smaller gaps $E_{g} \sim 0.5-1 \mathrm{eV}$ are necessary. Materials with a band gap in this regime are not fully isolating and, therefore, are termed semiconductors. However, the carrier densities of both insulators and semiconductors are dwarfed by the electron density in metals contributing to current transport ( $n_{\text {metal }} \sim 10^{23}-10^{24} \mathrm{~cm}^{-3}$ ). Adding a small amount of impurities in semiconductors, a process called doping with acceptors or donors, their conductivity can be engineered in various ways, rendering them useful as components in innumerable applications.

---
## 2.1 The Band Structure of the Elements in Group IV
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=41&selection=131,0,133,46|•]]

### 2.1.1 Crystal and Band Structure

The most important semiconductor for technological applications is silicon ( Si ) that - like carbon (C), germanium (Ge) and tin ( Sn ) - belongs to the group IV of the periodic table. These elements have four electrons in their outermost shell in the configuration $(\text{ns})^{2}(\mathrm{np})^{2}(\mathrm{n}=2$ for $\mathrm{C}, \mathrm{n}=3$ for $\mathrm{Si}, \mathrm{n}=4$ for Ge , and $\mathrm{n}=5$ for Sn ). All four elements form crystals with a diamond structure (cf. Figure 2.2), i.e., a face-centred cubic lattice with a unit cell containing two atoms located at $(0,0,0)$ and $\left(\frac{1}{4}, \frac{1}{4}, \frac{1}{4}\right)$ (for Sn this is called $\alpha-\mathrm{Sn}$ ). The crystal structure is stabilised by hybridisation of the four valence electrons, leading to covalent bonding of oriented orbitals,
$$
\begin{align*}
\begin{array}{ll}
\left|\psi_{1}\right\rangle=|\mathrm{ns}\rangle+\left|\mathrm{np}_{x}\right\rangle+\left|\mathrm{np}_{y}\right\rangle+\left|\mathrm{np}_{z}\right\rangle, & \\
\left|\psi_{2}\right\rangle=|\mathrm{ns}\rangle+\left|\mathrm{np}_{x}\right\rangle-\left|\mathrm{np}_{y}\right\rangle-\left|\mathrm{np}_{z}\right\rangle, \\
\left.\psi_{3}\right\rangle=|\mathrm{ns}\rangle-\left|\mathrm{np}_{x}\right\rangle+\left|\mathrm{np}_{y}\right\rangle-\left|\mathrm{np}_{z}\right\rangle, & \\
\left|\psi_{4}\right\rangle=|\mathrm{ns}\rangle-\left|\mathrm{np}_{x}\right\rangle-\left|\mathrm{np}_{y}\right\rangle+\left|\mathrm{np}_{z}\right\rangle .
\end{array}
\end{align*}
$$

Locally, the nearest neighbours of each atom form a tetrahedron around it, which leads to the diamond structure of the lattice:

![Attachments/Notes/Solid-State Theory/IMG-0126164733779.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164733779.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=41&rect=183,162,413,308|•]]

Let us look now at the electron count. The two atoms per unit cell provide together eight valence electrons per unit cell. With these we can fill four bands completely (Sect. 1.6). Thus, in the ground state the lowest four bands constitute the completely filled valence bands, while all the upper ones are empty and represent conduction bands. The energy gap between the valence and conduction bands (top of valence band at $\boldsymbol{k}=0$ and bottom of conduction bands at $\boldsymbol{k}_{0} \neq 0$ ) is smallest for a non-vanishing connecting $k$-vector. We call this an indirect gap. This is the case for both C and Si . A typical example for a direct gap semiconductor is GaAs where the two sub lattices of the crystal structure in diamond are occupied by an atom of the group III and V, respectively, in the periodic table.

![Attachments/Notes/Solid-State Theory/IMG-0126164734003.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164734003.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=42&rect=80,116,522,305|•]]

Note that generally energy gaps in semiconductors and insulators are classified to be direct if the
wave-vector connecting the maximum of the valence band and the minimum of the conduction band vanishes. Otherwise a gap is called indirect:

![Attachments/Notes/Solid-State Theory/IMG-0126164734192.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164734192.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=43&rect=111,552,489,719|•]]

List of some facts about these materials of the group IV and compounds combining group III and V :

- Carbon has an energy gap of around 5.5 eV in the diamond structure. Thus, in this configuration it is not a semiconductor but an insulator. The large energy gap causes the transparency of diamond in the visible range ( $1.5-3.5 \mathrm{eV}$ ), as the electromagnetic energy in this range cannot be absorbed by the electrons.
- The energy gap of silicon is 1.12 eV and thus much smaller; furthermore, it is indirect.
- Germanium has an indirect gap of 0.67 eV .
- GaAs and GaN have a direct energy gap of 1.43 eV and 3.5 eV , respectively.

---
## 2.2 Elementary Excitations in Semiconductors
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=43&selection=59,0,61,40|•]]

We consider a simple two-band model to illustrate the most basic properties of the excitation spectrum of a semiconductor. The Hamiltonian is given by
$$
\begin{align*}
\mathcal{H}=\sum_{\boldsymbol{k}, s} \epsilon_{V, \boldsymbol{k}} \hat{\boldsymbol{c}}_{V, \boldsymbol{k}, s}^{\dagger} \widehat{s}_{V, \boldsymbol{k}, s}+\sum_{\boldsymbol{k}, s} \epsilon_{C, \boldsymbol{k}} \widehat{c}_{C, \boldsymbol{k}, s}^{\dagger} \widehat{c}_{C, \boldsymbol{k}, s},
\end{align*}
$$
where $\epsilon_{V, \boldsymbol{k}}$ and $\epsilon_{C, \boldsymbol{k}}$ are the band energies of the valence band and conduction band, respectively. The figure shows the schematic band structure of a direct-gap semiconductor with a $\boldsymbol{k} \cdot \boldsymbol{p}$-approximation around the top of the valence and the bottom of the conduction band:

![Attachments/Notes/Solid-State Theory/IMG-0126164734711.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164734711.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=44&rect=163,589,434,752|•]]

The operator $c_{n k s}^{\dagger}\left(c_{n \boldsymbol{k} s}\right)$ creates (annihilates) an electron with (lattice -)momentum $\boldsymbol{k}$ and spin $s$ in the band $n, n \in\{V, C\}$. In the ground state $\left|\Phi_{0}\right\rangle$,
$$
\begin{align*}
\left|\Phi_{0}\right\rangle=\prod_{k, s} \widehat{c}_{V, k, s}^{\dagger}|0\rangle,
\end{align*}
$$
the valence band is completely filled, whereas the conduction band is empty. The product on the right-hand side runs over all wave vectors in the first Brillouin zone. The ground state energy is given by
$$
\begin{align*}
E_{0}=2 \sum_{k} \epsilon_{V, \boldsymbol{k}} .
\end{align*}
$$
The total momentum and spin of the ground state vanish. We next consider single electron excitations from that ground state. 
Where is the chemical potential? We assume a simple band structure for a direct-gap semiconductor based on the $\boldsymbol{k} \cdot \boldsymbol{p}$ approximation:
$$
\begin{align*}
\epsilon_{V, \boldsymbol{k}}=-\frac{\hbar^{2} \boldsymbol{k}^{2}}{2 m_{V}} \quad \text { and } \quad \epsilon_{C, \boldsymbol{k}}=E_{g}+\frac{\hbar^{2} \boldsymbol{k}^{2}}{2 m_{C}}
\end{align*}
$$

Now we calculate the electron distribution. The overall electron density is $n$ :
$$
\begin{align*}
n=\sum_{k \in \mathrm{BZ}} \sum_{s} 1=2 \int_{\mathrm{BZ}} \frac{d^{3} k}{(2 \pi)^{3}} 1 .
\end{align*}
$$

The density of electrons in the conduction and valence band for small finite temperatue are given by
$$
\begin{align*}
\begin{aligned}
& n_{C}=2 \int_{\mathrm{BZ}} \frac{d^{3} k}{(2 \pi)^{3}} n_{F}\left(\epsilon_{C, \boldsymbol{k}}\right)=\int_{\mathrm{BZ}} \frac{d^{3} k}{4 \pi^{3}} \frac{1}{e^{\beta\left(\epsilon_{C, \boldsymbol{k}}-\mu\right)}+1} \approx \int_{\mathrm{BZ}} \frac{d^{3} k}{4 \pi^{3}} e^{-\beta\left(\epsilon_{C, \boldsymbol{k}}-\mu\right)}=\frac{e^{\beta\left(\mu-E_{g}\right)}}{4 \pi^{3}}\left(\frac{2 \pi m_{C} k_{B} T}{\hbar^{2}}\right)^{3 / 2}, \\
& n-n_{V}=\int_{\mathrm{BZ}} \frac{d^{3} k}{4 \pi^{3}}\left(1-n_{F}\left(\epsilon_{V, \boldsymbol{k}}\right)\right)=\int_{\mathrm{BZ}} \frac{d^{3} k}{4 \pi^{3}} \frac{1}{e^{-\beta\left(\epsilon_{V, \boldsymbol{k}}-\mu\right)}+1} \approx \int_{\mathrm{BZ}} \frac{d^{3} k}{4 \pi^{3}} e^{\beta\left(\epsilon_{V, \boldsymbol{k}}-\mu\right)}=\frac{e^{-\beta \mu}}{4 \pi^{3}}\left(\frac{2 \pi m_{V} k_{B} T}{\hbar^{2}}\right)^{3 / 2}
\end{aligned}
\end{align*}
$$

Here we assumed that both $\mu$ and $E_{g}-\mu$ are much larger than $k_{B} T\left(\beta=1 / k_{B} T\right)$. Now we see that electron count gives $n_{C}+n_{V}=n$ such that we can set the two lines of the above equation equal to obtain for the chemical potential,
$$
\begin{align*}
\mu=\frac{E_{g}}{2}+\frac{3}{4} k_{B} T \ln \left(\frac{m_{V}}{m_{C}}\right) .
\end{align*}
$$

At $T=0$ the chemical potential is exactly in the centre of the band gap and then moves with increasing $T$, if the effective masses are different. Note also that for small temperatures the thermally activated carriers, electrons and holes, are well described by the classical Maxwell-Boltzmann distribution, as was used in the approximation of the integrals.

### 2.2.1 Electron-Hole Excitations

A simple excitation of the system consists of removing an electron (i.e., creating a hole) from the valence band and inserting it into the conduction band. We write such an excitation as
$$
\begin{align*}
\left|\boldsymbol{k}+\boldsymbol{q}, s ; \boldsymbol{k}, s^{\prime}\right\rangle=\widehat{c}_{C, \boldsymbol{k}+\boldsymbol{q}, s}^{\dagger} \widehat{c}_{V, \boldsymbol{k}, s^{\prime}}\left|\Phi_{0}\right\rangle=\widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s s^{\prime}}\left|\Phi_{0}\right\rangle
\end{align*}
$$
where we remove an electron with lattice -momentum $\boldsymbol{k}$ and spin $s^{\prime}$ in the valence band and replace it by an electron with $\boldsymbol{k}+\boldsymbol{q}$ and $s$ in the conduction band. The possibility of changing the spin from $s^{\prime}$ to $s$ and of shifting the wave vector of conduction electrons by $\boldsymbol{q}$ is included.

Furthermore $\left|\boldsymbol{k}+\boldsymbol{q}, s ; \boldsymbol{k}, s^{\prime}\right\rangle$ is assumed to be normalised. The electron-hole pair may either be in a spin-singlet (pure charge excitation $s=s^{\prime}$ ) or a spin-triplet state (spin excitation $s \neq s^{\prime}$ ). Apart from spin, the state is characterised by the wave vectors $\boldsymbol{k}$ and $\boldsymbol{q}$. 

To define the excitation energy: if we consider the eigenenergy of a state with an electron-hole excitation we obtain
$$
\begin{align*}
\mathcal{H} \widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s s^{\prime}}\left|\Phi_{0}\right\rangle=\mathcal{H}\left|\boldsymbol{k}+\boldsymbol{q}, s ; \boldsymbol{k}, s^{\prime}\right\rangle=E\left|\boldsymbol{k}+\boldsymbol{q}, s ; \boldsymbol{k}, s^{\prime}\right\rangle
\end{align*}
$$
which includes in $E$ also the ground state energy $E_{0}$. Thus, with
$$
\begin{align*}
\widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s s^{\prime}} \mathcal{H}\left|\Phi_{0}\right\rangle=E_{0} \widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s s^{\prime}}\left|\Phi_{0}\right\rangle=E_{0}\left|\boldsymbol{k}+\boldsymbol{q}, s ; \boldsymbol{k}, s^{\prime}\right\rangle
\end{align*}
$$
we may combine Eqs.(2.13) and (2.14) to obtain the excitation energy only, $E_{\boldsymbol{k}, \boldsymbol{q}, s s^{\prime}}=E-E_{0}$ through the commutator. The excitation energy can be obtained by
$$
\begin{align*}
E_{\boldsymbol{k}, \boldsymbol{q}, s s^{\prime}}\left|\boldsymbol{k}+\boldsymbol{q}, s ; \boldsymbol{k}, s^{\prime}\right\rangle=\left[\mathcal{H}, \widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s s^{\prime}}\right]\left|\Phi_{0}\right\rangle=\mathcal{H}\left|\boldsymbol{k}+\boldsymbol{q}, s ; \boldsymbol{k}, s^{\prime}\right\rangle-\underbrace{\widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s s^{\prime}} \mathcal{H}\left|\Phi_{0}\right\rangle}_{E_{0}\left|\boldsymbol{k}+\boldsymbol{q}, s ; \boldsymbol{k}, s^{\prime}\right\rangle},
\end{align*}
$$
such that,
$$
\begin{align*}
E_{\boldsymbol{k}, \boldsymbol{q}, s s^{\prime}}=\epsilon_{C, \boldsymbol{k}+\boldsymbol{q}}-\epsilon_{V, \boldsymbol{k}} .
\end{align*}
$$
The spectrum of the electron-hole excitations with fixed $\boldsymbol{q}$ is determined by the spectral function
$$
\begin{align*}
I(\boldsymbol{q}, E)=\sum_{n}|\langle\Phi_{n}| \widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s s^{\prime}}| \Phi_{0}\rangle\left.\right|^{2} \delta[E-(E_{n}-E_{0})]
\end{align*}
$$
where $\left|\Phi_{n}\right\rangle$ is energy eigenstate of $\mathcal{H}$ with energy $E_{n}$. Since $\widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s^{\prime}}\left|\Phi_{0}\right\rangle$ corresponds to an electron-hole excitation which is an eigenstate of $\mathcal{H}$ only $\left|\Phi_{n}\right\rangle$ being such excitations will give a non-vanishing matrix element. Consequently, we find
$$
\begin{align*}
I(\boldsymbol{q}, E)=\sum_{\boldsymbol{k}, s, s^{\prime}} \underbrace{\left.\left|\left\langle\boldsymbol{k}+\boldsymbol{q}, s ; \boldsymbol{k}, s^{\prime}\right| \hat{c}_{C, \boldsymbol{k}+\boldsymbol{q}, s^{\prime}}^{\dagger} \widehat{c}_{V, \boldsymbol{k} s^{\prime}}\right| \Phi_{0}\right\rangle\left.\right|^{2}}_{=1} \delta\left(E-\epsilon_{C, \boldsymbol{k}+\boldsymbol{q}}+\epsilon_{V, \boldsymbol{k}}\right) .
\end{align*}
$$

Note that the matrix elements are only exactly 1 , if $\left|\boldsymbol{k}+\boldsymbol{q}, s ; \boldsymbol{k}, s^{\prime}\right\rangle$ is an exact eigenstate of $\mathcal{H}$ and is not true when we take electron-electron interactions into account as below. Excitations exist for all pairs $E$ and $\boldsymbol{q}$ for which $I(\boldsymbol{q}, E)$ does not vanish, thus, only above a $\boldsymbol{q}$-dependent threshold, which is minimal for $\boldsymbol{q}=\boldsymbol{k}_{0}$, where $\boldsymbol{k}_{0}=0\left(\boldsymbol{k}_{0} \neq 0\right)$ for a direct (indirect) energy gap. As $\boldsymbol{k}$ is arbitrary, there is a continuum of excited states above the threshold for each $\boldsymbol{q}$ (see Figure 2.7). The magnitude of $I(\boldsymbol{q}, E)$ (not depicted here) is the density of excitations with momentum-energy transfer ( $\boldsymbol{q}, E)$. Note that the matrix elements are only exactly 1 , if $\left|\boldsymbol{k}+\boldsymbol{q}, s ; \boldsymbol{k}, s^{\prime}\right\rangle$ is an exact eigenstate of $\mathcal{H}$ and is not true when we take electron-electron interactions into account as below.
For the electron-hole excitations considered here, interactions among them was assumed to be irrelevant, and the electrons involved are treated as non-interacting particles. Note the analogy with the Dirac-sea in relativistic quantum mechanics: The electron-hole excitations of a semiconductor correspond to electron-positron pair creation in the Dirac theory.

### 2.2.2 Excitons

Taking into account the Coulomb interaction between the electrons, there is another class of excitations called excitons. In order to discuss them, we extend the Hamiltonian (2.5) by the Coulomb interaction,
$$
\begin{align*}
\widehat{V}=\sum_{s, s^{\prime}} \int d^{3} r d^{3} r^{\prime} \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{s^{\prime}}^{\dagger}\left(\boldsymbol{r}^{\prime}\right) \frac{e^{2}}{\left|\boldsymbol{r}-\boldsymbol{r}^{\prime}\right|} \widehat{\Psi}_{s^{\prime}}\left(\boldsymbol{r}^{\prime}\right) \widehat{\Psi}_{s}(\boldsymbol{r}),
\end{align*}
$$

![Attachments/Notes/Solid-State Theory/IMG-0126164734881.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164734881.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=46&rect=104,607,477,745|•]]
The figure shows the electron-hole excitation spectrum for direct and indirect gap semiconductors, excitation energy $E$ versus "momentum' transfer $q$. Excitations exist in the shaded region, where $I(q, E) \neq 0$.
where the field operators are defined by
$$
\begin{align*}
\widehat{\Psi}_{s}(\boldsymbol{r})=\frac{1}{\sqrt{\Omega}} \sum_{n=V, C} \sum_{\boldsymbol{k}} u_{n, \boldsymbol{k}}(\boldsymbol{r}) e^{i \boldsymbol{k} \cdot \boldsymbol{r}} \widehat{c}_{n, \boldsymbol{k} s},
\end{align*}
$$
where $u_{n, \boldsymbol{k}}(\boldsymbol{r})$ are the Bloch functions of the band $n=C, V$. Now, we consider a general particle-hole state,
$$
\begin{align*}
\left|\Phi_{\boldsymbol{q}}\right\rangle=\sum_{\boldsymbol{k}^{\prime}} A\left(\boldsymbol{k}^{\prime}\right) \widehat{c}_{C, \boldsymbol{k}^{\prime}+\frac{\boldsymbol{q}}{2}, s^{\prime}} \widehat{c}_{V, \boldsymbol{k}^{\prime}-\frac{\boldsymbol{q}}{2}, s^{\prime}}\left|\Phi_{0}\right\rangle=\sum_{\boldsymbol{k}^{\prime}} A\left(\boldsymbol{k}^{\prime}\right)\left|\boldsymbol{k}^{\prime}+\frac{\boldsymbol{q}}{2}, s ; \boldsymbol{k}^{\prime}-\frac{\boldsymbol{q}}{2}, s^{\prime}\right\rangle,
\end{align*}
$$
and demand that it satisfies the stationary Schrödinger equation $(\mathcal{H}+\widehat{V})\left|\Phi_{\boldsymbol{q}}\right\rangle=\left(E_{0}+E_{\boldsymbol{q}}\right)\left|\Phi_{\boldsymbol{q}}\right\rangle$. Note that compared to before, we introduce the momentum transfer $\hbar \boldsymbol{q}$ in a "symmetrised" way. This two-body problem can be expressed as
$$
\begin{align*}
\sum_{\boldsymbol{k}^{\prime}}\left\langle\boldsymbol{k}+\frac{\boldsymbol{q}}{2}, s ; \boldsymbol{k}-\frac{\boldsymbol{q}}{2}, s^{\prime}\right| \mathcal{H}+\widehat{V}\left|\boldsymbol{k}^{\prime}+\frac{\boldsymbol{q}}{2}, s ; \boldsymbol{k}^{\prime}-\frac{\boldsymbol{q}}{2}, s^{\prime}\right\rangle A\left(\boldsymbol{k}^{\prime}\right)=\left(E_{0}+E_{\boldsymbol{q}}\right) A(\boldsymbol{k}) .
\end{align*}
$$

The matrix elements are given by
$$
\begin{align*}
\left\langle\boldsymbol{k}+\frac{\boldsymbol{q}}{2}, s ; \boldsymbol{k}-\frac{\boldsymbol{q}}{2}, s^{\prime}\right| \mathcal{H}\left|\boldsymbol{k}^{\prime}+\frac{\boldsymbol{q}}{2}, s ; \boldsymbol{k}^{\prime}-\frac{\boldsymbol{q}}{2}, s^{\prime}\right\rangle=\delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}\left\{E_{0}+\epsilon_{C, \boldsymbol{k}+\frac{\boldsymbol{q}}{2}}-\epsilon_{V, \boldsymbol{k}-\frac{\boldsymbol{q}}{2}}\right\}
\end{align*}
$$
and
$$
\begin{align*}
\begin{aligned}
\langle\boldsymbol{k}+ & \left.\frac{\boldsymbol{q}}{2}, s ; \boldsymbol{k}-\frac{\boldsymbol{q}}{2}, s^{\prime}|\widehat{V}| \boldsymbol{k}^{\prime}+\frac{\boldsymbol{q}}{2}, s ; \boldsymbol{k}^{\prime}-\frac{\boldsymbol{q}}{2}, s^{\prime}\right\rangle= \\
& \frac{2 \delta_{s s^{\prime}}}{\Omega^{2}} \int d^{3} r d^{3} r^{\prime} u_{C, \boldsymbol{k}+\frac{\boldsymbol{q}}{2}}^{*}(\boldsymbol{r}) u_{V, \boldsymbol{k}-\frac{\boldsymbol{q}}{2}}(\boldsymbol{r}) u_{C, \boldsymbol{k}^{\prime}+\frac{q}{2}}\left(\boldsymbol{r}^{\prime}\right) u_{V, \boldsymbol{k}^{\prime}-\frac{\boldsymbol{q}}{2}}^{*}\left(\boldsymbol{r}^{\prime}\right) e^{-i \boldsymbol{q} \cdot\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)} \frac{e^{2}}{\left|\boldsymbol{r}-\boldsymbol{r}^{\prime}\right|} \\
- & \frac{1}{\Omega^{2}} \int d^{3} r d^{3} r^{\prime} u_{C, \boldsymbol{k}+\frac{\boldsymbol{q}}{2}}^{*}(\boldsymbol{r}) u_{V, \boldsymbol{k}-\frac{\boldsymbol{q}}{2}}\left(\boldsymbol{r}^{\prime}\right) u_{C, \boldsymbol{k}^{\prime}+\frac{q}{2}}(\boldsymbol{r}) u_{V, \boldsymbol{k}^{\prime}-\frac{q}{2}}^{*}\left(\boldsymbol{r}^{\prime}\right) e^{i\left(\boldsymbol{k}^{\prime}-\boldsymbol{k}\right) \cdot\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)} \frac{e^{2}}{\left|\boldsymbol{r}-\boldsymbol{r}^{\prime}\right|},
\end{aligned}
\end{align*}
$$

The first term is the exchange term, and the second term the direct term of the Coulomb interaction. Now we consider a semiconductor with a direct energy gap at the $\Gamma$-point and also focus on small momentum transfers $\hbar \boldsymbol{q}$. Thus, the most important wave vectors are those around $\boldsymbol{k}=0$. We approximate
$$
\begin{align*}
u_{n, \boldsymbol{k}^{\prime}}^{*}(\boldsymbol{r}) u_{n, \boldsymbol{k}}(\boldsymbol{r}) \approx \frac{1}{\Omega} \int d^{3} r u_{n, \boldsymbol{k}^{\prime}}^{*}(\boldsymbol{r}) u_{n, \boldsymbol{k}}(\boldsymbol{r})=\frac{1}{\Omega}\left\langle u_{n, \boldsymbol{k}^{\prime}} \mid u_{n, \boldsymbol{k}}\right\rangle \approx 1,
\end{align*}
$$
which is reasonable for $\boldsymbol{k} \approx \boldsymbol{k}^{\prime}$. In the same manner, we see that
$$
\begin{align*}
u_{C \boldsymbol{k}+\frac{q}{2}}^{*}(\boldsymbol{r}) u_{V, \boldsymbol{k}-\frac{q}{2}}(\boldsymbol{r}) \approx \frac{1}{\Omega}\left\langle\left. u_{C, \boldsymbol{k}+\frac{q}{2}} \right\rvert\, u_{V, \boldsymbol{k}-\frac{q}{2}}\right\rangle \approx \frac{1}{\Omega}\left\langle u_{C, \boldsymbol{k}} \mid u_{V, \boldsymbol{k}}\right\rangle=0 .
\end{align*}
$$

Note that the semiconductor is a dielectric medium with a dielectric constant $\varepsilon(\boldsymbol{D}=\varepsilon \boldsymbol{E})$. Classical electrodynamics states that
$$
\begin{align*}
\boldsymbol{\nabla} \cdot \boldsymbol{E}=\frac{4 \pi \rho}{\varepsilon}
\end{align*}
$$
i.e., the Coulomb potential is partially screened due to dielectric polarisation. Including this effect in the Schrödinger equation phenomenologically, the matrix element (2.24) takes on the form
$$
\begin{align*}
\left\langle\boldsymbol{k}+\frac{\boldsymbol{q}}{2}, s ; \boldsymbol{k}-\frac{\boldsymbol{q}}{2}, s^{\prime}\right| \widehat{V}\left|\boldsymbol{k}^{\prime}+\frac{\boldsymbol{q}}{2}, s ; \boldsymbol{k}^{\prime}-\frac{\boldsymbol{q}}{2}, s^{\prime}\right\rangle=-\frac{4 \pi e^{2}}{\Omega \varepsilon\left|\boldsymbol{k}-\boldsymbol{k}^{\prime}\right|^{2}} .
\end{align*}
$$

Thus, we can write the stationary equation (2.22) as
$$
\begin{align*}
\left(\epsilon_{C, \boldsymbol{k}+\frac{\boldsymbol{q}}{2}}-\epsilon_{V, \boldsymbol{k}-\frac{\boldsymbol{q}}{2}}-E\right) A(\boldsymbol{k})-\frac{1}{\Omega} \sum_{\boldsymbol{k}^{\prime}} \frac{4 \pi e^{2}}{\varepsilon\left|\boldsymbol{k}-\boldsymbol{k}^{\prime}\right|^{2}} A\left(\boldsymbol{k}^{\prime}\right)=0 .
\end{align*}
$$

We include the band structure using the $\boldsymbol{k} \cdot \boldsymbol{p}$ - approximation which, for a direct energy gap, leads to
$$
\begin{align*}
\epsilon_{C, \boldsymbol{k}}=\frac{\hbar^{2} \boldsymbol{k}^{2}}{2 m_{C}}+E_{g} \quad \text { and } \quad \epsilon_{V, \boldsymbol{k}}=-\frac{\hbar^{2} \boldsymbol{k}^{2}}{2 m_{V}} .
\end{align*}
$$

For simplicity we assume now that $m_{V}=m_{C}=m^{*}$, We define a so-called envelope function $F(\boldsymbol{r})$ by
$$
\begin{align*}
F(\boldsymbol{r})=\frac{1}{\sqrt{\Omega}} \sum_{\boldsymbol{k}} A(\boldsymbol{k}) e^{i \boldsymbol{k} \cdot \boldsymbol{r}}
\end{align*}
$$

This function satisfies the differential equation
$$
\begin{align*}
\left[-\frac{\hbar^{2} \boldsymbol{\nabla}^{2}}{2 \mu_{\mathrm{ex}}}-\frac{e^{2}}{\varepsilon|\boldsymbol{r}|}\right] F(\boldsymbol{r})=\left\{E-E_{g}-\frac{\hbar^{2} \boldsymbol{q}^{2}}{2 M_{\mathrm{ex}}}\right\} F(\boldsymbol{r}),
\end{align*}
$$
where $\mu_{\mathrm{ex}}$ is the reduced mass, i.e., $\mu_{\mathrm{ex}}^{-1}=2 / m^{*}$ and total mass $M_{\mathrm{ex}}=2 m^{*}$.
The stationary equation is equivalent to the Schrödinger equation of a hydrogen atom. The energy levels then are given by
$$
\begin{align*}
E_{\boldsymbol{q}}=E_{g}-\frac{\mu_{\mathrm{ex}} e^{4}}{2 \varepsilon^{2} \hbar^{2} n^{2}}+\frac{\hbar^{2} \boldsymbol{q}^{2}}{2 M_{\mathrm{ex}}},
\end{align*}
$$
which implies that there are excitations below the particle-hole continuum, corresponding to particle-hole bound states. This excitation spectrum is discrete and there is a well-defined relation between energy and momentum $(\boldsymbol{q})$, which is the wave vector corresponding to the centre of mass of the particle-hole pair. This non-trivial quasi-particle is called exciton. In the present approximation it takes on the form of a simple two-particle state. In fact, however, it may be viewed as a collective excitation, as the dielectric constant includes the polarisation by all electrons. When the screening is neglected, the excitonic states would not make sense as their energies would not be within the band gap but much below. For the case of weak binding considered above, the excitation is called a Wannier exciton. The typical binding energy is
$$
\begin{align*}
E_{b} \sim \frac{\mu_{\mathrm{ex}}}{m \varepsilon^{2}} R y
\end{align*}
$$

Typical values of the constants on the right-hand side are $\varepsilon \sim 10$ and $\mu_{\mathrm{ex}} \sim m / 10$, so that the binding energy is in the meV range. This energy is much smaller than the energy gap, such that the excitons are inside the gap:

![Attachments/Notes/Solid-State Theory/IMG-0126164735070.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164735070.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=48&rect=165,614,431,749|•]]

The exciton levels are dispersive and their spectrum becomes increasingly dense with increasing energy, similar to the hydrogen atom. When they merge with the particle-hole continuum the bound state is 'ionised', i.e., the electron and the hole dissociate and behave like independent particles.
Strongly bound excitons are called Frenkel excitons. In the limit of strong binding, the pair is almost local, so that the excitation is restricted to a single atom rather than involving the whole semiconductor band structure.
Excitons are mobile, but they carry no charge, as they consist of an electron and a hole with opposite charges. Their spin quantum number depends on $s$ and $s^{\prime}$. If $s=s^{\prime}$ the exciton is a spin singlet, while for $s \neq s^{\prime}$ it has spin triplet character, both corresponding to integer spin quasi-particles. For small densities they approximately obey Bose-Einstein statistics, as they are made from two Fermions. In special cases, Bose-Einstein condensation of excitons can be observed experimentally.

### 2.2.3 Optical Properties

Excitation in semiconductors can occur via the absorption of electromagnetic radiation. The energy and momentum transferred by a photon is $\hbar \omega$ and $\hbar \boldsymbol{q}$, respectively. With the linear light dispersion relation $\omega=c|\boldsymbol{q}|$ and the approximation $E_{g} \sim 1 e V \sim e^{2} / a$, we can estimate this momentum transfer in a semiconductor
$$
\begin{align*}
q=\frac{\omega}{c}=\frac{\hbar \omega}{h c} 2 \pi \sim \frac{e^{2}}{h c} \frac{2 \pi}{a}=\alpha \frac{2 \pi}{a} \ll \frac{2 \pi}{a},
\end{align*}
$$
where $c$ denotes the speed of light, $a$ the lattice constant, and $\alpha \approx 1 / 137$ the fine structure constant. With this, the momentum transfer from a photon to the excited electron can be ignored. In other words, pure electromagnetic excitations lead only to 'direct' excitations. For semiconductors with a direct energy gap (e.g., GaAs) the photo-induced electron-hole excitation is most easy and yields absorption rates with the characteristics
$$
\begin{align*}
\Gamma_{\mathrm{abs}}(\omega) \propto \begin{cases}\left(\hbar \omega-E_{g}\right)^{1 / 2}, & \text { dipole-allowed, } \\ \left(\hbar \omega-E_{g}\right)^{3 / 2}, & \text { dipole-forbidden }\end{cases}
\end{align*}
$$

Here, the terms "dipole-allowed" and "dipole-forbidden" have a similar meaning as in the excitation of atoms regarding whether matrix elements of the type $\left\langle u_{V, \boldsymbol{k}}\right| \boldsymbol{r}\left|u_{C, \boldsymbol{k}}\right\rangle$ are finite or vanish, respectively. Obviously, dipole-allowed transitions occur at a higher rate for photon energies immediately above the energy gap $E_{g}$, than for dipole-forbidden transitions.

For semiconductors with indirect energy gap (e.g., Si and Ge), the lowest energy transition connecting the top of the valence band to the bottom of the conduction band is not allowed without the help of phonons (lattice vibrations), which contribute little energy but much momentum transfer, as $\hbar \omega_{\boldsymbol{Q}} \ll \hbar \omega$ with $\omega_{\boldsymbol{Q}}=c_{s}|\boldsymbol{Q}|$ and the sound velocity $c_{s} \ll c$. The requirement of a phonon assisting in the transition reduces the transition rate to
$$
\begin{align*}
\Gamma_{\mathrm{abs}}(\omega) \propto c_{+}\left(\hbar \omega+\hbar \omega_{Q}-E_{g}\right)^{2}+c_{-}\left(\hbar \omega-\hbar \omega_{Q}-E_{g}\right)^{2}
\end{align*}
$$
where $c_{ \pm}$are constants and $\boldsymbol{Q}$ corresponds to the wave vector of the phonon connecting the top of the valence band and the bottom of the conduction band. There are two relevant processes: either the phonon is absorbed ( $c_{+}$-process) or it is emitted ( $c_{-}-$process). The next figure shows the phonon-assisted photon absorption in a semiconductor with indirect gap: phonon absorption (left panel) and phonon emission (right panel).

![Attachments/Notes/Solid-State Theory/IMG-0126164735250.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164735250.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=49&rect=161,439,439,604|•]]


In addition to the absorption into the particle-hole spectrum, absorption processes inducing exciton states exist. They lead to discrete absorption peaks below the absorption continuum. This is the situation in a direct-gap semiconductor:

![Attachments/Notes/Solid-State Theory/IMG-0126164735416.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164735416.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=49&rect=183,159,415,340|•]]

Naturally, the recombination of electrons and holes is important as well; in particular, if it is a radiative recombination, i.e., leads to the emission of a photon. Additionally, other recombination channels such as recombination at impurities, interfaces and through Auger processes are possible. The radiative recombination for the direct-gap semiconductors is most relevant for applications. The photon emission rate follows the approximate law
$$
\begin{align*}
\Gamma_{\mathrm{em}}(\omega) \propto\left[N_{\gamma}(\omega)+1\right]\left(\hbar \omega-E_{g}\right)^{1 / 2} e^{-\hbar \omega / k_{B} T},
\end{align*}
$$
with the photon density $N_{\gamma}(\omega)$. This yields the dominant rate for $\hbar \omega$ very close to $E_{g}$.

---
## 2.3 Doping Semiconductors
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=50&selection=57,0,59,21|•]]

Let us replace a Si atom in a Si semiconductor by aluminium Al (group III) or phosphorus P (group V), which then act as impurities in the crystal lattice. Both Al and P are in the same row of the periodic table, and their electron configurations are given by
$$
\begin{align*}
\begin{aligned}
\mathrm{Al}: & {\left[(1 \mathrm{~s})^{2}(2 \mathrm{~s})^{2}(2 \mathrm{p})^{6}\right] \underline{(3 \mathrm{~s})^{2}(3 \mathrm{p}),} } \\
\mathrm{P}: & {\left[(1 \mathrm{~s})^{2}(2 \mathrm{~s})^{2}(2 \mathrm{p})^{6}\right](3 \mathrm{~s})^{2}(3 \mathrm{p})^{3} . }
\end{aligned}
\end{align*}
$$

The compound $\mathrm{Al}(\mathrm{P})$ has one electron less (more) than Si.

### 2.3.1 Impurity State

We consider the case of a P-impurity contributing an additional electron whose dynamics is governed by the conduction band of the semiconductor. For the sake of simplicity, we describe the conduction band by a single isotropic band with effective mass $m_{C}$,
$$
\begin{align*}
\epsilon_{\boldsymbol{k}}=\frac{\hbar^{2} \boldsymbol{k}^{2}}{2 m_{C}}+E_{g} .
\end{align*}
$$

In the neutral Si background, the phosphorus ( P ) ion represents a positively charged centre, which attracts its additional electron. In the simplest model, this situation is described by the so-called Wannier equation
$$
\begin{align*}
\left\{-\frac{\hbar^{2} \boldsymbol{\nabla}^{2}}{2 m_{C}}-\frac{e^{2}}{\varepsilon|\boldsymbol{r}|}\right\} F(\boldsymbol{r})=E F(\boldsymbol{r}),
\end{align*}
$$
which is nothing else than the static Schrödinger equation for the hydrogen atom, where the dielectric constant $\varepsilon$ measures the screening of the ionic potential by the surrounding electrons. Analogous to the discussion of the exciton states, $F(\boldsymbol{r})$ is an envelope wave function of the electron. Therefore, the low energy states of the additional electron are bound states around the P ion. The electron may become mobile when this "reduced hydrogen atom" is ionised. The binding energy relative to the minimum of the conduction band given by
$$
\begin{align*}
E_{n}-E_{g}=-\frac{m_{C} e^{4}}{2 \hbar^{2} \varepsilon^{2} n^{2}}=-\frac{m_{C}}{m \varepsilon^{2} n^{2}} \mathrm{Ry}
\end{align*}
$$
for $n \in \mathbb{N}$ and the effective radius (corresponding to the renormalised Bohr radius in the material) of the lowest bound state reads
$$
\begin{align*}
r_{1}=\frac{\hbar^{2} \varepsilon}{m^{*} e^{2}}=\frac{\varepsilon m}{m_{C}} a_{B},
\end{align*}
$$
where $a_{B}=0.53 \text{ }\pu{Å}$ is the Bohr radius for the hydrogen atom. For Si we find $m_{C} \approx 0.2 m$ and $\varepsilon \approx 12$, such that
$$
\begin{align*}
E_{1} \approx-20 \mathrm{meV}
\end{align*}
$$
$$
\begin{align*}
r_{1} \approx 30 \text{ }\pu{Å} .
\end{align*}
$$

Thus, the resulting states are weakly bound, with energies inside the band gap. We conclude that the net effect of the P-impurities is to introduce additional electrons into the crystal, whose energies lie just below the conduction band ( $E_{g} \sim 1 \mathrm{eV}$ while $E_{g}-E_{1} \sim 10 \mathrm{meV}$ ). Therefore, they can easily be transferred to the conduction band by thermal excitation (ionisation). One speaks of an $n$-doped semiconductor ( n : negative charge). In full analogy one can consider Al-impurities, thereby replacing electrons with holes: An Al-atom introduces an additional hole into the lattice which is weakly bound to the Al-ion (its energy is slightly above the band edge of the valence band) and may dissociate from the impurity by thermal excitation. This case is called $p$-doping ( p : positive charge). In both cases, the chemical potential is tied to the dopand levels, i.e., it lies between the dopand level and the valence band for p -doping and between the dopand level and the conduction band in case of n -doping:

![Attachments/Notes/Solid-State Theory/IMG-0126164735598.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164735598.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=51&rect=102,412,496,546|•]]

The electric conductivity of semiconductors (in particular at room temperature) can be tuned strongly by doping with so-called 'donors' (n-doping) and 'acceptors' (p-doping). Practically all dopand atoms are ionised, with the electrons/holes becoming mobile. Combining differently doped semiconductors, the possibility to engineer electronic properties is enhanced even more. This is the basic reason for the semiconductors being ubiquitous in modern electronics.

### 2.3.2 Carrier Concentration

Let us briefly compare the carrier concentration in doped and undoped semiconductors at room temperature. Carriers are always created in form of electron hole pairs, following the "reaction formula"
$$
\begin{align*}
e+h \leftrightarrow \gamma,
\end{align*}
$$
where $\gamma$ denotes a photon which is absorbed ( $e-h$-creation) or emitted ( $e-h$-recombination) and accounts for the energy balance. The carrier concentration is described by a mass action law of the form,
$$
\begin{align*}
n_{e} n_{h}=n_{0}^{2}\left(\frac{T}{T_{0}}\right)^{3} e^{-E_{g} / k_{B} T}=n^{2}(T),
\end{align*}
$$
where $T_{0}, n_{0}$ and $E_{g}$ are parameters specific to the semiconductor. In the case of undoped silicon at $T=300 \mathrm{~K}, n_{e} n_{h} \approx 10^{20}\left(\mathrm{~cm}^{-3}\right)^{2}$. Thus, for the undoped semiconductor we find $n_{e}=n_{h} \approx 10^{10} \mathrm{~cm}^{-3}$. On the other hand, for n -doped Si with a typical donor concentration of $n_{D} \approx 10^{17} \mathrm{~cm}^{-3}$ we can assume that most of the donors are ionised at room temperature such that
$$
\begin{align*}
n_{e} \approx n_{D} \approx 10^{17} \mathrm{~cm}^{-3}
\end{align*}
$$
and
$$
\begin{align*}
n_{h}=\frac{n^{2}(T)}{n_{e}} \approx 10^{3} \mathrm{~cm}^{-3}
\end{align*}
$$

We conclude, that in n-doped semiconductors the vast majority of mobile carriers are electrons, while the hole carriers are negligible. The opposite is true for p-doped Si .

---
## 2.4 Semiconductor Devices
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=52&selection=61,0,63,21|•]]

Semiconductors are among the most important components of current high-technology. In this section, we consider a few basic examples of semiconductor devices.

## 2.5 1 pn-Contacts

The so-called pn-junctions, made by bringing in contact a p-doped and an n-doped version of the same semiconductor, are used as rectifiers. ${ }^{4}$ When contacting the two types of doped semiconductors the chemical potential, which is pinned by the dopand (impurity) levels, determines the behaviour of the electrons at the interface. In electrostatic equilibrium, the chemical potential is constant across the interface. This is accompanied by a "band bending" leading to the ionisation of the impurity levels in the interface region (see Figure 2.12). Consequently, these ions produce an electric dipole layer which induces an electrostatic potential shift across the interface. Additionally, the carrier concentration is strongly reduced in the interface region (depletion layer).

![Attachments/Notes/Solid-State Theory/IMG-0126164735782.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164735782.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=52&rect=186,205,416,362|•]]

In the absence of a voltage $U$ over the junction, the net current flow vanishes because the dipole is in electrostatic equilibrium. This can also be interpreted as the equilibrium of two oppositely directed currents, called the drift current $J_{\text {drift }}$ and the diffusion current $J_{\text {diff }}$. From the point of view of the electrons, the dipole field exerts a force pulling the electrons from the p-side to the n-side. This leads to the drift current $J_{\text {drift. }}$. On the other hand, the electron concentration gradient leads to the diffusion current $J_{\text {diff }}$ from the n -side to the p -side. The diffusion current is directed against the potential gradient, so that the diffusing electrons have to overcome a potential step. The equilibrium condition for $U=0$ is given by

$$
\begin{align*}
0=J_{\mathrm{tot}}(U=0)=J_{\text {diff }}+J_{\mathrm{drift}} \propto C_{1}(T) e^{-E_{g} / k_{B} T}-C_{2}(T) e^{-E_{g} / k_{B} T}=0,
\end{align*}
$$
where $C_{1}=C_{2}=C$. Both currents are essentially determined by the factor $C(T) e^{-E_{g} / k_{B} T}$. For the drift current, the exponential behaviour $e^{-E_{g} / k_{B} T}$ stems from the dependence of the current on the concentration of mobile charge carriers (electrons and holes on the p -side and n -side, respectively), which are created by thermal excitation (Boltzmann factor). Applying a voltage does not change this contribution significantly. For the diffusion current however, the factor $C(T) e^{-E_{g} / k_{B} T}$ describes the thermal activation over the dipole barrier, which in turn strongly depends on the applied voltage $U$. For zero voltage, the height of the barrier $E_{b}$ is essentially given by the energy gap $E_{b} \approx E_{g}$. With an applied voltage, this is modified according to $E_{b} \approx E_{g}-e U$, where $e U=\mu_{n}-\mu_{p}$ is the difference of the chemical potentials between the n-side and the p-side. From these considerations, the well-known current-voltage characteristic of the pn-junctions follows directly as
$$
\begin{align*}
J_{\text {tot }}(U)=C(T) e^{-E_{g} / k_{B} T}\left(e^{e U / k_{B} T}-1\right) .
\end{align*}
$$

For $U>0$, the current is rapidly enhanced with increasing voltage. This is called forward bias. By contrast, charge transport is suppressed for $U<0$ (reverse bias), leading to small currents only. The current-voltage characteristics $J(U)$ (see Figure 2.13 ) shows a clearly asymmetric behaviour, which can be used to rectify ac-currents. Rectifiers (or diodes) are an important component of many integrated circuits.

![Attachments/Notes/Solid-State Theory/IMG-0126164735956.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164735956.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=53&rect=70,337,526,425|•]]

### 2.5.1 Semiconductor Diodes

#### 2.5.1.1 Light Emitting Diode

As mentioned above, the recombination of electrons and holes can lead to the emission of photons (radiative recombination) with a rather well-defined frequency essentially corresponding to the energy gap $E_{g}$. An excess of electron-hole pairs can be produced in pn-diodes by running a current in forward direction. Using different semiconductors with different energy gaps allows to tune the colour of the emitted light. Direct-gap semiconductors are most suitable for this kind of devices. Well-know are the semiconductors of the GaAs-GaN series (see table 2.1). These techniques are commonly used in LED (light emitting diode) lamps.

There appear efficiency problems concerning the emission of light by semiconductors. In particular, the difference in refractive indices inside $n_{\mathrm{SC}} \approx 3$ and outside $n_{\text {air }} \approx 1$ the device leads to large reflective losses. Thus, the efficacy of diode light sources, defined as the number of photons emitted per created particle-hole pair, is small, but still larger than the efficiency of conventional dissipative light bulbs.

#### 2.5.1.2 Solar Cell

Inversely to the previous consideration, the population of charge carriers can be changed by the absorption of light. Suppose that the n-side of a diode is exposed to irradiation by light, which leads to an excess of hole carriers (minority charge carriers). Some of these holes will diffuse towards the pn-interface and will be drawn to the p-side by the dipole field. In this way, they induce an additional current $J_{L}$ modifying the current-voltage characteristics to
$$
\begin{align*}
J_{\mathrm{tot}}=J_{p n}-J_{L}=J_{s}\left(e^{e U / k_{B} T}-1\right)-J_{L} .
\end{align*}
$$

It is important for the successful migration of the holes to the interface dipole that they do not recombine too quickly. When $J_{\text {tot }}=0$, the voltage drop across the diode is
$$
\begin{align*}
U_{L}=\frac{k_{B} T}{e} \ln \left(\frac{J_{L}}{J_{s}}+1\right) .
\end{align*}
$$

The maximum efficiency is reached by applying an external voltage $U_{c}<U_{L}$ such that the product $J_{c} U_{c}$ is maximised, where $J_{c}=J_{\text {tot }}\left(U=U_{c}\right)$:

![Attachments/Notes/Solid-State Theory/IMG-0126164736149.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164736149.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=54&rect=80,324,520,463|•]]

#### 2.5.1.3 MOSFET

The arguably most important application of semiconductors is the transistor, an element existing with different architectures. Here we shortly introduce the MOSFET (Metal-Oxide-Semiconductor-Field-Effect-Transistor). A transistor is a switch allowing to control the current through the device by switching a small control voltage. In the MOSFET, this is achieved by changing the charge carrier concentration in a p-doped semiconductor using a metallic gate. The basic design of a MOSFET is as follows: A thin layer of $\mathrm{SiO}_{2}$ is deposited on the surface of a p-type semiconductor. $\mathrm{SiO}_{2}$ is a good insulator that is compatible with the lattice structure of Si. Next, a metallic layer, used as a gate electrode, is deposited on top of the insulating layer.

![Attachments/Notes/Solid-State Theory/IMG-0126164736341.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164736341.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=55&rect=159,674,432,767|•]]

The voltage between the Si semiconductor and the metal electrode is called gate voltage $U_{G}$. The insulating $\mathrm{SiO}_{2}$ layer ensures that no currents flow between the electrode and the semiconductor when a gate voltage is applied. The switchable currents in the MOSFET flow between the source and the drain which are heavily n-doped semiconductor regions. Depending on the applied gate voltage $U_{G}$ three different regimes can be realised:

1. $U_{G}=0$
	Essentially no current flows, as the conduction band of the p-doped semiconductor is empty. The doping states (acceptor levels) are occupied by thermal excitations. 

2. $0<\frac{e U_{G}}{E_{g}}<1$
	In this case, the energy of the Si bands is lowered, such that in a narrow region within the p-doped Si the acceptor levels drops below the chemical potential and the states are filled with electrons (or, equivalently, holes are removed). This depletion layer has the extension $d$ measured from the $\mathrm{Si}-\mathrm{SiO}_{2}$ interface. The negative charge of the acceptors leads to a position-dependent potential $\Phi(z)$, where $z$ is the distance from the boundary between $\mathrm{SiO}_{2}$ and Si . This potential $\Phi(z)$ satisfies the simple one-dimensional Poisson equation
	$$
	\begin{align*}
	\frac{d^{2}}{d z^{2}} \Phi(z)=\frac{4 \pi \rho(z)}{\varepsilon}
	\end{align*}
	$$
	where the charge density originates in the occupied acceptor levels,
	$$
	\begin{align*}
	\rho(z)=\left\{\begin{aligned}
	-e n_{A}, & z<d, \\
	0, & z>d,
	\end{aligned}\right.
	\end{align*}
	$$
	and $n_{A}$ is the density of acceptors. The boundary conditions are given by
	$$
	\begin{align*}
	\Phi(z=0)=U_{G} \quad \text { and } \quad \Phi(z=d)=0 .
	\end{align*}
	$$
	
	The solution for $0 \leq z \leq d$ then reads
	$$
	\begin{align*}
	\Phi(z)=\frac{2 \pi e n_{A}}{\varepsilon}(z-d)^{2}, \quad \text { with } \quad d^{2}=\frac{\varepsilon U_{G}}{2 \pi e n_{A}} .
	\end{align*}
	$$
	
	The thickness of the depletion layer increases with increasing gate voltage $d^{2} \propto U_{G}$.

3. $1<\frac{e U_{G}}{E_{g}}$

	When the applied gate voltage is sufficiently large, a so-called inversion layer is created:
	
	![Attachments/Notes/Solid-State Theory/IMG-0126164736502.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164736502.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=55&rect=81,481,515,641|•]]
 
	 Close to the boundary, the conduction band is bent down so that its lower edge lies below the chemical potential. The electrons accumulating in this inversion layer providing carriers connecting the n -type source and drain electrodes and producing a large, nearly metallic, current between source and drain. Conduction band electrons accumulating in the inversion layer behave like a two-dimensional electron gas. In such a system, the quantum Hall effect (QHE), which is characterised by highly unusual charge transport properties in the presence of a large magnetic field, can occur.

---
# 3 Metals 
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=57&selection=2,0,2,6|•]]

The electronic states in a periodic atomic lattice are extended and have an energy spectrum forming energy bands. In the ground state these energy states are filled successively starting at the bottom of the electronic spectrum until the number of electrons is exhausted. Metallic behaviour occurs whenever in this way a band is only partially filled. The fundamental difference that distinguishes metals from insulators and semiconductors is the absence of a gap for electron-hole excitations. In metals, the ground state can be excited at arbitrarily small energies which has profound phenomenological consequences.
We will consider a basic model suitable for the description of simple metals like the Alkali metals $\mathrm{Li}, \mathrm{Na}$, or K , where the (atomic) electron configuration consists of closed shell cores and one single valence electron in an ns-orbital. Neglecting the core electrons (completely filled bands), we consider the valence electrons only and apply the approximation of nearly free electrons. The lowest band around the $\Gamma$-point is then half-filled. First, we will also neglect the influence of the periodic lattice potential and consider the problem of a free electron gas subject to mutual (repulsive) Coulomb interaction.

## 3.1 The Jellium Model of the Metallic State
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=57&selection=23,0,25,39|•]]

The Jellium model is the probably simplest possible model of a metal that is able to describe qualitative and to some extend even quantitative aspects of simple metals. The main simplification made is to replace the ionic lattice by a homogeneous positively charged background (Jellium). The uniform charge density $e n_{\text {ion }}$ is chosen such that the whole system - electrons and ionic background - is charge neutral, i.e. $n_{\text {ion }}=n$, where $n$ is the electron density. In this fully translational invariant system, the plane waves
$$
\begin{align*}
\psi_{\boldsymbol{k}, s}(\boldsymbol{r})=\frac{1}{\sqrt{\Omega}} e^{i \boldsymbol{k} \cdot \boldsymbol{r}}
\end{align*}
$$
represent the single-particle wave functions of the free electrons. Here $\Omega$ is the volume of the system, $\boldsymbol{k}$ and $s \in\{\uparrow, \downarrow\}$ denote the wave vector and spin, respectively. Assuming a cubic system of side length $L$ and volume $\Omega=L^{3}$ we impose periodic boundary conditions for the wave function
$$
\begin{align*}
\psi_{\boldsymbol{k}, s}(\boldsymbol{r}+(L, 0,0))=\psi_{\boldsymbol{k}, s}(\boldsymbol{r}+(0, L, 0))=\psi_{\boldsymbol{k}, s}(\boldsymbol{r}+(0,0, L))=\psi_{\boldsymbol{k}, s}(\boldsymbol{r})
\end{align*}
$$
such that the reciprocal space is discretised as
$$
\begin{align*}
\boldsymbol{k}=\frac{2 \pi}{L}\left(n_{x}, n_{y}, n_{z}\right)
\end{align*}
$$

where $\left(n_{x}, n_{y}, n_{z}\right) \in \mathbb{Z}^{3}$. The energy of a single-electron state is given by $\epsilon_{\boldsymbol{k}}=\hbar^{2} \boldsymbol{k}^{2} / 2 m$ (free particle). The ground state of non-interacting electrons is obtained by filling all single particle states up to the Fermi energy with two electrons. In the language of second quantisation the ground state is, thus, given by

$$
\begin{align*}
\left|\Psi_{0}\right\rangle=\prod_{|\boldsymbol{k}| \leq k_{F}} \prod_{s} \widehat{c}_{\boldsymbol{k}, s}^{\dagger}|0\rangle
\end{align*}
$$
where the operators $\widehat{c}_{\boldsymbol{k}, s}^{\dagger}\left(\widehat{c}_{\boldsymbol{k}, s}\right)$ create (annihilate) an electron with wave vector $\boldsymbol{k}$ and spin $s$. We call this state also a filled Fermi sea. The Fermi wave vector $k_{F}$ with the corresponding Fermi energy $\epsilon_{F}=\hbar^{2} k_{F}^{2} / 2 m$ is determined by equating the filled electronic states with the electron density $n$. We have
$$
\begin{align*}
n=\frac{1}{\Omega} \sum_{|\boldsymbol{k}| \leq k_{F}, s} 1=2 \int \frac{d^{3} k}{(2 \pi)^{3}} 1=2 \frac{4 \pi}{3} \frac{k_{F}^{3}}{(2 \pi)^{3}}
\end{align*}
$$
which results in
$$
\begin{align*}
k_{F}=\left(3 \pi^{2} n\right)^{1 / 3}
\end{align*}
$$

Note $k_{F}$ is the radius of the Fermi sphere in $k$-space around $\boldsymbol{k}=0.$

### 3.1.1 Theory of Metals - Sommerfeld and Pauli

In a first step we neglect the interaction among the electrons and consider the electrons in the metal simply as a Fermi gas. Then thermodynamic properties can be described by using the Fermi-Dirac distribution function,
$$
\begin{align*}
f\left(\epsilon_{\boldsymbol{k}}\right)=\frac{1}{e^{\left(\epsilon_{\boldsymbol{k}}-\mu\right) / k_{B} T}+1}
\end{align*}
$$
and the density of states
$$
\begin{align*}
\begin{aligned}
N(E) & =\frac{1}{\Omega} \sum_{\boldsymbol{k}, s} \delta\left(E-\epsilon_{\boldsymbol{k}}\right)=2 \int \frac{d^{3} k}{(2 \pi)^{3}} \delta\left(E-\frac{\hbar^{2} \boldsymbol{k}^{2}}{2 m}\right)=\frac{1}{4 \pi^{3}} \int d \Omega_{\boldsymbol{k}} d k k^{2} \frac{m}{\hbar^{2} k} \delta\left(k-\frac{\sqrt{2 m E}}{\hbar}\right) \\
& =\frac{1}{2 \pi^{2}}\left(\frac{2 m}{\hbar^{2}}\right)^{3 / 2} E^{1 / 2}=\frac{3}{2} \frac{n}{\epsilon_{F}}\left(\frac{E}{\epsilon_{F}}\right)^{1 / 2}
\end{aligned}
\end{align*}
$$
for $E>0$. We first address the temperature dependence of the chemical potential up second power in $T$ for fixed electron density $n$, by using the equation
$$
\begin{align*}
n=\frac{1}{\Omega} \sum_{\boldsymbol{k}, s} f\left(\epsilon_{\boldsymbol{k}}\right)=\int_{0}^{+\infty} d E f(E) N(E)=\int_{0}^{\mu} d E N(E)+\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} N^{\prime}(\mu)+\cdots
\end{align*}
$$
where we used the Sommerfeld expansion (see next paragraph) assuming $T \ll T_{F}=\epsilon_{F} / k_{B}.$

**Sommerfeld expansion**: In the limit $k_{B} T \ll \epsilon_{F}$ the derivative $\partial f(E) / \partial E$ is well concentrated around $E=\mu$. We consider

$$
\begin{aligned}
\int_{-\infty}^{+\infty} d E \, g(E) \left( -\frac{\partial f(E)}{\partial E} \right) 
&= \int_{-\infty}^{+\infty} d E \, \left\{ g(\mu) + (E - \mu) g^{\prime}(\mu) + \frac{(E - \mu)^{2}}{2} g^{\prime \prime}(\mu) + \cdots \right\} \left( -\frac{\partial f(E)}{\partial E} \right) \\
&= g(\mu) + \frac{g^{\prime \prime}(\mu)}{2} \int_{-\infty}^{+\infty} d E \, (E - \mu)^{2} \left( -\frac{\partial f(E)}{\partial E} \right) + \cdots \\
&= g(\mu) + \frac{\pi^{2}}{6} g^{\prime \prime}(\mu) \left( k_{B} T \right)^{2} + \cdots.
\end{aligned}
$$

and analogous
$$
\begin{align*}
\int_{-\infty}^{+\infty} d E\left(\frac{\partial g(E)}{\partial E}\right) f(E)=g(\mu)+\frac{\pi^{2}}{6} g^{\prime \prime}(\mu)\left(k_{B} T\right)^{2}+\cdots .
\end{align*}
$$

With the definition
$$
\begin{align*}
g(E)=\int_{-\infty}^{E} d E^{\prime} \Gamma\left(E^{\prime}\right) \Rightarrow \int_{-\infty}^{+\infty} d E \Gamma(E) f(E)=\int_{-\infty}^{\mu} d E \Gamma(E)+\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} \Gamma^{\prime}(\mu)+\cdots
\end{align*}
$$

Note that
$$
\begin{align*}
\int_{-\infty}^{+\infty} d x \frac{\beta x^{2} e^{\beta x}}{\left(e^{\beta x}+1\right)^{2}}=\frac{\pi^{2}}{3 \beta^{2}}.
\end{align*}
$$


We now use
$$
\begin{align*}
\int_{0}^{\mu} d E N(E) \approx \int_{0}^{\epsilon_{F}} d E N(E)+\left(\mu-\epsilon_{F}\right) N\left(\epsilon_{F}\right)=n+\left(\mu-\epsilon_{F}\right) N\left(\epsilon_{F}\right)
\end{align*}
$$

leading to

$$
\begin{align*}
n \approx n+\left(\mu-\epsilon_{F}\right) N\left(\epsilon_{F}\right)+\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} N^{\prime}\left(\epsilon_{F}\right) \quad \Rightarrow \quad \mu(T)=\epsilon_{F}-\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} \frac{N^{\prime}\left(\epsilon_{F}\right)}{N\left(\epsilon_{F}\right)}+\cdots
\end{align*}
$$
with $N^{\prime}\left(\epsilon_{F}\right) / N\left(\epsilon_{F}\right)=1 / 2 \epsilon_{F}$. Now we also determine the internal energy density,
$$
\begin{align*}
\begin{aligned}
u(T) & =\frac{U(T)}{\Omega}=\int_{0}^{\infty} d E E N(E) f(E) \approx \int_{0}^{\mu} d E E N(E)+\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2}\left\{\mu N^{\prime}(\mu)+N(\mu)\right\} \\
& \approx \int_{0}^{\epsilon_{F}} d E E N(E)+\epsilon_{F} \underbrace{\left\{\left(\mu-\epsilon_{F}\right) N\left(\epsilon_{F}\right)+\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} N^{\prime}\left(\epsilon_{F}\right)\right\}}_{=0}+\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} N\left(\epsilon_{F}\right) \\
& =u_{0}+\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} N\left(\epsilon_{F}\right).
\end{aligned}
\end{align*}
$$
The specific heat is then given by
$$
\begin{align*}
C=\frac{\partial u}{\partial T}=\frac{\pi^{2}}{3 \Omega} k_{B}^{2} T N\left(\epsilon_{F}\right)=\gamma T
\end{align*}
$$
and shows a $T$-linear behaviour where $\gamma$ is the Sommerfeld coefficient, proportional to the density of states at the Fermi energy.
Next we consider the effect of a magnetic field coupling to the electron spin, so that $\epsilon_{\boldsymbol{k}} \rightarrow \epsilon_{\boldsymbol{k}, s}=$ $\epsilon_{k}-\mu_{B} s H$ with $\mu_{B}$ the Bohr magneton and $s= \pm 1$. We consider the magnetisation due to the spin polarisation of the electrons,
$$
\begin{align*}
\begin{aligned}
M & =\mu_{B}\left(n_{+}-n_{-}\right)=\frac{\mu_{B}}{2}\left\{\int_{0}^{\infty} d E N(E) f\left(E-\mu_{B} H\right)-\int_{0}^{\infty} d E N(E) f\left(E+\mu_{B} H\right)\right\} \\
& \approx \frac{\mu_{B}}{2} \int_{0}^{\infty} d E N(E)\left(-\frac{\partial f(E)}{\partial E}\right) 2 \mu_{B} H \approx \mu_{B}^{2} H N\left(\epsilon_{F}\right) \int_{0}^{\infty} d E\left(-\frac{\partial f(E)}{\partial E}\right)=\mu_{B}^{2} H N\left(\epsilon_{F}\right) .
\end{aligned}
\end{align*}
$$

By taking the derivative with respect to $H$ we find for the susceptibility,
$$
\begin{align*}
\chi_{p}=\frac{\partial M}{\partial H}=\mu_{B}^{2} N\left(\epsilon_{F}\right) .
\end{align*}
$$

This is the Pauli paramagnetic susceptibility which is to lowest order temperature independent and proportional to the density of states at the Fermi energy, like $\gamma^{4}$.
The temperature dependence of the $\chi_{p}$ can be found by going beyond the lowest order approximation:
$$
\begin{align*}
M \approx \mu_{B}^{2} H \int_{0}^{\infty} d E N(E)\left(-\frac{\partial f(E)}{\partial E}\right)=\mu_{B}^{2} H\left\{N(\mu)+\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} N^{\prime \prime}(\mu)\right\}
\end{align*}
$$
We then write
$$
\begin{align*}
N(\mu) \approx N\left(\epsilon_{F}-\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} \frac{N^{\prime}\left(\epsilon_{F}\right)}{N\left(\epsilon_{F}\right)}\right) \approx N\left(\epsilon_{F}\right)-\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} \frac{N^{\prime}\left(\epsilon_{F}\right)^{2}}{N\left(\epsilon_{F}\right)},
\end{align*}
$$
which leads to
$$
\begin{align*}
M \approx \mu_{B}^{2} H N\left(\epsilon_{F}\right)\left[1-\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2}\left\{\left(\frac{N^{\prime}\left(\epsilon_{F}\right)}{N\left(\epsilon_{F}\right)}\right)^{2}-\frac{N^{\prime \prime}\left(\epsilon_{F}\right)}{N\left(\epsilon_{F}\right)}\right\}\right]=\chi_{p}(T) H,
\end{align*}
$$
and defines the temperature dependent spin susceptibility, which depends on details of the density of states.

### 3.1.2 Stability of Metals - a Hartree-Fock Approach

Now we would like to examine the stability of the Jelium model. For this purpose, we compute the ground state energy of the Jellium system variationally, using the density $n$ as a variational parameter, which is equivalent to the variation of the lattice constant. In this way, we will obtain an understanding of the stability of a metal, i.e. the cohesion of the ion lattice through the itinerant electrons (in contrast to semiconductors where the stability was due to covalent chemical bonding). The variational ground state shall be $\left|\Psi_{0}\right\rangle$  for given $k_{F}$. The Hamiltonian splits into four terms
$$
\begin{align*}
\mathcal{H}=\mathcal{H}_{\text {kin }}+\mathcal{H}_{e e}+\mathcal{H}_{e i}+\mathcal{H}_{i i}
\end{align*}
$$
with
$$
\begin{align*}
\begin{aligned}
\mathcal{H}_{\mathrm{kin}} & =\sum_{\boldsymbol{k}, \boldsymbol{s}} \epsilon_{\boldsymbol{k}} \widehat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{\boldsymbol{k}} \boldsymbol{k} \boldsymbol{s} \\
\mathcal{H}_{\mathrm{ee}} & =\frac{1}{2} \sum_{s, s^{\prime}} \int d^{3} r d^{3} r^{\prime} \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{s^{\prime}}^{\dagger}\left(\boldsymbol{r}^{\prime}\right) \frac{e^{2}}{\left|\boldsymbol{r}-\boldsymbol{r}^{\prime}\right|} \widehat{\Psi}_{s^{\prime}}\left(\boldsymbol{r}^{\prime}\right) \widehat{\Psi}_{s}(\boldsymbol{r}) \\
\mathcal{H}_{\mathrm{ei}} & =-\sum_{s} \int d^{3} r d^{3} r^{\prime} \frac{n e^{2}}{\left|\boldsymbol{r}-\boldsymbol{r}^{\prime}\right|} \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{s}(\boldsymbol{r}) \\
\mathcal{H}_{\mathrm{ii}} & =\frac{1}{2} \int d^{3} r d^{3} r^{\prime} \frac{n^{2} e^{2}}{\left|\boldsymbol{r}-\boldsymbol{r}^{\prime}\right|},
\end{aligned}
\end{align*}
$$
where we have used in second quantisation language the electron field operators
$$
\begin{align*}
\begin{aligned}
& \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r})=\frac{1}{\sqrt{\Omega}} \sum_{\boldsymbol{k}} \widehat{c}_{\boldsymbol{k}, s}^{\dagger} e^{-i \boldsymbol{k} \cdot \boldsymbol{r}} \\
& \widehat{\Psi}_{s}(\boldsymbol{r})=\frac{1}{\sqrt{\Omega}} \sum_{\boldsymbol{k}} \widehat{c}_{\boldsymbol{k}, s} e^{i \boldsymbol{k} \cdot \boldsymbol{r}}
\end{aligned}
\end{align*}
$$

The variational energy - which we want to minimise with respect to $n$ - can be computed from $E_{g}=\left\langle\Psi_{0}\right| \mathcal{H}\left|\Psi_{0}\right\rangle$ and consists of four different contributions:
First we have the kinetic energy
$$
\begin{align*}
\begin{aligned}
E_{\text {kin }} & =\left\langle\Psi_{0}\right| \mathcal{H}_{\text {kin }}\left|\Psi_{0}\right\rangle=\sum_{\boldsymbol{k}, s} \epsilon_{\boldsymbol{k}} \underbrace{\left\langle\Psi_{0}\right| \hat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k} s}\left|\Psi_{0}\right\rangle}_{=n_{\boldsymbol{k} s}} \\
& =2 \Omega \int \frac{d^{3} k}{(2 \pi)^{3}} \epsilon_{\boldsymbol{k}} n_{\boldsymbol{k} s}=N \frac{3}{5} \epsilon_{F}
\end{aligned}
\end{align*}
$$
where we used $N=\Omega n$ the number of valence electrons and
$$
\begin{align*}
n_{\boldsymbol{k} s}=\left\{\begin{array}{cc}
1 & |\boldsymbol{k}| \leq k_{F} \\
0 & |\boldsymbol{k}|>k_{F}
\end{array}\right.
\end{align*}
$$


Secondly, there is the energy resulting from the Coulomb repulsion between the electrons,
$$
\begin{align*}
\begin{aligned}
E_{\mathrm{ee}} & =\frac{1}{2} \int d^{3} r d^{3} r^{\prime} \frac{e^{2}}{\left|\boldsymbol{r}-\boldsymbol{r}^{\prime}\right|} \sum_{s, s^{\prime}}\left\langle\Psi_{0}\right| \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{s^{\prime}}^{\dagger}\left(\boldsymbol{r}^{\prime}\right) \widehat{\Psi}_{s^{\prime}}\left(\boldsymbol{r}^{\prime}\right) \widehat{\Psi}_{s}(\boldsymbol{r})\left|\Psi_{0}\right\rangle \\
& =\frac{1}{2} \int d^{3} r d^{3} r^{\prime} \frac{e^{2}}{\left|\boldsymbol{r}-\boldsymbol{r}^{\prime}\right|}\left(n^{2}-G\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)\right)=E_{\text {Hartree }}+E_{\text {Fock }} .
\end{aligned}
\end{align*}
$$

For this contribution we used the fact, that the two-particle correlation function may be expressed as
$$
\begin{align*}
\sum_{s, s^{\prime}}\left\langle\Psi_{0}\right| \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{s^{\prime}}^{\dagger}\left(\boldsymbol{r}^{\prime}\right) \widehat{\Psi}_{s^{\prime}}\left(\boldsymbol{r}^{\prime}\right) \widehat{\Psi}_{s}(\boldsymbol{r})\left|\Psi_{0}\right\rangle=n^{2}-G\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)
\end{align*}
$$
where
$$
\begin{align*}
G(\boldsymbol{r})=\frac{9 n^{2}}{2}\left(\frac{k_{F}|\boldsymbol{r}| \cos k_{F}|\boldsymbol{r}|-\sin k_{F}|\boldsymbol{r}|}{\left(k_{F}|\boldsymbol{r}|\right)^{3}}\right)^{2} .
\end{align*}
$$

The Coulomb repulsion $\mathcal{H}_{\mathrm{ee}}$ between the electrons leads to two terms, called the direct or Hartree term describing the Coulomb energy of a uniformly spread charge distribution, and the exchange or Fock term resulting from the exchange hole that follows from the Fermi-Dirac statistics (Pauli exclusion principle).
The third contribution originates in the attractive interaction between the (uniform) ionic background and the electrons,
$$
\begin{align*}
\begin{aligned}
E_{\mathrm{ei}} & =-\int d^{3} r d^{3} r^{\prime} \frac{e^{2}}{\left|\boldsymbol{r}-\boldsymbol{r}^{\prime}\right|} n \sum_{s}\left\langle\Psi_{0}\right| \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{s}(\boldsymbol{r})\left|\Psi_{0}\right\rangle \\
& =-\int d^{3} r d^{3} r^{\prime} \frac{e^{2}}{\left|\boldsymbol{r}-\boldsymbol{r}^{\prime}\right|} n^{2} .
\end{aligned}
\end{align*}
$$

where the expectation value $\left\langle\Psi_{0}\right| \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \Psi_{s}(\boldsymbol{r})\left|\Psi_{0}\right\rangle$ corresponds to the uniform density $n$, as is easily calculated.
Finally we have the repulsive ion-ion interaction
$$
\begin{align*}
E_{\mathrm{ii}}=\left\langle\Psi_{0}\right| \mathcal{H}_{\mathrm{ii}}\left|\Psi_{0}\right\rangle=\frac{1}{2} \int d^{3} r d^{3} r^{\prime} \frac{n^{2} e^{2}}{\left|\boldsymbol{r}-\boldsymbol{r}^{\prime}\right|} .
\end{align*}
$$

![Attachments/Notes/Solid-State Theory/IMG-0126164736667.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164736667.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=62&rect=188,494,405,648|•]]

It is easy to verify that the three contributions $E_{\text {Hartree }}, E_{\mathrm{ei}}$, and $E_{\mathrm{ii}}$ compensate each other to exactly zero. Note that these three terms are the only ones that would arise in a classical electrostatic calculation, implying that the stability of metals relies purely on quantum effect. The remaining terms are the kinetic energy and the Fock term. The latter is negative and reads
$$
\begin{align*}
E_{\mathrm{Fock}}=-\Omega \frac{9 n^{2}}{4} \int d^{3} r \frac{e^{2}}{|\boldsymbol{r}|}\left(\frac{\sin k_{F}|\boldsymbol{r}|-k_{F}|\boldsymbol{r}| \cos k_{F}|\boldsymbol{r}|}{\left(k_{F}|\boldsymbol{r}|\right)^{3}}\right)^{2}=-N \frac{3 e^{2}}{4 \pi} k_{F} .
\end{align*}
$$

Eventually, the total energy per electron is given by
$$
\begin{align*}
\frac{E_{g}}{N}=\frac{3}{5} \frac{\hbar^{2} k_{F}^{2}}{2 m}-\frac{3 e^{2}}{4 \pi} k_{F}=\left(\frac{2.21}{r_{s}^{2}}-\frac{0.916}{r_{s}}\right) \mathrm{Ry}
\end{align*}
$$
where $1 \mathrm{Ry}=e^{2} / 2 a_{B}$ and the dimensionless quantity $r_{s}$ is defined via
$$
\begin{align*}
n=\frac{3}{4 \pi d^{3}}
\end{align*}
$$
and
$$
\begin{align*}
r_{s}=\frac{d}{a_{B}}=\left(\frac{9 \pi}{4}\right)^{1 / 3} \frac{m e^{2}}{\hbar^{2} k_{F}} .
\end{align*}
$$

The length $d$ is the average radius of the volume occupied by one electron. Minimising the energy per electron with respect to $n$ is equivalent to minimise it with respect to $r_{s}$, yielding $r_{s, \text { min }}=4.83, d \approx 2.5 \text{ }\pu{Å}$ and a density of $n_{0} \approx 1.5 \times 10^{24} \mathrm{~cm}^{-3}$. This corresponds to a lattice constant of $a=(4 \pi / 3)^{1 / 3} d \approx 4 \text{ }\pu{Å}$. This estimate is roughly in agreement with the lattice constants of the Alkali metals: $r_{s, \mathrm{Li}}=3.22, r_{s, \mathrm{Na}}=3.96, r_{s, \mathrm{~K}}=4.86$. Note that in metals the delocalised electrons are responsible for the cohesion of the positive background yielding a stable solid.

![Attachments/Notes/Solid-State Theory/IMG-0126164736851.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164736851.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=63&rect=186,614,407,752|•]]

The good agreement of this simple estimate with the experimental values is due to the fact that the Alkali metals have only one valence electron in an s-orbital that is delocalised, whereas the the core electrons are in a noble gas configuration and, thus, relatively inert. In the variational approach outlined above correlation effects among the electrons due to the Coulomb repulsion have been neglected. In particular, electrons can be expected to 'avoid' each other not just because of the Pauli principle, but also as a result of the repulsive interaction. However, for the problem under consideration the correlation corrections turn out to be small for $r_{s} \sim r_{s, \min }$ :
$$
\begin{align*}
\frac{E_{\mathrm{tot}}}{N}=\left(\frac{2.21}{r_{s}^{2}}-\frac{0.916}{r_{s}}+0.062 \ln r_{s}-0.096+\ldots\right) \mathrm{Ry}
\end{align*}
$$
which can be obtained from a more sophisticated quantum field theoretical analysis.

---
## 3.2 Charge Excitations and the Dielectric Function
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=63&selection=120,0,122,46|•]]

In analogy to semiconductors, the elementary excitations of metallic systems are the electron-hole excitations, which for metals, however, can have arbitrarily small energies. One particularly drastic consequence of this behaviour is the strong screening of the long-ranged Coulomb potential. As we will see, a negative test charge in a metal reduces the electron density in its vicinity, and the induced cloud of positive charges, relative to the uniform charge density, weaken the Coulomb potential as,
$$
\begin{align*}
V(r) \propto \frac{1}{r} \quad \longrightarrow \quad V^{\prime}(r) \propto \frac{e^{-r / l}}{r}
\end{align*}
$$
i.e. the Coulomb potential is modified into the short-ranged Yukawa potential with screening length $l$. In contrast to metals, the finite energy gap for electron-hole excitations the charge distribution in semiconductors reduces the adaption of the system to perturbations, so that the screened Coulomb potential remains long-ranged,
$$
\begin{align*}
V(r) \propto \frac{1}{r} \quad \longrightarrow \quad V^{\prime}(r) \propto \frac{1}{\varepsilon r}
\end{align*}
$$

As mentioned earlier, the semiconductor acts as a dielectric medium and its screening effects are accounted for by the polarisation of localised electric dipoles, i.e., the Coulomb potential inside a semiconductor is renormalised by the dielectric constant $\varepsilon$.

### 3.2.1 Dielectric Response and Lindhard Function

We will now investigate the response of an electron gas to a time- and position-dependent weak external potential $V_{a}(\boldsymbol{r}, t)$ in more detail based on the equation of motion. We introduce the Hamiltonian
$$
\begin{align*}
\mathcal{H}=\mathcal{H}_{\text {kin }}+\mathcal{H}_{V}=\mathcal{H}_{0}+\mathcal{H}_{V} \sum_{\boldsymbol{k}, s} \epsilon_{\boldsymbol{k}} \widehat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k} s}+\sum_{s} \int d^{3} r V_{a}(\boldsymbol{r}, t) \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{s}(\boldsymbol{r})
\end{align*}
$$
where the second term is considered as a small perturbation to our system described by a timeindependent Hamiltonian, $\mathcal{H}_{0}=\mathcal{H}_{\text {kin }}$ whose properties we know exactly. In a first step we consider the linear response of the system to the external potential. On this level we restrict ourself to one Fourier component in the spatial and time dependence of the potential,
$$
\begin{align*}
V_{a}(\boldsymbol{r}, t)=V_{a}(\boldsymbol{q}, \omega) e^{i \boldsymbol{q} \cdot \boldsymbol{r}-i \omega t} e^{\eta t}
\end{align*}
$$
where $\eta \rightarrow 0_{+}$includes the adiabatic switching on of the potential. To linear response this potential induces a small modulation of the electron density of the form $n_{\text {ind }}(\boldsymbol{r}, t)=n_{0}+$ $\delta n_{\text {ind }}(\boldsymbol{r}, t)$ with
$$
\begin{align*}
\delta n_{\mathrm{ind}}(\boldsymbol{r}, t)=\delta n_{\mathrm{ind}}(\boldsymbol{q}, \omega) e^{i \boldsymbol{q} \cdot \boldsymbol{r}-i \omega t} e^{\eta t} .
\end{align*}
$$

Using equations (3.28) and (3.29) we obtain for the density operator in momentum space,
$$
\begin{align*}
\widehat{\rho}_{\boldsymbol{q}}=\sum_{s} \int d^{3} r \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{s}(\boldsymbol{r}) e^{-i \boldsymbol{q} \cdot \boldsymbol{r}}=\sum_{\boldsymbol{k}, s} \widehat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k}+\boldsymbol{q} s}=\sum_{\boldsymbol{k}, s} \widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s},
\end{align*}
$$
where we define $\widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s}=\widehat{c}_{\boldsymbol{k} s} \widehat{c}_{\boldsymbol{k}+\boldsymbol{q} s}$. The perturbation term $\mathcal{H}_{V}$ now reads
$$
\begin{align*}
\mathcal{H}_{V}=\sum_{s} \int d^{3} r V_{a}(\boldsymbol{r}, t) \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{s}(\boldsymbol{r})=\widehat{\rho}_{\boldsymbol{q}}^{\dagger} V_{a}(\boldsymbol{q}, \omega) e^{-i \omega t} e^{\eta t}=\sum_{\boldsymbol{k}, s} \widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s}^{\dagger} V_{a}(\boldsymbol{q}, \omega) e^{-i \omega t} e^{\eta t} .
\end{align*}
$$

The density operator $\widehat{\rho}_{\boldsymbol{q}}(t)$ in Heisenberg representation is the relevant quantity needed to describe the electron density in the metal.

**Linear response**

We introduce the equation of motion for $\widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s}(t)$ :
$$
\begin{align*}
\begin{aligned}
i \hbar \frac{d}{d t} \widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s} & =\left[\widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s}, \mathcal{H}\right]=\left[\widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s}, \mathcal{H}_{\mathrm{kin}}+\mathcal{H}_{V}\right] \\
& =\left(\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}\right) \widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s}+\left(\widehat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k} s}-\widehat{c}_{\boldsymbol{k}+\boldsymbol{q} s}^{\dagger} \widehat{c}_{\boldsymbol{k}+\boldsymbol{q} s}\right) V_{a}(\boldsymbol{q}, \omega) e^{-i \omega t} e^{\eta t}
\end{aligned}
\end{align*}
$$

We now take the thermal average $\langle\widehat{A}\rangle_{0}=\operatorname{Tr}\left[\widehat{A} e^{-\beta \mathcal{H}_{0}}\right] / \operatorname{Tr}\left[e^{-\beta \mathcal{H}_{0}}\right]$ with respect to the unperturbed Hamiltonian and follow the linear response scheme by assuming the same time dependence for $\left\langle\widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s}(t)\right\rangle_{0}=\left\langle\widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s}\right\rangle_{0}(\omega) e^{-i \omega t+\eta t} \propto V_{a}(\boldsymbol{q}, \omega) e^{-i \omega t+\eta t}$ as for the potential, so that the equation of motion reads,
$$
\begin{align*}
(\hbar \omega+i \hbar \eta)\left\langle\widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s}\right\rangle_{0}(\omega)=\left(\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}\right)\left\langle\widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s}\right\rangle_{0}(\omega)+\left(n_{0 \boldsymbol{k}, s}-n_{0 \boldsymbol{k}+\boldsymbol{q}, s}\right) V_{a}(\boldsymbol{q}, \omega)
\end{align*}
$$
where $n_{0 \boldsymbol{k}, s}=\left\langle\widehat{c}_{\boldsymbol{k} s} \widehat{c}_{\boldsymbol{c} s}\right\rangle_{0}$. Note that we take here the approximation that for the limit $V_{a} \rightarrow 0$ we keep only terms linear $V_{a}$, such that $n_{0 k, s}$ is independent of $V_{a}$ and thus of time, while $\left\langle\widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s}\right\rangle_{0}$ is proportional to $V_{a}$. This leads then consistently to
$$
\begin{align*}
\delta n_{\text {ind }}(\boldsymbol{q}, \omega)=\frac{1}{\Omega} \sum_{\boldsymbol{k}, s}\left\langle\widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s}\right\rangle_{0}(\omega)=\frac{1}{\Omega} \sum_{\boldsymbol{k}, s} \frac{n_{0 \boldsymbol{k}+\boldsymbol{q}, s}-n_{0 \boldsymbol{k}, s}}{\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}-\hbar \omega-i \hbar \eta} V_{a}(\boldsymbol{q}, \omega) .
\end{align*}
$$
With this, we define the dynamical linear response function as
$$
\begin{align*}
\chi_{0}(\boldsymbol{q}, \omega)=\frac{1}{\Omega} \sum_{\boldsymbol{k}, \boldsymbol{s}} \frac{n_{0 \boldsymbol{k}+\boldsymbol{q}, s}-n_{0 \boldsymbol{k}, \boldsymbol{s}}}{\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}-\hbar \omega-i \hbar \eta}
\end{align*}
$$
such that $\delta n_{\text {ind }}(\boldsymbol{q}, \omega)=\chi_{0}(\boldsymbol{q}, \omega) V_{a}(\boldsymbol{q}, \omega)$, where $\chi_{0}(\boldsymbol{q}, \omega)$ is known to be the Lindhard function. Note the Fourier transform in real space and time yields the relation,
$$
\begin{align*}
\delta n_{i n d}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}, t-t^{\prime}\right)=\int d^{3} r^{\prime} d t \chi_{0}\left(\boldsymbol{r}-\boldsymbol{r}, t-t^{\prime}\right) V_{a}\left(\boldsymbol{r}^{\prime}, t^{\prime}\right)
\end{align*}
$$

The adiabatic switching on of the perturbation has mathematically the nice regularisation feature that $\chi_{0}(\boldsymbol{r}, t)$ is causal, i.e. $\chi_{0}(\boldsymbol{r}, t)=0$ for $t<0$. The potential $V_{a}$ can only influence the response into the future.Note, that for $n_{0 k, s}$ we can use the Fermi-Dirac distribution function $f\left(\epsilon_{\boldsymbol{k}}\right)$ for spin-independent densities.

As a simple example we consider here a metal at $T=0$ exposed to a uniform static potential, which corresponds simply to a shift of the chemical potential: $V_{a}(\boldsymbol{r}, t)=-\delta \mu$. Thus, we use $\omega=0$ and take in the Lindhard function the limit $\boldsymbol{q} \rightarrow 0$. Using Bernoulli-l'Hôpital for the $\boldsymbol{q}$-limit we find
$$
\begin{align*}
\chi_{0}(\boldsymbol{q} \rightarrow 0,0) \rightarrow \frac{1}{\Omega} \sum_{\boldsymbol{k}, s} \frac{\boldsymbol{q} \cdot \boldsymbol{\nabla}_{\boldsymbol{k}} \epsilon_{\boldsymbol{k}} \frac{\partial n_{0}(\epsilon)}{\partial \epsilon}}{\boldsymbol{q} \cdot \nabla_{\boldsymbol{k}} \epsilon_{\boldsymbol{k}}}=\frac{1}{\Omega} \sum_{\boldsymbol{k}, s} \frac{\partial f\left(\epsilon_{\boldsymbol{k}}\right)}{\partial \epsilon_{\boldsymbol{k}}}=-\frac{1}{\Omega} \sum_{\boldsymbol{k}, s} \delta\left(\epsilon_{\boldsymbol{k}}-\epsilon_{F}\right)=-\frac{N\left(\epsilon_{F}\right)}{\Omega} .
\end{align*}
$$

The electron density shift is then given by
$$
\begin{align*}
\delta n_{\mathrm{ind}}=-\frac{N\left(\epsilon_{F}\right)}{\Omega} V_{a}=\frac{N\left(\epsilon_{F}\right)}{\Omega} \delta \mu
\end{align*}
$$
which agrees with the Sommerfeld approximation,
$$
\begin{align*}
\delta n=\frac{1}{\Omega} \int_{\epsilon_{F}}^{\epsilon_{F}+\delta \mu} d E N(E) \approx \frac{N\left(\epsilon_{F}\right)}{\Omega} \delta \mu .
\end{align*}
$$

This expression is in linear order exact. Note that this is connected with the compressibility $\kappa$ of the electrons,
$$
\begin{align*}
\kappa=\frac{1}{n^{2}} \frac{\partial n}{\partial \mu}=\frac{\chi_{0}(0,0)}{n^{2}}=\frac{1}{n^{2} \Omega} N\left(\epsilon_{F}\right)=\frac{3}{2 n \epsilon_{F}}
\end{align*}
$$
where the last equality is the expression for free electrons.

**Coulomb interaction - Random phase approximation**

So far we treated the linear response of the system to an external perturbation without considering "feedback effects" due to the interaction among electrons. In fact, the density fluctuation $\delta n(\boldsymbol{r}, t)$ can be thought as a source for an additional Coulomb potential $V_{\delta n}$ which can be determined by means of the Poisson equation,
$$
\begin{align*}
\boldsymbol{\nabla}^{2} V_{\delta n}(\boldsymbol{r}, t)=-4 \pi e^{2} \delta n(\boldsymbol{r}, t)
\end{align*}
$$
or in Fourier space
$$
\begin{align*}
V_{\delta n}(\boldsymbol{q}, \omega)=\frac{4 \pi e^{2}}{q^{2}} \delta n(\boldsymbol{q}, \omega) .
\end{align*}
$$

If we allow feedback effects in our system with external perturbation $V_{a}(\boldsymbol{q}, \omega)$, the effective potential $V$ felt by the electrons is determined self-consistently via
$$
\begin{align*}
\begin{aligned}
V(\boldsymbol{q}, \omega) & =V_{a}(\boldsymbol{q}, \omega)+V_{\delta n}(\boldsymbol{q}, \omega) \\
& =V_{a}(\boldsymbol{q}, \omega)+\frac{4 \pi e^{2}}{q^{2}} \delta n(\boldsymbol{q}, \omega),
\end{aligned}
\end{align*}
$$

where

$$
\begin{align*}
\delta n(\boldsymbol{q}, \omega)=\chi_{0}(\boldsymbol{q}, \omega) V(\boldsymbol{q}, \omega) .
\end{align*}
$$

The relation between $V$ and $V_{a}$ may then be written as
$$
\begin{align*}
V(\boldsymbol{q}, \omega)=\frac{V_{a}(\boldsymbol{q}, \omega)}{\varepsilon(\boldsymbol{q}, \omega)}
\end{align*}
$$
with
$$
\begin{align*}
\varepsilon(\boldsymbol{q}, \omega)=1-\frac{4 \pi e^{2}}{q^{2}} \chi_{0}(\boldsymbol{q}, \omega)
\end{align*}
$$
where $\varepsilon(\boldsymbol{q}, \omega)$ is termed the dynamical dielectric function and describes the renormalisation of the external potential due to the dynamical response of the electrons in the metal. Extending
$$
\begin{align*}
\delta n(\boldsymbol{q}, \omega)=\chi_{0}(\boldsymbol{q}, \omega) V(\boldsymbol{q}, \omega)=\chi(\boldsymbol{q}, \omega) V_{a}(\boldsymbol{q}, \omega),
\end{align*}
$$
we define the response function $\chi(\boldsymbol{q}, \omega)$ within "random phase approximation" to be
$$
\begin{align*}
\chi(\boldsymbol{q}, \omega)=\frac{\chi_{0}(\boldsymbol{q}, \omega)}{\varepsilon(\boldsymbol{q}, \omega)}=\frac{\chi_{0}(\boldsymbol{q}, \omega)}{1-\frac{4 \pi e^{2}}{q^{2}} \chi_{0}(\boldsymbol{q}, \omega)} .
\end{align*}
$$

This response function $\chi(\boldsymbol{q}, \omega)$ contains also effects of electron-electron interaction and comprises information not only about the renormalisation of potentials, but also on the excitation spectrum of the metal.

### 3.2.2 Electron-Hole Excitation

The most simple excitation in a metal is the electron-hole excitation which resembles in some way the one discussed for the semiconductor. Neglecting the Coulomb interaction we remove an electron from an occupied state and place it into a state which is unoccupied:

![Attachments/Notes/Solid-State Theory/IMG-0126164737022.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164737022.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=67&rect=155,199,440,319|•]]

Since the ground-state $\left|\Psi_{0}\right\rangle$ is the filled Fermi sea, we remove the electron with an energy $\epsilon_{k} \leq \epsilon_{F}$ $\left(|\boldsymbol{k}| \leq k_{F}\right)$ and place into an energy state outside the Fermi sea, $\epsilon_{\boldsymbol{k}+\boldsymbol{q}}>\epsilon_{F}$. Thus, the excited state is given by
$$
\begin{align*}
|\boldsymbol{k}+\boldsymbol{q}, s ; \boldsymbol{k}, s\rangle=\widehat{c}_{\boldsymbol{k}+\boldsymbol{q}, s}^{\dagger} \widehat{c}_{\boldsymbol{k}, s}\left|\Psi_{0}\right\rangle=\widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s}^{\dagger}\left|\Psi_{0}\right\rangle
\end{align*}
$$
with the constraint that $n_{0, \boldsymbol{k}}\left(1-n_{0, \boldsymbol{k}+\boldsymbol{q}}\right)=1$ (we assume that the spin $s$ remains unchanged in the excitation, what we call a pure charge excitation). Note that $n_{0, \boldsymbol{k}}=\Theta\left(\epsilon_{F}-\epsilon_{\boldsymbol{k}}\right)$ at zero temperature. Analogous to the semiconductors he excitation energy is given by
$$
\begin{align*}
E_{k, q}=\epsilon_{k+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}>0
\end{align*}
$$

Also here we find a continuum of electron-hole excitation spectrum in the energy-momentum plane - sketched in Figure 3.4. In contrast to semiconductors electron-hole excitations are possible to arbitrarily low energies. The possible momentum transfer is dictated by the geometry of the Fermi sea. For $E_{\boldsymbol{k}, \boldsymbol{q}} \rightarrow 0$ the momentum transfer ranges from $q \approx 0$ to $q \approx 2 k_{F}$ as the electron has to be removed just below and be place just above the Fermi energy. For increasing the excitation energy this momentum range is gradually shift as depicted as the blue area:

![Attachments/Notes/Solid-State Theory/IMG-0126164737201.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164737201.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=68&rect=182,609,407,756|•]]

Interestingly $|\boldsymbol{k}+\boldsymbol{q}, s ; \boldsymbol{k}, s\rangle$ can be generated through the operator $\widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s}^{\dagger}$ which also couples to the external potential which we used the derive the linear response theory. The linear response function is actually built upon the properties of electron-hole excitation. Indeed $\chi(\boldsymbol{q}, \omega)$ contains information about the excitation spectrum. Without Coulomb it is sufficient to consider $\chi_{0}(\boldsymbol{q}, \omega)$, the Lindhard function.
We may separate $\chi_{0}$ into its real and imaginary part, $\chi_{0}(\boldsymbol{q}, \omega)=\chi_{0}^{\prime}(\boldsymbol{q}, \omega)+i \chi_{0}^{\prime \prime}(\boldsymbol{q}, \omega)$. Using the relation
$$
\begin{align*}
\lim _{\eta \rightarrow 0_{+}} \frac{1}{z-i \eta}=\mathcal{P}\left(\frac{1}{z}\right)+i \pi \delta(z)
\end{align*}
$$
where the Cauchy principal value $\mathcal{P}$ of the first term has to be taken, we separate the Lindhard function (3.63) into
$$
\begin{align*}
\begin{aligned}
\chi_{0}^{\prime}(\boldsymbol{q}, \omega) & =\frac{1}{\Omega} \sum_{\boldsymbol{k}, s} \mathcal{P}\left(\frac{n_{0, \boldsymbol{k}+\boldsymbol{q}}-n_{0, \boldsymbol{k}}}{\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}-\hbar \omega}\right) \\
\chi_{0}^{\prime \prime}(\boldsymbol{q}, \omega) & =\frac{\pi}{\Omega} \sum_{\boldsymbol{k}, s}\left(n_{0, \boldsymbol{k}+\boldsymbol{q}}-n_{0, \boldsymbol{k}}\right) \delta\left(\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}-\hbar \omega\right)
\end{aligned}
\end{align*}
$$

The real part will be important later in the context of instabilities of metals. The excitation spectrum is visible in the imaginary part which relates to the absorption of energy by the electrons subject to a time-dependent external perturbation (see Appendix 3.4). Note that $\chi_{0}^{\prime \prime}(\boldsymbol{q}, \omega)$ corresponds to Fermi's golden rule of time-dependent perturbation theory, i.e. the transition rate from the ground state to an excited state of energy $\hbar \omega$ and momentum $\boldsymbol{q}$ for a perturbation. The sum over $\boldsymbol{k}$ yields the density of possible electron-hole excitations with the given excitation energy.

### 3.2.3 Collective Excitation

Similar to semiconductor also for metals the Coulomb interaction yields a further type of excitation which, however, cannot be described by a simple superposition of electron-hole excitations, unlike in the case of excitons. Here the renormalised response function $\chi(\boldsymbol{q}, \omega),$ including the Coulomb interaction, serves as a means to uncover collective excitations beyond the level of independent electrons. It is the long-range nature of the Coulomb interaction which is responsible for the so-called plasma resonance which appears at rather high energies for small momenta $\boldsymbol{q}$. We analyze $\chi(\boldsymbol{q}, \omega)$ in the small $\boldsymbol{q}$-limit, i.e. $|\boldsymbol{q}| \ll k_{F}$ where we expand $\chi_{0}(\boldsymbol{q}, \omega)$ in $\boldsymbol{q}$, starting with
$$
\begin{align*}
\begin{aligned}
\epsilon_{\boldsymbol{k}+\boldsymbol{q}} & =\epsilon_{\boldsymbol{k}}+\boldsymbol{q} \cdot \boldsymbol{\nabla}_{\boldsymbol{k}} \epsilon_{\boldsymbol{k}}+\cdots \\
n_{0, \boldsymbol{k}+\boldsymbol{q}} & =n_{0, \boldsymbol{k}}+\frac{\partial n_{0}}{\partial \epsilon} \boldsymbol{q} \cdot \boldsymbol{\nabla}_{\boldsymbol{k}} \epsilon_{\boldsymbol{k}}+\cdots
\end{aligned}
\end{align*}
$$

Note that $\partial n_{0} / \partial \epsilon_{\boldsymbol{k}}=-\delta\left(\epsilon_{\boldsymbol{k}}-\epsilon_{F}\right)$ at $T=0$ and $\boldsymbol{\nabla}_{\boldsymbol{k}} \epsilon_{\boldsymbol{k}}=\hbar \boldsymbol{v}_{\boldsymbol{k}}$ gives the velocity. Since only states located at the Fermi energy are relevant here, $\boldsymbol{v}_{\boldsymbol{k}}=v_{F} \boldsymbol{k} /|\boldsymbol{k}|$ is the Fermi velocity. This leads to the approximation
$$
\begin{align*}
\begin{aligned}
\chi_{0}(\boldsymbol{q}, \omega) & \approx-2 \int \frac{d^{3} k}{(2 \pi)^{3}} \frac{\boldsymbol{q} \cdot \boldsymbol{v}_{F} \delta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}{\boldsymbol{q} \cdot \boldsymbol{v}_{F}-\omega-i \eta} \\
& =\frac{2}{(2 \pi)^{2}} \int_{-1}^{+1} d \cos \theta \frac{k_{F}^{2}}{\hbar v_{F}}\left[\frac{q v_{F} \cos \theta}{\omega+i \eta}+\left(\frac{q v_{F} \cos \theta}{\omega+i \eta}\right)^{2}+\left(\frac{q v_{F} \cos \theta}{\omega+i \eta}\right)^{3}+\cdots\right] \\
& \approx \frac{k_{F}^{3} q^{2}}{3 \pi^{2} m(\omega+i \eta)^{2}}\left(1+\frac{3}{5} \frac{v_{F}^{2} q^{2}}{(\omega+i \eta)^{2}}\right) \\
& =\frac{n_{0} q^{2}}{m(\omega+i \eta)^{2}}\left(1+\frac{3}{5} \frac{v_{F}^{2} q^{2}}{(\omega+i \eta)^{2}}\right) .
\end{aligned}
\end{align*}
$$

First we consider the limit $\boldsymbol{q} \rightarrow 0$ for the dielectric function,
$$
\begin{align*}
\varepsilon(\boldsymbol{q} \rightarrow 0, \omega)=1-\frac{4 \pi e^{2}}{q^{2}} \frac{n q^{2}}{m \omega^{2}}=1-\frac{\omega_{p}^{2}}{\omega^{2}}
\end{align*}
$$
with the plasma frequency defined as
$$
\begin{align*}
\omega_{p}^{2}=\frac{4 \pi e^{2} n_{0}}{m}
\end{align*}
$$

Note that the long-range nature of the Coulomb interaction (manifest in $4 \pi e^{2} / q^{2}$ ) yields a finite plasma frequency, as this cancels the $q^{2}$-dependence of $\chi_{0}$.

We now approximate $\chi(\boldsymbol{q}, \omega)$,
$$
\begin{align*}
\begin{aligned}
\chi(\boldsymbol{q}, \omega) & \approx \frac{n_{0} q^{2} R(q, \omega)^{2}}{m(\omega+i \eta)^{2}-4 \pi e^{2} n_{0} R(q, \omega)^{2}} \\
& =\frac{n_{0} q^{2} R(q, \omega)}{2 m \omega_{p}}\left\{\frac{1}{\omega+i \eta-\omega_{p} R(q, \omega)}-\frac{1}{\omega+i \eta+\omega_{p} R(q, \omega)}\right\}
\end{aligned}
\end{align*}
$$
where we introduced
$$
\begin{align*}
R(q, \omega)^{2}=\left(1+\frac{3 v_{F}^{2} q^{2}}{5 \omega^{2}}\right) .
\end{align*}
$$

Note that we keep $\eta$ only in lowest order and ignore it where ever it would appear in higher than linear power. Thus, $\eta$ is dropped. We obtain for the imaginary part of $\chi(\boldsymbol{q}, \omega)$,
$$
\begin{align*}
\chi^{\prime \prime}(\boldsymbol{q}, \omega) \approx \frac{\pi n_{0} q^{2} R\left(q, \omega_{p}\right)}{2 m \omega_{p}}\left[\delta\left(\omega-\omega_{p} R\left(q, \omega_{p}\right)\right)-\delta\left(\omega+\omega_{p} R\left(q, \omega_{p}\right)\right)\right]
\end{align*}
$$
which yields a sharp excitation mode,
$$
\begin{align*}
\omega(\boldsymbol{q})=\omega_{p} R\left(q, \omega_{p}\right)=\omega_{p}\left\{1+\frac{3 v_{F}^{2} q^{2}}{10 \omega_{p}^{2}}+\cdots\right\},
\end{align*}
$$
which is called plasma resonance with $\omega_{p}$ as the plasma frequency. Similar to the exciton, the plasma excitation has a well-defined energy-momentum relation and may consequently be viewed as a quasi-particle (plasmon) which has bosonic character. When the plasmon dispersion merges with the electron-hole continuum it is damped (Landau damping) because of the allowed decay into electron-hole excitations. This results in a finite life-time of the plasmons within the electron-hole continuum corresponding to a finite width of the resonance of the collective excitation.

It is possible to understand the plasma excitation in a classical picture. Consider negatively charged electrons in a positively charged ionic background. When the electrons are shifted uniformly by $\boldsymbol{r}$ with respect to the ions, a polarisation $\boldsymbol{P}=-n_{0} e \boldsymbol{r}$ results. The polarisation causes an electric field $\boldsymbol{E}=-4 \pi \boldsymbol{P}$ which acts as a restoring force. The equation of motion for an individual electron describes harmonic oscillations
$$
\begin{align*}
m \frac{d^{2}}{d t^{2}} \boldsymbol{r}=-e \boldsymbol{E}=-4 \pi e^{2} n_{0} \boldsymbol{r}
\end{align*}
$$
with the same oscillation frequency as the plasma frequency,
$$
\begin{align*}
\omega_{p}^{2}=\frac{4 \pi e^{2} n_{0}}{m} .
\end{align*}
$$

Classically, the plasma resonance can therefore be thought as an oscillation of the whole electron gas cloud on top of a positively charged background.

![Attachments/Notes/Solid-State Theory/IMG-0126164737398.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164737398.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=70&rect=178,552,414,664|•]]

### 3.2.4 Screening

**Thomas-Fermi screening**

Next, we analyze the potential $V$ felt by the electrons exposed to a static field ( $\omega \rightarrow 0$ ). Using the expansion of Eqs. $(3.84,3.85)$ we obtain
$$
\begin{align*}
\chi_{0}(\boldsymbol{q}, 0)=-\frac{1}{\Omega} \sum_{\boldsymbol{k}, s} \delta\left(\epsilon_{\boldsymbol{k}}-\epsilon_{F}\right)=-\frac{1}{\pi^{2}} \frac{k_{F}^{2}}{\hbar v_{F}}=-\frac{3 n_{0}}{2 \epsilon_{F}}
\end{align*}
$$
and thus
$$
\begin{align*}
\varepsilon(\boldsymbol{q}, 0)=1+\frac{k_{T F}^{2}}{q^{2}}
\end{align*}
$$
with the so-called Thomas-Fermi wave vector $k_{T F}^{2}=6 \pi e^{2} n_{0} / \epsilon_{F}$. The effect of the renormalised $q$-dependence of the dielectric function can best be understood by considering a bare point charge $V_{a}(\boldsymbol{r})=e^{2} / r\left(\right.$ or $\left.V_{a}(\boldsymbol{q})=4 \pi e^{2} / q^{2}\right)$ and its renormalisation in momentum space
$$
\begin{align*}
V(\boldsymbol{q})=\frac{V_{a}(\boldsymbol{q})}{\epsilon(\boldsymbol{q}, 0)}=\frac{4 \pi e^{2}}{q^{2}+k_{T F}^{2}}
\end{align*}
$$
or in real space
$$
\begin{align*}
V(\boldsymbol{r})=\frac{e^{2}}{r} e^{-k_{T F} r}
\end{align*}
$$

The potential is screened by a rearrangement of the electrons and this turns the long-ranged Coulomb potential into a Yukawa potential with exponential decay. The new length scale is $k_{T F}^{-1}$, the so-called Thomas-Fermi screening length. In ordinary metals $k_{T F}$ is typically of the same order of magnitude as $k_{F}$, i.e. the screening length is of order $5 \text{ }\pu{Å}$ comparable to the distance between neighboring atoms. As a consequence also external electric fields cannot penetrate a metal, but are screened on this length $1 / k_{T F}$. This legitimates one of the basic assumptions used in electrostatics with metals.

**Friedel oscillations**

The static dielectric function can be evaluated exactly for a system of free electrons, resulting for 3 dimensions in
$$
\begin{align*}
\varepsilon(\boldsymbol{q}, 0)=1+\frac{4 e^{2} m k_{F}}{\pi \hbar^{2} q^{2}}\left\{\frac{1}{2}+\frac{4 k_{F}^{2}-q^{2}}{8 k_{F} q} \ln \left|\frac{2 k_{F}+q}{2 k_{F}-q}\right|\right\} .
\end{align*}
$$

Noticeably the dielectric function varies little for small $\boldsymbol{q} \ll k_{F}$. At $q= \pm 2 k_{F}$ there is, however, a logarithmic singularity. This is a consequence of the sharpness of the Fermi surface in $k$-space. Consider the induced charge of a point charge at the origin: $e n_{a}(r)=e n_{a 0} \delta(\boldsymbol{r})$ which is Fourier transformed is $n_{a}(\boldsymbol{q})=n_{a 0} .{ }^{10}$
$$
\begin{align*}
\delta n(\boldsymbol{r})=\int \frac{d^{3} q}{(2 \pi)^{3}}\left\{\frac{1}{\varepsilon(q)}-1\right\} n_{a}(\boldsymbol{q}) e^{i \boldsymbol{q} \cdot \boldsymbol{r}}=-\frac{1}{r} \int_{0}^{\infty} g(q) n_{a}(\boldsymbol{q}) \sin q r d q
\end{align*}
$$
with
$$
\begin{align*}
g(q)=\frac{q}{2 \pi^{2}} \frac{\varepsilon(q)-1}{\varepsilon(q)} .
\end{align*}
$$

Note that $g(q)$ vanishes for both $q \rightarrow 0$ and $q \rightarrow \infty$. Using partial integration twice, we find
$$
\begin{align*}
\delta n(\boldsymbol{r})=\frac{n_{a 0}}{r^{3}} \int_{0}^{\infty} g^{\prime \prime}(q) \sin q r d q
\end{align*}
$$
where
$$
\begin{align*}
g^{\prime}(q) \approx A \ln \left|q-2 k_{F}\right|
\end{align*}
$$
and
$$
\begin{align*}
g^{\prime \prime}(q) \approx \frac{A}{q-2 k_{F}}
\end{align*}
$$
dominate around $q \sim 2 k_{F}$. Hence, for $k_{F} r \gg 1$,
$$
\begin{align*}
\begin{aligned}
\delta n(r) & \approx \frac{A n_{a 0}}{r^{3}} \int_{2 k_{F}-\Lambda}^{2 k_{F}+\Lambda} \frac{\sin \left[\left(q-2 k_{F}\right) r\right] \cos 2 k_{F} r+\cos \left[\left(q-2 k_{F}\right) r\right] \sin 2 k_{F} r}{q-2 k_{F}} d q \\
& \longrightarrow \pi A n_{a 0} \frac{\cos 2 k_{F} r}{r^{3}}
\end{aligned}
\end{align*}
$$
with a cutoff $\Lambda \rightarrow \infty$. The induced charge distribution exhibits so-called Friedel oscillations. Finally we may ask what is the total electron charge displaced around the point charge en $n_{a 0} \delta(\boldsymbol{r})$. We integrate over $\boldsymbol{r}$:
$$
\begin{align*}
\delta Q=e \delta n=e \int d^{3} r \delta n(\boldsymbol{r})=\lim _{\boldsymbol{q} \rightarrow 0}\left\{\frac{1}{\varepsilon(q)}-1\right\} n_{a}(\boldsymbol{q})=-e n_{a 0}
\end{align*}
$$
where we used $1 / \epsilon(\boldsymbol{q}) \rightarrow 0$ for $\boldsymbol{q} \rightarrow 0$. The charge displacement corresponds to the exact opposite amount of charge of of the point charge. Thus we find a perfect compensation which corresponds to perfect screening.

![Attachments/Notes/Solid-State Theory/IMG-0126164737574.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164737574.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=72&rect=177,218,419,405|•]]

**Dielectric function in various dimensions**

Above we have treated the dielectric function for a three-dimensional parabolic band. Similar calculations can be performed for one- and two-dimensional systems. In general, the static susceptibility is given by
$$
\begin{align*}
\chi_{0}(q, \omega=0)= \begin{cases}-\frac{1}{2 \pi q} \ln \left|\frac{s+2}{s-2}\right|, & \text { 1D } \\ -\frac{1}{2 \pi}\left\{1-\left(1-\frac{4}{s^{2}}\right)^{1 / 2} \theta(s-2)\right\}, & \text { 2D } \\ -\frac{k_{F}}{2 \pi^{2}}\left\{1-\frac{s}{4}\left(1-\frac{4}{s^{2}}\right) \ln \left|\frac{s+2}{s-2}\right|\right\}, & \text { 3D }\end{cases}
\end{align*}
$$
where $s=q / k_{F}$. Interestingly $\chi_{0}(q, 0)$ has a singularity at $q=2 k_{F}$ in all dimensions:

![Attachments/Notes/Solid-State Theory/IMG-0126164737752.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164737752.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=73&rect=159,563,432,754|•]]

The singularity becomes weaker as the dimensionality is increased. In one dimension, there is a logarithmic divergence, in two dimensions there is a kink, and in three dimensions only the derivative diverges. Later we will see that these singularities may lead to instabilities of the metallic state, in particular for the one-dimensional case.

---
## 3.3 Lattice Vibrations - Phonons
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=73&selection=236,0,238,28|•]]

The atoms in a lattice of a solid are not immobile but vibrate around their equilibrium positions. We will describe this new degree of freedom by treating the lattice as a continuous elastic medium (Jellium with elastic modulus $\lambda$ ). This approximation is sufficient to obtain some essential features of the interaction between lattice vibrations and electrons. In particular, renormalised screening effects will be found. Our approach here is, however, limited to mono-atomic unit cells because the internal structure of a unit cell is neglected.

### 3.3.1 Vibration of an Isotropic Continuous Medium

The deformation of an elastic medium can be described by the displacement of the infinitesimal volume element $d^{3} r$ around a point $\boldsymbol{r}$ to a different point $\boldsymbol{r}^{\prime}(\boldsymbol{r})$. We can introduce here the so-called displacement field $\boldsymbol{u}(\boldsymbol{r})=\boldsymbol{r}^{\prime}(\boldsymbol{r})-\boldsymbol{r}$ as function of $\boldsymbol{r}$. In general, $\boldsymbol{u}$ is also a function of time. In the simplest form of an isotropic medium the elastic energy for small deformations is given by
$$
\begin{align*}
E_{\text {el }}=\frac{\lambda}{2} \int d^{3} r(\boldsymbol{\nabla} \cdot \boldsymbol{u}(\boldsymbol{r}, t))^{2}
\end{align*}
$$
where $\lambda$ is the elastic modulus (note that there is no deformation energy, if the medium is just shifted uniformly). This energy term produces a restoring force trying to bring the system back to the undeformed state. In this model we are neglecting the shear contributions. The continuum form above is valid for deformation wavelengths that are much longer than the lattice constant, so that details of the arrangement of atoms in the lattice can be neglected. The kinetic energy of the motion of the medium is given by
$$
\begin{align*}
E_{\text {kin }}=\frac{\rho_{0}}{2} \int d^{3} r\left(\frac{\partial \boldsymbol{u}(\boldsymbol{r}, t)}{\partial t}\right)^{2}
\end{align*}
$$
where $\rho_{0}=M_{i} n_{i}$ is the mass density with the ionic mass $M_{i}$ and the ionic density $n_{i}$. Variation of the Lagrangian functional $L[\boldsymbol{u}]=E_{\text {kin }}-E_{\text {el }}$ with respect to $\boldsymbol{u}(\boldsymbol{r}, t)$ leads to the equation of motion
$$
\begin{align*}
\frac{1}{c_{s}^{2}} \frac{\partial^{2}}{\partial t^{2}} \boldsymbol{u}(\boldsymbol{r}, t)-\boldsymbol{\nabla}(\boldsymbol{\nabla} \cdot \boldsymbol{u}(\boldsymbol{r}, t))=0
\end{align*}
$$
which is a wave equation with sound velocity $c_{s}^{2}=\lambda / \rho_{0}$. The resulting displacement field can be expanded into normal modes,
$$
\begin{align*}
\boldsymbol{u}(\boldsymbol{r}, t)=\frac{1}{\sqrt{\Omega}} \sum_{\boldsymbol{k}} \boldsymbol{e}_{\boldsymbol{k}}\left(q_{\boldsymbol{k}}(t) e^{i \boldsymbol{k} \cdot \boldsymbol{r}}+q_{\boldsymbol{k}}(t)^{*} e^{-i \boldsymbol{k} \cdot \boldsymbol{r}}\right)
\end{align*}
$$
where every $q_{\boldsymbol{k}}(t)$ satisfies the equation
$$
\begin{align*}
\frac{d^{2}}{d t^{2}} q_{k}+\omega_{k}^{2} q_{k}=0
\end{align*}
$$
with the frequency $\omega_{\boldsymbol{k}}=c_{s}|\boldsymbol{k}|=c_{s} k$ and the polarisation vector $\boldsymbol{e}_{\boldsymbol{k}}$ has unit length. Note that within our simplification for the elastic energy (3.120), all modes correspond to longitudinal waves, i.e. $\boldsymbol{\nabla} \times \boldsymbol{u}(\boldsymbol{r}, t)=0$ and $\boldsymbol{e}_{\boldsymbol{k}} \| \boldsymbol{k}$. The total energy expressed in terms of the normal modes reads
$$
\begin{align*}
E=\sum_{\boldsymbol{k}} \rho_{0} \omega_{\boldsymbol{k}}^{2}\left[q_{\boldsymbol{k}}(t) q_{\boldsymbol{k}}^{*}(t)+q_{\boldsymbol{k}}^{*}(t) q_{\boldsymbol{k}}(t)\right] .
\end{align*}
$$

Next, we switch from a Lagrangian to a Hamiltonian description by defining the new variables
$$
\begin{align*}
\begin{aligned}
Q_{\boldsymbol{k}} & =\sqrt{\rho_{0}}\left(q_{\boldsymbol{k}}+q_{\boldsymbol{k}}^{*}\right) \\
P_{\boldsymbol{k}} & =\frac{d}{d t} Q_{\boldsymbol{k}}=-i \omega_{\boldsymbol{k}} \sqrt{\rho_{0}}\left(q_{\boldsymbol{k}}-q_{\boldsymbol{k}}^{*}\right)
\end{aligned}
\end{align*}
$$
in terms of which the energy is given by
$$
\begin{align*}
E=\frac{1}{2} \sum_{k}\left(P_{k}^{2}+\omega_{k}^{2} Q_{k}^{2}\right) .
\end{align*}
$$

[^7]Thus, the system is equivalent to an ensemble of independent harmonic oscillators, one for each normal mode $\boldsymbol{k}$. Consequently, the system may be quantised by defining the canonical conjugate operators $P_{k} \rightarrow \widehat{P}_{k}$ and $Q_{k} \rightarrow \widehat{Q}_{k}$ which obey, by definition, the commutation relation,
$$
\begin{align*}
\left[\widehat{Q}_{\boldsymbol{k}}, \widehat{P}_{\boldsymbol{k}^{\prime}}\right]=i \hbar \delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}
\end{align*}
$$

As it is usually done for quantum harmonic oscillators, we define the raising and lowering operators
$$
\begin{align*}
\begin{aligned}
& \widehat{b}_{k}=\frac{1}{\sqrt{2 \hbar \omega_{k}}}\left(\omega_{k} \widehat{Q}_{k}+i \widehat{P}_{k}\right) \\
& \widehat{b}_{k}^{\dagger}=\frac{1}{\sqrt{2 \hbar \omega_{k}}}\left(\omega_{k} \widehat{Q}_{k}-i \widehat{P}_{k}\right),
\end{aligned}
\end{align*}
$$
satisfying the commutation relations
$$
\begin{align*}
\begin{aligned}
{\left[\widehat{b}_{\boldsymbol{k}}, \widehat{b}_{\boldsymbol{k}^{\prime}}^{\dagger}\right.} & =\delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}} \\
{\left[\widehat{b}_{\boldsymbol{k}}, \widehat{b}_{\boldsymbol{k}^{\prime}}\right] } & =0, \\
{\left[\widehat{b}_{\boldsymbol{k}}^{\dagger}, \widehat{b}_{\boldsymbol{k}^{\prime}}^{\dagger}\right] } & =0 .
\end{aligned}
\end{align*}
$$

These relations can be interpreted in a way that these operators create and annihilate quasi-particles following the Bose-Einstein statistics. According to the correspondence principle, the quantum mechanical Hamiltonian corresponding to the energy (3.128) is
$$
\begin{align*}
\mathcal{H}=\sum_{\boldsymbol{k}} \hbar \omega_{\boldsymbol{k}}\left(\widehat{b}_{\boldsymbol{k}}^{\dagger} \widehat{b}_{\boldsymbol{k}}+\frac{1}{2}\right) .
\end{align*}
$$

In analogy to the treatment of the electrons in second quantisation we say that the operators $\widehat{b}_{\boldsymbol{k}}^{\dagger}$ $\left(\widehat{b}_{k}\right)$ create (annihilate) a phonon, a quasi-particle with well-defined energy-momentum relation, $\omega_{\boldsymbol{k}}=c_{s}|\boldsymbol{k}|$. Using Eqs.(3.124, 3.127, and 3.131) the displacement field operator $\widehat{\boldsymbol{u}}(\boldsymbol{r})$ can now be defined as
$$
\begin{align*}
\widehat{\boldsymbol{u}}(\boldsymbol{r})=\frac{1}{\sqrt{\Omega}} \sum_{\boldsymbol{k}} e_{\boldsymbol{k}} \sqrt{\frac{\hbar}{2 \rho_{0} \omega_{\boldsymbol{k}}}}\left[\widehat{b}_{\boldsymbol{k}} e^{i \boldsymbol{k} \cdot \boldsymbol{r}}+\widehat{b}_{\boldsymbol{k}}^{\dagger} e^{-i \boldsymbol{k} \cdot \boldsymbol{r}}\right] .
\end{align*}
$$

As mentioned above, the continuum approximation is valid for long wavelengths (small $\boldsymbol{k}$ ) only. For wavevectors with $\boldsymbol{k} \approx \pi / a$ the discreteness of the lattice appears in the form of corrections to the linear dispersion $\omega_{\boldsymbol{k}} \propto|\boldsymbol{k}|$. Since the number of degrees of freedom is limited to $3 N_{i}\left(N_{i}\right.$ number of atoms), there is a maximal wave vector called the Debye wavevector $k_{D}$. We can now define the corresponding Debye frequency $\omega_{D}=c_{s} k_{D}$ and the Debye temperature $\Theta_{D}=\hbar \omega_{D} / k_{B}$. In the continuous medium approximation there are only acoustic phonons. For the inclusion of optical phonons, the arrangement of the atoms within a unit cell has to be considered, which goes beyond this simple picture.

### 3.3.2 Phonons in Metals

The consideration above is certainly valid for semiconductors, where ionic interactions are mediated via covalent chemical bonds and oscillations around the equilibrium position may be approximated by a harmonic potential, so that the form of the elastic energy above is well motivated. The situation is more subtle for metals, where the ions interact through the long-ranged Coulomb interaction and are held to together through an intricate interplay with the mobile conduction electrons.

First, neglecting the gluey effect of the electrons, the positively charged background can itself be treated as an ionic gas. Similar to the electronic gas (3.90), the background exhibits a well-defined collective plasma excitation at the ionic plasma frequency
$$
\begin{align*}
\Omega_{p}^{2}=\frac{4 \pi n_{i}\left(Z_{i} e\right)^{2}}{M_{i}},
\end{align*}
$$

For equation (3.137) we used the formula (3.90) with $n_{0} \rightarrow n_{i}=n_{0} / Z_{i}$ the density of ions with charge number $Z_{i}$, e $\rightarrow Z_{i} e$, and $m \rightarrow M_{i}$ the atomic mass. Apparently the excitation energy does not vanish as $\boldsymbol{k} \rightarrow 0$. So far, the background of the metallic system can not be described as an elastic medium where the excitation spectrum is expected to be linear in $k, \omega_{\boldsymbol{k}} \propto|\boldsymbol{k}|$.

The shortcoming in this discussion is that we neglected the feedback effects of the electrons that react nearly instantaneously to the slow ionic motion, due to their much smaller mass. The finite plasma frequency is a consequence of the long-range nature of the Coulomb potential (as mentioned earlier), but as we have seen above the electrons tend to screen these potentials, in particular for small wavevectors $\boldsymbol{k}$. The "bare" ionic plasma frequency $\Omega_{p}$ is thus renormalised to
$$
\begin{align*}
\omega_{\boldsymbol{k}}^{2}=\frac{\Omega_{p}^{2}}{\varepsilon(\boldsymbol{k}, 0)}=\frac{k^{2} \Omega_{p}^{2}}{k^{2}+k_{T F}^{2}} \approx\left(c_{s} k\right)^{2},
\end{align*}
$$
where the presence of the electrons leads to a renormalisation of the Coulomb potential by a factor $1 / \varepsilon(\boldsymbol{k}, \omega)$. Having included the back-reaction of the electrons, a linear dispersion of a sound wave $\left(\omega_{\boldsymbol{k}}=c_{s}|\boldsymbol{k}|\right)$ is finally recovered, and the renormalised velocity of sound $c_{s}$ reads
$$
\begin{align*}
c_{s}^{2} \approx \frac{\Omega_{p}^{2}}{k_{T F}^{2}}=\frac{Z m \omega_{p}^{2}}{M_{i} k_{T F}^{2}}=\frac{1}{3} Z \frac{m}{M_{i}} v_{F}^{2} .
\end{align*}
$$

For the comparison of the energy scales we find,
$$
\begin{align*}
\frac{\Theta_{D}}{T_{F}} \sim \frac{c_{s}}{v_{F}}=\sqrt{\frac{1}{3} Z \frac{m}{M_{i}}} \ll 1,
\end{align*}
$$
where we used $k_{B} T_{F}=\epsilon_{F}$ and $k_{D} \approx k_{F}$.

**Kohn anomaly**

Notice that phonon frequencies are much smaller than the (electronic) plasma frequency, so that the approximation
$$
\begin{align*}
\omega_{\boldsymbol{k}}^{2}=\frac{\Omega_{p}^{2}}{\varepsilon(\boldsymbol{k}, 0)}
\end{align*}
$$
is valid even for larger wavevectors. Employing the Lindhard form of $\varepsilon(\boldsymbol{k}, 0)$, we deduce that the phonon frequency is singular at $|\boldsymbol{k}|=2 k_{F}$. More explicitly we find
$$
\begin{align*}
\frac{\partial \omega_{\boldsymbol{k}}}{\partial \boldsymbol{k}} \rightarrow \infty
\end{align*}
$$
in the limit $k \rightarrow 2 k_{F}$. This behaviour is called the Kohn anomaly and results from the interaction between electrons and phonons. This effect is not contained in the previous elastic medium model that neglected ion-electron interactions.

![Attachments/Notes/Solid-State Theory/IMG-0126164737944.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164737944.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=78&rect=170,214,422,400|•]]

### 3.3.3 Peierls Instability in one Dimension

The Kohn anomaly has particularly drastic effects in (quasi) one-dimensional electron systems, where the electron-phonon coupling leads to an instability of the metallic state. We consider a one-dimensional Jellium model where the ionic background is treated as an elastic medium with a displacement field $u$ along the extended direction ( $x$-axis). We neglect both the electron-electron interaction and the slow time evolution of the background modulation so that the Hamiltonian reads,
$$
\begin{align*}
\mathcal{H}=\mathcal{H}_{\text {isol }}+\mathcal{H}_{\text {int }}
\end{align*}
$$
where contributions of the isolated electronic and ionic systems are included in
$$
\begin{align*}
\mathcal{H}_{\text {isol }}=\sum_{k, s} \frac{\hbar^{2} k^{2}}{2 m} c_{k s}^{\dagger} c_{k s}+\frac{\lambda}{2} \int d x\left(\frac{d u}{d x}(x)\right)^{2}
\end{align*}
$$
whereas the interactions between the system comes in via the coupling
$$
\begin{align*}
\mathcal{H}_{\mathrm{int}}=-n_{0} \sum_{s} \int d x \int d x^{\prime} V\left(x-x^{\prime}\right) \frac{d}{d x} u(x) \widehat{\Psi}_{s}^{\dagger}\left(x^{\prime}\right) \widehat{\Psi}_{s}\left(x^{\prime}\right)
\end{align*}
$$

In the general theory of elastic media $\boldsymbol{\nabla} \cdot \boldsymbol{u}=-\delta n / n_{0}$ describes density modulations, so that the second term in (3.143) models the coupling of the electrons to charge density fluctuations of the positively charged background mediated by the screened Coulomb interaction $V\left(x-x^{\prime}\right)$ (contact interaction). Note that only phonon modes with a finite value of $\boldsymbol{\nabla} \cdot \boldsymbol{u}$ couple in lowest order to the electrons. This is only possible of longitudinal modes. Transverse modes are defined by the condition $\boldsymbol{\nabla} \cdot \boldsymbol{u}=0$ and do not couple to electrons in lowest order.

Consider the ground state of $N$ electrons in a system of length $L$, leading to an electronic density $n_{0}=N / L$. For a uniform background $u(x)=$ const, the Fermi wavevector of free electrons is readily determined to be
$$
\begin{align*}
N=\sum_{s} \frac{L}{2 \pi} \int_{-k_{F}}^{+k_{F}} d k 1=2 \frac{L}{2 \pi} 2 k_{F}
\end{align*}
$$
leading to
$$
\begin{align*}
k_{F}=\frac{\pi}{2} n_{0} .
\end{align*}
$$

**Perturbative approach - instability**

Now we consider the Kohn anomaly of this one-dimensional system. Note that here we calculated concretely in one-dimension. In real quasi-one-dimensional systems only the electron dispersion would be one-dimensional - no perpendicular motion - while the overall calculations would done in three dimensions. For a small background modulation $u(x) \neq$ const, the interaction term $\mathcal{H}_{\text {int }}$ can be treated perturbatively and will lead to a renormalisation of the elastic modulus $\lambda$ in (3.143). For that it will be useful to express the full Hamiltonian in momentum space,
$$
\begin{align*}
\begin{aligned}
\mathcal{H}_{\text {isol }} & =\sum_{k, s} \frac{\hbar^{2} k^{2}}{2 m} c_{k s}^{\dagger} c_{k s}+\frac{\rho_{0}}{2} \sum_{q} \omega_{q}^{2} u_{q} u_{-q} \\
\mathcal{H}_{\text {int }} & =\frac{i n_{0}}{2 \sqrt{L}} \sum_{k, q, s} q\left[\tilde{V}_{-q} u_{q} \widehat{c}_{k+q, s}^{\dagger} \widehat{c}_{k, s}-\tilde{V}_{q} u_{-q} \widehat{c}_{k, s}^{\dagger} \widehat{c}_{k+q, s}\right]
\end{aligned}
\end{align*}
$$

where we used from previous considerations $\lambda q^{2}=\rho_{0} \omega_{q}^{2}$. Furthermore we defined

$$
\begin{align*}
\begin{aligned}
u(x) & =\frac{1}{\sqrt{L}} \sum_{q} u_{q} e^{i q x} \\
V(x) & =\frac{1}{L} \sum_{q} \tilde{V}_{q} e^{i q x}
\end{aligned}
\end{align*}
$$
with $\tilde{V}_{q}=4 \pi e^{2} / q^{2} \epsilon(q, 0) \approx$ const. - we consider an effectively short-ranged potential. We compute the second order correction to the ground state energy using Rayleigh-Schrödinger perturbation theory (note that the linear energy shift vanishes)
$$
\begin{align*}
\begin{aligned}
& \Delta E^{(2)}=\frac{n_{0}^{2}}{4 L} \sum_{k, q, s} q^{2}\left|\tilde{V}_{q}\right|^{2} u_{q} u_{-q} \sum_{n} \frac{\left.\left|\left\langle\Psi_{0}\right|\right|_{c_{k, s}}^{\dagger} \widehat{c}_{k+q, s}|n\rangle\right|^{2}+\mid\left.\left\langle\Psi_{0}\right|\right|_{c} ^{\dagger}}{\left.{ }_{k+q, s} \widehat{c}_{k, s}|n\rangle\right|^{2}} \\
& E_{0}-E_{n} \\
&=\frac{n_{0}^{2}}{4} \sum_{q} q^{2}\left|\tilde{V}_{q}\right|^{2} u_{q} u_{-q} \frac{1}{L} \sum_{k, s} \frac{n_{k+q}-n_{k}}{\epsilon_{k+q}-\epsilon_{k}} \\
&=\frac{n_{0}^{2}}{4} \sum_{q}\left|\tilde{V}_{q}\right|^{2} q^{2} \chi_{0}(q, 0) u_{q} u_{-q}
\end{aligned}
\end{align*}
$$
where the virtual states $|n\rangle$ are electron-hole excitations of the filled Fermi sea. This term gives a correction to the elastic term in (3.148). In other words, the elastic modulus $\lambda$ and, thus, the phonon frequency $\omega_{q}{ }^{2}=q^{2} \lambda / \rho_{0}=c_{s}^{2} q^{2}$ is renormalised according to
$$
\begin{align*}
\left(\omega_{q}^{\mathrm{ren}}\right)^{2} \approx \omega_{q}^{2}+\frac{n_{0}^{2}\left|\tilde{V}_{q}\right|^{2} q^{2}}{4 \rho_{0}} \chi_{0}(q, 0)=\omega_{q}^{2}-\frac{n_{0}^{2}\left|\tilde{V}_{q}\right|^{2} m q}{4 \pi \rho_{0} \hbar^{2}} \ln \left|\frac{q+2 k_{F}}{q-2 k_{F}}\right|
\end{align*}
$$
From the behaviour for $q \rightarrow 0$ we infer that the velocity of sound is renormalised. However, a much more drastic modification occurs at $q=2 k_{F}$. Here the phonon spectrum is 'softened', i.e. the frequency vanishes and even becomes negative. The latter effect is an artifact of the perturbation theory. This hints at an instability triggered by the Bose-Einstein condensation of phonons with a wave vector of . This coherent superposition  of many phonons corresponds classically to a static periodic deformation of the ionic background with wave vector . The unphysical behaviour of the frequency  indicates that in the vicinity of , the current problem can not be treated with the help of perturbation theory around the uniform state.

**Peierls instability at $\mathrm{Q}=\mathbf{2} \mathrm{k}_{\mathrm{F}}$**

Instead of the perturbative approach, we assume that the background shows a periodic density modulation (coherent phonon state)
$$
\begin{align*}
u(x)=u_{0} \cos (Q x)
\end{align*}
$$
where $Q=2 k_{F}$ and $u_{0}$ remains to be determined variationally. We investigate the effect of this modulation on the electron-phonon system. To this end we show that such a modulation lowers the energy of the electrons. Assuming that $u_{0}$ is small we can evaluate the electronic energy using the approximation of nearly free electrons, where $Q$ appears as a reciprocal lattice vector. The electronic spectrum for $0 \leq k \leq Q$ is then approximately determined by the secular equation
$$
\begin{align*}
\operatorname{det}\left(\begin{array}{cc}
\frac{\hbar^{2} k^{2}}{2 m}-E & \Delta \\
\Delta^{*} & \frac{\hbar^{2}(k-Q)^{2}}{2 m}-E
\end{array}\right)=0
\end{align*}
$$
where $\Delta$ derives from the Fourier transform of the potential $V(x)$,
$$
\begin{align*}
\Delta=-i Q u_{0} n \tilde{V}_{Q}
\end{align*}
$$
with
$$
\begin{align*}
\tilde{V}_{Q}=\int d x e^{i Q x} V(x)
\end{align*}
$$

The equation (3.161) leads to the energy eigenstates
$$
\begin{align*}
E_{k}^{ \pm}=\frac{\hbar^{2}}{4 m}\left[(k-Q)^{2}+k^{2} \pm \sqrt{\left\{(k-Q)^{2}-k^{2}\right\}^{2}+16 m^{2}|\Delta|^{2} / \hbar^{4}}\right] .
\end{align*}
$$

The total energy of the electronic and ionic system is then given by
$$
\begin{align*}
E_{\text {tot }}\left(u_{0}\right)=2 \sum_{0 \leq k<Q} E_{k-}+\frac{\lambda L Q^{2}}{4} u_{0}^{2}
\end{align*}
$$

where all electronic states of the lower band ( $E_{k-}$ ) are occupied and all states of the upper band $\left(E_{k+}\right)$ are empty. The amplitude $u_{0}$ of the modulation is found by minimising $E_{\text {tot }}$ with respect to $u_{0}$ :
$$
\begin{align*}
\begin{aligned}
0 & =\frac{1}{L} \frac{d E_{\text {tot }}}{d u_{0}} \\
& =-\frac{\hbar^{2}}{2 m} \frac{16 Q^{2} m^{2} n^{2} \tilde{V}_{Q}^{2}}{\hbar^{4}} u_{0} \int_{0}^{Q} \frac{d k}{2 \pi} \frac{1}{\sqrt{\left\{(k-Q)^{2}-k^{2}\right\}^{2}+16 m^{2} Q^{2} n^{2} \tilde{V}_{Q}^{2} u_{0}^{2} / \hbar^{4}}}+\frac{\lambda}{2} Q^{2} u_{0} \\
& =-u_{0} \frac{2 Q m n^{2} \tilde{V}_{Q}^{2}}{\hbar^{2} \pi} \int_{-k_{F}}^{+k_{F}} d q \frac{1}{\sqrt{q^{2}+4 m^{2} n^{2} \tilde{V}_{Q}^{2} u_{0}^{2} / \hbar^{4}}}+\frac{\lambda}{2} Q^{2} u_{0} \\
& =-u_{0} \frac{4 Q m n^{2} \tilde{V}_{Q}^{2}}{\hbar^{2} \pi} \operatorname{arsinh}\left(\frac{\hbar^{2} k_{F}}{2 m n \tilde{V}_{Q} u_{0}}\right)+\frac{\lambda}{2} Q^{2} u_{0} .
\end{aligned}
\end{align*}
$$

We solve this equation for $u_{0}$ using $\operatorname{arsinh}(x) \approx \ln (2 x)$ when $x \gg 1$.
$$
\begin{align*}
u_{0}=\frac{\hbar^{2} k_{F}}{m n \tilde{V}_{Q}} \exp \left[-\frac{\hbar^{2} k_{F} \pi \lambda}{4 m n^{2} \tilde{V}_{Q}^{2}}\right]=\frac{2}{k_{F}} \frac{\epsilon_{F}}{n \tilde{V}_{Q}} e^{-1 / N\left(\epsilon_{F}\right) g}
\end{align*}
$$
where $\epsilon_{F}=\hbar^{2} k_{F}^{2} / 2 m$ is the Fermi energy and $N\left(\epsilon_{F}\right)=2 m / \pi \hbar^{2} k_{F}$ is the density of states at the Fermi energy in the one-dimensional system. We introduced the coupling constant $g=2 n^{2} \tilde{V}_{Q}^{2} / \lambda$ that describes the phonon-induced effective electron-electron interaction. The coupling is the stronger the more polarizable (softer) ionic background, i.e. when the elastic modulus $\lambda$ is small. Note that the static displacement $u_{0}$ depends exponentially on the coupling and on the density of states. The underlying reason for this so-called Peierls instability to happen lies in the opening of an energy gap,
$$
\begin{align*}
\Delta E=E_{k_{F}}^{+}-E_{k_{F}}^{-}=2|\Delta|=8 \epsilon_{F} \exp \left(-\frac{1}{N\left(\epsilon_{F}\right) g}\right)
\end{align*}
$$
at $k= \pm k_{F}$, i.e. at the Fermi energy. The gap is associated with a lowering of the energy of the electron states in the lower band in the vicinity of the Fermi energy. For this reason this kind of instability is called a Fermi surface instability. Due to the gap the metal has turned into a semiconductor with a finite energy gap for all electron-hole excitations. 

![Attachments/Notes/Solid-State Theory/IMG-0126164738127.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164738127.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=80&rect=166,168,432,290|•]]

The modulation of the electron density follows the charge modulation due to the ionic lattice deformation, which can be seen by expressing the wave function of the electronic states,
$$
\begin{align*}
\psi_{k}^{\prime}(x)=\frac{1}{\sqrt{L}} \frac{\Delta e^{i k x}+\left(E_{k}-\epsilon_{k}\right) e^{i(k-Q) x}}{\sqrt{\left(E_{k}-\epsilon_{k}\right)^{2}+|\Delta|^{2}}}
\end{align*}
$$
which is a superposition of two plane waves with wave vectors $k$ and $k-Q$, respectively. Hence the charge density reads
$$
\begin{align*}
\rho_{k}(x)=-e\left|\psi_{k}^{\prime}(x)\right|^{2}=-\frac{e}{L}\left[1-\frac{2\left(\epsilon_{k}-E_{k}\right)|\Delta|}{\left(E_{k}-\epsilon_{k}\right)^{2}+|\Delta|^{2}} \sin Q x\right]
\end{align*}
$$
and its modulation from the homogeneous distribution -en is given by
$$
\begin{align*}
\begin{aligned}
\delta \rho(x) & =2 \sum_{k} \rho_{k}(x)-(-e n)=2 e \int_{0}^{k_{F}} \frac{d k^{\prime}}{2 \pi} \frac{m|\Delta| \sin Q x}{\sqrt{\hbar^{4} k_{F}^{2} k^{\prime 2}+m^{2}|\Delta|^{2}}} \\
& =\frac{e n|\Delta|}{4 \epsilon_{F}} \ln \left|\frac{4 \epsilon_{F}}{|\Delta|}\right| \sin \left(2 k_{F} x\right) .
\end{aligned}
\end{align*}
$$

Such a state, with a spatially modulated electronic charge density, is called a charge density wave (CDW) state. This instability is important in quasi-one-dimensional metals which are for example realised in organic conductors such as TTF.TCNQ (tetrathiafulvalene tetracyanoquinomethane). In higher dimensions the effect of the Kohn anomaly is generally less pronounced, so that in this case spontaneous deformations rarely occur. As we will see later, a charge density wave instability can nevertheless be observed in multi-dimensional ( $d>1$ ) systems with a socalled nested Fermi surface. These systems resemble in some respects one-dimensional systems. Finally, notice that the electron-phonon interaction strongly contributes to another kind of Fermi surface instability, when metals exhibit superconductivity.

### 3.3.4 Dynamics of Phonons and the Dielectric Function

We have seen that an external potential $V_{a}$ is screened by the polarisation of the electrons. As the positively charged ionic background is also polarisable, it should be included in the renormalisation of the external potential. In general, the fully renormalised potential $V_{\text {ren }}$ may be expressed via
$$
\begin{align*}
\varepsilon V_{\text {ren }}=V_{a}
\end{align*}
$$
with the full dielectric function $\varepsilon$. In order to determine $V_{\text {ren }}$ and $\varepsilon$, we define the 'bare' (unrenormalised) electronic (ionic) dielectric function $\varepsilon^{\mathrm{el}}\left(\varepsilon^{\mathrm{ion}}\right)$. The renormalised potential in (3.176) can be expressed considering three other points of view. First, if the ionic potential $V_{\text {ion }}$ is added to the external potential $V_{a}$, the remaining screening is due to the electrons only, i.e.,
$$
\begin{align*}
\varepsilon^{\mathrm{el}} V_{\text {ren }}=V_{a}+V_{\mathrm{ion}} .
\end{align*}
$$

Secondly, the electronic potential $V_{\text {el }}$ may be added to the external potential $V_{a}$, so that the ions exclusively renormalise the new potential $V_{\mathrm{el}}+V_{a}$, resulting in
$$
\begin{align*}
\varepsilon^{\mathrm{ion}} V_{\mathrm{ren}}=V_{a}+V_{\mathrm{el}} .
\end{align*}
$$

Note that all effects of electron polarisation are included in $V_{\mathrm{el}}$, so that the dielectric function results from the 'bare' ions. Finally we use the fact that $V_{\text {ren }}$ may be expressed as
$$
\begin{align*}
V_{\mathrm{ren}}=V_{a}+V_{\mathrm{el}}+V_{\mathrm{ion}} .
\end{align*}
$$

We obtain
$$
\begin{align*}
\left(\varepsilon^{\mathrm{el}}+\varepsilon^{\mathrm{ion}}-\varepsilon\right) V_{\mathrm{ren}}=V_{a}+V_{\mathrm{el}}+V_{\mathrm{ion}}
\end{align*}
$$
which simplifies with (3.179) to
$$
\begin{align*}
\varepsilon=\varepsilon^{\mathrm{el}}+\varepsilon^{\mathrm{ion}}-1
\end{align*}
$$

In order to find an alternative expression relating the renormalised potential $V_{\text {ren }}$ to the external potential $V_{a}$, we make the Ansatz
$$
\begin{align*}
V_{\mathrm{ren}}=\frac{1}{\varepsilon} V_{a}=\frac{1}{\varepsilon_{\mathrm{eff}}^{\text {ion }}} \frac{1}{\varepsilon^{\mathrm{el}}} V_{a}
\end{align*}
$$
i.e. the potential $V_{a} / \varepsilon^{\mathrm{el}}$ that results from bare screening of the polarisable electrons is additionally screened by an effective ionic dielectric function $\varepsilon_{\text {eff }}^{\text {ion }}$ which includes electron-phonon interactions. Using equation (3.181) and the definition of $\varepsilon_{\text {eff }}^{\text {ion }}$ we obtain
$$
\begin{align*}
\varepsilon_{\mathrm{eff}}^{\mathrm{ion}}=1+\frac{1}{\varepsilon^{\mathrm{el}}}\left(\varepsilon^{\mathrm{ion}}-1\right),
\end{align*}
$$
or using the definition (3.75)
$$
\begin{align*}
\chi_{0, \mathrm{eff}}^{\mathrm{ion}}=\frac{\chi_{0}^{\mathrm{ion}}}{\varepsilon^{\mathrm{el}}}
\end{align*}
$$

Taking into account the discussion of the plasma excitation of the bare ions, and considering the long wave-length excitations ( $\boldsymbol{k} \rightarrow 0$ ), we approximate
$$
\begin{align*}
\begin{aligned}
\varepsilon^{\mathrm{ion}} & =1-\frac{\Omega_{p}^{2}}{\omega^{2}} \\
\varepsilon^{\mathrm{el}} & =1+\frac{k_{T F}^{2}}{k^{2}} .
\end{aligned}
\end{align*}
$$

For the electrons we used the result from the quasi-static limit in (3.99). The full dielectric function now reads
$$
\begin{align*}
\varepsilon=1+\frac{k_{T F}^{2}}{k^{2}}-\frac{\Omega_{p}^{2}}{\omega^{2}}=\left(1+\frac{k_{T F}^{2}}{k^{2}}\right)\left(1-\frac{\omega_{\boldsymbol{k}}^{2}}{\omega^{2}}\right) .
\end{align*}
$$
The time-independent Coulomb interaction
$$
\begin{align*}
V_{a}=\frac{4 \pi e^{2}}{q^{2}}
\end{align*}
$$
between the electrons is replaced in a metal by an effective interaction
$$
\begin{align*}
\begin{aligned}
V_{\text {ren }}(\boldsymbol{q}, \omega) & =\frac{4 \pi e^{2}}{q^{2} \varepsilon(\boldsymbol{q}, \omega)} \\
& =\frac{4 \pi e^{2}}{k_{T F}^{2}+q^{2}}\left(\frac{\omega^{2}}{\omega^{2}-\omega_{\boldsymbol{q}}^{2}}\right) .
\end{aligned}
\end{align*}
$$

This interaction corresponds to the matrix element for a scattering process of two electrons with momentum exchange $\boldsymbol{q}$ and energy exchange $\omega$. The phonon frequency $\omega_{\boldsymbol{q}}$ is always less than the Debye frequency $\omega_{D}$. Hence the effect of the phonons is almost irrelevant for energy exchanges $\omega$ that are much larger than $\omega_{D}$. The time scale for such energies would be too short for the slow ions to move and influence the interaction. Interestingly, the repulsive bare Coulomb potential is renormalised to an interaction with an attractive channel for $\omega<\omega_{D}$ because of overcompensation by the ions. This aspect of the electron-phonon interaction is most important for superconductivity.

![Attachments/Notes/Solid-State Theory/IMG-0126164738307.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164738307.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=82&rect=207,253,394,385|•]]

---
## 3.4 Appendix: Linear Response Theory
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=83&selection=40,0,42,32|•]]

Much information about a macroscopic system can be gained through the observation of its response to a small external perturbation. If the perturbation is sufficiently small we can consider the response of the system in lowest order, linear in the perturbing field. This is the approach pursued by the linear response theory.
If we knew all stationary states of a macroscopic quantum system with many degrees of freedom we could calculate essentially any desired quantity. However, the full information of such system is hard to store and is also unnecessary in view of our real experimental interests. The linear response functions are an efficient way to provide in a condensed form some of the most important and relevant informations accessible in an experiment. The linear response function is one element of quantum field theory of solid state physics. We will introduce it here on an elementary level.

### 3.4.1 Linear Response Function

In this chapter we have analysed the influence of an external potential on the distribution of electrons. The position- and time-dependent potential $V(\boldsymbol{r}, t)$ induces the density modulation $\delta n(\boldsymbol{r}, t)$ which would be measured as a response to the potential. In real space and time the connection between the two is given by the linear relation,
$$
\begin{align*}
\delta n(\boldsymbol{r}, t)=\int d^{3} r^{\prime} \int d t^{\prime} \chi\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}, t-t^{\prime}\right) V\left(\boldsymbol{r}^{\prime}, t^{\prime}\right)
\end{align*}
$$
where we assume that the system is homogeneous and isotropic. The response function $\chi(\boldsymbol{r}-$ $\boldsymbol{r}^{\prime}, t-t^{\prime}$ ) describes how the potential at a position $\boldsymbol{r}^{\prime}$ and time $t^{\prime}$ influences the behaviour of the system at the position $\boldsymbol{r}$ and at a later time $t$ (causality). Causality actually requires that $\chi(\boldsymbol{r}, t)=0$ for $t<0$. The response functions are non-local in space and time. The convolution can be converted into a simple product by going to momentum-frequency space,
$$
\begin{align*}
\delta n(\boldsymbol{q}, \omega)=\chi(\boldsymbol{q}, \omega) V(\boldsymbol{q}, \omega)
\end{align*}
$$
where the Fourier transformation is performed as follows,
$$
\begin{align*}
f(\boldsymbol{r}, t)=\frac{1}{\Omega} \sum_{\boldsymbol{q}} \int_{-\infty}^{+\infty} \frac{d \omega}{2 \pi} f(\boldsymbol{q}, \omega) e^{-i(\omega t-\boldsymbol{q} \cdot \boldsymbol{r})} .
\end{align*}
$$

We now determine the response function for a general external field and response quantity.

**Kubo formula - retarded Green's function**

We consider a quantum system described by the Hamiltonian $\mathcal{H}_{0}$ and analyze its response to an external field $\phi(\boldsymbol{r}, t)$ which couples to the field operator $\widehat{A}(\boldsymbol{r})$,
$$
\begin{align*}
\mathcal{H}=\mathcal{H}_{0}+\mathcal{H}^{\prime}(t)=\mathcal{H}_{0}+\int d^{3} r \widehat{A}(\boldsymbol{r}) \phi(\boldsymbol{r}, t) e^{\eta t}
\end{align*}
$$
where $\eta=0_{+}$is a small positive parameter allowing to switch the perturbation adiabatically on, i.e. at time $t \rightarrow-\infty$ there is no perturbation. The behaviour of the system can be determined by the density matrix $\widehat{\rho}(t)$. Knowing $\widehat{\rho}$ we can calculate interesting mean values of operators, $\langle\widehat{B}(t)\rangle=\operatorname{tr}(\widehat{\rho}(t) \widehat{B})$. A way to find the density matrix goes via the equation of motion,
$$
\begin{align*}
i \hbar \frac{\partial \widehat{\rho}}{\partial t}=-[\widehat{\rho}, \mathcal{H}]=-\left[\widehat{\rho}, \mathcal{H}_{0}+\mathcal{H}^{\prime}\right]
\end{align*}
$$

We proceed using the concept of time-dependent perturbation theory, $\widehat{\rho}=\widehat{\rho}_{0}+\delta \widehat{\rho}(t)$, with
$$
\begin{align*}
\widehat{\rho}_{0}=\frac{1}{Z} e^{-\beta \mathcal{H}_{0}} \quad \text { with } \quad Z=\operatorname{tr} e^{-\beta \mathcal{H}_{0}}
\end{align*}
$$
as the partition function and insert this form into the equation of motion, which we then truncate at linear order in $\mathcal{H}^{\prime}$,
$$
\begin{align*}
i \hbar \frac{\partial}{\partial t} \delta \widehat{\rho}=-\left[\delta \widehat{\rho}, \mathcal{H}_{0}\right]-\left[\widehat{\rho}_{0}, \mathcal{H}^{\prime}\right]+\cdots
\end{align*}
$$

We turn to the interaction representation (time-dependent perturbation theory),
$$
\begin{align*}
\delta \widehat{\rho}(t)=e^{-i \mathcal{H} 0 t / \hbar} \widehat{y}(t) e^{i \mathcal{H}_{0} t / \hbar} \quad \Rightarrow \quad i \hbar \frac{\partial}{\partial t} \delta \widehat{\rho}=-\left[\delta \widehat{\rho}, \mathcal{H}_{0}\right]+e^{-i \mathcal{H}_{0} t / \hbar}\left\{i \hbar \frac{\partial \widehat{y}(t)}{\partial t}\right\} e^{i \mathcal{H}_{0} t / \hbar}
\end{align*}
$$

Comparing Eqs. (3.197) and (3.198) and using (3.195) we arrive at the equation for $\widehat{y}$,
$$
\begin{align*}
i \hbar \frac{\partial \widehat{y}(t)}{\partial t}=-\left[\widehat{\rho}_{0}, \mathcal{H}_{i n t}^{\prime}(t)\right] \quad \text { with } \quad \mathcal{H}_{i n t}^{\prime}(t)=e^{i \mathcal{H}_{0} t / \hbar} \mathcal{H}^{\prime} e^{-i \mathcal{H}_{0} t / \hbar}
\end{align*}
$$
which is formally solved by
$$
\begin{align*}
\widehat{y}(t)=\frac{i}{\hbar} \int_{-\infty}^{t} d t^{\prime}\left[\widehat{\rho}_{0}, \mathcal{H}_{i n t}^{\prime}\left(t^{\prime}\right)\right]
\end{align*}
$$

We now look at the mean value of the observable $\widehat{B}(\boldsymbol{r})$. For simplicity we assume that the expectation value of $\widehat{B}$ vanishes, if there is no perturbation, i.e. $\langle\widehat{B}\rangle_{0}=\operatorname{tr}\left\{\widehat{\rho}_{0} \widehat{B}\right\}=0$. We determine
$$
\begin{align*}
\begin{aligned}
\langle\widehat{B}(\boldsymbol{r})\rangle(t) & =\operatorname{tr}\{\delta \widehat{\rho}(\boldsymbol{r}, t) \widehat{B}(\boldsymbol{r})\} \\
& =\operatorname{tr}\left\{\frac{i}{\hbar} e^{-i \mathcal{H}_{0} t / \hbar} \int_{-\infty}^{t} d t^{\prime}\left[\widehat{\rho}_{0}, \mathcal{H}_{i n t}^{\prime}\left(t^{\prime}\right)\right] e^{i \mathcal{H}} t / \hbar \widehat{B}(\boldsymbol{r})\right\}
\end{aligned}
\end{align*}
$$

By means of cyclic permutation of the operators in $\{\ldots\}$, which does not affect the trace, we arrive at the form
$$
\begin{align*}
\begin{aligned}
\langle\widehat{B}(\boldsymbol{r})\rangle(t) & =-\frac{i}{\hbar} \int_{-\infty}^{t} d t^{\prime} \int d^{3} r^{\prime} \operatorname{tr}\left\{\widehat{\rho}_{0}\left[\widehat{B}_{i n t}(\boldsymbol{r}, t), \widehat{A}_{i n t}\left(\boldsymbol{r}^{\prime}, t^{\prime}\right)\right]\right\} \phi\left(\boldsymbol{r}^{\prime}, t^{\prime}\right) e^{\eta t^{\prime}} \\
& =\int d t^{\prime} \int d^{3} r^{\prime} \chi_{B A}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}, t-t^{\prime}\right) \phi\left(\boldsymbol{r}^{\prime}, t^{\prime}\right)
\end{aligned}
\end{align*}
$$
which defines the response function $\chi_{B A}$. Notably, it is entirely determined by the properties of the unperturbed system.

**Kubo-Formula - Recipe for the linear response function:** We arrive at the following recipe to obtain a general linear response function: We denote the Hamiltonian of the (unperturbed) system as $\mathcal{H}_{0}$. Then the linear response function of the pair of field operators $\widehat{A}(\boldsymbol{r}), \widehat{B}(\boldsymbol{r})$ (they are often in practice conjugate operators, $\widehat{A}=\widehat{B}^{\dagger}$ ) is given by
$$
\begin{align*}
\chi_{B A}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}, t-t^{\prime}\right)=-\frac{i}{\hbar} \Theta\left(t-t^{\prime}\right)\left\langle\left[\widehat{B}_{H}(\boldsymbol{r}, t), \widehat{A}_{H}\left(\boldsymbol{r}^{\prime}, t^{\prime}\right)\right]\right\rangle_{\mathcal{H}}
\end{align*}
$$
where $\langle\ldots\rangle_{\mathcal{H}_{0}}$ is the thermal mean value with respect to the Hamiltonian $\mathcal{H}_{0}$,
$$
\begin{align*}
\langle\widehat{C}\rangle_{\mathcal{H}_{0}}=\frac{\operatorname{tr}\left\{\widehat{C} e^{-\beta \mathcal{H}_{0}}\right\}}{\operatorname{tr}\left\{e^{-\beta \mathcal{H}_{0}}\right\}}=\frac{\operatorname{tr}\left\{\widehat{C} e^{-\beta \mathcal{H}_{0}}\right\}}{Z},
\end{align*}
$$
$\widehat{A}_{H}(t)=e^{i \mathcal{H}}{ }_{0} t / \hbar \widehat{A} e^{-i \mathcal{H}_{0} t / \hbar}$ is the Heisenberg representation of the operator $\widehat{A}$ (analogous for $\widehat{B}$ ). Note that the temporal step function $\Theta\left(t-t^{\prime}\right)$ ensures the causality, i.e. there is no response for the system before there is a perturbation. The form (3.203) is often called Kubo formula or retarded Green's function.

### 3.4.2 Information in the Response Function

The information stored in the response function can be most easily visualised by assuming that we know the complete set of stationary states of the system Hamiltonian $\mathcal{H}_{0}: \mathcal{H}_{0}|n\rangle=\epsilon_{n}|n\rangle$. For simplicity we will from now on assume that $\widehat{A}=\widehat{B}^{\dagger}$ which is the case in many practical examples, and will simplify our notation. We can then rewrite the response function $\chi$ as
$$
\begin{align*}
\begin{aligned}
\chi\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}, t-t^{\prime}\right)=-\frac{i}{\hbar} \Theta\left(t-t^{\prime}\right) \sum_{n} \frac{e^{-\beta \epsilon_{n}}}{Z}\{ & \langle n| e^{i \mathcal{H} 0 t / \hbar} \widehat{B}(\boldsymbol{r}) e^{-i \mathcal{H} \mathcal{H}_{0} t / \hbar} e^{i \mathcal{H} t_{0} t^{\prime} / \hbar} \widehat{B}\left(\boldsymbol{r}^{\prime}\right)^{\dagger} e^{-i \mathcal{H}_{0} t^{\prime} / \hbar}|n\rangle \\
& \left.-\langle n| e^{i \mathcal{H} t_{0} t^{\prime} / \hbar} \widehat{B}\left(\boldsymbol{r}^{\prime}\right)^{\dagger} e^{-i \mathcal{H}_{0} t^{\prime} / \hbar} e^{i \mathcal{H}_{0} t / \hbar} \widehat{B}(\boldsymbol{r}) e^{-i \mathcal{H}_{0} t / \hbar}|n\rangle\right\} \\
=-\frac{i}{\hbar} \Theta\left(t-t^{\prime}\right) \sum_{n, n^{\prime}} \frac{e^{-\beta \epsilon_{n}}}{Z}\{ & \langle n| \widehat{B}(\boldsymbol{r})\left|n^{\prime}\right\rangle\left\langle n^{\prime}\right| \widehat{B}\left(\boldsymbol{r}^{\prime}\right)^{\dagger}|n\rangle e^{i\left(\epsilon_{n}-\epsilon_{n^{\prime}}\right)\left(t-t^{\prime}\right) / \hbar} \\
& \left.-\langle n| \widehat{B}\left(\boldsymbol{r}^{\prime}\right)^{\dagger}\left|n^{\prime}\right\rangle\left\langle n^{\prime}\right| \widehat{B}(\boldsymbol{r})|n\rangle e^{i\left(\epsilon_{n^{\prime}}-\epsilon_{n}\right)\left(t-t^{\prime}\right) / \hbar}\right\},
\end{aligned}
\end{align*}
$$
where we inserted $1=\sum_{n^{\prime}}\left|n^{\prime}\right\rangle\left\langle n^{\prime}\right|$. It is convenient to work in $\boldsymbol{q}$ - and $\omega$-space, reached via Fourier transformation,
$$
\begin{align*}
\begin{aligned}
\chi(\boldsymbol{q}, \omega) & =\int d^{3} \tilde{r} \int_{-\infty}^{+\infty} d \tilde{t} \chi(\tilde{\boldsymbol{r}}, \tilde{t}) e^{i \omega \tilde{t}-i \boldsymbol{q} \cdot \tilde{\boldsymbol{r}}} \\
& \left.=-\frac{i}{\hbar \Omega} \sum_{n, n^{\prime}} \frac{e^{-\beta \epsilon_{n}}}{Z}\left|\langle n| \widehat{B}_{\boldsymbol{q}}\right| n^{\prime}\right\rangle\left.\right|^{2} \int_{0}^{\infty} d \tilde{t}\left\{e^{i\left(\epsilon_{n}-\epsilon_{n^{\prime}}+\hbar \omega\right) \tilde{t} / \hbar}-e^{i\left(\epsilon_{n^{\prime}}-\epsilon_{n}+\hbar \omega\right) \tilde{t} / \hbar}\right\} e^{-\eta \tilde{t}}
\end{aligned}
\end{align*}
$$
where we introduce
$$
\begin{align*}
\widehat{B}_{\boldsymbol{q}}=\int d^{3} \tilde{r} \widehat{B}(\tilde{\boldsymbol{r}}) e^{-i \boldsymbol{q} \cdot \tilde{\boldsymbol{r}}} \quad \text { and } \quad \widehat{B}_{\boldsymbol{q}}^{\dagger}=\int d^{3} \tilde{r} \widehat{B}(\tilde{\boldsymbol{r}})^{\dagger} e^{i \boldsymbol{q} \cdot \tilde{\boldsymbol{r}}} .
\end{align*}
$$

After the integration over time in (3.206) we obtain
$$
\begin{align*}
\begin{aligned}
\chi(\boldsymbol{q}, \omega) & \left.=\frac{1}{\Omega} \sum_{n, n^{\prime}} \frac{e^{-\beta \epsilon_{n}}}{Z}\left|\langle n| \widehat{B}_{\boldsymbol{q}}\right| n^{\prime}\right\rangle\left.\right|^{2}\left\{\frac{1}{\hbar \omega-\epsilon_{n^{\prime}}+\epsilon_{n}+i \hbar \eta}-\frac{1}{\hbar \omega-\epsilon_{n}+\epsilon_{n^{\prime}}+i \hbar \eta}\right\} \\
& =\int_{0}^{\infty} d \omega^{\prime} S\left(\boldsymbol{q}, \omega^{\prime}\right)\left\{\frac{1}{\omega-\omega^{\prime}+i \eta}-\frac{1}{\omega+\omega^{\prime}+i \eta}\right\} .
\end{aligned}
\end{align*}
$$

In the last line we write the response function in a spectral form with $S(\boldsymbol{q}, \omega)$ as the spectral function,
$$
\begin{align*}
\left.S(\boldsymbol{q}, \omega)=\frac{1}{\Omega} \sum_{n, n^{\prime}} \frac{e^{-\beta \epsilon_{n}}}{Z}\left|\langle n| \widehat{B}_{\boldsymbol{q}}\right| n^{\prime}\right\rangle\left.\right|^{2} \delta\left(\hbar \omega-\epsilon_{n^{\prime}}+\epsilon_{n}\right)
\end{align*}
$$

We call $S(\boldsymbol{q}, \omega)$ also dynamical structure factor which comprises information about the excitation spectrum associated with $\widehat{B}$. It represents a correlation function,
$$
\begin{align*}
S\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}, t-t^{\prime}\right)=\frac{1}{h}\left\langle\widehat{B}_{H}(\boldsymbol{r}, t) \widehat{B}_{H}\left(\boldsymbol{r}^{\prime}, t^{\prime}\right)^{\dagger}\right\rangle_{\mathcal{H}_{0}},
\end{align*}
$$
and contains the spectrum of the excitations which can be coupled to by the external perturbation.

**Lindhard function**

We show now how the Lindhard function is derived, where we restrict to independent electrons. Thus, we choose, $\widehat{B}(\boldsymbol{r})=\sum_{s} \widehat{\Psi}_{s}(\boldsymbol{r})^{\dagger} \widehat{\Psi}_{s}(\boldsymbol{r})$ which leads to
$$
\begin{align*}
\widehat{B}_{\boldsymbol{q}}=\widehat{\rho}_{\boldsymbol{q}}=\sum_{\boldsymbol{k}, s} \widehat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k}+\boldsymbol{q} s}=\sum_{\boldsymbol{k}, s} \widehat{\rho}_{\boldsymbol{k}, \boldsymbol{q}, s} .
\end{align*}
$$

Now consider the matrix elements in
$$
\begin{align*}
\sum_{n, n^{\prime}} \frac{e^{-\beta \epsilon_{n}}}{Z}\langle n| \widehat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k}+\boldsymbol{q} s}\left|n^{\prime}\right\rangle\left\langle n^{\prime}\right| \widehat{c}_{\boldsymbol{k}^{\prime}+\boldsymbol{q} s}^{\dagger} \widehat{c}_{\boldsymbol{k}^{\prime} s}|n\rangle=n_{0 \boldsymbol{k}}\left(1-n_{0 \boldsymbol{k}+\boldsymbol{q}}\right) \delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}
\end{align*}
$$
for which
$$
\begin{align*}
\epsilon_{n^{\prime}}=\epsilon_{n}-\epsilon_{\boldsymbol{k}}+\epsilon_{\boldsymbol{k}+\boldsymbol{q}} \quad \Rightarrow \quad \epsilon_{n^{\prime}}-\epsilon_{n}=\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}} .
\end{align*}
$$

The matrix element probes probability of whether the electron state with momentum $\boldsymbol{k}$ is occupied, by $n_{\boldsymbol{k}}$, and the state $\boldsymbol{k}+\boldsymbol{q}$, by $1-n_{\boldsymbol{k}+\boldsymbol{q}}$, is empty. Thus we obtain,
$$
\begin{align*}
\chi(\boldsymbol{q}, \omega)=\frac{1}{\Omega} \sum_{\boldsymbol{k}} n_{0 \boldsymbol{k}}\left(1-n_{0 \boldsymbol{k}+\boldsymbol{q}}\right)\left\{\frac{1}{\hbar \omega-\epsilon_{\boldsymbol{k}+\boldsymbol{q}}+\epsilon_{\boldsymbol{k}}+i \hbar \eta}-\frac{1}{\hbar \omega+\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}+i \hbar \eta}\right\} .
\end{align*}
$$

The second term can be rewritten by substitution $\boldsymbol{k} \rightarrow \boldsymbol{k}-\boldsymbol{q}$ and in a next step switch the sign of $\boldsymbol{q}$ which leaves the result invariant, as our system has inversion symmetry. This leas then to
$$
\begin{align*}
\chi(\boldsymbol{q}, \omega)=\frac{1}{\Omega} \sum_{\boldsymbol{k}} \frac{n_{0 \boldsymbol{k}}\left(1-n_{0 \boldsymbol{k}+\boldsymbol{q}}\right)-n_{0 \boldsymbol{k}+\boldsymbol{q}}\left(1-n_{0 \boldsymbol{k}}\right)}{\hbar \omega-\epsilon_{\boldsymbol{k}+\boldsymbol{q}}+\epsilon_{\boldsymbol{k}}+i \hbar \eta}=\frac{1}{\Omega} \sum_{\boldsymbol{k}} \frac{n_{0 \boldsymbol{k}+\boldsymbol{q}}-n_{0 \boldsymbol{k}}}{\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}-\hbar \omega-i \hbar \eta},
\end{align*}
$$
which is the Lindhard function up to a factor $1 / \Omega$. Note that the response functions we formulated by the Kubo formula are extensive, while the definition we have used for the Lindhard function previously.

### 3.4.3 Analytical Properties

The representation of the linear response function in (3.208) shows that $\chi_{B A}(\boldsymbol{q}, \omega)$ has poles only in the lower half of the complex $\omega$-plane. This property reflects causality ( $\chi(\boldsymbol{r}, t)=0$ for $t<0)$. We separate now $\chi=\chi^{\prime}+i \chi^{\prime \prime}$ in real and imaginary part and use the relation
$$
\begin{align*}
\lim _{\eta \rightarrow 0_{+}} \frac{1}{x+i \eta}=\mathcal{P} \frac{1}{x}-i \pi \delta(x) .
\end{align*}
$$
with $\mathcal{P}$ denoting the principal part. This relation leads to
$$
\begin{align*}
\begin{aligned}
& \chi^{\prime}(\boldsymbol{q}, \omega)=\int_{0}^{\infty} d \omega^{\prime} S\left(\boldsymbol{q}, \omega^{\prime}\right)\left\{\mathcal{P} \frac{1}{\omega-\omega^{\prime}}-\mathcal{P} \frac{1}{\omega+\omega^{\prime}}\right\}, \\
& \chi^{\prime \prime}(\boldsymbol{q}, \omega)=-\pi\{S(\boldsymbol{q}, \omega)-S(\boldsymbol{q},-\omega)\} .
\end{aligned}
\end{align*}
$$

Therefore the imaginary part of $\chi$ corresponds to the excitation spectrum of the system. Finally, it has to be noted that $\chi(\boldsymbol{q}, \omega)$ follows the Kramers-Kronig relations:
$$
\begin{align*}
\begin{aligned}
& \chi^{\prime}(\boldsymbol{q}, \omega)=-\frac{1}{\pi} \int_{-\infty}^{+\infty} d \omega^{\prime} \mathcal{P} \frac{\chi^{\prime \prime}\left(\boldsymbol{q}, \omega^{\prime}\right)}{\omega-\omega^{\prime}} \\
& \chi^{\prime \prime}(\boldsymbol{q}, \omega)=\frac{1}{\pi} \int_{-\infty}^{+\infty} d \omega^{\prime} \mathcal{P} \frac{\chi^{\prime}\left(\boldsymbol{q}, \omega^{\prime}\right)}{\omega-\omega^{\prime}} .
\end{aligned}
\end{align*}
$$

Note to the Kramers-Kronig relation: This relation results from the analytic structure of $\chi$. Consider a contour in the upper half-plane of $\omega^{\prime}$ where $\chi\left(\boldsymbol{q}, \omega^{\prime}\right)$ has no poles due to causality.
$$
\begin{align*}
\begin{aligned}
& \oint_{C} d \omega^{\prime} \frac{\chi\left(\boldsymbol{q}, \omega^{\prime}\right)}{\omega-\omega^{\prime}-i \eta^{\prime}}=0 \\
& \quad \Rightarrow \quad \int_{-\infty}^{+\infty} d \omega^{\prime} \chi\left(\boldsymbol{q}, \omega^{\prime}\right) \mathcal{P} \frac{1}{\omega-\omega^{\prime}}+i \pi \chi(\boldsymbol{q}, \omega)=0 .
\end{aligned}
\end{align*}
$$
Separating this equation into real and imaginary part yields the Kramers-Kronig relation.

![Attachments/Notes/Solid-State Theory/IMG-0126164738482.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164738482.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=87&rect=213,172,390,293|•]]

### 3.4.4 Fluctuation-Dissipation Theorem

First we consider the aspect of dissipation incorporated in the response function. For this purpose we ignore for simplicity the spatial dependence and consider a perturbative part of the Hamiltonian which only depends on time.
$$
\begin{align*}
\mathcal{H}^{\prime}=\int d^{3} r \widehat{B}(\boldsymbol{r}) \phi(\boldsymbol{r}, t) \quad \Rightarrow \quad\langle\widehat{B}(\boldsymbol{r})\rangle(t)=\int_{0}^{\infty} d t^{\prime} \int d^{3} r^{\prime} \chi\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}, t-t^{\prime}\right) \phi\left(\boldsymbol{r}, t^{\prime}\right)
\end{align*}
$$
with $\widehat{B}=\widehat{B}^{\dagger}$. We assume now a monochromatic external field,
$$
\begin{align*}
\begin{aligned}
\phi(\boldsymbol{r}, t)=\frac{1}{2}\left(\phi_{0}(\boldsymbol{r}) e^{-i \omega t}\right. & \left.+\phi_{0}(\boldsymbol{r})^{*} e^{i \omega t}\right) \\
\Rightarrow \quad\langle\widehat{B}(\boldsymbol{r})\rangle(t) & =\int_{0}^{\infty} d t^{\prime} \int d^{3} r^{\prime} \chi\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}, t-t^{\prime}\right) \frac{1}{2}\left(\phi_{0}\left(\boldsymbol{r}^{\prime}\right) e^{-i \omega t^{\prime}}+\phi_{0}\left(\boldsymbol{r}^{\prime}\right)^{*} e^{i \omega t^{\prime}}\right) \\
& =\frac{1}{2} \int d^{3} r^{\prime}\left\{\chi\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}, \omega\right)^{*} \phi_{0} e^{-i \omega t}+\chi\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}, \omega\right) \phi_{0}^{*} e^{i \omega t}\right\} .
\end{aligned}
\end{align*}
$$


The energy dissipation rate is determined by
$$
\begin{align*}
\begin{aligned}
\frac{d E}{d t}= & \left\langle\frac{\partial}{\partial t} \mathcal{H}\right\rangle=\int d^{r}\langle\widehat{B}(\boldsymbol{r})\rangle(t) \frac{\partial \phi(\boldsymbol{r}, t)}{\partial t} \\
= & \frac{1}{2} \int d^{3} r d^{3} r^{\prime} \frac{\partial \phi(\boldsymbol{r}, t)}{\partial t}\left\{\chi\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}, \omega\right)^{*} \phi_{0} e^{-i \omega t}+\chi\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}, \omega\right) \phi_{0}^{*} e^{i \omega t}\right\} \\
= & \frac{1}{2} \int d^{3} r d^{3} r^{\prime} i \omega\left\{\phi_{0}(\boldsymbol{r}) e^{-i \omega t}+\phi_{0}(\boldsymbol{r})^{*} e^{i \omega t}\right\}\left\{\chi\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}, \omega\right)^{*} \phi_{0} e^{-i \omega t}+\chi\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}, \omega\right) \phi_{0}^{*} e^{i \omega t}\right\} \\
& \Rightarrow \frac{\overline{d E}}{d t}=\frac{\omega}{2} \iint d^{3} r d^{3} r^{\prime} \phi_{0}(\boldsymbol{r})^{*} \chi^{\prime \prime}(\boldsymbol{r}-\boldsymbol{r}, \omega) \phi_{0}\left(\boldsymbol{r}^{\prime}\right)=\sum_{\boldsymbol{q}} \frac{\omega}{2} \chi^{\prime \prime}(\boldsymbol{q}, \omega)|\phi(\boldsymbol{q}, \omega)|^{2}<0
\end{aligned}
\end{align*}
$$
where for the time averaged rate we drop oscillating terms with the time dependence $e^{ \pm i 2 \omega t}.$
The result before used the following: The time-derivative of the Hamiltonian is given by
$$
\begin{align*}
\frac{d \mathcal{H}}{d t}=\frac{\partial \mathcal{H}}{\partial t}+\frac{i}{\hbar}[\mathcal{H}, \mathcal{H}]=\frac{\partial \mathcal{H}}{\partial t}
\end{align*}
$$
for a quantum mechanical problem. The analogous relation is obtained for classical systems.

The imaginary part of the dynamical susceptibility describes the dissipation of the system and gives information about the spectrum and the density of excitations for given $\boldsymbol{q}$ and $\omega$. From the definition of the dynamical structure factor it follows that
$$
\begin{align*}
S(\boldsymbol{q},-\omega)=e^{-\beta \hbar \omega} S(\boldsymbol{q}, \omega)
\end{align*}
$$
because
$$
\begin{align*}
\begin{aligned}
S(\boldsymbol{q},-\omega) & \left.=\frac{1}{\Omega} \sum_{n, n^{\prime}} \frac{e^{-\beta \epsilon_{n}}}{Z}\left|\langle n| \widehat{B}_{\boldsymbol{q}}\right| n^{\prime}\right\rangle\left.\right|^{2} \delta\left(-\hbar \omega-\epsilon_{n^{\prime}}+\epsilon_{n}\right) \\
& \left.=\frac{1}{\Omega} \sum_{n, n^{\prime}} \frac{e^{-\beta \epsilon_{n^{\prime}}-\beta \hbar \omega}}{Z}\left|\left\langle n^{\prime}\right| \widehat{B}_{-\boldsymbol{q}}\right| n\right\rangle\left.\right|^{2} \delta\left(\hbar \omega-\epsilon_{n}+\epsilon_{n^{\prime}}\right)=e^{-\beta \hbar \omega} S(\boldsymbol{q}, \omega) .
\end{aligned}
\end{align*}
$$

This is a statement of detailed balance. The transition matrix element between two states is the same whether the energy is absorbed or emitted. For emitting, however, the thermal occupation of the initial state has to be taken into account.
Using (3.217) we can derive the following relation
$$
\begin{align*}
\chi^{\prime \prime}(\boldsymbol{q}, \omega)=-\pi[S(\boldsymbol{q}, \omega)-S(\boldsymbol{q},-\omega)]=-\pi\left[1-e^{-\beta \hbar \omega}\right] S(\boldsymbol{q}, \omega)
\end{align*}
$$
which is known as the fluctuation-dissipation theorem. Let us consider here some consequences and find the relation to our earlier simplified formulations.
$$
\begin{align*}
\begin{aligned}
\int_{-\infty}^{+\infty} d \omega S(\boldsymbol{q}, \omega) & \left.=\int_{-\infty}^{+\infty} d \omega \frac{1}{\Omega} \sum_{n, n^{\prime}} \frac{e^{-\beta \epsilon_{n}}}{Z}\left|\langle n| \widehat{B}_{\boldsymbol{q}}\right| n^{\prime}\right\rangle\left.\right|^{2} \delta\left(\hbar \omega-\epsilon_{n^{\prime}}+\epsilon_{n}\right) \\
& =\frac{1}{\hbar \Omega} \sum_{n, n^{\prime}} \frac{e^{-\beta \epsilon_{n}}}{Z}\langle n| \widehat{B}_{\boldsymbol{q}}\left|n^{\prime}\right\rangle\left\langle n^{\prime}\right| \widehat{B}_{\boldsymbol{q}}^{\dagger}|n\rangle \\
& =\frac{1}{\hbar}\left\langle\widehat{B}_{\boldsymbol{q}}(0) \widehat{B}_{\boldsymbol{q}}^{\dagger}(0)\right\rangle=-\frac{1}{\pi} \int_{-\infty}^{+\infty} d \omega \frac{\chi^{\prime \prime}(\boldsymbol{q}, \omega)}{1-e^{-\beta \hbar \omega}}
\end{aligned}
\end{align*}
$$

This corresponds to the equal-time correlation function (assuming $\langle\widehat{B}\rangle=0$ ).

Now we turn to the classical case of the fluctuation-dissipation theorem and consider the the limit $k_{B} T \gg \hbar \omega$. Then we may approximate this equation by
$$
\begin{align*}
\langle |  \widehat{B}_{\boldsymbol{q}}|^{2}\rangle \approx-\frac{k_{B} T}{\pi} \int_{-\infty}^{+\infty} d \omega \frac{\chi^{\prime \prime}(\boldsymbol{q}, \omega)}{\omega}=-k_{B} T \chi^{\prime}(\boldsymbol{q}, 0)=-k_{B} T \chi(\boldsymbol{q}, 0)
\end{align*}
$$

This is valid, if $\chi^{\prime \prime}(\boldsymbol{q}, \omega)$ essentially vanishes for frequencies comparable and larger than the temperature. 
**Static response function**: We consider a system with
$$
\begin{align*}
\mathcal{H}=\mathcal{H}_{0}+\mathcal{H}^{\prime}=\mathcal{H}_{0}+\int d^{3} r h(\boldsymbol{r}) \widehat{B}(\boldsymbol{r})=\mathcal{H}_{0}+\frac{1}{V} \sum_{\boldsymbol{q}} h_{-q} \widehat{B}_{\boldsymbol{q}}=\mathcal{H}_{0}+\sum_{\boldsymbol{q}} H_{-\boldsymbol{q}} \widehat{B}_{\boldsymbol{q}}
\end{align*}
$$

where we assume for the following $\widehat{B}_{-q}=\widehat{B}_{q}^{\dagger}$. The mean value

$$
\begin{align*}
\left\langle\widehat{B}_{\boldsymbol{q}}\right\rangle=\frac{\partial F}{\partial H_{-\boldsymbol{q}}}=-\frac{\partial}{\partial H_{-\boldsymbol{q}}} k_{B} T \ln Z=\operatorname{tr}\left(\widehat{\rho} \widehat{B}_{\boldsymbol{q}}\right)
\end{align*}
$$
with $\widehat{\rho}=\exp [\beta(F-\mathcal{H})]$ and $\left\langle\widehat{B}_{\boldsymbol{q}}\right\rangle=0$ for $H_{\boldsymbol{q}}=0$. The static response function is obtain from
$$
\begin{align*}
\chi(\boldsymbol{q})=\left.\frac{\partial\left\langle\widehat{B}_{\boldsymbol{q}}\right\rangle}{\partial H_{\boldsymbol{q}}}\right|_{H_{\boldsymbol{q}}=0}=\left.\operatorname{tr}\left\{\widehat{B}_{\boldsymbol{q}} \frac{\partial}{\partial H_{\boldsymbol{q}}} e^{\beta(F-\mathcal{H})}\right\}\right|_{H_{\boldsymbol{q}}=0}=\left.\operatorname{tr}\left\{\widehat{B}_{\boldsymbol{q}} \beta\left(\left\langle\widehat{B}_{-\boldsymbol{q}}\right\rangle-\widehat{B}_{-\boldsymbol{q}}\right) \widehat{\rho}\right\}\right|_{H_{\boldsymbol{q}}=0}=-\beta\left\langle\widehat{B}_{\boldsymbol{q}} \widehat{B}_{\boldsymbol{q}}^{\dagger}\right\rangle
\end{align*}
$$
which is the classical form of the fluctuation dissipation theorem for spatially modulated perturbative fields.
For a uniform field we find
$$
\begin{align*}
\int d^{3} r d^{3} r^{\prime}\left\langle\widehat{B}(\boldsymbol{r}, t=0) \widehat{B}^{\dagger}\left(\boldsymbol{r}^{\prime}, t=0\right)\right\rangle=\left\langle\widehat{B}_{\boldsymbol{q}=0} \widehat{B}_{\boldsymbol{q}}^{\dagger}\right\rangle=-k_{B} T \chi(\boldsymbol{q}=0)=-k_{B} T \chi
\end{align*}
$$
i.e. the static uniform susceptibility is related to the integration of the equal-time correlation function as we had used previously several times. Note the minus sign results from the sign of coupling to the external field.

---
# 4 Itinerant Electrons in a Magnetic Field
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=90&selection=2,0,3,4|•]]

Electrons couple through their orbital motion and their spin to external magnetic fields. In this chapter we focus on the case of orbital coupling which can be also used as a diagnostic tool to observe the presence of a Fermi surface in a metallic system and to map out the Fermi surface topology. A further most intriguing feature of electrons moving in a magnetic field is the Quantum Hall effect of a two-dimensional electronic system. In both case the Landau levels with play an important role and will be introduced here in a first step.

## 4.1 The de Haas-van Alphen Effect
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=90&selection=16,0,18,28|•]]

The ground state of a metal is characterised by the existence of a discontinuity of the occupation number in momentum space - the Fermi surface. The de Haas-van Alphen experiment is one of the best methods to verify its existence and to determine the shape of a Fermi surface. It is based on the behaviour of electrons at low temperatures in a strong magnetic field.

### 4.1.1 Landau Levels

Consider a free electron gas subject to a uniform magnetic field $\boldsymbol{B}=(0,0, B)$. The one-particle Hamiltonian for an electron is given by
$$
\begin{align*}
\mathcal{H}=\frac{1}{2 m}\left(-i \hbar \boldsymbol{\nabla}+\frac{e}{c} \boldsymbol{A}\right)^{2}-\frac{g \mu_{B}}{\hbar} \widehat{S}_{z} B .
\end{align*}
$$
where $e$ is the absolute value of the electron charge. We fix the gauge freedom of the vector potential $\boldsymbol{A}$ by working in the Landau gauge, $\boldsymbol{A}=(-B y, 0,0)$, satisfying $\boldsymbol{B}=\boldsymbol{\nabla} \times \boldsymbol{A}$. Hence the Hamiltonian (4.1) simplifies to
$$
\begin{align*}
\mathcal{H}=\frac{1}{2 m}\left[-\hbar^{2} \frac{\partial^{2}}{\partial y^{2}}+\left(-i \hbar \frac{\partial}{\partial x}-\frac{e}{c} B y\right)^{2}-\hbar^{2} \frac{\partial^{2}}{\partial z^{2}}\right]-\frac{g \mu_{B}}{\hbar} \widehat{S}_{z} B .
\end{align*}
$$

In this gauge, the vector potential acts like a confining harmonic potential along the $y$-axis. As translational invariance in the $x$ - and $z$-directions is preserved, the eigenfunctions separate in the three spacial components and take the form
$$
\begin{align*}
\psi(\boldsymbol{r})=e^{i k_{z} z} e^{i k_{x} x} \phi(y) \xi_{s}
\end{align*}
$$
where $\xi_{s}$ is the spin wave function. The states $\phi(y)$ are found to be the eigenstates of the harmonic oscillator problem, so that we have
$$
\begin{align*}
\phi_{n, k_{x}}(y)=\frac{1}{\sqrt{2^{n} n!2 \pi \ell^{2}}} H_{n}\left[\left(y-y_{0}\right) / \ell\right] e^{-\left(y-y_{0}\right)^{2} / 2 \ell^{2}}
\end{align*}
$$
where $H_{n}(y)$ are the Hermite polynomials and $\ell$ denotes the magnetic length defined via $\ell^{2}=$ $\hbar c /|e B|$. The wave vector $k_{x}$ determines the position of the centre $y_{0}=k_{x} \ell^{2}$ of the harmonic oscillator. The eigenenergies of the Hamiltonian (4.2) read
$$
\begin{align*}
E_{n, k_{z}, s}=\frac{\hbar^{2} k_{z}^{2}}{2 m}+\hbar \omega_{c}\left(n+\frac{1}{2}\right)-\frac{g \mu_{B}}{\hbar} B s
\end{align*}
$$
where $s= \pm \hbar / 2, n \in \mathbb{N}_{0}$ and we have introduced the cyclotron frequency $\omega_{c}=|e B| / m c$. Note that the energy (4.5) does not depend on $k_{x}$. The apparent differences in the spatial dependence of the wave functions for the $x$ - and $y$-directions are merely a consequence of the chosen gauge.
Like the vector potential, the wave function is a gauge dependent quantity. To see this, observe that under a gauge transformation
$$
\begin{align*}
\boldsymbol{A}(\boldsymbol{r}, t) \rightarrow \boldsymbol{A}^{\prime}(\boldsymbol{r}, t)=\boldsymbol{A}(\boldsymbol{r}, t)+\boldsymbol{\nabla} \chi(\boldsymbol{r}, t)
\end{align*}
$$
the wave function undergoes a position dependent phase shift
$$
\begin{align*}
\psi(\boldsymbol{r}, t) \rightarrow \psi^{\prime}(\boldsymbol{r}, t)=\psi(\boldsymbol{r}, t) e^{-i e \chi(\boldsymbol{r}, t) / \hbar c}=\psi(\boldsymbol{r}, t) e^{-i 2 \pi \chi / \Phi_{0}}.
\end{align*}
$$

The fact that the energy does not depend on $k_{x}$ in the chosen gauge indicates a huge degeneracy of the eigenstates. To obtain the number of degenerate states we concentrate for simplicity on $k_{z}=0$ and neglect the electron spin. We take the electrons to be confined to a cube of volume $L^{3}$ with periodic boundary conditions, i.e., $k_{x}=2 \pi n_{x} / L$ with $n_{x} \in \mathbb{Z}$. As the wave function $\phi_{n, k_{x}}(y)$ is centred around $y_{0}=k_{x} \ell^{2}$, the condition
$$
\begin{align*}
0<y_{0}=k_{x} \ell^{2}<L
\end{align*}
$$
fixes the maximal number $N_{\text {deg }}$ of degenerate states
$$
\begin{align*}
0<n_{x}<N_{\mathrm{deg}}=\frac{L^{2}}{2 \pi \ell^{2}}=\frac{L^{2} B}{h c / e}=\frac{\Phi}{\Phi_{0}} .
\end{align*}
$$
where $\Phi_{0}=h c / e$ is the magnetic flux quantum (e.g. Aharonov-Bohm interference effect), $\Phi_{0}=4.14 \times 10^{-7}$ Gauss $\mathrm{cm}^{2}$. Thus the degeneracy $N_{\mathrm{deg}}$ corresponds to the number of flux quanta included in the total magnetic flux $\Phi$ threading the system.
The energies correspond to a discrete set of one-dimensional systems, so that the density of states is determined by the structure of the one-dimensional dispersion (with square root singularities at the band edges) along the $z$-direction:
$$
\begin{align*}
\begin{aligned}
N_{0}(E, n, s) & =\frac{N_{\operatorname{deg}}}{\Omega} \sum_{k_{z}} \delta\left(E-E_{n, k_{z}, s}\right) \\
& =\frac{1}{2 \pi \ell^{2}} \int \frac{d k_{z}}{2 \pi} \delta(E-\frac{\hbar^{2} k_{z}^{2}}{2 m}-\underbrace{\hbar \omega_{c}\left(n+\frac{1}{2}\right)+\frac{g \mu_{B}}{\hbar} B s}_{\epsilon_{n, s}}) \\
& =\frac{(2 m)^{3 / 2} \omega_{c}}{8 \pi^{2} \hbar^{2}} \frac{1}{\sqrt{E-\epsilon_{n, s}}}=\frac{3}{8} \frac{n}{\epsilon_{F}} \frac{\hbar \omega_{c}}{\sqrt{\epsilon_{F}}} \frac{1}{\sqrt{E-\epsilon_{n, s}}}
\end{aligned}
\end{align*}
$$

The total density of states $N_{0}(E)$ for a given energy $E$ is obtained by summing over $n \in \mathbb{N}_{0}$ and $s= \pm \hbar / 2$. This should be compared to the density of states without the magnetic field,
$$
\begin{align*}
N_{0}(E, B=0)=\frac{1}{\Omega} \sum_{\boldsymbol{k}, s} \delta\left(E-\frac{\hbar^{2} \boldsymbol{k}^{2}}{2 m}\right)=\frac{(2 m)^{3 / 2}}{2 \pi^{2} \hbar^{3}} \sqrt{E} .
\end{align*}
$$

The density of states for finite applied field is shown for one spin-component:

![Attachments/Notes/Solid-State Theory/IMG-0126164738660.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164738660.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=92&rect=170,585,429,755|•]]

### 4.1.2 Oscillatory Behaviour of the Magnetisation

In the presence of a magnetic field, the smooth density of states of the three-dimensional metal is replaced by a discontinuous form dominated by square root singularities. The position of the singularities depends on the strength of the magnetic field. In order to understand the resulting effect on the magnetisation, we consider the free energy,
$$
\begin{align*}
F(N, T)=N \mu-\Omega(T, \mu, B)=N \mu-k_{B} T \sum_{k_{z}, k_{y}, n, s} \ln \left(1+e^{-\left(E_{n, k_{z}, s}-\mu\right) / k_{B} T}\right)
\end{align*}
$$
with $\Omega(T, \mu, B)$ denoting the grand canonical potential and use the general thermodynamic relation $M=-\partial F(N, T) / \partial B$. For the details of the somewhat tedious calculation, we refer to J. M. Ziman, Principles of the Theory of Solids and merely present the result
$$
\begin{align*}
M=\chi_{P} B\left[1+\frac{\chi_{L}}{\chi_{P}}+\frac{\pi k_{B} T}{\mu_{B} B} \sqrt{\frac{\epsilon_{F}}{\mu_{B} B}} \sum_{\nu=1}^{\infty} \frac{1}{\sqrt{\nu}} \frac{\sin \left(\frac{\pi}{4}-\frac{\pi \nu_{F}}{\mu_{B} B}\right)}{\sinh \left(\frac{\pi^{2} \nu k_{B} T}{\mu_{B} B}\right)}\right] .
\end{align*}
$$

Here $\chi_{P}$ is the Pauli-spin susceptibility originating from the Zeeman-term and the second term $\chi_{L}=-\chi_{P} / 3$ is the diamagnetic Landau susceptibility which is due to induced orbital currents (the Landau levels). For sufficiently low temperatures, $k_{B} T<\mu_{B} B \sim \hbar \omega_{c}$, the magnetisation as a function of the applied field exhibits oscillatory behaviour:

![Attachments/Notes/Solid-State Theory/IMG-0126164738848.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164738848.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=93&rect=75,589,509,743|•]]

The dominant contribution comes from the summation with $\nu=1$. The oscillations are a consequence of the singularities in the density of states that influence the magnetic moment upon successively passing through the Fermi energy as the magnetic field is varied. The period in $1 / B$ of the oscillations of the term $\nu=1$ is easily found to be
$$
\begin{align*}
\frac{\pi \epsilon_{F}}{\mu_{B}} \Delta\left(\frac{1}{B}\right)=2 \pi
\end{align*}
$$
or
$$
\begin{align*}
\Delta\left(\frac{1}{B}\right)=\frac{2 \pi e}{\hbar c} \frac{1}{A\left(k_{F}\right)}
\end{align*}
$$

where we used that $\mu_{B}=\hbar e / 2 m c$ and defined the cross sectional area $A\left(k_{F}\right)=\pi k_{F}^{2}$ of the Fermi sphere perpendicular to the magnetic field. Experimental data are often analyzed in terms of the de Haas-van Alphen frequency $F$,
$$
\begin{align*}
F=A\left(k_{F}\right) \frac{\hbar c}{2 \pi e}=\frac{A\left(k_{F}\right) \Phi_{0}}{4 \pi^{2}}
\end{align*}
$$

### 4.1.3 Onsager Equation

The behaviour we have found above for a free electron gas, generalises to systems with arbitrary band structures. In these cases there are usually no exact solutions available. Instead of generalising the above treatment to such band systems, we discuss the behaviour of electrons within the semi-classical approximation, as introduced in Section 1.7, and consider the closed orbits of a wave packet subject to a magnetic field. The semi-classical equations of motion for the centre of mass of the wave packet, Eqs. (1.111) and (1.112), simplify in the absence of an electric field to
$$
\begin{align*}
\begin{aligned}
\dot{\boldsymbol{r}} & =\boldsymbol{v}_{\boldsymbol{k}}=\frac{\partial \epsilon_{\boldsymbol{k}}}{\partial \hbar \boldsymbol{k}} \\
\hbar \dot{\boldsymbol{k}} & =-\frac{e}{c} \boldsymbol{v}_{\boldsymbol{k}} \times \boldsymbol{B}
\end{aligned}
\end{align*}
$$

This defines a closed path in a plane perpendicular to the applied uniform magnetic field. The velocity $\boldsymbol{v}_{\boldsymbol{k}}$ stands perpendicular to lines of equal energy $\epsilon_{\boldsymbol{k}}$. The electron follows in reciprocal space a path along such a line perpendicular to $\boldsymbol{B}$. The motion parallel to the magnetic field is independent with a constant $\boldsymbol{k}_{\|}$. Separating the motion parallel to $\boldsymbol{B}$ the electrons move on a closed path in the perpendicular plane. Hence, we can apply the Bohr-Sommerfeld quantisation scheme yielding quarantined closed paths $P_{n}$ (neglecting any uniform motion along the field direction),
$$
\begin{align*}
\oint_{P_{n}} \boldsymbol{p} \cdot d \boldsymbol{r}=h(n+\gamma)
\end{align*}
$$
with $n$ being an integer and $\gamma$ a system specific shift, irrelevant for the final result and $h=2 \pi \hbar$. The canonical momentum within the semi-classical approach is expressed as
$$
\begin{align*}
\boldsymbol{p}=\hbar \boldsymbol{k}-\frac{e}{c} \boldsymbol{A}=-\frac{e}{c}(\boldsymbol{r} \times \boldsymbol{B}+\boldsymbol{A}),
\end{align*}
$$
where integrated over time. Thus, we find
$$
\begin{align*}
\oint_{P_{n}} \boldsymbol{p} \cdot d \boldsymbol{r}=-\frac{e}{c} \oint_{P_{n}}\{\boldsymbol{r} \times \boldsymbol{B}+\boldsymbol{A}\} \cdot d \boldsymbol{r}=-\frac{e}{c} \Phi_{n}+\underbrace{\frac{e}{c} \boldsymbol{B} \cdot \oint_{P_{n}}}_{=2 e B_{\perp} S_{n} / c=2 e \Phi_{n} / c} \boldsymbol{r} \times d \boldsymbol{r}=h(n+\gamma),
\end{align*}
$$
where $S_{n}$ is the area encircled by the path $P_{n}$ and $\Phi_{n}=B_{\perp} S_{n}$ the magnetic flux threading. With this we find
$$
\begin{align*}
\Phi_{n}=(n+\gamma) \Phi_{0}
\end{align*}
$$

Analogous to the real space also in reciprocal space the path of the electron encircles an area, $A_{n}$. The relation between $S_{n}$ can be derived from $\hbar \boldsymbol{k}=e(\boldsymbol{r} \times \boldsymbol{B}) / c$ using
$$
\begin{align*}
|d \boldsymbol{r}|=\frac{\Phi_{0}}{2 \pi B_{\perp}}|d \boldsymbol{k}| \quad \Rightarrow \quad S_{n}=\left(\frac{\Phi_{0}}{2 \pi B_{\perp}}\right)^{2} A_{n}
\end{align*}
$$

With the flux quantisation we obtain for a given magnetic field the area $A_{n}$,
$$
\begin{align*}
A_{n}=(n+\gamma) 4 \pi^{2} \frac{B_{\perp}}{\Phi_{0}}
\end{align*}
$$

All the possible paths if given quantum number $n$ form cylinder-like surfaces parallel to $\boldsymbol{k}_{\|}$in reciprocal space, with energies $E_{n, k_{\|}}$:

![Attachments/Notes/Solid-State Theory/IMG-0126164739035.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164739035.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=95&rect=70,439,522,671|•]]

Concentric tubes represent the quantised orbits in the reciprocal space corresponding to the areas $A_{n}$ embedded in the original Fermi surface which limits the height of the tubes, occupation along the $k_{\|}$-direction $\left(\boldsymbol{k}_{\|} \| \boldsymbol{B}\right)$. Left panel: 3-dimensional view of system with a simple Fermi surface. Right panel: cross section including $\boldsymbol{k}_{z}$. Extremal areas represent the band edges for the motion along $k_{\|}$(bottom: maximal $A$; and top: minimal $A$ ).

The range of $k_{\|}$for which this surface lies inside the filled Fermi sea is, thus, defined by $E_{n, k_{\|}} \leq \epsilon_{F}$. Different $n$ label different such concentric cylinders. The area between neighbouring paths depends linearly on $B_{\perp}$,
$$
\begin{align*}
A_{n+1}-A_{n}=\frac{4 \pi^{2} B_{\perp}}{\Phi_{0}}
\end{align*}
$$
such that the densities of the cylinders decreases with increasing $B_{\perp}$ and the number of cylinders within the Fermi sea shrinks. Important are extremal cross sections of the Fermi sea perpendicular to $\boldsymbol{k}_{\|}$where a cylinder passes the Fermi surface. Such an extremal cross section corresponds to the top, bottom or saddle point of $\epsilon_{\boldsymbol{k}_{\|}}$where the density of states has a singularities, analogous to the case of the band bottom of $\epsilon_{\boldsymbol{k}_{\|}}=\hbar^{2} k_{\|}^{2} / 2 m$. If a cylinder hits such an extremal cross section a singularity of the density of states lies at the Fermi surface yielding a spike in the magnetisation.
For the extremal cross sectional area $A$ we ask what is the period between crossings of the cylinder. Thus, for different quantum numbers we find
$$
\begin{align*}
A=(n+\gamma) 4 \pi^{2} \frac{B_{n}}{\Phi_{0}}=\left(n^{\prime}+\gamma\right) \frac{4 \pi^{2}}{\Phi_{0}} B_{n^{\prime}} .
\end{align*}
$$

Thus changing the field $B$ from $B_{n}$ to $B_{n+1}$ leads to two consecutive crossings. We observe that there is a regular oscillation as a function of $1 / B$ with the period,
$$
\begin{align*}
\Delta\left(\frac{1}{B}\right)=\frac{1}{B_{n+1}}-\frac{1}{B_{n}}=\frac{4 \pi^{2}}{A \Phi_{0}} .
\end{align*}
$$

We see in the left panel a Fermi surface with one extremal cross section. In the right panel there are three such cross sections. Such a vase-shaped Fermi surface may result from a band structure like,
$$
\begin{align*}
\epsilon_{\boldsymbol{k}}=\frac{\hbar^{2}}{2 m}\left(k_{x}^{2}+k_{y}^{2}\right)-2 t \cos \left(k_{z} c\right)
\end{align*}
$$
with $c$ the lattice constant along $z$-axis. With $\boldsymbol{k}_{\|}$along the $z$-axis. The cross sections are all circular parallel to $k_{x}-k_{y}$-plane with a radius $\tilde{k}_{F}\left(k_{z}\right)$ defined through
$$
\begin{align*}
\tilde{k}_{F}=\sqrt{\frac{2 m}{\hbar^{2}}\left(\epsilon_{F}+2 t \cos \left(k_{z} c\right)\right)}
\end{align*}
$$

This yields a singularity in the density of states at the band top and bottom, such that
$$
\begin{align*}
N_{0}(E)=\frac{1}{4 \pi^{2} \ell^{2} t} \sum_{n=0}^{\infty} \frac{1}{\sqrt{1-\left(E-\epsilon_{n, s}\right)^{2} / 4 t^{2}}} .
\end{align*}
$$

The oscillations in the magnetisation, thus, allow to measure the cross sectional area of the Fermi 'sphere'. By varying the orientation of the field the topology and shape of the Fermi surface can be mapped. As an alternative to the measurement of magnetisation oscillations one can also measure resistivity oscillations known under the name Schubnikov-de Haas effect. For both methods it is crucial that the Landau levels are sufficiently clearly recognisable. Apart from a low temperature this type of measurement requires sufficiently clean samples. In this context, "sufficiently clean" means that the average life-time $\tau$ (average time between two scattering events) has to be much larger than the period of the cyclotron orbits, i.e. $\omega_{c} \tau \gg 1$. This condition follows from the uncertainty relation
$$
\begin{align*}
\Delta \epsilon \sim \frac{\hbar}{\tau} \ll \hbar \omega_{c} .
\end{align*}
$$

This means that one can improve the situation by going to high magnetic fields.

---
## 4.2 Quantum Hall Effect
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=95&selection=164,0,166,18|•]]

**Classical Hall Effect**

The Hall effect, discovered by Edwin Hall in 1879, originates from the Lorentz force exerted by a magnetic field on a moving charge. This force is perpendicular both to the velocity of the charged particle and to the magnetic field. In the presence of an electrical current, a Lorentz force produces a transverse voltage, whenever the applied magnetic field points in a direction
non-collinear to the current in the conductor. This so-called Hall effect can be used to investigate some properties of the charge carriers. Before treating the quantum version, we briefly review the original Hall effect. To this end we consider the classical equation of motion of an electron, subject to an electric and a magnetic field
$$
\begin{align*}
m^{*} \frac{d \boldsymbol{v}}{d t}=-e\left(\boldsymbol{E}+\frac{\boldsymbol{v}}{c} \times \boldsymbol{B}\right)
\end{align*}
$$
where $m^{*}$ is the effective electron mass. For this classical system, the steady state equation reads
$$
\begin{align*}
\boldsymbol{E}+\frac{\boldsymbol{v}}{c} \times \boldsymbol{B}=0
\end{align*}
$$

Consider the Hall geometry here:

![Attachments/Notes/Solid-State Theory/IMG-0126164739219.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164739219.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=96&rect=156,214,439,371|•]]

Further, consider the fixed current $\boldsymbol{j}=\left(j_{x}, 0,0\right)=\left(-n_{0} e v, 0,0\right)$ and magnetic field $\boldsymbol{B}=B_{z}$, the steady state condition (4.35) simplifies to
$$
\begin{align*}
E_{y}-\frac{v_{x} B_{z}}{c}=0
\end{align*}
$$

The solution $E_{y}=v_{x} B_{z} / c$ yields the Hall voltage that compensates the Lorentz force. The Hall conductivity $\sigma_{H}$ is defined as the ratio between the longitudinal current $j_{x}$ and the transverse electric field $E_{y}\left(j_{x}=\sigma_{x y} E_{y}\right)$, leading to
$$
\begin{align*}
\sigma_{H}=\sigma_{x y}=\frac{j_{x}}{E_{y}}=-\frac{n_{0} e c}{B_{z}}=\nu \frac{e^{2}}{h}
\end{align*}
$$
where $\nu=-n_{0} h c / B e .$ We infer that the measurements of the Hall conductivity can be used to determine both the charge density $n_{0}$ and the sign of the charge carriers, i.e. whether the Fermi surfaces encloses the $\Gamma$-point for electron-like, negative charges or a point on the boundary of the Brillouin zone for hole-like, positive charges.

**Discovery of the Quantum Hall Effects**

When measuring the Hall effect in a special two-dimensional electron system, Klaus von Klitzing and his collaborators made 1980 an astonishing discovery. ${ }^{4}$ The system was the inversion layer of GaAs-MOSFET device with a sufficiently high gate voltage (see Section 2.4.3) which behaves like a two-dimensional electron gas with a high mobility $e \tau / m^{*}$ due to the mean free path $l \sim 10 \text{ }\pu{Å}$ and low density $\left(n_{0} \sim 10^{11} \mathrm{~cm}^{-2}\right)$. The two extended dimensions correspond to the interface of the MOSFET, whereas the electrons are confined in the third dimension like in a potential well (cf. Section 2.4.3). In high magnetic fields between $1 \mathrm{~T}-30 \mathrm{~T}$ and at sufficiently low temperatures ( $T<4 \mathrm{~K}$ ), von Klitzing and coworkers observed a quantisation of the Hall conductivity corresponding to exact integer multiples of $e^{2} / h$
$$
\begin{align*}
\sigma_{H}=\nu_{n} \frac{e^{2}}{h}
\end{align*}
$$
where $\nu_{n} \in \mathbb{Z}$. By now, the integer quantisation is so widely verified, that the von Klitzing constant (resistance quantum named after the discoverer of the Quantum Hall effect) $R_{K}=$ $h / e^{2}=25812.807 \Omega$ is used in resistance calibrations. In the field range where the transverse conductivity shows integer plateaus in $\nu \propto 1 / B$, the longitudinal conductivity $\sigma_{x x}$ vanishes and takes finite values only when $\sigma_{H}$ crossed over from one quantised value to the next:

![Attachments/Notes/Solid-State Theory/IMG-0126164739412.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164739412.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=97&rect=173,225,424,473|•]]

In 1982, Tsui, Störmer, and Gossard discovered an additional quantisation of $\sigma_{H}$, corresponding to certain rational multiples of $e^{2} / h$. Correspondingly, one now distinguishes between the integer quantum Hall effect (short: **IQHE**) and the fractional quantum Hall effect (short: **FQHE**). These discoveries marked the beginning of a whole new field in solid state physics that continues to produce interesting results.

### 4.2.1 Hall Effect of the Two-Dimensional Electron Gas

Here we first discuss the Hall effect in the quantum mechanical treatment. For this purpose we start with the Hamilton operator and neglect the electron spin. Working again in the Landau gauge, $\boldsymbol{A}=(-B y, 0,0)$, and confining the electronic system to two dimensions, the Hamiltonian reduces to
$$
\begin{align*}
\mathcal{H}=\frac{1}{2 m}\left[-\hbar^{2} \frac{\partial^{2}}{\partial y^{2}}+\left(-i \hbar \frac{\partial}{\partial x}-\frac{e}{c} B y\right)^{2}\right] .
\end{align*}
$$

For the two-dimensional gas there is no motion in the $z$-direction, so that the highly degenerate energy eigenvalues are given by the spectrum of a one-dimensional harmonic oscillator $E_{n}=$ $\hbar \omega_{c}(n+1 / 2)$, where again $\omega_{c}=|e B| / m c$. Here, we will concentrate on the lowest Landau level ( $n=0$ ) with the wave function
$$
\begin{align*}
\phi_{0, k_{x}}(x, y)=\frac{1}{\sqrt{2 \pi \ell^{2}}} e^{-\left(y-y_{0}\right)^{2} / 2 \ell^{2}} e^{i k_{x} x} .
\end{align*}
$$
where the magnetic length $\ell=\sqrt{\hbar c /|e B|}$ gives the extension of the wave function in the presence of the magnetic field. In $x$-direction, the wave function is localised around $y_{0}=k_{x} \ell^{2}$, whereas it takes the form of a plane wave in $x$-direction. As discussed previously, the energy does not depend on $k_{x}$.
We now introduce an electric field $E_{y}$ along the $x$-direction. The Hamilton operator (4.40) is then modified by an additional potential $U(\boldsymbol{r})=e E_{y} y$. This term can easily be absorbed into the harmonic potential and leads to a shift of the centre of the wave function,
$$
\begin{align*}
y_{0}\left(k_{x}\right) \rightarrow y_{0}^{\prime}\left(k_{x}\right)=k_{x} \ell^{2}-\frac{e E_{y}}{m \omega_{c}^{2}} .
\end{align*}
$$

Moreover the degeneracy of the Landau level is lifted since the energy becomes $k_{x}$-dependent and (after completing the square) takes the form
$$
\begin{align*}
E_{n=0}\left(k_{x}\right)=\frac{\hbar \omega_{c}}{2}+e E_{y} y_{0}^{\prime}\left(k_{x}\right)+\frac{m}{2}\left(\frac{c E_{y}}{B}\right)^{2} .
\end{align*}
$$

The energy (4.43) corresponds to the wave function $\phi_{0 k_{y}}$ from (4.41) where $y_{0}$ is replaced by $y_{0}^{\prime}$. The velocity of the electrons is then given by
$$
\begin{align*}
v_{x}\left(k_{x}\right)=\frac{1}{\hbar} \frac{d E_{n=0}\left(k_{x}\right)}{d k_{x}}=\frac{e E_{y} \ell^{2}}{\hbar}=\frac{c E_{y}}{B},
\end{align*}
$$
and from this, we determine the current density,
$$
\begin{align*}
j_{x}=-e n_{0} v_{x}\left(k_{x}\right)=-e n_{0} \frac{c E_{y}}{B}=\frac{e \nu}{2 \pi \ell^{2}} \frac{c E_{y}}{B}=\nu \frac{e^{2}}{h} E_{y}=\sigma_{H} E_{y}
\end{align*}
$$
where $-\nu=n_{0} 2 \pi \ell^{2}=N_{0} / N_{\text {deg }}$ corresponds to the filling of the (lowest) Landau level (maximally $N_{\text {deg }}$ electrons can be placed into each Landau level per spin). Note that $\nu^{-1}=B / n_{0} \Phi_{0}$ where $\Phi_{0}=h c / e$ represents the flux quantum, i.e. $\nu^{-1} \propto B$ is the number of flux quanta $\Phi_{0}$ per electron. The Hall conductivity is then identical to the result (4.37) derived previously based on the quasi-classical approximation. There is a linear relation between the Hall conductivity $\sigma_{H}$ and the index $\nu \propto B^{-1}$.

### 4.2.2 Integer Quantum Hall Effect

The plateaus observed by von Klitzing in the Hall conductivity $\sigma_{H}$ of the two-dimensional electron gas as a function of the magnetic field correspond to the values $\sigma_{H}=\nu_{n} e^{2} / h$, as if $\nu=\nu_{n} \in \mathbb{Z}$ was restricted to be an integer. Meanwhile, the longitudinal conductivity of the electron gas vanishes when a plateau of $\sigma_{H}$ is realised
$$
\begin{align*}
\sigma_{x x}=\frac{j_{x}}{E_{x}}=0
\end{align*}
$$
and only becomes finite at the transition points of $\sigma_{H}$ between two plateaus. This fact seems to be in contradiction with the results from the consideration above. The solution to this mysterious behaviour lies in the fact that disorder, which is always present in a real inversion layer, plays a crucial role and should not be neglected. In fact, due to the disorder, the electrons move in a randomly modulated potential landscape $U(x, y)$. As we will find out, even small amounts of disorder lead to the localisation of electronic states in this two-dimensional system. To illustrate this new aspect we focus on the lowest Landau level in the symmetric gauge $\boldsymbol{A}=(-y, x, 0) B / 2(B>0)$. The Schrödinger equation in polar coordinates is given by
$$
\begin{align*}
\frac{\hbar^{2}}{2 m^{*}}\left[-\frac{1}{r} \frac{\partial}{\partial r} r \frac{\partial}{\partial r}-\left(\frac{1}{r} \frac{\partial}{\partial \varphi}+i \frac{e}{2 \hbar c} B r\right)^{2}\right] \psi(r, \varphi)+U(x, y) \psi(r, \varphi)=E \psi(r, \varphi) .
\end{align*}
$$

Without the external potential $U(x, y)$ we find the ground state solutions
$$
\begin{align*}
\psi_{n=0, m}(r, \varphi)=\frac{1}{\sqrt{2 \pi \ell^{2} 2^{m} m!}}\left(\frac{r}{\ell}\right)^{m} e^{-i m \varphi} e^{-r^{2} / 4 \ell^{2}}
\end{align*}
$$
where all values of $m \in \mathbb{N}_{0}$ correspond to the same energy $E_{n=0}=\hbar \omega_{c} / 2$. One easily verifies, that the wave functions $\left|\psi_{n=0, m}(r, \varphi)\right|$ are peaked on circles of radius $r_{m}=\sqrt{2 m} \ell$:

![Attachments/Notes/Solid-State Theory/IMG-0126164739605.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164739605.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=99&rect=196,169,400,304|•]]

Note that the magnetic flux threading such a circle is given by
$$
\begin{align*}
\pi B r_{m}^{2}=\pi B 2 m \ell^{2}=2 \pi m B \frac{\hbar c}{e B}=m \frac{h c}{e}=m \Phi_{0}
\end{align*}
$$
which is an integer multiple of the flux quantum $\Phi_{0}=h c / e$.

Now we consider the effect of the disorder potential. The gauge can be adjusted to the potential landscape. If, for simplicity, we assume the potential to be rotationally invariant around the origin, the symmetric gauge is already optimal. For the potential
$$
\begin{align*}
U(x, y)=U(r)=\frac{C_{1}}{r^{2}}+C_{2} r^{2}+C_{3}
\end{align*}
$$
the exact expression of all eigenstates of equation (4.47) in the lowest Landau level is obtained using the Ansatz
$$
\begin{align*}
\tilde{\psi}_{0, m}(r, \varphi)=\frac{1}{\sqrt{2 \pi \ell^{* 2} 2^{\alpha} \Gamma(\alpha+1)}}\left(\frac{r}{\ell^{*}}\right)^{\alpha} e^{-i m \varphi} e^{-r^{2} / 4 \ell^{* 2}} .
\end{align*}
$$

After introducing the dimensionless parameters $C_{1}^{*}=2 m^{*} C_{1} / \hbar^{2}$ and $C_{2}^{*}=8 \ell^{4} m^{*} C_{2} / \hbar^{2}$, the quantities $\alpha$ and $\ell^{*}$ from equation (4.51) can be expressed via
$$
\begin{align*}
\begin{aligned}
\alpha^{2} & =m^{2}+C_{1}^{*}, \\
\left(\ell^{*}\right)^{-2} & =(\ell)^{-2} \sqrt{1+C_{2}^{*}} .
\end{aligned}
\end{align*}
$$

Indeed, the Ansatz (4.51) describes eigenstates of the disordered problem (4.47). The degeneracy of the ground state energy (the lowest Landau level) is now lifted,
$$
\begin{align*}
E_{0, m}=\frac{\hbar \omega_{c}}{2}\left[\frac{\ell^{2}}{\ell^{* 2}}(\alpha+1)-m\right]+C_{3} .
\end{align*}
$$

The wave functions are concentrated around the radii $r_{m}=\sqrt{2 \alpha} \ell^{*}$. For weak potentials $C_{1}^{*}, C_{2}^{*} \ll 1$ and $m \gg 1$ the energy is approximatively given by
$$
\begin{align*}
E_{0, m} \approx \frac{\hbar \omega_{c}}{2}+\frac{C_{1}}{r_{m}^{2}}+C_{2} r_{m}^{2}+C_{3}+\ldots
\end{align*}
$$
i.e. the wave function adjusts itself to the potential landscape. It turns out that the same is true for arbitrarily structured weak potential landscapes. The wave function describes electrons on quasi-classical trajectories that trace the equipotential lines of the underlying disorder potential. Consequently the states described here are localised in the sense that they are attached to the structure of the potential. The application of an electric field cannot set the electrons in the concentric rings in motion. Therefore, the electrons are localised and do not contribute to electric transport.

**Picture of the potential landscape**

When the magnetic field is varied the filling $\nu=-n_{0} 2 \pi \ell^{2}$ of the Landau level is adjusted accordingly. While all states of a given level are degenerate in the transitionally invariant case, now, these states are spread over a certain energy range due to the disorder. In the quasi-classical approximation, these states correspond to equipotential trajectories that are either filled or empty depending on the strength of the magnetic field, i.e. they are either below or above the chemical potential. These considerations lead to an intuitive picture on localised (closed trajectories) and extended (percolating trajectories) states. We may consider the potential landscape like a real landscape where the the trajectories are contour lines. Assume that we fill now water into such a landscape. The trajectories of the particles is restricted to the shore line. For small filling, we find lakes whose shores are closed and correspond to contour lines. They correspond to closed electron trajectories and represent localised electronic states. At very high water level, only the large mountains of the potential landscape would reach out of the water, forming islands in the sea. The coastlines again represent closed trajectories corresponding to localised electronic states. At some intermediate filling, a boundary between the lake and the island topology, there is a water level at which the coast lines become arbitrarily long and percolate through the whole landscape. Only these contour lines correspond to extended (non-localised) electron states. From this picture we conclude that when a Landau level of a system subject to a random potential is gradually filled, first all occupied state are localised (low filling). At some special intermediate filling level, the extended states are filled and contribute to the current transport. At higher chemical potential (filling) the states would be localised again. In the following argument, going back to Robert B. Laughlin, the presence of filled extended states plays an important role.

![Attachments/Notes/Solid-State Theory/IMG-0126164739799.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164739799.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=101&rect=209,582,386,758|•]]

**Laughlin's gauge argument**

We consider a long rectangular Hall element that is deformed into a so-called Corbino disc, i.e. a circular disc with a hole in the middle as shown here:

![Attachments/Notes/Solid-State Theory/IMG-0126164739984.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164739984.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=102&rect=153,569,443,758|•]]

The Hall element is threaded by a constant and uniform magnetic field $B$ along the $z$-axis. In addition we can introduce an arbitrary flux $\Phi$ through the hole without influencing the uniform field in the disc. This flux is irrelevant for all localised electron trajectories since only extended (percolating) trajectories wind around the hole of the disc and by doing so receive an Aharonov-Bohm phase. When the flux is increased adiabatically by $\delta \Phi$, the vector potential is changed according to
$$
\begin{align*}
\boldsymbol{A} \rightarrow \boldsymbol{A}+\delta \boldsymbol{A}=\boldsymbol{A}+\nabla \chi
\end{align*}
$$
which in our case means
$$
\begin{align*}
(\delta A)_{\varphi}=\frac{\delta \Phi}{2 \pi r}
\end{align*}
$$

At the same time, the wave function acquires a phase factor
$$
\begin{align*}
\psi \rightarrow \psi e^{-i e \chi / \hbar c}=\psi e^{-i\left(\delta \Phi / \Phi_{0}\right) \varphi}
\end{align*}
$$

If the disc was translationally invariant, meaning that disorder is neglected and only extended states exist, we could use the wave functions $\psi_{0, m}$ from (4.48), so that $B \pi r_{m}^{2}=m \Phi_{0}+\delta \Phi$. The single-valuedness of the wave function implies that $m$ has to be adjusted, $m \rightarrow m-\delta \Phi / \Phi_{0}$. This guarantees, that increasing $\Phi$ by one flux quantum leads to a decrease of $m$ by 1 . Hence, gauge invariance implies that the wave functions are shifted in their radius. This argument is also applicable to higher Landau levels.
Since this argument is topological in nature, it will not break down for independent electrons when disorder is introduced. The transfer of one electron between neighbouring extended states due to the change of $\Phi$ by $\Phi_{0}$ leads to a net shift of one electron from the outer to the inner boundary. If an electric field $E_{y}$ is applied in the radial direction (here denoted by $y$-direction), the transfer of this electron results in the energy change
$$
\begin{align*}
\Delta \epsilon_{V}=e E_{y} L
\end{align*}
$$
where $L$ is the distance between the inner and the outer boundary of the Corbino disc. A further change in the electromagnetic energy
$$
\begin{align*}
\Delta \epsilon_{I}=\frac{I_{x} \delta \Phi}{c}
\end{align*}
$$
is caused by the constant current $I_{x}$ (here the angular component is denoted by $x$) in the disc when the magnetic flux is increased by $\delta \Phi$. Following the Aharonov-Bohm argument that the energy of the system is invariant under a flux change by integer multiples of $\Phi_{0}$, the two energies should compensate each other. Thus, setting $\delta \Phi=\Phi_{0}$ and demanding that $\Delta \epsilon_{V}+\Delta \epsilon_{I}=0$ leads to
$$
\begin{align*}
\sigma_{H}=\frac{j_{x}}{E_{y}}=\frac{I_{x}}{L E_{y}}=-\frac{e^{2}}{h}
\end{align*}
$$

We conclude from this argument, that each filled Landau level containing percolating states will contribute $e^{2} / h$ to the total Hall conductivity.
_Alternative view point_: We assume that the flux $\delta \Phi$ changes linearly in time, $\delta \Phi(t)=t \Phi_{0} / T_{0}$ introducing in the time $T_{0}$ one flux quantum $\left(T_{0} \omega_{c} \gg 1\right)$. Looking at a concentric circle of radius $R$ on the Corbino disc, we can define an azimutal electric field due to the Faraday effect,
$$
\begin{align*}
2 \pi R E_{\phi}=-\frac{1}{c} \frac{\partial \delta \Phi}{\partial t}=-\frac{\Phi_{0}}{c T_{0}} .
\end{align*}
$$

At the same time one electron (per filled Landau level) is moved inwards, such that we define the mean current density $j_{r}$ as
$$
\begin{align*}
I_{r}=2 \pi R j_{r}=-\frac{e}{T_{0}}
\end{align*}
$$

This allows us to define the Hall conductance,
$$
\begin{align*}
\sigma_{x y}=\frac{j_{y}}{E_{x}}=\frac{j_{r}}{E_{\phi}}=\frac{c e}{\Phi_{0}}=\frac{e^{2}}{h}
\end{align*}
$$
for each filled Landau level.
Hence, for $\nu_{n} \in \mathbb{N}_{0}$ filled levels the Hall conductivity is given by $\sigma_{H}=\nu_{n} e^{2} / h$. Note the importance of the topological nature of the Hall conductivity ensuring the universal character of the quantisation.


**Localised and extended states**

The density of states of the two-dimensional electron gas (2DEG) in absence of an external magnetic field is given by
$$
\begin{align*}
N_{2 \mathrm{DEG}}(E)=2 \sum_{k_{x}, k_{y}} \delta\left(E-\frac{\hbar^{2}\left(k_{x}^{2}+k_{y}^{2}\right)}{2 m}\right)=\frac{L_{x} L_{y} m}{\pi \hbar^{2}}
\end{align*}
$$
with twice degenerate energy states for the spins, whereas for the Landau levels in a clean sample, we have
$$
\begin{align*}
N_{L}(E)=\frac{L_{x} L_{y}}{2 \pi \ell^{2}} \sum_{n, s} \delta\left(E-E_{n, s}\right) .
\end{align*}
$$

Here the prefactor is given by the large degeneracy of each Landau level.

![Attachments/Notes/Solid-State Theory/IMG-0126164740210.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164740210.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=103&rect=97,320,501,553|•]]

The figure shows in (a) the density of states for the two-dimensional electron gas in a magnetic field. The Landau levels are infinitely sharp and have all identical degeneracy. In (b), with disorder the previously sharp Landau levels broaden in energy. Many states form in the random potential landscape closed semi classical orbits which are, thus, localised. On the other hand, in the centre there are a few percolating extended semi classical orbitals. Note that the number of states in each broadened Landau level is still the same as the original degeneracy. With varying magnetic field the chemical potential (here green bar with finite width $k_{B} T$ indicating broadened Fermi-Dirac distribution) moves, such that states below are filled and states above are empty. If the green bare is in the localised region all $n$ lower Landau levels are completely filled and contribute $n e^{2} / h$ to the Hall conductance $\sigma_{x y}$ which is in a plateau. All extended states are either completely filled or empty such that the system is insulating, i.e. $\sigma_{x x}=0$. If the chemical potential lies at the extended states of a Landau level these are partially filled and act metallic. Because the Landau level is only partially filled, the $\sigma_{x y}$ lies between two plateaus. Note that the width of the step between to plateaus of $\sigma_{x y}$ depends on temperature and shrinks with lowering temperature.

According to our previous discussion, the main effect of a potential is to lift the degeneracy of the states comprising a Landau level. This remains true for random potential landscapes. Most of the states are then localised and do not contribute to electric transport. Only the few extended states contribute to the transport if they are filled. For partially filled extended states the Hall conductivity $\sigma_{H}$ is not an integer multiple of $e^{2} / h$, since not all percolating states - necessary for transferring one electron from one edge to the other, when the flux is changed by $\Phi_{0}$ (in Laughlin's argument) - are occupied. Thus, the charge transferred does not amount to a complete $-e$. The appearance of partially filled extended states marks the transition from one plateau to the next and is accompanied by a finite longitudinal conductivity $\sigma_{x x}$. When all extended states of a Landau level are occupied, the contribution to the longitudinal transport stops, i.e., in the range of a plateau $\sigma_{x x}$ vanishes. Because of thermal occupation, the plateaus quickly shrink when the temperature of the system is increased. This is the reason why the Quantum Hall Effect is only observable for sufficiently low temperatures ( $T<4 \mathrm{~K}$ ).

**Edge states and Büttiker's argument**

A confining potential prevents the electrons from leaving the metal. This potential at the edges of the sample has also to be considered in the potential landscape. Interestingly, equi-potential trajectories of states close to the edge are always extended and percolate along the edge. The corresponding wave functions have already been discussed in Section 4.2.1. We find that the energy is not symmetric in $k_{y}$, the wave vector along the edge, i.e. $E\left(k_{y}\right) \neq E\left(-k_{y}\right)$. This implies that the states are chiral and can move in one direction only for a given energy. The edge states on the opposing edges move in opposite directions, a fact that can be readily verified by inspection of (4.43) based on the figure below.
The total current flowing along an edge for a given Landau level is
$$
\begin{align*}
I=-\sum_{k_{x}}^{\text {occ. }} \frac{e}{L_{x}} v_{x}
\end{align*}
$$
where we sum over all occupied states and each state labelled by $k_{x}$ (determining the corresponding centre $y_{0}$ ) extends over the whole length $L_{x}$ of the Hall element. Thus, the density is given by $1 / L_{x}$. The wave vector is quantised according to the periodic boundary conditions; $k_{x}=2 \pi n_{x} / L_{x}$ with $n_{x} \in \mathbb{Z}$. The velocity $v_{x}$ is given by equation (4.44). Thus, we have
$$
\begin{align*}
I=-\frac{e}{2 \pi \hbar} \int_{\text {occupied }} d k_{x} \frac{d E_{n}\left(k_{x}\right)}{d k_{x}}=-\frac{e}{h} \int_{\text {occupied }} d y_{0} \frac{d E_{n}}{d y_{0}}=-\frac{e}{h}\left(\mu-E_{n}^{(0)}\right)
\end{align*}
$$
where $y_{0}=k_{x} \ell^{2}$ is the transversal position of the wave function and $\mu$ is the chemical potential. Sufficiently far away from the boundary $E_{n}$ is independent of $y_{0}$ and approaches the value $E_{n}^{(0)}=\hbar \omega_{c}(1 / 2+n)$ of a translationally invariant electron gas.
Now we consider the geometry of the Hall bar with two edges:

![Attachments/Notes/Solid-State Theory/IMG-0126164740424.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164740424.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=105&rect=100,557,498,757|•]]

The potential difference between the two opposing edges leads to a net current along the edge direction of the Hall bar,
$$
\begin{align*}
I_{x}=-\frac{e}{h} \int_{b}^{a} d y_{0} \frac{d E_{n}}{d y_{0}}=-\frac{e}{h}\left(\mu_{a}-\mu_{b}\right)=-\frac{e^{2}}{h} E_{y} L_{y}
\end{align*}
$$
and with that
$$
\begin{align*}
\sigma_{H}=\frac{I_{x}}{E_{y} L_{y}}=\frac{j_{x}}{E_{y}}=-\frac{e^{2}}{h},
\end{align*}
$$
where for $\mu_{a}=\mu_{b}$ we have $I_{a}=-I_{b}$. Note that $I_{x}=I_{a}+I_{b}$ is only valid when no currents are present in the bulk of the system. The latter condition is ensured by the localisation of the states at the chemical potential. This argument by Büttiker leads to the same quantisation as derived before, namely every Landau level contributes one edge state and thus $\sigma_{H}=\nu_{n} e^{2} / h$ ( $-\nu_{n}$ is the number of occupied Landau levels). Note that this argument is independent of the precise shape of the confining edge potential.
Within this argument we are able to understand why the longitudinal conductivity has to vanish at the Hall plateaus. For that we express Ohm's law However it is simpler to discuss the resistivity. Like the conductivity $\widehat{\sigma}$ the resistivity $\widehat{\rho}$ is a tensor:
$$
\begin{align*}
\begin{aligned}
\boldsymbol{j} & =\widehat{\sigma} \boldsymbol{E} \\
\boldsymbol{E} & =\widehat{\rho} \boldsymbol{j}
\end{aligned}
\end{align*}
$$
where the conductivity $\widehat{\sigma}$ and the resistivity $\widehat{\rho}$ are both $2 \times 2$ tensors with $\sigma_{x x}=\sigma_{y y}\left(\rho_{x x}=\rho_{y y}\right)$ and $\sigma_{x y}=-\sigma_{y x}\left(\rho_{x y}=-\rho_{y x}\right)$. Therefore, we find
$$
\begin{align*}
\begin{aligned}
\sigma_{x x} & =\frac{\rho_{x x}}{\rho_{x x}^{2}+\rho_{x y}^{2}}, \\
\sigma_{x y} & =\frac{-\rho_{x y}}{\rho_{x x}^{2}+\rho_{x y}^{2}} .
\end{aligned}
\end{align*}
$$

In the following argument, we explain why the longitudinal resistivity $\rho_{x x}$ in two dimensions has to vanish in the presence of a finite Hall resistivity $\rho_{x y}$. Since the edge state electrons with a given energy can only move in one direction, there is no backward scattering by obstacles as long as the edges are far apart from each other. No scattering between the two edges implies $\rho_{x x}=0$ and hence $\sigma_{x x}=0$. A finite resistivity can only occur when extended states are present in the bulk, such that the edge states on opposite edges are no longer spatially separated from each other.

### 4.2.3 Fractional Quantum Hall Effect

Only two years after the discovery of the Integer Quantum Hall Effect, Störmer, Tsui and Gossard observed further series of plateaus of the Hall resistivity in a 2DEG with very high quality MOSFET inversion layers at low temperatures:

![Attachments/Notes/Solid-State Theory/IMG-0126164740629.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164740629.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=106&rect=211,412,386,642|•]]

The most pronounced of these plateaus is observed at a filling of $\nu=1 / 3\left(\sigma_{x y}=\nu e^{2} / h\right)$. Later, an entire hierarchy of plateaus at fractional values $\nu=\nu_{p, m}=p / m$ with $p, m \in \mathbb{N}$ has been discovered,
$$
\begin{align*}
\nu_{p, m} \in\left\{\frac{1}{3}, \frac{2}{3}, \frac{2}{5}, \frac{3}{5}, \frac{3}{7}, \ldots\right\} .
\end{align*}
$$

The emergence of these new plateaus is a clear evidence of the so-called Fractional Quantum Hall Effect (FQHE). It was again Laughlin who found the key concept to explain the FQHE. Unlike the IQHE, this new quantisation feature can not be understood from a single-electron picture, but is based on the Coulomb repulsion among the electrons and the accompanying correlation effects. Laughlin specially investigated the case $\nu_{p, m}=1 / 3$ and made the Ansatz
$$
\begin{align*}
\Psi_{1 / m}\left(z_{1}, \ldots, z_{N}\right) \propto \prod_{i<j}\left(z_{i}-z_{j}\right)^{m} \exp \left(-\sum_{i} \frac{\left|z_{i}\right|^{2}}{4 \ell^{2}}\right)
\end{align*}
$$
for the $N$-body wave function, where $z=x-i y$ is a complex number representing the coordinates of the two-dimensional system. Limiting ourselves to the consideration of the lowest Landau level, this state gives a stable plateau with $\sigma_{H}=(1 / 3) e^{2} / h$, when $m=3$.
A heuristic interpretation of the Laughlin state was proposed by J. K. Jain and it is based on the concept of so-called composite Fermions. In fact, Laughlin's state (4.75) can be written as
$$
\begin{align*}
\Psi_{1 / m}=\prod_{i<j}\left(z_{i}-z_{j}\right)^{m-1} \Psi_{S}
\end{align*}
$$
where $\Psi_{S}$ is the Slater determinant describing the completely filled lowest Landau level. We see that the prefactor of $\Psi_{S}$ in equation (4.76) acts as a so-called Jastrow factor that introduces correlation effects into the wave function, since only the correlations due to the Pauli exclusion principle are contained in $\Psi_{S}$. The Jastrow factor treats the Coulomb repulsion among the electrons and consequently leads to an additional suppression of the wave function whenever two electrons approach each other. In the form introduced above, it produces an phase factor for the electrons encircling each other. In particular, exchanging two electrons leads to a phase
$$
\begin{align*}
\exp (i(m-1) \pi)=\exp \left(i \frac{e}{\hbar c} \frac{m-1}{2} \Phi_{0}\right),
\end{align*}
$$
since $\Phi_{0}=2 \pi \hbar c / e$. This phase has to be unity since the Slater state $\Psi_{S}$ is odd under exchange of two electrons. 

![Attachments/Notes/Solid-State Theory/IMG-0126164740844.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164740844.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=107&rect=188,647,444,750|•]]

Therefore $m$ is restricted to odd integer values. This guarantees that the total wave function $\Psi_{1 / m}$ still changes sign when two electrons are exchanged.
According to the Footnote 6 (see equation (4.45)), the case $\nu_{p, m}=1 / 3$ implies that there are three flux quanta $\Phi_{0}$ per electron. In order to understand the FQHE, one constructs so-called composite Fermions which do not interact with each other. Here, a composite Fermion consists of an electron that has two (in fact $m-1$ ) negative flux quanta attached to it. These objects may be considered as independent Fermions since the attached flux quanta compensate the Jastrow factor in equation 4.76 through factors of the type $\left(z_{i}-z_{j}\right)^{-(m-1)}$. The exchange of two such composite Fermions in two dimensions leads to an Aharanov-Bohm phase that is just opposed to that in equation (4.81). Due to the presence of the flux $-2 \Phi_{0}$ per electron, the composite Fermions are subject to an effective field composed of the external field and the attached flux quanta:
$$
\begin{align*}
\begin{aligned}
B_{\text {eff }} & =B-\sum_{i} 2 \Phi_{0}\left(z_{i}\right) \\
& =\frac{1}{3} B-\left(\sum_{i} 2 \Phi_{0}\left(z_{i}\right)-\frac{2}{3} B\right)
\end{aligned}
\end{align*}
$$

For an external field $B=3 n_{0} \Phi_{0}$, the expression in the brackets of equation (4.83) vanishes and the composite Fermions feel an effective field $B_{\text {eff }}=n_{0} \Phi_{0}$:

![Attachments/Notes/Solid-State Theory/IMG-0126164741024.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164741024.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=108&rect=150,633,448,769|•]]

Thus, these Fermions form an Integer Quantum Hall state with $\nu=1$ (for $B=3 n_{0} \Phi_{0}$ ), as discussed previously. This way of interpretation is applicable to other Fractional Quantum Hall states, too, since for $n$ filled Landau levels with composite Fermions consisting of an electron with an attached flux of $-2 k \Phi_{0}$, the effective field reads
$$
\begin{align*}
B_{\mathrm{eff}}=n_{0} \frac{\Phi_{0}}{\nu_{p, m}}-2 k n_{0} \Phi_{0}=n_{0} \frac{\Phi_{0}}{n} .
\end{align*}
$$

From this we infer, that
$$
\begin{align*}
\frac{1}{n}+2 k=\frac{1}{\nu_{p, m}}
\end{align*}
$$
or equivalently
$$
\begin{align*}
\nu_{p, m}=\frac{p}{m}=\frac{n}{2 k n+1} .
\end{align*}
$$

Despite the apparent simplicity of the treatment in terms of independent composite Fermions, one should keep in mind that one is dealing with a strongly correlated electron system. The structure of the composite Fermions is a manifestation of the fact that the Fermions are not independent electrons. No composite Fermions can exist in the vacuum, they can only arise within a certain many-body state. The Fractional Quantum Hall state also exhibits unconventional excitations with fractional charges. For example in the case $\nu_{p, m}=1 / 3$, there are excitations with effective charge $e^{*}=e / 3$. These are so-called 'topological' excitations, that can only exist in correlated systems. The Fractional Quantum Hall system is a very peculiar 'ordered' state of a two-dimensional electron system that has many interesting and complex properties. 

---
# 5 Landau's Theory of Fermi Liquids
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=109&selection=2,0,2,32|•]]


In the previous chapters, we considered the electrons of the system as more or less independent particles. The effect of their mutual interactions only entered via the renormalisation of potentials and in the emergence of collective excitations. The underlying assumptions of our earlier discussions were that electrons in the presence of interactions can still be described as Fermionic particles with a well-defined energy-momentum relation, and that their groundstate is a filled Fermi sea with a sharp Fermi surface. Since there is no guarantee that this hypothesis holds in general (and in fact they do not), we have to show that in metals the description of electrons as quasi-particles is justified. This quasi-particle picture will lead us to Landau's phenomenological theory of Fermi liquids. Indeed it is very surprising that a strongly interacting many-electron system does not end up in a extremely complex quantum state. What saves us are two important points:
1. In a metal the long-ranged Coulomb interaction is screened and becomes short-ranged;
2. The Pauli principle reduces the phase space of low-energy excitations of electrons dramatically, at least in a three-dimensional system (quantum protection).

---
## 5.1 Lifetime of Quasi-Particles
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=109&selection=22,0,24,26|•]]

We first consider the lifetime of a state consisting of a filled Fermi sea to which one electron is added. Let $\boldsymbol{k}$ with $|\boldsymbol{k}|>k_{F}\left(\epsilon_{\boldsymbol{k}}=\hbar^{2} \boldsymbol{k}^{2} / 2 m\right.$ with $\left.\epsilon_{\boldsymbol{k}}>\epsilon_{F}\right)$ be the momentum (energy) of the additional electron. Due to interactions between the electrons, this state will decay into a many-body state. In momentum space such an interaction takes the form
$$
\begin{align*}
\mathcal{H}_{e e}=\sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}, \boldsymbol{q}} \sum_{s, s^{\prime}} V(\boldsymbol{q}) \widehat{c}_{\boldsymbol{k}-\boldsymbol{q}, s}^{\dagger} \widehat{c}_{\boldsymbol{k}^{\prime}+\boldsymbol{q}, s^{\prime}}^{\dagger} \widehat{c}_{\boldsymbol{k}^{\prime}, s^{\prime}} \widehat{c}_{\boldsymbol{k}, s}
\end{align*}
$$
where $V(\boldsymbol{q})$ represents the electron-electron interaction in momentum space while $\boldsymbol{q}$ indicates the momentum transfer in the scattering process. Below, the short-ranged Yukawa potential
$$
\begin{align*}
V(\boldsymbol{q})=\frac{4 \pi e^{2}}{q^{2} \varepsilon(\boldsymbol{q}, 0)}=\frac{4 \pi e^{2}}{q^{2}+k_{T F}^{2}}
\end{align*}
$$
from equation (3.100) will be used. As we are only interested in very small energy transfers $\hbar \omega \ll \epsilon_{F}$, the static approximation is admissible.
In a perturbative treatment, the lowest order effect of the interaction is the creation of a particlehole excitation in addition to the single electron above the Fermi energy. As the additional electron changes its momentum from $\boldsymbol{k}$ to $\boldsymbol{k}-\boldsymbol{q}$, a hole appears at $\boldsymbol{k}^{\prime}$ and a second electron with wavevector $\boldsymbol{k}^{\prime}+\boldsymbol{q}$ is created outside the Fermi sea. The transition is allowed whenever both energy and momentum are conserved, meaning
$$
\begin{align*}
\boldsymbol{k}=(\boldsymbol{k}-\boldsymbol{q})-\boldsymbol{k}^{\prime}+\left(\boldsymbol{k}^{\prime}+\boldsymbol{q}\right),
\end{align*}
$$
and
$$
\begin{align*}
\epsilon_{k}=\epsilon_{k-q}-\epsilon_{k^{\prime}}+\epsilon_{k^{\prime}+\boldsymbol{q}}
\end{align*}
$$

We calculate the lifetime $\tau_{\boldsymbol{k}}$ of the initial state with momentum $\boldsymbol{k}$ using Fermi's golden rule, yielding the transition rate from the initial state of a filled Fermi sea and one particle with momentum $\boldsymbol{k}$ to a state with two electrons above the Fermi sea, with momenta $\boldsymbol{k}-\boldsymbol{q}$ and $\boldsymbol{k}^{\prime}+\boldsymbol{q}$, and a hole with $\boldsymbol{k}^{\prime}$:

![Attachments/Notes/Solid-State Theory/IMG-0126164741206.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164741206.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=110&rect=125,622,471,759|•]]

Since neither the momenta $\boldsymbol{k}^{\prime}$ and $\boldsymbol{q}$, nor the spin of the created electron are fixed, a summation over the possible configuration has to be performed, leading to
$$
\begin{align*}
\frac{1}{\tau_{\boldsymbol{k}}}=\frac{2 \pi}{\hbar} \frac{1}{\Omega^{2}} \sum_{\boldsymbol{k}^{\prime}, \boldsymbol{q}} \sum_{s^{\prime}}|V(\boldsymbol{q})|^{2} n_{0, \boldsymbol{k}^{\prime}}\left(1-n_{0, \boldsymbol{k}-\boldsymbol{q}}\right)\left(1-n_{0, \boldsymbol{k}^{\prime}+\boldsymbol{q}}\right) \delta\left(\epsilon_{\boldsymbol{k}-\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}-\left(\epsilon_{\boldsymbol{k}^{\prime}}-\epsilon_{\boldsymbol{k}^{\prime}+\boldsymbol{q}}\right)\right)
\end{align*}
$$

Note that the term $n_{0, \boldsymbol{k}^{\prime}}\left(1-n_{0, \boldsymbol{k}-\boldsymbol{q}}\right)\left(1-n_{0, \boldsymbol{k}^{\prime}+\boldsymbol{q}}\right)$ takes care of the Pauli principle, by ensuring that the final state after the scattering process exists, i.e. the hole state $\boldsymbol{k}^{\prime}$ lies inside and the two particle states $\boldsymbol{k}-\boldsymbol{q}$ and $\boldsymbol{k}^{\prime}+\boldsymbol{q}$ lie outside the Fermi sea. First the integral over $\boldsymbol{k}^{\prime}$ is performed under the condition that the energy $\epsilon_{\boldsymbol{k}^{\prime}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}^{\prime}}$ of the excitation is small. With that, the integral reduces to
$$
\begin{align*}
\begin{aligned}
S\left(\omega_{\boldsymbol{q}, \boldsymbol{k}}, q\right) & =\frac{1}{\Omega} \sum_{\boldsymbol{k}^{\prime}} n_{0, \boldsymbol{k}^{\prime}}\left(1-n_{0, \boldsymbol{k}^{\prime}+\boldsymbol{q}}\right) \delta\left(\epsilon_{\boldsymbol{k}-\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}-\left(\epsilon_{\boldsymbol{k}^{\prime}}-\epsilon_{\boldsymbol{k}^{\prime}+\boldsymbol{q}}\right)\right) \\
& =\frac{1}{(2 \pi)^{3}} \int d^{3} k^{\prime} n_{0, \boldsymbol{k}^{\prime}}\left(1-n_{0, \boldsymbol{k}^{\prime}+\boldsymbol{q}}\right) \delta\left(\epsilon_{\boldsymbol{k}^{\prime}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}^{\prime}}-\hbar \omega_{\boldsymbol{q}, \boldsymbol{k}}\right) \\
& =\frac{N\left(\epsilon_{F}\right)}{4} \frac{\omega_{\boldsymbol{q}, \boldsymbol{k}}}{q v_{F}}
\end{aligned}
\end{align*}
$$
where $N\left(\epsilon_{F}\right)=m k_{F} / \pi^{2} \hbar^{2}$ is the density of states of the electrons at the Fermi surface and $\hbar \omega_{\boldsymbol{q}, \boldsymbol{k}}=\hbar^{2}\left(2 \boldsymbol{k} \cdot \boldsymbol{q}-\boldsymbol{q}^{2}\right) / 2 m>0$ is the energy loss of the decaying electron. Small $\omega$ are justified, because $\hbar \omega \leq\left(2 k_{F} q-q^{2}\right) / 2 m$ for most allowed $\omega$. The integral may be computed using cylindrical coordinates, where the vector $\boldsymbol{q}$ points along the axis of the cylinder. It results in
$$
\begin{align*}
\begin{aligned}
S(\boldsymbol{q}, \omega) & =\frac{1}{(2 \pi)^{2}} \int_{k_{2}}^{k_{1}} d k_{\perp}^{\prime} k_{\perp}^{\prime} \int_{0}^{k_{F}} d k_{\|}^{\prime} \delta\left(\frac{\hbar^{2} q^{2}}{2 m}+\frac{\hbar^{2} q k_{\|}^{\prime}}{m}-\hbar \omega\right) \\
& =\frac{m}{4 \pi^{2} \hbar^{2} q}\left(k_{1}^{2}-k_{2}^{2}\right)
\end{aligned}
\end{align*}
$$
with $k_{1}^{2}=k_{F}^{2}-k_{\|, 0}^{2}$ and $k_{2}^{2}=k_{F}^{2}-\left(k_{\|, 0}+q\right)^{2}$, where $k_{\|, 0}=\left(2 m \omega-\hbar q^{2}\right) / 2 \hbar q$ is enforced by the delta function. 

![Attachments/Notes/Solid-State Theory/IMG-0126164741406.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164741406.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=111&rect=237,111,359,228|•]]

The wave vectors $k_{2}$ and $k_{1}$ are the upper and lower limits of integration determined from the condition $n_{0, \boldsymbol{k}^{\prime}}(1-$ $\left.n_{0, \boldsymbol{k}^{\prime}+\boldsymbol{q}}\right)>0$ and can be obtained by simple geometric considerations. equation (5.8) follows immediately.

In order to compute the remaining integral over $\boldsymbol{q}$, we assume that the matrix element $|V(\boldsymbol{q})|^{2}$ depends only weakly on $\boldsymbol{q}$ when $q \ll k_{F}$. This is especially true when the interaction is short-ranged. In spherical coordinates, the integral reads

$$
\begin{align*}
\begin{aligned}
\frac{1}{\tau_{\boldsymbol{k}}} & =\frac{2 \pi}{\hbar} \cdot \frac{N\left(\epsilon_{F}\right)}{4 v_{F} \Omega} \sum_{\boldsymbol{q}, s^{\prime}}|V(\boldsymbol{q})|^{2} \frac{\omega_{\boldsymbol{q}, \boldsymbol{k}}}{q} \\
& =\frac{N\left(\epsilon_{F}\right)}{(2 \pi)^{2} 2 \hbar v_{F}} \int d^{3} \boldsymbol{q}|V(\boldsymbol{q})|^{2} \frac{\omega_{\boldsymbol{q}, \boldsymbol{k}}}{q} \\
& =\frac{N\left(\epsilon_{F}\right)}{(2 \pi) 4 m v_{F}} \int d q|V(q)|^{2} q^{2} \int_{\theta_{1}}^{\theta_{2}} d \theta \sin \theta(2 k \cos \theta-q) \\
& =\frac{N\left(\epsilon_{F}\right)}{(2 \pi) 4 m v_{F}} \int d q|V(q)|^{2} q^{2}\left[-\frac{1}{4 k}(2 k \cos \theta-q)^{2}\right]_{\theta_{1}}^{\theta_{2}}
\end{aligned}
\end{align*}
$$

The restriction of the domain of integration of $\theta$ follows from the two conditions $k^{2} \geq(\boldsymbol{k}-\boldsymbol{q})^{2} \geq$ $k_{F}^{2}$ and $(\boldsymbol{k}-\boldsymbol{q})^{2}=k^{2}-2 k q \cos \theta+q^{2}$. From the first condition, $\cos \theta_{2}=q / 2 k$, and from the second, $\cos \theta_{1}=\left(k^{2}-k_{F}^{2}+q^{2}\right) / 2 k q$. Thus,
$$
\begin{align*}
\begin{aligned}
\frac{1}{\tau_{\boldsymbol{k}}} & =\frac{N\left(\epsilon_{F}\right)}{(2 \pi) 4 m v_{F}} \int d q|V(q)|^{2} \frac{1}{4 k}\left(k^{2}-k_{F}^{2}\right)^{2} \\
& \approx \frac{N\left(\epsilon_{F}\right)}{(2 \pi) 4 v_{F}} \frac{m}{k_{F}} \frac{1}{\hbar^{4}}\left(\epsilon_{\boldsymbol{k}}-\epsilon_{F}\right)^{2} \int d q|V(q)|^{2} \\
& =\frac{1}{8 \pi \hbar^{3}} \frac{N\left(\epsilon_{F}\right)}{v_{F}^{2}}\left(\epsilon_{\boldsymbol{k}}-\epsilon_{F}\right)^{2} \int d q|V(q)|^{2} .
\end{aligned}
\end{align*}
$$

Note that convergence of the last integral over $q$ requires that the integrand does not diverge stronger than $q^{\alpha}(\alpha<1)$ for $q \rightarrow 0$. With the screening of the potential obtained in the previous chapter, this condition is certainly fulfilled (use for $V(q)$, but would not work for the unscreened Coulomb potential. Essentially, the result states that
$$
\begin{align*}
\frac{1}{\tau_{k}} \propto\left(\epsilon_{k}-\epsilon_{F}\right)^{2}
\end{align*}
$$
for $\boldsymbol{k}$ slightly above the Fermi surface. This implies that the state $|\boldsymbol{k} s\rangle$ occurs as a resonance of width $\hbar / \tau_{\boldsymbol{k}}$ and features a quasi-particle, which can be observed in the spectral function $A(E, \boldsymbol{k})$ as depicted here: 

![Attachments/Notes/Solid-State Theory/IMG-0126164741605.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164741605.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=112&rect=163,551,440,716|•]]

The quasi-particle (coherent) part of the spectral function has a weight reduced from one (corresponding to the quasi-particle weight $Z_{\boldsymbol{k}}$ ). The remaining weight is shifted to higher energies as a so-called incoherent part (continuum without clear momentum-energy relation). The resonance becomes arbitrarily sharp as the Fermi surface is approached
$$
\begin{align*}
\lim _{k \rightarrow k_{F}} \frac{\hbar / \tau_{k}}{\epsilon_{k}-\epsilon_{F}}=0
\end{align*}
$$
so that the quasi-particle concept is asymptotically valid. This equation can also be seen as a verification of Heisenberg's uncertainty principle. Consequently, the momentum of an electron is a good quantum number in the vicinity of the Fermi surface. Underlying this result is the Pauli exclusion principle, which restricts the phase space for decay processes of single particle states close to the Fermi surface. In addition, the assumption of short ranged interactions is crucial. Long ranged interactions can change the behaviour drastically due to the larger number of decay channels.

---
## 5.2 Phenomenological Theory of Fermi Liquids
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=112&selection=67,0,69,40|•]]

The existence of well-defined Fermionic quasi-particles in spite of the underlying complex manybody physics inspired Landau to the following phenomenological theory. Just like the states of independent electrons, quasi-particle states shall be characterised by their momentum $\boldsymbol{k}$ and spin $\sigma$. In fact, there is a one-to-one mapping between the free electrons and the quasi-particles. Consequently, the number of quasi-particles and the number of electrons coincide. The momentum distribution function of quasi-particles, defined as $n_{\sigma}(\boldsymbol{k})$, is subject to the condition
$$
\begin{align*}
N=\sum_{k, \sigma} n_{\sigma}(\boldsymbol{k}) .
\end{align*}
$$

In analogy to the Fermi-Dirac distribution of free electrons, one demands, that the ground state distribution function $n_{\sigma}^{(0)}(\boldsymbol{k})$ for the quasi-particles is described by a simple step function
$$
\begin{align*}
n_{\sigma}^{(0)}(\boldsymbol{k})=\Theta\left(k_{F}-|\boldsymbol{k}|\right) .
\end{align*}
$$
For a spherically symmetric electron system, the quasi-particle Fermi surface is a sphere with the same radius as the one for free electrons of the same density. For a general point group symmetry, the Fermi surface may be deformed by the interactions without changing the underlying symmetry. The volume enclosed by the Fermi surface is always conserved despite the deformation. Note that the distribution $n_{\sigma}^{(0)}(\boldsymbol{k})$ of the quasi-particles in the ground state and that $n_{0 \boldsymbol{k} \boldsymbol{s}}=\left\langle\widehat{c}_{\boldsymbol{k} \sigma}^{\dagger} \widehat{c}_{\boldsymbol{k} \sigma}\right\rangle$ of the real electrons in the ground state are not identical:

![Attachments/Notes/Solid-State Theory/IMG-0126164741796.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164741796.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=113&rect=149,609,446,745|•]]

Interestingly, $n_{0 k s}$ is still discontinuous at the Fermi surface, but the height of the jump is, in general, smaller than unity. The modification of the electron distribution function from a step function to a "smoother" Fermi surface indicates the involvement of electron-hole excitations and the renormalisation of the electronic properties, which deplete the Fermi sea and populate the states above the Fermi level. The reduced jump in $n_{0 k s}$ is a measure for the quasi-particle weight at the Fermi surface, $Z_{\boldsymbol{k}_{F}}$, i.e. the amplitude of the corresponding free electron state in the quasi-particle state.
In Landau's theory of Fermi liquids, the essential information on the low-energy physics of the system shall be contained in the deviation of the quasi-particle distribution $n_{\sigma}(\boldsymbol{k})$ from its ground state distribution $n_{\sigma}^{(0)}(\boldsymbol{k})$,
$$
\begin{align*}
\delta n_{\sigma}(\boldsymbol{k})=n_{\sigma}(\boldsymbol{k})-n_{\sigma}^{(0)}(\boldsymbol{k}) .
\end{align*}
$$

The symbol $\delta$ is generally used in literature to denote this difference. Unfortunately this may suggest that the term $\delta n_{\sigma}(\boldsymbol{k})$ is small, which is not true in general. Indeed, $\delta n_{\sigma}(\boldsymbol{k})$ is concentrated on momenta $\boldsymbol{k}$ very close to the Fermi energy only, where the quasi-particle concept is valid. This distribution function, describing the deviation from the ground state, enters a phenomenological energy functional of the form
$$
\begin{align*}
E=E_{0}+\sum_{\boldsymbol{k}, \sigma} \epsilon_{\sigma}(\boldsymbol{k}) \delta n_{\sigma}(\boldsymbol{k})+\frac{1}{2 \Omega} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}} \sum_{\sigma, \sigma^{\prime}} f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) \delta n_{\sigma}(\boldsymbol{k}) \delta n_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right)+O\left(\delta n^{3}\right)
\end{align*}
$$
where $E_{0}$ denotes the energy of the ground state. Moreover, the phenomenological parameters $\epsilon_{\sigma}(\boldsymbol{k})$ and $f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)$ have to be determined by experiments or by means of a microscopic theory. The variational derivative
$$
\begin{align*}
\tilde{\epsilon}_{\sigma}(\boldsymbol{k})=\frac{\delta E}{\delta n_{\sigma}(\boldsymbol{k})}=\epsilon_{\sigma}(\boldsymbol{k})+\frac{1}{\Omega} \sum_{\boldsymbol{k}^{\prime}, \sigma^{\prime}} f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) \delta n_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right)
\end{align*}
$$
yields an effective energy-momentum relation $\tilde{\epsilon}_{\sigma}(\boldsymbol{k})$, whose second term depends on the distribution of all quasi-particles. A quasi-particle moves in the "mean-field" of all other quasi-particles, so that changes $\delta n_\sigma(\textbf{k})$ in the distribution affect $\tilde{\epsilon_\sigma(\textbf{k})}$. The second variational derivative describes the coupling between the quasi-particles

$$
\begin{align*}
\frac{\delta^{2} E}{\delta n_{\sigma}(\boldsymbol{k}) \delta n_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right)}=\frac{1}{\Omega} f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)
\end{align*}
$$

We introduce a parametrisation for these couplings $f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)$ by assuming spherical symmetry of the system. Furthermore, the radial dependence is ignored, as we only consider quasi-particles in the vicinity of the Fermi surface where $|\boldsymbol{k}|,\left|\boldsymbol{k}^{\prime}\right| \approx k_{F}$. Therefore the dependence of $f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)$ on $\boldsymbol{k}, \boldsymbol{k}^{\prime}$ can be reduced to the relative angle $\theta_{\hat{k}, \hat{k}^{\prime}}$
$$
\begin{align*}
f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)=f^{s}\left(\hat{k}, \hat{k}^{\prime}\right)+\sigma \sigma^{\prime} f^{a}\left(\hat{k}, \hat{k}^{\prime}\right)
\end{align*}
$$
where $\hat{k}=\boldsymbol{k} /|\boldsymbol{k}|$. The symmetric ( $s$ ) and antisymmetric (a) part of $f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)$ can be expanded in Legendre-polynomials $P_{l}(z)$, leading to
$$
\begin{align*}
f^{s, a}\left(\hat{k}, \hat{k}^{\prime}\right)=\sum_{l=0}^{\infty} f_{l}^{s, a} P_{l}\left(\cos \theta_{\hat{k}, \hat{k}^{\prime}}\right)
\end{align*}
$$

The density of states at the Fermi surface is defined as
$$
\begin{align*}
N\left(\epsilon_{F}\right)=\frac{2}{\Omega} \sum_{\boldsymbol{k}} \delta\left(\epsilon(\boldsymbol{k})-\epsilon_{F}\right)=\frac{k_{F}^{2}}{\pi^{2} \hbar v_{F}}=\frac{m^{*} k_{F}}{\pi^{2} \hbar^{2}}
\end{align*}
$$
and follows from the dispersion $\epsilon(\boldsymbol{k})$ of the bare quasi-particle energy
$$
\begin{align*}
\left.\nabla_{\boldsymbol{k}} \epsilon(\boldsymbol{k})\right|_{\boldsymbol{k}_{F}}=\boldsymbol{v}_{\boldsymbol{F}}=\frac{\hbar \boldsymbol{k}_{F}}{m^{*}}
\end{align*}
$$
where for a fully rotation symmetric system we may write $\epsilon(\boldsymbol{k})=\hbar^{2} \boldsymbol{k}^{2} / 2 m^{*}$ with $m^{*}$ as an "effective mass", although we will be only interested at the spectrum in the immediate vicinity of the Fermi energy. With this definition, we also introduce the so-called Landau parameters
$$
\begin{align*}
\begin{aligned}
& F_{l}^{s}=N\left(\epsilon_{F}\right) f_{l}^{s}, \\
& F_{l}^{a}=N\left(\epsilon_{F}\right) f_{l}^{a},
\end{aligned}
\end{align*}
$$
commonly used in the literature. In the following, we want to study the relation between the different phenomenological parameters of Landau's theory of Fermi liquids and the experimentally accessible quantities of a real system, such as specific heat, compressibility, spin susceptibility among others.

### 5.2.1 Specific Heat - Density of States

Since the quasi-particles are Fermions, they obey Fermi-Dirac statistics
$$
\begin{align*}
n_{\sigma}(T, \boldsymbol{k})=\frac{1}{e^{[\tilde{\varepsilon}(\boldsymbol{k})-\mu] / k_{B} T}+1}
\end{align*}
$$
with the chemical potential $\mu$, leading to

$$
\begin{align*}
\delta n_{\sigma}(\boldsymbol{k})=n_{\sigma}(T, \boldsymbol{k})-n_{\sigma}^{(0)}(0, \boldsymbol{k})
\end{align*}
$$

We will only consider here the behaviour in lowest-order in temperature and restrict ourselves, therefore, to $\tilde{\epsilon}(\boldsymbol{k})=\epsilon(\boldsymbol{k})$. Furthermore, we replaced $\mu=\epsilon_{F}+O\left(T^{2}\right)$ by $\epsilon_{F}$. In order to determine the specific heat, we use the expression for the entropy of a Fermion gas based on the momentum distribution function,
$$
\begin{align*}
S=-\frac{k_{B}}{\Omega} \sum_{\boldsymbol{k}, \sigma}\left[n_{\sigma}(\boldsymbol{k}, T) \ln \left(n_{\sigma}(\boldsymbol{k}, T)\right)+\left(1-n_{\sigma}(\boldsymbol{k}, T)\right) \ln \left(1-n_{\sigma}(\boldsymbol{k}, T)\right)\right]
\end{align*}
$$

Taking the derivative of the entropy $S$ with respect to $T$, the specific heat
$$
\begin{align*}
\begin{aligned}
C(T) & =T \frac{\partial S}{\partial T} \\
& =-\frac{k_{B} T}{\Omega} \sum_{\boldsymbol{k}, \sigma} \frac{e^{\xi(\boldsymbol{k}) / k_{B} T}}{\left(e^{\xi(\boldsymbol{k}) / k_{B} T}+1\right)^{2}} \frac{\xi(\boldsymbol{k})}{k_{B} T^{2}} \ln \left(\frac{n_{\sigma}(\boldsymbol{k})}{1-n_{\sigma}(\boldsymbol{k})}\right) \\
& =\frac{k_{B} T}{\Omega} \sum_{\boldsymbol{k}, \sigma} \frac{1}{4 \cosh \left(\xi(\boldsymbol{k}) / 2 k_{B} T\right)^{2}} \frac{\xi(\boldsymbol{k})}{k_{B} T^{2}} \frac{\xi(\boldsymbol{k})}{k_{B} T}
\end{aligned}
\end{align*}
$$
is obtained, where we introduced $\xi(\boldsymbol{k})=\epsilon(\boldsymbol{k})-\epsilon_{F}$. In the limit $T \rightarrow 0$ we find
$$
\begin{align*}
\begin{aligned}
\frac{C(T)}{T} & \approx \frac{N\left(\epsilon_{F}\right)}{4 k_{B} T^{3}} \int d \xi \frac{\xi^{2}}{\cosh ^{2}\left(\xi / 2 k_{B} T\right)} \\
& \approx \frac{k_{B}^{2} N\left(\epsilon_{F}\right)}{4} \int_{-\infty}^{+\infty} d y \frac{y^{2}}{\cosh ^{2}(y / 2)} \\
& =\frac{\pi^{2} k_{B}^{2} N\left(\epsilon_{F}\right)}{3}
\end{aligned}
\end{align*}
$$
which is the well-known linear behaviour $C(T)=\gamma T$ for the specific heat at low temperatures, with $\gamma=\pi^{2} k_{B}^{2} N\left(\epsilon_{F}\right) / 3$. Since $N\left(\epsilon_{F}\right)=m^{*} k_{F} / \pi^{2} \hbar^{2}$, the effective mass $m^{*}$ of the quasi-particles can directly determined by measuring the specific heat of the system.

### 5.2.2 Compressibility - Landau parameter $\mathbf{F}_{0}^{s}$

A Fermi gas has a finite compressibility because each Fermion occupies a finite amount of space due to the Pauli principle. The compressibility $\kappa$ is defined as
$$
\begin{align*}
\kappa=-\frac{1}{\Omega}\left(\frac{\partial \Omega}{\partial p}\right)_{T, N}
\end{align*}
$$
where $p$ is the uniform hydrostatic pressure. The indices $T, N$ mean, that the temperature $T$ and the particle number $N$ are kept fixed. We consider the response of the Fermi liquid upon application of uniform pressure $p$. The shift of the bare quasi-particle energies is given by
$$
\begin{align*}
\delta \epsilon_{\sigma}(\boldsymbol{k})=\frac{\partial \epsilon_{\sigma}(\boldsymbol{k})}{\partial p} \delta p=\frac{\partial \epsilon(\boldsymbol{k})}{\partial \boldsymbol{k}} \cdot \frac{\partial \boldsymbol{k}}{\partial \Omega} \frac{\partial \Omega}{\partial p} \delta p=\frac{\kappa^{(0)}}{3} \hbar \boldsymbol{v}_{\boldsymbol{k}} \cdot \boldsymbol{k} \delta p=\gamma_{\boldsymbol{k}} \kappa^{(0)} \delta p
\end{align*}
$$

with $n=N / \Omega$.

We use the fact that
$$
\begin{align*}
\boldsymbol{k}=\frac{2 \pi}{L} \boldsymbol{n}=\frac{2 \pi \boldsymbol{n}}{\Omega^{1 / 3}} \Rightarrow \frac{\partial \boldsymbol{k}}{\partial \Omega}=-\frac{1}{3 \Omega} \frac{2 \pi \boldsymbol{n}}{\Omega^{1 / 3}}=-\frac{\boldsymbol{k}}{3 \Omega}
\end{align*}
$$
and denote $\gamma_{\boldsymbol{k}}=\hbar \boldsymbol{v}_{\boldsymbol{k}} \cdot \boldsymbol{k} / 3=2 \epsilon_{\sigma}(\boldsymbol{k}) / 3$ and $\kappa^{(0)}$ is the unrenormalised compressibility derived below. Analogously we introduce the shift of the renormalised quasi-particle energies with the renormalised compressibility $\kappa$,
$$
\begin{align*}
\begin{aligned}
\delta \tilde{\epsilon}_{\sigma}(\boldsymbol{k}) & =\gamma_{\boldsymbol{k}} \kappa \delta p=\delta \epsilon_{\sigma}(\boldsymbol{k})+\frac{1}{\Omega} \sum_{\boldsymbol{k}^{\prime}, \sigma^{\prime}} f_{\sigma, \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) \delta n_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right) \\
& =\gamma_{\boldsymbol{k}} \kappa^{(0)} \delta p+\frac{1}{\Omega} \sum_{\boldsymbol{k}^{\prime}, \sigma^{\prime}} f_{\sigma, \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) \frac{\partial n_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right)}{\partial \tilde{\epsilon}_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right)} \delta \tilde{\epsilon}_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right) \\
& =\gamma_{\boldsymbol{k}} \kappa^{(0)} \delta p-\frac{1}{\Omega} \sum_{\boldsymbol{k}^{\prime}, \sigma^{\prime}} f_{\sigma, \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) \delta\left(\tilde{\epsilon}_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right)-\epsilon_{F}\right) \gamma_{\boldsymbol{k}^{\prime}} \kappa \delta p
\end{aligned}
\end{align*}
$$

Changes are concentrated on the Fermi surface such that we can replace $\gamma_{k}=2 \epsilon_{F} / 3$ so that
$$
\begin{align*}
\kappa=\kappa^{(0)}-\kappa N\left(\epsilon_{F}\right) \int \frac{d \Omega_{\hat{k}^{\prime}}}{4 \pi} f^{s}\left(\hat{k}, \hat{k}^{\prime}\right)=\kappa^{(0)}-\kappa F_{0}^{s}
\end{align*}
$$

Therefore we find
$$
\begin{align*}
\kappa=\frac{\kappa^{(0)}}{1+F_{0}^{s}}
\end{align*}
$$

Now we determine $\kappa^{(0)}$ from the volume dependence of the energy
$$
\begin{align*}
E^{(0)}=\sum_{\boldsymbol{k}, \sigma} \epsilon_{\sigma}(\boldsymbol{k})=\frac{3}{5} N \epsilon_{F}=\frac{3}{5} N \frac{\hbar^{2} k_{F}^{2}}{2 m^{*}}=\frac{3}{10} \frac{\hbar^{2} N}{m^{*}}\left(3 \pi^{2} \frac{N}{\Omega}\right)^{2 / 3} .
\end{align*}
$$

Then we determine the pressure
$$
\begin{align*}
p=-\left(\frac{\partial E^{(0)}}{\partial \Omega}\right)_{N}=\frac{1}{5} \frac{\hbar^{2} N}{m^{*}}\left(3 \pi^{2} \frac{N}{\Omega}\right)^{2 / 3} \frac{1}{\Omega}
\end{align*}
$$
and
$$
\begin{align*}
\frac{1}{\kappa^{(0)}}=-\Omega \frac{\partial p}{\partial \Omega}=\frac{1}{3} \frac{\hbar^{2} N}{m^{*} \Omega}\left(3 \pi^{2} n\right)^{2 / 3}=\frac{2}{3} n \epsilon_{F} .
\end{align*}
$$

### 5.2.3 Spin Susceptibility - Landau Parameter $\mathbf{F}_{0}^{\text {a }}$

In a magnetic field $H$ coupling to the electron spins the bare quasi-particle energy is supplemented by the Zeeman term,
$$
\begin{align*}
\epsilon_{\sigma}(\boldsymbol{k})=\frac{\hbar^{2} \boldsymbol{k}^{2}}{2 m^{*}}-g \mu_{B} H \frac{\sigma}{2}
\end{align*}
$$
where $\sigma= \pm 1$ denotes the spin component parallel to the applied field. The shift of the renormalised quasi-particle energy due to the applied field is
$$
\begin{align*}
\begin{aligned}
\delta \tilde{\epsilon}_{\sigma}(\boldsymbol{k}) & =\tilde{\epsilon}_{\sigma}(H, \boldsymbol{k})-\tilde{\epsilon}(H=0, \boldsymbol{k}) \\
& =-g \mu_{B} H \frac{\sigma}{2}+\frac{1}{\Omega} \sum_{\boldsymbol{k}^{\prime}, \sigma^{\prime}} f_{\sigma, \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) \delta n_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right) \\
& =-\tilde{g} \mu_{B} H \frac{\sigma}{2} .
\end{aligned}
\end{align*}
$$

![Attachments/Notes/Solid-State Theory/IMG-0126164741982.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164741982.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=117&rect=137,635,465,768|•]]

Note that by symmetry, $\delta n_{\sigma}(\boldsymbol{k})=-\delta n_{-\sigma}(-\boldsymbol{k})$. Due to interactions, the renormalised gyromagnetic factor $\tilde{g}$ differs from the value of $g=2$ for free electrons. We focus on the second term, which can be expressed as
$$
\begin{align*}
\begin{aligned}
\frac{1}{\Omega} \sum_{\boldsymbol{k}^{\prime}, \sigma^{\prime}} f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) \delta n_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right) & =\frac{1}{\Omega} \sum_{\boldsymbol{k}^{\prime}, \sigma^{\prime}} f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) \frac{\partial n_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right)}{\partial \tilde{\epsilon}_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right)} \delta \tilde{\epsilon}_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right) \\
& =\frac{1}{\Omega} \sum_{\boldsymbol{k}^{\prime}, \sigma^{\prime}} f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) \delta\left(\tilde{\epsilon}_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right)-\epsilon_{F}\right) \tilde{g} \mu_{B} H \frac{\sigma^{\prime}}{2}
\end{aligned}
\end{align*}
$$

We derive
$$
\begin{align*}
\tilde{g}=g-\tilde{g} N\left(\epsilon_{F}\right) \int \frac{d \Omega_{\hat{k}^{\prime}}}{4 \pi} f^{a}\left(\hat{k}, \hat{k}^{\prime}\right)=g-\tilde{g} F_{0}^{a}
\end{align*}
$$
or equivalently
$$
\begin{align*}
\tilde{g}=\frac{g}{1+F_{0}^{a}}
\end{align*}
$$

The magnetisation of the system can be computed from the distribution function,
$$
\begin{align*}
\begin{aligned}
M & =g \mu_{B} \sum_{\boldsymbol{k}, \sigma} \frac{\sigma}{2} \delta n_{\sigma}(\boldsymbol{k})=g \mu_{B} \sum_{\boldsymbol{k}, \sigma} \frac{\sigma}{2} \frac{\partial n_{\sigma}(\boldsymbol{k})}{\partial \tilde{\epsilon}_{\sigma}(\boldsymbol{k})} \delta \tilde{\epsilon}_{\sigma}(\boldsymbol{k}) \\
& =g \mu_{B} \sum_{\boldsymbol{k}, \sigma} \frac{\sigma}{2} \delta\left(\tilde{\epsilon}_{\sigma}(\boldsymbol{k})-\epsilon_{F}\right) \tilde{g} \mu_{B} H \frac{\sigma}{2}
\end{aligned}
\end{align*}
$$
from which the susceptibility is immediately found to be
$$
\begin{align*}
\chi=\frac{M}{H \Omega}=\frac{\mu_{B}^{2} N\left(\epsilon_{F}\right)}{1+F_{0}^{a}}
\end{align*}
$$

The changes in the distribution function induced by the magnetic field feed back into the susceptibility, so that the latter may be either weakened $\left(F_{0}^{a}>0\right)$ or enhanced $\left(F_{0}^{a}<0\right)$. For the magnetic susceptibility, the Landau parameter $F_{0}^{a}$ and the effective mass $m^{*}$ (through $N\left(\epsilon_{F}\right)$ ) lead to a renormalisation compared to the free electron susceptibility.

### 5.2.4 Galilei Invariance - Effective Mass and $\mathbf{F}_{1}^{s}$

We initially introduced by hand the effective mass of quasi-particles in $\epsilon_{\sigma}(\boldsymbol{k})$. In this section we show, that overall consistency of the phenomenological theory requires a relation between
the effective mass and one Landau parameter $\left(F_{1}^{s}\right)$. The reason is, that the effective mass is the result of the interactions among the electrons. This self-consistency is connected with the Galilean invariance of the system. When the momenta of all particles are shifted by $\hbar \boldsymbol{q}$ ( $|\boldsymbol{q}|$ shall be very small compared to the Fermi momentum $k_{F}$ in order to remain within the assumption-range of the Fermi liquid theory) the distribution function given by
$$
\begin{align*}
\delta n_{\sigma}(\boldsymbol{k})=n_{\sigma}^{(0)}(\boldsymbol{k}-\boldsymbol{q})-n_{\sigma}^{(0)}(\boldsymbol{k}) \approx-\boldsymbol{q} \cdot \nabla_{\boldsymbol{k}} n_{\sigma}^{(0)}(\boldsymbol{k}) .
\end{align*}
$$

This function is strongly concentrated around the Fermi energy:

![Attachments/Notes/Solid-State Theory/IMG-0126164742163.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164742163.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=118&rect=208,492,387,637|•]]

The current density can now be calculated, using the distribution function $n_{\sigma}(\boldsymbol{k})=n_{\sigma}^{(0)}(\boldsymbol{k})+$ $\delta n_{\sigma}(\boldsymbol{k})$. Within the Fermi liquid theory this yields,
$$
\begin{align*}
\boldsymbol{j}_{\boldsymbol{q}}=\frac{1}{\Omega} \sum_{\boldsymbol{k}, \sigma} \boldsymbol{v}(\boldsymbol{k}) n_{\sigma}(\boldsymbol{k})=\frac{1}{\Omega} \sum_{\boldsymbol{k}, \sigma} \boldsymbol{v}(\boldsymbol{k}) \delta n_{\sigma}(\boldsymbol{k})
\end{align*}
$$
with
$$
\begin{align*}
\begin{aligned}
\boldsymbol{v}(\boldsymbol{k}) & =\frac{1}{\hbar} \boldsymbol{\nabla}_{\boldsymbol{k}} \tilde{\epsilon}_{\sigma}(\boldsymbol{k}) \\
& =\frac{1}{\hbar}\left(\nabla_{\boldsymbol{k}} \epsilon_{\sigma}(\boldsymbol{k})+\frac{1}{\Omega} \sum_{\boldsymbol{k}^{\prime}, \sigma^{\prime}} \nabla_{\boldsymbol{k}} f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) \delta n_{\sigma}\left(\boldsymbol{k}^{\prime}\right)\right) .
\end{aligned}
\end{align*}
$$

Thus we obtain for the current density,
$$
\begin{align*}
\begin{aligned}
\boldsymbol{j}_{\boldsymbol{q}} & =\frac{1}{\Omega} \sum_{\boldsymbol{k}, \sigma} \frac{\hbar \boldsymbol{k}}{m^{*}} n_{\sigma}(\boldsymbol{k})+\frac{1}{\Omega^{2}} \sum_{\boldsymbol{k}, \sigma} \sum_{\boldsymbol{k}^{\prime}, \sigma^{\prime}}\left[n_{\sigma}^{(0)}(\boldsymbol{k})+\delta n_{\sigma}(\boldsymbol{k})\right] \frac{1}{\hbar} \boldsymbol{\nabla}_{\boldsymbol{k}} f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) \delta n_{\sigma}\left(\boldsymbol{k}^{\prime}\right) \\
& =\frac{1}{\Omega} \sum_{\boldsymbol{k}, \sigma} \frac{\hbar \boldsymbol{k}}{m^{*}} \delta n_{\sigma}(\boldsymbol{k})-\frac{1}{\Omega^{2}} \sum_{\boldsymbol{k}, \sigma} \sum_{\boldsymbol{k}^{\prime}, \sigma^{\prime}} \frac{1}{\hbar}\left[\boldsymbol{\nabla}_{\boldsymbol{k}} n_{\sigma}^{(0)}(\boldsymbol{k})\right] f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) \delta n_{\sigma}\left(\boldsymbol{k}^{\prime}\right)+O\left(q^{2}\right) \\
& =\frac{1}{\Omega} \sum_{\boldsymbol{k}, \sigma} \frac{\hbar \boldsymbol{k}}{m^{*}} \delta n_{\sigma}(\boldsymbol{k})+\frac{1}{\Omega^{2}} \sum_{\boldsymbol{k}, \sigma} \sum_{\boldsymbol{k}^{\prime}, \sigma^{\prime}} f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) \delta\left(\epsilon_{\sigma}\left(\boldsymbol{k}^{\prime}\right)-\epsilon_{F}\right) \frac{\hbar \boldsymbol{k}^{\prime}}{m^{*}} \delta n_{\sigma}(\boldsymbol{k})+O\left(q^{2}\right)=\boldsymbol{j}_{1}+\boldsymbol{j}_{2} .
\end{aligned}
\end{align*}
$$
where, for the second line, we performed an integration by parts and neglect terms quadratic in $\delta n$ and, in the third line, used $f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)=f_{\sigma^{\prime} \sigma}\left(\boldsymbol{k}^{\prime}, \boldsymbol{k}\right)$ and
$$
\begin{align*}
\nabla_{\boldsymbol{k}} n_{\sigma}^{(0)}(\boldsymbol{k})=\frac{\partial n_{\sigma}^{(0)}(\boldsymbol{k})}{\partial \epsilon_{\sigma}(\boldsymbol{k})} \nabla_{\boldsymbol{k}} \epsilon_{\sigma}(\boldsymbol{k})=-\delta\left(\epsilon_{\sigma}(\boldsymbol{k})-\epsilon_{F}\right) \nabla_{\boldsymbol{k}} \epsilon_{\sigma}(\boldsymbol{k})=-\delta\left(\epsilon_{\sigma}(\boldsymbol{k})-\epsilon_{F}\right) \frac{\hbar^{2} \boldsymbol{k}}{m^{*}} .
\end{align*}
$$

The first term of equation (5.65) denotes quasi-particle current, $\boldsymbol{j}_{1}$, while the second term can be interpreted as a drag current, $\boldsymbol{j}_{2}$, an induced motion (backflow) of the other particles due to interactions.
From a different viewpoint, we consider the system as being in the inertial frame with a velocity $\hbar \boldsymbol{q} / m$, as all particles received the same momentum. Here $m$ is the bare electron mass. The current density is then given by
$$
\begin{align*}
\boldsymbol{j}_{\boldsymbol{q}}=\frac{N}{\Omega} \frac{\hbar \boldsymbol{q}}{m}=\frac{1}{\Omega} \sum_{\boldsymbol{k}, \sigma} \frac{\hbar \boldsymbol{k}}{m} n_{\sigma}(\boldsymbol{k})=\frac{1}{\Omega} \sum_{\boldsymbol{k}, \sigma} \frac{\hbar \boldsymbol{k}}{m} \delta n_{\sigma}(\boldsymbol{k})
\end{align*}
$$

Since these two viewpoints have to be equivalent, the resulting currents should be the same. Thus, we compare equation (5.65) and (5.66) and obtain the equation,
$$
\begin{align*}
\frac{\hbar \boldsymbol{k}}{m}=\frac{\hbar \boldsymbol{k}}{m^{*}}+\frac{1}{\Omega} \sum_{\boldsymbol{k}^{\prime}, \sigma^{\prime}} f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) \delta\left(\epsilon_{\sigma}\left(\boldsymbol{k}^{\prime}\right)-\epsilon_{F}\right) \frac{\hbar \boldsymbol{k}^{\prime}}{m^{*}}
\end{align*}
$$
which with $\hat{k}=\boldsymbol{k} / k_{F}$ then leads to
$$
\begin{align*}
\frac{1}{m}=\frac{1}{m^{*}}+N\left(\epsilon_{F}\right) \int \frac{d \Omega_{\hat{k}^{\prime}}}{4 \pi} f^{s}\left(\hat{k}, \hat{k}^{\prime}\right) \frac{\hat{k} \cdot \hat{k}^{\prime}}{m^{*}}=\frac{1}{m^{*}}+\frac{1}{m^{*}} \int \frac{d \Omega_{\hat{k}^{\prime}}}{4 \pi} \underbrace{N\left(\epsilon_{F}\right) f^{s}\left(\hat{k}, \hat{k}^{\prime}\right)}_{\sum_{l=0}^{\infty} F_{l}^{s} P_{l}\left(\cos \theta_{k^{\prime}}\right)} \underbrace{\cos \theta_{k^{\prime}}}_{P_{1}\left(\cos \theta_{k^{\prime}}\right)}
\end{align*}
$$
or by using the orthogonality of the Legendre polynomials,
$$
\begin{align*}
\frac{m^{*}}{m}=1+\frac{1}{3} F_{1}^{s}
\end{align*}
$$
where $1 / 3=1 /(2 l+1)$ for $l=1$ originates from the orthogonality relation of Legendrepolynomials, as shown above. Therefore, the relation (5.69) has to couple $m^{*}$ to $F_{1}^{s}$ in order for Landau's theory of Fermi liquids to be self-consistent. Generally, we find that $F_{1}^{s}>0$ so that quasi-particles in a Fermi liquid are effectively heavier than bare electrons.

### 5.2.5 Stability of the Fermi Liquid

Upon inspection of the renormalisation of the quantities treated previously
$$
\begin{align*}
\begin{aligned}
\frac{\gamma}{\gamma_{0}} & =\frac{m^{*}}{m} \\
\frac{\kappa}{\kappa_{0}} & =\frac{m^{*}}{m} \frac{1}{1+F_{0}^{s}} \\
\frac{\chi}{\chi_{0}} & =\frac{m^{*}}{m} \frac{1}{1+F_{0}^{a}}
\end{aligned}
\end{align*}
$$
with
$$
\begin{align*}
\frac{m^{*}}{m}=1+\frac{1}{3} F_{1}^{s}
\end{align*}
$$
and the the response functions of the non-interacting system are given by
$$
\begin{align*}
\gamma_{0}=\frac{k_{B}^{2} m k_{F}}{3 \hbar^{2}}, \kappa_{0}=\frac{3 m}{n \hbar^{2} k_{F}^{2}} \text { and } \chi_{0}=\mu_{B}^{2} \frac{m k_{F}}{\pi^{2} \hbar^{2}}
\end{align*}
$$
one notes that the compressibility $\kappa$ (susceptibility $\chi$ ) diverges for $F_{0}^{s} \rightarrow-1\left(F_{0}^{a} \rightarrow-1\right)$, indicating an instability of the system. A diverging spin susceptibility for example leads to a ferromagnetic state with a split Fermi surface, one for each spin direction. On the other hand, a diverging compressibility leads to a spontaneous contraction of the system. More generally, the deformation of the quasi-particle distribution function may vary over the Fermi surface, so that arbitrary deviations of the Fermi liquid ground state may be classified by the deformation
$$
\begin{align*}
\delta n_{\sigma}(\hat{k})=\sum_{l=0}^{\infty} \sum_{m=-l}^{+l} \delta n_{\sigma, l, m} Y_{l m}\left(\theta_{\boldsymbol{k}}, \phi_{\boldsymbol{k}}\right)
\end{align*}
$$

Note that we allow here formally for complex distribution functions. For pure charge density deformations we have $\delta n_{+, l, m}(\hat{k})=\delta n_{-, l, m}(\hat{k})$, while pure spin density deformations are described by $\delta n_{+, l, m}(\hat{k})=-\delta n_{-, l, m}(\hat{k})$. The general response function for a redistribution $\delta n_{\sigma}(\hat{k})$ with the anisotropy $Y_{l m}\left(\theta_{\boldsymbol{k}}, \phi_{\boldsymbol{k}}\right)$ is given by
$$
\begin{align*}
\chi_{l, m}=\frac{\chi_{l, m}^{(0)}}{1+\frac{F_{l}^{s, a}}{2 l+1}}
\end{align*}
$$
This comes from here:
**General response and distribution deformations**: We consider a force field $F$ with conjugate "polarisation" $P$ which yields a modification of the quasi-particle dispersion,
$$
\begin{align*}
\delta \epsilon_{\sigma}(\boldsymbol{k})=-\alpha \lambda_{\sigma}(\boldsymbol{k}) F \quad \text { and } \quad \delta \tilde{\epsilon}_{\sigma}(\boldsymbol{k})=-\tilde{\alpha} \lambda_{\sigma}(\boldsymbol{k}) F
\end{align*}
$$
where we assume that $\lambda_{\sigma}(\boldsymbol{k})=Y_{l, m}\left(\theta_{\hat{k}}, \phi_{\hat{k}}\right)=(-1)^{m} Y_{l,-m}^{*}\left(\theta_{\hat{k}}, \phi_{\hat{k}}\right)$ without spin dependence. Then we can write
$$
\begin{align*}
\delta \tilde{\epsilon}_{\sigma}(\boldsymbol{k})=\delta \epsilon_{\sigma}(\boldsymbol{k})+\frac{1}{\Omega} \sum_{k^{\prime}, \sigma^{\prime}} f_{\sigma \sigma^{\prime}}\left(\hat{k}, \hat{k}^{\prime}\right) \delta n_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right)=\delta \epsilon_{\sigma}(\boldsymbol{k})+\frac{1}{\Omega} \sum_{k^{\prime}, \sigma^{\prime}} f_{\sigma \sigma^{\prime}}\left(\hat{k}, \hat{k}^{\prime}\right) \frac{\partial n_{\sigma^{\prime}}}{\partial \tilde{\epsilon}_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right)} \delta \tilde{\epsilon}_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right)
\end{align*}
$$

In the last step we take for $\delta n_{\sigma^{\prime}}\left(\boldsymbol{k}^{\prime}\right)$ the self-consistent value taking the feedback of the quasi-particle coupling into account. We now use the relation
$$
\begin{align*}
f^{s, a}\left(\hat{k}, \hat{k}^{\prime}\right)=\sum_{l^{\prime}=0}^{\infty} f_{l}^{s, a} P_{l^{\prime}}\left(\hat{k} \cdot \hat{k}^{\prime}\right)=4 \pi \sum_{l^{\prime}=0}^{\infty} \frac{f_{l^{\prime}}^{s, a}}{2 l^{\prime}+1} \sum_{m^{\prime}=-l^{\prime}}^{+l^{\prime}} Y_{l^{\prime} m^{\prime}}\left(\theta_{\hat{k}}, \phi_{\hat{k}}\right) Y_{l^{\prime} m^{\prime}}^{*}\left(\theta_{\hat{k}^{\prime}}, \phi_{\hat{k}^{\prime}}\right)
\end{align*}
$$

and find,

$$
\begin{align*}
\tilde{\alpha} \lambda_{\sigma}(\boldsymbol{k}) F=\alpha \lambda_{\sigma}(\boldsymbol{k}) F-N\left(\epsilon_{F}\right) \sum_{l^{\prime}=0}^{\infty} \frac{f_{l^{\prime}}^{s}}{2 l^{\prime}+1} \sum_{m^{\prime}=-l^{\prime}}^{+l^{\prime}} Y_{l^{\prime} m^{\prime}}\left(\theta_{\hat{k}}, \phi_{\hat{k}}\right) \tilde{\alpha} \underbrace{\int d \Omega_{{k^{\prime}}^{\prime}} Y_{l^{\prime} m^{\prime}}^{*}\left(\theta_{\hat{k}^{\prime}}, \phi_{\hat{k}^{\prime}}\right) \lambda_{\sigma}\left(\boldsymbol{k}^{\prime}\right)}_{\delta_{l l^{\prime}} \delta_{m m^{\prime}}} F
\end{align*}
$$
which leads straightforwardly to
$$
\begin{align*}
\tilde{\alpha}=\alpha-\tilde{\alpha} \frac{F_{l}^{s}}{2 l+1} \quad \Rightarrow \quad \tilde{\alpha}=\frac{\alpha}{1+\frac{F_{l}^{s}}{2 l+1}}
\end{align*}
$$

Now the polarisation is calculated which we may define as
$$
\begin{align*}
\begin{aligned}
P & =\frac{1}{\Omega} \sum_{\boldsymbol{k}, \sigma} \alpha \lambda_{\sigma}(\boldsymbol{k})^{*} \delta n_{\sigma}(\boldsymbol{k})=\frac{1}{\Omega} \sum_{\boldsymbol{k}, \sigma} \alpha \lambda_{\sigma}(\boldsymbol{k})^{*} \frac{\partial n_{\sigma}}{\partial \tilde{\epsilon}_{\sigma}(\boldsymbol{k})} \delta \tilde{\epsilon}_{\sigma}(\boldsymbol{k})=\frac{1}{\Omega} \sum_{\boldsymbol{k}, \sigma} \alpha \delta\left(\epsilon_{\sigma}(\boldsymbol{k})-\epsilon_{F}\right) \tilde{\alpha}|\lambda(\boldsymbol{k})|^{2} F \\
& =\alpha \tilde{\alpha} N\left(\epsilon_{F}\right) F \int \frac{d \Omega_{\boldsymbol{k}}}{4 \pi}|\lambda(\boldsymbol{k})|^{2}=\frac{\alpha \tilde{\alpha} N\left(\epsilon_{F}\right) F}{4 \pi}
\end{aligned}
\end{align*}
$$
such that the linear response is given by
$$
\begin{align*}
\chi=\frac{P}{F}=\frac{\alpha^{2} N\left(\epsilon_{F}\right)}{4 \pi\left(1+\frac{F_{i}^{s}}{2 l+1}\right)}.
\end{align*}
$$

Stability of the Fermi liquid against any of these deformations requires
$$
\begin{align*}
1+\frac{F_{l}^{s, a}}{2 l+1}>0
\end{align*}
$$

If for any deformation channel $l$ this conditions is violated one talks about a "Pomeranchuck instability".Generally, the renormalisation of the Fermi liquid leads to a change in the Wilson ratio, defined as
$$
\begin{align*}
\frac{R}{R_{0}}=\frac{\chi}{\chi_{0}} \frac{\gamma_{0}}{\gamma}=\frac{1}{1+F_{0}^{a}}
\end{align*}
$$
where $R_{0}=\chi_{0} / \gamma_{0}=6 \mu_{B}^{2} / \pi^{2} k_{B}^{2}$. Note that the Wilson ratio does not depend on the effective mass. A remarkable feature of the Fermi liquid theory is that even very strongly interacting Fermions remain Fermi liquids, notably the quantum liquid ${ }^{3} \mathrm{He}$ and so-called heavy Fermion systems, which are compounds of transition metals and rare earths. Both are strongly renormalised Fermi liquids. For ${ }^{3} \mathrm{He}$ we give some of the parameters in Table 5.1 both for zero pressure and for pressures just below the critical pressure at which He solidifies ( $p_{c} \approx 2.5 \mathrm{MPa}=25 \mathrm{bar}$ ).

| Pressure  | $m^{*} / m$ | $F_{0}^{s}$ | $F_{0}^{a}$ | $F_{1}^{s}$ | $\kappa / \kappa_{0}$ | $\chi / \chi_{0}$ |
| :-------: | :---------: | :---------: | :---------: | :---------: | :-------------------: | :---------------: |
|   $p=0$   |     3.0     |    10.1     |    -0.52    |     6.0     |         0.27          |        6.3        |
| $p<p_{c}$ |     6.2     |     94      |    -0.74    |    15.7     |         0.065         |        24         |

The trends show obviously, that the higher the applied pressure is, the denser the liquid becomes and the stronger the quasi-particles interact. Approaching the solidification the compressibility is reduced, the quasi-particles become heavier (slower) and the magnetic response increases drastically. Finally the heavy Fermion systems are characterised by the extraordinary enhancements of the effective mass which for many of these compounds lie between 100 and 1000 times higher than the bare electron mass (e.g. $\mathrm{CeAl}_{3}, \mathrm{UBe}_{13}$, etc.). This large masses lead the notion of almost localised Fermi liquids, since the large effective mass is induced by the hybridisation of itinerant conduction electrons with strongly interacting (localised) electron states in partially filled $4 f$ - or $5 f$-orbitals of Lanthanide and Actinide atoms, respectively.

---
## 5.3 Microscopic Considerations
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=121&selection=165,0,167,26|•]]

A rigorous derivation of Landau's Fermi liquid theory requires methods of quantum field theory and would go beyond the scope of these lectures. However, plain Rayleigh-Schrödinger theory applied to a simple model allows to gain some insights into the microscopic fundament of this phenomenologically based theory. In the following, we consider a model of Fermions with contact interaction $U \delta\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)$, described by the Hamiltonian
$$
\begin{align*}
\begin{aligned}
\mathcal{H} & =\sum_{\boldsymbol{k}, s} \epsilon_{\boldsymbol{k}} \widehat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k} \boldsymbol{s}}+\int d^{3} r d^{3} r^{\prime} \widehat{\Psi}_{\uparrow}(\boldsymbol{r})^{\dagger} \widehat{\Psi}_{\downarrow}\left(\boldsymbol{r}^{\prime}\right)^{\dagger} U \delta\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right) \widehat{\Psi}_{\downarrow}\left(\boldsymbol{r}^{\prime}\right) \widehat{\Psi}_{\uparrow}(\boldsymbol{r}) \\
& =\sum_{\boldsymbol{k}, s} \epsilon_{\boldsymbol{k}} \widehat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k} \boldsymbol{s}}+\frac{U}{\Omega} \sum_{\boldsymbol{k}, \boldsymbol{k}, \boldsymbol{k}, \boldsymbol{q}} \widehat{c}_{\boldsymbol{k}+\boldsymbol{q} \uparrow}^{\dagger} \widehat{c}_{\boldsymbol{k}^{\prime}-\boldsymbol{q} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k}^{\prime} \downarrow} \widehat{c}_{\boldsymbol{k} \uparrow} .
\end{aligned}
\end{align*}
$$
where $\epsilon_{\boldsymbol{k}}=\hbar^{2} \boldsymbol{k}^{2} / 2 m$ is a parabolic dispersion of non-interacting electrons. We previously noticed that, in order to find well-defined quasi-particles, the interaction between the Fermions has to be short ranged. This specially holds for the contact interaction.

### 5.3.1 Landau Parameters

Starting form the Hamiltonian before, we will determine Landau parameters for a corresponding Fermi liquid theory. For a given momentum distribution $n_{\boldsymbol{k} s}=\left\langle c_{\boldsymbol{k} s}^{\dagger} c_{\boldsymbol{k} s}\right\rangle=n_{\boldsymbol{k} s}^{(0)}+\delta n_{\boldsymbol{k} s}$, we can expand the energy resulting form equation (5.87) following the Rayleigh-Schrödinger perturbation
method,
$$
\begin{align*}
E=E^{(0)}+E^{(1)}+E^{(2)}+\cdots
\end{align*}
$$
with
$$
\begin{align*}
\begin{aligned}
& E^{(0)}=\sum_{\boldsymbol{k}, \boldsymbol{s}} \epsilon_{\boldsymbol{k}} n_{\boldsymbol{k} \boldsymbol{s}}, \\
& E^{(1)}=\frac{U}{\Omega} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}} n_{\boldsymbol{k} \uparrow} n_{\boldsymbol{k}^{\prime} \downarrow}, \\
& E^{(2)}=\frac{U^{2}}{\Omega^{2}} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}, \boldsymbol{q}} \frac{n_{\boldsymbol{k} \uparrow} n_{\boldsymbol{k}^{\prime} \downarrow}\left(1-n_{\boldsymbol{k}+\boldsymbol{q} \uparrow}\right)\left(1-n_{\boldsymbol{k}^{\prime}-\boldsymbol{q} \downarrow}\right)}{\epsilon_{\boldsymbol{k}}+\epsilon_{\boldsymbol{k}^{\prime}}-\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}^{\prime}-\boldsymbol{q}}} .
\end{aligned}
\end{align*}
$$

The second order term $E^{(2)}$ describes virtual processes corresponding to a pair of particle-hole excitations. The numerator of this term can be split into four different contributions.
We first consider the term quadratic in $n_{\boldsymbol{k}}$ and combine it with the first order term $E^{(1)}$, which has the same structure,
$$
\begin{align*}
\tilde{E}^{(1)}=E^{(1)}+\frac{U^{2}}{\Omega^{2}} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}, \boldsymbol{q}} \frac{n_{\boldsymbol{k} \uparrow} n_{\boldsymbol{k}^{\prime} \downarrow}}{\epsilon_{\boldsymbol{k}}+\epsilon_{\boldsymbol{k}^{\prime}}-\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}^{\prime}-\boldsymbol{q}}} \approx \frac{\tilde{U}}{\Omega} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}} n_{\boldsymbol{k} \uparrow} n_{\boldsymbol{k}^{\prime} \downarrow} .
\end{align*}
$$

In the last step, we defined the renormalised interaction $\tilde{U}$ through,
$$
\begin{align*}
\tilde{U}=U+\frac{U^{2}}{\Omega} \sum_{\boldsymbol{q}} \frac{1}{\epsilon_{\boldsymbol{k}}+\epsilon_{\boldsymbol{k}^{\prime}}-\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}^{\prime}-\boldsymbol{q}}}
\end{align*}
$$

In principle, $\tilde{U}$ depends on the wave vectors $\boldsymbol{k}$ and $\boldsymbol{k}^{\prime}$. However, when the wave vectors are restricted to the Fermi surface $\left(|\boldsymbol{k}|=\left|\boldsymbol{k}^{\prime}\right|=k_{F}\right)$, and if the range of the interaction $\ell$ is small compared to the mean electron spacing, i.e., $k_{F} \ell \ll 1,$ this dependency may be neglected.
We should be careful with our choice of a contact interaction, since it would lead to a divergence in the large- $q$ range. A cutoff for $q$ of order $Q_{c} \sim \ell^{-1}$ would regularise the integral which is dominated by the large- $q$ part. Thus we may use the following expansion,

$$
\begin{aligned}
\frac{1}{\Omega} \sum_{\boldsymbol{q}} \frac{1}{\epsilon_{\boldsymbol{k}}+\epsilon_{\boldsymbol{k}^{\prime}}-\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}^{\prime}-\boldsymbol{q}}} 
&= \frac{1}{(2 \pi)^{3} \hbar^{2}} \int_{0}^{Q_{c}} d q \, q^{2} \int d \Omega_{q} \frac{m}{\left(\boldsymbol{k}^{\prime}-\boldsymbol{k}\right) \cdot \boldsymbol{q} - \boldsymbol{q}^{2}} \\
&= \frac{m}{(2 \pi)^{2} \hbar^{2}} \int d q \, q \int_{-1}^{+1} \frac{d \cos \theta}{K \cos \theta - q} \\
&= \frac{m}{(2 \pi)^{2} \hbar^{2}} \int_{0}^{Q_{c}} d q \, q \ln \left| \frac{q-K}{q+K} \right| \\
&= -\frac{m}{(2 \pi)^{2} \hbar^{2}} \left( Q_{c} + \frac{K^{2} - Q_{c}^{2}}{2 K} \ln \left| \frac{Q_{c} - K}{Q_{c} + K} \right| \right) \\
&\approx -\frac{2 m Q_{c}}{(2 \pi)^{2} \hbar^{2}} \left( 1 - \frac{K^{2}}{Q_{c}^{2}} + O\left(\frac{K^{4}}{Q_{c}^{4}}\right) \right) \\
&= -N(\epsilon_{F}) \frac{Q_{c}}{2 k_{F}} \left( 1 - \frac{K^{2}}{Q_{c}^{2}} + O\left(\frac{K^{4}}{Q_{c}^{4}}\right) \right).
\end{aligned}
$$

where we use $K=\left|\boldsymbol{k}^{\prime}-\boldsymbol{k}\right| \leq 2 k_{F} \ll Q_{c}$. From this we conclude that the momentum dependence of $\tilde{U}$ is indeed weak.
Since the term quartic in $n_{\boldsymbol{k}}$ vanishes due to symmetry, the remaining contribution to $E^{(2)}$ is cubic in $n_{\boldsymbol{k}}$ and reads
$$
\begin{align*}
\tilde{E}^{(2)}=-\frac{\tilde{U}^{2}}{\Omega^{2}} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}, \boldsymbol{q}} \frac{n_{\boldsymbol{k} \uparrow} n_{\boldsymbol{k}^{\prime} \downarrow}\left(n_{\boldsymbol{k}+\boldsymbol{q} \uparrow}+n_{\boldsymbol{k}^{\prime}-\boldsymbol{q} \downarrow}\right)}{\epsilon_{\boldsymbol{k}}+\epsilon_{\boldsymbol{k}^{\prime}}-\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}^{\prime}-\boldsymbol{q}}} .
\end{align*}
$$

We replaced $U^{2}$ by $\tilde{U}^{2}$, which is admissible at this order of the perturbative expansion. The variation of the energy $E$ with respect to $\delta n_{\boldsymbol{k} \uparrow}$ can easily be calculated,
$$
\begin{align*}
\tilde{\epsilon}_{\uparrow}(\boldsymbol{k})=\epsilon_{\boldsymbol{k}}+\frac{\tilde{U}}{\Omega} \sum_{\boldsymbol{k}^{\prime}} n_{\boldsymbol{k}^{\prime} \downarrow}-\frac{\tilde{U}^{2}}{\Omega^{2}} \sum_{\boldsymbol{k}^{\prime}, \boldsymbol{q}} \frac{n_{\boldsymbol{k}^{\prime} \downarrow}\left(n_{\boldsymbol{k}+\boldsymbol{q} \uparrow}+n_{\boldsymbol{k}^{\prime}-\boldsymbol{q} \downarrow}\right)-n_{\boldsymbol{k}+\boldsymbol{q} \uparrow} n_{\boldsymbol{k}^{\prime}-\boldsymbol{q} \downarrow}}{\epsilon_{\boldsymbol{k}}+\epsilon_{\boldsymbol{k}^{\prime}}-\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}^{\prime}-\boldsymbol{q}}},
\end{align*}
$$
and an analogous expression is found for $\epsilon_{\downarrow}(\boldsymbol{k})$. The coupling parameters $f_{\sigma \sigma^{\prime}}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)$ may be determined using the definition (5.26). Starting with $f_{\uparrow \uparrow}\left(\boldsymbol{k}_{F}, \boldsymbol{k}_{F}^{\prime}\right)$ with wave-vectors on the Fermi surface $\left(\left|\boldsymbol{k}_{F}\right|=\left|\boldsymbol{k}_{F}^{\prime}\right|=k_{F}\right)$, the terms contributing to the coupling can be written as
$$
\begin{align*}
\begin{gathered}
\left.\frac{\tilde{U}^{2}}{\Omega^{2}} \sum_{\boldsymbol{k}^{\prime}, \boldsymbol{q}} n_{\boldsymbol{k}+\boldsymbol{q} \uparrow} \frac{n_{\boldsymbol{k}^{\prime}-\boldsymbol{q} \downarrow}-n_{\boldsymbol{k}^{\prime} \downarrow}}{\epsilon_{\boldsymbol{k}}+\epsilon_{\boldsymbol{k}^{\prime}}-\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}^{\prime}-\boldsymbol{q}}} \stackrel{\stackrel{\boldsymbol{k}+\boldsymbol{q} \rightarrow \boldsymbol{k}_{F}^{\prime}}{\longrightarrow}}{ } \frac{1}{\Omega} \sum_{\boldsymbol{k}_{F}^{\prime}} n_{\boldsymbol{k}_{F}^{\prime} \uparrow} \frac{\tilde{U}^{2}}{\Omega} \sum_{\boldsymbol{k}^{\prime}} \frac{n_{\boldsymbol{k}^{\prime}-\boldsymbol{q} \downarrow}^{(0)}-n_{\boldsymbol{k}^{\prime} \downarrow}^{(0)}}{\epsilon_{\boldsymbol{k}^{\prime}}-\epsilon_{\boldsymbol{k}^{\prime}-\boldsymbol{q}}}\right|_{\boldsymbol{q}=\boldsymbol{k}_{F}^{\prime}-\boldsymbol{k}_{F}} \\
=-\frac{1}{\Omega} \sum_{\boldsymbol{k}_{F}^{\prime}} n_{\boldsymbol{k}_{F}^{\prime} \uparrow} \frac{\tilde{U}^{2}}{2} \chi_{0}\left(\boldsymbol{k}_{F}^{\prime}-\boldsymbol{k}_{F}\right),
\end{gathered}
\end{align*}
$$
where we consider $n_{\boldsymbol{k}_{F}^{\prime} \uparrow}=n_{\boldsymbol{k}_{F}^{\prime} \uparrow}^{(0)}+\delta n_{\boldsymbol{k}_{F}^{\prime} \uparrow}$. Note that the part in this term which depends on $n_{\boldsymbol{k}_{F}^{\prime} \uparrow}^{(0)}$ will contribute the ground state energy in Landau's energy functional. Here, $\chi_{0}(\boldsymbol{q})$ is the static Lindhard susceptibility as it was defined in (3.63). With the help of equation (5.26), it follows immediately, that
$$
\begin{align*}
f_{\uparrow \uparrow}\left(\boldsymbol{k}_{F}, \boldsymbol{k}_{F}^{\prime}\right)=f_{\downarrow \downarrow}\left(\boldsymbol{k}_{F}, \boldsymbol{k}_{F}^{\prime}\right)=\frac{\tilde{U}^{2}}{2} \chi_{0}\left(\boldsymbol{k}_{F}-\boldsymbol{k}_{F}^{\prime}\right) .
\end{align*}
$$

The other couplings are obtained in a similar way, resulting in
$$
\begin{align*}
f_{\uparrow \downarrow}\left(\boldsymbol{k}_{F}, \boldsymbol{k}_{F}^{\prime}\right)=f_{\downarrow \uparrow}\left(\boldsymbol{k}_{F}, \boldsymbol{k}_{F}^{\prime}\right)=\tilde{U}-\frac{\tilde{U}^{2}}{2}\left[2 \tilde{\chi}_{0}\left(\boldsymbol{k}_{F}+\boldsymbol{k}_{F}^{\prime}\right)-\chi_{0}\left(\boldsymbol{k}_{F}-\boldsymbol{k}_{F}^{\prime}\right)\right],
\end{align*}
$$
where the function $\tilde{\chi}_{0}(\boldsymbol{q})$ is defined as
$$
\begin{align*}
\tilde{\chi}_{0}(\boldsymbol{q})=\frac{1}{\Omega} \sum_{\boldsymbol{k}^{\prime}} \frac{n_{\boldsymbol{k}^{\prime}+\boldsymbol{q} \uparrow}^{(0)}+n_{\boldsymbol{k}^{\prime} \downarrow}^{(0)}}{2 \epsilon_{F}-\epsilon_{\boldsymbol{k}^{\prime}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}^{\prime}}}
\end{align*}
$$

If the couplings are be parametrised by the angle $\theta$ between $\boldsymbol{k}_{F}$ and $\boldsymbol{k}_{F}^{\prime}$, they can be expressed as
$$
\begin{align*}
\begin{aligned}
f_{\sigma \sigma^{\prime}}(\theta)=\frac{\tilde{U}}{2} & {\left[\left(1+\frac{\tilde{U} N\left(\epsilon_{F}\right)}{4}\left(2+\frac{\cos \theta}{2 \sin (\theta / 2)} \ln \frac{1+\sin (\theta / 2)}{1-\sin (\theta / 2)}\right)\right) \delta_{\sigma \sigma^{\prime}}\right.} \\
& \left.-\left(1+\frac{\tilde{U} N\left(\epsilon_{F}\right)}{4}\left(1-\frac{\sin (\theta / 2)}{2} \ln \frac{1+\sin (\theta / 2)}{1-\sin (\theta / 2)}\right)\right) \sigma \sigma^{\prime}\right] .
\end{aligned}
\end{align*}
$$

Finally, we are in the position to determine the most important Landau parameters by matching the expressions (5.102) and (5.103) to the parametrisation (5.105),
$$
\begin{align*}
\begin{aligned}
F_{0}^{s} & =\tilde{u}\left[1+\tilde{u}\left[1+\frac{1}{6}(2+\ln (2))\right]\right] \\
F_{0}^{a} & =-\tilde{u}\left[1+\tilde{u}\left[1-\frac{2}{3}(1-\ln (2))\right]\right] \\
F_{1}^{s} & =\tilde{u}^{2} \frac{2}{15}(7 \ln (2)-1) \\
& \approx 0.449 \tilde{u}^{2} \\
& \approx 0.514 \tilde{u}^{2}
\end{aligned}
\end{align*}
$$
where $\tilde{u}=\tilde{U} N\left(\epsilon_{F}\right) / 2$ has been introduced for better readability. Since the Landau parameter $F_{1}^{s}$ is responsible for the modification of the effective mass $m^{*}$ compared to the bare mass $m$, $m^{*}$ is enhanced compared to $m$ for both attractive $(U<0)$ and repulsive $(U>0)$ interactions. Obviously, the sign of the interaction $U$ does not affect the renormalisation of the effective mass $m^{*}$. This is so, because the existence of an interaction (whatever sign it has) between the particles enforces the motion of many particles whenever one is moved. The behaviour of the susceptibility and the compressibility depends on the sign of the interaction. If the interaction is repulsive $(\tilde{u}>0)$, the compressibility decreases $\left(F_{0}^{s}>0\right)$, implying that it is harder to compress the Fermi liquid. The susceptibility is enhanced $\left(F_{0}^{a}<0\right)$ in this case, so that it is easier to polarise the spins of the electrons. Conversely, for attractive interactions ( $\tilde{u}<0$ ), the compressibility is enhanced due to a negative Landau parameter $F_{0}^{s}$, whereas the susceptibility is suppressed with a factor $1 /\left(1+F_{0}^{a}\right)$, with $F_{0}^{a}>0$. The attractive case is more subtle because the Fermi liquid becomes unstable at low temperatures, turning into a superfluid or superconductor, by forming so-called Cooper pairs. This represents another non-trivial Fermi surface instability.

### 5.3.2 Distribution Function

Finally, we examine the effect of interactions on the ground state properties, using again Rayleigh-Schrödinger perturbation theory. The calculation of the corrections to the ground state $\left|\Psi_{0}\right\rangle$, the filled Fermi sea can be expressed as
$$
\begin{align*}
|\Psi\rangle=\left|\Psi^{(0)}\right\rangle+\left|\Psi^{(1)}\right\rangle+\cdots
\end{align*}
$$
where
$$
\begin{align*}
\begin{aligned}
\left|\Psi^{(0)}\right\rangle & =\left|\Psi_{0}\right\rangle \\
\left|\Psi^{(1)}\right\rangle & =\frac{U}{\Omega} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}, \boldsymbol{q}} \sum_{s, s^{\prime}} \frac{\widehat{c}_{\boldsymbol{k}+\boldsymbol{q}, s}^{\dagger} \widehat{c}_{\boldsymbol{k}^{\prime}-\boldsymbol{q}, s^{\prime}}^{\dagger}{\widehat{\boldsymbol{k}^{\prime}, s^{\prime}}}^{\epsilon_{\boldsymbol{k}}} \widehat{c}_{\boldsymbol{k}, s}}{\epsilon_{\boldsymbol{k}^{\prime}}-\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}^{\prime}-\boldsymbol{q}}}\left|\Psi_{0}\right\rangle
\end{aligned}
\end{align*}
$$

The state $\left|\Psi_{0}\right\rangle$ represents the ground state of non-interacting Fermions. The lowest order correction involves particle-hole excitations, depleting the Fermi sea by lifting particles virtually above the Fermi energy. How the correction (5.112) affects the distribution function, will be discussed next. The momentum distribution $n_{\boldsymbol{k} s}=\left\langle\widehat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k} s}\right\rangle$ is obtain as the expectation value,
$$
\begin{align*}
n_{\boldsymbol{k} s}=\frac{\langle\Psi| \wedge_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k} s}|\Psi\rangle}{\langle\Psi \mid \Psi\rangle}=n_{\boldsymbol{k} s}^{(0)}+\delta n_{\boldsymbol{k} s}^{(2)}+\cdots
\end{align*}
$$
where $n_{\boldsymbol{k s}}^{(0)}$ is the unperturbed distribution $\Theta\left(k_{F}-|\boldsymbol{k}|\right)$, and
$$
\begin{align*}
\delta n_{\boldsymbol{k} s}^{(2)}=\left\{\begin{array}{ll}
-\frac{U^{2}}{\Omega^{2}} \sum_{\boldsymbol{k}_{1}, \boldsymbol{k}_{2}, \boldsymbol{k}_{3}} \frac{\left(1-n_{\boldsymbol{k}_{1}}\right)\left(1-n_{\boldsymbol{k}_{2}}\right) n_{\boldsymbol{k}_{3}}}{\left(\epsilon_{\boldsymbol{k}}+\epsilon_{\boldsymbol{k}_{3}}-\epsilon_{\boldsymbol{k}_{1}}-\epsilon_{\boldsymbol{k}_{2}}\right)^{2}} \delta_{\boldsymbol{k}+\boldsymbol{k}_{3}, \boldsymbol{k}_{1}+\boldsymbol{k}_{2}} & |\boldsymbol{k}|<k_{F} \\
\frac{U^{2}}{\Omega^{2}} \sum_{\boldsymbol{k}_{1}, \boldsymbol{k}_{2}, \boldsymbol{k}_{3}} \frac{n_{\boldsymbol{k}_{1}} n_{\boldsymbol{k}_{2}}\left(1-n_{\boldsymbol{k}_{3}}\right)}{\left(\epsilon_{\boldsymbol{k}_{1}}+\epsilon_{\boldsymbol{k}_{2}}-\epsilon_{\boldsymbol{k}}-\epsilon_{\boldsymbol{k}_{3}}\right)^{2}} \delta_{\boldsymbol{k}+\boldsymbol{k}_{3}, \boldsymbol{k}_{1}+\boldsymbol{k}_{2}} & |\boldsymbol{k}|>k_{F}
\end{array} .\right.
\end{align*}
$$

This yields the modification of the distribution functions as shown here: 

![Attachments/Notes/Solid-State Theory/IMG-0126164742360.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164742360.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=125&rect=150,582,452,707|•]]

It allows us also to determine the size of the discontinuity of the distribution function at the Fermi surface,
$$
\begin{align*}
n_{\boldsymbol{k}_{F^{-}}}-n_{\boldsymbol{k}_{F}{ }^{+}}=1-\left(\frac{U N\left(\epsilon_{F}\right)}{2}\right)^{2} \ln (2),
\end{align*}
$$
where
$$
\begin{align*}
n_{\boldsymbol{k}_{F^{ \pm}}}=\lim _{|\boldsymbol{k}|-k_{F} \rightarrow 0_{ \pm}}\left(n_{\boldsymbol{k}}^{(0)}+\delta n_{\boldsymbol{k}}^{(2)}\right) .
\end{align*}
$$

The jump of $n_{\boldsymbol{k}}$ at the Fermi surface is reduced independently of the sign of the interaction. The reduction is quadratic in the perturbation parameter $U N\left(\epsilon_{F}\right)$. This jump is also a measure for the weight of the quasi-particle state at the Fermi surface.

### 5.3.3 Fermi Liquid in One Dimension?

Within a perturbative approach the Fermi liquid theory can be justified for a three-dimensional system and we recognise the one-to-one correspondence between bare electrons and quasi-particles renormalised by (short-ranged) interactions. Now we would like to show that within the same approach problems appear in one-dimensional systems, which are conceptional nature and hint that interaction Fermions in one dimension would not form a Fermi liquid, but a Luttinger liquid, as we will motivate briefly below.
The Landau parameters have been expressed above in terms of the response functions $\chi_{0}(\boldsymbol{q}=$ $\left.\boldsymbol{k}_{F}-\boldsymbol{k}_{F}^{\prime}\right)$ and $\tilde{\chi}_{0}\left(\boldsymbol{q}=\boldsymbol{k}_{F}-\boldsymbol{k}_{F}^{\prime}\right)$. For the one-dimensional system, as given in Eqs.(5.102-5.104), the relevant contributions come from two configurations, since there are two Fermi points only (instead of a two-dimensional Fermi surface),
$$
\begin{align*}
\left(k_{F}, k_{F}^{\prime}\right) \quad \Rightarrow \quad q=k_{F}-k_{F}^{\prime}=0, \pm 2 k_{F} .
\end{align*}
$$

We find that the response functions show singularities for some of these momenta, and we obtain
$$
\begin{align*}
f_{\uparrow \uparrow}\left( \pm k_{F}, \pm k_{F}\right)=f_{\downarrow \downarrow}\left( \pm k_{F}, \mp k_{F}\right) \rightarrow \infty
\end{align*}
$$
as well as
$$
\begin{align*}
f_{\uparrow \downarrow}\left(k_{F}, \pm k_{F}\right)=f_{\downarrow \uparrow}\left(k_{F}, \mp k_{F}\right) \rightarrow \infty
\end{align*}
$$
giving rise to the divergence of all Landau parameters. Therefore the perturbative approach to a Landau Fermi liquid is not allowed for the one-dimensional Fermi system.

[^9]The same message is obtained when looking at the momentum distribution form which had in three dimensions a step giving a measure for the (reduced but finite) quasi-particle weight. The analogous calculation as in Sect.5.3.2 leads here to
$$
\begin{align*}
n_{\boldsymbol{k s}}^{(2)} \approx\left\{\begin{array}{cl}
\frac{1}{8 \pi^{2}} \frac{U^{2}}{\hbar^{2} v_{F}^{2}} \ln \frac{k_{+}}{k-k_{F}} & k>k_{F} \\
-\frac{1}{8 \pi^{2}} \frac{U^{2}}{\hbar^{2} v_{F}^{2}} \ln \frac{k_{-}}{k_{F}-k} & k<k_{F}
\end{array} .\right.
\end{align*}
$$

Here, $k_{ \pm}$are cutoff parameters of the order of the Fermi wave vector $k_{F}$. Apparently the quality of the perturbative calculation deteriorates as $k \rightarrow k_{F \pm}$, since we encounter a logarithmic divergence from both sides.

![Attachments/Notes/Solid-State Theory/IMG-0126164742582.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164742582.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=126&rect=163,438,437,583|•]]

Indeed, a more elaborated approach shows that the distribution function is continuous at $k=k_{F}$ in one dimension, without any jump. Correspondingly, the quasi-particle weight vanishes and the elementary excitations cannot be described by Fermionic quasi-particles but rather by collective modes. Landau's Theory of Fermi liquids is inappropriate for such systems. This kind of behaviour, where the quasi-particle weight vanishes, can be described by the so-called bosonisation of Fermions in one dimension, a topic that is beyond the scope of these lectures. However, a result worth mentioning, shows that the Fermionic excitations in one dimensions decay into independent charge and spin excitations, the so-called spin-charge separation. This behaviour can be understood with the naive picture of a half-filled lattice with predominantly antiferromagnetic spin correlations. In this case both charge excitations (empty or doubly occupied lattice site) and spin excitations (two parallel neighbouring spins) represent different kinds of domain walls, and are free to move at different velocities.

---
# 6 Transport Properties of Metals
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=127&selection=2,0,2,30|•]]

The ability to transport electrical current is one of the most remarkable and characteristic properties of metals. At zero temperature, a ideal pure metal is a perfect electrical conductor, i.e., its resistivity is zero. However, disorder due to impurities and lattice defects influence the transport and yield a finite residual resistivity, as found in real materials. At finite temperature, electron-electron and electron-phonon scattering lead to a temperature-dependent resistivity. Furthermore, an external magnetic field may influence the resistivity, a phenomenon called magnetoresistance, and also leads to the previously studied Hall effect. In this chapter, the effects of a magnetic field will not be considered. Finally, heat transport, which is also mostly mediated by electrons in metals, is going hand in hand with the electric transport. In this context, transport phenomena such as thermoelectricity (Seebeck and Peltier effect) will be analyzed here.

---
## 6.1 Electrical Conductivity
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=127&selection=23,0,25,23|•]]

In a normal metal, an electrical current density $\boldsymbol{j}(\boldsymbol{q}, \omega$ ) (in $\boldsymbol{q}, \omega$-space) is induced by an applied electrical field $\boldsymbol{E}(\boldsymbol{q}, \omega)$. For a homogeneous isotropic metal, we define the scalar (note that in an anisotropic material, the conductivity $\hat{\sigma}$ would be a full 3 $\times$ 3 tensor) electrical conductivity $\sigma(\boldsymbol{q}, \omega)$ within linear response, through
$$
\begin{align*}
\boldsymbol{j}(\boldsymbol{q}, \omega)=\sigma(\boldsymbol{q}, \omega) \boldsymbol{E}(\boldsymbol{q}, \omega) .
\end{align*}
$$

The current density $\boldsymbol{j}(\boldsymbol{q}, \omega)$ is related to the charge density $\rho(\boldsymbol{r}, t)=-e n(\boldsymbol{r}, t)$, via the continuity equation
$$
\begin{align*}
\frac{\partial}{\partial t} \rho(\boldsymbol{r}, t)+\boldsymbol{\nabla} \cdot \boldsymbol{j}(\boldsymbol{r}, t)=0
\end{align*}
$$
or, in Fourier transformed,
$$
\begin{align*}
\omega \rho(\boldsymbol{q}, \omega)-\boldsymbol{q} \cdot \boldsymbol{j}(\boldsymbol{q}, \omega)=0
\end{align*}
$$

It is interesting to see that a relation between the conductivity $\sigma(\boldsymbol{q}, \omega)$ and the dynamical dielectric susceptibility $\chi_{0}(\boldsymbol{q}, \omega)$ defined in equation (3.73) of chapter 3 arises from the equations (6.1) and (6.3). For this, we can calculate
$$
\begin{align*}
\begin{aligned}
\chi_{0}(\boldsymbol{q}, \omega) & =-\frac{\rho(\boldsymbol{q}, \omega)}{e V(\boldsymbol{q}, \omega)}=-\frac{\boldsymbol{q} \cdot \boldsymbol{j}(\boldsymbol{q}, \omega)}{e \omega V(\boldsymbol{q}, \omega)} \\
& =-\frac{\sigma(\boldsymbol{q}, \omega)}{\omega e} \frac{\boldsymbol{q} \cdot \boldsymbol{E}(\boldsymbol{q}, \omega)}{V(\boldsymbol{q}, \omega)}=-\frac{\sigma(\boldsymbol{q}, \omega)}{\omega} \frac{\left[i \boldsymbol{q}^{2} V(\boldsymbol{q}, \omega)\right]}{e^{2} V(\boldsymbol{q}, \omega)} .
\end{aligned}
\end{align*}
$$

In the first line, we used the definition (3.73) of $\chi_{0}(\boldsymbol{q}, \omega)$ and the continuity equation (6.3). To the second line, we made use of the definition (6.1) of $\sigma(\boldsymbol{q}, \omega)$ and then replaced $\boldsymbol{E}(\boldsymbol{q}, \omega)$ by $i \boldsymbol{q} V(\boldsymbol{q}, \omega) / e$, which is nothing else than the Fourier transform of the equation
$$
\begin{align*}
-e \boldsymbol{E}(\boldsymbol{r}, t)=-\boldsymbol{\nabla}_{r} V(\boldsymbol{r}, t) .
\end{align*}
$$

From this calculations we conclude that
$$
\begin{align*}
\chi_{0}(\boldsymbol{q}, \omega)=\frac{-i q^{2}}{e^{2} \omega} \sigma(\boldsymbol{q}, \omega),
\end{align*}
$$
and thus
$$
\begin{align*}
\varepsilon(\boldsymbol{q}, \omega)=1-\frac{4 \pi e^{2}}{q^{2}} \chi_{0}(\boldsymbol{q}, \omega)=1+\frac{4 \pi i}{\omega} \sigma(\boldsymbol{q}, \omega) .
\end{align*}
$$

In the limit of large wavelengths $q \ll k_{F}$, we know from previous discussions that $\varepsilon(0, \omega)=$ $1-\omega_{p}^{2} / \omega^{2}$. Then the conductivity simplifies to
$$
\begin{align*}
\sigma(\omega)=\frac{i \omega_{p}^{2}}{4 \pi \omega} .
\end{align*}
$$

One might conclude from this result that the conductivity is purely imaginary in the small- $q$ limit. However, this conclusion is wrong, since the real part of $\sigma(\omega)$ is related to its imaginary part via the Kramers-Kronig relation. Defining $\sigma_{1}\left(\sigma_{2}\right)$ as the real (imaginary) part of $\sigma$, this relation states that
$$
\begin{align*}
\sigma_{1}(\omega)=-\frac{1}{\pi} \mathcal{P}\left[\int_{-\infty}^{+\infty} d \omega^{\prime} \frac{1}{\omega-\omega^{\prime}} \sigma_{2}\left(\omega^{\prime}\right)\right]
\end{align*}
$$
and
$$
\begin{align*}
\sigma_{2}(\omega)=\frac{1}{\pi} \mathcal{P}\left[\int_{-\infty}^{+\infty} d \omega^{\prime} \frac{1}{\omega-\omega^{\prime}} \sigma_{1}\left(\omega^{\prime}\right)\right] .
\end{align*}
$$

A simple calculation with $\sigma_{2}$ from equation (6.8), yields
$$
\begin{align*}
\begin{aligned}
& \sigma_{1}(\omega)=\frac{\omega_{p}^{2}}{4} \delta(\omega) \\
& \sigma_{2}(\omega)=\frac{\omega_{p}^{2}}{4 \pi \omega}
\end{aligned}
\end{align*}
$$

Obviously this metal is perfectly conducting ( $\sigma \rightarrow \infty$ for $\omega \rightarrow 0$ ), which comes from the fact that we considered systems without dissipation so far. An additional important property coming from complex analysis, is the existence of the so-called f-sum rule,
$$
\begin{align*}
\int_{0}^{\infty} d \omega^{\prime} \sigma_{1}\left(\omega^{\prime}\right)=\frac{1}{2} \int_{-\infty}^{+\infty} d \omega^{\prime} \sigma_{1}\left(\omega^{\prime}\right)=\frac{\omega_{p}^{2}}{8}=\frac{\pi e^{2} n}{2 m} .
\end{align*}
$$

This relation is valid for all electronic systems (including semiconductors).

---
## 6.2 Transport Equations and Relaxation Time
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=129&selection=0,0,2,39|•]]

We introduce here Boltzmann's transport theory as as rather simple and efficient way to deal with dissipation and momentum relaxation of non-stationary electronic states in metals.

### 6.2.1 The Boltzmann Equation

In order to tackle the problem of a finite conductivity, we use a formalism similar to Landau's Fermi liquid theory, based on a distribution function of quasi-particles. In transport theory, the distribution function can be used to describe the deviation of the system from an equilibrium. If the system is isolated from external influence, equilibrium is reached through relaxation after some time, a process which is accompanied with an increase of entropy as discussed in statistical physics. Analogously to the theory of transport phenomena, let us introduce the distribution function $f(\boldsymbol{k}, \boldsymbol{r}, t)$, where
$$
\begin{align*}
f(\boldsymbol{k}, \boldsymbol{r}, t) \frac{d^{3} k}{(2 \pi)^{3}} d^{3} r
\end{align*}
$$
is the number of particles in the infinitesimal phase space volume $d^{3} r d^{3} k /(2 \pi)^{3}$ centred at $(\boldsymbol{k}, \boldsymbol{r})$, at time $t$. Note that, for simplicity, we neglect the electron spin. In general there would be a distribution function for each spin species. Such a description is only applicable if the temporal and spacial variations occur at long wavelengths and small frequencies, respectively, i.e., if typically $q \ll k_{F}$ and $\hbar \omega \ll \epsilon_{F}$. The total number of particles $N$ is given by
$$
\begin{align*}
N=2 \int \frac{d^{3} k}{(2 \pi)^{3}} d^{3} r f(\boldsymbol{k}, \boldsymbol{r}, t) .
\end{align*}
$$

The equilibrium distribution $f_{0}$ for the Fermionic quasi-particles is given by the Fermi-Dirac distribution,
$$
\begin{align*}
f_{0}(\boldsymbol{k}, \boldsymbol{r}, t)=\frac{1}{e^{\left(\epsilon_{\boldsymbol{k}}-\mu\right) / k_{B} T}+1},
\end{align*}
$$
and is independent of space $\boldsymbol{r}$ and time $t$. The general distribution function $f(\boldsymbol{k}, \boldsymbol{r}, t)$ obeys the Boltzmann equation
$$
\begin{align*}
\frac{D}{D t} f(\boldsymbol{k}, \boldsymbol{r}, t)=\left(\frac{\partial}{\partial t}+\dot{\boldsymbol{r}} \cdot \nabla_{\boldsymbol{r}}+\dot{\boldsymbol{k}} \cdot \nabla_{\boldsymbol{k}}\right) f(\boldsymbol{k}, \boldsymbol{r}, t)=\left(\frac{\partial f}{\partial t}\right)_{\text {coll }}
\end{align*}
$$
where the substantial derivative in phase space $D / D t$ is defined as the total temporal derivative in a frame moving with the phase-space volume. The right-hand side is called collision integral and describes the rate of change in $f$ due to collision processes. Without scattering, the equation (6.17) would represent a continuity equation for $f$. Now, consider the temporal derivatives of $\boldsymbol{r}$ and $\boldsymbol{k}$ from a quasi-classical viewpoint. In absence of a magnetic field, we find
$$
\begin{align*}
\begin{aligned}
\dot{\boldsymbol{r}} & =\frac{\hbar \boldsymbol{k}}{m} \\
\hbar \dot{\boldsymbol{k}} & =-e \boldsymbol{E}
\end{aligned}
\end{align*}
$$
i.e., the force $\hbar \dot{\boldsymbol{k}}$, which is our central interest, originates from the electric field. The collision integral may be expressed via the probability $W\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)$ to scatter a quasi-particle with wave vector $\boldsymbol{k}$ to $\boldsymbol{k}^{\prime}$. For simple scattering on static potentials, the collision integral is given by
$$
\begin{align*}
\begin{aligned}
\left(\frac{\partial f}{\partial t}\right)_{\text {coll }}=-\int \frac{d^{3} k^{\prime}}{(2 \pi)^{3}} & {\left[W\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) f(\boldsymbol{k}, \boldsymbol{r}, t)\left(1-f\left(\boldsymbol{k}^{\prime}, \boldsymbol{r}, t\right)\right)\right.} \\
& \left.-W\left(\boldsymbol{k}^{\prime}, \boldsymbol{k}\right) f\left(\boldsymbol{k}^{\prime}, \boldsymbol{r}, t\right)(1-f(\boldsymbol{k}, \boldsymbol{r}, t))\right] .
\end{aligned}
\end{align*}
$$

The first term, describing the scattering from $\boldsymbol{k}$ to $\boldsymbol{k}^{\prime}$, requires a quasi-particle at $\boldsymbol{k}$, hence the factor $f(\boldsymbol{k}, \boldsymbol{r}, t)$, and the absence of a particle at $\boldsymbol{k}^{\prime}$, therefore the factor $1-f\left(\boldsymbol{k}^{\prime}, \boldsymbol{r}, t\right)$. Note that if spin was considered here, this collision term would account for scattering processes where spin is conserved. However, there are in principle also scattering process where the electron spin can be transferred to the lattice (spin-orbit coupling) or an impurity (Kondo effect) and would not be conserved independently. This process describes the scattering out of the phase space volume $d^{3} k /(2 \pi)^{3}$, i.e., reduces the number of particles in it. Therefore, it enters the collision integral with negative sign. The second term describes the opposite process and, according to its positive sign, increases the number of particles in the phase space volume $d^{3} k /(2 \pi)^{3}$. For a system with time inversion symmetry, we have $W\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)=W\left(\boldsymbol{k}^{\prime}, \boldsymbol{k}\right)$. Assuming this, we can combine both terms and end up with
$$
\begin{align*}
\left(\frac{\partial f}{\partial t}\right)_{\mathrm{coll}}=\int \frac{d^{3} k^{\prime}}{(2 \pi)^{3}} W\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)\left[f\left(\boldsymbol{k}^{\prime}, \boldsymbol{r}, t\right)-f(\boldsymbol{k}, \boldsymbol{r}, t)\right]
\end{align*}
$$

The Boltzmann equation is a complicated integro-differential equation and suitable approximations are required. Usually, we study processes close to equilibrium, where the deviation $f(\boldsymbol{k}, \boldsymbol{r}, t)-f_{0}(\boldsymbol{k}, \boldsymbol{r}, t)$ is small compared to $f(\boldsymbol{k}, \boldsymbol{r}, t)$. Here, to generalise we assume $f_{0}(\boldsymbol{k}, \boldsymbol{r}, t)$ to be a local equilibrium distribution for which the temperature $T=T(\boldsymbol{r}, t)$ and the chemical potential $\mu=\mu(\boldsymbol{r}, t)$ vary slowly in $\boldsymbol{r}$ and $t$, such that $f_{0}(\boldsymbol{k}, \boldsymbol{r}, t)$ can still be expressed via the local Fermi-Dirac distribution (6.16). At small deviations from equilibrium (or local equilibrium), we can approximate the collision integral by the relaxation-time approximation. For simplicity, we assume that the system is isotropic, such that the quasi-particle dispersion $\epsilon_{\boldsymbol{k}}$ only depends on $|\boldsymbol{k}|$ and, furthermore, that the scattering probabilities are elastic and depend on the angle between $\boldsymbol{k}$ and $\boldsymbol{k}^{\prime}$. Then, we make the Ansatz
$$
\begin{align*}
\left(\frac{\partial f}{\partial t}\right)_{\mathrm{coll}}=-\frac{f(\boldsymbol{k}, \boldsymbol{r}, t)-f_{0}(\boldsymbol{k}, \boldsymbol{r}, t)}{\tau\left(\epsilon_{\boldsymbol{k}}\right)}
\end{align*}
$$

The time scale $\tau\left(\epsilon_{\boldsymbol{k}}\right)$ is called relaxation time and gives the characteristic time within which the system relaxes to equilibrium.

Consider the simplest case of a system at constant temperature subject to a small uniform electric field $\boldsymbol{E}(t)$. With $f(\boldsymbol{k}, \boldsymbol{r}, t)=f_{0}(\boldsymbol{k}, \boldsymbol{r}, t)+\delta f(\boldsymbol{k}, \boldsymbol{r}, t)$, we can calculate the Fourier-transform of Boltzmann equation (6.17) in relaxation-time approximation and find, after linearising in $\delta f$,
$$
\begin{align*}
-i \omega \delta f(\boldsymbol{k}, \omega)-\frac{e \boldsymbol{E}(\omega)}{\hbar} \nabla_{\boldsymbol{k}} f_{0}(\boldsymbol{k})=-\frac{\delta f(\boldsymbol{k}, \omega)}{\tau\left(\epsilon_{\boldsymbol{k}}\right)}
\end{align*}
$$
with
$$
\begin{align*}
f(\boldsymbol{k}, t)=\int_{-\infty}^{+\infty} \frac{d \omega}{2 \pi} f(\boldsymbol{k}, \omega) e^{-i \omega t} \quad \text { and } \quad \boldsymbol{E}(\boldsymbol{k}, t)=\int_{-\infty}^{+\infty} \frac{d \omega}{2 \pi} \boldsymbol{E}(\boldsymbol{k}, \omega) e^{-i \omega t}
\end{align*}
$$

In order to come to this expression, we used that $f(\boldsymbol{k}, \boldsymbol{r}, t)=f(\boldsymbol{k}, t)$ for $E=E(t)$ are spacially uniform, and assumed for linearising equation (6.24) that $\delta f \propto|\boldsymbol{E}|$. Thus, the equation (6.24) is consistent to linear order in $|\boldsymbol{E}|$ and can be easily solved as
$$
\begin{align*}
\delta f(\boldsymbol{k}, \omega)=\frac{e \tau \boldsymbol{E}(\omega)}{\hbar(1-i \omega \tau)} \nabla_{\boldsymbol{k}} f_{0}(\boldsymbol{k})=\frac{e \tau \boldsymbol{E}(\omega)}{\hbar(1-i \omega \tau)} \frac{\partial f_{0}(\epsilon)}{\partial \epsilon} \nabla_{\boldsymbol{k}} \epsilon_{\boldsymbol{k}}
\end{align*}
$$

This result leads straightforwardly to the quasi-particle current $\boldsymbol{j}(\omega)$,
$$
\begin{align*}
\boldsymbol{j}(\omega)=-2 e \int \frac{d^{3} k}{(2 \pi)^{3}} \boldsymbol{v}_{\boldsymbol{k}} f(\boldsymbol{k}, \omega)=-\frac{e^{2}}{4 \pi^{3}} \int d^{3} k \frac{\tau\left(\epsilon_{\boldsymbol{k}}\right)\left[\boldsymbol{E}(\omega) \cdot \boldsymbol{v}_{\boldsymbol{k}}\right] \boldsymbol{v}_{\boldsymbol{k}}}{1-i \omega \tau\left(\epsilon_{\boldsymbol{k}}\right)} \frac{\partial f_{0}\left(\epsilon_{\boldsymbol{k}}\right)}{\partial \epsilon_{\boldsymbol{k}}}
\end{align*}
$$

with $\hbar \boldsymbol{v}_{\boldsymbol{k}}=\nabla_{\boldsymbol{k}} \epsilon_{\boldsymbol{k}}$, which in turn can be simplified to

$$
\begin{align*}
j_{\alpha}(\omega)=\sum_{\beta} \sigma_{\alpha \beta}(\omega) E_{\beta}(\omega),
\end{align*}
$$
where the conductivity tensor $\sigma_{\alpha \beta}$ reads
$$
\begin{align*}
\sigma_{\alpha \beta}=-\frac{e^{2}}{4 \pi^{3}} \int d \epsilon \frac{\partial f_{0}(\epsilon)}{\partial \epsilon} \frac{\tau(\epsilon)}{1-i \omega \tau(\epsilon)} \int d \Omega_{\boldsymbol{k}} k^{2} \frac{v_{\alpha \boldsymbol{k}} v_{\beta \boldsymbol{k}}}{\hbar\left|\boldsymbol{v}_{\boldsymbol{k}}\right|} .
\end{align*}
$$

This corresponds to the Ohmic law. Note that $\sigma_{\alpha \beta}=\sigma \delta_{\alpha \beta}$ in isotropic systems. We recover in this case the expression (6.1) for the conductivity, which we introduced at the beginning of this chapter. It is also important to notice that $\partial f_{0}(\epsilon) / \partial \epsilon$ concentrates around $\epsilon=\mu$ for $T \ll T_{F}$. In the following, we consider the result (6.29) for an isotropic system in different limiting cases.

### 6.2.2 The Drude Form

For $\omega \tau \gg 1$ equation (6.29) becomes independent on the relaxation time. In an isotropic system $\sigma_{\alpha \beta}=\sigma \delta_{\alpha \beta}$ at low temperatures $T \ll T_{F}$, this leads to
$$
\begin{align*}
\sigma(\omega) \approx i \frac{e^{2} m^{2} v_{F}}{4 \pi^{3} \hbar^{3} \omega} \int d \Omega_{\boldsymbol{k}} v_{F z}^{2}=i \frac{e^{2} n}{m \omega}=i \frac{\omega_{p}^{2}}{4 \pi \omega},
\end{align*}
$$
which reproduces the result from equation (6.8). However now, this does not mean that our system is a perfect conductor, as becomes clear when we turn towards small $\omega(\omega \tau \ll 1)$. We are actually interested in the static limit, where the "dc conductivity" ( $\omega=0$; "dc" means "direct current") reduces to
$$
\begin{align*}
\sigma=-\frac{e^{2} n}{m} \int d \epsilon \frac{\partial f_{0}}{\partial \epsilon} \tau(\epsilon)=\frac{e^{2} n \bar{\tau}}{m}=\frac{\omega_{p}^{2} \bar{\tau}}{4 \pi} .
\end{align*}
$$

Since the function $\partial f_{0} / \partial \epsilon$ is strongly peaked around the Fermi energy $\epsilon_{F}$, we introduced a mean relaxation time $\bar{\tau}=-\int d \epsilon \tau(\epsilon) \partial f_{0} / \partial \epsilon$. In the form (6.31), the result recovers the well-known Drude form of the conductivity. Note, that the phenomenological Drude theory of electron transport can be deduced from purely classical considerations.

If the relaxation time $\tau$ depends only weakly on energy, we can simply calculate the optical conductivity at finite frequency,
$$
\begin{align*}
\sigma(\omega)=\frac{\omega_{p}^{2}}{4 \pi} \frac{\bar{\tau}}{1-i \omega \bar{\tau}}=\frac{\omega_{p}^{2}}{4 \pi}\left(\frac{\bar{\tau}}{1+\omega^{2} \bar{\tau}^{2}}+\frac{\bar{\tau}^{2} \omega}{1+\omega^{2} \bar{\tau}^{2}}\right)=\sigma_{1}+i \sigma_{2} .
\end{align*}
$$

Note that the real part satisfies the $f$-sum rule,
$$
\begin{align*}
\int_{0}^{\infty} d \omega \sigma_{1}(\omega)=\int_{0}^{\infty} d \omega \frac{\omega_{p}^{2}}{4 \pi} \frac{\bar{\tau}}{1+\omega^{2} \bar{\tau}^{2}}=\frac{\omega_{p}^{2}}{8}
\end{align*}
$$
and that $\sigma(\omega)$ recovers the behaviour of equation (6.12) in the limit $\bar{\tau} \rightarrow \infty .$ Note that $\sigma_{1}(\omega)$ has Lorentzian form and naturally leads to a delta function:
$$
\begin{align*}
\sigma_{1}(\omega)=\frac{\omega_{p}^{2}}{4 \pi} \frac{\bar{\tau}}{1+\omega^{2} \bar{\tau}^{2}} \quad \xrightarrow{\bar{\tau} \rightarrow \infty} \quad \frac{\omega_{p}^{2}}{4} \delta(\omega)
\end{align*}
$$ 
This form of the conductivity yields the dielectric function
$$
\begin{align*}
\varepsilon(\omega)=1-\frac{\omega_{p}^{2} \bar{\tau}}{\omega(i+\omega \bar{\tau})}=1-\frac{\omega_{p}^{2} \bar{\tau}^{2}}{1+\omega^{2} \bar{\tau}^{2}}+\frac{i}{\omega} \frac{\omega_{p}^{2} \bar{\tau}}{1+\omega^{2} \bar{\tau}^{2}}
\end{align*}
$$

which can be used to discuss the optical properties of metals. The complex index of refraction $n+i k$ is given through $(n+i \kappa)^{2}=\varepsilon$. Next, we discuss three important regimes of frequency. To probe optical properties we consider the reflectivity of light hitting a metal surface perpendicularly. Then the reflectivity is given by

$$
\begin{align*}
R=\frac{(n-1)^{2}+\kappa^{2}}{(n+1)^{2}+\kappa^{2}}
\end{align*}
$$

Inside the metal the light propagation is renormalised by $k \rightarrow k(n+i \kappa)$ with $k=\omega / c$ such that
$$
\begin{align*}
e^{i k(n+i \kappa) z}=e^{i k n z} e^{-\kappa k z}=e^{i k n z} e^{-z / \delta}
\end{align*}
$$
defining the penetration length
$$
\begin{align*}
\delta=\frac{c}{\omega \kappa}
\end{align*}
$$

**Relaxation-free regime $\left(\omega \bar{\tau} \ll 1 \ll \omega_{p} \bar{\tau}\right)$**

In this limit, the real $\left(\varepsilon_{1}\right)$ and imaginary $\left(\varepsilon_{2}\right)$ part of the dielectric function (6.35) read
$$
\begin{align*}
\begin{aligned}
& \varepsilon_{1}(\omega) \approx-\omega_{p}^{2} \bar{\tau}^{2} \\
& \varepsilon_{2}(\omega) \approx \frac{\omega_{p}^{2} \bar{\tau}}{\omega}
\end{aligned}
\end{align*}
$$

The real part $\varepsilon_{1}$ is constant and negative, whereas the imaginary part $\varepsilon_{2}$ becomes singular in the limit $\omega \rightarrow 0$. Thus, the refractive index turns out to be dominated by $\varepsilon_{2}$
$$
\begin{align*}
n(\omega) \approx \kappa(\omega) \approx \sqrt{\frac{\varepsilon_{2}(\omega)}{2}} \approx \sqrt{\frac{\omega_{p}^{2} \bar{\tau}}{2 \omega}} \gg 1
\end{align*}
$$

As a result, the reflectivity $R$ is practically $100 \%$. The absorption index $\kappa(\omega)$ determines the penetration depth $\delta$ through
$$
\begin{align*}
\delta(\omega)=\frac{c}{\omega \kappa(\omega)} \approx \frac{c}{\omega_{p}} \sqrt{\frac{2}{\omega \bar{\tau}}}
\end{align*}
$$

With this, the skin depth of a metal with the famous relation $\delta(\omega) \propto \omega^{-1 / 2}$ is reproduced within the relaxation time approximation of the Boltzmann equation. While length $\delta(\omega)$ is in the centimetre range for frequencies of the order of $10-100 \mathrm{~Hz}$, the Debye length $c / \omega_{p}$, is only of the order of $100 \text{ }\pu{Å}$ for $\hbar \omega_{p}=10 \mathrm{eV}$.
**Relaxation regime** $\left(1 \ll \omega \bar{\tau} \ll \omega_{p} \bar{\tau}\right)$
Here, we can expand the dielectric function (6.35) in $(\omega \bar{\tau})^{-1}$, yielding
$$
\begin{align*}
\varepsilon(\omega)=1-\frac{\omega_{p}^{2}}{\omega^{2}}+i \frac{\omega_{p}^{2}}{\omega^{3} \bar{\tau}}
\end{align*}
$$

The real part $\varepsilon_{1} \approx-\omega_{p}^{2} / \omega^{2}$ is large and negative and dominates in magnitude over $\varepsilon_{2}$. For the optical properties, we obtain
$$
\begin{align*}
\begin{aligned}
\kappa(\omega) & \approx \frac{\omega_{p}}{\omega} \\
n(\omega) & \approx \frac{\omega_{p}}{2 \omega^{2} \bar{\tau}}
\end{aligned}
\end{align*}
$$

We find $\kappa(\omega) \gg n(\omega) \gg 1$, which implies a large reflectivity of metals in this frequency range as well. Note that visible frequencies are part of this regime:

![Attachments/Notes/Solid-State Theory/IMG-0126164742782.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164742782.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=134&rect=184,476,413,756|•]]
![Attachments/Notes/Solid-State Theory/IMG-0126164742983.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164742983.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=135&rect=184,597,412,758|•]]

The frequency dependence of the penetration depth becomes weak, and its magnitude is approximately given by the Debye length, $\delta \sim c / \omega_{p}$.

**Ultraviolet regime** ( $\omega \approx \omega_{p}$ and $\omega>\omega_{p}$ )
In this regime, the imaginary part of $\varepsilon$ is approximately zero and the real part has the well known form
$$
\begin{align*}
\varepsilon_{1}(\omega)=1-\frac{\omega_{p}^{2}}{\omega^{2}},
\end{align*}
$$
such that the reflectivity drops drastically, from close to unity towards zero (cf. Figure 6.1). Metals become nearly transparent in the range $\omega>\omega_{p}$. In Figure 6.1, one also notices the rapid increase in the penetration depth $\delta$, showing the transparency of the metal.

In all these considerations, we have neglected the contributions to the dielectric function due to the ion cores (core electrons and nuclei). This may be incorporated in the following approximate way:
$$
\begin{align*}
\varepsilon_{1}(\omega)=\varepsilon_{\infty}-\frac{\omega_{p}^{2}}{\omega^{2}},
\end{align*}
$$

This influences the reflecting properties of metals; particularly, the value of $\omega_{p}$ is reduced to $\omega_{p}^{\prime}=\omega_{p} / \sqrt{\varepsilon_{\infty}}$, where $\varepsilon_{\infty}$ is the frequency-independent part of the dielectric function. With this, the reflectivity for frequencies above $\omega_{p}^{\prime}$ approaches $R_{\infty}=\left(\varepsilon_{\infty}-1\right)^{2} /\left(\varepsilon_{\infty}+1\right)^{2}$, and $0<R_{\infty}<1$ (see Figure 6.2 and 6.3).

**Colour of metals**

The practically full reflectance for frequencies below $\omega_{p}$ is a typical feature of metals. Since for most metals, the plasma frequency lies well above the range of visible light ( $\hbar \omega=1.5-3.5 \mathrm{eV}$ ), they appear shiny to our eye. While most polished metal surfaces appear shiny white, like silver, there are some metals with a colour, like gold which is yellow and copper which is reddish. White shininess results from reflectance on the whole visible frequency range, while for coloured metals there is a certain threshold above which the reflectance drops and frequencies towards blue are not or much weaker reflected. In most cases this drop is not connected with the plasma frequency, but with light absorption due to interband transitions. Note that the single band metal which was used for the Drude theory does not allow for optical absorption apart from the plasma excitation. Interband transition play a particularly important role for the noble metals, $\mathrm{Cu}, \mathrm{Ag}$ and Au . For these metals, the reflectance drop is caused by the transition from the completely occupied $d$-band to the partially filled $s$-band, $3 d \rightarrow 4 s$ in case of Cu . For copper, this drop appears below 2.5 eV so that predominantly red light is reflected (see Figure 6.2). For gold, this threshold frequency is slightly higher, but still in the visible, while for silver, it lies beyond the visible range (see Figure 6.2). For all these cases, the plasma frequency is not so easily recognisable in the reflectance. On the other hand, aluminium shows a reflectance rather close to the expected behaviour. Also here, there is a small reduction of the reflection due to interband absorption. However, this effect is weak and the strong drop occurs at the plasma frequency of $\hbar \omega_{p}=15.8 \mathrm{eV}$. Like silver also polished aluminium is white shiny.

### 6.2.3 The Relaxation Time

By replacing the collision integral by a relaxation time approximation, we implicitly introduced a connection between the scattering rate $W\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)$ and the relaxation time $\tau$. This relation,
$$
\begin{align*}
\frac{f(\boldsymbol{k})-f_{0}(\boldsymbol{k})}{\tau\left(\epsilon_{\boldsymbol{k}}\right)}=\int \frac{d^{3} k^{\prime}}{(2 \pi)^{3}} W\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)\left\{f(\boldsymbol{k})-f\left(\boldsymbol{k}^{\prime}\right)\right\}
\end{align*}
$$
will be studied for an isotropic system, with elastic scattering, and a small external field $\boldsymbol{E}$. The solution of equation (6.24) is of the form
$$
\begin{align*}
f(\boldsymbol{k})=f_{0}(\boldsymbol{k})+A(k) \boldsymbol{k} \cdot \boldsymbol{E},
\end{align*}
$$
such that
$$
\begin{align*}
f(\boldsymbol{k})-f\left(\boldsymbol{k}^{\prime}\right)=A(k)\left(\boldsymbol{k}-\boldsymbol{k}^{\prime}\right) \cdot \boldsymbol{E} .
\end{align*}
$$
Without loss of generality, we define $\hat{z} \| \boldsymbol{k}$, and introduce the parametrisation of the angles $\theta,$ polar angle of $\boldsymbol{E}$ and $\theta^{\prime}\left(\phi^{\prime}\right)$ polar (azimuth) angle of $\boldsymbol{k}^{\prime}$ ), leading to
$$
\begin{align*}
\begin{aligned}
\boldsymbol{k} \cdot \boldsymbol{E} & =k E \cos \theta \\
\boldsymbol{k} \cdot \boldsymbol{k}^{\prime} & =k k^{\prime} \cos \theta^{\prime} \\
\boldsymbol{k}^{\prime} \cdot \boldsymbol{E} & =k^{\prime} E\left(\cos \theta \cos \theta^{\prime}+\sin \theta \sin \theta^{\prime} \cos \phi^{\prime}\right)
\end{aligned}
\end{align*}
$$

For elastic scattering, $k=k^{\prime}$, we obtain
$$
\begin{align*}
f(\boldsymbol{k})-f\left(\boldsymbol{k}^{\prime}\right)=A(k) k E\left[\cos \theta\left(1-\cos \theta^{\prime}\right)-\sin \theta \sin \theta^{\prime} \cos \phi^{\prime}\right]
\end{align*}
$$

Inserting this into the right-hand side of equation (6.48), the $\phi^{\prime}$-dependent part of the integration vanishes for an isotropic system, and we are left with
$$
\begin{align*}
\begin{aligned}
\frac{f(\boldsymbol{k})-f_{0}(\boldsymbol{k})}{\tau\left(\epsilon_{\boldsymbol{k}}\right)} & =\int d \Omega_{\boldsymbol{k}^{\prime}}\left[f(\boldsymbol{k})-f\left(\boldsymbol{k}^{\prime}\right)\right] W\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) \\
& =A(k) k E \cos \theta \int d \Omega_{\boldsymbol{k}^{\prime}}\left(1-\cos \theta^{\prime}\right) W\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) \\
& =\left[f(\boldsymbol{k})-f_{0}(\boldsymbol{k})\right] \int d \Omega_{\boldsymbol{k}^{\prime}}\left(1-\cos \theta^{\prime}\right) W\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)
\end{aligned}
\end{align*}
$$

The factor $\left[f(\boldsymbol{k})-f_{0}(\boldsymbol{k})\right]$ can be dropped on both sides of the equation, resulting in
$$
\begin{align*}
\frac{1}{\tau\left(\epsilon_{\boldsymbol{k}}\right)}=\int \frac{d^{3} k^{\prime}}{(2 \pi)^{3}} W\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)\left(1-\cos \theta^{\prime}\right)
\end{align*}
$$
where one should remember that, for elastic scattering, the quasi-particle energy $\epsilon_{\boldsymbol{k}}=\epsilon_{\boldsymbol{k}^{\prime}}$ is conserved in the collision process. The scattering probability $W\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)$ accounts for this restriction. In the next few sections we discuss different scattering processes, looking at collision probabilities, relaxation times and the resulting conductivity and resistivity contributions.

---
## 6.3 Impurity Scattering
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=135&selection=622,0,624,19|•]]

### 6.3.1 Potential Scattering

Every deviation from the perfect periodicity of the ionic lattice is a source of quasi-particle scattering, leading to the loss of their original momentum. Without translational invariance,
the conservation of momentum is lost, the energy, however, is still conserved. Possible static scatterers are among others vacancies, dislocations, and impurity atoms. The scattering rate $W\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)$ for a potential $\widehat{V}$ can be determined applying Fermi's golden rule,
$$
\begin{align*}
W\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)=\frac{2 \pi}{\hbar} n_{\mathrm{imp}}\left|\left\langle\boldsymbol{k}^{\prime}| \widehat{V}| \boldsymbol{k}\right\rangle\right|^{2} \delta\left(\epsilon_{\boldsymbol{k}}-\epsilon_{\boldsymbol{k}^{\prime}}\right)
\end{align*}
$$
This corresponds to the first Born approximation in scattering theory. Note, that this approximation is insufficient to describe resonant scattering. By $n_{\mathrm{imp}}$ we denote the density of impurities, assuming only one species of them. For small densities $n_{\text {imp }}$, it is reasonable to neglect interference effects between different impurities. According to equation (6.58), the relaxation time $\tau$ of a quasi-particle with momentum $\hbar \boldsymbol{k}$ is given by
$$
\begin{align*}
\begin{aligned}
\frac{1}{\tau(\epsilon_{\boldsymbol{k}})} 
& = \frac{2 \pi}{\hbar} n_{\mathrm{imp}} \int \frac{d^{3} k^{\prime}}{(2 \pi)^{3}} \left| \langle \boldsymbol{k}^{\prime} | \widehat{V} | \boldsymbol{k} \rangle \right|^{2} \left(1 - \hat{k} \cdot \hat{k}^{\prime}\right) \delta(\epsilon_{\boldsymbol{k}} - \epsilon_{\boldsymbol{k}^{\prime}}) \\
& = n_{\mathrm{imp}} (\hat{k} \cdot \boldsymbol{v}_{\boldsymbol{k}}) \int \frac{d \sigma}{d \Omega} (\boldsymbol{k}, \boldsymbol{k}^{\prime}) \left(1 - \hat{k} \cdot \hat{k}^{\prime}\right) \frac{d \Omega_{\boldsymbol{k}^{\prime}}}{4 \pi}.
\end{aligned}
\end{align*}
$$
with the differential scattering cross section $d \sigma / d \Omega$ and $\hat{k}=\boldsymbol{k} /|\boldsymbol{k}|$. Here, we used the connection between Fermi's golden rule and the Born approximation:
The scattering of particles with momentum $\hbar \boldsymbol{k}$ into the solid angle $d \Omega_{\boldsymbol{k}^{\prime}}$ around $\boldsymbol{k}^{\prime}$ yields
$$
\begin{align*}
\begin{aligned}
W(\boldsymbol{k}, \boldsymbol{k}^{\prime}) d \Omega_{\boldsymbol{k}^{\prime}} 
& = \frac{2 \pi}{\hbar \Omega} \sum_{\boldsymbol{k}^{\prime} \in d \Omega_{\boldsymbol{k}^{\prime}}} \left| \langle \boldsymbol{k}^{\prime} | \widehat{V} | \boldsymbol{k} \rangle \right|^{2} \delta(\epsilon_{\boldsymbol{k}} - \epsilon_{\boldsymbol{k}^{\prime}}) \\
& = \frac{2 \pi}{\hbar} \int_{\boldsymbol{k}^{\prime} \in d \Omega_{\boldsymbol{k}^{\prime}}} \frac{d^{3} k^{\prime}}{(2 \pi)^{3}} \left| \langle \boldsymbol{k}^{\prime} | \widehat{V} | \boldsymbol{k} \rangle \right|^{2} \delta(\epsilon_{\boldsymbol{k}} - \epsilon_{\boldsymbol{k}^{\prime}}) \\
& = \frac{2 \pi}{\hbar} \frac{d \Omega_{\boldsymbol{k}^{\prime}}}{4 \pi} N(\epsilon) \left| \langle \boldsymbol{k}^{\prime} | \widehat{V} | \boldsymbol{k} \rangle \right|^{2}.
\end{aligned}
\end{align*}
$$
The scattering per incoming particle current $j_{\text {in }} d \sigma\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)=W\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) d \Omega_{\boldsymbol{k}^{\prime}}$ determines the differential cross section
$$
\begin{align*}
\hat{k} \cdot \boldsymbol{v}_{\boldsymbol{k}} \frac{d \sigma}{d \Omega} (\boldsymbol{k}, \boldsymbol{k}^{\prime}) 
= \frac{2 \pi}{\hbar} \frac{N(\epsilon)}{4 \pi} \left| \langle \boldsymbol{k}^{\prime} | \widehat{V} | \boldsymbol{k} \rangle \right|^{2}.
\end{align*}
$$

Note the difference in the expressions for the relaxation time $\tau$ in equation (6.58) and for the lifetime $\tilde{\tau}$,
$$
\begin{align*}
\frac{1}{\tilde{\tau}}=\int \frac{d^{3} k}{(2 \pi)^{3}} W\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)
\end{align*}
$$
given by Fermi's golden rule. The factor $\left(1-\cos \theta^{\prime}\right)$ in equation (6.58) gives more weight to backscattering $\left(\theta^{\prime} \approx \pi\right)$ compared to forward scattering $\left(\theta^{\prime} \approx 0\right)$, since the former has more influence in impeding transport. This explains why $\tau$ is also termed transport lifetime.

Assuming defects in the form of point charges $Z e$, whose screened potential is
$$
\begin{align*}
\left\langle\boldsymbol{k}^{\prime}\right| \widehat{V}|\boldsymbol{k}\rangle=\frac{4 \pi Z e^{2}}{\left|\boldsymbol{k}-\boldsymbol{k}^{\prime}\right|^{2}+k_{\mathrm{TF}}^{2}}
\end{align*}
$$

In the limit of very strong screening, $k_{\mathrm{TF}} \gg k_{F}$, the differential cross section becomes independent of the deviation $\left(\boldsymbol{k}-\boldsymbol{k}^{\prime}\right)$, the transport and the usual lifetime become equal, $\tau=\tilde{\tau},$ and
$$
\begin{align*}
\frac{1}{\tau} \approx \frac{\pi}{\hbar} N\left(\epsilon_{F}\right) n_{\mathrm{imp}}\left(\frac{4 \pi Z e^{2}}{k_{\mathrm{TF}}^{2}}\right)^{2}
\end{align*}
$$

With this, we are now able to determine the conductivity for scattering on Coulomb defects, assuming $s$-wave scattering only. Then, since $\tau(\epsilon)$ depends weakly on energy, equation (6.31) yields
$$
\begin{align*}
\sigma=\frac{e^{2} n \tau\left(\epsilon_{F}\right)}{m}
\end{align*}
$$
or, for the specific resistivity $\rho=1 / \sigma$,
$$
\begin{align*}
\rho=\frac{m}{e^{2} n \tau\left(\epsilon_{F}\right)} .
\end{align*}
$$

Both $\sigma$ and $\rho$ are independent of temperature. This contribution is called the residual resistivity of a metal, which approaches zero for a perfect material. The temperature dependence of the resistivity is induced in other scattering processes like electron-phonon scattering and electron-electron scattering, which will be considered below. The so-called residual resistance ratio $R R R=R(T=300 K) / R(T=0)$ is an often used quantity to benchmark the quality of a material. It is defined as the ratio between the resistance $R$ at room temperature and the resistance at zero temperature. The bigger the $R R R$, the better the quality of the material. The typical value of $R R R$ for common copper is $40-50$, while the $R R R$ for very clean aluminium reaches values up to 20000 .

### 6.3.2 Kondo Effect

There are impurity atoms inducing so-called resonant scattering. If the resonance occurs close to the Fermi energy, the scattering rate is strongly energy dependent, inducing a more pronounced temperature dependence of the resistivity. An important example is the scattering off magnetic impurities with a spin degree of freedom, yielding a dramatic energy dependence of the scattering rate. This problem was first studied by Kondo in 1964 in order to explain the peculiar minima in resistivity in some materials. The coupling between the local spin impurities $\boldsymbol{S}_{i}$ at $\boldsymbol{R}_{i}$ and the quasi-particle spin $s$ has the exchange form
$$
\begin{align*}
\begin{aligned}
\widehat{V}_{K} & =\sum_{i}\left(\widehat{V}_{K}\right)_{i}=J \sum_{i} \widehat{\boldsymbol{S}}_{i} \cdot \widehat{\boldsymbol{s}}(\boldsymbol{r}) \delta\left(\boldsymbol{r}-\boldsymbol{R}_{i}\right) \\
& =J \sum_{i}\left(\widehat{S}_{i}^{z} \widehat{s}^{z}(\boldsymbol{r})+\frac{1}{2} \widehat{S}_{i}^{+} \widehat{s}^{-}(\boldsymbol{r})+\frac{1}{2} \widehat{S}_{i}^{-} \widehat{s}^{+}(\boldsymbol{r})\right) \delta\left(\boldsymbol{r}-\boldsymbol{R}_{i}\right) \\
& =\frac{J \hbar}{2 \Omega} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}, i}\left[\widehat{S}_{i}^{z}\left(\widehat{c}_{\boldsymbol{k} \uparrow}^{\dagger} \widehat{c}_{\boldsymbol{k}^{\prime} \uparrow}-\widehat{c}_{\boldsymbol{k} \downarrow}^{\dagger} \widehat{\boldsymbol{c}}_{\boldsymbol{k}^{\prime} \downarrow}\right)+S_{i}^{+} \widehat{c}_{\boldsymbol{k} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k}^{\prime} \uparrow}+S_{i}^{-} \widehat{c}_{\boldsymbol{k} \uparrow} \widehat{c}_{\boldsymbol{k}^{\prime} \downarrow}\right] e^{-i\left(\boldsymbol{k}-\boldsymbol{k}^{\prime}\right) \cdot \boldsymbol{R}_{i}} .
\end{aligned}
\end{align*}
$$

Here, it becomes important that spin flip processes, which change the spin state of the impurity and that of the scattered electron, are enabled. The results for the scattering rate are presented here without derivation,
$$
\begin{align*}
W\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right) \approx J^{2} S(S+1)\left[1+2 J N\left(\epsilon_{F}\right) \ln \left(\frac{D}{\left|\epsilon_{\boldsymbol{k}}-\epsilon_{F}\right|}\right)\right]
\end{align*}
$$
where $D$ is the bandwidth and we have assumed that $J N\left(\epsilon_{F}\right) \ll 1$. The relaxation time is found to be
$$
\begin{align*}
\frac{1}{\tau\left(\epsilon_{k}\right)} \approx \frac{J^{2} S(S+1)}{\hbar} N(\epsilon)\left[1+2 J N\left(\epsilon_{F}\right) \ln \left(\frac{D}{\left|\epsilon_{k}-\epsilon_{F}\right|}\right)\right]
\end{align*}
$$

Note that $W\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)$ does not depend on angle, meaning that the process is described by $s$-wave scattering. The energy dependence is singular at the Fermi energy, indicating that we are not dealing with simple resonant potential scattering, but with a much more subtle many-particle effect involving the electrons very near the Fermi surface. The fact that the local spins $\boldsymbol{S}_{i}$ can flip, makes the scattering centre dynamical, because the scatterer is constantly changing. The scattering process of an electron is influenced by previous scattering events, leading to the singularity at $\epsilon_{F}$. This cannot be described within the first Born approximation, but requires at least the second approximation or the full solution. As mentioned before, the resonant behaviour induces a strong temperature dependence of the conductivity. Indeed,

$$
\begin{align*}
\begin{aligned}
\sigma(T) & =\frac{e^{2} k_{F}^{3}}{6 \pi^{2} m} \int d \epsilon \frac{1}{\left.4 k_{B} T \cosh ^{2}\left(\epsilon-\epsilon_{F}\right) / 2 k_{B} T\right)} \tau(\epsilon) \\
& \approx \frac{e^{2} n}{8 m k_{B} T} \int d \tilde{\epsilon} \frac{J^{2} S(S+1)\left[1-2 J N\left(\epsilon_{F}\right) \ln (D / \tilde{\epsilon})\right]}{\cosh ^{2}\left(\tilde{\epsilon} / 2 k_{B} T\right)} .
\end{aligned}
\end{align*}
$$

A simple substitution in the integral leads to
$$
\begin{align*}
\sigma(T) \approx \frac{e^{2} n}{2 m} J^{2} S(S+1)\left[1-2 J N\left(\epsilon_{F}\right) \ln \left(\frac{D}{k_{B} T}\right)\right] .
\end{align*}
$$

Usual contributions to the resistance, like electron-phonon scattering discussed below, typically decrease with temperature. The contribution (6.77) to the conductivity is strongly increasing, inducing a minimum in the resistance, when we crossover from the decreasing behaviour at high temperatures to the low-temperature increase of $\rho(T)$. At even lower temperatures, the conductivity would decrease and eventually even turn negative which is an artifact of our approximation. In reality, the conductivity saturates at a finite value when the temperature is lowered below a characteristic Kondo temperature $T_{K}$,
$$
\begin{align*}
k_{B} T_{K}=D e^{-1 / J N\left(\epsilon_{F}\right)},
\end{align*}
$$
a characteristic energy scale of this system. The real behaviour of the conductivity at temperatures $T \ll T_{K}$ is not accessible by simple perturbation theory. This regime, known as the Kondo problem, represents one of the most interesting correlation phenomena of many-particle physics.

---
## 6.4 Electron-Phonon Scattering
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=138&selection=224,0,226,26|•]]

Even in perfect metals, the conductivity becomes non-zero at finite temperature. The thermally induced distortions of the lattice, phonons, act as fluctuating scattering centres. In the language of electron-phonon interaction, electrons are scattered via absorption and emission of phonons, which induce local fluctuations in volume (cf. Chapter 3). The corresponding coupling term was given in equation (3.149) and simplifies with the definition (3.136) to
$$
\begin{align*}
\mathcal{H}_{\mathrm{int}}=2 i \sum_{\boldsymbol{k}, \boldsymbol{q}, s} \tilde{V}_{\boldsymbol{q}} \sqrt{\frac{\hbar}{2 \rho_{0} \omega_{\boldsymbol{q}}}}|\boldsymbol{q}|\left(\widehat{b}_{\boldsymbol{q}}-\widehat{b}_{-\boldsymbol{q}}^{\dagger}\right) \widehat{c}_{\boldsymbol{k}+\boldsymbol{q}, s}^{\dagger} \widehat{c}_{\boldsymbol{k} s} .
\end{align*}
$$

The interaction is formally similar to the coupling between electrons and photons. The dominant processes consist of single-phonon processes, i.e., the absorption or emission of one phonon. Energy and momentum are conserved, such that, for the scattering of an electron from momentum $\boldsymbol{k}$ to $\boldsymbol{k}^{\prime}$ due to the emission of a phonon with momentum $\boldsymbol{q}$, we have
$$
\begin{align*}
\begin{aligned}
\boldsymbol{k} & =\boldsymbol{k}^{\prime}+\boldsymbol{q}+\boldsymbol{G}, \\
\epsilon_{\boldsymbol{k}} & =\hbar \omega_{\boldsymbol{q}}+\epsilon_{\boldsymbol{k}^{\prime}},
\end{aligned}
\end{align*}
$$

Here, $\omega_{\boldsymbol{q}}=c_{s} q$ is the phonon spectrum, while the reciprocal lattice vector $\boldsymbol{G}$ allows for scattering in nearby Brillouin zones. By this, the phase space available for scattering is strongly reduced, especially near the Fermi energy. Note that $\hbar \omega_{\boldsymbol{q}} \leq \hbar \omega_{D} \ll \epsilon_{F}$. In order to calculate the scattering rates, the matrix elements  of the available processes,

$$
\begin{align*}
\begin{aligned}
\left\langle\boldsymbol{k}+\boldsymbol{q} ; N_{\boldsymbol{q}^{\prime}}\right|\left(\widehat{b}_{\boldsymbol{q}}-\widehat{b}_{-\boldsymbol{q}}^{\dagger}\right) \widehat{c}_{\boldsymbol{k}+\boldsymbol{q}, s}^{\dagger} \widehat{c}_{\boldsymbol{k} s}\left|\boldsymbol{k} ; N_{\boldsymbol{q}^{\prime}}^{\prime}\right\rangle=\langle\boldsymbol{k}+\boldsymbol{q}| \widehat{c}_{\boldsymbol{k}+\boldsymbol{q}, s}^{\dagger} \widehat{s}_{\boldsymbol{k} s}|\boldsymbol{k}\rangle & \left(\sqrt{N_{\boldsymbol{q}^{\prime}}^{\prime}} \delta_{N_{\boldsymbol{q}^{\prime}}, N_{\boldsymbol{q}^{\prime}}^{\prime}-1} \delta_{\boldsymbol{q}, \boldsymbol{q}^{\prime}}\right. \\
& \left.-\sqrt{N_{\boldsymbol{q}^{\prime}}^{\prime}+1} \delta_{N_{\boldsymbol{q}^{\prime}}, N_{\boldsymbol{q}^{\prime}}^{\prime}+1} \delta_{\boldsymbol{q},-\boldsymbol{q}^{\prime}}\right)
\end{aligned}
\end{align*}
$$
need to be calculated. In analogy to the discussion on electromagnetic radiation, the phenomenon of spontaneous phonon emission due to zero-point fluctuations appears. It is formally visible in the additional " +1 " in the factors $\left(N_{ \pm \boldsymbol{q}}\right)+1$. From Fermi's golden rule we obtain
$$
\begin{align*}
\begin{aligned}
& \left(\frac{\partial f}{\partial t}\right)_{\text {coll }}=-\frac{2 \pi}{\hbar} \sum_{\boldsymbol{q}}|g(\boldsymbol{q})|^{2}\left[\left[f(\boldsymbol{k})(1-f(\boldsymbol{k}+\boldsymbol{q}))\left(N_{-\boldsymbol{q}}+1\right)\right.\right. \\
& \left.-f(\boldsymbol{k}+\boldsymbol{q})(1-f(\boldsymbol{k})) N_{-\boldsymbol{q}}\right] \delta\left(\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}+\hbar \omega_{-\boldsymbol{q}}\right) \\
& -\left[f(\boldsymbol{k}+\boldsymbol{q})(1-f(\boldsymbol{k}))\left(N_{\boldsymbol{q}}+1\right)\right. \\
& \left.\left.-f(\boldsymbol{k})(1-f(\boldsymbol{k}+\boldsymbol{q})) N_{\boldsymbol{q}}\right] \delta\left(\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}-\hbar \omega_{\boldsymbol{q}}\right)\right],
\end{aligned}
\end{align*}
$$
where $g(\boldsymbol{q})=\tilde{V}_{\boldsymbol{q}}|\boldsymbol{q}| \sqrt{2 \hbar / \rho_{0} \omega_{\boldsymbol{q}}}$. Each of these four terms describes one of the single phonon scattering processes depicted here:

![Attachments/Notes/Solid-State Theory/IMG-0126164743208.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164743208.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=139&rect=136,417,457,486|•]]

The collision integral leads to a complicated integro-differential equation, whose solution is tedious and would involve the solution of the non-equilibrium phonon-problem as well. Instead of a full rigorous calculation including the non-equilibrium redistribution of phonons, we will consider the behaviour in various temperature regimes by an approximate treatment of the phonons. The characteristic temperature of phonons, the Debye temperature $\Theta_{D} \ll T_{F}$, is much smaller than the Fermi temperature. Hence, the phonon energy is unimportant for the energy conservation, $\epsilon_{\boldsymbol{k}^{\prime}=\boldsymbol{k}+\boldsymbol{q}} \approx \epsilon_{\boldsymbol{k}}$. Therefore we are allowed to impose momentum conservation $\epsilon_{\boldsymbol{k}+\boldsymbol{q}}=\epsilon_{\boldsymbol{k}}$ and consider the lattice distortion as being essentially static, in the sense of an adiabatic Born-Oppenheimer approximation. The approximate collision integral then reads
$$
\begin{align*}
\left(\frac{\partial f}{\partial t}\right)_{\text {coll }}=\frac{2 \pi}{\hbar} \sum_{\boldsymbol{q}}|g(\boldsymbol{q})|^{2} 2 N\left(\omega_{\boldsymbol{q}}\right)[f(\boldsymbol{k}+\boldsymbol{q})-f(\boldsymbol{k})] \delta\left(\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}\right)
\end{align*}
$$
where we assume the occupation of phonon states according to the equilibrium distribution for bosons,
$$
\begin{align*}
N\left(\omega_{\boldsymbol{q}}\right)=\frac{1}{e^{\hbar \omega_{\boldsymbol{q}} / k_{B} T}-1} .
\end{align*}
$$

This approximation includes all important aspects of the electron-phonon scattering we need to derive the temperature dependence of $\rho(T)$.
In analogy to previous approaches, we obtain with relaxation-time Ansatz
$$
\begin{align*}
\frac{1}{\tau\left(\epsilon_{\boldsymbol{k}}\right)}=\frac{2 \pi}{\hbar} \frac{\lambda}{N\left(\epsilon_{F}\right)} \int \frac{d^{3} q}{(2 \pi)^{3}} \hbar \omega_{\boldsymbol{q}} N\left(\omega_{\boldsymbol{q}}\right)(1-\cos \theta) \delta\left(\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}\right)
\end{align*}
$$
where $|\boldsymbol{k}|=|\boldsymbol{k}+\boldsymbol{q}|=k_{F}$, meaning that only the electrons in a thin shell close to the Fermi surface are relevant. Furthermore, we parameterised $g(\boldsymbol{q})$ according to
$$
\begin{align*}
|g(\boldsymbol{q})|^{2}=\frac{\lambda}{2 N\left(\epsilon_{F}\right) \Omega} \hbar \omega_{\boldsymbol{q}},
\end{align*}
$$
where $\lambda$ is a dimensionless electron-phonon coupling constant. In usual metals $\lambda<1$. As in the case of defect scattering, the relaxation time depends only weakly on the electron energy. But, unlike previously, the direct temperature dependence enters via the dependence on temperature of the phonon occupation $N\left(\omega_{\boldsymbol{q}}\right)$.

![Attachments/Notes/Solid-State Theory/IMG-0126164743328.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164743328.webp)
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=140&rect=214,379,369,539|•]]

In order to perform the integration in equation (6.90), we have to re-express $\delta\left(\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}\right)$ by writing
$$
\begin{align*}
\delta\left(\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}\right)=\delta\left(\frac{\hbar^{2}}{2 m}\left(q^{2}-2 k_{F} q \cos \gamma\right)\right)=\frac{m}{\hbar^{2} k_{F} q} \delta\left(\frac{q}{2 k_{F}}-\cos \gamma\right)
\end{align*}
$$
where $\gamma$ is defined in Figure 6.5. From there, we also see that $2 \gamma+\theta=\pi$, and thus, find the relation
$$
\begin{align*}
1-\cos \theta=1+\cos (2 \gamma)=2 \cos ^{2}(\gamma)
\end{align*}
$$

Obviously, we have to integrate $q$ over the range $\left[0,2 k_{F}\right]$ on the right-hand side of equation (6.90), which can be reformulated to
$$
\begin{align*}
\begin{aligned}
\frac{1}{\tau\left(\epsilon_{F}, T\right)} & =\frac{-\lambda}{N\left(\epsilon_{F}\right)} \frac{m}{\hbar^{2} \pi k_{F}} \int_{0}^{2 k_{F}} d q q \omega_{\boldsymbol{q}} N\left(\omega_{\boldsymbol{q}}\right) \int_{0}^{\pi / 2} d \gamma \sin \gamma \cos ^{2}(\gamma) \delta\left(\frac{q}{2 k_{F}}-\cos \gamma\right) \\
& =\frac{\lambda}{4 N\left(\epsilon_{F}\right)} \frac{m c_{s}}{\hbar^{2} \pi k_{F}^{3}} \int_{0}^{2 k_{F}} \frac{q^{4} d q}{e^{\hbar c_{s} q / k_{B} T}-1} \\
& =\frac{\lambda}{4 N\left(\epsilon_{F}\right)} \frac{m c_{s} k_{F}^{2}}{\hbar^{2} \pi}\left(\frac{T}{\Theta_{D}}\right)^{5} \int_{0}^{2 \Theta_{D} / T} \frac{y^{4} d y}{e^{y}-1},
\end{aligned}
\end{align*}
$$
where we have approximated the Debye temperature by $k_{B} \Theta_{D} \approx \hbar c_{S} k_{F}$. We notice the two distinct characteristic temperature regimes,
$$
\begin{align*}
\frac{1}{\tau}= \begin{cases}6 \zeta(5) \lambda \pi \frac{k_{B} \Theta_{D}}{\hbar}\left(\frac{T}{\Theta_{D}}\right)^{5}, & T \ll \Theta_{D} \\ \lambda \pi \frac{k_{B} \Theta_{D}}{\hbar}\left(\frac{T}{\Theta_{D}}\right), & T \gg \Theta_{D}\end{cases}
\end{align*}
$$

The prefactors depend on the details of the approximation, whereas the qualitative temperature dependence does not. We finally obtain the conductivity and resistivity from equation (6.29),
$$
\begin{align*}
\begin{aligned}
\sigma & =\frac{e^{2} n}{m} \tau(T) \\
\rho & =\frac{m}{e^{2} n} \frac{1}{\tau(T)}
\end{aligned}
\end{align*}
$$
where we used the weak energy dependence of $\tau\left(\epsilon \approx \epsilon_{F}, T\right)$. With this, we obtain the well-known Bloch-Grüneisen form
$$
\begin{align*}
\rho(T) \propto \begin{cases}T^{5}, & T \ll \Theta_{D} \\ T, & T \gg \Theta_{D}\end{cases}
\end{align*}
$$

At high temperatures, $\rho$ is determined by the occupation of phonon states
$$
\begin{align*}
N\left(\omega_{q}\right) \approx \frac{k_{B} T}{\hbar \omega_{q}}
\end{align*}
$$
which change the scattering strength (amplitude) of the lattice modulation linear in $T$. At low temperature only the lowest phonon states are occupied $\hbar \omega_{q}<k_{B} T$ yield $q<k_{B} T / \hbar c_{s}$. Thus, at low temperatures only long-wave length modulations of the lattice generate a scattering potentials which deflects electrons only slightly from their trajectories (forward scattering dominates). This represents a restriction of the scattering phase space becoming ever smaller with decreasing temperature.

---
## 6.5 Electron-Electron Scattering
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=141&selection=448,0,450,28|•]]

In [[Notes/Solid-State Theory#5 Landau's Theory of Fermi Liquids\|Chapter 5]] we have learned, that, taking a short-ranged electron-electron interaction into account, scattering rate for electrons decreases strongly close to the Fermi surface. The basic reason for this lies in the constraint of the scattering phase space imposed by the Pauli principle. The lifetime, which we identify with the relaxation time here, has the form
$$
\begin{align*}
\frac{1}{\tau(\epsilon)}=\frac{1}{\tau_{e}}\left(\frac{\epsilon}{\epsilon_{F}}-1\right)^{2}
\end{align*}
$$
where energy and momentum conservation is taken into account and $\tau_{e}$ is a constant of unit time. We may now calculate the mean relaxation time $\bar{\tau}$ as introduce in Sect.6.2.2. To regularise the integrals we take here also impurity scattering into account by adding a constant to the scattering rate and obtain for the resistivity
$$
\begin{align*}
\rho(T)=\rho_{0}+\frac{\pi^{2}}{3} \frac{m}{n e^{2} \tau_{e}}\left(\frac{k_{B} T}{\epsilon_{F}}\right)^{2}
\end{align*}
$$
**Calculation of mean scattering time** $\bar{\tau}$ : We use Matthiessen's rule to add the scattering rates of electronelectron and impurity scattering to the form
$$
\begin{align*}
\frac{1}{\tau(\epsilon)}=\frac{1}{\tau_{e}}\left(\frac{\epsilon}{\epsilon_{F}}-1\right)^{2}+\frac{1}{\tau_{0}}
\end{align*}
$$

Restricting to the small temperature limit, we determine $\bar{\tau}$ by
$$
\begin{align*}
\begin{aligned}
\bar{\tau} & =-\int d \epsilon \tau(\epsilon) \partial f_{0} / \partial \epsilon=\int_{-\infty}^{+\infty} d E \frac{\tau(E)}{4 k_{B} T \cosh ^{2}\left(E / 2 k_{B} T\right)} \approx \int_{-\infty}^{+\infty} d E \frac{1}{4 k_{B} T \cosh ^{2}\left(E / 2 k_{B} T\right)}\left\{\tau_{0}-\frac{\tau_{0}^{2}}{\tau_{e}} \frac{E^{2}}{\epsilon_{F}^{2}}\right\} \\
& =\tau_{0}-\frac{\pi^{2}}{3} \frac{\tau_{0}^{2}}{\tau_{e}}\left(\frac{k_{B} T}{\epsilon_{F}}\right)^{2}
\end{aligned}
\end{align*}
$$
where $E=\epsilon-\epsilon_{F}$. The resistivity is given by

$$
\begin{align*}
\rho(T)=\frac{m}{n e^{2} \bar{\tau}(T)} \approx \frac{m}{n e^{2} \tau_{0}}\left\{1+\frac{\pi^{2}}{3} \frac{\tau_{0}}{\tau_{e}}\left(\frac{k_{B} T}{\epsilon_{F}}\right)^{2}\right\}
\end{align*}
$$
and with $\rho_{0}=m / n e^{2} \tau_{0}$ as the residual resistivity leads to $\rho(T)$.
Electron-electron scattering introduces a quadratic temperature dependence to resistivity. This is a key property of a Fermi liquid and is often considered an identifying criterion.

**Umklapp process**

We should here also address the problem of momentum relaxation through electron-electron scattering. Actually in every electron-electron scattering process the total momentum is conserved,
$$
\begin{align*}
\boldsymbol{k}_{1}+\boldsymbol{k}_{2}=\boldsymbol{k}_{1}^{\prime}+\boldsymbol{k}_{2}^{\prime} .
\end{align*}
$$

The situation is even more constraint through the fact that all momenta lie essentially on the Fermi surfaces, $\left|\boldsymbol{k}_{i}\right| \approx k_{F}$. In this way electron-electron scattering could not contribute to momentum relaxation and would not enter the discussion of resistivity, unlike we have done above.
The short-coming of our argument is that the momentum conservation as given in this form is only valid in a completely translational system. It is necessary consider the effect of the ion lattice, such that we actually deal here with lattice momenta $\boldsymbol{k}$. Under this condition the "momentum conservation" involves also reciprocal lattice vectors,
$$
\begin{align*}
\boldsymbol{k}_{1}+\boldsymbol{k}_{2}+\boldsymbol{G}=\boldsymbol{k}_{1}^{\prime}+\boldsymbol{k}_{2}^{\prime} .
\end{align*}
$$
which connects different Brillouin zones, as shown here:

![Attachments/Notes/Solid-State Theory/IMG-0126164743714.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164743714.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=143&rect=172,540,426,755|•]]

In this way momentum can be transferred to the lattice. Still the conditions are constraint by the fact that all electron momenta lie on the Fermi surface. Such processes are termed Umklapp scattering and play an important role in electron-phonon scattering as well.

---
## 6.6 Matthiessen's Rule and the Ioffe-Regel Limit
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=143&selection=55,0,57,43|•]]

Matthiessen's rule states, that the scattering rates of different scattering processes can simply be added, leading to
$$
\begin{align*}
W\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)=W_{1}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)+W_{2}\left(\boldsymbol{k}, \boldsymbol{k}^{\prime}\right)
\end{align*}
$$
or, expressed in the relaxation time approximation,
$$
\begin{align*}
\frac{1}{\tau}=\frac{1}{\tau_{1}}+\frac{1}{\tau_{2}}
\end{align*}
$$
and
$$
\begin{align*}
\rho=\frac{m}{n e^{2} \tau}=\frac{m}{n e^{2}}\left(\frac{1}{\tau_{1}}+\frac{1}{\tau_{2}}\right)=\rho_{1}+\rho_{2}
\end{align*}
$$

This rule is not a theorem and corresponds effectively to a serial coupling of resistors in a classical circuit. It is applicable, if the different scattering processes are independent. Actually, the assumption that the impurity scattering rate depends linearly on the impurity density $n_{\text {imp }}$ is already an application of Matthiessen's rule. Mutual influences of impurities, e.g., through interference effects due to the coherent scattering of an electron at different impurities, would invalidate this simplification. An example where Matthiessen's rule is violated is a one-dimensional system, where a single scatterer $i$ induces a finite resistance $R_{i}$. Two serial scatterers then lead to a total resistance
$$
\begin{align*}
R=R_{1}+R_{2}+\frac{2 e^{2}}{h} R_{1} R_{2} \geq R_{1}+R_{2}
\end{align*}
$$

The reason is, that in one-dimensional systems, the interference of backscattered waves is unavoidable and no impurity can be treated as isolated. Furthermore, every particle traversing the whole system has to pass all scatterers. The more general Matthiessen's rule,
$$
\begin{align*}
\rho \geq \rho_{1}+\rho_{2}
\end{align*}
$$
is still valid. Another source of deviation from Matthiessen's rule arises, if the relaxation time depends on $\boldsymbol{k}$, since then the averaging is not the same for all scattering processes. The electronphonon coupling can be modified by the scattering on impurities, most importantly in the presence of anisotropic Fermi surfaces. For the analysis of resistance data of simple metals, we often assume the validity of Matthiessen's rule. A typical example is the resistance minimum explained by Kondo, where
$$
\begin{align*}
\begin{aligned}
\rho(T) & =\rho_{0}+\rho_{e-p}(T)+\rho_{K}(T)+\rho_{e-e}(T) \\
& =\rho_{0}+\alpha T^{5}+\beta\left(1+2 J N\left(\epsilon_{F}\right) \ln \left(D / k_{B} T\right)\right)+\gamma T^{2},
\end{aligned}
\end{align*}
$$
where $\alpha, \beta$, and $\gamma$ are numerical constants. Upon decreasing temperature, the Kondo term is increasing, whereas the electron-phonon and electron-electron contributions decrease. Consequently, there is a minimum.

We now turn to the discussion of resistivity in the high-temperature limit. Believing the previous considerations entirely, the electrical resistivity would grow indefinitely with temperature. In most cases, however, the resistivity will saturate at a finite limiting value. We can understand this from simple considerations writing the mean free path $\ell=v_{F} \tau\left(\epsilon_{F}\right)$ as the mean distance an electron travels freely between two collisions. The lattice constant $a$ is a natural lower boundary to $\ell$ in the crystal lattice. Furthermore, we assumed so far that scattering occurs between two states with sharp momenta $\boldsymbol{k}$ and $\boldsymbol{k}^{\prime}$. If the de Broglie wavelength becomes comparable to the mean free path, the framework becomes unfounded and $k_{F}^{-1}$ would become a boundary for $\ell$. In most systems $a$ and $k_{F}^{-1}$ are comparable lengths. Empirically, the resistivity is described via the formula
$$
\begin{align*}
\frac{1}{\rho(T)}=\frac{1}{\rho_{B T}(T)}+\frac{1}{\rho_{\max }}
\end{align*}
$$
corresponding to the parallel addition of two resistivities; on one hand, $\rho_{B T}(T)$, which we have investigated using the Boltzmann transport theory, and on the other hand the limiting value $\rho_{\max }$. This is in clear disagreement to Matthiessen's rule, which is to be expected, since for $k_{F} \ell \sim 1$, complex interference effects will arise. The saturated resistivity $\rho_{\max }$ can be estimated from the Jellium model,
$$
\begin{align*}
\begin{aligned}
\rho_{\max } & =\frac{m}{e^{2} n \tau\left(\epsilon_{F}\right)}=\frac{3 \pi^{2} m}{e^{2} k_{F}^{3} \tau\left(\epsilon_{F}\right)}=\frac{h}{e^{2}} \frac{3 \pi}{2 k_{F}^{2} \ell} \\
& \sim \frac{h}{e^{2}} \frac{3 \pi}{2 k_{F}}
\end{aligned}
\end{align*}
$$
where we used $\ell^{-1} \sim k_{F}$. For a typical value $k_{F} \sim 10^{8} \mathrm{~cm}^{-1}$ of the Fermi wave vector, we find $\rho_{\max } \sim 1 \mathrm{~m} \Omega \mathrm{~cm}$, which is called the Ioffe-Regel limit. Establishing a quantitative estimate of $\rho_{\max }$ for a given material is often difficult. There are even materials whose resistivity surpasses the Ioffe-Regel limit.

---
## 6.7 General Transport Coefficients
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=144&selection=336,0,338,28|•]]

Simultaneously with charge, electrons will also transport energy, i.e., heat and entropy. This is why charge and heat transport are naturally interconnected. In the following, we generalise the transport theory set up above to include this interplay.

### 6.7.1 Generalised Boltzmann Equation

We consider a metal with weakly space-dependent temperature $T(\boldsymbol{r})$ and chemical potential $\mu(\boldsymbol{r})$. The distribution function then reads
$$
\begin{align*}
\delta f(\boldsymbol{k} ; \boldsymbol{r})=f(\boldsymbol{k} ; \boldsymbol{r})-f_{0}(\boldsymbol{k}, T(\boldsymbol{r}), \mu(\boldsymbol{r})),
\end{align*}
$$
where
$$
\begin{align*}
f_{0}(\boldsymbol{k}, T(\boldsymbol{r}), \mu(\boldsymbol{r}))=\frac{1}{e^{\left(\epsilon_{\boldsymbol{k}}-\mu(\boldsymbol{r})\right) / k_{B} T(\boldsymbol{r})}+1} .
\end{align*}
$$

In addition, we require the charge density to remain constant in space, i.e.,
$$
\begin{align*}
\int \frac{d^{3} k}{(2 \pi)^{3}} f(\boldsymbol{k} ; \boldsymbol{r})=n_{0}
\end{align*}
$$
for all $\boldsymbol{r}$. In this section, we introduce the electro-chemical potential for electrons $\eta(\boldsymbol{r})=-e \phi(\boldsymbol{r})+$ $\mu(\boldsymbol{r})$ generating the general force field $\mathcal{E}=-\boldsymbol{\nabla} \eta=-\boldsymbol{\nabla}(-e \phi+\mu)$, where $\phi(\boldsymbol{r})$ denotes the electrostatic potential which produces the electric field $\boldsymbol{E}=-\boldsymbol{\nabla} \phi$ such that $\mathcal{E}=-e \boldsymbol{E}-\boldsymbol{\nabla} \mu$. With this, the Boltzmann equation for the stationary situation reads
$$
\begin{align*}
\begin{aligned}
\left(\frac{\partial f}{\partial t}\right)_{\text {coll }} & =\boldsymbol{v}_{\boldsymbol{k}} \cdot \nabla_{r} f+\dot{\boldsymbol{k}} \cdot \boldsymbol{\nabla}_{\boldsymbol{k}} f \\
& =-\frac{\partial f}{\partial \epsilon_{\boldsymbol{k}}} \boldsymbol{v}_{\boldsymbol{k}} \cdot\left(\frac{\epsilon_{\boldsymbol{k}}-\mu}{T} \nabla_{r} T-\mathcal{E}\right) .
\end{aligned}
\end{align*}
$$

![Attachments/Notes/Solid-State Theory/IMG-0126164743923.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164743923.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=145&rect=104,205,495,413|•]]

In the relaxation time approximation for the collision integral, we obtain the solution
$$
\begin{align*}
\delta f(\boldsymbol{k})=-\frac{\partial f_{0}}{\partial \epsilon_{\boldsymbol{k}}} \tau\left(\epsilon_{\boldsymbol{k}}\right) \boldsymbol{v}_{\boldsymbol{k}} \cdot\left(\boldsymbol{\mathcal { E }}-\frac{\epsilon_{\boldsymbol{k}}-\mu}{T} \boldsymbol{\nabla}_{\boldsymbol{r}} T\right),
\end{align*}
$$
which allows us to calculate the charge and heat currents,
$$
\begin{align*}
\begin{aligned}
& \boldsymbol{J}_{e}=-2 e \int \frac{d^{3} k}{(2 \pi)^{3}} \boldsymbol{v}_{\boldsymbol{k}} \delta f(\boldsymbol{k}) \\
& \boldsymbol{J}_{q}=2 \int \frac{d^{3} k}{(2 \pi)^{3}}\left(\epsilon_{\boldsymbol{k}}-\mu\right) \boldsymbol{v}_{\boldsymbol{k}} \delta f(\boldsymbol{k})
\end{aligned}
\end{align*}
$$
respectively. One could be tempted to use
$$
\begin{align*}
\boldsymbol{J}_{q}=2 \int \frac{d^{3} k}{(2 \pi)^{3}} \epsilon_{\boldsymbol{k}} \boldsymbol{v}_{\boldsymbol{k}} \delta f(\boldsymbol{k})
\end{align*}
$$
for the heat current. However, $\epsilon_{\boldsymbol{k}}$ relates to the internal energy. Considering the specific heat, we obtain for the heat
$$
    \begin{align*}
    \delta Q=C(T) d T=\frac{2}{\Omega} \sum_{k} \frac{\partial f_{0}\left(\epsilon_{k}\right)}{\partial T}\left(\epsilon_{\boldsymbol{k}}-\mu\right) d T
    \end{align*}
    $$
which shows that heat involves $\epsilon_{\boldsymbol{k}}-\mu$ including the chemical potential. Inserting the solution (6.124) into the two definitions above yields
$$
\begin{align*}
\begin{aligned}
\boldsymbol{J}_{e} & =-e \hat{K}^{(0)} \mathcal{E}-\frac{e}{T} \hat{K}^{(1)}(-\nabla T) \\
\boldsymbol{J}_{q} & =+\hat{K}^{(1)} \mathcal{E}+\frac{1}{T} \hat{K}^{(2)}(-\nabla T)
\end{aligned}
\end{align*}
$$
where $\boldsymbol{\nabla}$ should be understood as $\boldsymbol{\nabla}_{\boldsymbol{r}}$ and the tensors $\hat{K}^{(n)}\left(n \in \mathbb{N}_{0}\right)$ are defined as
$$
\begin{align*}
K_{\alpha \beta}^{(n)}=-\frac{1}{4 \pi^{3}} \int d \epsilon \frac{\partial f_{0}}{\partial \epsilon} \tau(\epsilon)(\epsilon-\mu)^{n} \int d \Omega_{\boldsymbol{k}} \frac{v_{F \alpha} v_{F \beta}}{\hbar\left|\boldsymbol{v}_{F}\right|} k_{F}^{2}
\end{align*}
$$

For an isotropic system these transport coefficients are no longer tensors but represented by scalars,
$$
\begin{align*}
K^{(n)}=-\frac{n_{0}}{m} \int d \epsilon \frac{\partial f_{0}}{\partial \epsilon} \tau(\epsilon)(\epsilon-\mu)^{n}
\end{align*}
$$

In the case $T \ll T_{F}$ we can calculate the coefficients,
$$
\begin{align*}
\begin{aligned}
K^{(0)}\left(\epsilon_{F}\right) & =\frac{n_{0}\left(\epsilon_{F}\right) \tau\left(\epsilon_{F}\right)}{m} \\
K^{(1)}\left(\epsilon_{F}\right) & =\left.\frac{\pi^{2}}{3}\left(k_{B} T\right)^{2} \frac{\partial}{\partial \epsilon} K^{(0)}(\epsilon)\right|_{\epsilon=\epsilon_{F}} \\
K^{(2)}\left(\epsilon_{F}\right) & =\frac{\pi^{2}}{3}\left(k_{B} T\right)^{2} K^{(0)}\left(\epsilon_{F}\right)
\end{aligned}
\end{align*}
$$
Note, we used that if a function $g(\epsilon)$ depends only weakly on $\epsilon$ in the vicinity of $\epsilon_{F}$, we can use the Sommerfeld expansion to derive a general approximation for following integrals

$$
\begin{align*}
-\int d \epsilon g(\epsilon) \frac{\partial f_{0}}{\partial \epsilon}=g\left(\epsilon_{F}\right)+\left.\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} \frac{\partial^{2} g(\epsilon)}{\partial \epsilon^{2}}\right|_{\epsilon=\epsilon_{F}}+\ldots
\end{align*}
$$
and
$$
\begin{align*}
-\int d \epsilon g(\epsilon)\left(\epsilon-\epsilon_{F}\right) \frac{\partial f_{0}}{\partial \epsilon}=\left.\frac{\pi^{2}}{3}\left(k_{B} T\right)^{2} \frac{\partial g(\epsilon)}{\partial \epsilon}\right|_{\epsilon=\epsilon_{F}}+\ldots,
\end{align*}
$$
in the limit $T \rightarrow 0$. We used that $\mu \rightarrow \epsilon_{F}$ in that asymptotic case.

We measure the electrical resistivity assuming $\nabla T=\nabla \mu=0$ for all $\boldsymbol{r} .$ With this, we find the expression
$$
\begin{align*}
\sigma\left(\epsilon_{F}\right)=e^{2} K^{(0)}\left(\epsilon_{F}\right)=\frac{e^{2} n_{0}\left(\epsilon_{F}\right) \tau\left(\epsilon_{F}\right)}{m}
\end{align*}
$$

In order to determine the thermal conductivity $\hat{\kappa}$ relating the heat current $\boldsymbol{J}_{q}$ to $\boldsymbol{\nabla} T$ when no external electric field $\boldsymbol{E}$ is applied, we set $\boldsymbol{J}_{e}=0$ as for an open circuit. Then, the equations (6.129) and (6.130) reveal the appearance of an general force field
$$
\begin{align*}
\mathcal{E}=\frac{K^{(1)}}{T K^{(0)}} \nabla T
\end{align*}
$$

Thus, the heat current is given by
$$
\begin{align*}
\mathbf{J}_{q}=-\frac{1}{T}\left(K^{(2)}-\frac{K^{(1) 2}}{K^{(0)}}\right) \nabla T=-\kappa \boldsymbol{\nabla} T
\end{align*}
$$

In simple metals, the second term in (6.144) is often negligible as compared to the first one and we obtain in this case
$$
\begin{align*}
\kappa=\frac{1}{T} K^{(2)}=\frac{\pi^{2} k_{B}^{2}}{3} T K^{(0)}=\frac{\pi^{2}}{3} \frac{k_{B}^{2}}{e^{2}} T \sigma,
\end{align*}
$$
which is the well-known Wiedemann-Franz law. Note, that we can write the thermal conductivity in the form
$$
\begin{align*}
\kappa=\frac{C}{e^{2} N\left(\epsilon_{F}\right)} \sigma
\end{align*}
$$
where $C=\pi^{2} N\left(\epsilon_{F}\right) k_{B}^{2} T / 3$ denotes the electronic specific heat.

### 6.7.2 Thermoelectric Effect

Equation (6.143) shows, that a temperature gradient induces an electric field. For a simple, isotropic system, this relation reduces to
$$
\begin{align*}
\mathcal{E}=-e Q \nabla T=\frac{K^{(1)}}{T K^{(0)}} \nabla T
\end{align*}
$$
with the Seebeck coefficient
$$
\begin{align*}
Q=-\left.\frac{\pi^{2}}{3} \frac{k_{B}^{2} T}{e} \frac{\sigma^{\prime}(\epsilon)}{\sigma(\epsilon)}\right|_{\epsilon=\epsilon_{F}}
\end{align*}
$$

This is the so-called Mott formula which looses its validity at high-temperatures or very anisotropic scattering. Using $\sigma(\epsilon)=n(\epsilon) e^{2} \tau(\epsilon) / m$, we investigate $\sigma^{\prime}(\epsilon)$,
$$
\begin{align*}
\sigma^{\prime}(\epsilon)=\frac{\tau^{\prime}(\epsilon)}{\tau(\epsilon)} \sigma(\epsilon)+\frac{n^{\prime}(\epsilon)}{n(\epsilon)} \sigma(\epsilon)=\frac{\tau^{\prime}(\epsilon)}{\tau(\epsilon)} \sigma(\epsilon)+\frac{N(\epsilon)}{n(\epsilon)} \sigma(\epsilon)
\end{align*}
$$
and obtain an additional contribution to $Q$, if the relaxation time depends strongly on energy. This is most prominent in collision processes in which resonant scattering is involved (e.g., the Kondo effect). In the opposite situation, namely, when the first term is irrelevant, the Seebeck coefficient
$$
\begin{align*}
Q=-\frac{\pi^{2}}{3} \frac{k_{B}^{2} T}{e} \frac{N\left(\epsilon_{F}\right)}{n\left(\epsilon_{F}\right)}=-\frac{S}{n e}
\end{align*}
$$
is simply reduced to the entropy per electron. For simple metals such as the alkali metals we may estimate the low-temperature values using equation (6.150)
$$
\begin{align*}
Q=-\frac{\pi^{2}}{2} \frac{k_{B}^{2} T}{e \epsilon_{F}}=-\frac{\pi^{2}}{2} \frac{k_{B} T}{e T_{F}}
\end{align*}
$$
which for $T_{F}(N a, K) \approx 3 \times 10^{4} K$ leads to $Q=-14 n V K^{-1} \times T[K]$. A comparison with experiments shows that the order of magnitude works reasonably well for Na and K. However, for Li and Cs even the sign is different. Differences occur through phonon effects, such as the so-called phonon drag which we have neglected here:

![Attachments/Notes/Solid-State Theory/IMG-0126164744254.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164744254.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=148&rect=164,195,427,543|•]]

In the following, we consider two different types of thermoelectric effects.

**Seebeck effect**

The first is the Seebeck effect, where a thermoelectric voltage appears in a bi-metallic system (cf. Figure 6.9). With equation (6.147), a temperature gradient across metal $B$ induces a voltage
$$
\begin{align*}
\begin{aligned}
V & =-\frac{1}{e} \int d \boldsymbol{l} \cdot \boldsymbol{\mathcal { E }} \\
& =Q_{A} \int_{T_{0}}^{T_{1}} d \boldsymbol{l} \cdot \boldsymbol{\nabla} T+Q_{B} \int_{T_{1}}^{T_{2}} d \boldsymbol{l} \cdot \nabla T+Q_{A} \int_{T_{2}}^{T_{0}} d \boldsymbol{l} \cdot \nabla T \\
& =\left(Q_{B}-Q_{A}\right)\left(T_{2}-T_{1}\right) .
\end{aligned}
\end{align*}
$$

The resulting voltage $V$ appears between the two ends of a second metal $A$, whose contacts are kept at the same temperature $T_{0}$. The integral of $\nabla \mu$ along the whole path vanishes since the temperature at both ends of metal $A$ is the same $T_{0}$. Here, a bi-metallic configuration was chosen to reveal voltage differences across the contacts which are absent in a single metal.

**Peltier effect**

The second phenomenon, termed Peltier effect, emerges in a system kept at the same temperature everywhere. Here, an electric current $J_{e}$ between the two contacts of the metal $A$ induces a heat current in the bi-metallic system, such that heat is transferred from one reservoir (top) to another (bottom):

![Attachments/Notes/Solid-State Theory/IMG-0126164744547.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164744547.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=149&rect=124,582,468,758|•]]

This follows from the equations (6.129) and (6.130) by assuming $\nabla T=0$, where
$$
\begin{align*}
\left\{\begin{array}{l}
J_{e}=e^{2} K^{(0)} E \\
J_{q}=-e K^{(1)} E
\end{array}\right.
\end{align*}
$$
implies
$$
\begin{align*}
J_{q}=-\frac{K^{(1)}}{e K^{(0)}} J_{e}=\Pi J_{e}=Q T J_{e} .
\end{align*}
$$

The coupling $\Pi=T Q$ between $J_{q}$ and $J_{e}$ is called Peltier coefficient. According to Figure 6.9, a contribution to the heat current is to be expected from both metals $A$ and $B$,
$$
\begin{align*}
J_{q}=\left(\Pi_{A}-\Pi_{B}\right) J_{e}=T_{0}\left(Q_{A}-Q_{B}\right) J_{e} .
\end{align*}
$$

This means, that the heat transfer between reservoirs can be controlled by electrical current. It has to be emphasized here that the bi-metal design of the devices described serves the observation of the two effects which both represent bulk effects of the two metals A and B. By no means, it should be mistaken as an effect originating from the inter-metal contacts.

---
## 6.8 Anderson Localisation in One-Dimensional Systems
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=150&selection=66,0,68,48|•]]

Transport in one spatial dimension is very special, since there are only two different directions to go: forward and backward. We introduce the transfer matrix formalism and use it to express the conductivity through the Landauer formula. We will then investigate the effects of multiple scattering at different obstacles, leading to the so-called Anderson localisation, which turns a metal into an insulator.

### 6.8.1 Landauer Formula for a Single Impurity

The transmission and reflection at an arbitrary potential with finite support in one dimension can be described by a transfer matrix $T$.

![Attachments/Notes/Solid-State Theory/IMG-0126164744854.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164744854.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=150&rect=146,354,451,456|•]]

In this situation, a suitable choice for a basis of the electron states is the set of plane waves $\left\{e^{ \pm i k x}\right\}$ (cf. Figure 6.10) moving in the positive (negative) $x$-direction with wave vector $+k$ $(-k)$. Only plane waves with the same $|k|$ on the left $\left(I_{1}\right)$ and right $\left(I_{2}\right)$ side of the scatterer are interconnected. Therefore, we write
$$
\begin{align*}
\begin{aligned}
& \psi_{1}(x)=a_{1+} e^{i k x}+a_{1-} e^{-i k x} \\
& \psi_{2}(x)=a_{2+} e^{i k x}+a_{2-} e^{-i k x}
\end{aligned}
\end{align*}
$$
where $\psi_{1}\left(\psi_{2}\right)$ is defined in the area $I_{1}\left(I_{2}\right)$. The vectors $a_{i}=\left(a_{i+}, a_{i-}\right) i \in\{1,2\}$ are connected via the linear relation,
$$
\begin{align*}
a_{2}=\hat{T} a_{1}=\left(\begin{array}{ll}
T_{11} & T_{12} \\
T_{21} & T_{22}
\end{array}\right) a_{1},
\end{align*}
$$
with the $2 \times 2$ transfer matrix $\hat{T}$. The conservation of current $\left(J_{1}=J_{2}\right)$ requires that $\hat{T}$ is unimodular, i.e., $\operatorname{det} T=1$. Here,
$$
\begin{align*}
J=\frac{i \hbar}{2 m}\left(\frac{d \psi^{*}(x)}{d x} \psi(x)-\psi^{*}(x) \frac{d \psi(x)}{d x}\right)
\end{align*}
$$
such that, for a plane wave $\psi(x)=(1 / \sqrt{L}) e^{i k x}$ in a system of length $L$, the current results in
$$
\begin{align*}
J=v / L
\end{align*}
$$
with the velocity $v$ defined as $v=\hbar k / m$. Time reversal symmetry implies that, simultaneously with $\psi(x)$, the complex conjugate $\psi^{*}(x)$ is a solution of the stationary Schrödinger equation. From this, we find $T_{11}=T_{22}^{*}$ and $T_{12}=T_{21}^{*}$, such that
$$
\begin{align*}
\hat{T}=\left(\begin{array}{ll}
T_{11} & T_{12} \\
T_{12}^{*} & T_{11}^{*}
\end{array}\right)
\end{align*}
$$

It is easily shown that a shift of the scattering potential by a distance $x_{0}$ changes the coefficient $T_{12}$ of $\hat{T}$ by a phase factor $e^{i 2 k x_{0}}$. Meanwhile, the coefficient $T_{11}$ remains unchanged.
With the Ansatz for a right moving incoming wave ( $\propto e^{i k x}$ ), producing a reflected ( $\propto r e^{-i k x}$ ) and transmitted ( $\propto t e^{i k x}$ ) part, the wave functions on both sides of the scatterer read
$$
\begin{align*}
\begin{aligned}
& \psi_{1}(x)=\frac{1}{\sqrt{L}}\left(e^{i k x}+r e^{-i k x}\right) \\
& \psi_{2}(x)=\frac{1}{\sqrt{L}}\left(t e^{i k x}\right)
\end{aligned}
\end{align*}
$$

The coefficients of $\hat{T}$ can be determined explicitly in this situation, resulting in
$$
\begin{align*}
\hat{T}=\left(\begin{array}{cc}
\frac{1}{t^{*}} & -\frac{r^{*}}{t^{*}} \\
-\frac{r}{t} & \frac{1}{t}
\end{array}\right) .
\end{align*}
$$

Here, the conservation of currents imposes the condition $1=|r|^{2}+|t|^{2}$. Furthermore, we can find a relation between the parameters $(r, t)$ of the potential barrier and the electric resistivity. For this, we notice that the incoming current density $J_{0}$ is split into a reflected $J_{r}$ and transmitted $J_{t}$ part, all given by
$$
\begin{align*}
\begin{aligned}
J_{0} & =-\frac{1}{L} v e=-n_{0} v e, \\
J_{r} & =-\frac{|r|^{2}}{L} v e=-n_{r} v e, \\
J_{t} & =-\frac{|t|^{2}}{L} v e=-n_{t} v e,
\end{aligned}
\end{align*}
$$
with the velocity $v=\hbar k / m$, the electron charge $-e$, and the particle densities $n_{0}, n_{r}$, and $n_{t}$ corresponding to the incoming, reflected and transmitted particles respectively. The electron density on the two sides of the barrier is given by
$$
\begin{align*}
\begin{aligned}
& n_{1}=n_{0}+n_{r}=\frac{1+|r|^{2}}{L}, \\
& n_{2}=n_{t}=\frac{|t|^{2}}{L}
\end{aligned}
\end{align*}
$$

From this consideration, a density difference $\delta n=n_{1}-n_{2}=\left(1+|r|^{2}-|t|^{2}\right) / L=2|r|^{2} / L$ results between the left and the right side of the scatterer. The resistance $R$ of the barrier is defined by the ratio between the voltage drop over the resistor $\delta V$ and the transmitted current $J_{t}$, i.e.
$$
\begin{align*}
R=\frac{\delta V}{J_{t}}
\end{align*}
$$

Consequently, a relation between $\delta V$ and the electron density $\delta n$ remains to be established to determine $R$. The connection is easily found via the existing energy difference $\delta E=-e \delta V$ between the two sides of the resistor, such that the expression
$$
\begin{align*}
\begin{aligned}
\delta n & =\frac{d n}{d E} \delta E \\
& =\frac{d n}{d E}(-e \delta V)
\end{aligned}
\end{align*}
$$
produces the wished relation. Here, $\frac{d n}{d E} d E$ is the number of states per unit length in the energy interval $[E, E+d E]$ and we find
$$
\begin{align*}
\frac{d n}{d E}=\frac{1}{L} \sum_{k, s} \delta\left(E-\frac{\hbar^{2} k^{2}}{2 m}\right)=2 \int \frac{d k}{2 \pi} \delta\left(E-\frac{\hbar^{2} k^{2}}{2 m}\right)=\frac{1}{\pi \hbar v(E)}
\end{align*}
$$

The resistance $R$ is finally obtained from the equations (6.172), (6.173), and (6.175), leading to
$$
\begin{align*}
R=\frac{h}{e^{2}} \frac{|r|^{2}}{|t|^{2}}
\end{align*}
$$

The Klitzing constant $R_{K}=h / e^{2} \approx 25.8 k \Omega$ is a resistance quantum named after the discoverer of the Quantum Hall Effect. The result (6.176) is the famous Landauer formula, which is valid for all one-dimensional systems and whose application often extends to the description of mesoscopic systems and quantum wires.

### 6.8.2 Scattering at Two Impurities

We consider now two spatially separated scattering potentials, represented by $\hat{T}_{1}$ and $\hat{T}_{2}$ each determined by $r_{1}, t_{1}$ and $r_{2}, t_{2}$ respectively:

![Attachments/Notes/Solid-State Theory/IMG-0126164745178.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164745178.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=152&rect=123,330,482,381|•]]

The particles are multiply scattered at these potentials in a unknown manner, but the global result can again be expressed via a simple transfer matrix $\hat{T}=\hat{T}_{1} \hat{T}_{2}$, given by the matrix multiplication of each transfer matrix. All previously found properties remain valid for the new matrix $\hat{T}$, given by
$$
\begin{align*}
\hat{T}=\left(\begin{array}{cc}
\frac{1}{t_{1}^{*} t_{2}^{*}}+\frac{r_{*}^{*} r_{2}}{t_{1}^{*} t_{2}} & -\frac{r_{2}^{*}}{t_{1}^{*} t_{2}^{*}}-\frac{r_{1}^{*}}{t_{1}^{*} t_{2}} \\
-\frac{r_{1}}{t_{1} t_{2}^{*}}-\frac{r_{2}}{t_{1} t_{2}} & \frac{1}{t_{1} t_{2}}+\frac{r_{1} r_{2}^{*}}{t_{1} t_{2}^{*}}
\end{array}\right)=\left(\begin{array}{cc}
\frac{1}{t^{*}} & -\frac{r^{*}}{t^{*}} \\
-\frac{r}{t} & \frac{1}{t}
\end{array}\right) .
\end{align*}
$$

For the ratio between reflection and transmission probability we find
$$
\begin{align*}
\begin{aligned}
\frac{|r|^{2}}{|t|^{2}} & =\frac{1}{|t|^{2}}-1 \\
& =\frac{1}{\left|t_{1}\right|^{2}\left|t_{2}\right|^{2}}\left|1+\frac{r_{1} r_{2}^{*} t_{2}}{t_{2}^{*}}\right|^{2}-1 \\
& =\frac{1}{\left|t_{1}\right|^{2}\left|t_{2}\right|^{2}}\left(1+\left|r_{1}\right|^{2}\left|r_{2}\right|^{2}+\frac{r_{1} r_{2}^{*} t_{2}}{t_{2}^{*}}+\frac{r_{1}^{*} r_{2} t_{2}^{*}}{t_{2}}\right)-1 .
\end{aligned}
\end{align*}
$$

Assuming a (random) distance $d=x_{2}-x_{1}$ between the two potential barriers, we may average over this distance. Note, that for $x_{1}=0$, we find $r_{2} \propto e^{-2 i k d}$, while $r_{1}, t_{1}$, and $t_{2}$ are independent on $d$. Consequently, all terms containing an odd power of $r_{2}$ or $r_{2}^{*}$ vanish after averaging over $d$. The remainders of equation (6.180) can be collected to
$$
\begin{align*}
\begin{aligned}
\left.\frac{|r|^{2}}{|t|^{2}}\right|_{\text {avg }} & =\frac{1}{\left|t_{1}\right|^{2}\left|t_{2}\right|^{2}}\left(1+\left|r_{1}\right|^{2}\left|r_{2}\right|^{2}\right)-1 \\
& =\frac{\left|r_{1}\right|^{2}}{\left|t_{1}\right|^{2}}+\frac{\left|r_{2}\right|^{2}}{\left|t_{2}\right|^{2}}+2 \frac{\left|r_{1}\right|^{2}}{\left|t_{1}\right|^{2}} \frac{\left|r_{2}\right|^{2}}{\left|t_{2}\right|^{2}}
\end{aligned}
\end{align*}
$$

Even though two scattering potentials are added in series, an additional non-linear combination emerges beside the sum of the two ratios $\left|r_{i}\right|^{2} /\left|t_{i}\right|^{2}$. It results from the Landauer formula applied to two scatterers, that resistances do not add linearly to the total resistance. Adding $R_{1}$ and $R_{2}$ serially, the total resistance is not given by $R=R_{1}+R_{2}$, but by
$$
\begin{align*}
R=R_{1}+R_{2}+2 \frac{R_{1} R_{2}}{R_{K}}>R_{1}+R_{2},
\end{align*}
$$
with $R_{K}=h / e^{2}$ This result is a consequence of the unavoidable multiple scattering in one dimensions. This effect is particularly prominent if $R_{i} \gg h / e^{2}$ for $i \in\{1,2\}$, where resistances are then multiplied instead of summed.

### 6.8.3 Anderson Localisation

Let us consider a system with many arbitrarily distributed scatterers, and let $\rho$ be a mean resistance per unit length. $R(\ell)$ shall be the resistance between points 0 and $\ell$. The change in resistance by advancing an infinitesimal $\delta \ell$ is found from equation (6.183), resulting in
$$
\begin{align*}
d R=\rho d \ell+2 \frac{R(\ell)}{R_{K}} \rho d \ell
\end{align*}
$$
which yields
$$
\begin{align*}
\int_{0}^{\ell} \rho d \ell=\int_{0}^{R(\ell)} \frac{d R}{1+2 R / R_{K}}
\end{align*}
$$
and thus,
$$
\begin{align*}
\rho \ell=\frac{h}{2 e^{2}} \ln \left(1+2 R(\ell) / R_{K}\right) .
\end{align*}
$$

Finally, solving this equation for $R(\ell)$, we find
$$
\begin{align*}
R(\ell)=\frac{R_{K}}{2}\left(e^{2 \rho \ell / R_{K}}-1\right)
\end{align*}
$$

Obviously, $R$ grows almost exponentially fast for increasing $\ell$. This means, that for large $\ell$, the system is an insulator for arbitrarily small but finite $\rho>0$. The reason for this is that, in one dimension, all states are bound states in the presence of disorder. This phenomenon is called Anderson localisation. Even though all states are localised, the energy spectrum is continuous, as infinitely many bound states with different energy exist. The mean localisation length $\xi$ of individual states, related to the mean extension of a wave function, is found from equation (6.187) to be $\xi=\rho / R_{K}$. The transmission amplitude is reduced on this length scale, since $|t| \approx 2 e^{-\ell / \xi}$ for . In one dimension, there is no linearly increasing electric resistance, . For non-interacting particles, only two extreme situations are possible. Either, the potential is perfectly periodic and the states correspond to Bloch waves. Then, coherent constructive interference produces extended states that propagate freely throughout the system, resulting in a perfect conductor without resistance. On the other hand, if the scattering potential is disordered, all states are strictly localised. In this case, there is no propagation and the system is an insulator. In three-dimensional systems, the effects of multiple scattering are far less drastic and the Ohmic law is applicable. localisation effects in two dimensions is a very subtle topic and part of today's research in solid state physics.
We have also seen in the context of chiral edge states in the Quantum Hall state, that perfect conductance in a one-dimensional channel is obtained if there is no backscattering due to the lack of states moving in the opposite direction. In chiral states, particle move only in one direction.


---
# 7 Magnetism in Metals
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=155&selection=2,0,2,19|•]]

Magnetic ordering in metals can be viewed as an instability of the Fermi liquid state. We introduce this new phase of metals through the description of the Stoner ferromagnetism. The discussion of antiferromagnetism and spin density wave phases will be only brief in this chapter. In Stoner ferromagnets the magnetic moment is provided by the spin of itinerant electrons. Magnetism due to localised magnetic moments will be considered in the context of Mott insulators which are subject of the next chapter.
Well-known examples of elemental ferromagnetic metals are iron (Fe), cobalt (Co) and nickel $(\mathrm{Ni})$ belonging to the $3 d$ transition metals, where the $3 d$-orbital character is dominant for the conduction electrons at the Fermi energy. These orbitals are rather tightly bound to the atomic cores such that the electron mobility is reduced, enhancing the effect of interaction which is essential for the formation of a magnetic state. Other forms of magnetism, such as antiferromagnetism and the spin density wave state are found in the $3 d$ transition metals Cr and Mn . Note, $4 d$ and $5 d$ transition metals within the same columns of the periodic system are not magnetic. Their $d$-orbitals are more extended, leading to a higher mobility of the electrons, such that the mutual interaction is insufficient to trigger magnetism. It is, however, possible to find ferromagnetism in $\mathrm{ZrZn}_{2}$ where zink $(\mathrm{Zn})$ may act as a spacer reducing the mobility of the $4 d$-electrons of zirconium ( Zr ). The $4 d$-elements Pd and Rh and the $5 d$-element Pt are, however, nearly ferromagnetic. Going further in the periodic table, the $4 f$-orbitals appearing in the lanthanides are nearly localised and can lead to ferromagnetism, as illustrated by the elements going from Gd through Tm in the periodic system.
Magnetism appears through a phase transition, meaning that the metal is non-magnetic at temperatures above a critical temperature $T_{c}$, the Curie-temperature. In many cases, magnetism appears at $T_{c}$ as a continuous, second order phase transition involving the spontaneous violation of symmetry. This transition is lacking latent heat (no discontinuity in entropy and volume) but instead features a discontinuity in the specific heat.

---
## 7.1 Stoner Instability
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=156&selection=0,0,2,18|•]]

In the following section, we study the emergence of the metallic ferromagnetism originating from the Stoner mechanism. In close analogy to the first Hund's rule, the exchange interaction among the electrons plays a crucial role here. The alignment of the electronic spins in a favoured direction allows the system to reduce the energy contribution due to Coulomb repulsion. According to Landau's theory of Fermi liquids, the interaction between electrons renormalises the spin susceptibility $\chi_{0}$ to
$$
\begin{align*}
\chi=\frac{m^{*}}{m} \frac{\chi_{0}}{1+F_{0}^{a}},
\end{align*}
$$
which obviously diverges for $F_{0}^{a} \rightarrow-1$ and leads to a ferromagnetic instability of the Fermi liquid. Then, $F_{0}^{a} \approx-U N\left(\epsilon_{F}\right) / 2$ provides a critical value for the interaction $U_{c}=2 / N\left(\epsilon_{F}\right)$ such that $F_{0}^{a}=-1$ and $\chi$ diverges. We will see below that this corresponds to a value we will derive also by a mean field theory.

### 7.1.1 Stoner Model Within the Mean Field Approximation

Consider the following model for conduction electrons with a repulsive contact interaction,
$$
\begin{align*}
\mathcal{H}=\sum_{\boldsymbol{k}, s} \epsilon_{\boldsymbol{k}} \widehat{c}_{\boldsymbol{c} s}^{\dagger} \widehat{c}_{\boldsymbol{k} s}+U \int d^{3} r d^{3} r^{\prime} \widehat{\rho}_{\uparrow}(\boldsymbol{r}) \delta\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right) \widehat{\rho}_{\downarrow}\left(\boldsymbol{r}^{\prime}\right),
\end{align*}
$$
where we use the electron density $\widehat{\rho}_{s}(\boldsymbol{r})=\widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{s}(\boldsymbol{r})$ and the field operator $\widehat{\Psi}_{s}^{\dagger}\left(\widehat{\Psi}_{s}\right)$ follows from the definition (3.28) [(3.29)]. The contact interaction is an approximation of the screened Coulomb interaction. Due to the Pauli exclusion principle, the contact interaction is only active between electrons with opposite spins. This is a consequence of the exchange hole in the two-particle correlation between electrons of identical spin (cf. Figure 3.1). We obtain a useful insight into mechanisms leading to ferromagnetism by means of a mean field approximation. Note that the following mean field calculation is equivalent to a variational approach using simple many-body wave-function (Slater determinant) with different concentrations of up and down spins. We rewrite,
$$
\begin{align*}
\widehat{\rho}_{s}(\boldsymbol{r})=n_{s}+\left[\widehat{\rho}_{s}(\boldsymbol{r})-n_{s}\right],
\end{align*}
$$
where
$$
\begin{align*}
n_{s}=\left\langle\widehat{\rho}_{s}(\boldsymbol{r})\right\rangle,
\end{align*}
$$
and $\left\langle{ }^{\circ}\right\rangle$ represents the thermal average. We stipulate that the deviation from the mean value $n_{s}$ is small in the sense that
$$
\begin{align*}
\left\langle\left[\widehat{\rho}_{\uparrow}(\boldsymbol{r})-n_{\uparrow}\right]\left[\widehat{\rho}_{\downarrow}(\boldsymbol{r})-n_{\downarrow}\right]\right\rangle \ll n_{\uparrow} n_{\downarrow} .
\end{align*}
$$

Inserting equation (7.3) into the Hamiltonian (7.2), we obtain
$$
\begin{align*}
\begin{aligned}
\mathcal{H}_{\mathrm{mf}} & =\sum_{\boldsymbol{k}, s} \epsilon_{\boldsymbol{k}} \widehat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k} s}+U \int d^{3} r\left[\widehat{\rho}_{\uparrow}(\boldsymbol{r}) n_{\downarrow}+\widehat{\rho}_{\downarrow}(\boldsymbol{r}) n_{\uparrow}-n_{\uparrow} n_{\downarrow}\right] \\
& =\sum_{\boldsymbol{k}, s}\left(\epsilon_{\boldsymbol{k}}+U n_{\bar{s}}\right) \widehat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k} s}-U \Omega n_{\uparrow} n_{\downarrow}
\end{aligned}
\end{align*}
$$
the mean field Hamiltonian, describing electrons which move in the uniform background of electrons of opposite spin coupling via the spin dependent exchange interaction ($\bar{s}$ denotes to opposite spin $s$ ). Fluctuations of the form $\left\langle\left[\widehat{\rho}_{\uparrow}(\boldsymbol{r})-n_{\uparrow} \backslash\left[\widehat{\rho}_{\downarrow}(\boldsymbol{r})-n_{\downarrow} \downarrow\right\rangle\right.\right.$ are neglected here. The advantage of this approximation is, that the many-body problem is now reduced to an effective one-particle problem, where only the mean electron interaction is taken into account. This is equivalent to a generalised Hartree-Fock approximation and enables us to calculate certain expectation values, such as the density of one spin species, e.g.;

$$
\begin{align*}
\begin{aligned}
n_{\uparrow} & =\frac{1}{\Omega} \sum_{\boldsymbol{k}}\left\langle\widehat{c}_{\boldsymbol{k} \uparrow}^{\dagger} \widehat{c}_{\boldsymbol{k} \uparrow}\right\rangle=\frac{1}{\Omega} \sum_{\boldsymbol{k}} f\left(\epsilon_{\boldsymbol{k}}+U n_{\downarrow}\right) \\
& =\int d \epsilon \frac{1}{\Omega} \sum_{\boldsymbol{k}} \delta\left(\epsilon-\epsilon_{\boldsymbol{k}}-U n_{\downarrow}\right) f(\epsilon) \\
& =\int d \epsilon \frac{1}{2} N\left(\epsilon-U n_{\downarrow}\right) f(\epsilon)
\end{aligned}
\end{align*}
$$
where $f(\epsilon)$ is the Fermi-Dirac distribution function. An analogous result is found for the opposite spin direction. These mean densities are determined self-consistently, namely such that the insertion of $n_{s}$ in into the mean field Hamiltonian (7.7) provides the correct output according to the expectation values given in equation (7.8). Furthermore, the constraint that the total number of electrons is conserved, must be implemented. The real magnetisation $M=\mu_{B} m$ is proportional to $m$ which is defined via
$$
\begin{align*}
n_{s}=\frac{1}{2}\left[\left(n_{\uparrow}+n_{\downarrow}\right)+s\left(n_{\uparrow}-n_{\downarrow}\right)\right]=\frac{n_{0}+s m}{2}
\end{align*}
$$
where $n_{0}$ is the total particle density. This leads to the two coupled equations
$$
\begin{align*}
\begin{aligned}
n_{0} & =\frac{1}{2} \int d \epsilon\left(N\left(\epsilon-U n_{\downarrow}\right)+N\left(\epsilon-U n_{\uparrow}\right)\right) f(\epsilon) \\
m & =\frac{1}{2} \int d \epsilon\left(N\left(\epsilon-U n_{\downarrow}\right)-N\left(\epsilon-U n_{\uparrow}\right)\right) f(\epsilon)
\end{aligned}
\end{align*}
$$
or equivalently
$$
\begin{align*}
\begin{aligned}
n_{0} & =\frac{1}{2} \sum_{s} \int d \epsilon N\left(\epsilon-\frac{U n_{0}}{2}-s \frac{U m}{2}\right) f(\epsilon) \\
m & =-\frac{1}{2} \sum_{s} s \int d \epsilon N\left(\epsilon-\frac{U n_{0}}{2}-s \frac{U m}{2}\right) f(\epsilon)
\end{aligned}
\end{align*}
$$
which usually can not be solved analytically and must be treated numerically.

### 7.1.2 Stoner Criterion

An approximate solution can be found if $m \ll n_{0}$. The two equations are solved by adapting the chemical potential $\mu$. For low temperatures and small magnetisation we can expand $\mu$ as
$$
\begin{align*}
\mu(m, T)=\epsilon_{F}+\Delta \mu(m, T)
\end{align*}
$$

The constant energy shift $-U n_{0} / 2$ appearing can be absorbed into $\epsilon_{F}$. The Fermi-Dirac distribution takes the form
$$
\begin{align*}
f(\epsilon)=\frac{1}{e^{\beta[\epsilon-\mu(m, T)]}+1}
\end{align*}
$$
where $\beta=\left(k_{B} T\right)^{-1}$. After expanding for small $m$, one obtains using the Sommerfeld expansion,
$$
\begin{align*}
\begin{aligned}
n_{0} & \approx \int d \epsilon f(\epsilon)\left[N(\epsilon)+\frac{1}{2}\left(\frac{U m}{2}\right)^{2} N^{\prime \prime}(\epsilon)\right] \\
& \approx \int_{0}^{\epsilon_{F}} d \epsilon[N(\epsilon)]+N\left(\epsilon_{F}\right) \Delta \mu+\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} N^{\prime}\left(\epsilon_{F}\right)+\frac{1}{2}\left(\frac{U m}{2}\right)^{2} N^{\prime}\left(\epsilon_{F}\right)
\end{aligned}
\end{align*}
$$
where we introduced the abbreviations $N^{\prime}(\epsilon)=d N(\epsilon) / d \epsilon$ and $N^{\prime \prime}(\epsilon)=d^{2} N(\epsilon) / d \epsilon^{2}$. Since the first term on the right side is identical to $n_{0}, \Delta \mu(m, T)$ is immediately found to be given by
$$
\begin{align*}
\Delta \mu(m, T) \approx-\frac{N^{\prime}\left(\epsilon_{F}\right)}{N\left(\epsilon_{F}\right)}\left[\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2}+\frac{1}{2}\left(\frac{U m}{2}\right)^{2}\right]
\end{align*}
$$

Analogously, the expansion of this equation in $m$ and $T$, results in
$$
\begin{align*}
\begin{aligned}
m & \approx \int d \epsilon f(\epsilon)\left[N^{\prime}(\epsilon) \frac{U m}{2}+\frac{1}{3!} N^{\prime \prime \prime}(\epsilon)\left(\frac{U m}{2}\right)^{3}\right] \\
& \approx\left[N\left(\epsilon_{F}\right)+\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} N^{\prime \prime}\left(\epsilon_{F}\right)+\frac{1}{3!}\left(\frac{U m}{2}\right)^{2} N^{\prime \prime}\left(\epsilon_{F}\right)+\Delta \mu N^{\prime}\left(\epsilon_{F}\right)\right]\left(\frac{U m}{2}\right)
\end{aligned}
\end{align*}
$$
and, finally, inserting the result for $\Delta \mu$, we find
$$
\begin{align*}
m=N\left(\epsilon_{F}\right)\left[1-\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} \Lambda_{1}^{2}\left(\epsilon_{F}\right)\right]\left(\frac{U m}{2}\right)-N\left(\epsilon_{F}\right) \Lambda_{2}^{2}\left(\epsilon_{F}\right)\left(\frac{U m}{2}\right)^{3}
\end{align*}
$$
where
$$
\begin{align*}
\Lambda_{1}^{2}\left(\epsilon_{F}\right)=\left(\frac{N^{\prime}\left(\epsilon_{F}\right)}{N\left(\epsilon_{F}\right)}\right)^{2}-\frac{N^{\prime \prime}\left(\epsilon_{F}\right)}{N\left(\epsilon_{F}\right)}, \quad \text { and } \quad \Lambda_{2}^{2}\left(\epsilon_{F}\right)=\frac{1}{2}\left(\frac{N^{\prime}\left(\epsilon_{F}\right)}{N\left(\epsilon_{F}\right)}\right)^{2}-\frac{N^{\prime \prime}\left(\epsilon_{F}\right)}{3!N\left(\epsilon_{F}\right)}
\end{align*}
$$

The structure is $m=a m+b m^{3}$, where $b$ is assumed to be negative. Thus, two types of solutions emerge
$$
\begin{align*}
m^{2}= \begin{cases}0, & a<1 \\ \frac{1-a}{b}, & a \geq 1\end{cases}
\end{align*}
$$

With this, $a=1$ corresponds to a critical value.

![Attachments/Notes/Solid-State Theory/IMG-0126164745492.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164745492.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=158&rect=122,190,464,341|•]]

Here, this condition corresponds to
$$
\begin{align*}
1=\frac{1}{2} U N\left(\epsilon_{F}\right)\left[1-\frac{\pi^{2}}{6}\left(k_{B} T_{C}\right)^{2} \Lambda_{1}^{2}\left(\epsilon_{F}\right)\right]
\end{align*}
$$
yielding
$$
\begin{align*}
k_{B} T_{C}=\frac{\sqrt{6}}{\pi \Lambda_{1}\left(\epsilon_{F}\right)} \sqrt{1-\frac{2}{U N\left(\epsilon_{F}\right)}} \propto \sqrt{1-\frac{U_{c}}{U}}
\end{align*}
$$
for $U>U_{c}=2 / N\left(\epsilon_{F}\right)$. This is an instability condition for the paramagnetic Fermi liquid state with $m=0$, and $T_{C}$ is the Curie temperature, below which the ferromagnetic state appears (see Figure 7.1). The temperature dependence of the magnetisation $M$ of the ferromagnetic state ( $T<T_{C}$ ) is given by
$$
\begin{align*}
M(T)=\mu_{B} m(T) \propto \sqrt{T_{C}-T}
\end{align*}
$$
close to the phase transition $\left(T_{C}-T \ll T_{C}\right)$. Note that the Curie temperature $T_{C}$ is nonzero for $U N\left(\epsilon_{F}\right)>2$, and $T_{C} \rightarrow 0$ in the limit $U N\left(\epsilon_{F}\right) \rightarrow 2_{+}$. For $U N\left(\epsilon_{F}\right)<2$ no phase transition occurs. This condition for a finite transition temperature $T_{C}$ is known as the Stoner criterion. This simple model also describes a so-called quantum phase transition, i.e., a phase transition that appears at $T=0$ as a function of system parameters, which in our case are the density of states $N\left(\epsilon_{F}\right)$ and the Coulomb repulsion $U$. While thermal fluctuations destroy the ordered state at finite temperature via entropy increase, entropy is irrelevant at $T=0$. Here, the order is suppressed by quantum fluctuations (Heisenberg's uncertainty principle). At zero temperature we find for $m$ the following dependence on $U$:
$$
\begin{align*}
m(U)=\frac{1}{\Lambda_{2}\left(\epsilon_{F}\right)}\left(\frac{U_{c}}{U}\right)^{3 / 2}\left(\frac{U}{U_{c}}-1\right)^{1 / 2}
\end{align*}
$$
for $U>U_{c}$ and $m=0$ for $U<U_{c}$. The density of states as an internal parameter can, for example, be changed by applying a pressure. By reducing the lattice constant, pressure may facilitate the motion of the conduction electrons and increase the Fermi velocity. Consequently, the density of states is reduced:

![Attachments/Notes/Solid-State Theory/IMG-0126164745807.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164745807.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=159&rect=117,252,468,400|•]]

Indeed, pressure is able to destroy ferromagnetism in weakly ferromagnetic materials as $\mathrm{ZrZn}_{2}, \mathrm{MnSi}$, and $\mathrm{UGe}_{2}$. In other materials, the Curie temperature is high enough, such that the technologically applicable pressure is insufficient to suppress magnetism. It is, however, possible, that pressure leads to other transitions, such as structural phase transitions, that eventually destroy magnetism. This is seen in iron (Fe), where a pressure of about 12 GPa induces a transition from magnetic iron with body-centred crystal (bcc) structure to a nonmagnetic, hexagonal close packed (hcp) structure:

![Attachments/Notes/Solid-State Theory/IMG-0126164746111.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164746111.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=160&rect=100,602,483,752|•]]

While this structural transition is a quantum phase transition as well, it appears as a discontinuous, first order transition. Note that the Stoner instability is a simplification of the quantum phase transition. In most cases, a discontinuous phase transition originates in the band structure or in fluctuation effects, which were ignored here. In some cases, pressure can also induce an increase in $N\left(\epsilon_{F}\right)$, for example in metals with multiple bands, where compression leads to a redistribution of charge. One example is the ruthenate $\mathrm{Sr}_{3} \mathrm{Ru}_{2} \mathrm{O}_{7}$ for which uniaxial pressure along the $z$-axis leads to magnetism. Finally, let us turn to the question, why Cu , being a direct neighbour of Ni in the 3d-row of the periodic table, is not ferromagnetic, even though both elemental metals share the same fcc crystal structure. The answer is given by the Stoner criterion $U N\left(\epsilon_{F}\right)=2$. While the conduction electrons at the Fermi level of Ni have 3d-character and belong to a narrow band with a large density of states, the Fermi energy of Cu is situated in the broad 4 s -band and constitutes a much smaller density of states:

![Attachments/Notes/Solid-State Theory/IMG-0126164746408.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164746408.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=160&rect=187,257,406,434|•]]

With this, the Cu conduction electrons are much less localised and feature a weaker tendency towards ferromagnetic order.

### 7.1.3 Spin Susceptibility for $T>T_{C}$

Next we study the response of the metallic system in the paramagnetic state when we apply a small magnetic field $H$ along the $z$-axis, which induces a spin polarisation due to the Zeeman coupling,
$$
\begin{align*}
H_{Z}=-g \mu_{B} \int d^{3} r H \frac{1}{2}\left\{\widehat{\rho}_{\uparrow}(\boldsymbol{r})-\widehat{\rho}_{\downarrow}(\boldsymbol{r})\right\} .
\end{align*}
$$

From the self-consistency equations (7.14) and (7.15) we obtain
$$
\begin{align*}
\begin{aligned}
m & =-\frac{1}{2} \int d \epsilon f(\epsilon) \sum_{s} s N\left(\epsilon-\mu_{B} s H-s \frac{U m}{2}\right) \\
& \approx \int d \epsilon f(\epsilon) N^{\prime}(\epsilon)\left(\frac{U m}{2}+\mu_{B} H\right) \\
& =N\left(\epsilon_{F}\right)\left[1-\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} \Lambda_{1}\left(\epsilon_{F}\right)^{2}\right]\left(\frac{U m}{2}+\mu_{B} H\right)
\end{aligned}
\end{align*}
$$
to lowest order in $m$ and $H$. Solving this equation for $m$ yields
$$
\begin{align*}
M=\mu_{B} m=\frac{\chi_{0}(T)}{1-U \chi_{0}(T) / 2 \mu_{B}^{2}} H,
\end{align*}
$$
and, consequently, the magnetic susceptibility $\chi$ reads
$$
\begin{align*}
\chi=\frac{M}{H}=\frac{\chi_{0}(T)}{1-U \chi_{0}(T) / 2 \mu_{B}^{2}},
\end{align*}
$$
where the bare susceptibility $\chi_{0}$ is given by
$$
\begin{align*}
\chi_{0}(T)=\mu_{B}^{2} N\left(\epsilon_{F}\right)\left[1-\frac{\pi^{2}}{6}\left(k_{B} T\right)^{2} \Lambda_{1}\left(\epsilon_{F}\right)^{2}\right] .
\end{align*}
$$

We see, that the denominator of the susceptibility $\chi(T)$ vanishes exactly when the Stoner instability criterion for finite temperatures is fulfilled. Thus, for $U N\left(\epsilon_{F}\right)>2$ the susceptibility
$$
\begin{align*}
\chi(T) \approx \frac{\chi_{0}\left(T_{C}\right)}{\left(\frac{U N\left(\epsilon_{F}\right)}{2}-1\right)\left(\frac{T^{2}}{T_{C}^{2}}-1\right)}=\frac{\chi_{0}\left(T_{C}\right)}{\frac{U N\left(\epsilon_{F}\right) \pi^{2}}{12} \Lambda_{1}^{2}\left(\epsilon_{F}\right) k_{B}^{2}\left(T^{2}-T_{C}^{2}\right)}
\end{align*}
$$
diverging at $T_{c}$  indicates the instability. Note that for $T \rightarrow T_{C}$ from the paramagnetic side, the susceptibility diverges as $\chi(T) \propto\left|T_{C}-T\right|^{-1}$ corresponding to the mean field behaviour, since the mean field critical exponent $\gamma$ for the susceptibility takes the value $\gamma=1$.
For the case of $U N\left(\epsilon_{F}\right)<2$ there is no instability down to $T=0$. In the zero-temperature limit we obtain
$$
\begin{align*}
\chi(0)=\frac{\chi_{0}(0)}{1-\frac{U N\left(\epsilon_{F}\right)}{2}}=\frac{\mu_{B}^{2} N\left(\epsilon_{F}\right)}{1+F_{0}^{a}},
\end{align*}
$$
corresponding to the form found in the Landau Fermi liquid theory with $F_{0}^{a}>-1$. Note that $\chi_{0}(0)=\mu_{B}^{2} N\left(\epsilon_{F}\right)$ is the Pauli spin susceptibility.

---
## 7.2 General Spin Susceptibility and Magnetic Instabilities
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=161&selection=600,0,602,54|•]]

The ferromagnetic state is characterised by a uniform magnetisation. There are, however, magnetically ordered states which do not feature a nonzero net magnetisation but specially modulated magnetic moments.. Examples are spin density wave (SDW) states, antiferromagnets and spin spiral states. In this section, we analyse general instability conditions for metallic systems to some magnetically ordering.

### 7.2.1 General Dynamic Spin Susceptibility

We consider a magnetic field, oscillating in time and with spacial modulation
$$
\begin{align*}
\boldsymbol{H}(\boldsymbol{r}, t)=\boldsymbol{H}_{0} e^{i \boldsymbol{q} \cdot \boldsymbol{r}-i \omega t} e^{\eta t}
\end{align*}
$$
where $\eta \rightarrow 0_{+}$yields an adiabatic switching on the field. We calculate the resulting magnetisation, for the corresponding Fourier component. For that, we proceed analogous to the discussion in Chapter 3 and define the spin density operator $\widehat{\boldsymbol{S}}(\boldsymbol{r})$ in real space,
$$
\begin{align*}
\widehat{\boldsymbol{S}}(\boldsymbol{r})=\frac{\hbar}{2} \sum_{s, s^{\prime}} \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \boldsymbol{\sigma}_{s s^{s^{\prime}}} \widehat{\Psi}_{s^{\prime}}(\boldsymbol{r})=\frac{\hbar}{2}\left(\begin{array}{c}
\widehat{\Psi}_{\uparrow}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{\downarrow}(\boldsymbol{r})+\widehat{\Psi}_{\downarrow}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{\uparrow}(\boldsymbol{r}) \\
-i \widehat{\Psi}_{\uparrow}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{\downarrow}(\boldsymbol{r})+i \widehat{\Psi}_{\downarrow}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{\uparrow}(\boldsymbol{r}) \\
\widehat{\Psi}_{\uparrow}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{\uparrow}(\boldsymbol{r})-\widehat{\Psi}_{\downarrow}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{\downarrow}(\boldsymbol{r})
\end{array}\right)
\end{align*}
$$
with momentum space representation
$$
\begin{align*}
\widehat{\boldsymbol{S}}_{\boldsymbol{q}}=\int d^{3} r \widehat{\boldsymbol{S}}(\boldsymbol{r}) e^{-i \boldsymbol{q} \cdot \boldsymbol{r}}=\frac{\hbar}{2} \sum_{\boldsymbol{k}, s, s^{\prime}} c_{\boldsymbol{k}, s}^{\dagger} \boldsymbol{\sigma}_{s s^{\prime}} c_{\boldsymbol{k}+\boldsymbol{q}, s^{\prime}}=\sum_{\boldsymbol{k}} \widehat{\boldsymbol{S}}_{\boldsymbol{k}, \boldsymbol{q}}
\end{align*}
$$
where $\widehat{\boldsymbol{S}}_{\boldsymbol{k}, \boldsymbol{q}}=\sum_{s, s^{\prime}}(\hbar / 2) c_{\boldsymbol{k}, s}^{\dagger} \boldsymbol{\sigma}_{s s^{\prime}} \boldsymbol{c}_{\boldsymbol{k}+\boldsymbol{q}, \boldsymbol{s}^{\prime}}$. The Hamiltonian of the electronic system with contact interaction is given by
$$
\begin{align*}
\mathcal{H}=\mathcal{H}_{0}+\mathcal{H}_{z}+\mathcal{H}_{\mathrm{int}},
\end{align*}
$$
where
$$
\begin{align*}
\begin{aligned}
\mathcal{H}_{0} & =\sum_{\boldsymbol{k}, s} \epsilon_{\boldsymbol{k}} \widehat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k} s}, \\
\mathcal{H}_{Z} & =-\frac{g \mu_{B}}{\hbar} \int d^{3} r \boldsymbol{H}(\boldsymbol{r}, t) \cdot \widehat{\boldsymbol{S}}(\boldsymbol{r}), \\
\mathcal{H}_{\mathrm{int}} & =U \int d^{3} r \widehat{\rho}_{\uparrow}(\boldsymbol{r}) \widehat{\rho}_{\downarrow}(\boldsymbol{r}) .
\end{aligned}
\end{align*}
$$

The operator $\mathcal{H}_{z}$ describes the Zeeman coupling between the electrons of the metal and the perturbing field. We investigate a magnetic field
$$
\begin{align*}
\boldsymbol{H}=H^{+}(\boldsymbol{q}, \omega) e^{i \boldsymbol{q} \cdot \boldsymbol{r}-i \omega t} e^{\eta t}\left(\begin{array}{c}
1 \\
-i \\
0
\end{array}\right)+\text { h.c. }
\end{align*}
$$
in the $x-y$-plane. The Zeeman term then simplifies to
$$
\begin{align*}
\mathcal{H}_{z}=-\frac{g \mu_{B}}{\hbar} H^{+}(\boldsymbol{q}, \omega) \widehat{S}_{-\boldsymbol{q}}^{-} e^{i \boldsymbol{q} \cdot \boldsymbol{r}-i \omega t} e^{\eta t}+\text { h.c. }
\end{align*}
$$
where $\widehat{S}_{-\boldsymbol{q}}^{ \pm}=\widehat{S}_{-q}^{x} \pm i \widehat{S}_{-q}^{y}$. In the following the Hermitian conjugate (h.c.) part will be ignored. We use
$$
\begin{align*}
\widehat{S}_{-\boldsymbol{q}}^{-}=\hbar \sum_{\boldsymbol{k}} \widehat{c}_{\boldsymbol{k} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k}-\boldsymbol{q} \uparrow},
\end{align*}
$$
in the $c$-operator representation. In the framework of linear response theory, this coupling will induce a magnetisation $M_{\text {ind }}^{+}(\boldsymbol{q}, t)=\left(\mu_{B} / \hbar \Omega\right)\left\langle\widehat{S}_{\boldsymbol{q}}^{+}(t)\right\rangle \propto e^{-i \omega t+\eta t}$. Using the same equations of motion as in Section 3.2,
$$
\begin{align*}
i \hbar \frac{\partial}{\partial t} \widehat{S}_{\boldsymbol{k}, \boldsymbol{q}}^{+}=\left[\widehat{S}_{\boldsymbol{k}, \boldsymbol{q}}^{+}, \mathcal{H}\right]
\end{align*}
$$
with $\widehat{S}_{\boldsymbol{k}, \boldsymbol{q}}^{+}=\hbar \widehat{c}_{\boldsymbol{k} \uparrow}^{\dagger} \widehat{c}_{\boldsymbol{k}+\boldsymbol{q} \downarrow}$, we can determine this induced magnetisation, first without the interaction term $(\mathrm{U}=0)$. We obtain for the given Fourier component,
$$
\begin{align*}
i \hbar \frac{\partial}{\partial t} \widehat{S}_{\boldsymbol{k}, \boldsymbol{q}}^{+}(t)=\left(\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}\right) \widehat{S}_{\boldsymbol{k}, \boldsymbol{q}}^{+}(t)-g \hbar \mu_{B}\left(\widehat{c}_{\boldsymbol{k} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k} \downarrow}-\widehat{c}_{\boldsymbol{k}+\boldsymbol{q} \uparrow}^{\dagger} \widehat{c}_{\boldsymbol{k}+\boldsymbol{q} \uparrow}\right) H^{+}(\boldsymbol{q}, \omega) e^{-i \omega t+\eta t}
\end{align*}
$$

Using the monochromatic time dependence of the field and the response $\left(e^{-i \omega t+\eta t}\right)$ and applying the thermal average we obtain,
$$
\begin{align*}
\left(\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}-\hbar \omega-i \hbar \eta\right)\left\langle S_{\boldsymbol{k}, \boldsymbol{q}}^{+}(t)\right\rangle=-g \hbar \mu_{B}\left(n_{\boldsymbol{k}+\boldsymbol{q} \uparrow}-n_{\boldsymbol{k} \downarrow}\right) H^{+}(\boldsymbol{q}, \omega) e^{-i \omega t+\eta t}
\end{align*}
$$
which then leads to the induced spin density-magnetisation,
$$
\begin{align*}
\begin{aligned}
\frac{\hbar}{\mu_{B}} M_{\mathrm{ind}}^{+}(\boldsymbol{q}, \omega) e^{-i \omega t+\eta t} & =\frac{1}{\Omega}\left\langle S_{\text {ind }}^{+}(\boldsymbol{q}, \omega)\right\rangle e^{-i \omega t+\eta t}=\frac{1}{\Omega} \sum_{\boldsymbol{k}}\left\langle S_{\boldsymbol{k}, \boldsymbol{q}}^{+}(t)\right\rangle \\
& =\frac{\hbar}{\mu_{B}} \chi_{0}(\boldsymbol{q}, \omega) H^{+}(\boldsymbol{q}, \omega) e^{-i \omega t+\eta t}
\end{aligned}
\end{align*}
$$
with
$$
\begin{align*}
\chi_{0}(\boldsymbol{q}, \omega)=-\frac{g \mu_{B}^{2}}{\Omega} \sum_{\boldsymbol{k}} \frac{n_{\boldsymbol{k}+\boldsymbol{q} \uparrow}-n_{\boldsymbol{k} \downarrow}}{\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}-\hbar \omega-i \hbar \eta}
\end{align*}
$$

Note that the form of the bare susceptibility $\chi_{0}(\boldsymbol{q}, \omega)$ is similar to the Lindhard function (3.63), actually identical, if there is no spin polarisation. The result (7.52) describes the induced spin density within linear response approximation.
In a next step, we want to include the effects of the interaction. Analogously to the induce charge modulation found in Section 3.2 , the induced spin density generates an effective field on the spin of the electrons ("mean field"). The induced spin polarisation may be represented as an effective magnetic field through the exchange interaction. To implement this feature let us rewrite the contact interaction term in the form
$$
\begin{align*}
\begin{aligned}
\mathcal{H}_{\mathrm{int}} & =\frac{U}{\Omega} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}, \boldsymbol{q}^{\prime}} \widehat{c}_{\boldsymbol{k}+\boldsymbol{\boldsymbol { q } ^ { \prime } \uparrow}}^{\dagger} \widehat{c}_{\boldsymbol{k} \uparrow} \widehat{c}_{\boldsymbol{k}^{\prime}-\boldsymbol{q}^{\prime} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k}^{\prime} \downarrow} \\
& =-\frac{U}{2 \Omega} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}, \boldsymbol{q}^{\prime}}\left\{\widehat{c}_{\boldsymbol{k} \uparrow}^{\dagger} \widehat{c}_{\boldsymbol{k}+\boldsymbol{q}^{\prime} \downarrow} \widehat{c}_{\boldsymbol{k}^{\prime} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k}^{\prime}-\boldsymbol{q}^{\prime} \uparrow}+\widehat{c}_{\boldsymbol{k} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k}+\boldsymbol{q}^{\prime} \uparrow} \widehat{c}_{\boldsymbol{k}^{\prime} \uparrow}^{\dagger} \widehat{c}_{\boldsymbol{k}^{\prime}-\boldsymbol{q}^{\prime} \downarrow}\right\}+\frac{U}{\Omega} \sum_{\boldsymbol{k}}\left(\widehat{n}_{\boldsymbol{k} \uparrow}+\widehat{n}_{\boldsymbol{k} \uparrow}\right) \\
& =-\frac{U}{2 \Omega \hbar^{2}} \sum_{\boldsymbol{q}^{\prime}}\left\{\widehat{S}_{\boldsymbol{q}^{\prime}}^{+} \widehat{S}_{-\boldsymbol{q}^{\prime}}^{-}+\widehat{S}_{\boldsymbol{q}^{\prime}}^{-} \widehat{S}_{-\boldsymbol{q}^{\prime}}^{+}\right\}+\frac{U}{\Omega} \sum_{\boldsymbol{k}} \widehat{n}_{\boldsymbol{k}} .
\end{aligned}
\end{align*}
$$

The last term proportional to $\widehat{n}_{\boldsymbol{k}}=\widehat{n}_{\boldsymbol{k} \uparrow}+\widehat{n}_{\boldsymbol{k} \uparrow}$ can be absorbed into the term of the chemical potential. The induced spin polarisation $\left\langle S_{\text {ind }}^{+}(\boldsymbol{q}, \omega)\right\rangle$ acts through the exchange interaction as an effective (local) field, as can be seen by replacing $\widehat{S}_{\boldsymbol{q}^{\prime}}^{+} \rightarrow\left\langle S_{\text {ind }}^{+}(\boldsymbol{q}, \omega)\right\rangle \delta_{\boldsymbol{q}, \boldsymbol{q}^{\prime}}$,
$$
\begin{align*}
-\frac{U}{2 \Omega \hbar^{2}} \sum_{\boldsymbol{q}^{\prime}}\left\{\widehat{S}_{\boldsymbol{q}^{\prime}}^{+} \widehat{S}_{-\boldsymbol{q}^{\prime}}^{-}+\widehat{S}_{\boldsymbol{q}^{\prime}}^{-} \widehat{S}_{-\boldsymbol{q}^{\prime}}^{+}\right\} \rightarrow-\frac{U}{\Omega \hbar^{2}}\left\langle S^{+}(\boldsymbol{q}, \omega)\right\rangle \widehat{S}_{-\boldsymbol{q}}^{-}=-\frac{g \mu_{B}}{\Omega \hbar} H_{\mathrm{ind}}^{+}(\boldsymbol{q}, \omega) \widehat{S}_{-\boldsymbol{q}}^{-}
\end{align*}
$$
where the effective magnetic field $H_{\text {ind }}^{+}(\boldsymbol{q}, \omega)$ finally reads
$$
\begin{align*}
H_{\mathrm{ind}}^{+}(\boldsymbol{q}, \omega)=\frac{U}{\Omega g \mu_{B} \hbar}\left\langle S^{+}(\boldsymbol{q}, \omega)\right\rangle .
\end{align*}
$$
with the same monochromatic time dependence as above. This induced field acts on the spins as well, such that the total response of the spin density on the external field becomes
$$
\begin{align*}
\begin{aligned}
M^{+}(\boldsymbol{q}, \omega) & =\frac{\mu_{B}}{\Omega \hbar}\left\langle S^{+}(\boldsymbol{q}, \omega)\right\rangle \\
& =\chi_{0}(\boldsymbol{q}, \omega)\left[H^{+}(\boldsymbol{q}, \omega)+H_{\mathrm{ind}}^{+}(\boldsymbol{q}, \omega)\right] \\
& =\chi_{0}(\boldsymbol{q}, \omega) H^{+}(\boldsymbol{q}, \omega)+\chi_{0}(\boldsymbol{q}, \omega) \frac{U}{\Omega g \mu_{B} \hbar}\left\langle S^{+}(\boldsymbol{q}, \omega)\right\rangle \\
& =\chi_{0}(\boldsymbol{q}, \omega) H^{+}(\boldsymbol{q}, \omega)+\chi_{0}(\boldsymbol{q}, \omega) \frac{U}{g \mu_{B}^{2}} M^{+}(\boldsymbol{q}, \omega) .
\end{aligned}
\end{align*}
$$

In the last step we introduce self-consistency taking the induced magnetisation as the real magnetisation. With the definition
$$
\begin{align*}
M^{+}(\boldsymbol{q}, \omega)=\chi(\boldsymbol{q}, \omega) H^{+}(\boldsymbol{q}, \omega)
\end{align*}
$$
of the susceptibility we find
$$
\begin{align*}
\chi(\boldsymbol{q}, \omega)=\frac{\chi_{0}(\boldsymbol{q}, \omega)}{1-\frac{U}{2 \mu_{B}^{2}} \chi_{0}(\boldsymbol{q}, \omega)} .
\end{align*}
$$
which corresponds to the random phase approximation (RPA) (see Section 3.2). This form of the susceptibility is found to be valid for all field directions, as long as spin-orbit coupling is neglected. Within the random phase approximation, the generalisation of the Stoner criterion for the appearance of an instability of the system at finite temperature reads
$$
\begin{align*}
1=\frac{U}{2 \mu_{B}^{2}} \chi_{0}(\boldsymbol{q}, \omega) .
\end{align*}
$$

For the limiting case $(\boldsymbol{q}, \omega) \rightarrow(\mathbf{0}, 0)$ corresponding to a uniform, static external field, we obtain for the bare susceptibility
$$
\begin{align*}
\begin{aligned}
& \chi_{0}(\boldsymbol{q}, 0)=-\frac{2 \mu_{B}^{2}}{\Omega} \sum_{\boldsymbol{k}} \frac{n_{\boldsymbol{k}+\boldsymbol{q} \uparrow}-n_{\boldsymbol{k} \downarrow}}{\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}} \\
& \xrightarrow{\boldsymbol{q} \rightarrow 0}-\frac{2 \mu_{B}^{2}}{\Omega} \sum_{\boldsymbol{k}} \frac{\partial f\left(\epsilon_{\boldsymbol{k}}\right)}{\partial \epsilon_{\boldsymbol{k}}}=\chi_{0}(T),
\end{aligned}
\end{align*}
$$
which corresponds to the Pauli susceptibility $(g=2)$. Then, $\chi(T)$ from equation (7.59) is again cast into the form (7.35) and describes the instability of the metal with respect to ferromagnetic spin polarisation, when the denominator vanishes. Similar to the charge density wave, the isotropic deformation for $\boldsymbol{q}=\mathbf{0}$ is not the leading instability, when $\chi_{0}(\boldsymbol{Q}, 0)>\chi_{0}(\mathbf{0}, 0)$ for a finite $\boldsymbol{Q}$. Then, another form of magnetic order is more favored.

### 7.2.2 Instability with Finite Wave Vector $Q$

In order to show that, indeed, the Stoner instability does not always prevail among all possible magnetic instabilities, we first go through a simple argument based on the local susceptibility. For that, we define the local magnetic moment along the $z$-axis, $M(\boldsymbol{r})=\mu_{B}\left\langle\widehat{\rho}_{\uparrow}(\boldsymbol{r})-\widehat{\rho}_{\downarrow}(\boldsymbol{r})\right\rangle$, and consider the nonlocal relation
$$
\begin{align*}
M(\boldsymbol{r})=\int d^{3} r^{\prime} \tilde{\chi}_{0}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right) H_{z}\left(\boldsymbol{r}^{\prime}\right)
\end{align*}
$$
within the linear response approximation. In Fourier space, the same relation reads
$$
\begin{align*}
M_{\boldsymbol{q}}=\chi_{0}(\boldsymbol{q}) H_{\boldsymbol{q}},
\end{align*}
$$
with
$$
\begin{align*}
\chi_{0}(\boldsymbol{q})=\int d^{3} r \tilde{\chi}_{0}(\boldsymbol{r}) e^{-i \boldsymbol{q} \cdot \boldsymbol{r}}
\end{align*}
$$

Now, compare $\chi_{0}(\boldsymbol{q}=0)$ with $\overline{\chi_{0}(\boldsymbol{q})}$ defined as
$$
\begin{align*}
\overline{\chi_{0}(\boldsymbol{q})}=\frac{1}{\Omega} \sum_{\boldsymbol{q}} \chi_{0}(\boldsymbol{q})=\frac{1}{\Omega} \sum_{\boldsymbol{q}} \int d^{3} r \tilde{\chi}_{0}(\boldsymbol{r}) e^{-i \boldsymbol{q} \cdot \boldsymbol{r}}=\int d^{3} r \tilde{\chi}_{0}(\boldsymbol{r}) \delta(\boldsymbol{r})=\tilde{\chi}_{0}(\boldsymbol{r}=0)
\end{align*}
$$

This $\boldsymbol{q}$-averaged susceptibility corresponds to the local susceptibility. For a paramagnetic metal at $T=0$ we may write
$$
\begin{align*}
\overline{\chi_{0}(\boldsymbol{q})}=\frac{2 \mu_{B}^{2}}{\Omega^{2}} \sum_{\boldsymbol{k}, \boldsymbol{q}} \frac{n_{\boldsymbol{k}+\boldsymbol{q} \uparrow}-n_{\boldsymbol{k} \downarrow}}{\epsilon_{\boldsymbol{k}}-\epsilon_{\boldsymbol{k}+\boldsymbol{q}}}=\frac{\mu_{B}^{2}}{2} \int d \epsilon N(\epsilon) \int d \epsilon^{\prime} N\left(\epsilon^{\prime}\right) \frac{f(\epsilon)-f\left(\epsilon^{\prime}\right)}{\epsilon^{\prime}-\epsilon},
\end{align*}
$$
and must be compared to $\chi_{0}(\boldsymbol{q}=0)=\mu_{B}^{2} N\left(\epsilon_{F}\right)\left(f(\epsilon)=\Theta\left(\epsilon_{F}-\epsilon\right)\right)$. The local susceptibility depends on the density of states and the Fermi energy of the system. A very good qualitative understanding can be obtained by a very simple form
$$
\begin{align*}
N(\epsilon)=\left\{\begin{array}{lr}
\frac{1}{D}, & -D \leq \epsilon \leq D \\
0, & |\epsilon|>D
\end{array}\right.
\end{align*}
$$
for the density of states which does not correspond to particular band structure but mimics a band of width $2 D$. With this rough approximation, the integral in equation (7.66) is easily evaluated. The ratio between $\overline{\chi(\boldsymbol{q})}$ and $\chi_{0}(\boldsymbol{q}=0)$ is then found to be
$$
\begin{align*}
R_{0}=\frac{\overline{\chi_{0}(\boldsymbol{q})}}{\chi_{0}(\boldsymbol{q}=0)}=\ln \left(\frac{4}{1-\eta^{2}}\right)+\eta \ln \left(\frac{1-\eta}{1+\eta}\right)
\end{align*}
$$
with $\eta=\epsilon_{F} / D$ where $-D<\epsilon_{F}<+D$. For both small and large band fillings $\left(\epsilon_{F}\right.$ close to the band edges), the tendency towards ferromagnetism dominates, whereas when $\epsilon_{F}$ lies in the centre of the band, the susceptibility $\chi_{0}(\boldsymbol{q})$ is not maximal at $\boldsymbol{q}=0$ anymore, and magnetic ordering with a well-defined finite $\boldsymbol{q}=\boldsymbol{Q}$ becomes more probable.

![Attachments/Notes/Solid-State Theory/IMG-0126164746746.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164746746.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=165&rect=188,597,401,754|•]]

### 7.2.3 Influence of the Band Structure

Whether magnetic order arises at finite $\boldsymbol{q}$ or not depends strongly on the details of the band structure. The argument given above, comparing the local $(\boldsymbol{r}=0)$ to the uniform $(\boldsymbol{q}=0)$ susceptibility is nothing more than a vague indicator for a possible instability at nonzero $\boldsymbol{q}$. A crucial ingredient for the appearance of magnetic order at a given $\boldsymbol{q}=\boldsymbol{Q}$ is the so-called nesting of the Fermi surface. Within extended areas of the Fermi surface the energy dispersion satisfies the nesting condition,
$$
\begin{align*}
\xi_{k+Q}=-\xi_{k}
\end{align*}
$$
where $\xi_{\boldsymbol{k}}=\epsilon_{\boldsymbol{k}}-\epsilon_{F}$ and $\boldsymbol{Q}$ is some fixed vector. The nesting conditions connects for given $\boldsymbol{k}$ an electron- and hole-like band states (at $T=0$ filled and empty states, respectively). If the Fermi surface of a material features such a nesting trait, the susceptibility will be dominated by the contribution from this vector $\boldsymbol{Q}$. In order to see this, let us investigate the static susceptibility $\chi_{0}(\boldsymbol{q})$ for $\boldsymbol{q}=\boldsymbol{Q}$ under the assumption, that equation (7.69) holds for all $\boldsymbol{k}$ (see tight-binding example below). Thus,
$$
\begin{align*}
\chi_{0}(\boldsymbol{Q} ; T)=\frac{2 \mu_{B}^{2}}{\Omega} \sum_{\boldsymbol{k}} \frac{n_{\boldsymbol{k}+\boldsymbol{Q}}-n_{\boldsymbol{k}}}{\xi_{\boldsymbol{k}}-\xi_{\boldsymbol{k}+\boldsymbol{Q}}}=\mu_{B}^{2} \int \frac{d^{3} k}{(2 \pi)^{3}} \frac{\tilde{f}\left(-\xi_{\boldsymbol{k}}\right)-\tilde{f}\left(\xi_{\boldsymbol{k}}\right)}{\xi_{\boldsymbol{k}}},
\end{align*}
$$
where $\tilde{f}(\xi)=f\left(\xi+\epsilon_{F}\right)=f(\epsilon)=\left[\exp \left(\xi / k_{B} T\right)+1\right]^{-1}$ and $f$ is the Fermi-Dirac distribution. Under the further assumption that $\xi_{k}$ is weakly angle dependent, we find
$$
\begin{align*}
\chi_{0}(\boldsymbol{Q} ; T)=\mu_{B}^{2} \int \frac{d^{3} k}{(2 \pi)^{3}} \frac{\tanh \left(\xi_{\boldsymbol{k}} / 2 k_{B} T\right)}{\xi_{k}}=\frac{\mu_{B}^{2}}{2} \int d \xi N\left(\xi+\epsilon_{F}\right) \frac{\tanh \left(\xi / 2 k_{B} T\right)}{\xi} .
\end{align*}
$$

In order to approximate this integral properly, we notice that the integral has a logarithmic divergence a infinite energies $\xi$. The band width gives a natural cutoff. Let us, therefore, take the density of stateswith $\epsilon_{F}=0$,
$$
\begin{align*}
\begin{aligned}
\chi_{0}(\boldsymbol{Q} ; T) & \approx \mu_{B}^{2} N\left(\epsilon_{F}\right) \int_{0}^{\epsilon_{0}} d \xi \frac{\tanh \left(\xi / 2 k_{B} T\right)}{\xi} \\
& =\mu_{B}^{2} N\left(\epsilon_{F}\right)\left(\ln \left(\frac{\epsilon_{0}}{2 k_{B} T}\right)+\ln \left(\frac{4 e^{\gamma}}{\pi}\right)\right) \approx \mu_{B}^{2} N\left(\epsilon_{F}\right) \ln \left(\frac{1.14 \epsilon_{0}}{2 k_{B} T}\right),
\end{aligned}
\end{align*}
$$
where we assumed $\epsilon_{0} \gg k_{B} T$, cutoff energy of the order of the band width, and where $\gamma \approx 0.57721$ is the Euler constant. The bare susceptibility $\chi_{0}$ diverges logarithmically at zero temperatures. Inserting the result (7.73) into the generalised Stoner relation (7.60), results in
$$
\begin{align*}
0=1-\frac{U N\left(\epsilon_{F}\right)}{2} \ln \left(\frac{1.14 \epsilon_{0}}{2 k_{B} T_{c}}\right),
\end{align*}
$$
with the critical temperature
$$
\begin{align*}
k_{B} T_{c}=1.14 \epsilon_{0} e^{-2 / U N\left(\epsilon_{F}\right)} .
\end{align*}
$$

A finite critical temperature persists for arbitrarily small positive values of $U N\left(\epsilon_{F}\right)$. The nesting condition for a given $\boldsymbol{Q}$ leads to a maximum of $\chi_{0}(\boldsymbol{q}, 0 ; T)$ at $\boldsymbol{q}=\boldsymbol{Q}$ and triggers the relevant instability in the system. The latter finally stabilises in a magnetic ordered phase with wave vector $\boldsymbol{Q}$, the so-called spin density wave. The spin density distribution takes, for example, the form
$$
\begin{align*}
\boldsymbol{S}(\boldsymbol{r})=\hat{z} S \cos (\boldsymbol{Q} \cdot \boldsymbol{r}),
\end{align*}
$$
without a uniform component. In comparison, the charge density wave was a modulation of the charge density with a much smaller amplitude than the height of the uniform density, i.e.,
$$
\begin{align*}
\rho(\boldsymbol{r})=\rho_{0}+\delta \rho \cos (\boldsymbol{Q} \cdot \boldsymbol{r}),
\end{align*}
$$
with $\delta \rho \ll \rho_{0}$. The spin density state frequently appear in low-dimensional systems like organic conductors, or in transition metals such as chromium (Cr) for example. In all cases, nesting plays an important role:

![Attachments/Notes/Solid-State Theory/IMG-0126164747053.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164747053.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=167&rect=109,505,481,638|•]]

In quasi-one-dimensional electron systems, a main direction of motion dominates over two other directions with weak dispersion. In this case, the nesting condition is very probable to be fulfilled, as it is schematically shown in the centre panel of the figure above. Chromium is a three-dimensional metal, where nesting occurs between a electron-like Fermi surface around the $\Gamma$-point and a hole-like Fermi surface at the Brillouin zone boundary ($H$-point). These Fermi surfaces originate in different bands (right panel in Figure 7.6). Chromium has a cubic body centred crystal structure, where the $H$-point at ( $\pi / a, 0,0$ ) leads to the nesting vector $\boldsymbol{Q}_{x} \|(1,0,0)$ and equivalent vectors in $y$ - and $z$-direction, which are incommensurable with the lattice.

The textbook example of nesting is found in a tight-binding model of a simple cubic lattice with nearest-neighbour hopping at half filling. The band structure is given by
$$
\begin{align*}
\epsilon_{\boldsymbol{k}}=-2 t\left[\cos \left(k_{x} a\right)+\cos \left(k_{y} a\right)+\cos \left(k_{z} a\right)\right],
\end{align*}
$$
where $a$ is the lattice constant and $t$ the hopping term. Because of half filling, the chemical potential $\mu=\epsilon_{F}$ lies at $\mu=0$ such that $\xi_{\boldsymbol{k}}=\epsilon_{\boldsymbol{k}}$. Obviously, $\epsilon_{\boldsymbol{k}+\boldsymbol{Q}}=-\epsilon_{\boldsymbol{k}}$ holds for all $\boldsymbol{k}$, for the nesting vector $\boldsymbol{Q}=(\pi / a)(1,1,1)$. This full nesting trait is a signature of the total particle-hole symmetry, i.e. in the ground state there are as many occupied as empty states. Analogously to the Peierls instability, the spin density wave induces the opening of a gap at the Fermi surface. This is another example of a Fermi surface instability. In this situation, the gap is confined to the areas of the Fermi surface obeying the nesting condition. Contrarily to the ferromagnetic order, the material can become insulating when forming the spin density wave state.

---
## 7.3 Stoner Excitations
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=167&selection=230,0,232,18|•]]

In this last section, we discuss the elementary excitations of the ferromagnetic ground state with $n_{\uparrow}>n_{\downarrow}$, including both particle-hole excitations and collective modes. For this purpose we use the Stoner model Hamiltonian (7.2) which we write here entirely in momentum space operators,
$$
\begin{align*}
\mathcal{H}=\sum_{\boldsymbol{k}, s} \epsilon_{\boldsymbol{k}} \widehat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k} \boldsymbol{k}}+\frac{U}{\Omega} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}, \boldsymbol{q}^{\prime}} \widehat{c}_{\boldsymbol{k}+\boldsymbol{q}^{\prime} \uparrow}^{\dagger} \widehat{c}_{\boldsymbol{k} \uparrow} \widehat{c}_{\boldsymbol{k}^{\prime}-\boldsymbol{q}^{\prime} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k}^{\prime} \downarrow} .
\end{align*}
$$

The spin polarised ground state $\left|\psi_{g}\right\rangle$ can be written on the mean field level as
$$
\begin{align*}
\left|\psi_{g}\right\rangle=\prod_{|\boldsymbol{k}| \leq k_{F \downarrow}} \hat{c}_{\boldsymbol{k} \downarrow}^{\dagger} \prod_{|\boldsymbol{k}| \leq k_{F \uparrow}} \hat{c}_{\boldsymbol{k} \uparrow}^{\dagger}|o\rangle
\end{align*}
$$
with $k_{F s}=\left(6 \pi^{2} n_{s}\right)^{1 / 3}$.
We now consider spin excitations, for which we make the Ansatz
$$
\begin{align*}
\left|\psi_{\boldsymbol{q}}\right\rangle=\sum_{\boldsymbol{k}} f_{\boldsymbol{k}} \widehat{c}_{\boldsymbol{k}+\boldsymbol{q} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k} \uparrow}\left|\psi_{g}\right\rangle=\sum_{\boldsymbol{k}} f_{\boldsymbol{k}}\left|\psi_{\boldsymbol{k}, \boldsymbol{q}}\right\rangle .
\end{align*}
$$

This is a superposition of states where an spin up electron is removed from the ground state $\left|\psi_{g}\right\rangle$ and placed back with opposite spin and a fixed momentum transfer $\boldsymbol{q}$. The simple electron-hole excitation with such a spin flip corresponds to the state $\left|\psi_{\boldsymbol{k}, \boldsymbol{q}}\right\rangle=\widehat{c}_{\boldsymbol{k}+\boldsymbol{q} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k} \uparrow}\left|\psi_{g}\right\rangle$ and has the energy
$$
\begin{align*}
E_{\boldsymbol{k}, \boldsymbol{q}}=\epsilon_{\boldsymbol{k}+\boldsymbol{q} \downarrow}-\epsilon_{\boldsymbol{k} \uparrow}=\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}+U\left(n_{\uparrow}-n_{\downarrow}\right)=\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}+\Delta .
\end{align*}
$$

We have to ensures that an electron with $(\boldsymbol{k}, \uparrow)$ is available to be removed, and that the state $(\boldsymbol{k}+\boldsymbol{q}, \downarrow)$ is unoccupied. The independent electron-hole part of the spectrum constitutes a continuum of excitations and is depicted by the shaded region:

![Attachments/Notes/Solid-State Theory/IMG-0126164747347.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164747347.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=170&rect=182,389,402,550|•]]

Note that the spin splitting of the spectrum opens a window in the low-energy low-momentum transfer sector of the excitations.
The excitation energy of $\left|\psi_{\boldsymbol{q}}\right\rangle$ can be obtained by solving the following Schrödinger equation
$$
\begin{align*}
\mathcal{H}\left|\psi_{\boldsymbol{q}}\right\rangle=\left(E_{g}+\hbar \omega_{\boldsymbol{q}}\right)\left|\psi_{\boldsymbol{q}}\right\rangle,
\end{align*}
$$
with $E_{g}$ as the ground state energy $\left(\mathcal{H}\left|\psi_{g}\right\rangle=E_{g}\left|\psi_{g}\right\rangle\right)$. Actually it is more convenient to rearrange this equation into the following form to eliminate $E_{g}$,
$$
\begin{align*}
\hbar \omega_{\boldsymbol{q}}\left|\psi_{\boldsymbol{q}}\right\rangle=\sum_{\boldsymbol{k}} f_{\boldsymbol{k}}\left[\mathcal{H}, \widehat{c}_{\boldsymbol{k}+\boldsymbol{q} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k} \uparrow}\right]\left|\psi_{g}\right\rangle .
\end{align*}
$$

Evaluating the commutator we obtain
$$
\begin{align*}
\begin{aligned}
\hbar \omega_{\boldsymbol{q}}\left|\psi_{\boldsymbol{q}}\right\rangle=\left(\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\right. & \left.\epsilon_{\boldsymbol{k}}\right)\left|\psi_{\boldsymbol{q}}\right\rangle \\
& +\frac{U}{\Omega} \sum_{\boldsymbol{k}} f_{\boldsymbol{k}} \sum_{\boldsymbol{k}^{\prime}, \boldsymbol{q}^{\prime}}\left\{\widehat{c}_{\boldsymbol{k}^{\prime}+\boldsymbol{q}^{\prime} \uparrow}^{\dagger} \widehat{c}_{\boldsymbol{k}^{\prime} \uparrow} \widehat{c}_{\boldsymbol{k}+\boldsymbol{q}-\boldsymbol{q}^{\prime} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k} \uparrow}-\widehat{c}_{\boldsymbol{k}+\boldsymbol{q} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k}-\boldsymbol{q}^{\prime} \uparrow} \widehat{c}_{\boldsymbol{k}^{\prime}-\boldsymbol{q}^{\prime} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k}^{\prime} \downarrow}\right\}\left|\psi_{g}\right\rangle .
\end{aligned}
\end{align*}
$$

The four- $\widehat{c}$-operator terms are not so easy to handle. Therefore we adopt a mean field point of view in the analogous way as before and decouple these terms through the following approximation,
$$
\begin{align*}
\begin{aligned}
& \widehat{c}_{\boldsymbol{k}^{\prime}+\boldsymbol{q}^{\prime} \uparrow}^{\dagger} \widehat{c}_{\boldsymbol{k}^{\prime} \uparrow} \widehat{c}_{\boldsymbol{k}+\boldsymbol{q}-\boldsymbol{q}^{\prime} \downarrow}^{\dagger} \widehat{\boldsymbol{k}} \boldsymbol{\boldsymbol { k } \uparrow}-\widehat{c}_{\boldsymbol{k}+\boldsymbol{q} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k}-\boldsymbol{q}^{\prime} \uparrow} \widehat{c}_{\boldsymbol{k}^{\prime}-\boldsymbol{q}^{\prime} \downarrow}^{\dagger}{\widehat{\boldsymbol{k}^{\prime} \downarrow}} \\
& \quad \longrightarrow \quad \delta_{\boldsymbol{q}^{\prime}, 0}\left(n_{\boldsymbol{k}^{\prime} \uparrow}-n_{\boldsymbol{k}^{\prime} \downarrow}\right) \widehat{c}_{\boldsymbol{k}+\boldsymbol{q}, \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k} \uparrow}+\left(n_{\boldsymbol{k}+\boldsymbol{q} \downarrow} \delta_{\boldsymbol{k}^{\prime}, \boldsymbol{k}+\boldsymbol{q}}-n_{\boldsymbol{k} \uparrow} \delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}+\boldsymbol{q}^{\prime}}\right) \widehat{c}_{\boldsymbol{k}-\boldsymbol{q}^{\prime}+\boldsymbol{q} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k}-\boldsymbol{q}^{\prime} \uparrow}
\end{aligned}
\end{align*}
$$

The basic scheme is to combine $\widehat{c}$-operators in the four-operator expression so as to obtain a density-operator-like expression $\widehat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k} s}$ (this introduces some constraints on the momenta implemented) which then is replace by the mean value $n_{k s}$. In this process it turns out that the remaining two operators combine to $\widehat{c}_{\boldsymbol{k}+\boldsymbol{q} \downarrow}^{\dagger} \widehat{\boldsymbol{c}} \boldsymbol{\boldsymbol { k }}$ - $^{\text {like }}$ factors to construct $\left|\psi_{\boldsymbol{q}}\right\rangle$. This helps then to "close" the Schrödinger equation for the wave function $f_{\boldsymbol{k}}$. We replace $n_{\boldsymbol{k} s}$ the Fermi-Dirac distribution for electrons of spin $s$ with the energy $\epsilon_{\boldsymbol{k} s}$.
We insert the approximation (7.86) into the Schrödingier equation (7.84) and multiply from the left with $\left\langle\psi_{\tilde{\boldsymbol{k}}, \boldsymbol{q}}\right|=\left.\left\langle\psi_{g}\right|\right|_{\tilde{\boldsymbol{k}} \uparrow} ^{\dagger} \widehat{\tilde{\boldsymbol{k}}} \boldsymbol{\tilde { \boldsymbol { q } } \downarrow}$ to obtain the projected equation,
$$
\begin{align*}
f_{\tilde{\boldsymbol{k}}}\left\{\hbar \omega_{\boldsymbol{q}}-\epsilon_{\tilde{\boldsymbol{k}}+\boldsymbol{q}}+\epsilon_{\tilde{\boldsymbol{k}}}-U\left(n_{\uparrow}-n_{\downarrow}\right)\right\}=\frac{U}{\Omega} \sum_{\boldsymbol{k}} f_{\boldsymbol{k}}\left(n_{\boldsymbol{k}+\boldsymbol{q} \downarrow}-n_{\boldsymbol{k} \uparrow}\right)=R_{\boldsymbol{q}}
\end{align*}
$$
where we used that the density of electrons of $\operatorname{spin} s$ is given by
$$
\begin{align*}
n_{s}=\frac{1}{\Omega} \sum_{\boldsymbol{k}^{\prime}} n_{\boldsymbol{k}^{\prime} s} .
\end{align*}
$$
and we defined $R_{\boldsymbol{q}}$. We solve now the equation for the wave function $f_{\boldsymbol{k}}$ and obtain
$$
\begin{align*}
f_{\boldsymbol{k}}=\frac{R_{\boldsymbol{q}}}{\hbar \omega_{\boldsymbol{q}}-\epsilon_{\boldsymbol{k}+\boldsymbol{q} \downarrow}+\epsilon_{\boldsymbol{k} \uparrow}}
\end{align*}
$$
with $\epsilon_{\boldsymbol{k} s}=\epsilon_{\boldsymbol{k}}+U n_{\bar{s}}$. We use now $f_{\boldsymbol{k}}$ to reexpress $R_{\boldsymbol{q}}$ which yields the equation,
$$
\begin{align*}
R_{\boldsymbol{q}}=U R_{\boldsymbol{q}} \frac{1}{\Omega} \sum_{\boldsymbol{k}} \frac{n_{\boldsymbol{k}+\boldsymbol{q} \downarrow}-n_{\boldsymbol{k} \uparrow}}{\hbar \omega_{\boldsymbol{q}}-\epsilon_{\boldsymbol{k}+\boldsymbol{q} \downarrow}+\epsilon_{\boldsymbol{k} \uparrow}}
\end{align*}
$$
which can be used to determine $\hbar \omega_{\boldsymbol{q}}$ for $R_{\boldsymbol{q}} \neq 0$. The solutions contain, in principle, also the continuum of the electron-hole excitations discussed above. We focus, however, now on the non-trivial collective mode. It is easy to see that in the $\boldsymbol{q} \rightarrow 0$ limit we find
$$
\begin{align*}
1=\frac{U\left(n_{\downarrow}-n_{\uparrow}\right)}{\hbar \omega_{0}-U\left(n_{\uparrow}-n_{\downarrow}\right)} \quad \Rightarrow \quad \hbar \omega_{0}=0
\end{align*}
$$
indicating that there are excitations for small $\boldsymbol{q}$. Note that for $\boldsymbol{q}=0$ we find $f_{\boldsymbol{k}}=$ const. independent of $\boldsymbol{k}$ which we will use later.
We calculate now the dispersion for small $\boldsymbol{q}\left(\ll k_{F}\right)$. For the concrete calculation we will assume that $\epsilon_{\boldsymbol{k}}=\hbar^{2} \boldsymbol{k}^{2} / 2 m$ to obtain analytical results. Using the fact that $\hbar \omega_{\boldsymbol{q}} \ll \Delta$ we can expand the equation leading to
$$
\begin{align*}
\hbar \omega_{\boldsymbol{q}} \approx\left[1+\frac{U}{\Omega} \sum_{\boldsymbol{k}} \frac{n_{\boldsymbol{k}+\boldsymbol{q} \downarrow}-n_{\boldsymbol{k} \uparrow}}{\epsilon_{\boldsymbol{k}+\boldsymbol{q} \downarrow}-\epsilon_{\boldsymbol{k} \uparrow}}\right]\left[-\frac{U}{\Omega} \sum_{\boldsymbol{k}} \frac{n_{\boldsymbol{k}+\boldsymbol{q} \downarrow}-n_{\boldsymbol{k} \uparrow}}{\left(\epsilon_{\boldsymbol{k}+\boldsymbol{q} \downarrow}-\epsilon_{\boldsymbol{k} \uparrow}\right)^{2}}\right]^{-1} .
\end{align*}
$$

For small $q$ we expand up order $q^{2}$ (actually $q$-linear contributions cancel),
$$
\begin{align*}
\begin{aligned}
\frac{U}{\Omega} \sum_{\boldsymbol{k}} \frac{n_{\boldsymbol{k}+\boldsymbol{q} \downarrow}-n_{\boldsymbol{k} \uparrow}}{\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}+\Delta} & \approx \frac{U}{\Omega} \sum_{\boldsymbol{k}} \frac{n_{\boldsymbol{k}+\boldsymbol{q} \downarrow}-n_{\boldsymbol{k} \uparrow}}{\Delta}\left\{1-\frac{\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}}{\Delta}+\left(\frac{\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}}{\Delta}\right)^{2}\right\} \\
& \approx-1+\frac{U}{\Omega} \sum_{\boldsymbol{k}}\left\{\frac{n_{\boldsymbol{k} \uparrow}+n_{\boldsymbol{k} \downarrow}}{\Delta^{2}} \frac{\hbar^{2} q^{2}}{2 m}-\frac{n_{\boldsymbol{k} \uparrow}-n_{\boldsymbol{k} \downarrow}}{\Delta^{2}} \frac{\left(2 \hbar^{2} \boldsymbol{k} \cdot \boldsymbol{q}\right)^{2}}{4 m^{2} \Delta}\right\} \\
& \approx-1+\frac{\hbar^{2} q^{2}}{2 m \Delta^{2}}\left(U n_{0}-\frac{4 \epsilon_{F}}{3}\right)
\end{aligned}
\end{align*}
$$
and analogously
$$
\begin{align*}
\frac{U}{\Omega} \sum_{\boldsymbol{k}} \frac{n_{\boldsymbol{k}+\boldsymbol{q} \downarrow}-n_{\boldsymbol{k} \uparrow}}{\left(\epsilon_{\boldsymbol{k}+\boldsymbol{q}}-\epsilon_{\boldsymbol{k}}+\Delta\right)^{2}} \approx-\frac{1}{\Delta}
\end{align*}
$$
such that we obtain
$$
\begin{align*}
\hbar \omega_{\boldsymbol{q}} \approx \frac{\hbar^{2} q^{2}}{2 m \Delta} \frac{2 \epsilon_{F}}{3}\left(U N\left(\epsilon_{F}\right)-2\right) \propto \frac{\hbar^{2} q^{2}}{2 m}\left(\frac{U}{U_{c}}-1\right)^{1 / 2} .
\end{align*}
$$

Were we use that $\Delta \propto\left(U-U_{c}\right)^{1 / 2}$ for $U \rightarrow U_{c}$. Hence, if $U>U_{c}=2 / N\left(\epsilon_{F}\right)$ we find $\hbar \omega_{q}>0$. Since the elementary excitations have an energy gap of the order of $\Delta$ at small $\boldsymbol{q}$, the collective excitations, which are termed magnons, are well-defined quasi-particles describing propagating spin waves. When these modes enter the electron-hole continuum, they are damped in the same way as plasmons decay into electrons and holes continuum.

Being a bound state composed of an electron and a hole, magnons are bosonic quasi-particles. This collective excitation features a $q^{2}$-dependent dispersion with a vanishing excitation energy in the limit $\boldsymbol{q} \rightarrow 0$. This property represents a case of the so-called Goldstone theorem which states that there is a gapless $\boldsymbol{q}=0$ excitation in every ordered phases which originates from the spontaneous breaking of a continuous symmetry. Remark: It is important that the symmetry is broken spontaneously and not by an external field, because we need a continuous set of groundstate, here through spin rotation. With an external field we would have only one groundstate and all other orientations of the magnetisation would have higher energy. Then the $\boldsymbol{q}=0$ mode would have a finite energy. In our case the continuous symmetry is spin rotation and the ferromagnetic state breaks this symmetry by choosing spontaneously the direction of magnetisation. We defined this direction as the $z$-axis such that the total spin quantum is given $S_{\text {tot }}=S_{\text {tot }}^{z}=\frac{1}{2}\left(N_{\uparrow}-N_{\downarrow}\right)$. Any of the $2 S_{\text {tot }}+1$ degenerate groundstates can be reached by continued application of the spin lowering operator $\widehat{S}_{\text {tot }}^{-}$which lowers $S_{\text {tot }}^{z}$ by 1 ,
$$
\begin{align*}
\left.\begin{array}{l}
\widehat{S}_{\mathrm{tot}}^{z}\left|\psi_{g}\right\rangle=\hbar S_{\mathrm{tot}}^{z}\left|\psi_{g}\right\rangle \\
\widehat{\boldsymbol{S}}_{\mathrm{tot}}^{2}\left|\psi_{g}\right\rangle=\hbar^{2} S_{\mathrm{tot}}\left(S_{\mathrm{tot}}+1\right)\left|\psi_{g}\right\rangle
\end{array}\right\} \Rightarrow\left\{\begin{array}{l}
{\left[\widehat{\boldsymbol{S}}_{\mathrm{tot}}^{2}, \widehat{S}_{\mathrm{tot}}^{-}\right]=0,\left|\psi_{g}^{\prime}\right\rangle=\widehat{S}_{\mathrm{tot}}^{-}\left|\psi_{g}\right\rangle} \\
\widehat{\boldsymbol{S}}_{\mathrm{tot}}^{2}\left|\psi_{g}^{\prime}\right\rangle=\hbar^{2} S_{\mathrm{tot}}\left(S_{\mathrm{tot}}+1\right)\left|\psi_{g}^{\prime}\right\rangle
\end{array}\right.
\end{align*}
$$

The spin lowering operator can be written as
$$
\begin{align*}
\widehat{S}_{\text {tot }}^{-}=\frac{\hbar}{\Omega} \sum_{\boldsymbol{k}} \widehat{c}_{\boldsymbol{k} \downarrow}^{\dagger} \widehat{c}_{\boldsymbol{k} \uparrow}
\end{align*}
$$
which notably is the operator generating $\left|\psi_{\textbf{q}=0}\right\rangle$, where, as mentioned, $f_{\boldsymbol{k}}=1 / \Omega$ is independent of $\boldsymbol{k}$. From the equation before, we understand that $\left|\psi_{\boldsymbol{q}=0}\right\rangle$ is simply another groundstate $\left|\psi_{g}^{\prime}\right\rangle$ and has, thus, the same energy as $\left|\psi_{g}\right\rangle$. We conclude, therefore, that $\hbar \omega_{\boldsymbol{q}=0}=0$.

---
# 8 Magnetism of Localised Moments
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=172&selection=2,0,2,30|•]]

Up to now, we have mostly assumed that the interaction between electrons leads to secondary effects. This was, essentially, the message of the Fermi liquid theory, the standard model of condensed matter physics. There, the interactions of course renormalise the properties of a metal, but their description is still possible by using a language of nearly independent Fermionic quasi-particles with a few modifications. Even in connection with the magnetism of itinerant electrons, where interactions proved to be crucial, the description in terms of extended Bloch states. Many properties were determined by the band structure of the electrons in the lattice, i.e., the electrons were preferably described in $k$-space.

However, in this chapter, we will consider situations, were it is less clear whether we should describe the electrons in momentum or in real space. The problem becomes obvious with the following Gedanken experiment: We look at a regular lattice of H -atoms. The lattice constant should be large enough such that the atoms can be considered to be independent for now. In the ground state, each H -atom contains exactly one electron in the $1 s$-state, which is the only atomic orbital we consider at the moment. The transfer of one electron to another atom would cost the relatively high energy of $E\left(H^{+}\right)+E\left(H^{-}\right)-2 E(H) \sim 15 \mathrm{eV}$, since it corresponds to an ionisation. Therefore, the electrons remain localised on the individual H -atoms and the description of the electron states is obviously best done in real space. The reduction of the lattice constant will gradually increase the overlap of the electron wave functions of neighboring atoms. In analogy to the $\mathrm{H}_{2}$ molecule, the electrons can now extend on neighboring atoms, but the cost in energy remains that of an "ionisation". Thus, transfer processes are only possible virtually, there are not yet itinerant electrons in the sense of a metal.

![Attachments/Notes/Solid-State Theory/IMG-0126164747665.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164747665.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=172&rect=158,151,437,286|•]]

On the other hand, we know the example of the alkali metals, which release their outermost ns-electron into an extended Bloch state and build a metallic (half-filled) band. This would actually work well for the H -atoms for sufficiently small lattice constant too. In nature, this can only be induced by enormous pressures metallic hydrogen probably exists in the centres of the large gas planets Jupiter and Saturn due to the gravitational pressure. Obviously, a transition between the two limiting behaviours should exist. This metal-insulator transition, which occurs, if the gain of kinetic energy surpasses the energy costs for the charge transfer. The insulating side is known as a Mott insulator.
While the obviously metallic state is reliably described by the band picture and can be sufficiently well approximated by the previously discussed methods, this point of view becomes obsolete when approaching the metal-insulator transition. According to band theory, a half-filled band must produce a metal, which definitely turns wrong when entering the insulating side of the transition. Unfortunately, no well controlled approximation for the description of this metal-insulator transition exists, since there are no small parameters for a perturbation theory.
Another important aspect is the fact, that in a standard Mott insulator each atom features an electron in the outermost occupied orbital and, hence, a degree of freedom in the form of a localised spin $s=1 / 2$, in the simplest case. While charge degrees of freedom (motion of electrons) are frozen at small temperatures, the same does not apply to these spin degrees of freedom. Many interesting magnetic phenomena are produced by the coupling of these spins. Other, more general forms of Mott insulators exist as well, which include more complex forms of localised degrees of freedom, e.g., partially occupied degenerate orbital states.

---
## 8.1 Mott Transition
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=173&selection=33,0,35,15|•]]

First, we investigate the metal-insulator transition. Its description is difficult, since it does not constitute a transition between an ordered and a disordered state in the usual sense. We will, however, use some simple considerations which will allow us to gain some insight into the behaviour of such systems.

### 8.1.1 Hubbard Model

We introduce a model, which is based on the tight-binding approximation we have introduced in chapter 1. It is inevitable to go back to a description based on a lattice and give up continuity. The model describes the motion of electrons, if their wave functions on neighbouring lattice sites only weakly overlap. Furthermore, the Coulomb repulsion, leading to an increase in energy, if a site is doubly occupied, is taken into account. We include this with the lattice analogue of the contact interaction. The model, called Hubbard model, has the form
$$
\begin{align*}
\mathcal{H}=-t \sum_{\langle i, j\rangle, s}\left(\hat{c}_{i s}^{\dagger} \widehat{c}_{j s}+\text { h.c. }\right)+U \sum_{i} \widehat{n}_{i \uparrow} \widehat{n}_{i \downarrow},
\end{align*}
$$
where we consider hopping between nearest neighbours only, via the matrix element $-t$. Note, that $\widehat{c}_{i s}^{(\dagger)}$ are real-space field operators on the lattice (site index $i$ ) and $\widehat{n}_{i s}=\widehat{c}_{i s}^{\dagger} \widehat{c}_{i s}$ is the density operator. We focus on half filling, $n=1$, one electron per site on average. There are two obvious limiting cases:

**Insulating atomic limit**: We put $t=0$. The ground state has exactly one electron on each lattice site. This state is, however, highly degenerate. In fact, the degeneracy is $2^{N}$ (number of sites $N$ ), since each electron has spin 1/2, i.e.,
$$
\begin{align*}
\left|\Phi_{A 0}\left\{s_{i}\right\}\right\rangle=\prod_{i} \widehat{c}_{i, s_{i}}^{\dagger}|0\rangle,
\end{align*}
$$
where the spin configuration $\left\{s_{i}\right\}$ can be chosen arbitrarily. We will deal with the lifting of this degeneracy later. The first excited states feature one lattice site without electron and one doubly occupied site. This state has energy  and its degeneracy is even higher, i.e., . Even higher excited states correspond to more empty and doubly occupied sites. The system is an insulator and the density of states is shown here:

![Attachments/Notes/Solid-State Theory/IMG-0126164747976.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164747976.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=174&rect=159,201,440,399|•]]

**Metallic band limit**: We set $U=0$. The electrons are independent and move freely via hopping processes. The band energy is found through a Fourier transform of the Hamiltonian. With
$$
\begin{align*}
\widehat{c}_{i s}=\frac{1}{\sqrt{N}} \sum_{\boldsymbol{k}} \widehat{c}_{\boldsymbol{k} s} e^{i \boldsymbol{k} \cdot \boldsymbol{r}_{i}}
\end{align*}
$$
we can rewrite
$$
\begin{align*}
-t \sum_{\langle i, j\rangle, s}\left(\widehat{c}_{i s}^{\dagger} \widehat{c}_{j s}+\text { h.c. }\right)=\sum_{\boldsymbol{k}, s} \epsilon_{\boldsymbol{k}} \widehat{\boldsymbol{c}}_{\boldsymbol{c} \boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k} s},
\end{align*}
$$
where
$$
\begin{align*}
\epsilon_{\boldsymbol{k}}=-t \sum_{a} e^{i \boldsymbol{k} \cdot \boldsymbol{a}}=-2 t\left(\cos k_{x} a+\cos k_{y} a+\cos k_{z} a\right),
\end{align*}
$$
and the sum runs over all vectors $\boldsymbol{a}$ connecting nearest neighbours. Obviously, this system is metallic, with a unique ground state
$$
\begin{align*}
\left|\Phi_{B 0}\right\rangle=\prod_{\boldsymbol{k}} \Theta\left(-\epsilon_{\boldsymbol{k}}\right) \widehat{c}_{\boldsymbol{k} \uparrow}^{\dagger} \widehat{c}_{\boldsymbol{k} \downarrow}^{\dagger}|0\rangle .
\end{align*}
$$

Note, that $\epsilon_{F}=0$ at half filling, whereas the bandwidth $2 D=12 t$.

### 8.1.2 Insulating State

We consider the two lowest energy sectors for the case $t \ll U$. The ground state sector $\alpha$ has already been defined: one electrons sits on each lattice site. The lowest excited states create the sector $\beta$ with one empty and one doubly occupied site (cf. Figure 8.3). With the finite hopping matrix element, the empty (holon) and the doubly occupied (doublon) site become "mobile". A
fraction of the degeneracy $\left(2^{N-2} N(N-1)\right)$ is herewith lifted and the energy obtains a momentum dependence,
$$
\begin{align*}
E_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}=U+\epsilon_{\boldsymbol{k}}+\epsilon_{\boldsymbol{k}^{\prime}}>U-12 t .
\end{align*}
$$

Even though ignoring the spin configurations here is a daring approximation, we obtain a qualitatively good picture of the situation. Note that the motion of an empty site (holon) or doubly occupied site (doublon) is not independent of the spin configuration which is altered through moving these objects. As a consequence, the holon/doublon motion is not entirely free leading to a reduction of the band width. Therefore the band width seen in the next figure is smaller than 2D, in general. One notices that, with increasing $|t|$, the two energy sectors approach each other, until they finally overlap. In the left panel the holon-doublon excitation spectrum is depicted by two bands, the lower and upper Hubbard bands, where the holon is a hole in the lower and the doublon a particle in the upper Hubbard band:

![Attachments/Notes/Solid-State Theory/IMG-0126164748285.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164748285.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=175&rect=160,499,439,553|•]]

The excitation gap is the gap between the two bands and we may interpret this system as an insulator, called a Mott insulator. (Note, however, that this band structure depends strongly on the correlation effects (e.g. spin correlation) and is not rigid as the band structure of a semiconductor.) The band overlap (closing of the gap) indicates a transition, after which a perturbative treatment is definitely inapplicable. This is, in fact, the metal-insulator transition.

### 8.1.3 The Metallic State

On the metallic side, the initial state is better defined since the ground state is a filled Fermi sea without degeneracy. The treatment of the Coulomb repulsion $U$ turns out to become difficult, once we approach the Mott transition, where the electrons suffer a strong impediment in their mobility. In this region, there is no straight-forward way of a perturbative treatment. The socalled Gutzwiller approximation, however, provides a qualitative and very instructive insights into the properties of the strongly correlated electrons.
For this approximation we introduce the following important densities:

- 1: electron density
- $s_{\uparrow}$ : density of the singly occupied lattice sites with spin $\uparrow$
- $s_{\downarrow}$ : density of the singly occupied lattice sites with spin $\downarrow$
- $d$ : density of the doubly occupied sites
- $h$ : density of the empty sites

It is easily seen, that $h=d$ and $s_{\uparrow}=s_{\downarrow}=s / 2$, as long as no uniform magnetisation is present. Note, that $d$ determines the energy contribution of the interaction term to $U d$, which we regard as the index of fixed interaction energy sectors. Furthermore,
$$
\begin{align*}
1=s+2 d
\end{align*}
$$
holds. The view point of the Gutzwiller approximation is based on the renormalisation of the probability of the hopping process due to the correlation of the electrons,exceeding restrictions due to the Pauli principle. With this, the importance of the spatial configuration of the electrons is enhanced. In the Gutzwiller approximation, the latter is taken into account statistically by simple probabilities for the occupation of lattice sites.
We fix the density of the doubly occupied sites $d$ and investigate the hopping processes which keep $d$ constant. First, we consider an electron hopping from a singly occupied to an empty site $(i \rightarrow j)$. Hopping probability depends on the availability of the initial configuration. We compare the probability to find this initial state for the correlated $(P)$ and the uncorrelated ( $P_{0}$ ) case and write

$$
\begin{align*}
P(\uparrow 0)+P(\downarrow 0)=g_{t}\left[P_{0}(\uparrow 0)+P_{0}(\downarrow 0)\right] .
\end{align*}
$$

The factor $g_{t}$ will eventually appear as the renormalisation of the hopping probability and, thus, leads to an effective kinetic energy of the system due to correlations. We determine both sides statistically. In the correlated case, the joint probability for $i$ to be singly occupied and $j$ to be empty is obviously
$$
\begin{align*}
P(\uparrow 0)+P(\downarrow 0)=s h=s d=d(1-2 d) .
\end{align*}
$$
In the uncorrelated case (where $d$ is not fixed), we have
$$
\begin{align*}
P_{0}(\uparrow 0)=n_{i \uparrow}\left(1-n_{i \downarrow}\right)\left(1-n_{j \uparrow}\right)\left(1-n_{j \downarrow}\right)=\frac{1}{16} .
\end{align*}
$$

The case for $\downarrow$ follows accordingly. In order to collect the total result for hopping processes which keep $d$ constant, we have to do the same calculation for the hopping process $(\uparrow \downarrow, \uparrow) \rightarrow(\uparrow, \uparrow \downarrow)$, which leads to the same result. Processes of the kind $(\uparrow \downarrow, 0) \rightarrow(\uparrow, \downarrow)$ leave the sector of fixed $d$ and are ignored. With this, we obtain in all cases the same renormalisation factor for the kinetic energy,
$$
\begin{align*}
g_{t}=8 d(1-2 d),
\end{align*}
$$
i.e., $t \rightarrow g_{t} t$. We consider the correlations by treating the electrons as independent but with a renormalised matrix element $g_{t} t$. The energy in the sector $d$ becomes
$$
\begin{align*}
E(d)=g_{t} \epsilon_{\text {kin }}+U d=8 d(1-2 d) \epsilon_{\text {kin }}+U d, \quad \epsilon_{\text {kin }}=\frac{1}{N} \int_{-D}^{0} d \epsilon N(\epsilon) \epsilon .
\end{align*}
$$

For fixed $U$ and $t$, we can minimise this with respect to $d$ (note that this in not a variational calculation in a strict sense, the resulting energy is not an upper bound to the ground state energy), and find
$$
\begin{align*}
d=\frac{1}{4}\left(1-\frac{U}{U_{c}}\right) \quad \text { and } \quad g_{t}=1-\left(\frac{U}{U_{c}}\right)^{2},
\end{align*}
$$
with the critical value
$$
\begin{align*}
U_{c}=8\left|\epsilon_{\text {kin }}\right| \approx 25 t \sim 4 D .
\end{align*}
$$

For $u \geq U_{c}$, double occupancy and, thus, hopping is completely suppressed, i.e., electrons become localised. This observation by Brinkman and Rice provides a qualitative description of the metal-insulator transition to a Mott insulator, but takes into account only local correlations, while correlations between different lattice sites are not considered. Moreover, correlations between the spin degrees of freedom are entirely neglected. The charge excitations contain contributions between different energy scales: (1) a metallic part, described via the renormalised effective Hamiltonian

$$
\begin{align*}
\mathcal{H}_{\text {ren }}=\sum_{\boldsymbol{k}, s} g_{t} \epsilon_{\boldsymbol{k}} \widehat{c}_{\boldsymbol{k} s}^{\dagger} \widehat{c}_{\boldsymbol{k} s}+U d,
\end{align*}
$$
and (2) a part with higher energy, corresponding to charge excitations on the energy scale $U$, i.e., to excitations raising the number of doubly occupied sites by one (or more).

We can estimate the contribution to the metallic conduction. Since in the tight-binding description the current operator contains the hopping matrix element and is thus subject to the same renormalisation as the kinetic energy, we obtain
$$
\begin{align*}
\sigma_{1}(\omega)=\frac{\omega_{p}^{* 2}}{4} \delta(\omega)+\sigma_{1}^{\text {high energy }}(\omega),
\end{align*}
$$
where we have used equation (6.12) for a perfect conductor (no residual resistivity in a perfect lattice). There is a high-energy part which we do not specify here. The plasma frequency is renormalised, $\omega_{p}^{* 2}=g_{t} \omega_{p}^{2}$, such that the $f$-sum rule in equation (6.13) yields
$$
\begin{align*}
I=\int_{0}^{\infty} d \omega \sigma_{1}(\omega)=\frac{\omega_{p}^{2}}{8} g_{t}+I_{\text {high energy }}=\frac{\omega_{p}^{2}}{8} .
\end{align*}
$$

For $U \rightarrow U_{c}$, the coherent metallic part becomes weaker and weaker,
$$
\begin{align*}
\frac{\omega_{p}^{2}}{8} g_{t}=\left(1-\left(\frac{U}{U_{c}}\right)^{2}\right) \frac{\omega_{p}^{2}}{8}
\end{align*}
$$

According to the $f$-sum rule, the lost weight must gradually be transferred to the "high-energy" contribution.

### 8.1.4 Fermi Liquid Properties of the Metallic State

The just discussed approximation allows us to discuss a few Fermi liquid properties of the metallic state close to metal-insulator transition in a simplified way. Let us investigate the momentum distribution. According to the above definition,
$$
\begin{align*}
\epsilon_{\mathrm{kin}}=\frac{1}{N} \sum_{k \in \mathrm{FS}} \epsilon_{\boldsymbol{k}}
\end{align*}
$$
where the sum runs over all $\boldsymbol{k}$ in the Fermi sea (FS). One can show within the above approximation, that the distribution is a constant within $\left(n_{\text {in }}\right)$ and outside ( $n_{\text {out }}$ ) the Fermi surface for finite $U$, such that, for $\boldsymbol{k}$ in the first Brillouin zone,
$$
\begin{align*}
\frac{1}{2}=\frac{1}{N} \sum_{k \in \mathrm{FS}} n_{\text {in }}+\frac{1}{N} \sum_{k \notin \mathrm{FS}} n_{\text {out }}=\frac{1}{2}\left(n_{\mathrm{in}}+n_{\mathrm{out}}\right)
\end{align*}
$$
and
$$
\begin{align*}
g_{t} \epsilon_{\mathrm{kin}}=\frac{1}{N} \sum_{\boldsymbol{k} \in \mathrm{FS}} n_{\mathrm{in}} \epsilon_{\boldsymbol{k}}+\frac{1}{N} \sum_{\boldsymbol{k} \notin \mathrm{FS}} n_{\text {out }} \epsilon_{\boldsymbol{k}} .
\end{align*}
$$

Taking into account particle-hole symmetry, i.e.,
$$
\begin{align*}
\sum_{k} \epsilon_{k}=\sum_{k \in \mathrm{FS}} \epsilon_{k}+\sum_{k \notin \mathrm{FS}} \epsilon_{\boldsymbol{k}}=0
\end{align*}
$$
we are able to determine $n_{\text {in }}$ and $n_{\text {out }}$,
$$
\begin{align*}
\left.\begin{array}{l}
n_{\text {in }}+n_{\text {out }}=1 \\
n_{\text {in }}-n_{\text {out }}=g_{t}
\end{array}\right\} \Rightarrow\left\{\begin{array}{r}
n_{\text {in }}=\left(1+g_{t}\right) / 2 \\
n_{\text {out }}=\left(1-g_{t}\right) / 2
\end{array} .\right.
\end{align*}
$$

With this, the jump in the distribution at the Fermi energy is equal to $g_{t}$, which, as previously, corresponds to the quasi-particle weight:

![Attachments/Notes/Solid-State Theory/IMG-0126164748587.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164748587.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=178&rect=160,488,436,650|•]]

For $U \rightarrow U_{c}$ it vanishes, i.e., the quasi-particles cease to exist for $U=U_{c}$. Without going into the details of the calculation, we provide a few Fermi liquid parameters. It is easy to see that the effective mass
$$
\begin{align*}
\frac{m}{m^{*}}=g_{t}
\end{align*}
$$
and thus
$$
\begin{align*}
F_{1}^{s}=3\left(g_{t}^{-1}-1\right)=\frac{3 U^{2}}{U_{c}^{2}-U^{2}},
\end{align*}
$$
where $t=1 / 2 m$ and the density of states $N\left(\epsilon_{F}\right)^{*}=N\left(\epsilon_{F}\right) g_{t}^{-1}$. Furthermore,
$$
\begin{align*}
\begin{aligned}
& F_{0}^{a}=-\frac{U N\left(\epsilon_{F}\right)}{4} \frac{2 U_{c}+U}{\left(U+U_{c}\right)^{2}} U_{c}, \quad \Rightarrow \quad \chi=\frac{\mu_{B}^{2} N\left(\epsilon_{F}\right)^{*}}{1+F_{0}^{a}} \\
& F_{0}^{s}=\frac{U N\left(\epsilon_{F}\right)}{4} \frac{2 U_{C}-U}{\left(U-U_{c}\right)^{2}} U_{c}, \quad \Rightarrow \quad \kappa=\frac{N\left(\epsilon_{F}\right)^{*}}{n^{2}\left(1+F_{0}^{s}\right)} .
\end{aligned}
\end{align*}
$$

It follows, that the compressibility $\kappa$ vanishes for $U \rightarrow U_{c}$ as expected, since it becomes more and more difficult to compress the electrons or to add more electrons, respectively. The insulator is, of curse, incompressible. The spin susceptibility diverges because of the diverging density of states $N\left(\epsilon_{F}\right)^{*}$. This indicates, that local spins form, which exist as completely independent degrees of freedom at $U=U_{c}$. Only the antiferromagnetic correlation between the spins would lead to a renormalisation, which turns $\chi$ finite. This correlation is, as mentioned above, neglected in the Gutzwiller approximation. The effective mass diverges and shows that the quasi-particles are more and more localised close to the transition, since the occupation of a lattice site is getting more rigidly fixed to $1.$ This can be observed within the Gutzwiller approximation in the form of local fluctuations of the particle number. For this, we introduce the density matrix of the electron states on an arbitrary lattice site,

$$
\begin{align*}
\hat{\rho}=h|0\rangle\langle 0|+d|\uparrow \downarrow\rangle\langle\uparrow \downarrow|+\frac{s}{2}(|\uparrow\rangle\langle\uparrow|+|\downarrow\rangle\langle\downarrow|)
\end{align*}
$$
from which we deduce the variance of the occupation number,
$$
\begin{align*}
\left\langle n^{2}\right\rangle-\langle n\rangle^{2}=\left\langle n^{2}\right\rangle-1=\operatorname{tr}\left(\hat{\rho} n^{2}\right)-1=4 d+s-1=2 d .
\end{align*}
$$

The deviation from single occupation vanishes with $d$, i.e., with the approach of the metal-insulator transition. Note that the dissipation-fluctuation theorem connects $\left\langle n^{2}\right\rangle-\langle n\rangle^{2}$ to the compressibility. As a last remark, it turns out that the Gutzwiller approximation is well suited to describe the strongly correlated Fermi liquid ${ }^{3} \mathrm{He}$.

---
## 8.2 The Mott Insulator as a Quantum Spin System
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=179&selection=0,0,2,43|•]]

One of the most important characteristics of the Mott insulator is the presence of spin degrees of freedom after the freezing of the charge. This is one of the most profound features distinguishing a Mott insulator from a band insulator. In our simple discussion, we have seen that the atomic limit of the Mott insulator provides us with a highly degenerate ground state, where a spin- $1 / 2$ degree of freedom is present on each lattice site. We lift this degeneracy by taking into account the kinetic energy term $\mathcal{H}_{\text {kin }}(t \ll U)$. In this way new physics appears on a low-energy scale, which can be described by an effective spin Hamiltonian. Prominent examples for such spin systems are transition-metal oxides like the cuprates $\mathrm{La}_{2} \mathrm{CuO}_{4}, \mathrm{SrCu}_{2} \mathrm{O}_{3}$ or vanadates $\mathrm{CaV}_{4} \mathrm{O}_{9}$, $\mathrm{NaV}_{2} \mathrm{O}_{5}$.

### 8.2.1 The Effective Hamiltonian

In order to employ our perturbative considerations, it is sufficient to observe the spins of two neighboring lattice sites and to consider perturbation theory for discrete degenerate states. Here, this is preferably done in real space. There are 4 degenerate configurations, $\{|\uparrow, \uparrow\rangle,|\uparrow, \downarrow\rangle, \mid \downarrow, \uparrow$ $\rangle,|\downarrow, \downarrow\rangle\}$. The application of $\mathcal{H}_{\text {kin }}$ yields
$$
\begin{align*}
\begin{aligned}
& \mathcal{H}_{\text {kin }}|\uparrow, \uparrow\rangle=\mathcal{H}_{\text {kin }}|\downarrow, \downarrow\rangle=0, \\
& \mathcal{H}_{\text {kin }}|\uparrow, \downarrow\rangle=-\mathcal{H}_{\text {kin }}|\downarrow, \uparrow\rangle=-t|\uparrow \downarrow, 0\rangle-t|0, \uparrow \downarrow\rangle,
\end{aligned}
\end{align*}
$$
where, in the last two cases, the resulting states have an energy higher by $U$ and lie outside the ground state sector. Thus, it becomes clear that we have to proceed to second order perturbation, where the states of higher energy will appear only virtually:

![Attachments/Notes/Solid-State Theory/IMG-0126164748887.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164748887.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=179&rect=160,317,437,418|•]]
We obtain the matrix elements
$$
\begin{align*}
M_{s_{1}, s_{2} ; s_{1}^{\prime}, s_{2}^{\prime}}=-\sum_{n}\left\langle s_{1}, s_{2}\right| \mathcal{H}_{\text {kin }}|n\rangle \frac{1}{\langle n| \mathcal{H}_{\text {Coul }}|n\rangle}\langle n| \mathcal{H}_{\text {kin }}\left|s_{1}^{\prime}, s_{2}^{\prime \prime}\right\rangle,
\end{align*}
$$
where $|n\rangle=|\uparrow \downarrow, 0\rangle$ or $|0, \uparrow \downarrow\rangle$, such that the denominator is always $U$. We end up with
$$
\begin{align*}
M_{\uparrow \downarrow ; \uparrow \downarrow}=M_{\downarrow \uparrow ; \downarrow \uparrow}=-M_{\uparrow \downarrow, \downarrow \uparrow}=-M_{\downarrow \uparrow ; \uparrow \downarrow}=-\frac{2 t^{2}}{U} .
\end{align*}
$$
Note that the signs originates from the anti-commutation properties of the Fermion operators. In the subspace $\{|\uparrow, \downarrow\rangle,|\downarrow, \uparrow\rangle\}$ we find the eigenstates of the respective secular equations,
$$
\begin{align*}
\begin{array}{ll}
\frac{1}{\sqrt{2}}(|\uparrow, \downarrow\rangle+|\downarrow, \uparrow\rangle), & E=0, \\
\frac{1}{\sqrt{2}}(|\uparrow, \downarrow\rangle-|\downarrow, \uparrow\rangle), \quad E=-\frac{4 t^{2}}{U} .
\end{array}
\end{align*}
$$

Since the states $|\uparrow, \uparrow\rangle$ and $|\downarrow, \downarrow\rangle$ have energy $E=0$, the sector with total spin $S=1$ is degenerate (spin triplet). The spin sector $S=0$ with the energy $-4 t^{2} / U$ is the ground state (spin singlet). 
An effective Hamiltonian with the same energy spectrum for the spin configurations can be written with the help of the spin operators $\widehat{\boldsymbol{S}}_{1}$ and $\widehat{\boldsymbol{S}}_{2}$ on the two lattice sites
$$
\begin{align*}
\mathcal{H}_{\mathrm{eff}}=J\left(\widehat{\boldsymbol{S}}_{1} \cdot \widehat{\boldsymbol{S}}_{2}-\frac{\hbar^{2}}{4}\right), \quad J=\frac{4 t^{2}}{U \hbar^{2}}>0
\end{align*}
$$

This mechanism of spin-spin coupling is called superexchange and introduced by P.W. Anderson. Since this relation is valid between all neighbouring lattice sites, we can write the total Hamiltonian as
$$
\begin{align*}
\mathcal{H}_{H}=J \sum_{\langle i, j\rangle} \widehat{\boldsymbol{S}}_{i} \cdot \widehat{\boldsymbol{S}}_{j}+\text { const. }
\end{align*}
$$

This model, reduced to spins only, is called Heisenberg model. The Hamiltonian is invariant under a global $S U(2)$ spin rotation,
$$
\begin{align*}
U_{s}(\boldsymbol{\theta})=e^{-i \widehat{\boldsymbol{S}} \cdot \boldsymbol{\theta}}, \quad \widehat{\boldsymbol{S}}=\sum_{j} \widehat{\boldsymbol{S}}_{j}
\end{align*}
$$

Thus, the total spin is a good quantum number, as we have seen in the two-spin case. The coupling constant is positive and favors an antiparallel alignment of neighboring spins. The ground state is therefore not ferromagnetic.

### 8.2.2 Mean Field Approximation of the Anti-Ferromagnet

There are a few exact results for the Heisenberg model, but not even the ground state energy can be calculated exactly (except in the case of the one-dimensional spin chain which can be solved by means of a Bethe Ansatz). The difficulty lies predominantly in the treatment of quantum fluctuations, i.e., the zero-point motion of coupled spins. It is easiest seen already with two spins, where the ground state is a singlet and maximally entangled. The ground state of all antiferromagnetic systems is a spin singlet ( $S_{\text {tot }}=0$ ). In the so-called thermodynamic limit $(N \rightarrow \infty)$ there is long-ranged anti-ferromagnetic order in the ground state for dimensions $D \geq 2$. Contrarily, the fully polarised ferromagnetic state (ground state for a model with $J<0$ ) is known exactly, and as a state with maximal spin quantum number $\boldsymbol{S}^{2}$ it features no quantum fluctuations.
In order to describe the antiferromagnetic state anyway, we apply the mean field approximation again. We can characterise the equilibrium state of the classical Heisenberg model (spins as simple vectors without quantum properties) by splitting the lattice into two sublattices $A$ and $B$, where each $A$-site has only $B$-sites as neighbors, and vice-versa. Lattices which allow for such a separation are called bipartite. There are lattices, where this is not possible, e.g., triangular or cubic face centred lattices. There, frustration phenomena appear, a further complication of anti-ferromagnetically coupled systems. On the $A-(B$ - $)$ sublattice, the spins point up (down). This is unique up to a global spin rotations. Note, that this spin configuration doubles the unit cell.
We introduce the respective mean field,

$$
\begin{align*}
\widehat{S}_{i}^{z}= \begin{cases}m+\left(\widehat{S}_{i}^{z}-m\right) & i \in A \\ -m+\left(\widehat{S}_{i}^{z}+m\right) & i \in B\end{cases}
\end{align*}
$$

This leads to the mean field Hamiltonian
$$
\begin{align*}
\mathcal{H}_{\mathrm{mf}}=\mathcal{H}_{A}+\mathcal{H}_{B}=-J z m \sum_{i \in A} \widehat{S}_{i}^{z}+J z m \sum_{i \in B} \widehat{S}_{i}^{z}+J z \frac{m^{2}}{2} N+\cdots
\end{align*}
$$
with the coordination number $z$, the number of nearest neighbors $(z=6$ in a simple cubic lattice). It is simple to calculate the partition sum of this Hamiltonian,
$$
\begin{align*}
Z=\operatorname{tr}\left(e^{-\beta \mathcal{H}_{\mathrm{mf}}}\right)=\left[\left(e^{\beta J m z \hbar / 2}+e^{-\beta J m z \hbar / 2}\right) e^{-\beta J z m^{2} / 2}\right]^{N}
\end{align*}
$$

The free energy per spin is consequently given by
$$
\begin{align*}
F(m, T)=-\frac{1}{N} k_{B} T \ln Z=J z \frac{m^{2}}{2}-k_{B} T \ln (2 \cosh (\beta J z m \hbar / 2))
\end{align*}
$$

At fixed temperature, we minimise the free energy with respect to $m$ to determine the thermal equilibrium state, i.e., set $\partial F / \partial m=0$ and find
$$
\begin{align*}
m=\frac{\hbar}{2} \tanh \left(\frac{J z m \hbar}{2 k_{B} T}\right)
\end{align*}
$$
Actually, a magnetic field pointing into the opposite direction on each site would be another equilibrium variable (next to the temperature). We set it to zero. This is the self-consistency equation of the mean field theory. It provides a critical temperature $T_{N}$ (Néel temperature), below which the mean moment $m$ is finite. For $T \rightarrow T_{N-}, m$ approaches 0 continuously. Thus, $T_{N}$ can be found from a linearity self-consistency equation,
$$
\begin{align*}
m=\left.\frac{J z m \hbar^{2}}{4 k_{B} T}\right|_{T=T_{N}}
\end{align*}
$$
and thus
$$
\begin{align*}
T_{N}=\frac{J z \hbar^{2}}{4 k_{B}}
\end{align*}
$$

This means, that $T_{N}$ scales with the coupling constant and with $z$. The larger $J$ and the more neighbours are present, the more stable is the ordered state. At infinite $z$, the mean field approximation becomes exact. For $T$ close to $T_{N}$, we can expand the free energy in $m$,
$$
\begin{align*}
F(m, T)=F_{0}+\frac{J z}{2}\left[\left(1-\frac{T_{N}}{T}\right) m^{2}+\frac{2}{3 \hbar^{2}}\left(\frac{T_{N}}{T}\right)^{3} m^{4} \ldots\right]
\end{align*}
$$

This is a Landau theory for a phase transition of second order, where a symmetry is spontaneously broken. The breaking of the symmetry (from the high-temperature phase with high symmetry to the low-temperature phase with low symmetry) is described by the order parameter $m$. The minimisation of $F$ with respect to $m$ yields
$$
\begin{align*}
m(T)= \begin{cases}0, & T>T_{N} \\ \frac{\hbar}{2} \sqrt{3\left(T_{N} / T-1\right)}, & T \leq T_{N}\end{cases}
\end{align*}
$$

![Attachments/Notes/Solid-State Theory/IMG-0126164749183.webp](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164749183.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=182&rect=149,631,438,768|•]]

---
## 8.3 Collective Modes - Spin Wave Excitations
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=182&selection=23,0,25,40|•]]

Besides its favourable properties, the mean field approximation also has a number of insufficiencies. Quantum and some part of thermal fluctuations are neglected, and the insight into the low-energy excitations remains vague. As a matter of fact, as in the case of the ferromagnet, collective excitations exist here. In order to investigate these, we write the Heisenberg model in its spin components, i.e.,
$$
\begin{align*}
\mathcal{H}_{H}=J \sum_{\langle i, j\rangle}\left(\widehat{S}_{i}^{z} \widehat{S}_{j}^{z}+\frac{1}{2}\left(\widehat{S}_{i}^{+} \widehat{S}_{j}^{-}+\widehat{S}_{i}^{-} \widehat{S}_{j}^{+}\right)\right) .
\end{align*}
$$

In the ordered state, the moments shall be aligned along the $z$-axis.
To observe the dynamics of a flipped spin, we apply the operator $\widehat{W}=\sum_{l=0}^{N} f_{l} \widehat{S}_{l}^{-}$on the ground state $\left|\Phi_{0}\right\rangle$, and determine the spectrum, by solving the resulting eigenvalue equation
$$
\begin{align*}
\left(\mathcal{H}_{H}-E_{0}\right) \widehat{W}\left|\Phi_{0}\right\rangle=\left[\mathcal{H}_{H}, \widehat{W}\right]\left|\Phi_{0}\right\rangle=\hbar \omega \widehat{W}\left|\Phi_{0}\right\rangle,
\end{align*}
$$
with the ground state energy $E_{0}$. Using the spin-commutation relations
$$
\begin{align*}
\begin{aligned}
& {\left[\widehat{S}_{j}^{+}, \widehat{S}_{j}^{-}\right]=2 \widehat{S}_{j}^{z} \delta_{i j},} \\
& {\left[\widehat{S}_{j}^{z}, \widehat{S}_{j}^{ \pm}\right]= \pm \widehat{S}_{j}^{ \pm} \delta_{i j},}
\end{aligned}
\end{align*}
$$
then yields the equation
$$
\begin{align*}
\sum_{l}\left[-J \sum_{j}^{\prime} \widehat{S}_{j}^{z} \widehat{S}_{l}^{-}+J \sum_{j}^{\prime} \widehat{S}_{j}^{-} \widehat{S}_{l}^{z}-\hbar \omega \widehat{S}_{l}^{-}\right]\left|\Phi_{0}\right\rangle=0
\end{align*}
$$
where $\sum_{j}^{\prime}$ runs over all neighbors of $l$. We decouple this complicated problem by replacing the operators $\widehat{S}^{z}$ by their mean fields. Therefore, we have to distinguish between $A$ and $B$ sublattices, such that we end up with two equations,
$$
\begin{align*}
\begin{aligned}
\sum_{l \in A} f_{l}^{A}\left(J m z \widehat{S}_{l}^{-}+J m \sum_{\boldsymbol{a}} \widehat{S}_{l+\boldsymbol{a}}^{-}-\hbar \omega \widehat{S}_{l}^{-}\right)\left|\Phi_{0}\right\rangle=0, & l \in A, \\
\sum_{l^{\prime} \in B} f_{l^{\prime}}^{B}\left(-J m z \widehat{S}_{l^{\prime}}^{-}-J m \sum_{\boldsymbol{a}} \widehat{S}_{l^{\prime}+\boldsymbol{a}}^{-}-\hbar \omega \widehat{S}_{l^{\prime}}^{-}\right)\left|\Phi_{0}\right\rangle=0, & l^{\prime} \in B .
\end{aligned}
\end{align*}
$$

Choosing
$$
\begin{align*}
\begin{aligned}
& f_{l}^{A}=\sqrt{\frac{2}{N}} e^{-i \boldsymbol{q} \cdot \boldsymbol{r}_{l}} \quad l \in A \\
& f_{l^{\prime}}^{B}=\sqrt{\frac{2}{N}} e^{-i \boldsymbol{q} \cdot \boldsymbol{r}_{l^{\prime}}} \quad l^{\prime} \in B
\end{aligned}
\end{align*}
$$
we introduce the operators
$$
\begin{align*}
\begin{aligned}
& \widehat{S}_{l}^{-}=\sqrt{\frac{2}{N}} \sum_{\boldsymbol{q}} \widehat{a}_{\boldsymbol{q}}^{\dagger} e^{i \boldsymbol{q} \cdot \boldsymbol{r}_{l}} \\
& \widehat{S}_{l^{\prime}}^{-}=\sqrt{\frac{2}{N}} \sum_{\boldsymbol{q}} \widehat{b}_{\boldsymbol{q}}^{\dagger} e^{i \boldsymbol{q} \cdot \boldsymbol{r}_{l^{\prime}}}
\end{aligned}
\end{align*}
$$
with $l \in A$ and $l^{\prime} \in B$, and, vice versa,
$$
\begin{align*}
\begin{aligned}
& \widehat{a}_{\boldsymbol{q}}^{\dagger}=\sqrt{\frac{2}{N}} \sum_{l \in A} \widehat{S}_{l}^{-} e^{-i \boldsymbol{q} \cdot \boldsymbol{r}_{l}} \\
& \widehat{b}_{\boldsymbol{q}}^{\dagger}=\sqrt{\frac{2}{N}} \sum_{l^{\prime} \in B} \widehat{S}_{l^{\prime}}^{-} e^{-i \boldsymbol{q} \cdot \boldsymbol{r}_{l^{\prime}}}
\end{aligned}
\end{align*}
$$
and insert them into the equation and obtain,
$$
\begin{align*}
\begin{aligned}
& \left((J m z-\hbar \omega) \sum_{l \in A} \widehat{S}_{l}^{-} e^{-i \boldsymbol{q} \cdot \boldsymbol{r}_{l}}+J m \sum_{\boldsymbol{a}} e^{i \boldsymbol{q} \cdot \boldsymbol{a}} \sum_{l^{\prime} \in B} \widehat{S}_{l^{\prime}}^{-} e^{-i \boldsymbol{q} \cdot \boldsymbol{r}_{l^{\prime}}}\right)\left|\Phi_{0}\right\rangle=0 \\
& \left((-J m z-\hbar \omega) \sum_{l^{\prime} \in B} \widehat{S}_{l^{\prime}}^{-} e^{-i \boldsymbol{q} \cdot \boldsymbol{r}_{l^{\prime}}}-J m \sum_{\boldsymbol{a}} e^{i \boldsymbol{q} \cdot \boldsymbol{a}} \sum_{l \in A} \widehat{S}_{l}^{-} e^{-i \boldsymbol{q} \cdot \boldsymbol{r}_{l}}\right)\left|\Phi_{0}\right\rangle=0
\end{aligned}
\end{align*}
$$

From this follows that
$$
\begin{align*}
\begin{aligned}
\left((J m z-\hbar \omega) \widehat{a}_{\boldsymbol{q}}^{\dagger}+J m \gamma_{\boldsymbol{q}} \widehat{b}_{\boldsymbol{q}}^{\dagger}\right)\left|\Phi_{0}\right\rangle & =0 \\
\left((-J m z-\hbar \omega) \widehat{b}_{\boldsymbol{q}}^{\dagger}-J m \gamma_{\boldsymbol{q}} \widehat{a}_{\boldsymbol{q}}^{\dagger}\right)\left|\Phi_{0}\right\rangle & =0
\end{aligned}
\end{align*}
$$
with $\gamma_{\boldsymbol{q}}=\sum_{\boldsymbol{a}} e^{i \boldsymbol{q} \cdot \boldsymbol{a}}=2\left(\cos q_{x} a+\cos q_{y} a+\cos q_{z} a\right)$. This eigenvalue equation is easily solved leading to the description of spin waves in the antiferromagnet. The energy spectrum is given by
$$
\begin{align*}
\hbar \omega_{\boldsymbol{q}}= \pm J m \sqrt{z^{2}-\gamma_{\boldsymbol{q}}^{2}}
\end{align*}
$$

Note, that only the positive energies make sense. It is interesting to investigate the limit of small $\boldsymbol{q}$,
$$
\begin{align*}
z^{2}-\gamma_{\boldsymbol{q}}^{2} \rightarrow z^{2} \boldsymbol{q}^{2}+O\left(q^{4}\right)
\end{align*}
$$
where
$$
\begin{align*}
\hbar \omega_{\boldsymbol{q}}=J m z|\boldsymbol{q}|+\cdots
\end{align*}
$$

This means that, in contrast to the ferromagnet, the spin waves of the antiferromagnet have a linear low-energy spectrum (cf. Figure 8.7). The same applies here if we expand the spectrum around $\boldsymbol{Q}=(1,1,1) \pi / a$ (folding of the Brillouin zone due to the doubling of the unit cell). After a suitable normalisation, the operators $\widehat{a}_{\boldsymbol{q}}$ and $\widehat{b}_{\boldsymbol{q}}$ are of bosonic nature; this comes about since, due to the mean field approximation, the $\widehat{S}_{l}^{ \pm}$are bosonic as well,
$$
\begin{align*}
\left[\widehat{S}_{l}^{+}, \widehat{S}_{j}^{-}\right]=2 \widehat{S}_{l}^{z} \delta_{l j} \approx \pm 2 m \delta_{l j}
\end{align*}
$$
where the sign depends on the sublattice. The zero-point fluctuations of these bosons yield quantum fluctuations, which reduce the moment $m$ from its mean field value. In a one-dimensional spin chain these fluctuations are strong enough to suppress antiferromagnetically order even for the ground state. The fact that the spectrum starts at zero has to do with the infinite degeneracy of the ground state. The ordered moments can be turned into any direction globally. This property is known under the name Goldstone theorem, which tells that each ordered state that results from a spontaneous breaking of a continuous symmetry has collective excitations with arbitrary small (positive) energies. The linear spectrum is normal for collective excitations of this kind; the quadratic spectrum of the ferromagnet has to do with the fact that the state breaks time-inversion symmetry.

![Attachments/Notes/Solid-State Theory/IMG-0126164749507.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164749507.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=184&rect=206,625,384,764|•]]

These spin excitations show the difference between a band and a Mott insulator very clearly. While in the band insulator both charge and spin excitations have an energy gap and are inert, the Mott insulator has only gapped charge excitation. However, the spin degrees of freedom for a low-energy sector which can even form gapless excitations as shown just above.

---
# 9 Identical Quantum Particles - Formalism of Second Quantisation
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=185&selection=2,0,4,12|•]]

This chapter gives an introduction to the formalism of second quantisation which is a convenient technical tool discussing many-body quantum systems. It is indispensable in quantum field theory as well as in solid state physics. We distinguish between Fermions (half-integer spins) and Bosons (integer spins) which behave quite differently, as we have seen in the previous chapter. This behaviour is implemented in their many-body wave functions. While in the previous chapter we could circumvent to deal with this aspect as we considered independent indistinguishable quantum particles, it is unavoidable to implement a more careful analysis once interactions between the particles appear.

---
## 9.1 Many-Body Wave Functions and Particle Statistics
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=185&selection=19,0,21,48|•]]

The Hamiltonian describing the dynamics of a systems of many identical quantum particles must be invariant under exchange (permutation) of particle degrees of freedom (coordinate, momentum, spin etc). The identical quantum particles are indistinguishable, since in quantum mechanics it is impossible to follow the trajectories of particles under general conditions, unlike in classical mechanics. Permutations play indeed an important role in characterising quantum particles. We introduce the many-body wave function of $N$ particles,
$$
\begin{align*}
\psi\left(\boldsymbol{r}_{1}, s_{1} ; \boldsymbol{r}_{2}, s_{2} ; \ldots ; \boldsymbol{r}_{N}, s_{N}\right)
\end{align*}
$$
where each particle is labeled by the coordinate $\boldsymbol{r}$ and spin $s$. In the following we will use for this the short-hand notation $\psi(1, \ldots, N)$. Analogously we define many-body operators,
$$
\begin{align*}
\hat{A}(1, \ldots, N)=A\left(\hat{\boldsymbol{r}}_{1}, \hat{\boldsymbol{p}}_{1}, \hat{\boldsymbol{S}}_{1} ; \ldots ; \hat{\boldsymbol{r}}_{N}, \hat{\boldsymbol{p}}_{N}, \hat{\boldsymbol{S}}_{N}\right)
\end{align*}
$$
with $\hat{\boldsymbol{r}}_{j}, \hat{\boldsymbol{p}}_{j}$ and $\hat{\boldsymbol{S}}_{j}$ being the operators for position, momentum and spin of particle $j$. Note that the Hamiltonian $\mathcal{H}$ belongs to these operators too.
We introduce the transposition (exchange) operator $\hat{P}_{i j}$ which is an element of the permutation group of $N$ elements and exchanges the particles $i$ and $j(1 \leq i, j \leq N)$,
$$
\begin{align*}
\begin{aligned}
& \hat{P}_{i j} \psi(1, \ldots, i, \ldots, j, \ldots, N)=\psi(1, \ldots, j, \ldots, i, \ldots, N) \\
& \hat{P}_{i j} \hat{A}(1, \ldots, i, \ldots, j, \ldots, N)=\hat{A}(1, \ldots, j, \ldots, i, \ldots, N)
\end{aligned}
\end{align*}
$$

Note that $\left(\hat{P}_{i j}\right)^{-1}=\hat{P}_{i j}$. As it is invariant under particle exchange, the Hamiltonian commutes with $\hat{P}_{i j}$,
$$
\begin{align*}
\left[\mathcal{H}, \hat{P}_{i j}\right]=0
\end{align*}
$$
and, consequently, any combination of several transpositions, i.e. all elements of the permutation group $S_{N}$, commute with $\mathcal{H}$. Hence, eigenstates of $\mathcal{H}$ have the property
$$
\begin{align*}
\mathcal{H}|\psi\rangle=E|\psi\rangle \quad \Rightarrow \quad \mathcal{H} \hat{P}_{i j}|\psi\rangle=\hat{P}_{i j} \mathcal{H}|\psi\rangle=E \hat{P}_{i j}|\psi\rangle,
\end{align*}
$$
where we define the wave function as
$$
\begin{align*}
\psi(1, \ldots, N)=\langle 1, \ldots, N \mid \psi\rangle .
\end{align*}
$$

We distinguish now between Fermions and Bosons through their behaviour under transpositions $\hat{P}_{i j}$,
$$
\begin{align*}
\psi(1, \ldots, i, \ldots, j, \ldots, N)= \begin{cases}+\psi(1, \ldots, j, \ldots, i, \ldots, N) & \text { Bosons } \\ -\psi(1, \ldots, j, \ldots, i, \ldots, N) & \text { Fermions }\end{cases}
\end{align*}
$$

This means that bosonic wave functions are completely symmetric under exchange of particles, while Fermionic wave functions are completely antisymmetric. Note that this property is valid also for composite particles. Any particle composed of an even number of particles would be a Boson, e.g. ${ }^{4} \mathrm{He}$ which contains 2 protons +2 neutrons +2 electrons $=6$ Fermions, as exchange two such particles leaves the sign of wave function unchanged. In the same way a particle with an odd number of Fermions is a Fermions, e.g. ${ }^{3}$He with 2 protons +1 neutron +2 electrons $=5$ Fermions. Note that the antisymmetric wave functions prevents two Fermions from having the same quantum numbers. If ( $\boldsymbol{r}_{i}, s_{i}$ ) and $\left(\boldsymbol{r}_{j}, s_{j}\right)$ are identical, then we find
$$
\begin{align*}
\psi(1, \ldots, i, \ldots, i, \ldots, N)=-\psi(1, \ldots, i, \ldots, i, \ldots, N)=0
\end{align*}
$$
which implies the Pauli exclusion principle.

---
## 9.2 Independent, Indistinguishable Particles
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=186&selection=160,0,162,40|•]]

We consider $N$ identical particles in a potential $V$ which are not interacting among each other. The Hamiltonian is then given by
$$
\begin{align*}
\mathcal{H}=\sum_{i=1}^{N} \mathcal{H}_{i} \quad \text { with } \quad \mathcal{H}_{i}=\frac{\hat{\boldsymbol{p}}_{i}^{2}}{2 m}+V\left(\hat{\boldsymbol{r}}_{i}\right) .
\end{align*}
$$

The states of each particle form an independent Hilbert space $\left\{\psi_{\nu}\right\}$ and we can find the stationary states
$$
\begin{align*}
\mathcal{H}_{i} \psi_{\nu}\left(\boldsymbol{r}_{i}, s_{i}\right)=\epsilon_{\nu} \psi_{\nu}\left(\boldsymbol{r}_{i}, s_{i}\right) .
\end{align*}
$$

These single-particle wave functions are renormalised, i.e.
$$
\begin{align*}
\sum_{s} \int d^{3} r\left|\psi_{\nu}(\boldsymbol{r}, s)\right|^{2}=1
\end{align*}
$$

We may now construct a many-body wave function as a product wave function with the corresponding exchange property.
For Bosons we write
$$
\begin{align*}
\left\langle\boldsymbol{r}_{1}, s_{1} ; \ldots, \boldsymbol{r}_{N}, s_{N} \mid \Psi_{B}\right\rangle=\Psi_{B}(1, \ldots, N)=\sum_{\hat{P} \in S_{N}} \hat{P} \psi_{\nu_{1}}\left(\boldsymbol{r}_{1}, s_{1}\right) \cdots \psi_{\nu_{N}}\left(\boldsymbol{r}_{N}, s_{N}\right)
\end{align*}
$$
and for Fermions
$$
\begin{align*}
\left\langle\boldsymbol{r}_{1}, s_{1} ; \ldots, \boldsymbol{r}_{N}, s_{N} \mid \Psi_{F}\right\rangle=\Psi_{F}(1, \ldots, N)=\sum_{\hat{P} \in S_{N}} \operatorname{sgn}(\hat{P}) \hat{P} \psi_{\nu_{1}}\left(\boldsymbol{r}_{1}, s_{1}\right) \cdots, \psi_{\nu_{N}}\left(\boldsymbol{r}_{N}, s_{N}\right)
\end{align*}
$$

where the operator $\hat{P}$ permutes the state indices $\nu_{i}$ of the wave functions and $\operatorname{sgn}(\hat{P})$ is the sign of the permutation $\hat{P}$ which is $+1(-1)$ if $\hat{P}$ is composed of an even (odd) number of transpositions. Interestingly the Fermionic wave function can be represented as a determinant, the so-called Slater determinant,

$$
\begin{align*}
\Psi_{F}(1, \ldots, N)=\operatorname{Det}\left[\begin{array}{ccc}
\psi_{\mu_{1}}(1) & \cdots & \psi_{\mu_{1}}(N) \\
\vdots & & \vdots \\
\psi_{\mu_{N}}(1) & \cdots & \psi_{\mu_{N}}(N)
\end{array}\right]
\end{align*}
$$

Obviously the determinant vanishes if two rows or columns are identical, enforcing the Pauli principle. These wave functions are not renormalised so that
$$
\begin{align*}
\begin{aligned}
& \left\langle\Psi_{B} \mid \Psi_{B}\right\rangle=N!n_{\nu_{1}}!\cdots n_{\nu_{N}}!, \\
& \left\langle\Psi_{F} \mid \Psi_{F}\right\rangle=N!,
\end{aligned}
\end{align*}
$$
where $n_{\nu_{j}}$ denotes the number of particles in the stationary single particle state labeled by $\nu_{j}$. For Fermions it is $n_{\nu_{j}}=0,1$ only.

---
## 9.3 Second Quantisation Formalism
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=187&selection=169,0,171,29|•]]

It is in principle possible to investigate many-body states using many-body wave functions. However, we will introduce here a formalism which is in many respects much more convenient and efficient. It is based on the operators which "create" or "annihilate" particles and act on states in the Fock space $\mathcal{F}$ which is an extended space of states combining Hilbert space $\mathcal{Q}_{n}$ of different particle numbers $n$,
$$
\begin{align*}
\mathcal{F}=\bigoplus_{n=0}^{\infty} \mathcal{Q}_{n} .
\end{align*}
$$

Note that the name "second quantisation" does not imply a new quantum mechanics.
We can express a many-body state of independent particles in the particle occupation number representations,
$$
\begin{align*}
\left|n_{\nu_{1}}, n_{\nu_{2}}, \ldots\right\rangle
\end{align*}
$$
which is a state in $\mathcal{F}$ whose particle number is given by $N=n_{\nu_{1}}+n_{\nu_{2}}+\cdots$.

### 9.3.1 Creation- and Annihilation Operators

We define operators $\hat{a}_{\nu}$ and $\hat{a}_{\nu}^{\dagger}$ which connect Hilbertspaces of different particle number,
$$
\begin{align*}
\hat{a}_{\nu}: \mathcal{Q}_{n} \rightarrow \mathcal{Q}_{n-1} \quad \text { and } \quad \hat{a}_{\nu}^{\dagger}: \mathcal{Q}_{n} \rightarrow \mathcal{Q}_{n+1} .
\end{align*}
$$

The first we call annihilation and the second creation operator whose action is best understood in the particle number or occupation representation.

Bosons: Let us first consider Bosons which, for simplicity, do not possess a spin. The two operators have the following property,
$$
\begin{align*}
\begin{aligned}
& \hat{a}_{\nu}\left|n_{\nu_{1}}, n_{\nu_{2}}, \ldots, n_{\nu}, \ldots\right\rangle=\sqrt{n_{\nu}}\left|n_{\nu_{1}}, n_{\nu_{2}}, \ldots, n_{\nu}-1, \ldots\right\rangle, \\
& \hat{a}_{\nu}^{\dagger}\left|n_{\nu_{1}}, n_{\nu_{2}}, \ldots, n_{\nu}, \ldots\right\rangle=\sqrt{n_{\nu}+1}\left|n_{\nu_{1}}, n_{\nu_{2}}, \ldots, n_{\nu}+1, \ldots\right\rangle,
\end{aligned}
\end{align*}
$$
and
$$
\begin{align*}
\begin{aligned}
& \left\langle n_{\nu_{1}}, n_{\nu_{2}}, \ldots, n_{\nu}, \ldots\right| \hat{a}_{\nu}^{\dagger}=\sqrt{n_{\nu}}\left\langle n_{\nu_{1}}, n_{\nu_{2}}, \ldots, n_{\nu}-1, \ldots\right|, \\
& \left\langle n_{\nu_{1}}, n_{\nu_{2}}, \ldots, n_{\nu}, \ldots\right| \hat{a}_{\nu}=\sqrt{n_{\nu}+1}\left\langle n_{\nu_{1}}, n_{\nu_{2}}, \ldots, n_{\nu}+1, \ldots\right| .
\end{aligned}
\end{align*}
$$

It is obvious that
$$
\begin{align*}
\hat{a}_{\nu}\left|n_{\nu_{1}}, n_{\nu_{2}}, \ldots, n_{\nu}=0, \ldots\right\rangle=0 \quad \text { and } \quad\left\langle n_{\nu_{1}}, n_{\nu_{2}}, \ldots, n_{\nu}=0, \ldots\right| \hat{a}_{\nu}^{\dagger}=0
\end{align*}
$$

The operators satisfy the following commutation relations,
$$
\begin{align*}
\left[\hat{a}_{\nu}, \hat{a}_{\nu^{\prime}}^{\dagger}\right]=\delta_{\nu \nu^{\prime}} \quad \text { and } \quad\left[\hat{a}_{\nu}, \hat{a}_{\nu^{\prime}}\right]=\left[\hat{a}_{\nu}^{\dagger}, \hat{a}_{\nu^{\prime}}^{\dagger}\right]=0
\end{align*}
$$

Note that these relations correspond to those of the lowering and raising operators of a harmonic oscillator. Indeed we have seen previously that the excitation spectrum of a harmonic oscillator obeys bosonic statistics.
The creation operators can also be used to construct a state from the vacuum, denoted as $|0\rangle$, where there are no particles, such that $\hat{a}_{\nu}|0\rangle=0$. A general state in occupation number representation can be written as,
$$
\begin{align*}
\left|n_{\nu_{1}}, n_{\nu_{2}}, \ldots, n_{\nu}, \ldots\right\rangle=\frac{\cdots\left(\hat{a}_{\nu}^{\dagger}\right)^{n_{\nu}} \cdots\left(\hat{a}_{\nu_{2}}^{\dagger}\right)^{n_{\nu_{2}}}\left(\hat{a}_{\nu_{1}}^{\dagger}\right)^{n_{\nu_{1}}}}{\sqrt{n_{\nu_{1}}!n_{\nu_{2}}!\cdots}}|0\rangle
\end{align*}
$$

The number operator is defined as
$$
\begin{align*}
\hat{n}_{\nu}=\hat{a}_{\nu}^{\dagger} \hat{a}_{\nu} \quad \text { with } \quad \hat{n}_{\nu}\left|n_{\nu_{1}}, n_{\nu_{2}}, \ldots, n_{\nu}, \ldots\right\rangle=n_{\nu}\left|n_{\nu_{1}}, n_{\nu_{2}}, \ldots, n_{\nu}, \ldots\right\rangle
\end{align*}
$$
and the total number of particles is obtained through the operator
$$
\begin{align*}
\widehat{N}=\sum_{i} \hat{n}_{\nu_{i}}
\end{align*}
$$

Knowing the spectrum of the Hamiltonian of independent particles, we may express the Hamiltonian as
$$
\begin{align*}
\mathcal{H}=\sum_{\nu} \epsilon_{\nu} \hat{a}_{\nu}^{\dagger} \hat{a}_{\nu}=\sum_{\nu} \epsilon_{\nu} \hat{n}_{\nu}
\end{align*}
$$

Fermions: Now we turn to Fermions with spin $1 / 2$ (half-integer spin). Again the single-particle state shall be labelled by $\nu$ including the spin index for $\uparrow$ and $\downarrow$. Analogously to the case of Bosons we introduce operators $\hat{a}_{\nu}^{\dagger}$ and $\hat{a}_{\nu}$ which obey anti-commutation rules,
$$
\begin{align*}
\left\{\hat{a}_{\nu}, \hat{a}_{\nu^{\prime}}^{\dagger}\right\}=\delta_{\nu \nu^{\prime}} \quad \text { and } \quad\left\{\hat{a}_{\nu}, \hat{a}_{\nu^{\prime}}\right\}=\left\{\hat{a}_{\nu}^{\dagger}, \hat{a}_{\nu^{\prime}}^{\dagger}\right\}=0
\end{align*}
$$
where $\{\ldots\}$ is defined as $\{\hat{A}, \hat{B}\}=\hat{A} \hat{B}+\hat{B} \hat{A}$. In particular this implies that
$$
\begin{align*}
\hat{a}_{\nu}^{\dagger} \hat{a}_{\nu}^{\dagger}=0 \quad \text { and } \quad \hat{a}_{\nu} \hat{a}_{\nu}=0
\end{align*}
$$
such that $n_{\nu}=0,1$, i.e. each single-particle state labelled by $\nu$ can be occupied by at most one particle, because
$$
\begin{align*}
\hat{a}_{\nu}^{\dagger}\left|\ldots, n_{\nu}=1, \ldots\right\rangle=\hat{a}_{\nu}^{\dagger} \hat{a}_{\nu}^{\dagger}\left|\ldots, n_{\nu}=0, \ldots\right\rangle=0
\end{align*}
$$

A general state may be written as
$$
\begin{align*}
\left|n_{\nu_{1}}, n_{\nu_{2}}, \ldots, n_{\nu}, \ldots\right\rangle=\cdots\left(\hat{a}_{\nu}^{\dagger}\right)^{n_{\nu}} \cdots\left(\hat{a}_{\nu_{2}}^{\dagger}\right)^{n_{\nu_{2}}}\left(\hat{a}_{\nu_{1}}^{\dagger}\right)^{n_{\nu_{1}}} \quad|0\rangle
\end{align*}
$$
which restricts $n_{\nu}$ to 0 or 1 . The order of the creation operators plays an important role as the exchange of two operators yields a minus sign. We consider an example here,
$$
\begin{align*}
\left|n_{1}, n_{2}, n_{3}, n_{4}\right\rangle=|1,1,1,1\rangle=\hat{a}_{4}^{\dagger} \hat{a}_{3}^{\dagger} \hat{a}_{2}^{\dagger} \hat{a}_{1}^{\dagger}|0\rangle
\end{align*}
$$

Removing now one particle yields
$$
\begin{align*}
\begin{aligned}
\hat{a}_{2}|1,1,1,1\rangle & =\hat{a}_{2}\left[\hat{a}_{4}^{\dagger} \hat{a}_{3}^{\dagger} \hat{a}_{2}^{\dagger} \hat{a}_{1}^{\dagger}\right]|0\rangle=\hat{a}_{4}^{\dagger} \hat{a}_{3}^{\dagger} \hat{a}_{2} \hat{a}_{2}^{\dagger} \hat{a}_{1}^{\dagger}|0\rangle=\hat{a}_{4}^{\dagger} \hat{a}_{3}^{\dagger}\left(1-\hat{a}_{2}^{\dagger} \hat{a}_{2}\right) \hat{a}_{1}^{\dagger}|0\rangle \\
& =\hat{a}_{4}^{\dagger} \hat{a}_{3}^{\dagger} \hat{a}_{1}^{\dagger}|0\rangle=|1,0,1,1\rangle
\end{aligned}
\end{align*}
$$
and now analogously
$$
\begin{align*}
\begin{aligned}
\hat{a}_{3}|1,1,1,1\rangle & =\hat{a}_{3}\left[\hat{a}_{4}^{\dagger} \hat{a}_{3}^{\dagger} \hat{a}_{2}^{\dagger} \hat{a}_{1}^{\dagger}\right]|0\rangle=-\hat{a}_{4}^{\dagger} \hat{a}_{3} \hat{a}_{3}^{\dagger} \hat{a}_{2}^{\dagger} \hat{a}_{1}^{\dagger}|0\rangle=-\hat{a}_{4}^{\dagger}\left(1-\hat{a}_{3}^{\dagger} \hat{a}_{3}\right) \hat{a}_{2}^{\dagger} \hat{a}_{1}^{\dagger}|0\rangle \\
& =-\hat{a}_{4}^{\dagger} \hat{a}_{2}^{\dagger} \hat{a}_{1}^{\dagger}|0\rangle=-|1,1,0,1\rangle
\end{aligned}
\end{align*}
$$

Obviously, the order of the operators is important and should not be ignored when dealing with Fermions.

### 9.3.2 Field Operators

We consider now independent free particles whose states are characterised by momentum $\boldsymbol{p}=\hbar \boldsymbol{k}$ and spin $s$ with an energy $\epsilon_{\boldsymbol{k}}=\hbar^{2} \boldsymbol{k}^{2} / 2 m$. The wave function has a plane wave shape,
$$
\begin{align*}
\psi_{\boldsymbol{k}}(\boldsymbol{r})=\frac{1}{\sqrt{V}} e^{i \boldsymbol{k} \cdot \boldsymbol{r}} \quad \text { with } \quad \boldsymbol{k}=\frac{2 \pi}{L}\left(n_{x}, n_{y}, n_{z}\right)
\end{align*}
$$
where we used periodic boundary conditions in a cube of edge length $L$ (volume $V=L^{3}$ ). On this basis we write field operators
$$
\begin{align*}
\widehat{\Psi}_{s}(\boldsymbol{r})=\frac{1}{\sqrt{V}} \sum_{\boldsymbol{k}} e^{i \boldsymbol{k} \cdot \boldsymbol{r}} \hat{a}_{\boldsymbol{k} s} \quad \text { and } \quad \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r})=\frac{1}{\sqrt{V}} \sum_{\boldsymbol{k}} e^{-i \boldsymbol{k} \cdot \boldsymbol{r}} \hat{a}_{\boldsymbol{k} s}^{\dagger}
\end{align*}
$$
and the inverse,
$$
\begin{align*}
\hat{a}_{\boldsymbol{k}}^{\dagger}=\int d^{3} r \frac{e^{i \boldsymbol{k} \cdot \boldsymbol{r}}}{\sqrt{V}} \widehat{\Psi}^{\dagger}(\boldsymbol{r}) \quad \text { und } \quad \hat{a}_{\boldsymbol{k}}=\int d^{3} r \frac{e^{-i \boldsymbol{k} \cdot \boldsymbol{r}}}{\sqrt{V}} \widehat{\Psi}(\boldsymbol{r})
\end{align*}
$$

Also these operators $\widehat{\Psi}_{s}(\boldsymbol{r})$ and $\widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r})$ act as annihilation or creation operators, respectively, in the sense,
$$
\begin{align*}
\widehat{\Psi}_{s}(\boldsymbol{r})^{\dagger}|0\rangle=|\boldsymbol{r}, s\rangle \quad \text { and } \quad \phi_{s}(\boldsymbol{r})=\langle\boldsymbol{r}, s \mid \phi\rangle=\langle 0| \widehat{\Psi}_{s}(\boldsymbol{r})|\phi\rangle
\end{align*}
$$

Moreover we have the condition
$$
\begin{align*}
\widehat{\Psi}_{s}(\boldsymbol{r})|0\rangle=0 \quad \text { and } \quad\langle 0| \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r})=0
\end{align*}
$$

The field operators also satisfy (anti-)commuation relations,
$$
\begin{align*}
\widehat{\Psi}_{s}(\boldsymbol{r}) \widehat{\Psi}_{s^{\prime}}^{\dagger}\left(\boldsymbol{r}^{\prime}\right) \mp \widehat{\Psi}_{s^{\prime}}^{\dagger}\left(\boldsymbol{r}^{\prime}\right) \widehat{\Psi}_{s}(\boldsymbol{r})=\frac{1}{V} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}} e^{i \boldsymbol{k} \cdot \boldsymbol{r}-i \boldsymbol{k}^{\prime} \cdot \boldsymbol{r}^{\prime}} \underbrace{\left(\hat{a}_{\boldsymbol{k} s} \hat{a}_{\boldsymbol{k}^{\prime} s^{\prime}}^{\dagger} \mp \hat{a}_{\boldsymbol{k}^{\prime} s^{\prime}}^{\dagger} \hat{a}_{\boldsymbol{k} s}\right)}_{=\delta_{\boldsymbol{k} \boldsymbol{k}^{\prime}} \delta_{s s^{\prime}}}=\delta\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right) \delta_{s s^{\prime}}
\end{align*}
$$
and analogously
$$
\begin{align*}
\widehat{\Psi}_{s}(\boldsymbol{r}) \widehat{\Psi}_{s^{\prime}}\left(\boldsymbol{r}^{\prime}\right) \mp \widehat{\Psi}_{s^{\prime}}\left(\boldsymbol{r}^{\prime}\right) \widehat{\Psi}_{s}(\boldsymbol{r})=0 \quad \text { and } \quad \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{s^{\prime}}^{\dagger}\left(\boldsymbol{r}^{\prime}\right) \mp \widehat{\Psi}_{s^{\prime}}^{\dagger}\left(\boldsymbol{r}^{\prime}\right) \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r})=0
\end{align*}
$$
for Bosons ( - ) and Fermions ( + ). Taking these relations it becomes also clear that
$$
\begin{align*}
\begin{aligned}
\left\langle\boldsymbol{r}^{\prime}, s^{\prime} \mid \boldsymbol{r}, s\right\rangle & =\langle 0| \widehat{\Psi}_{s^{\prime}}\left(\boldsymbol{r}^{\prime}\right) \widehat{\Psi}_{s}(\boldsymbol{r})^{\dagger}|0\rangle \\
& =\langle 0| \delta\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right) \delta_{s s^{\prime}}|0\rangle \mp \underbrace{\langle 0| \widehat{\Psi}_{s}(\boldsymbol{r})^{\dagger} \widehat{\Psi}_{s^{\prime}}\left(\boldsymbol{r}^{\prime}\right)|0\rangle}_{=0}=\delta\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right) \delta_{s s^{\prime}}
\end{aligned}
\end{align*}
$$

Applying a field-operator to a $N$-particle state yields,
$$
\begin{align*}
\widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r})\left|\boldsymbol{r}_{1}, s_{1} ; \ldots ; \boldsymbol{r}_{N}, s_{N}\right\rangle=\sqrt{N+1}\left|\boldsymbol{r}_{1}, s_{1} ; \ldots ; \boldsymbol{r}_{N}, s_{N} ; \boldsymbol{r}, s\right\rangle
\end{align*}
$$
such that
$$
\begin{align*}
\left|\boldsymbol{r}_{1}, s_{1} ; \boldsymbol{r}_{2}, s_{2} ; \ldots ; \boldsymbol{r}_{N}, s_{N}\right\rangle=\frac{1}{\sqrt{N!}} \widehat{\Psi}_{s_{N}}^{\dagger}\left(\boldsymbol{r}_{N}\right) \cdots \widehat{\Psi}_{s_{1}}^{\dagger}\left(\boldsymbol{r}_{1}\right)|0\rangle
\end{align*}
$$

Note that particle statistics leads to the following relation under particle exchange,
$$
\begin{align*}
\left|\boldsymbol{r}_{1}, s_{1} ; \boldsymbol{r}_{2}, s_{2} ; \ldots ; \boldsymbol{r}_{N}, s_{N}\right\rangle= \pm\left|\boldsymbol{r}_{2}, s_{2} ; \boldsymbol{r}_{1}, s_{1} ; \ldots ; \boldsymbol{r}_{N}, s_{N}\right\rangle
\end{align*}
$$
where + is for Bosons and - is for Fermions. The renormalisation of the real space states have to be understood within the projection to occupation number states, yielding many-body wave functions analogous to those introduced Eqs. (9.12, 9.13),
$$
\begin{align*}
\Phi(1, \ldots, N)=\left\langle\boldsymbol{r}_{1}, s_{1} ; \ldots, \boldsymbol{r}_{N}, s_{N} \mid n_{\boldsymbol{k}_{1}, s_{1}^{\prime}}, n_{\boldsymbol{k}_{2}, s_{2}^{\prime}}, \ldots\right\rangle .
\end{align*}
$$

Note that $N=\sum_{\boldsymbol{k}, s} n_{\boldsymbol{k}, s^{\prime}}$. Taking care of the symmetry / antisymmetry of the many-body wave function we recover the renormalisation behaviour in Eqs.(9.42, 9.43).

---
## 9.4 Observables in Second Quantisation
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=190&selection=191,0,193,34|•]]

It is possible to express Hermitian operators in the second quantisation language. We will show this explicitly for the density operator by calculating matrix elements. The particle density operator is given by
$$
\begin{align*}
\widehat{\rho}(\boldsymbol{r})=\sum_{i=1}^{N} \delta\left(\boldsymbol{r}-\widehat{\boldsymbol{r}}_{i}\right) .
\end{align*}
$$

Now we take two states $|\phi\rangle,\left|\phi^{\prime}\right\rangle \in \mathcal{Q}_{N}$ with the fixed particle number $N$ and examine the matrix element
$$
\begin{align*}
\begin{aligned}
\left\langle\phi^{\prime}\right| \widehat{\rho}(\boldsymbol{r})|\phi\rangle & =\int d^{3} r_{1} \cdots d^{3} r_{N}\left\langle\phi^{\prime} \mid \boldsymbol{r}_{1}, \ldots, \boldsymbol{r}_{N}\right\rangle\left\langle\boldsymbol{r}_{1}, \ldots, \boldsymbol{r}_{N}\right| \sum_{i} \delta\left(\boldsymbol{r}-\widehat{\boldsymbol{r}}_{i}\right)|\phi\rangle \\
& =\int d^{3} r_{1} \cdots d^{3} r_{N} \sum_{i} \delta\left(\boldsymbol{r}-\boldsymbol{r}_{i}\right)\left\langle\phi^{\prime} \mid \boldsymbol{r}_{1}, \ldots, \boldsymbol{r}_{N}\right\rangle\left\langle\boldsymbol{r}_{1}, \ldots, \boldsymbol{r}_{N} \mid \phi\right\rangle \\
& =N \int d^{3} r_{1} \cdots d^{3} r_{N-1}\left\langle\phi^{\prime} \mid \boldsymbol{r}_{1}, \ldots, \boldsymbol{r}_{N-1}, \boldsymbol{r}\right\rangle\left\langle\boldsymbol{r}_{1}, \ldots, \boldsymbol{r}_{N-1}, \boldsymbol{r} \mid \phi\right\rangle,
\end{aligned}
\end{align*}
$$
where we suppress spin indices for the time being. Here we used in the last equality that we can relabel the coordinate variables and permute the particles. Since we have the product of two states under the same perturbation, Fermion sign changes do not appear and $N$ identical integrals follow. We claim now that the density operator can also be written as
$$
\begin{align*}
\widehat{\rho}(\boldsymbol{r})=\widehat{\Psi}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}(\boldsymbol{r})
\end{align*}
$$
which leads to
$$
\begin{align*}
\begin{aligned}
\left\langle\phi^{\prime}\right| \widehat{\Psi}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}(\boldsymbol{r})|\phi\rangle & =\int d^{3} r_{1} \cdots d^{3} r_{N-1}\left\langle\phi^{\prime}\right| \widehat{\Psi}^{\dagger}(\boldsymbol{r})\left|\boldsymbol{r}_{1}, \ldots, \boldsymbol{r}_{N-1}\right\rangle\left\langle\boldsymbol{r}_{1}, \ldots, \boldsymbol{r}_{N-1}\right| \widehat{\Psi}(\boldsymbol{r})|\phi\rangle \\
& =N \int d^{3} r_{1} \cdots d^{3} r_{N-1}\left\langle\phi^{\prime} \mid \boldsymbol{r}_{1}, \ldots, \boldsymbol{r}_{N-1}, \boldsymbol{r}\right\rangle\left\langle\boldsymbol{r}_{1}, \ldots, \boldsymbol{r}_{N-1}, \boldsymbol{r} \mid \phi\right\rangle
\end{aligned}
\end{align*}
$$
which is obviously identical to before.
The kinetic energy can be expressed as
$$
\begin{align*}
\mathcal{H}_{\text {kin }}=\sum_{\boldsymbol{k}} \frac{\hbar^{2} \boldsymbol{k}^{2}}{2 m} \hat{a}_{\boldsymbol{k}}^{\dagger} \hat{a}_{\boldsymbol{k}}=\sum_{\boldsymbol{k}} \frac{\hbar^{2} \boldsymbol{k}^{2}}{2 m} \hat{n}_{\boldsymbol{k}}
\end{align*}
$$
which, may also be expressed in field operator language as
$$
\begin{align*}
\begin{aligned}
\mathcal{H}_{k i n} & =\frac{1}{2 m V} \sum_{\boldsymbol{k}} \int d^{3} r d^{3} r^{\prime}\left(\hbar \boldsymbol{\nabla} e^{i \boldsymbol{k} \cdot \boldsymbol{r}}\right)\left(\hbar \boldsymbol{\nabla}^{\prime} e^{-i \boldsymbol{k} \cdot \boldsymbol{r}^{\prime}}\right) \widehat{\Psi}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}\left(\boldsymbol{r}^{\prime}\right) \\
& =\frac{\hbar^{2}}{2 m} \int d^{3} r\left(\boldsymbol{\nabla} \widehat{\Psi}^{\dagger}(\boldsymbol{r})\right) \cdot(\boldsymbol{\nabla} \widehat{\Psi}(\boldsymbol{r}))
\end{aligned}
\end{align*}
$$

Note the formal similarity with the expectation value of the kinetic energy using single-particle wave functions, $\frac{\hbar^{2}}{2 m} \int d^{3} r \boldsymbol{\nabla} \varphi^{*}(\boldsymbol{r}) \cdot \nabla \varphi(\boldsymbol{r})$. In an analogous way we represent the potential energy,
$$
\begin{align*}
\widehat{H}_{p o t}=\int d^{3} r U(\boldsymbol{r}) \widehat{\Psi}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}(\boldsymbol{r})=\int d^{3} r U(\boldsymbol{r}) \widehat{\rho}(\boldsymbol{r}) .
\end{align*}
$$

Beside the particle density operator $\hat{\rho}(\boldsymbol{r})$ also the current density operators can be expressed by field operators,
$$
\begin{align*}
\widehat{\boldsymbol{J}}(\boldsymbol{r})=\frac{\hbar}{2 m i}\left(\widehat{\Psi}^{\dagger}(\boldsymbol{r})(\boldsymbol{\nabla} \widehat{\Psi}(\boldsymbol{r}))-\left(\boldsymbol{\nabla} \widehat{\Psi}^{\dagger}(\boldsymbol{r})\right) \widehat{\Psi}(\boldsymbol{r})\right)
\end{align*}
$$
and the spin density operator for spin- $1 / 2$ Fermions (writing spin indices again),
$$
\begin{align*}
\widehat{\boldsymbol{S}}(\boldsymbol{r})=\frac{\hbar}{2} \sum_{s s^{\prime}} \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \boldsymbol{\sigma}_{s s^{\prime}} \widehat{\Psi}_{s^{\prime}}(\boldsymbol{r})
\end{align*}
$$
where $\boldsymbol{\sigma}_{s s^{\prime}}$ are the Pauli matrices. In momentum space the operators read,
$$
\begin{align*}
\begin{aligned}
\hat{\rho}_{\boldsymbol{q}} & =\int d^{3} r e^{-i \boldsymbol{q} \cdot \boldsymbol{r}} \widehat{\rho}(\boldsymbol{r})=\sum_{\boldsymbol{k}, s} \hat{a}_{\boldsymbol{k}, s}^{\dagger} \hat{a}_{\boldsymbol{k}+\boldsymbol{q}, s} \\
\widehat{\boldsymbol{S}}_{\boldsymbol{q}} & =\frac{\hbar}{2} \sum_{\boldsymbol{k}, s, s^{\prime}} \hat{a}_{\boldsymbol{k}, s}^{\dagger} \boldsymbol{\sigma}_{s s^{\prime}} \hat{a}_{\boldsymbol{k}+\boldsymbol{q}, s^{\prime}} \\
\widehat{\boldsymbol{J}}_{\boldsymbol{q}} & =\frac{\hbar}{m} \sum_{\boldsymbol{k}, s}\left(\boldsymbol{k}+\frac{\boldsymbol{q}}{2}\right) \hat{a}_{\boldsymbol{k}, s}^{\dagger} \hat{a}_{\boldsymbol{k}+\boldsymbol{q}, s}
\end{aligned}
\end{align*}
$$

Finally we turn to the genuine many-body feature of particle-particle interaction,
$$
\begin{align*}
\widehat{H}_{\text {int }}=\frac{1}{2} \sum_{s, s^{\prime}} \int d^{3} r d^{3} r^{\prime} \widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{s^{\prime}}^{\dagger}\left(\boldsymbol{r}^{\prime}\right) V\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right) \widehat{\Psi}_{s^{\prime}}\left(\boldsymbol{r}^{\prime}\right) \widehat{\Psi}_{s}(\boldsymbol{r})=\frac{1}{2 V} \sum_{\boldsymbol{k}, \boldsymbol{k} \boldsymbol{k}^{\prime} \boldsymbol{q}, s^{\prime}} \sum_{\boldsymbol{q}} \hat{a}_{\boldsymbol{k}+\boldsymbol{q}, s}^{\dagger} \hat{a}_{\boldsymbol{k}^{\prime}-\boldsymbol{q}, s^{\prime}}^{\dagger} \hat{\boldsymbol{a}}_{\boldsymbol{k}^{\prime}, s^{\prime}} \hat{\boldsymbol{a}}_{\boldsymbol{k}, s},
\end{align*}
$$
where the factor $1 / 2$ corrects for double counting and
$$
\begin{align*}
V(\boldsymbol{r})=\frac{1}{V} \sum_{\boldsymbol{q}} V_{\boldsymbol{q}} e^{i \boldsymbol{q} \cdot \boldsymbol{r}}
\end{align*}
$$

Note that the momentum space representation has the simple straightforward interpretation that two particles with momentum $\hbar \boldsymbol{k}$ and $\hbar \boldsymbol{k}^{\prime}$ are scattered into states with momentum $\hbar(\boldsymbol{k}+\boldsymbol{q})$ and $\hbar\left(\boldsymbol{k}^{\prime}-\boldsymbol{q}\right)$, respectively, by transferring the momentum $\hbar \boldsymbol{q}$.

---
## 9.5 Equation of Motion
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=191&selection=594,0,596,18|•]]

For simplicity we discuss here a system of independent free quantum particles described by the Hamiltonian
$$
\begin{align*}
\mathcal{H}=\sum_{\boldsymbol{k}} \epsilon_{\boldsymbol{k}} \hat{a}_{\boldsymbol{k}}^{\dagger} \hat{a}_{\boldsymbol{k}}
\end{align*}
$$
where we suppress the spin index. We turn now to the Heisenberg representation of time dependent operators,
$$
\begin{align*}
\hat{a}_{\boldsymbol{k}}(t)=e^{i \mathcal{H} t / \hbar} \hat{a}_{\boldsymbol{k}} e^{-i \mathcal{H} t / \hbar} .
\end{align*}
$$

Thus, we formulate the equation of motion for this operator,
$$
\begin{align*}
\begin{aligned}
i \hbar \frac{d}{d t} \hat{a}_{\boldsymbol{k}} & =-\left[\mathcal{H}, \hat{a}_{\boldsymbol{k}}\right]=-\sum_{\boldsymbol{k}^{\prime}} \epsilon_{\boldsymbol{k}^{\prime}}\left[\hat{a}_{\boldsymbol{k}^{\prime}}^{\dagger} \hat{a}_{\boldsymbol{k}^{\prime}}, \hat{a}_{\boldsymbol{k}}\right] \\
& =-\sum_{\boldsymbol{k}^{\prime}} \epsilon_{\boldsymbol{k}^{\prime}}\left\{\begin{array}{l}
\hat{a}_{\boldsymbol{k}^{\prime}}^{\dagger} \underbrace{\left[\hat{a}_{\boldsymbol{k}^{\prime}}, \hat{a}_{\boldsymbol{k}}\right]}_{=0}+\underbrace{\left[\hat{a}_{\boldsymbol{k}^{\prime}}^{\dagger}, \hat{a}_{\boldsymbol{k}}\right]}_{=-\delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}} \hat{a}_{\boldsymbol{k}^{\prime}} \quad \text { for Bosons } \\
\hat{a}_{\boldsymbol{k}^{\prime}}^{\dagger} \underbrace{\left\{\hat{a}_{\boldsymbol{k}^{\prime}}, \hat{a}_{\boldsymbol{k}}\right\}}_{=0}-\underbrace{\left\{\hat{a}_{\boldsymbol{k}^{\prime}}^{\dagger}, \hat{a}_{\boldsymbol{k}}\right\}}_{=\delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}} \hat{a}_{\boldsymbol{k}^{\prime}} \text { for Fermions } \\
\end{array}\right. \\
& =\sum_{\boldsymbol{k}^{\prime}} \epsilon_{\boldsymbol{k}^{\prime}} \hat{a}_{\boldsymbol{k}^{\prime}} \delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}=\epsilon_{\boldsymbol{k}} \hat{a}_{\boldsymbol{k}},
\end{aligned}
\end{align*}
$$
and analogously
$$
\begin{align*}
i \hbar \frac{d}{d t} \hat{a}_{\boldsymbol{k}}^{\dagger}=-\left[\mathcal{H}, \hat{a}_{\boldsymbol{k}}^{\dagger}\right]=-\epsilon_{\boldsymbol{k}} \hat{a}_{\boldsymbol{k}}^{\dagger}
\end{align*}
$$

A further important relation in the context of statistical physics is
$$
\begin{align*}
e^{-\beta \mathcal{H}} \hat{a}_{\boldsymbol{k}}^{\dagger} e^{\beta \mathcal{H}}=e^{-\beta \epsilon_{\boldsymbol{k}}} \hat{a}_{\boldsymbol{k}}^{\dagger}
\end{align*}
$$

Analogously we find for the number operator $\widehat{N}=\sum_{\boldsymbol{k}} \hat{a}_{\boldsymbol{k}}^{\dagger} \hat{a}_{\boldsymbol{k}}$,
$$
\begin{align*}
e^{\beta \mu \widehat{N}} \hat{a}_{\boldsymbol{k}}^{\dagger} e^{-\beta \mu \widehat{N}}=e^{\beta \mu} \hat{a}_{\boldsymbol{k}}^{\dagger}
\end{align*}
$$

Both relations are easily proven by examining the action of this operator on a eigenstate of the Hamiltonian $|\Phi\rangle=\left|n_{\boldsymbol{k}_{1}}, \ldots, n_{\boldsymbol{k}}, \ldots\right\rangle$,
$$
\begin{align*}
\begin{aligned}
e^{-\beta \mathcal{H}} \hat{a}_{\boldsymbol{k}}^{\dagger} e^{\beta \mathcal{H}}|\Phi\rangle & =e^{\beta E} e^{-\beta \mathcal{H}} \hat{a}_{\boldsymbol{k}}^{\dagger}|\Phi\rangle=\sqrt{n_{\boldsymbol{k}}+1} e^{\beta E} e^{-\beta \mathcal{H}}\left|n_{\boldsymbol{k}_{1}}, \ldots, n_{\boldsymbol{k}}+1, \ldots\right\rangle \\
& =\sqrt{n_{\boldsymbol{k}}+1} e^{\beta\left(E-E^{\prime}\right)}\left|n_{\boldsymbol{k}_{1}}, \ldots, n_{\boldsymbol{k}}+1, \ldots\right\rangle=e^{\beta\left(E-E^{\prime}\right)} \hat{a}_{\boldsymbol{k}}^{\dagger}|\Phi\rangle
\end{aligned}
\end{align*}
$$
where $E=\sum_{\boldsymbol{k}^{\prime}} \epsilon_{\boldsymbol{k}^{\prime}} n_{\boldsymbol{k}^{\prime}}$ and $E^{\prime}=\sum_{\boldsymbol{k}^{\prime}} \epsilon_{\boldsymbol{k}^{\prime}} n_{\boldsymbol{k}^{\prime}}+\epsilon_{\boldsymbol{k}}$ such that $E-E^{\prime}=-\epsilon_{\boldsymbol{k}}$. Note that for Fermions the operation of $\hat{a}_{\boldsymbol{k}}^{\dagger}$ on $|\Phi\rangle$ is only finite, if $n_{\boldsymbol{k}}=0$ otherwise we have a zero. Still the relation remains true for both types of quantum particles. 

**Fermi-Dirac and Bose-Einstein distribution**: Let us look at the thermal average,
$$
\begin{align*}
\left\langle\hat{n}_{\boldsymbol{k}}\right\rangle=\left\langle\hat{a}_{\boldsymbol{k}}^{\dagger} \hat{a}_{\boldsymbol{k}}\right\rangle=\frac{\operatorname{tr}\left\{e^{-\beta \mathcal{H}^{\prime}} \hat{a}_{\boldsymbol{k}}^{\dagger} \hat{a}_{\boldsymbol{k}}\right\}}{\operatorname{tre} e^{-\beta \mathcal{H}^{\prime}}},
\end{align*}
$$
where we use the Hamiltonian $\mathcal{H}^{\prime}=\mathcal{H}-\mu \widehat{N}$. We can rearrange the numerator of (9.67) using Eqs.(9.64) and (9.65),
$$
\begin{align*}
\begin{aligned}
\operatorname{tr}\left\{e^{-\beta \mathcal{H}^{\prime}} \hat{a}_{\boldsymbol{k}}^{\dagger} \hat{a}_{\boldsymbol{k}}\right\} & =\operatorname{tr}\left\{e^{-\beta \mathcal{H}^{\prime}} \hat{a}_{\boldsymbol{k}}^{\dagger} e^{\beta \mathcal{H}^{\prime}} e^{-\beta \mathcal{H}^{\prime}} \hat{a}_{\boldsymbol{k}}\right\}=e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)} \operatorname{tr}\left\{\hat{a}_{\boldsymbol{k}}^{\dagger} e^{-\beta \mathcal{H}^{\prime}} \hat{a}_{\boldsymbol{k}}\right\} \\
& =e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)} \operatorname{tr}\left\{e^{-\beta \mathcal{H}^{\prime}} \hat{a}_{\boldsymbol{k}} \hat{a}_{\boldsymbol{k}}^{\dagger}\right\}=e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)} \operatorname{tr}\left\{e^{-\beta \mathcal{H}^{\prime}}\left[1 \pm \hat{a}_{\boldsymbol{k}}^{\dagger} \hat{a}_{\boldsymbol{k}}\right]\right\}
\end{aligned}
\end{align*}
$$
where ' + ' and ' - ' stand for Bosons and Fermions, respectively. Inserting this, we find,
$$
\begin{align*}
\left\langle\hat{n}_{\boldsymbol{k}}\right\rangle=e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}\left(1 \pm\left\langle\hat{n}_{\boldsymbol{k}}\right\rangle\right) \quad \Rightarrow \quad\left\langle\hat{n}_{\boldsymbol{k}}\right\rangle= \begin{cases}\frac{1}{e^{\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}-1} & \text { Bosons } \\ \frac{1}{e^{\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}+1} & \text { Fermions }\end{cases}
\end{align*}
$$
which corresponds to the standard Bose-Einstein and Fermi-Dirac distribution.

---
## 9.6 Correlation Functions
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=193&selection=84,0,86,21|•]]

Independent classical particles do not have any correlation among each other. This is different for quantum particles. The second quantisation language is very suitable for the formulation of correlation functions and to show that Fermion and bose gases behave rather differently.

### 9.6.1 Fermions

First let us write the ground state of a free Fermi gas of spin- $1 / 2$ Fermions. Starting from the vacuum $|0\rangle$ we fill successively all low lying states with a Fermion of both spins $s$ until all Fermions are placed. This defines the Fermi sphere in $k$-space with the radius $k_{F}$, the Fermi wave vector. The ground state is then,
$$
\begin{align*}
\left|\Phi_{0}\right\rangle=\prod_{\boldsymbol{k}}^{|\boldsymbol{k}| \leq k_{F}} \prod_{s=\uparrow, \downarrow} \hat{a}_{\boldsymbol{k} s}^{\dagger}|0\rangle
\end{align*}
$$
and $n_{\boldsymbol{k}}=\left\langle\Phi_{0}\right| \hat{n}_{\boldsymbol{k}}\left|\Phi_{0}\right\rangle=\Theta\left(k_{F}-|\boldsymbol{k}|\right)$ is a step function with $\hat{n}_{\boldsymbol{k}}=\sum_{s} \hat{a}_{\boldsymbol{k} s}^{\dagger} \hat{a}_{\boldsymbol{k} s}$.
First we formulate the one-particle correlation function in real space using field operators, 
$$
\begin{align*}
\frac{n}{2} g_{s}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)=\left\langle\widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{s}\left(\boldsymbol{r}^{\prime}\right)\right\rangle
\end{align*}
$$
which measure the probability amplitude to be able to insert a Fermion at place $\boldsymbol{r}$ after having removed one at $\boldsymbol{r}^{\prime}$ with the same spin $s$. We evaluate this expression by going to $k$-space,
$$
\begin{align*}
\frac{n}{2} g_{s}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)=\frac{1}{V} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}} e^{-i \boldsymbol{k} \cdot \boldsymbol{r}+i \boldsymbol{k}^{\prime} \cdot \boldsymbol{r}^{\prime}} \underbrace{\left\langle\widehat{a}_{\boldsymbol{k} s}^{\dagger} \widehat{a}_{\boldsymbol{k}^{\prime} s}\right\rangle}_{=\left\langle\hat{n}_{\boldsymbol{k} s}\right\rangle \delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}} .
\end{align*}
$$

At $T=0$ we obtain
$$
\begin{align*}
\begin{aligned}
\frac{n}{2} g_{s}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right) & =\int_{|\boldsymbol{k}| \leq k_{F}} \frac{d^{3} k}{(2 \pi)^{3}} e^{-i \boldsymbol{k} \cdot\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)}=\frac{1}{(2 \pi)^{2}} \int_{0}^{k_{F}} d k k^{2} \int_{-1}^{+1} d \cos \theta e^{i k\left|\boldsymbol{r}-\boldsymbol{r}^{\prime}\right| \cos \theta} \\
& =\frac{1}{2 \pi^{2}\left|\boldsymbol{r}-\boldsymbol{r}^{\prime}\right|} \int_{0}^{k_{F}} d k k \sin \left(k\left|\boldsymbol{r}-\boldsymbol{r}^{\prime}\right|\right)=\left.\frac{3 n}{2} \frac{\sin x-x \cos x}{x^{3}}\right|_{x=k_{F}\left|\boldsymbol{r}-\boldsymbol{r}^{\prime}\right|}
\end{aligned}
\end{align*}
$$

Note the limits: $g_{s}(\boldsymbol{r} \rightarrow 0)=1$ and $g_{s}(\boldsymbol{r} \rightarrow \infty)=0$ where $g_{s}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)$ corresponds to the overlap of the two states
$$
\begin{align*}
\sqrt{\frac{2}{n}} \widehat{\Psi}_{s}(\boldsymbol{r})\left|\Phi_{0}\right\rangle \quad \text { and } \quad \sqrt{\frac{2}{n}} \widehat{\Psi}_{s}\left(\boldsymbol{r}^{\prime}\right)\left|\Phi_{0}\right\rangle
\end{align*}
$$
Analogous results can be calculated for finite temperatures (here $T \gg T_{F}$ ), where for the "classical" limit an analytical result can be found based on the Maxwell-Boltzmann distribution:
$$
\begin{align*}
\left\langle\hat{n}_{\boldsymbol{k} s}\right\rangle=\frac{n}{2} \frac{(2 \pi)^{3}}{(\sqrt{\pi} A)^{3}} e^{-k^{2} / A^{2}} \quad \text { with } \quad A^{2}=\frac{2 m k_{B} T}{\hbar^{2}}=\frac{4 \pi}{\lambda^{2}}
\end{align*}
$$
leading to
$$
\begin{align*}
\frac{n}{2} g_{s}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)=\frac{n}{2 \pi^{3 / 2} A^{3}} \int d^{3} k e^{-i \boldsymbol{k} \cdot\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)} e^{-k^{2} / A^{2}}=\frac{n}{2} e^{-A^{2}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)^{2} / 4}=\frac{n}{2} e^{-\pi\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)^{2} / \lambda^{2}}
\end{align*}
$$

Next we turn to the pair correlation function which we define as
$$
\begin{align*}
\left(\frac{n}{2}\right)^{2} g_{s s^{\prime}}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)=\left\langle\widehat{\Psi}_{s}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}_{s^{\prime}}^{\dagger}\left(\boldsymbol{r}^{\prime}\right) \widehat{\Psi}_{s^{\prime}}\left(\boldsymbol{r}^{\prime}\right) \widehat{\Psi}_{s}(\boldsymbol{r})\right\rangle
\end{align*}
$$
being the probability to be able to pick two Fermions at the different places, $\boldsymbol{r}$ and $\boldsymbol{r}^{\prime}$, with the spins $s$ and $s^{\prime}$, respectively. Again we switch to the more convenient $k$-space,
$$
\begin{align*}
\left(\frac{n}{2}\right)^{2} g_{s s^{\prime}}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)=\frac{1}{V^{2}} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}, \boldsymbol{q}, \boldsymbol{q}^{\prime}} e^{-i\left(\boldsymbol{k}-\boldsymbol{k}^{\prime}\right) \cdot \boldsymbol{r}} e^{-i\left(\boldsymbol{q}-\boldsymbol{q}^{\prime}\right) \cdot \boldsymbol{r}^{\prime}}\left\langle\widehat{a}_{\boldsymbol{k} s}^{\dagger} \widehat{a}_{\boldsymbol{q} s^{\prime}}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime} s^{\prime}} \widehat{a}_{\boldsymbol{k}^{\prime} s}\right\rangle
\end{align*}
$$

In order to evaluate the mean value $\left\langle\widehat{a}_{\boldsymbol{k} s}^{\dagger} \widehat{a}_{\boldsymbol{q} s^{\prime}}^{\dagger} \widehat{\boldsymbol{q}}_{\boldsymbol{q}^{\prime} s^{\prime}} \widehat{a}_{\boldsymbol{k}^{\prime} s}\right\rangle$ we use the same technique as presented as earlier. Evaluation of $\left\langle\widehat{a}_{\boldsymbol{k s}}^{\dagger} \widehat{\boldsymbol{q}}_{s^{\prime}}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime} s^{\prime}} \widehat{\boldsymbol{k}}_{\boldsymbol{k}^{\prime} s}\right\rangle$: We separate the task into two cases:
1. $s=s\prime$ 

	$$
	\begin{align*}
	\begin{aligned}
	\left\langle\widehat{a}_{\boldsymbol{k} s}^{\dagger} \widehat{a}_{\boldsymbol{q} s}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime} s} \widehat{a}_{\boldsymbol{k}^{\prime} s}\right\rangle 
	&= \frac{1}{Z} \operatorname{tr}\left[e^{-\beta \mathcal{H}^{\prime}} \widehat{a}_{\boldsymbol{k} s}^{\dagger} \widehat{\boldsymbol{q}}_{\boldsymbol{q} s}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime} s} \widehat{a}_{\boldsymbol{k}^{\prime} s}\right] \\
	&= \frac{1}{Z} \operatorname{tr}\left[e^{-\beta \mathcal{H}^{\prime}} \widehat{a}_{\boldsymbol{k} s}^{\dagger} e^{\beta \mathcal{H}^{\prime}} e^{-\beta \mathcal{H}^{\prime}} \widehat{a}_{\boldsymbol{q} s}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime} s} \widehat{a}_{\boldsymbol{k}^{\prime} s}\right] \\
	&= \frac{e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}}{Z} \operatorname{tr}\left[e^{-\beta \mathcal{H}^{\prime}} \widehat{a}_{\boldsymbol{q} s}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime} s} \widehat{a}_{\boldsymbol{k}^{\prime} s} \widehat{a}_{\boldsymbol{k} s}^{\dagger}\right] \\
	&= \frac{e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}}{Z} \operatorname{tr}\left[e^{-\beta \mathcal{H}^{\prime}} \widehat{a}_{\boldsymbol{q} s}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime} s}\left(\delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}-\widehat{a}_{\boldsymbol{k} s}^{\dagger} \widehat{a}_{\boldsymbol{k}^{\prime} s}\right)\right] \\
	&= \frac{e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}}{Z} \operatorname{tr}\left[e^{-\beta \mathcal{H}^{\prime}} \widehat{a}_{\boldsymbol{q} s}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime} s}\right] \delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}} \\
	&\quad - \frac{e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}}{Z} \operatorname{tr}\left[e^{-\beta \mathcal{H}^{\prime}} \widehat{a}_{\boldsymbol{q} s}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime} s} \widehat{a}_{\boldsymbol{k} s}^{\dagger} \widehat{a}_{\boldsymbol{k}^{\prime} s}\right] \\
	&= e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}\left\langle\widehat{n}_{\boldsymbol{q}, s}\right\rangle \delta_{\boldsymbol{q}, \boldsymbol{q}^{\prime}} \delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}} \\
	&\quad - \frac{e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}}{Z} \operatorname{tr}\left[e^{-\beta \mathcal{H}^{\prime}} \widehat{a}_{\boldsymbol{q} s}^{\dagger}\left(\delta_{\boldsymbol{q}^{\prime}, \boldsymbol{k}}-\widehat{a}_{\boldsymbol{k} s}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime} s}\right) \widehat{a}_{\boldsymbol{k}^{\prime} s}\right] \\
	&= e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}\left\langle\widehat{n}_{\boldsymbol{q}, s}\right\rangle\left(\delta_{\boldsymbol{q}, \boldsymbol{q}^{\prime}} \delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}-\delta_{\boldsymbol{q}^{\prime}, \boldsymbol{k}} \delta_{\boldsymbol{q}, \boldsymbol{k}^{\prime}}\right) \\
	&\quad + e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}\left\langle\widehat{a}_{\boldsymbol{k} s}^{\dagger} \widehat{a}_{\boldsymbol{q} s}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime} s} \widehat{a}_{\boldsymbol{k}^{\prime} s}\right\rangle.
	\end{aligned}
	\end{align*}
	$$
	From this we find
	$$
	\begin{align*}
	\left\langle\widehat{a}_{\boldsymbol{k} s}^{\dagger} \widehat{a}_{\boldsymbol{q} s}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime} s} \widehat{a}_{\boldsymbol{k}^{\prime} s}\right\rangle=\frac{1}{e^{\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}+1}\left\langle\widehat{n}_{\boldsymbol{q}, s}\right\rangle\left(\delta_{\boldsymbol{q}, \boldsymbol{q}^{\prime}} \delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}-\delta_{\boldsymbol{q}^{\prime}, \boldsymbol{k}} \delta_{\boldsymbol{q}, \boldsymbol{k}^{\prime}}\right)=\left\langle\widehat{n}_{\boldsymbol{k}, s}\right\rangle\left\langle\widehat{n}_{\boldsymbol{q}, s}\right\rangle\left(\delta_{\boldsymbol{q}, \boldsymbol{q}^{\prime}} \delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}-\delta_{\boldsymbol{q}^{\prime}, \boldsymbol{k}} \delta_{\boldsymbol{q}, \boldsymbol{k}^{\prime}}\right) .
	\end{align*}
	$$
2.  $s \neq s^{\prime}$ :
	$$
	\begin{align*}
	\left\langle\widehat{a}_{\boldsymbol{k} s}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime}}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime} s^{\prime}} \widehat{a}_{\boldsymbol{k}^{\prime} s}\right\rangle=e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}\left\{\left\langle\widehat{n}_{\boldsymbol{q}, s}\right\rangle \delta_{\boldsymbol{q}, \boldsymbol{q}^{\prime}} \delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}+\left\langle\widehat{a}_{\boldsymbol{k} s}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime}}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime} s^{\prime}} \widehat{a}_{\boldsymbol{k}^{\prime} s}\right\rangle\right\}
	\end{align*}
	$$
	analogous to case (1), such that
	$$
	\begin{align*}
	\left\langle\widehat{a}_{\boldsymbol{k} s}^{\dagger} \widehat{a}_{\boldsymbol{q} s^{\prime}}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime} s^{\prime}} \widehat{a}_{\boldsymbol{k}^{\prime} s}\right\rangle=\left\langle\widehat{n}_{\boldsymbol{k}, s}\right\rangle\left\langle\widehat{n}_{\boldsymbol{q}, s}\right\rangle \delta_{\boldsymbol{q}, \boldsymbol{q}^{\prime}} \delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}.
	\end{align*}
	$$

From this it follows straightforwardly for $s=s^{\prime}$,
$$
\begin{align*}
\left(\frac{n}{2}\right)^{2} g_{s s}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)=\frac{1}{V^{2}} \sum_{\boldsymbol{k}, \boldsymbol{q}}\left(1-e^{-i(\boldsymbol{k}-\boldsymbol{q}) \cdot\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)}\right)\left\langle\widehat{n}_{\boldsymbol{k} s}\right\rangle\left\langle\widehat{n}_{\boldsymbol{q} s}\right\rangle=\left(\frac{n}{2}\right)^{2}\left[1-g_{s}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)^{2}\right]
\end{align*}
$$
and we can write,
$$
\begin{align*}
g_{s s}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)= \begin{cases}1-\left.\frac{9(\sin x-x \cos x)^{2}}{x^{6}}\right|_{x=k_{F}\left|\boldsymbol{r}-\boldsymbol{r}^{\prime}\right|} & T=0 \\ 1-e^{-2 \pi\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)^{2} / \lambda^{2}} & T \gg T_{F}.\end{cases}
\end{align*}
$$

![Attachments/Notes/Solid-State Theory/IMG-0126164749795.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164749795.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=195&rect=90,606,503,754|•]]

The case of $s \neq s^{\prime}$ leads to $g_{s s^{\prime}}(\boldsymbol{r})=1$, i.e. there is no correlation between $s=1 / 2$-Fermions of opposite spin. The probability to find another Fermion around the position of a Fermion at $\boldsymbol{r}$ corresponds to
$$
\begin{align*}
g(\boldsymbol{r})=\frac{1}{2}\left[g_{\uparrow \uparrow}(\boldsymbol{r})+g_{\uparrow \downarrow}(\boldsymbol{r})\right] .
\end{align*}
$$

The density depletion around such a Fermion is then,
$$
\begin{align*}
\begin{aligned}
n \int d^{3} r(g(\boldsymbol{r})-1) & =-\frac{n}{2} \int d^{3} r\left\{g_{s}(\boldsymbol{r})\right\}^{2}=-\frac{2}{n} \int d^{3} r \frac{1}{V^{2}} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}\left\langle\widehat{n}_{\boldsymbol{k} s}\right\rangle\left\langle\widehat{n}_{\boldsymbol{k}^{\prime} s}\right\rangle e^{i\left(\boldsymbol{k}-\boldsymbol{k}^{\prime}\right) \cdot \boldsymbol{r}} \\
& =-\frac{2}{n V} \sum_{\boldsymbol{k}}\left\langle\widehat{n}_{\boldsymbol{k} s}\right\rangle^{2}= \begin{cases}-1 & T=0, \\
-\frac{\lambda^{3} n}{2^{5 / 2}} & T \gg T_{F} .\end{cases}
\end{aligned}
\end{align*}
$$
which means that the exchange hole expels one Fermion such that each Fermion "defends" a given volume against other Fermions of the same spin for $T=0$, while the exchange hole shrinks like $\lambda n^{3}$ for $T \gg T_{F}$.

### 9.6.2 Bosons

Analogous to the Fermions we consider first the single-particle correlation function for $s=0$ Bosons,
$$
\begin{align*}
g_{1}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)=\left\langle\widehat{\Psi}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}\left(\boldsymbol{r}^{\prime}\right)\right\rangle=\frac{1}{V} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}} e^{-i \boldsymbol{k} \cdot \boldsymbol{r}+i \boldsymbol{k}^{\prime} \cdot \boldsymbol{r}^{\prime}}\left\langle\widehat{a}_{\boldsymbol{k}}^{\dagger} \widehat{a}_{\boldsymbol{k}^{\prime}}\right\rangle=\frac{1}{V} \sum_{\boldsymbol{k}}\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle e^{-i \boldsymbol{k} \cdot\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)},
\end{align*}
$$
which in the limit $\boldsymbol{r}^{\prime} \rightarrow \boldsymbol{r}$ approaches the constant density $n$ and vanishes at very large distances. For $T=0$ we consider the groundstate, the Bose-Einstein condenstate, $\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle=N \delta_{\boldsymbol{k}, 0}$ and for $T \gg T_{c}$ we use the classical distribution where $T_{c}$ is the critical temperature for Bose-Einstein condensation.
$$
\begin{align*}
g_{1}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)= \begin{cases}n & T=0, \\ n e^{-\pi\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right) / \lambda^{2}} & T \gg T_{c} .\end{cases}
\end{align*}
$$

The pair correlation functions reads,
$$
\begin{align*}
\begin{aligned}
g_{2}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right) & =\left\langle\widehat{\Psi}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}^{\dagger}\left(\boldsymbol{r}^{\prime}\right) \widehat{\Psi}\left(\boldsymbol{r}^{\prime}\right) \widehat{\Psi}(\boldsymbol{r})\right\rangle \\
& =\frac{1}{V^{2}} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}, \boldsymbol{q}, \boldsymbol{q}^{\prime}} e^{-i\left(\boldsymbol{k}-\boldsymbol{k}^{\prime}\right) \cdot \boldsymbol{r}-i\left(\boldsymbol{q}-\boldsymbol{q}^{\prime}\right) \cdot \boldsymbol{r}^{\prime}}\left\langle\widehat{a}_{\boldsymbol{k}}^{\dagger} \widehat{a}_{\boldsymbol{q}}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime}} \widehat{a}_{\boldsymbol{k}^{\prime}}\right\rangle
\end{aligned}
\end{align*}
$$

Analogous to the Fermions we evaluate ${ }^{4}$
$$
\begin{align*}
\left\langle\widehat{a}_{\boldsymbol{k}}^{\dagger} \widehat{a}_{\boldsymbol{q}}^{\dagger} \widehat{a}_{\boldsymbol{q}^{\prime}} \widehat{a}_{\boldsymbol{k}^{\prime}}\right\rangle=\left(1-\delta_{\boldsymbol{k} \boldsymbol{q}}\right)\left\{\delta_{\boldsymbol{k} \boldsymbol{k}^{\prime}} \delta_{\boldsymbol{q} \boldsymbol{q}^{\prime}}+\delta_{\boldsymbol{k} \boldsymbol{q}^{\prime}} \delta_{\boldsymbol{q} \boldsymbol{k}^{\prime}}\right\}\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle\left\langle\widehat{n}_{\boldsymbol{q}}\right\rangle+\delta_{\boldsymbol{k} \boldsymbol{q}} \delta_{\boldsymbol{k} \boldsymbol{k}^{\prime}} \delta_{\boldsymbol{q} \boldsymbol{q}^{\prime}}\left(\left\langle\widehat{n}_{\boldsymbol{k}}^{2}\right\rangle-\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle\right)
\end{align*}
$$

This leads to
$$
\begin{align*}
\begin{aligned}
g_{2}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right) & =\frac{1}{V^{2}}\left[\sum_{\boldsymbol{k}, \boldsymbol{q}}\left(1-\delta_{\boldsymbol{k} \boldsymbol{q}}\right)\left(1+e^{-i(\boldsymbol{k}-\boldsymbol{q}) \cdot\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)}\right)\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle\left\langle\widehat{n}_{\boldsymbol{q}}\right\rangle+\sum_{\boldsymbol{k}}\left(\left\langle\widehat{n}_{\boldsymbol{k}}^{2}\right\rangle-\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle\right)\right] \\
& \left.=\frac{1}{V^{2}}\left[\sum_{\boldsymbol{k}, \boldsymbol{q}}\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle\left\langle\widehat{n}_{\boldsymbol{q}}\right\rangle+\sum_{\boldsymbol{k}}\left\{\left\langle\widehat{n}_{\boldsymbol{k}}^{2}\right\rangle-\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle^{2}-\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle\left(\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle+1\right)\right\}+\left|\sum_{\boldsymbol{k}} e^{-i \boldsymbol{k} \cdot\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)}\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle\right|^{2}\right]\right] \\
& =n^{2}+g_{1}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)^{2}+\frac{1}{V^{2}} \sum_{\boldsymbol{k}}\left\{\left\langle\widehat{n}_{\boldsymbol{k}}^{2}\right\rangle-\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle^{2}-\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle\left(\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle+1\right)\right\}
\end{aligned}
\end{align*}
$$

For $T=0$ with $\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle=N \delta_{\boldsymbol{k}, 0}\left(\left\langle\widehat{n}_{\boldsymbol{k}}^{2}\right\rangle=N^{2} \delta_{\boldsymbol{k}, 0}\right)$ we obtain
$$
\begin{align*}
g_{2}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)=2 n^{2}-\frac{1}{V^{2}} N(N+1)=\frac{N(N-1)}{V^{2}},
\end{align*}
$$
so no correlation is observed. The probability to pick the first particle is $n=N / V$ and a second one $(N-1) / V(\approx n$ for large $N)$. For the high-temperature limit, $T \gg T_{c}$, the correlation function is given
$$
\begin{align*}
g_{2}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)=n^{2}+g_{1}\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)^{2}=n^{2}\left(1+e^{-2 \pi\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)^{2} / \lambda^{2}}\right) .
\end{align*}
$$

The probability of finding two Bosons at the same position is twice as large as for long distances:

![Attachments/Notes/Solid-State Theory/IMG-0126164750100.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164750100.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=197&rect=178,579,403,749|•]]

Thus, in contrast to Fermions, Bosons like to cluster together.
The radius of bunching of the Bosons in the limit $T \gg T_{c}$ is of order $\lambda$ and shrinks with increasing $T$ (classical limit).

---
## 9.7 Selected Applications
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=196&selection=699,0,701,21|•]]

We consider here three examples applying second quantisation to statistical physics systems.

### 9.7.1 Spin Susceptibility

We calculate the spin susceptibility of spin- $1 / 2$ Fermions using the fluctuation-dissipation relation.
$$
\begin{align*}
\chi=\frac{1}{V k_{B} T}\left\{\left\langle\hat{M}_{z}^{2}\right\rangle-\left\langle\hat{M}_{z}\right\rangle^{2}\right\}
\end{align*}
$$
where
$$
\begin{align*}
\hat{M}_{z}=\frac{g \mu_{B}}{\hbar} \int d^{3} r \widehat{S}_{z}(\boldsymbol{r})=\mu_{B} \sum_{\boldsymbol{k}} \sum_{s s^{\prime}} \hat{a}_{\boldsymbol{k} s}^{\dagger} \sigma_{s s^{\prime}}^{z} \hat{\boldsymbol{a}}_{\boldsymbol{k} s^{\prime}}=\mu_{B} \sum_{\boldsymbol{k}, \boldsymbol{s}} s \hat{a}_{\boldsymbol{k} s}^{\dagger} \hat{a}_{\boldsymbol{k} s}
\end{align*}
$$
using Sect.9.4. Moreover, $g=2$ and $s= \pm 1$. First we calculate the magnetisation in zero magnetic field,
$$
\begin{align*}
\left\langle\hat{M}_{z}\right\rangle=\mu_{B} \sum_{\boldsymbol{k}, \boldsymbol{s}} s\left\langle\hat{a}_{\boldsymbol{k} s}^{\dagger} \hat{a}_{\boldsymbol{k} s}\right\rangle=\mu_{B} \sum_{\boldsymbol{k}, s} s n_{\boldsymbol{k}}=0 .
\end{align*}
$$

Now we turn to
$$
\begin{align*}
\left\langle\hat{M}_{z}^{2}\right\rangle=\mu_{B}^{2} \sum_{\boldsymbol{k}, s} \sum_{\boldsymbol{k}^{\prime}, s^{\prime}} s s^{\prime}\left\langle\hat{a}_{\boldsymbol{k} s}^{\dagger} \hat{a}_{\boldsymbol{k} s} \hat{a}_{\boldsymbol{k}^{\prime} s^{\prime}}^{\dagger} \hat{\boldsymbol{k}}^{\prime} s^{\prime}\right\rangle,
\end{align*}
$$
which we determine like in Sect.9.6.1,
$$
\begin{align*}
\begin{aligned}
& \left\langle\hat{a}_{\boldsymbol{k} s}^{\dagger} \hat{a}_{\boldsymbol{k} s} \hat{a}_{\boldsymbol{k}^{\prime} s^{\prime}}^{\dagger} \hat{a}_{\boldsymbol{k}^{\prime} s^{\prime}}\right\rangle=\frac{1}{Z} \operatorname{tr}\left\{e^{-\beta \mathcal{H}^{\prime}} \hat{a}_{\boldsymbol{k} s}^{\dagger} \hat{a}_{\boldsymbol{k} s} \hat{a}_{\boldsymbol{k}^{\prime} s^{\prime}}^{\dagger} \hat{a}_{\boldsymbol{k}^{\prime} s^{\prime}}\right\}=\frac{e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}}{Z} \operatorname{tr}\left\{e^{-\beta \mathcal{H}^{\prime}} \hat{a}_{\boldsymbol{k} s} \hat{a}_{\boldsymbol{k}^{\prime} s^{\prime}}^{\dagger} \hat{a}_{\boldsymbol{k}^{\prime} s^{\prime}} \hat{a}_{\boldsymbol{k} s}^{\dagger}\right\} \\
& =\frac{e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}}{Z}\left[\operatorname{tr}\left\{e^{-\beta \mathcal{H}^{\prime}} \hat{a}_{\boldsymbol{k} \boldsymbol{s}} \hat{a}_{\boldsymbol{k}^{\prime} s^{\prime}}^{\dagger}\right\} \delta_{\boldsymbol{k} \boldsymbol{k}^{\prime}} \delta_{s s^{\prime}}+\operatorname{tr}\left\{e^{-\beta \mathcal{H}^{\prime}} \hat{a}_{\boldsymbol{k} \boldsymbol{s}} \hat{a}_{\boldsymbol{k} s}^{\dagger} \hat{a}_{\boldsymbol{k}^{\prime} \boldsymbol{s}^{\prime}}^{\dagger} \hat{\boldsymbol{k}}_{\boldsymbol{k}^{\prime} \boldsymbol{s}^{\prime}}\right\}\right] \\
& =e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}\left\{\left(1-\left\langle\hat{a}_{\boldsymbol{k} s}^{\dagger} \hat{a}_{\boldsymbol{k} s}\right\rangle\right) \delta_{\boldsymbol{k} \boldsymbol{k}^{\prime}} \delta_{s s^{\prime}}+\left\langle\hat{a}_{\boldsymbol{k}^{\prime} \boldsymbol{s}^{\prime}}^{\dagger} \hat{a}_{\boldsymbol{k}^{\prime} \boldsymbol{s}^{\prime}}\right\rangle\right\}-e^{-\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}\left\langle\hat{a}_{\boldsymbol{k} s}^{\dagger} \hat{a}_{\boldsymbol{k} s} \hat{a}_{\boldsymbol{k}^{\prime} \boldsymbol{s}^{\prime}}^{\dagger} \hat{\boldsymbol{k}}_{\boldsymbol{\boldsymbol { k } ^ { \prime } \boldsymbol { s } ^ { \prime }}}\right\rangle
\end{aligned}
\end{align*}
$$
which leads straightforwardly to
$$
\begin{align*}
\left\langle\hat{a}_{\boldsymbol{k} s}^{\dagger} \hat{\boldsymbol{k}}_{\boldsymbol{k} s} \hat{a}_{\boldsymbol{k}^{\prime} s^{\prime}}^{\dagger} \hat{\boldsymbol{k}}^{\prime} \boldsymbol{s}^{\prime}\right\rangle=\left\langle\hat{a}_{\boldsymbol{k} s}^{\dagger} \hat{a}_{\boldsymbol{k} s}\right\rangle\left(1-\left\langle\hat{a}_{\boldsymbol{k} s}^{\dagger} \hat{a}_{\boldsymbol{k} s}\right\rangle\right) \delta_{\boldsymbol{k} \boldsymbol{k}}, \delta_{s s^{\prime}}+\left\langle\hat{a}_{\boldsymbol{k} s}^{\dagger} \hat{a}_{\boldsymbol{k} s}\right\rangle\left\langle\hat{a}_{\boldsymbol{k}^{\prime} s^{\prime}}^{\dagger} \hat{\boldsymbol{k}}^{\prime} \boldsymbol{s}^{\prime}\right\rangle .
\end{align*}
$$

We now insert this result and obtain
$$
\begin{align*}
\left\langle\hat{M}_{z}^{2}\right\rangle=2 \mu_{B}^{2} \sum_{\boldsymbol{k}}\left\langle\widehat{n}_{\boldsymbol{k} s}\right\rangle\left(1-\left\langle\widehat{n}_{\boldsymbol{k} s}\right\rangle\right)=2 \mu_{B}^{2} \sum_{\boldsymbol{k}} \frac{1}{4 \cosh ^{2}\left(\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right) / 2\right)},
\end{align*}
$$
where the second term cancels due to the spin summation. In the low-temperature limit this is confined to a narrow region $\left(\sim k_{B} T\right)$ around the Fermi energy, such that we approximate
$$
\begin{align*}
\left\langle\hat{M}_{z}^{2}\right\rangle \approx \mu_{B}^{2} V \int_{-\infty}^{+\infty} d \epsilon N\left(\epsilon_{F}\right) \frac{1}{4 \cosh ^{2}(\beta \epsilon / 2)}=V \mu_{B}^{2} k_{B} T N\left(\epsilon_{F}\right),
\end{align*}
$$
where the density of states is defined as
$$
\begin{align*}
N(\epsilon)=\frac{1}{V} \sum_{\boldsymbol{k}, s} \delta\left(\epsilon-\epsilon_{\boldsymbol{k}}\right)
\end{align*}
$$

Then the spin susceptibility is given as the Pauli susceptibility,
$$
\begin{align*}
\chi=\mu_{B}^{2} N\left(\epsilon_{F}\right)=\mu_{B}^{2} \frac{3 n}{2 \epsilon_{F}},
\end{align*}
$$
where the expression with the density of states at $\epsilon_{F}$ is general and the second equality is valid for free Fermions. The Pauli susceptibility is independent of temperature, because only $N\left(\epsilon_{F}\right) k_{B} T$ Fermions can be spin polarised (thermal softening of the Fermi sea). Thus, the factor $\left(k_{B} T\right)^{-1}$ is compensated by the shrinking density of polarisable spins as temperature decreases. 
The classical limit can be discussed using the Maxwell-Boltzmann distribution function,
$$
\begin{align*}
n_{\boldsymbol{k} s}=\frac{n \lambda^{3}}{2} e^{-k^{2} \lambda^{2} / 4 \pi}
\end{align*}
$$
with $\lambda$ as the thermal wavelength. Inserting, we obtain
$\left\langle\hat{M}_{z}^{2}\right\rangle=2 \mu_{B}^{2} V \int \frac{d^{3} k}{(2 \pi)^{3}} n_{\boldsymbol{k} s}\left(1-n_{\boldsymbol{k} s}\right)=2 \mu_{B}^{2} V \int \frac{d^{3} k}{(2 \pi)^{3}}\left\{\frac{n \lambda^{3}}{2} e^{-k^{2} \lambda^{2} / 4 \pi}-\frac{n^{2} \lambda^{6}}{4} e^{-k^{2} \lambda^{2} / 2 \pi}\right\}=\mu_{B}^{2} V n\left(1-\frac{\lambda^{3} n}{2^{5 / 2}}\right),$
which leads to the susceptibility found earlier.
$$
\begin{align*}
\chi=\frac{\mu_{B}^{2} n}{k_{B} T}\left(1-\frac{\lambda^{3} n}{2^{5 / 2}}\right)
\end{align*}
$$

The factor $1-n_{\boldsymbol{k} s}$ introduces the quantum correction in the second term.

### 9.7.2 Bose-Einstein Condensate and Coherent States

Our aim here is to characterise the Bose-Einstein condensate further beyond what we did in the last chapter. Here, we consider the concepts of both the off-diagonal long-range order and the order parameter for the condensate. We start with the discussion of the single-particle correlation function for a homogeneous gas of spin-0 Bosons in more detail than in Sect.9.6.2,
$$
\begin{align*}
g\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)=\left\langle\widehat{\Psi}^{\dagger}(\boldsymbol{r}) \widehat{\Psi}\left(\boldsymbol{r}^{\prime}\right)\right\rangle=\frac{1}{V} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}\left\langle\hat{a}_{\boldsymbol{k}}^{\dagger} \hat{a}_{\boldsymbol{k}^{\prime}}\right\rangle e^{i\left(\boldsymbol{k}^{\prime} \cdot \boldsymbol{r}^{\prime}-\boldsymbol{k} \cdot \boldsymbol{r}\right)}=\frac{1}{V} \sum_{\boldsymbol{k}}\left\langle\hat{n}_{\boldsymbol{k}}\right\rangle e^{-i \boldsymbol{k} \cdot\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)},
\end{align*}
$$
where $\left\langle\hat{n}_{\boldsymbol{k}}\right\rangle$ is the Bose-Einstein distribution. For independent free Bosons we may write
$$
\begin{align*}
g(\boldsymbol{R})=\frac{1}{V} \sum_{k} \frac{e^{-i \boldsymbol{k} \cdot \boldsymbol{R}}}{e^{\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}-1},
\end{align*}
$$
with $\epsilon_{\boldsymbol{k}}=\hbar^{2} \boldsymbol{k}^{2} / 2 m$ and $\boldsymbol{R}=\boldsymbol{r}-\boldsymbol{r}^{\prime}$. Let us look at the two limits $\boldsymbol{R} \rightarrow 0$ and $\boldsymbol{R} \rightarrow \infty$. For the first limit we may expand
$$
\begin{align*}
g(\boldsymbol{R})=\frac{1}{V} \sum_{\boldsymbol{k}} \frac{1-i \boldsymbol{k} \cdot \boldsymbol{R}-(\boldsymbol{k} \cdot \boldsymbol{R})^{2} / 2+\cdots}{e^{\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}-1}=n-\frac{\boldsymbol{R}^{2}}{6}\left\langle\boldsymbol{k}^{2}\right\rangle+\cdots,
\end{align*}
$$
where $n=N / V$ is the particle density and
$$
\begin{align*}
\left\langle\boldsymbol{k}^{2}\right\rangle=\frac{2 m}{\hbar^{2}} \frac{U}{V}= \begin{cases}6 \pi n \lambda^{-2} & T \gg T_{c} \\ 3.08 \pi n \lambda^{-2}\left(T / T_{c}\right)^{3 / 2} & T<T_{c}\end{cases}
\end{align*}
$$

where $U$ is the internal energy of the Bose gas. We used the average for an isotropic momentum distribution function $\left\langle\widehat{n}_{\boldsymbol{k}}\right\rangle$ :
$$
\begin{align*}
\left\langle(\boldsymbol{R} \cdot \boldsymbol{k})^{2}\right\rangle=\sum_{j=x, y, z} R_{j}^{2}\left\langle k_{j}^{2}\right\rangle=\frac{\left\langle\boldsymbol{k}^{2}\right\rangle}{3}\left(R_{x}^{2}+R_{y}^{2}+R_{z}^{2}\right)=\frac{\left\langle\boldsymbol{k}^{2}\right\rangle}{3} \boldsymbol{R}^{2}
\end{align*}
$$
because $\left\langle k_{x}^{2}\right\rangle=\left\langle k_{y}^{2}\right\rangle=\left\langle k_{z}^{2}\right\rangle=\left\langle\boldsymbol{k}^{2}\right\rangle / 3$ and $\left\langle k_{x} k_{y}\right\rangle=\left\langle k_{y} k_{z}\right\rangle=\left\langle k_{z} k_{x}\right\rangle=0$.

The correlation falls off quadratically for finite, but small $\boldsymbol{R}(|\boldsymbol{R}| \ll \lambda)$. Note that the in the $T \rightarrow 0$ limit the correlation function does not drop in agreement. For the long-distance limit we note that only the small wave vectors contribute to the $\boldsymbol{k}$-sum so that we may expand the integrand in the following way $\left(\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right) \ll 1\right)$,
$$
\begin{align*}
g(\boldsymbol{R}) \approx \int \frac{d^{3} k}{(2 \pi)^{3}} \frac{e^{-i \boldsymbol{k} \cdot \boldsymbol{R}}}{\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}=\frac{2 m k_{B} T}{\hbar^{2}} \int \frac{d^{3} k}{(2 \pi)^{3}} \frac{e^{-i \boldsymbol{k} \cdot \boldsymbol{R}}}{\boldsymbol{k}^{2}+k_{0}^{2}}
\end{align*}
$$
where $k_{0}^{2}=-\frac{2 m \mu}{\hbar^{2}}>0$. This form we know from the Yukawa potential,
$$
\begin{align*}
g(\boldsymbol{R}) \approx \frac{m k_{B} T}{(2 \pi)^{4} \hbar^{2}} \frac{e^{-k_{0}|\boldsymbol{R}|}}{|\boldsymbol{R}|}=\frac{e^{-k_{0}|\boldsymbol{R}|}}{(2 \pi)^{3} \lambda^{2}|\boldsymbol{R}|}
\end{align*}
$$

The single-particle correlation function decays exponentially for large distances:

![Attachments/Notes/Solid-State Theory/IMG-0126164750394.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/IMG-0126164750394.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=199&rect=186,393,410,532|•]]

This behaviour is valid for $T>T_{c}$ where $\mu<0$. For $T<T_{c}$ the chemical potential lies at the lowest single-particle state, i.e. $\mu=0$ for free Bosons, such that $k_{0}=0$. For the long-distance behaviour we conclude that the correlation function goes to zero like $|\boldsymbol{R}|^{-1}$. However, this is not true, since our integral approach neglects the macroscopic occupation of the $\boldsymbol{k}=0$ state. Thus, we should use
$$
\begin{align*}
\left\langle\hat{n}_{\boldsymbol{k}}\right\rangle=n_{0} \delta(\boldsymbol{k})+\frac{1}{(2 \pi)^{3}} \frac{1}{e^{\beta\left(\epsilon_{\boldsymbol{k}}-\mu\right)}-1}
\end{align*}
$$
such that for $|\boldsymbol{R}| \rightarrow \infty$,
$$
\begin{align*}
g(\boldsymbol{R})=n_{0}+\frac{1}{(2 \pi)^{3} \lambda^{2}|\boldsymbol{R}|}
\end{align*}
$$

The correlation function approaches a finite value on long distances in the presence of a BoseEinstein condensate.

**Bogolyubov Approximation:**

We consider this now from the view point of the field operator for free Bosons,
$$
\begin{align*}
\widehat{\Psi}(\boldsymbol{r})=\frac{1}{\sqrt{V}} \sum_{\boldsymbol{k}} \hat{a}_{\boldsymbol{k}} e^{i \boldsymbol{k} \cdot \boldsymbol{r}}=\frac{\hat{a}_{0}}{\sqrt{V}}+\frac{1}{\sqrt{V}} \sum_{\boldsymbol{k} \neq 0} \hat{a}_{\boldsymbol{k}} e^{i \boldsymbol{k} \cdot \boldsymbol{r}}
\end{align*}
$$

The correlation function suggests the following approximation: $\hat{a}_{0} \rightarrow a_{0}=\sqrt{N_{0}}$. For a Bose-Einstein condensate we may replace the operator $\hat{a}_{0}$ simply by a complex number, such that
$$
\begin{align*}
\widehat{\Psi}(\boldsymbol{r}) \rightarrow \widehat{\Psi}(\boldsymbol{r})=\psi_{0}(\boldsymbol{r})+\delta \widehat{\Psi}(\boldsymbol{r}),
\end{align*}
$$
with $\psi_{0}(\boldsymbol{r})=\sqrt{n_{0}} e^{i \phi}$, where $\phi$ is an arbitrary phase and $n_{0}=N_{0} / V$. In a uniform system this phase does not affect the physical properties. This so-called Bogolyubov approximation is, of course, incompatible with the occupation number representation. On the other hand, it is possible for a condensate state whose particle number is not fixed. Indeed a state incorporating this property is a coherent state.

**Coherent State:**

We introduce a coherent state as an eigenstate of the annihilation operator $\hat{a}_{\nu}$ of a Bosonic state of energy $\epsilon_{\nu}$. Let us call this state $\left|\Psi_{\alpha}\right\rangle$ with the property,
$$
\begin{align*}
\hat{a}_{\nu}\left|\Psi_{\alpha}\right\rangle=\alpha\left|\Psi_{\alpha}\right\rangle
\end{align*}
$$
where $\alpha$ is a complex number. Such a state is given by
$$
\begin{align*}
\left|\Psi_{\alpha}\right\rangle=e^{-|\alpha|^{2} / 2} \sum_{N_{\nu}} \frac{\alpha^{N_{\nu}}}{\sqrt{N_{\nu}!}}\left|N_{\nu}\right\rangle ;
\end{align*}
$$
with $\hat{a}_{\nu}\left|N_{\nu}\right\rangle=\sqrt{N_{\nu}}\left|N_{\nu}-1\right\rangle$. The expectation value for $\hat{n}_{\nu}=\hat{a}_{\nu}^{\dagger} \hat{a}_{\nu}$ is
$$
\begin{align*}
\left\langle\hat{n}_{\nu}\right\rangle=\left\langle\Psi_{\alpha}\right| \hat{a}_{\nu}^{\dagger} \hat{a}_{\nu}\left|\Psi_{\alpha}\right\rangle=\left\langle\Psi_{\alpha}\right| \alpha^{*} \alpha\left|\Psi_{\alpha}\right\rangle=\alpha^{*} \alpha=|\alpha|^{2}
\end{align*}
$$
and the variance is
$$
\begin{align*}
\left\langle\hat{n}_{\nu}^{2}\right\rangle-\left\langle\hat{n}_{\nu}\right\rangle^{2}=\left\langle\hat{a}_{\nu}^{\dagger} \hat{a}_{\nu} \hat{a}_{\nu}^{\dagger} \hat{a}_{\nu}\right\rangle-|\alpha|^{4}=\left\langle\hat{a}_{\nu}^{\dagger} \hat{a}_{\nu}\right\rangle+\left\langle\hat{a}_{\nu}^{\dagger} \hat{a}_{\nu}^{\dagger} \hat{a}_{\nu} \hat{a}_{\nu}\right\rangle-|\alpha|^{4}=|\alpha|^{2}+|\alpha|^{4}-|\alpha|^{4}=|\alpha|^{2}
\end{align*}
$$
such that
$$
\begin{align*}
\frac{\left\langle\hat{n}_{\nu}^{2}\right\rangle-\left\langle\hat{n}_{\nu}\right\rangle^{2}}{\left\langle\hat{n}_{\nu}\right\rangle^{2}}=\frac{1}{|\alpha|^{2}}=\frac{1}{\left\langle\hat{n}_{\nu}\right\rangle} .
\end{align*}
$$

Taking now the $\boldsymbol{k}=0$ state as coherent we identify
$$
\begin{align*}
\hat{a}_{0}|\Psi\rangle=\alpha_{0}|\Psi\rangle=\sqrt{N_{0}} e^{i \phi}|\Psi\rangle .
\end{align*}
$$

In this spirit we find that the mean value is
$$
\begin{align*}
\langle\widehat{\Psi}(\boldsymbol{r})\rangle=\psi_{0}(\boldsymbol{r}),
\end{align*}
$$
which does not vanish for the condensed state. Note, however, $\left\langle\hat{a}_{\boldsymbol{k}}\right\rangle=0$, if $\boldsymbol{k} \neq 0$. The finite value of $\left\langle\hat{a}_{0}\right\rangle$ requires states of different number of particles in the $\boldsymbol{k}=0$ state for the matrix elements making up this mean value. This is an element of spontaneous symmetry breaking. The condensate can be considered as a reservoir with on average $N_{0}$ particles ( $N_{0} \gg 1$ ), to which we can add or from which we can remove particles without changing the properties of the system. The coherent state satisfies this condition. We also can define an order parameter characterising the condensate, the condensate wavefunction,
$$
\begin{align*}
\psi_{0}(\boldsymbol{r})=\left|\psi_{0}(\boldsymbol{r})\right| e^{i \phi(\boldsymbol{r})}=\sqrt{n_{0}} e^{i \phi} .
\end{align*}
$$

Spontaneous symmetry breaking occurs via the (arbitrary) choice of the phase of the condensate wave function.
The number of particles and the phase $\phi$ are conjugate in the sense that a state with fixed particle number has no definite phase and a state with
fixed phase has no definite particle number. 
**Phase and number operator eigenstates**: The define the number operator and the phase operator and their corresponding eigenstates.
$$
\begin{align*}
\widehat{N}|N\rangle=N|N\rangle \quad \text { and } \quad e^{i \widehat{\phi}}|\phi\rangle=e^{i \phi}|\phi\rangle
\end{align*}
$$
where the two states are connected by the Fourier transform
$$
\begin{align*}
|\phi\rangle=\frac{1}{\sqrt{2 \pi}} \sum_{N=0}^{\infty} e^{i N \phi}|N\rangle \quad \text { with } \quad\langle N \mid \phi\rangle=\frac{e^{i N \phi}}{\sqrt{2 \pi}}
\end{align*}
$$
analogous to the relation between real and momentum space states. In this context care has to be taken to ensure that the states $|\phi\rangle$ form an orthogonal complete set of the Hilbert space. A way to construct this is to start with an finite Hilbert space $\{|N\rangle\}$ assuming that $0 \leq N \leq L-1 \gg 1$. Then we can restrict ourselves to a discrete set of phases $\phi=\phi_{k}=2 \pi k / L$ with $k=0, \ldots, L-1$ (analog to wave vectors in a finite system with periodic boundary conditions). Now it is easy to see that
$$
\begin{align*}
\left\langle\phi_{k} \mid \phi_{k^{\prime}}\right\rangle=\delta_{k, k^{\prime}} .
\end{align*}
$$

Keeping this in mind we take the limit $L \rightarrow \infty$.
Based on this above operators can be represented as
$$
\begin{align*}
\widehat{N}=\sum_{N=0}^{\infty} N|N\rangle\langle N| \quad \text { and } \quad e^{i \widehat{\phi}}=\sum_{N=0}^{\infty}|N\rangle\langle N+1| ;
\end{align*}
$$

Thus for both $\widehat{N}$ and $e^{i \widehat{\phi}}$ the coherent state does not represent an eigenstate, but rather the best localised in either basis.

First we consider the wave function of the coherent state in the number representation,
$$
\begin{align*}
\Psi_{N}=\left\langle N \mid \Psi_{\alpha}\right\rangle=e^{-|\alpha|^{2} / 2} \frac{\alpha^{N}}{\sqrt{N!}}
\end{align*}
$$
with $\alpha=\sqrt{N_{0}} e^{i \phi_{0}}$. Thus, the probability for the particle number $N$ is given by
$$
\begin{align*}
P_{N}=\left|\Psi_{N}\right|^{2}=e^{N_{0}} \frac{N_{0}^{N}}{N!} \approx \frac{1}{\sqrt{2 \pi N_{0}}} e^{-\left(N-N_{0}\right)^{2} / 2 N_{0}}
\end{align*}
$$
for large $N_{0}$. On the other hand, projecting into the phase representation,
$$
\begin{align*}
\begin{aligned}
\Psi_{\phi} & =\left\langle\phi \mid \Psi_{\alpha}\right\rangle=\sum_{N=0}^{\infty}\langle\phi \mid N\rangle\left\langle N \mid \Psi_{\alpha}\right\rangle=\frac{e^{-|\alpha|^{2} / 2}}{\sqrt{2 \pi}} \sum_{N=0}^{\infty} \frac{\alpha^{N} e^{-i \phi N}}{\sqrt{N!}} \\
& \approx \frac{1}{\sqrt{2 \pi}} \int_{0}^{\infty} d N \frac{e^{-\left(N-N_{0}\right)^{2} / 4 N_{0}}}{\left(2 \pi N_{0}\right)^{1 / 4}} e^{-i N\left(\phi-\phi_{0}\right)}=\left(\frac{N_{0}}{2 \pi}\right)^{1 / 4} e^{-\left(\phi-\phi_{0}\right)^{2} N_{0} / 4}
\end{aligned}
\end{align*}
$$
such that
$$
\begin{align*}
P_{\phi}=\left|\left\langle\phi \mid \Psi_{\alpha}\right\rangle\right|^{2} \approx \sqrt{\frac{N_{0}}{2 \pi}} e^{-\left(\phi-\phi_{0}\right)^{2} N_{0} / 2} .
\end{align*}
$$

The Gaussian approximation is in both representations only valid, if $N_{0} \gg 1$. The coherent state is neither an eigenstate of $\widehat{N}$ nor $e^{i \hat{\phi}}$. But for both the distributions are well localised around the corresponding mean values, $N_{0}$ and $\phi_{0}$. The uncertainty relation is obtained by considering the deviations from the mean values,
$$
\begin{align*}
\left.\begin{array}{l}
\Delta \phi^{2}=\left\langle\Psi_{\alpha}\right|\left(\widehat{\phi}-\phi_{0}\right)^{2}\left|\Psi_{\alpha}\right\rangle=\frac{1}{N_{0}} \\
\Delta N^{2}=\left\langle\Psi_{\alpha}\right|\left(\widehat{N}-N_{0}\right)^{2}\left|\Psi_{\alpha}\right\rangle=N_{0}
\end{array}\right\} \quad \Rightarrow \quad \Delta N \Delta \phi=1
\end{align*}
$$
compatible with a commutation relation of the form $[\widehat{N}, \widehat{\phi}]=i$.

[^13]
### 9.7.3 Phonons in an Elastic Medium

We consider here vibrations of an elastic media using a simplified model of longitudinal waves only. As in Sect.?? we describe deformation of the elastic medium by means of the displacement field $\boldsymbol{u}(\boldsymbol{r}, t)$. The kinetic and elastic energy are then given by
$$
\begin{align*}
E_{\text {kin }}=\frac{\rho_{m}}{2} \int d^{3} r\left(\frac{\partial \boldsymbol{u}(\boldsymbol{r}, t)}{\partial t}\right)^{2} \quad \text { and } \quad E_{\text {el }}=\frac{\lambda_{e}}{2} \int d^{3} r(\boldsymbol{\nabla} \cdot \boldsymbol{u}(\boldsymbol{r}, t))^{2},
\end{align*}
$$
where $\rho_{m}$ is the mass density of the medium and $\lambda_{e}$ denotes the elastic modulus. Note that we use a simplified elastic term which involves density fluctuations only, corresponding to $\boldsymbol{\nabla} \cdot \boldsymbol{u}$, and ignores the contributions of shear distortion. This two energies are now combined to the Lagrange functional $L[\boldsymbol{u}]=E_{\text {kin }}-E_{\text {el }}$, whose variation with respect to $\boldsymbol{u}(\boldsymbol{r}, t)$ yields the wave equation,
$$
\begin{align*}
\frac{1}{c_{l}^{2}} \frac{\partial^{2}}{\partial t^{2}} \boldsymbol{u}-\boldsymbol{\nabla}(\boldsymbol{\nabla} \cdot \boldsymbol{u})=0
\end{align*}
$$
for longitudinal waves with the sound velocity $c_{l}=\sqrt{\lambda_{e} / \rho_{m}}$ . The general solution can be represented as a superposition of plane waves,
$$
\begin{align*}
\boldsymbol{u}(\boldsymbol{r}, t)=\frac{1}{\sqrt{V}} \sum_{\boldsymbol{k}} \boldsymbol{e}_{\boldsymbol{k}}\left(q_{\boldsymbol{k}}(t) e^{i \boldsymbol{k} \cdot \boldsymbol{r}}+q_{\boldsymbol{k}}(t)^{*} e^{-i \boldsymbol{k} \cdot \boldsymbol{r}}\right)
\end{align*}
$$
with polarisation vector $\boldsymbol{e}_{\boldsymbol{k}}=\boldsymbol{k} /|\boldsymbol{k}|$ and the amplitudes $q_{\boldsymbol{k}}(t)$ satisfy the equation,
$$
\begin{align*}
\frac{d^{2}}{d t^{2}} q_{k}+\omega_{k}^{2} q_{k}=0
\end{align*}
$$
with the frequency $\omega_{\boldsymbol{k}}=c_{l}|\boldsymbol{k}|=c_{l} k$. We may rewrite the energy, $E=E_{\text {kin }}+E_{\text {el }}$, in terms of $q_{\boldsymbol{k}}$,
$$
\begin{align*}
E=\sum_{\boldsymbol{k}} \rho_{m} \omega_{\boldsymbol{k}}^{2}\left[q_{\boldsymbol{k}}(t) q_{\boldsymbol{k}}^{*}(t)+q_{\boldsymbol{k}}(t)^{*} q_{\boldsymbol{k}}(t)\right] .
\end{align*}
$$
which we express in a symmetrised form, for future convenience. Now we introduce new variables
$$
\begin{align*}
Q_{k}=\sqrt{\rho_{m}}\left(q_{k}+q_{k}^{*}\right) \quad \text { and } \quad P_{k}=\frac{d}{d t} Q_{k}=-i \omega_{k} \sqrt{\rho_{m}}\left(q_{k}-q_{k}^{*}\right)
\end{align*}
$$
leading to the energy
$$
\begin{align*}
E=\frac{1}{2} \sum_{k}\left(P_{\boldsymbol{k}}^{2}+\omega_{\boldsymbol{k}}^{2} Q_{\boldsymbol{k}}^{2}\right) .
\end{align*}
$$

This corresponds to a set of independent harmonic oscillators labelled by the wave vectors $\boldsymbol{k}$, as we have seen in Sect.??. We now turn to the step of canonical quantisation replacing the variables $\left(P_{k}, Q_{k}\right) \rightarrow\left(\widehat{P}_{\boldsymbol{k}}, \widehat{Q}_{k}\right)$ which satisfy the standard commutation relation,
$$
\begin{align*}
\left[\widehat{Q}_{\boldsymbol{k}}, \widehat{P}_{\boldsymbol{k}^{\prime}}\right]=i \hbar \delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}
\end{align*}
$$

This can be reexpressed in terms of lowering and raising operators,
$$
\begin{align*}
\hat{b}_{k}=\frac{1}{\sqrt{2 \hbar \omega_{k}}}\left(\omega_{k} \widehat{Q}_{k}+i \widehat{P}_{k}\right), \quad \hat{b}_{k}^{\dagger}=\frac{1}{\sqrt{2 \hbar \omega_{k}}}\left(\omega_{k} \widehat{Q}_{k}-i \widehat{P}_{k}\right)
\end{align*}
$$
which obey the following commutation relations,
$$
\begin{align*}
\left[\hat{b}_{\boldsymbol{k}}, \hat{b}_{\boldsymbol{k}^{\prime}}^{\dagger}\right]=\delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}, \quad\left[\hat{b}_{\boldsymbol{k}}, \hat{b}_{\boldsymbol{k}^{\prime}}\right]=\left[\hat{b}_{\boldsymbol{k}}^{\dagger}, \hat{b}_{\boldsymbol{k}^{\prime}}^{\dagger}\right]=0 .
\end{align*}
$$

Therefore $\hat{b}_{\boldsymbol{k}}^{\dagger}$ and $\hat{b}_{\boldsymbol{k}}$ can be viewed as creation and annihilation operators, respectively, for bosonic particles, called phonons. The Hamiltonian can be now written as
$$
\begin{align*}
\mathcal{H}=\sum_{\boldsymbol{k}} \hbar \omega_{\boldsymbol{k}}\left(\hat{b}_{\boldsymbol{k}}^{\dagger} \hat{b}_{\boldsymbol{k}}+\frac{1}{2}\right)=\sum_{\boldsymbol{k}} \hbar \omega_{\boldsymbol{k}}\left(\hat{n}_{\boldsymbol{k}}+\frac{1}{2}\right)
\end{align*}
$$
whose eigenstates are given in the occupation number representation, $\left|n_{\boldsymbol{k}_{1}}, n_{\boldsymbol{k}_{2}}, \ldots\right\rangle$.
We can now also introduce the corresponding field operator,
$$
\begin{align*}
\widehat{\boldsymbol{u}}(\boldsymbol{r})=\frac{1}{\sqrt{V}} \sum_{\boldsymbol{k}} \boldsymbol{e}_{\boldsymbol{k}} \sqrt{\frac{\hbar}{2 \rho_{m} \omega_{\boldsymbol{k}}}}\left[\hat{b}_{\boldsymbol{k}} e^{i \boldsymbol{k} \cdot \boldsymbol{r}}+\hat{b}_{\boldsymbol{k}}^{\dagger} e^{-i \boldsymbol{k} \cdot \boldsymbol{r}}\right]
\end{align*}
$$
which is not an eigen operator for the occupation number states. Actually the thermal mean value of the field vanishes $\langle\widehat{\boldsymbol{u}}(\boldsymbol{r})\rangle=0$.

**Correlation Function:**

The correlation function is given by
$$
\begin{align*}
\begin{aligned}
g\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right) & =\left\langle\widehat{\boldsymbol{u}}(\boldsymbol{r}) \cdot \widehat{\boldsymbol{u}}\left(\boldsymbol{r}^{\prime}\right)\right\rangle-\langle\widehat{\boldsymbol{u}}(\boldsymbol{r})\rangle \cdot\left\langle\widehat{\boldsymbol{u}}\left(\boldsymbol{r}^{\prime}\right)\right\rangle=\left\langle\boldsymbol{u}(\boldsymbol{r}) \cdot \boldsymbol{u}\left(\boldsymbol{r}^{\prime}\right)\right\rangle \\
& =\frac{1}{V} \sum_{\boldsymbol{k}, \boldsymbol{k}^{\prime}} \frac{\hbar \boldsymbol{e}_{\boldsymbol{k}} \cdot \boldsymbol{e}_{\boldsymbol{k}^{\prime}}}{2 \rho_{m} \sqrt{\omega_{\boldsymbol{k}^{\prime} \omega_{\boldsymbol{k}^{\prime}}}}}\left\langle\left[\hat{b}_{\boldsymbol{k}} e^{i \boldsymbol{k} \cdot \boldsymbol{r}}+\hat{b}_{\boldsymbol{k}}^{\dagger} e^{-i \boldsymbol{k} \cdot \boldsymbol{r}}\right]\left[\hat{b}_{\boldsymbol{k}^{\prime}} e^{i \boldsymbol{k}^{\prime} \cdot \boldsymbol{r}^{\prime}}+\hat{b}_{\boldsymbol{k}^{\prime}}^{\dagger} e^{-i \boldsymbol{k}^{\prime} \cdot \boldsymbol{r}^{\prime}}\right]\right\rangle
\end{aligned}
\end{align*}
$$

Note that
$$
\begin{align*}
\left\langle\hat{b}_{\boldsymbol{k}}^{\dagger} \hat{b}_{\boldsymbol{k}^{\prime}}\right\rangle=\left\langle\hat{n}_{\boldsymbol{k}}\right\rangle \delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}}, \quad\left\langle\hat{b}_{\boldsymbol{k}^{\prime}} \hat{b}_{\boldsymbol{k}^{\prime}}^{\dagger}\right\rangle=\left\{1+\left\langle\hat{n}_{\boldsymbol{k}}\right\rangle\right\} \delta_{\boldsymbol{k}, \boldsymbol{k}^{\prime}},\left\langle\hat{b}_{\boldsymbol{k}}^{\dagger} \hat{b}_{\boldsymbol{k}^{\prime}}^{\dagger}\right\rangle=\left\langle\hat{b}_{\boldsymbol{k}} \hat{b}_{\boldsymbol{k}^{\prime}}\right\rangle=0,
\end{align*}
$$
such that
$$
\begin{align*}
g\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)=\frac{\hbar}{2 \rho_{m} V} \sum_{\boldsymbol{k}} \frac{1}{\omega_{\boldsymbol{k}}}\left\{\left(1+\left\langle\hat{n}_{\boldsymbol{k}}\right\rangle\right) e^{i \boldsymbol{k} \cdot\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)}+\left\langle\hat{n}_{\boldsymbol{k}}\right\rangle e^{-i \boldsymbol{k} \cdot\left(\boldsymbol{r}-\boldsymbol{r}^{\prime}\right)}\right\}
\end{align*}
$$

**Melting:**

Instead of calculating the correlation function $\boldsymbol{r} \neq \boldsymbol{r}^{\prime}$ we now analyze the local (onsite) fluctuation, i.e $\boldsymbol{r}=\boldsymbol{r}^{\prime}$,
$$
\begin{align*}
\left\langle\boldsymbol{u}(\boldsymbol{r})^{2}\right\rangle=\frac{\hbar}{2 \rho_{m} V} \sum_{\boldsymbol{k}} \frac{1}{\omega_{\boldsymbol{k}}}\left\{\left(1+2\left\langle\hat{n}_{\boldsymbol{k}}\right\rangle\right)\right\}=\frac{\hbar}{2 \rho_{m} V} \sum_{\boldsymbol{k}} \frac{1}{\omega_{\boldsymbol{k}}} \operatorname{coth}\left(\frac{\beta \hbar \omega_{\boldsymbol{k}}}{2}\right)
\end{align*}
$$

With $\omega_{\boldsymbol{k}}=c_{l} k$ and the fact the number of degrees of freedom are limited, as described in Sect.?? $\left(k \leq k_{D}\right)$, we find
$$
\begin{align*}
\left\langle\boldsymbol{u}(\boldsymbol{r})^{2}\right\rangle=\frac{\hbar}{(2 \pi)^{2} \rho_{m} c_{l}} \int_{0}^{k_{D}} d k k \operatorname{coth}\left(\frac{\beta \hbar c_{l} k}{2}\right)= \begin{cases}\frac{k_{D} k_{B} T}{2 \pi^{2} \lambda_{e}} & T \gg \Theta_{D} \\ \frac{k_{D} k_{B} \Theta_{D}}{8 \pi^{2} \lambda_{e}} & T \ll \Theta_{D}\end{cases}
\end{align*}
$$
which are at high (low) temperature thermal (quantum) fluctuations. As $\boldsymbol{u}$ denotes the deviation of the position of an atom from its equilibrium position, we can apply Lindemann's criterion for melting of the systems. We introduce the lattice constant $a$ with $k_{D} \approx \pi / a$. If $\left\langle\boldsymbol{u}^{2}\right\rangle$ is a sizeable fraction of $a^{2}$ then a crystal would melt. Thus we define the Lindemann number $L_{m}$ with the
condition that the lattice is stable for $\left\langle\boldsymbol{u}^{2}\right\rangle<L_{m}^{2} a^{2}$. Thus we obtain a melting temperture $T_{m}$ with
$$
\begin{align*}
L_{m}^{2}=\frac{\left\langle\boldsymbol{u}^{2}\right\rangle}{a^{2}}=\frac{k_{B} T_{m}}{2 \pi \lambda_{e} a^{3}} \quad \Rightarrow \quad k_{B} T_{m}=2 \pi \lambda_{e} a^{3} L_{m}^{2}=2 \pi \rho_{m} a^{3} c_{l}^{2} L_{m}^{2}=2 \pi M_{i} c_{l}^{2} L_{m}^{2}
\end{align*}
$$
where $M_{i}=\rho_{m} a^{3}$ is the atomic mass per unit cell. Note that usually $L_{m} \approx 0.1$ give a reasonable estimate for $T_{m}$.
At sufficiently low temperature we can also observe quantum melting which occurs due to quantum fluctuations, the zero-point motion of the atoms in a lattice. We consider $T \ll \Theta_{D}$ and fix the temperature,
$$
\begin{align*}
L_{m}^{2}=\frac{k_{B} \Theta_{D}}{8 \pi a^{3} \lambda_{e}}=\frac{\hbar}{8 a^{4} \rho_{m} a^{4} c_{l}} \quad \Rightarrow \quad c_{l m}=\frac{\hbar}{8 \rho_{m} a^{4} L_{m}^{2}}
\end{align*}
$$
which defines a critical value for the sound velocity, $c_{l m}$, which here is temperature independent. For $c_{l}>c_{l m}$ the fluctuations are small enough that lattice stable, because it stiff enough, while for $c_{l}<c_{l m}$ the lattice is "soft" such that the zero-point motion destroys the lattice. We will see in Chapt.?? that the ${ }^{4}$ He shows such a quantum melting transition at very low temperature under pressure (pressure increases elastic constant and sound velocity), where the solid phase is stable at high pressure and turns into a liquid under decreasing the pressure.

**Lower Dimensions:**

We consider the elastic medium at lower dimensions. For two dimensions, we rewrite the equation as,
$$
\begin{align*}
\left\langle\boldsymbol{u}(\boldsymbol{r})^{2}\right\rangle=\frac{\hbar}{4 \pi c_{l} \rho_{m}} \int_{0}^{k_{D}} d k \operatorname{coth}\left(\frac{\beta \hbar c_{l} k}{2}\right)
\end{align*}
$$
and find that for all temperatures $T>0$ the integral diverges at lower integral boundary ("infrared divergence"). Only at $T=0$ we find
$$
\begin{align*}
\left\langle\boldsymbol{u}(\boldsymbol{r})^{2}\right\rangle=\frac{\hbar k_{D}}{4 \pi c_{l} \rho_{m}}=\frac{k_{B} \Theta_{D}}{4 \pi c_{l}^{2} \rho_{m}}=\frac{k_{B} \Theta_{D}}{4 \pi \lambda_{e}}
\end{align*}
$$
finite. Thus in two dimension the lattice forming an elastic medium is only stable at zero temperature. But still we can have quantum melting, if the lattice becomes sufficiently soft. In one dimension, the equation turns into
$$
\begin{align*}
\left\langle\boldsymbol{u}(\boldsymbol{r})^{2}\right\rangle=\frac{\hbar}{2 \pi c_{l} \rho_{m}} \int_{0}^{k_{D}} d k \frac{1}{k} \operatorname{coth}\left(\frac{\beta \hbar c_{l} k}{2}\right),
\end{align*}
$$
which (infrared) diverges at all temperatures including $T=0$. Quantum and thermal fluctuations are strong enough in one dimension to destabilise any lattice.

---
<?xml version="1.0" encoding="UTF-8" standalone="no"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --><svg xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" width="200" height="800px" viewBox="0 0 1024 1024" class="icon" version="1.1" id="svg6" sodipodi:docname="tree-svgrepo-com.svg" inkscape:version="1.2.2 (b0a8486541, 2022-12-01)">  <defs id="defs10">    <linearGradient inkscape:collect="always" id="linearGradient1672">      <stop style="stop-color:#824522;stop-opacity:1;" offset="0" id="stop1668"/>      <stop style="stop-color:#c46d00;stop-opacity:1;" offset="1" id="stop1670"/>    </linearGradient>    <linearGradient inkscape:collect="always" id="linearGradient882">      <stop style="stop-color:#ffe400;stop-opacity:1;" offset="0" id="stop878"/>      <stop style="stop-color:#ff6d00;stop-opacity:1;" offset="1" id="stop880"/>    </linearGradient>    <linearGradient inkscape:collect="always" xlink:href="#linearGradient882" id="linearGradient884" x1="128.59801" y1="205.97394" x2="869.52509" y2="404.38843" gradientUnits="userSpaceOnUse"/>    <linearGradient inkscape:collect="always" xlink:href="#linearGradient1672" id="linearGradient1674" x1="536.1637" y1="568.41846" x2="536.1637" y2="978.35699" gradientUnits="userSpaceOnUse"/>  </defs>  <sodipodi:namedview id="namedview8" pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" showgrid="false" inkscape:zoom="1.07" inkscape:cx="400.46729" inkscape:cy="400" inkscape:window-width="1920" inkscape:window-height="1052" inkscape:window-x="960" inkscape:window-y="0" inkscape:window-maximized="1" inkscape:current-layer="svg6"/>  <path d="M220.046 177.591c3.094 12.374 3.094 17.015 12.374 27.069 4.64 5.414 10.054 10.054 23.975 14.694 20.108 6.187 27.069-5.414 30.162-9.281l7.734 1.547c3.094 1.547 5.414 3.094 5.414 3.094l0.773-3.867-5.414-0.773c-3.867-1.547-6.96-3.094-6.96-3.094s4.64-15.468-6.187-27.842c-26.295-29.389-68.832-12.374-69.605-10.827l5.414 3.094 2.32 6.187zM564.203 285.866c-1.547 0.773 2.32 4.64 0 10.827-0.773 3.094-4.64 6.96-6.96 9.281-16.241 14.694-23.975 19.335-30.936 42.536-3.867 12.374-6.96 23.975-1.547 48.723 7.734 35.576 31.709 37.123 40.216 37.896 1.547 0 3.867 6.96 4.64 12.374 0.773 6.187 0 11.601 0 11.601s3.094 3.867 6.187-2.32c0-0.773-2.32-6.187-3.094-9.281-0.773-6.96-0.773-13.148-0.773-13.148s27.069-6.187 36.349-33.256c22.428-64.965-40.216-116.782-44.083-115.235zM461.343 171.404c1.547 0 3.867 6.96 4.64 12.374 0.773 6.187 0 11.601 0 11.601s3.094 3.867 6.187-2.32c0-0.773-2.32-6.187-3.094-9.281-0.773-6.96-0.773-13.148-0.773-13.148s27.069-5.414 37.123-33.256c21.655-65.738-40.99-117.555-44.083-116.008-1.547 0.773 2.32 4.64 0 10.827-0.773 3.094-4.64 6.96-6.96 9.281-16.241 14.694-23.975 19.335-30.936 42.536-3.867 12.374-6.96 23.975-1.547 48.723 6.96 36.349 30.936 37.123 39.443 38.669zM868.145 361.658c-0.773-0.773-3.094 3.867-8.507 4.64l-10.054-1.547c-18.561-6.187-25.522-10.054-46.403-5.414-10.827 2.32-21.655 5.414-37.896 19.335-24.748 20.881-14.694 40.216-12.374 47.177 0.773 1.547-3.867 6.187-7.734 8.507-4.64 3.867-8.507 4.64-8.507 4.64s-1.547 4.64 3.867 3.867l6.187-6.187c4.64-3.867 10.054-6.187 10.054-6.187s16.241 18.561 40.99 13.921c60.324-10.827 73.472-80.432 70.378-82.753zM495.372 175.271c-3.867 7.734-6.96 16.241-6.187 33.256 1.547 25.522 18.561 28.615 23.975 30.162 0.773 0 1.547 5.414 1.547 9.281 0 4.64-1.547 7.734-1.547 7.734s1.547 3.094 4.64-0.773l-1.547-6.96c0-4.64 0.773-9.281 0.773-9.281s19.335-1.547 28.615-19.335c21.655-43.31-16.241-84.299-18.561-84.299-0.773 0 0.773 3.094-0.773 7.734l-6.187 5.414c-12.374 9.281-17.788 12.374-24.748 27.069zM640.769 226.315l-3.867 7.734c1.547 5.414 4.64 2.32 4.64 2.32s0-4.64 1.547-10.054c1.547-4.64 3.867-10.054 5.414-10.054 6.96 0 28.615 2.32 40.216-27.842 7.734-20.881 6.187-31.709 4.64-42.536-3.094-20.881-9.281-26.295-21.655-40.99l-4.64-8.507c-0.773-6.187 3.094-9.281 1.547-10.054-3.094-1.547-64.191 34.802-53.364 94.353 4.64 25.522 27.842 34.029 27.842 34.029s-0.773 5.414-2.32 11.601zM381.684 553.458c-4.64-2.32-9.281-6.187-9.281-7.734 1.547-6.96 8.507-27.842-19.335-44.857-18.561-11.601-29.389-13.148-40.216-13.921-20.881-1.547-27.069 3.094-44.857 12.374l-10.054 3.094c-6.187-0.773-8.507-4.64-9.281-3.867-2.32 2.32 20.881 69.605 81.206 71.925 25.522 0.773 38.669-20.108 38.669-20.108s5.414 1.547 10.827 4.64l6.96 5.414c6.187 0 3.867-3.867 3.867-3.867s-3.867-0.773-8.507-3.094zM783.846 337.683c14.694-11.601 19.335-19.335 23.202-28.615 6.96-16.241 5.414-22.428 3.094-39.443v-8.507c2.32-4.64 6.187-5.414 5.414-6.187-1.547-2.32-61.871-3.867-81.206 44.083-8.507 20.108 4.64 37.123 4.64 37.123s-3.094 3.867-6.96 6.96l-6.187 3.867c-1.547 4.64 2.32 3.867 2.32 3.867s2.32-3.094 5.414-6.187l8.507-4.64c5.414 2.32 20.108 13.921 41.763-2.32zM497.692 459.878s1.547 3.094 3.094 7.734l0.773 6.187 3.867-0.773s-1.547-2.32-3.094-6.187l-0.773-7.734c3.867-2.32 17.015-9.281 11.601-30.936-3.867-14.694-8.507-20.108-13.921-25.522-10.054-10.054-14.694-10.827-27.842-14.694l-6.187-3.094-3.094-6.187c-2.32 0-22.428 44.083 6.96 72.699 12.374 12.374 28.615 8.507 28.615 8.507zM210.765 302.88c16.241 6.96 29.389-3.094 29.389-3.094l5.414 5.414 3.094 5.414c3.867 1.547 3.094-1.547 3.094-1.547l-5.414-4.64-3.867-6.96c2.32-3.867 11.601-15.468-0.773-32.482-8.507-11.601-15.468-15.468-22.428-18.561-13.148-6.187-17.788-4.64-30.936-3.094l-6.96-0.773c-2.32-1.547-3.094-4.64-3.867-4.64-2.32 1.547-3.867 49.497 33.256 64.965zM260.262 464.518s4.64 1.547 8.507 3.867l5.414 4.64c4.64 0 3.094-3.094 3.094-3.094s-3.867-0.773-7.734-2.32c-3.867-1.547-7.734-4.64-6.96-6.187 0.773-5.414 6.187-22.428-15.468-35.576-14.694-9.281-23.975-10.054-32.482-10.827-17.015-0.773-21.655 3.094-36.349 10.054l-7.734 2.32c-4.64 0-6.96-3.867-7.734-3.094-1.547 2.32 17.015 56.457 66.511 57.231 20.881-0.773 30.936-17.015 30.936-17.015zM373.176 195.379c-12.374-7.734-17.015-6.96-30.162-6.96l-6.96-1.547c-3.094-2.32-3.094-5.414-4.64-5.414-2.32 0.773-10.054 47.95 25.522 68.832 14.694 8.507 29.389 0.773 29.389 0.773s3.094 3.094 4.64 6.187l2.32 5.414c3.867 1.547 3.094-1.547 3.094-1.547l-3.867-4.64-3.094-7.734c3.094-3.867 13.921-13.921 3.094-32.482-6.96-13.148-13.148-17.015-19.335-20.881zM511.613 502.414l-5.414-4.64c-1.547-3.867 0-6.187-1.547-6.187-2.32 0-32.482 37.123-11.601 71.925 8.507 14.694 25.522 14.694 25.522 14.694l1.547 7.734-0.773 6.187c2.32 3.094 3.867 0.773 3.867 0.773l-1.547-6.187c0-3.094 0-7.734 0.773-7.734 4.64-1.547 18.561-5.414 18.561-27.069 0-14.694-3.094-21.655-6.96-27.842-6.187-13.148-10.827-15.468-22.428-21.655zM568.844 263.437s-0.773 3.867-2.32 7.734l-3.867 4.64c0.773 3.867 3.094 2.32 3.094 2.32s0-3.094 1.547-6.187l4.64-6.187c4.64 0.773 18.561 3.867 29.389-15.468 6.96-13.148 6.96-20.108 6.96-27.842 0-13.921-3.867-18.561-10.827-29.389l-2.32-6.187c0-3.867 2.32-5.414 1.547-6.187-1.547-1.547-45.63 17.788-43.31 58.778 0.773 16.241 15.468 23.975 15.468 23.975zM647.729 354.697s-0.773 3.867-3.094 7.734l-3.867 4.64c0 3.867 3.094 2.32 3.094 2.32s0.773-3.094 2.32-6.187l4.64-6.187c4.64 0.773 18.561 4.64 29.389-14.694 6.96-13.148 7.734-20.108 7.734-27.842 0-13.921-3.094-18.561-10.054-29.389l-2.32-6.187c0-3.867 3.094-5.414 2.32-6.187-1.547-1.547-46.403 16.241-45.63 57.231 1.547 16.241 15.468 24.748 15.468 24.748zM378.59 309.067l-3.094-6.187c-2.32 0-19.335 44.857 11.601 71.925 13.148 11.601 28.615 6.187 28.615 6.187s2.32 3.094 3.867 6.96l1.547 6.187 3.867-0.773s-2.32-2.32-3.094-6.187l-1.547-7.734c3.867-3.094 16.241-10.827 9.281-31.709-4.64-13.921-10.054-19.335-15.468-24.748-10.054-10.054-15.468-10.054-28.615-13.148l-6.96-0.773zM266.449 411.928c5.414 11.601 11.601 22.428 32.482 36.349 30.162 20.881 48.723 4.64 54.911 0 1.547-0.773 7.734 2.32 11.601 6.187 4.64 3.867 7.734 8.507 7.734 8.507s5.414 0.773 3.094-5.414l-8.507-4.64c-5.414-3.867-10.054-9.281-10.054-9.281s15.468-23.202 3.094-49.497c-28.615-62.644-109.048-56.457-111.368-53.364-0.773 1.547 4.64 2.32 7.734 7.734 1.547 3.094 1.547 7.734 1.547 11.601-1.547 21.655-3.094 30.162 7.734 51.817zM340.694 280.452c-14.694-44.083-70.378-45.63-71.925-43.31-0.773 0.773 3.094 1.547 4.64 6.187v7.734c-2.32 14.694-4.64 20.108 0.773 35.576 3.094 7.734 6.187 15.468 19.335 27.069 18.561 16.241 32.482 6.96 37.123 3.867l7.734 4.64 4.64 6.187s3.867 0.773 2.32-3.867l-5.414-3.867c-3.094-3.094-6.187-6.96-6.187-6.96s13.148-14.694 6.96-33.256zM761.417 170.631c-0.773 0-0.773 3.094-3.867 6.187l-7.734 2.32c-14.694 2.32-20.881 2.32-33.256 12.374-6.96 5.414-13.148 10.827-19.335 27.069-9.281 23.202 3.867 32.482 8.507 36.349 0.773 0.773-0.773 5.414-2.32 8.507-1.547 3.867-4.64 6.187-4.64 6.187s0 3.867 3.867 0.773l1.547-6.187c2.32-4.64 4.64-7.734 4.64-7.734s18.561 7.734 34.029-4.64c38.669-27.842 21.655-80.432 18.561-81.206zM324.453 127.321c2.32 8.507 4.64 16.241 16.241 28.615 17.015 17.788 31.709 9.281 36.349 7.734l6.96 5.414 3.867 6.187s3.094 1.547 2.32-3.094l-5.414-4.64c-3.094-3.867-5.414-7.734-5.414-7.734s14.694-13.921 10.054-33.256c-10.827-45.63-65.738-51.817-67.285-49.497-0.773 0.773 3.094 2.32 3.867 6.187l-0.773 7.734c-2.32 15.468-4.64 20.881-0.773 36.349zM213.085 388.726c0.773-0.773 5.414 0.773 8.507 2.32 3.867 1.547 6.187 4.64 6.187 4.64s3.867 0 0.773-3.867l-6.187-2.32-7.734-4.64s7.734-18.561-3.867-34.029c-27.842-37.896-80.432-22.428-81.206-19.335 0 0.773 3.094 0.773 6.187 3.867l2.32 7.734c1.547 14.694 1.547 20.881 11.601 33.256 5.414 6.96 10.827 13.148 26.295 19.335 23.202 10.054 33.256-3.094 37.123-6.96zM501.559 305.2c-1.547-17.015-6.187-23.975-10.827-30.936-9.281-13.148-14.694-15.468-28.615-21.655l-6.187-4.64c-2.32-3.867-0.773-6.96-2.32-6.96-2.32 0-34.029 45.63-6.187 83.526 11.601 16.241 31.709 13.921 31.709 13.921s1.547 3.867 2.32 8.507v6.96c3.094 3.867 3.867 0 3.867 0s-1.547-3.094-2.32-6.96c-0.773-3.867-0.773-8.507 0.773-9.281 4.64-2.32 20.108-7.734 17.788-32.482zM405.659 420.435c-0.773 0.773 2.32 3.094 1.547 7.734l-3.094 6.96c-8.507 12.374-13.148 16.241-13.921 32.482-0.773 8.507-0.773 17.015 6.187 32.482 10.054 22.428 26.295 19.335 31.709 19.335 0.773 0 3.867 3.867 4.64 7.734 1.547 3.867 1.547 7.734 1.547 7.734s3.094 2.32 3.867-2.32l-3.094-6.187c-1.547-4.64-2.32-8.507-2.32-8.507s17.788-7.734 20.108-27.842c5.414-47.177-44.857-71.152-47.177-69.605zM694.906 370.165l-3.867 6.96-6.96 3.094c-14.694 3.094-20.108 3.867-32.482 15.468-6.187 6.187-11.601 12.374-17.015 27.842-6.96 23.975 6.96 32.482 11.601 35.576 0.773 0.773 0 5.414-1.547 9.281s-3.867 6.96-3.867 6.96 0.773 3.867 3.867 0.773l1.547-6.96c1.547-4.64 3.867-8.507 3.867-8.507s19.335 6.187 33.256-7.734c35.576-31.709 14.694-82.753 11.601-82.753zM575.804 133.508c0.773 0 1.547 5.414 1.547 9.281s-1.547 7.734-1.547 7.734 1.547 3.094 3.867-0.773l-0.773-6.96c0-4.64 1.547-9.281 1.547-9.281s20.108 0 30.162-17.015c23.975-40.216-10.827-82.753-13.921-82.753-0.773 0 0.773 3.094-1.547 7.734l-6.187 4.64c-13.148 7.734-18.561 10.054-26.295 23.975-3.867 7.734-7.734 14.694-7.734 31.709 0 26.295 15.468 30.162 20.881 31.709z" fill="#148d13" id="path2" style="fill-opacity:1;fill:url(#linearGradient884);stroke:#fffefe;stroke-opacity:1;stroke-width:1.92;stroke-dasharray:none"/>  <path d="M650.050 620.743c-155.451 192.574-73.472 341.838-46.403 352.665 3.094 1.547-122.969 4.64-121.422 3.867 58.778-35.576-64.191-318.636-87.393-367.36-9.281-19.335 9.281 2.32 43.31-10.827 27.069-10.827 19.335-40.99 35.576-34.029 12.374 5.414-3.867 50.27 21.655 91.26 4.64 7.734 71.925 9.281 73.472-129.156 0.773-62.644 28.615 6.96 55.684 17.788s35.576 6.96 91.26-69.605c5.414-9.281 47.177 5.414-65.738 145.397z" fill="#824522" id="path4" style="stroke-width:1.92;stroke-dasharray:none;stroke:#ffffff;stroke-opacity:1;fill-opacity:1;fill:url(#linearGradient1674)"/></svg>
