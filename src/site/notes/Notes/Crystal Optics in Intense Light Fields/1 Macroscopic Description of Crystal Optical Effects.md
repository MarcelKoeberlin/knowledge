---
{"dg-publish":true,"permalink":"/notes/crystal-optics-in-intense-light-fields/1-macroscopic-description-of-crystal-optical-effects/","hide":"true","updated":"2025-05-30T13:13:11.000+02:00"}
---

Jump back to ==[[Notes/Crystal Optics in Intense Light Fields/Crystal Optics in Intense Light Fields#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

[[#1.1 Symmetry Principles|1.1 Symmetry Principles]]
[[#1.2 Group Theory and Symmetry Operations in Crystals|1.2 Group Theory and Symmetry Operations in Crystals]]
[[#1.3 Coordinate Transformations|1.3 Coordinate Transformations]]
[[#1.4 Symmetry Groups|1.4 Symmetry Groups]]
[[#1.5 Obtaining Tensor Components|1.5 Obtaining Tensor Components]]
[[#1.6 Beyond Group Theory|1.6 Beyond Group Theory]]

---
# 1 Macroscopic Description of Crystal Optical Effects
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=7&selection=0,0,1,14| ]]

There are two main approaches to describe the physical properties and behaviour of light within macroscopic crystals: the macroscopic and the microscopic approach.

In the **macroscopic approach**, physical quantities are related to each other via tensors. As an example, consider the piezomagnetic effect, where an applied mechanical stress $T_{jk}$ induces a magnetisation $M_i$. This is described by:
$$
M_i = \sum_{j,k} Q_{ijk} T_{jk},
$$
where the material's response is encapsulated in the piezomagnetic tensor $Q_{ijk}$. This tensor serves as a parametrisation of the underlying physics within the macroscopic framework; all specific material properties and microscopic physical relations relevant to this effect are contained within the components of $Q_{ijk}$.

The **microscopic approach** arises from the need to explain and calculate the relations hidden within tensors like $Q_{ijk}$. The individual tensor elements are ultimately derived from quantum mechanical descriptions of the material's constituents and their interactions. For the piezomagnetic tensor, this might involve expressions like:
$$
Q_{ijk} \sim \sum_{n_2,n_3} \frac{\langle n_1| \hat{M}_i |n_3\rangle \langle n_3| \hat{D}_{jk} |n_2\rangle \langle n_2| \hat{V}_{pert} |n_1\rangle}{(\dots)},
$$
where $\hat{M}_i$ is a magnetic moment operator, $\hat{D}_{jk}$ relates to deformation, and $\hat{V}_{pert}$ represents interaction Hamiltonians, summed over intermediate states $|n_2\rangle, |n_3\rangle$.

Both of these approaches can be utilised. Even without detailed knowledge of the microscopic interactions, fundamental statements about the macroscopic behaviour and the form of the material tensors can often be made based on symmetry considerations alone.

---
## 1.1 Symmetry Principles
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=7&selection=93,0,93,23| ]]

Symmetry considerations alone constrain the form of material tensors and allow fundamental statements about their behaviour and the physical effects they describe. The most fundamental statement relating physical properties to crystal symmetry is **Neumann's Principle**:

_The symmetry elements of any physical property of a crystal must include all the symmetry elements of the crystal's point group._

This principle expresses that the symmetry of a material must be reflected in its physical properties. For instance, consider the pyroelectric effect (polarisation induced by a uniform temperature change) or the piezomagnetic effect in a crystal possessing a centre of inversion. Such symmetry forbids these effects. Charge separation induced by heat (pyroelectricity) will not occur in any crystal that has a centre of symmetry.

![Attachments/Notes/Crystal Optics in Intense Light Fields/1 Macroscopic Description of Crystal Optical Effects/Script (Unofficial).webp|700](/img/user/Attachments/Notes/Crystal%20Optics%20in%20Intense%20Light%20Fields/1%20Macroscopic%20Description%20of%20Crystal%20Optical%20Effects/Script%20(Unofficial).webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=8&rect=241,699,410,761| ]]

As a direct consequence, a material tensor $Q_{ijk...}$ must be invariant under all symmetry operations of the crystal's point group. This provides a powerful method to determine which tensor components can be non-zero and which relations must exist between them, and can allow the use of $Q_{ijk...}$ as a structural probe.

However, one has to be careful with the interpretation of Neumann's Principle. The symmetry of an observed physical property may be higher than the symmetry of the crystal itself. For example, the scalar property of thermal expansion (change in volume with temperature) is isotropic for all crystal classes, even those with low symmetry. This means that observing an isotropic effect does not imply the crystal is isotropic. When using a tensor $Q_{ijk...}$ as a structural probe, the observed non-zero components and their relations set a *lower bound* on the crystal's symmetry; the crystal symmetry must be a subgroup of the symmetry group of the tensor form dictated by the effect.

---
## 1.2 Group Theory and Symmetry Operations in Crystals
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=8&selection=68,1,68,16| ]] [[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=8&selection=77,0,77,35| ]]
Group theory provides the mathematical apparatus and formalism to describe symmetries and the associated transformation properties of physical quantities and their relating tensors (like $Q_{ijk}$). It allows for systematic calculations with sets of symmetry operations. A **symmetry operation** is a transformation (such as rotation, reflection, inversion) that, when applied to an object or a crystal structure, leaves it indistinguishable from its original state. For instance, an equilateral triangle rotated by $120^{\circ}$ about its centre cannot be distinguished from its original orientation (unless its vertices are labelled). The $120^{\circ}$ rotation is therefore a symmetry operation for the equilateral triangle. All symmetry operations relevant to crystals are either translations, point operations (rotations, reflections, inversion), or combinations thereof.

### 1.2.1 Translations

If a physical system (or its properties) is unaffected by a spatial translation through a vector $\mathbf{R}$, the system possesses translational symmetry. For a crystal lattice, translational symmetry is defined by the lattice vectors. Consider the next figure: symmetries in a crystal involve translations along lattice vectors over integer multiples of unit cells (a trivial translational symmetry for the infinite lattice), or potentially over sub-unit cell distances for certain repeating motifs (non-trivial in the context of space groups).

![Attachments/Notes/Crystal Optics in Intense Light Fields/1 Macroscopic Description of Crystal Optical Effects/Script (Unofficial) 1.webp|700](/img/user/Attachments/Notes/Crystal%20Optics%20in%20Intense%20Light%20Fields/1%20Macroscopic%20Description%20of%20Crystal%20Optical%20Effects/Script%20(Unofficial)%201.webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=9&rect=179,648,373,760| ]]

The mathematical operation is a shift of position vector $\mathbf{r}$:
$$
\mathbf{r} \rightarrow \mathbf{r}' = \mathbf{r} + \mathbf{R}.
$$
For perfect crystals, $\mathbf{R}$ can be any lattice vector $\mathbf{R}_{mno} = m\mathbf{a}_1 + n\mathbf{a}_2 + o\mathbf{a}_3$, where $\mathbf{a}_i$ are primitive lattice vectors and $m,n,o$ are integers. In optical phenomena, unless dealing with diffraction from the lattice itself (like X-ray diffraction), these microscopic translational symmetries are often not directly considered because the optical wavelength $\lambda$ is typically much larger than the lattice spacing ($|\mathbf{R}_{\text{unit cell}}| \ll \lambda$). This means the phase of the optical electric field is nearly constant across a single unit cell (long-wavelength approximation).

### 1.2.2 Rotations

Symmetry operations that leave at least one point fixed are called point symmetries. The major group of point symmetry operations are rotations about an axis by an angle that is a fraction of $2\pi$:
$$
\alpha = \frac{2 \pi}{n}, \quad \text{corresponding to an } n\text{-fold rotation axis}.
$$
Due to the requirement of periodic translational symmetry in crystals (crystallographic restriction theorem), only $n=1,2,3,4,6$ -fold rotation axes are possible. Values of $n$ different from these (such as $n=5$ or $n>6$) cannot form a periodic lattice structure.

### 1.2.3 Parity Operations

Parity operations generally describe symmetries with respect to reflection or inversion, often having two possible outcomes (eigenvalues like $\pm 1$).

**Spatial Inversion**
This operation, denoted by $\hat{I}$, corresponds to reflection through a point (the inversion centre). It inverts all spatial coordinates:
$$
\hat{I}: \mathbf{r} \rightarrow -\mathbf{r}.
$$
Applying this operator twice yields the identity operation, $\hat{I}^2 = \mathbb{1}$ (where $\mathbb{1}$ is the identity operator). Thus, its eigenvalues are $\lambda = \pm 1$. Functions can be classified by their parity under inversion. Any function $f(\mathbf{r})$ can be decomposed into an even part $f_+(\mathbf{r})$ and an odd part $f_-(\mathbf{r})$:
$$
f_{\pm}(\mathbf{r})=\frac{1}{2}(f(\mathbf{r}) \pm f(-\mathbf{r})), \quad \text{such that} \quad f(\mathbf{r})=f_{+}(\mathbf{r})+f_{-}(\mathbf{r}).
$$
These components behave as:
$$
f_{+}(-\mathbf{r}) = +f_{+}(\mathbf{r}) \quad (\text{even parity, eigenvalue } +1)
$$
$$
f_{-}(-\mathbf{r}) = -f_{-}(\mathbf{r}) \quad (\text{odd parity, eigenvalue } -1).
$$

**Time Reversal**
Similar to spatial inversion, the time reversal operation $\hat{T}$ inverts the temporal coordinate:
$$
\hat{T}: t \rightarrow -t.
$$
In quantum mechanics, $\hat{T}$ is an anti-unitary operator, and $\hat{T}^2 = +\mathbb{1}$ for integer spin systems (bosons) and $\hat{T}^2 = -\mathbb{1}$ for half-integer spin systems (fermions). For classical fields and functions, we often consider $\hat{T}^2=\mathbb{1}$, leading to eigenvalues $\lambda = \pm 1$ for functions having definite symmetry under time reversal.
Considering crystalline materials with magnetic order, time reversal symmetry (or its breaking) is crucial. An intrinsic atomic magnetic moment (often due to electron spin) can be visualised as arising from a microscopic current loop. Time reversal would invert the direction of this current, thus reversing the magnetic moment:

![Attachments/Notes/Crystal Optics in Intense Light Fields/1 Macroscopic Description of Crystal Optical Effects/Script (Unofficial) 2.webp|700](/img/user/Attachments/Notes/Crystal%20Optics%20in%20Intense%20Light%20Fields/1%20Macroscopic%20Description%20of%20Crystal%20Optical%20Effects/Script%20(Unofficial)%202.webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=10&rect=242,696,409,763| ]]

---
## 1.3 Coordinate Transformations
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=10&selection=122,0,122,30| ]]

In contrast to symmetry operations (which transform the object/crystal with respect to a fixed coordinate system), a **coordinate transformation** $\hat{R}$ transforms the description of the system from an initial coordinate system $K'$ to a final coordinate system $K$:
$$
\mathbf{x} = \hat{R} \mathbf{x}', \quad \text{or component-wise, } x_i = \sum_j R_{ij} x'_j,
$$
where $\mathbf{x}$ and $\mathbf{x}'$ are position vectors in $K$ and $K'$, respectively, and $R_{ij}$ are the elements of the transformation matrix $\hat{R}$. For our purposes, we typically consider orthogonal transformations (which preserve lengths and angles, $R^T R = \mathbb{1}$, so $R^T=R^{-1}$). These include rotations and improper rotations (like inversion or reflection). Time reversal is a separate transformation.

Coordinate transformations are related to symmetry operations in that applying a symmetry operation to an object is equivalent to applying the inverse coordinate transformation to the coordinate system, while keeping the object fixed. Physical quantities (scalars, vectors, tensors) also transform under a coordinate change. For example, a vector $\mathbf{V}'$ in $K'$ becomes $\mathbf{V} = \hat{R}\mathbf{V}'$ in $K$. Examples of transformation matrices:
- Rotation by angle $\phi$ about the $z$-axis (passive rotation of coordinates, or active rotation of vector):
    $$\hat{R}_{\phi, z}=\begin{pmatrix}\cos\phi & \sin\phi & 0 \\-\sin\phi & \cos\phi & 0 \\0 & 0 & 1\end{pmatrix} \quad (\text{for } \mathbf{r}' = \hat{R}_{\phi,z}^{-1} \mathbf{r} = \hat{R}_{-\phi,z} \mathbf{r})$$
    Or, for transforming components $v_i = \sum_j R_{ij} v'_j$: $\hat{R}_{\phi,z} = \begin{pmatrix}\cos\phi & -\sin\phi & 0 \\ \sin\phi & \cos\phi & 0 \\ 0 & 0 & 1 \end{pmatrix}$. It is important to be consistent.
- Inversion through the origin:
    $$\hat{I}=\begin{pmatrix}-1 & 0 & 0 \\0 & -1 & 0 \\0 & 0 & -1\end{pmatrix}=-\boldsymbol{\delta}$$
- Time-reversal operator $\hat{T}$ acting on spin states $|\uparrow\rangle, |\downarrow\rangle$ can be represented by matrices like $i\sigma_y$ (Pauli matrix), for instance, $\hat{T}\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} -b^* \\ a^* \end{pmatrix}$ (anti-unitary).

### 1.3.1 General Transformation of Tensors

A physical relationship described by a tensor must be independent of the coordinate system chosen. If a tensor is $\chi'_{i'j'...n'}$ in system $K'$, its components $\chi_{ij...n}$ in system $K$ (where $x_i = \sum_{i'} R_{ii'} x'_{i'}$) are given by the transformation rule:
$$
\chi_{ij \ldots n} = \sum_{i'j'\ldots n'} R_{ii'} R_{jj'} \cdots R_{nn'} \chi'_{i'j' \ldots n'}.
$$
If $\hat{R}$ represents a symmetry operation of the crystal, then the tensor describing a physical property of that crystal must be invariant under this transformation, meaning $\chi_{ij \ldots n} = \chi'_{ij \ldots n}$ when expressed in the same coordinate system after transformation. This leads to $\chi_{ij \ldots n} = \sum_{i'j'\ldots n'} R_{ii'} R_{jj'} \cdots R_{nn'} \chi_{i'j' \ldots n'}$.

### 1.3.2 Parity Transformations of Tensors

Tensors can be classified by their rank and their behaviour under spatial inversion ($\hat{I}$) and time reversal ($\hat{T}$).
-   **Rank:** Even rank tensors include scalars (rank 0, $\chi$), second-rank tensors ($\chi_{ij}$), fourth-rank tensors ($\chi_{ijkl}$), etc. These are denoted with 'g' (German: gerade = even). Odd rank tensors include vectors (rank 1, $\chi_i$), third-rank tensors ($\chi_{ijk}$), etc. These are denoted with 'u' (German: ungerade = odd).

-   **Spatial Inversion (Parity):**
    -   **Polar tensors** transform like corresponding products of coordinates. A polar tensor of rank $n$ transforms as $\chi'_{ijk...} = (-1)^n \det(\hat{I}) \sum R_{ii'} \dots \chi_{i'j'k'..}$ where for pure inversion $R_{ii'} = -\delta_{ii'}$, $\det(\hat{I}) = (-1)^3 = -1$ (if it is just inversion $r \to -r$). However, the simpler rule for tensor components under $\mathbf{r} \to -\mathbf{r}$ is that each index effectively gets a minus sign.
        A polar tensor of rank $n$ transforms as $\chi'_{ijk...} = (-1)^n \chi_{ijk...}$ under inversion $x_i \to -x_i$.
    -   **Axial tensors** (or pseudotensors) acquire an additional sign change compared to polar tensors of the same rank, effectively transforming as $\chi'_{ijk...} = (-1)^{n+1} \chi_{ijk...}$ under inversion.
    The electric field $\mathbf{E}$ is a polar vector (rank 1, odd, polar: $u,p$). The magnetic induction $\mathbf{B}$ is an axial vector (pseudovector) (rank 1, odd, axial: $u,a$). Polarisation $\mathbf{P}$ is polar ($u,p$). Magnetisation $\mathbf{M}$ is axial ($u,a$). 

-   **Time Reversal:**
    -   **i-type tensors** (invariant) do not change sign under time reversal $\hat{T}$.
    -   **c-type tensors** (changing) change sign under time reversal $\hat{T}$.
    Electric field $\mathbf{E}$ is i-type ($\hat{T}\mathbf{E}=\mathbf{E}$). Magnetic field $\mathbf{H}$ (and $\mathbf{B}, \mathbf{M}$) are c-type ($\hat{T}\mathbf{H}=-\mathbf{H}$).

Multiplication rules for these symmetries:
-   Rank: odd $\times$ odd = even; even $\times$ even = even; odd $\times$ even = odd.
-   Spatial Parity: polar $\times$ polar = polar; axial $\times$ axial = polar; polar $\times$ axial = axial.
-   Temporal Parity: i-type $\times$ i-type = i-type; c-type $\times$ c-type = i-type; i-type $\times$ c-type = c-type.

Example: Piezoelectric effect $\underbrace{P_i}_{(u,p,i)} = \sum_{jk} \underbrace{Q_{ijk}}_{(u,p,i)} \underbrace{T_{jk}}_{(g,p,i)}$. (Stress $T_{jk}$ is rank 2, polar, i-type).
Example: Piezomagnetic effect $\underbrace{M_i}_{(u,a,c)} = \sum_{jk} \underbrace{Q_{ijk}}_{(u,a,c)} \underbrace{T_{jk}}_{(g,p,i)}$.

**Faraday effect example:**
The induced polarisation at frequency $\omega$ due to an applied static magnetic field $\mathbf{H}(0)$ and an optical electric field $\mathbf{E}(\omega)$ is:
$$
P_i(\omega) = \sum_{jk} F_{ijk}(\omega) H_j(0) E_k(\omega)
$$
- $P_i(\omega)$ is $(u,p,i)$ under spatial inversion and "true" time reversal (ignoring frequency complex conjugation for a moment).
- $H_j(0)$ is $(u,a,c)$.
- $E_k(\omega)$ is $(u,p,i)$.
A naive application of multiplication rules for the tensor $F_{ijk}$ would suggest its spatial parity is $p \times a \times p = a$ (axial) and temporal parity $i \times c \times i = c$ (c-type).
However, for frequency-dependent phenomena, one must consider the effect of time reversal on complex quantities. For real fields $E(t)$, $\mathcal{F}\{\hat{T}E(t)\} = \mathcal{F}\{E(-t)\} = E^*(\omega)$. So $\hat{T}E_k(\omega) = E_k^*(\omega)$. Similarly $\hat{T}P_i(\omega) = P_i^*(\omega)$. The static field $\hat{T}H_j(0) = -H_j(0)$.
The relation $P_i(\omega) = \sum F_{ijk} H_j(0) E_k(\omega)$ must be invariant if the physics is T-symmetric.
However, the tensor $F_{ijk}$ itself has specific properties. If we assume the underlying microscopic processes are T-symmetric (without the external B-field), the Onsager relations (or similar microscopic derivations) often show that magneto-optical coefficients like $F_{ijk}$ are i-type. This is because the material itself does not break T-symmetry; the external static field $\mathbf{H}(0)$ is the T-symmetry breaking agent for the overall phenomenon. The Faraday effect *phenomenon* is non-reciprocal and breaks T-symmetry for light propagation, but the material tensor $F_{ijk}$ describing the response can be classified as i-type according to standard conventions for linear response theory in the presence of external fields. The example derivation shown involving $F_{ijk}^* = -F_{ijk}$ (purely imaginary) implies $F_{ijk}$ is i-type by cancelling out the sign changes. This makes the Faraday tensor $F_{ijk}$ an i-type tensor. (It is indeed an axial i-tensor of third rank). The Faraday effect itself is non-reciprocal.

---
## 1.4 Symmetry Groups
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=14&selection=2,0,2,19| ]]

