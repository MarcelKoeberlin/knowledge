---
{"dg-publish":true,"permalink":"/notes/solid-state-theory/1-electrons-in-the-periodic-crystal/","hide":"true","updated":"2025-01-28T21:29:28.428+01:00"}
---

Jump back to [[Notes/Solid-State Theory/Solid-State Theory#Table of Contents\|chapter selection]].

---
**Table of Contents**

[[Notes/Solid-State Theory/1 Electrons in the Periodic Crystal#1 Electrons in the Periodic Crystal\|1 Electrons in the Periodic Crystal]]
	[[Notes/Solid-State Theory/1 Electrons in the Periodic Crystal#1 Electrons in the Periodic Crystal\|1.1 Symmetries of Crystals]]
	[[Notes/Solid-State Theory/1 Electrons in the Periodic Crystal#1 Electrons in the Periodic Crystal\|1.2 Bloch's Theorem and Bloch Functions]]
	[[Notes/Solid-State Theory/1 Electrons in the Periodic Crystal#1 Electrons in the Periodic Crystal\|1.3 Nearly Free Electron Approximation]]
	[[Notes/Solid-State Theory/1 Electrons in the Periodic Crystal#1 Electrons in the Periodic Crystal\|1.4 Tight-Binding Approximation]]
	[[Notes/Solid-State Theory/1 Electrons in the Periodic Crystal#1 Electrons in the Periodic Crystal\|1.5 Symmetry Properties of the Band Structure]]
	[[Notes/Solid-State Theory/1 Electrons in the Periodic Crystal#1 Electrons in the Periodic Crystal\|1.6 Band-Filling and Materials Properties]]
	[[Notes/Solid-State Theory/1 Electrons in the Periodic Crystal#1 Electrons in the Periodic Crystal\|1.7 Dynamics of Band Electrons - Semiclassical Approach]]
	[[Notes/Solid-State Theory/1 Electrons in the Periodic Crystal#1 Electrons in the Periodic Crystal\|1.8 Approximative Band Structure Calcuations]]

---
# 1 Electrons in the Periodic Crystal 
[[Masters/2. Semester/Solid State Theory/Script.pdf#page=8&selection=2,0,4,10|•]]

One defining characteristic of many solids is the regular arrangement of their atoms, forming a crystal. Electrons in such crystals experience a periodic potential, originating from the lattice of ions and the mean interaction with other electrons:

![Attachments/Notes/Solid-State Theory/1 Electrons in the Periodic Crystal/IMG-0128212143154.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/1%20Electrons%20in%20the%20Periodic%20Crystal/IMG-0128212143154.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=5&rect=207,412,394,513|•]]

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

![Attachments/Notes/Solid-State Theory/1 Electrons in the Periodic Crystal/IMG-0128212143218.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/1%20Electrons%20in%20the%20Periodic%20Crystal/IMG-0128212143218.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=9&rect=154,451,440,629|•]]

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

![Attachments/Notes/Solid-State Theory/1 Electrons in the Periodic Crystal/IMG-0128212143272.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/1%20Electrons%20in%20the%20Periodic%20Crystal/IMG-0128212143272.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=14&rect=176,569,421,754|•]]

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

![Attachments/Notes/Solid-State Theory/1 Electrons in the Periodic Crystal/IMG-0128212143384.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/1%20Electrons%20in%20the%20Periodic%20Crystal/IMG-0128212143384.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=16&rect=98,261,509,397|•]]

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

![Attachments/Notes/Solid-State Theory/1 Electrons in the Periodic Crystal/IMG-0128212143605.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/1%20Electrons%20in%20the%20Periodic%20Crystal/IMG-0128212143605.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=24&rect=127,512,464,652|•]]
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


![Attachments/Notes/Solid-State Theory/1 Electrons in the Periodic Crystal/IMG-0128212143668.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/1%20Electrons%20in%20the%20Periodic%20Crystal/IMG-0128212143668.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=27&rect=119,504,478,752|•]]

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

![Attachments/Notes/Solid-State Theory/1 Electrons in the Periodic Crystal/IMG-0128212143736.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/1%20Electrons%20in%20the%20Periodic%20Crystal/IMG-0128212143736.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=28&rect=74,552,528,760|•]]

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
![Attachments/Notes/Solid-State Theory/1 Electrons in the Periodic Crystal/IMG-0128212143798.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/1%20Electrons%20in%20the%20Periodic%20Crystal/IMG-0128212143798.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=31&rect=159,551,427,691|•]]

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

![Attachments/Notes/Solid-State Theory/1 Electrons in the Periodic Crystal/IMG-0128212143853.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/1%20Electrons%20in%20the%20Periodic%20Crystal/IMG-0128212143853.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=32&rect=170,222,426,375|•]]

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

![Attachments/Notes/Solid-State Theory/1 Electrons in the Periodic Crystal/IMG-0128212143906.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/1%20Electrons%20in%20the%20Periodic%20Crystal/IMG-0128212143906.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=33&rect=72,210,526,333|•]]

If we are only interested in states inside a small energy window, the energy dependence of the pseudo-potential can be neglected, and $V_{\mathrm{ps}}$ may be approximated by a standard potential (see Figure 1.11). Such a simple Ansatz is exemplified by the atomic pseudo-potential, proposed by Ashcroft, Heine and Abarenkov (AHA). The potential of a single ion is assumed to be of the form
$$
\begin{align*}
v_{\mathrm{ps}}(r)= \begin{cases}V_{0} & r<R_{c} \\ -\frac{Z_{\mathrm{ion}} e^{2}}{r} & r>R_{c}\end{cases}
\end{align*}
$$
where $Z_{\text {ion }}$ is the charge of the ionic core and $R_{c}$ its effective radius (determined by the core electrons). The constants $R_{c}$ and $V_{0}$ are chosen such that the energy levels of the outermost electrons are reproduced correctly for the single-atom calculations.

![Attachments/Notes/Solid-State Theory/1 Electrons in the Periodic Crystal/IMG-0128212143970.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/1%20Electrons%20in%20the%20Periodic%20Crystal/IMG-0128212143970.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=34&rect=156,585,439,756|•]]

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

![Attachments/Notes/Solid-State Theory/1 Electrons in the Periodic Crystal/IMG-0128212144032.webp|700](/img/user/Attachments/Notes/Solid-State%20Theory/1%20Electrons%20in%20the%20Periodic%20Crystal/IMG-0128212144032.webp)[[Masters/2. Semester/Solid State Theory/Script.pdf#page=35&rect=208,418,388,601|•]]

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

where $j_{l}(x)$ is the $l$-th spherical Bessel function. We parametrise

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