**A symmetry group of an object (such as a crystal) is the set of all symmetry operations that leave the object invariant.** These operations form a mathematical group. Symmetry operations include rotations, inversions, reflections, and their combinations (point group operations), and for crystalline solids, translations (leading to space groups). For magnetic materials, time reversal is also included.

A useful notation to describe symmetry operations:
-   $\pm n_a$: $n$-fold rotation about axis $a$, with $(+)$ for proper rotation, $(-)$ sometimes indicating an additional operation or if it's a principal axis.
-   $\underline{n}_a$: Rotation combined with time reversal.
-   $\overline{n}_a$: Rotoinversion (rotation followed by inversion). $\overline{1}$ is inversion. $\overline{2}$ is reflection $m_a$ in a plane perpendicular to axis $a$.
-   $m_a$: Reflection in a plane perpendicular to axis $a$.
-   $N(\dots)$: $N$ symmetry operations of the type in brackets. For instance, $3(2_{\perp})$ means three 2-fold rotation axes perpendicular to a principal reference axis.

![Attachments/Notes/Crystal Optics in Intense Light Fields/1 Macroscopic Description of Crystal Optical Effects/Script (Unofficial) 3.webp|700](/img/user/Attachments/Notes/Crystal%20Optics%20in%20Intense%20Light%20Fields/1%20Macroscopic%20Description%20of%20Crystal%20Optical%20Effects/Script%20(Unofficial)%203.webp)
![Attachments/Notes/Crystal Optics in Intense Light Fields/1 Macroscopic Description of Crystal Optical Effects/Script (Unofficial) 4.webp|700](/img/user/Attachments/Notes/Crystal%20Optics%20in%20Intense%20Light%20Fields/1%20Macroscopic%20Description%20of%20Crystal%20Optical%20Effects/Script%20(Unofficial)%204.webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=15&rect=207,671,319,759| ]]

### 1.4.1 Number of Symmetry Groups

-   **Rotations only:** Considering only proper rotations (relevant to properties like optical activity not sensitive to inversion) leads to 11 Laue groups in crystallography. Combining these leads to point groups. Example $D_6$ (Schönflies) or $622$ (Hermann-Mauguin) describes the rotational symmetry of a hexagonal lattice.
-   **Rotations with Inversion (Crystallographic Point Groups):** Adding inversion and reflections to rotations results in the 32 crystallographic point groups. These describe the symmetry of crystal morphology and most non-magnetic physical properties. Including translations leads to 230 space groups.
-   **Rotations with Inversion and Time Reversal (Magnetic Point Groups):** Including time reversal as a possible symmetry operation (for magnetically ordered crystals or properties sensitive to magnetic order) leads to 122 magnetic point groups (Shubnikov groups) and 1651 magnetic space groups.

---
## 1.5 Obtaining Tensor Components
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=15&selection=134,0,134,31| ]]

This section discusses determining the non-zero and independent components of a material tensor based on crystal symmetry.

### 1.5.1 Analytical Approach

The tensor components must satisfy $\chi_{ijk...} = \sum_{i'j'k'...} R_{ii'}R_{jj'}R_{kk'...} \chi_{i'j'k'...}$ for every symmetry operation $\hat{R}$ in the crystal's point group. This imposes a set of linear equations on the tensor components.
Example: Dielectric tensor $\varepsilon_{ij}$ (rank-2, (g,p,i) type) for a crystal with $C_3$ rotational symmetry about $z$ (a $120^\circ$ rotation).
The rotation matrix for $R_z(120^\circ)$ is:
$$
\hat{R}=\begin{pmatrix} -1/2 & \sqrt{3}/2 & 0 \\ -\sqrt{3}/2 & -1/2 & 0 \\ 0 & 0 & 1 \end{pmatrix}.
$$
The condition $\varepsilon_{ij} = \sum_{i'j'} R_{ii'} R_{jj'} \varepsilon_{i'j'}$ (since $\varepsilon'=\varepsilon$ in the same coordinate system after the object is rotated back) is applied.
For example, for $\varepsilon_{31}$:
$\varepsilon_{31} = R_{33}R_{11}\varepsilon_{31} + R_{33}R_{12}\varepsilon_{32} = 1 \cdot (-1/2)\varepsilon_{31} + 1 \cdot (\sqrt{3}/2)\varepsilon_{32}$.
$(3/2)\varepsilon_{31} = (\sqrt{3}/2)\varepsilon_{32}$.
For $\varepsilon_{32}$:
$\varepsilon_{32} = R_{33}R_{21}\varepsilon_{31} + R_{33}R_{22}\varepsilon_{32} = 1 \cdot (-\sqrt{3}/2)\varepsilon_{31} + 1 \cdot (-1/2)\varepsilon_{32}$.
$(3/2)\varepsilon_{32} = (-\sqrt{3}/2)\varepsilon_{31}$.
Solving these yields $\varepsilon_{31}=\varepsilon_{32}=0$. Similarly $\varepsilon_{13}=\varepsilon_{23}=0$. Other relations like $\varepsilon_{11}=\varepsilon_{22}$ and $\varepsilon_{12}=-\varepsilon_{21}$ would also emerge from $C_3$ symmetry. If $\varepsilon_{ij}$ is also symmetric ($\varepsilon_{12}=\varepsilon_{21}$), then $\varepsilon_{12}=\varepsilon_{21}=0$.

**Acquiring Tensor Components from Tables**
Reference tables (like Birss) provide pre-calculated forms of tensors for each symmetry group.
1.  **Determine the symmetry group** of the crystal (for instance, from its Laue class, point group, or magnetic point group). For the 2D triangular lattice example (which belongs to 3D point group $\overline{6}m2 \equiv D_{3h}$ if mirror plane $\perp C_3$ axis is included), the symmetry operations are listed.
2.  **Determine the tensor type** (rank, spatial parity, time-reversal parity). Dielectric tensor $\varepsilon_{ij}$ is rank-2, (g,p,i).
3.  **Find the set of allowed non-zero components** from the tables for that symmetry group and tensor type.
4.  **Look up the specific form.** For $D_{3h}$ and a symmetric polar i-tensor of rank 2, $\varepsilon_{xx}=\varepsilon_{yy} \neq \varepsilon_{zz}$, all off-diagonal elements $\varepsilon_{ij}=0$ (for $i \neq j$).
5.  **Reassign axes** if the conventional coordinate system for the tables differs from the chosen lab/crystal system.

---
## 1.6 Beyond Group Theory
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=17&selection=192,0,192,23| ]]

Symmetry operations (group theory) determine which tensor components _can_ be non-zero. Additional physical considerations or intrinsic symmetries of the specific physical process can impose further restrictions ("particularisation") or relations between these allowed components.

Example: Second Harmonic Generation (SHG), $P_i(2\omega) = \sum_{jk} \varepsilon_0 \chi_{ijk}^{(2)} E_j(\omega) E_k(\omega)$.
The tensor $\chi_{ijk}^{(2)}$ is rank-3, (u,p,i). For a crystal with $622 \equiv D_6$ symmetry, group theory (Birss, set $P_3$) might allow:
$$
\chi_{xyz}=-\chi_{yxz}, \quad \chi_{xzy}=-\chi_{yzx}, \quad \chi_{zxy}=-\chi_{zyx}, \quad \text{and their cyclic permutations.}
$$
(Actual non-zero components for $D_6$ are $\chi_{xyz}=-\chi_{yxz}$ and its permutations like $\chi_{yzx}=-\chi_{xzy}$ etc., but only if certain conventions for axes are used. $D_6$ is centrosymmetric if it's $6/mmm$, but $622$ itself is non-centrosymmetric, so $\chi^{(2)}$ can be non-zero).
If the two input fields $E_j(\omega)$ and $E_k(\omega)$ originate from the same beam (degenerate frequencies), they are indistinguishable. This implies an **intrinsic permutation symmetry** for the tensor: $\chi_{ijk}^{(2)} = \chi_{ikj}^{(2)}$ (the last two indices can be swapped).
Consider:
$$
P_z(2\omega) \sim \chi_{zxy}^{(2)} E_x(\omega)E_y(\omega) \quad \text{and} \quad P_z(2\omega) \sim \chi_{zyx}^{(2)} E_y(\omega)E_x(\omega).
$$
Since $E_x(\omega)E_y(\omega) = E_y(\omega)E_x(\omega)$, for the physics to be consistent, we must have $\chi_{zxy}^{(2)}=\chi_{zyx}^{(2)}$. If group theory for $D_6$ (assuming this is the relevant non-centrosymmetric group) gives $\chi_{zxy}=-\chi_{zyx}$, then combined with intrinsic permutation symmetry, this implies $\chi_{zxy} = -\chi_{zxy} \implies 2\chi_{zxy}=0 \implies \chi_{zxy}=0$. So some components allowed by pure point group symmetry might vanish due to the physics of SHG.

If the two incoming waves have different frequencies $\omega_1, \omega_2$ (Sum Frequency Generation, SFG):
$$
P_i(\omega_1+\omega_2) \sim \sum_{jk} \chi_{ijk}^{(2)}(\omega_1+\omega_2; \omega_1, \omega_2) E_j(\omega_1) E_k(\omega_2),
$$
then the fields $E_j(\omega_1)$ and $E_k(\omega_2)$ are distinguishable, so the intrinsic permutation symmetry $\chi_{ijk}^{(2)}=\chi_{ikj}^{(2)}$ generally does not apply (unless by coincidence or if further symmetry restricts it).

---