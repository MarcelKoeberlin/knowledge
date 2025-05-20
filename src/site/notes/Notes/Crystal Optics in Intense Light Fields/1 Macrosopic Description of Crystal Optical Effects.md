---
{"dg-publish":true,"permalink":"/notes/crystal-optics-in-intense-light-fields/1-macrosopic-description-of-crystal-optical-effects/","hide":"true","updated":"2025-05-14T21:12:47.000+02:00"}
---

Jump back to ==[[Notes/Crystal Optics in Intense Light Fields/Crystal Optics in Intense Light Fields#Table of Contents\|chapter selection]]==.

---
**Table of Contents**

- [[Notes/Crystal Optics in Intense Light Fields/1 Macrosopic Description of Crystal Optical Effects#1.1 Symmetry Principles\|1.1 Symmetry Principles]]
- [[Notes/Crystal Optics in Intense Light Fields/1 Macrosopic Description of Crystal Optical Effects#1.2 Group Theory and Symmetry Operations in Crystals\|1.2 Group Theory and Symmetry Operations in Crystals]]
- [[Notes/Crystal Optics in Intense Light Fields/1 Macrosopic Description of Crystal Optical Effects#1.3 Coordinate Transformations\|1.3 Coordinate Transformations]]
- [[Notes/Crystal Optics in Intense Light Fields/1 Macrosopic Description of Crystal Optical Effects#1.4 Symmetry Groups\|1.4 Symmetry Groups]]
- [[Notes/Crystal Optics in Intense Light Fields/1 Macrosopic Description of Crystal Optical Effects#1.5 Obtaining Tensor Components\|1.5 Obtaining Tensor Components]]
- [[Notes/Crystal Optics in Intense Light Fields/1 Macrosopic Description of Crystal Optical Effects#1.6 Beyond Group Theory\|1.6 Beyond Group Theory]]

---
# 1 Macrosopic Description of Crystal Optical Effects
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=7&selection=0,0,1,14|•]]

There are two approaches to describe the physical properties and behaviour within macroscopic crystals: the macroscopic and the microscopic approach.

In the **macroscopic approach** physical quantities are related to each other via tensors. As an example, consider the piezomagnetic effect, which is described by
$$
M_{i}=\underbrace{Q_{i j k}}_{\text {tensor }} \cdot T_{j k},
$$
where  the magnetisation $M_{i}$ is related to the stress or mechanical deformation $T_{j k}$ via the piezomagnetic tensor $Q_{i j k}$. The tensor serves as a parametrisation of the material's response and the underlying physics within the macroscopic framework. All material properties and physical relations are hidden within the tensor $Q_{i j k}$.

The **microscopic approach** arises from the need to explain the relations hidden in $Q_{i j k}.$ The individual tensor elements are mainly derived from quantum mechanics. For the piezomagnetic tensor as above:
$$
Q_{i j k}=\left\langle n_{3}\right| M_{i j}\left|n_{2}\right\rangle\left\langle n_{2}\right| F_{k}\left|n_{1}\right\rangle.
$$

Both of these approaches can be utilised independently. Even without any knowledge about the microscopy of the system, fundamental statements about the macroscopic behaviour are possible.

---
## 1.1 Symmetry Principles
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=7&selection=93,0,93,23|•]]

Symmetry considerations alone constrain the form of the tensor and allow fundamental statements about their behaviour. The most fundamental statements, relating physics and symmetry, is the _von Neumann Principle_:

_The set of symmetry elements of any physical property of a crystal must include the set of symmetry elements of the crystal's point group._

This statement expresses, that the symmetry of a material must reflect in the physical properties of it. Consider again as example the piezomagnetic effect in a cubic crystal: The cubic characteristic of the crystal results in a cubic piezomagnetic effect, and a rotation by $\frac{\pi}{2}$ does not affect the physical properties of the system. Charge separation induced by heat will never happen in a crystal with cubic symmetry. Similarly, charge separation within a cubic material will not happen under the influence of heat:


![Attachments/Notes/Crystal Optics in Intense Light Fields/1 Macrosopic Description of Crystal Optical Effects/Script (Unofficial).webp|700](/img/user/Attachments/Notes/Crystal%20Optics%20in%20Intense%20Light%20Fields/1%20Macrosopic%20Description%20of%20Crystal%20Optical%20Effects/Script%20(Unofficial).webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=8&rect=241,699,410,761|•]]

As a direct consequence, the tensor $Q_{i j k}$ must reflect the symmetry, structure and order of the underlying material, yielding the possibility to use $Q_{i j k}$ as a structural probe.

Anyhow, one has to be careful with the "is a subset of" in the von Neumann principle. The symmetry of the measured physical property may be, and most likely is, higher than the symmetry of the underlying material. As an example, consider a temperature measurement, which is equal in all directions, translations or rotations. This suggests highest - infinite -- symmetry of the material, although this may have any arbitrary lower symmetry. Thus, when using $Q_{i j k}$ as a structural probe, one has to choose the measured quantity wisely: It just gives a lower limit for the highest symmetry of the material

---
## 1.2 Group Theory and Symmetry Operations in Crystals
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=8&selection=68,1,68,16|•]] [[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=8&selection=77,0,77,35|•]]
Group theory supplies the mathematical apparatus and formalism to describe symmetries and the associated physical relations $\left(Q_{i j k}\right)$. In fact, it allows calculations with sets of symmetry operations. Symmetry operations are subsets of general transformations on a structure whose results are indistinguishable from the original. An equilateral triangle rotated by $60^{\circ}$ can not be distinguished from the original (unless one assigns labels to the corners). The $60^{\circ}$ rotations therefore is a symmetry operation for the triangle. All symmetry operations are either translations, rotations or parity operations or they may be constructed from these basic operations.

### 1.2.1 Translations

If a physical system is not affected by a spatial translation of distance $R$, the system is called translationally symmetric. Consider the next figure, such that symmetries in a crystal may be considered along a lattice vector over several unit cells of the lattice (red, trivial translation), or over a sub unit cell distance (green, non-trivial). 

![Attachments/Notes/Crystal Optics in Intense Light Fields/1 Macrosopic Description of Crystal Optical Effects/Script (Unofficial) 1.webp|700](/img/user/Attachments/Notes/Crystal%20Optics%20in%20Intense%20Light%20Fields/1%20Macrosopic%20Description%20of%20Crystal%20Optical%20Effects/Script%20(Unofficial)%201.webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=9&rect=179,648,373,760|•]]

The mathematical operation corresponds to
$$
\mathbf{r} \rightarrow \mathbf{R}+\mathbf{r},
$$
where $\mathbf{R}$ is the translation vector. For the trivial case, $\mathbf{R}$ is a multiple of the lattice vectors $\mathbf{R}=m \mathbf{a}+n \mathbf{b}$. In optics, translational symmetries are often omitted, as $|\mathbf{R}| \ll \lambda.$ This means that the change of the electric field across the unit cell is negligible. 

### 1.2.2 Rotations

Symmetries not including translations are called point symmetries. The major group of point symmetry operations are rotations by a fraction of $2 \pi:$
$$
\frac{2 \pi}{n}=\frac{360^{\circ}}{n}, \quad n=1,2,3,4,6 .
$$

Note, that in crystals for $n$ only the values above are valid. For values different from these, no symmetry is possible, which can be mathematically proven. 

### 1.2.3 Parity Operations

In general, parity operations describe symmetries with only two valid eigenstates.

**Spatial Inversion**

Intuitively, this operation corresponds to the reflection in a point in space. As already suggested by the name, this operation inverts space:
$$
\hat{I}: \mathbf{r} \rightarrow-\mathbf{r}.
$$

Applying this operator twice leads to the identity operation $\hat{I}^{2}=\mathbb{1}$, leading to the two eigenvalues $\lambda= \pm 1$. We denote the two eigenstates with two functions $f_{+}(\mathbf{r})$ and $f_{-}(\mathbf{r}).$ Then, by defining 
$$
f_{ \pm}(\mathbf{r})=\frac{1}{2}(f(\mathbf{r}) \pm f(-\mathbf{r})),
$$
we can write
$$
f(\mathbf{r})=f_{+}(\mathbf{r})+f_{-}(\mathbf{r}).
$$
It is then easy to see that those two functions behave as
$$

f_{+}(-\mathbf{r}) \equiv+f_{+}(\mathbf{r})\quad\text{and}\quad f_{-}(-\mathbf{r}) \equiv-f_{-}(\mathbf{r}).
$$
To show that they are indeed eigenfunctions:
$$
\begin{aligned}
& \hat{I} f_{+}(\mathbf{r})=f_{+}(-\mathbf{r})\equiv f_+(\mathbf{r})\quad\text{and}\quad
\hat{I} f_{-}(\mathbf{r})=f_{-}(\mathbf{-r})=-f_{-}(\mathbf{r}).
\end{aligned}
$$

**Time Reversal**

Similar to spatial inversion, temporal inversion or time reversal inverts the temporal coordinate:
$$
\hat{T}: \mathbf{T} \rightarrow-\mathbf{t}, \quad \hat{T}^{2}=\pm\mathbb{1}, \quad\text{+ for bosons, - for fermions.}
$$

Consequently, this operations also has the two eigenvalues $\lambda= \pm 1$ with analogous eigenstates $f_{ \pm}(t)$. **Considering crystalline materials, temporal inversion can be understood as spin reversal**. The intrinsic magnetic field of atoms is a result of spin alignment. The spin itself can be understood as a current resulting from circular movement of the electron. Therefore time reversal inverts the magnetic field:

![Attachments/Notes/Crystal Optics in Intense Light Fields/1 Macrosopic Description of Crystal Optical Effects/Script (Unofficial) 2.webp|700](/img/user/Attachments/Notes/Crystal%20Optics%20in%20Intense%20Light%20Fields/1%20Macrosopic%20Description%20of%20Crystal%20Optical%20Effects/Script%20(Unofficial)%202.webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=10&rect=242,696,409,763|•]]

---
## 1.3 Coordinate Transformations
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=10&selection=122,0,122,30|•]]

In contrast to symmetry operations, which moves the structure with respect to the coordinate system, a coordinate transformation $\hat{R}$ transforms the system from an initial coordinate system $K^{\prime}$ to a final coordinate system $K:$
$$
K=\hat{R} \cdot K^{\prime}.
$$
The transformation operation is usually described by a matrix operator $\hat{R}$, which describes the relation between the basis of $K^{\prime}$ and $K$. For our purposes, we consider only orthogonal (unitary) transformations $\left(R^{T}=R^{-1}\right)$, which conserve the length during operation. Therefore, $\hat{R}$ describes rotations, inversions and time reversal. 

Coordinate transformations are related to symmetry operations in the sense, that they perform the same action on the coordinate system instead of the structure. They are usually annotated with the same letters as the corresponding symmetry operation. Attention has to be paid, as not only the coordinate system is affected by the operation $\hat{R}$ but also the physical value, which is connected to any point in $K,$ respectively $K^{\prime}$. Some examples of such transformations are listed below:
- Rotation around z-axis:
	$$\hat{R}_{\phi, z}=\left(\begin{array}{ccc}\cos \phi & \sin \phi & 0 \\-\sin \phi & \cos \phi & 0 \\0 & 0 & 1\end{array}\right)\quad\text{in x,y,z real space}$$
- Inversion:
	$$\hat{I}=\left(\begin{array}{ccc}-1 & 0 & 0 \\0 & -1 & 0 \\0 & 0 & -1\end{array}\right)=-\delta_{ij}\quad\text{in x,y,z real space}$$
- Time-reversal:
	$$\hat{T}=\left(\begin{array}{cc}0 & 1 \\-1 & 0\end{array}\right)\quad \text{on the spin basis}\quad |\uparrow\rangle \quad\text{and}\quad |\downarrow\rangle$$

### 1.3.1 General Transformation

A general transformation of a physical system may be written as
$$
\mathbf{r}=\hat{R} \mathbf{r}^{\prime} \quad \iff \quad r_{i}=\hat{R}_{i j} r_{j}^{\prime} .
$$

The first equation describes the operation in vector notation whereas the latter one uses index notation. Similarly, it is possible to transform the tensor relations of physical properties. Referring to the example about the piezomagnetic effect, the respective rank-3-tensor transforms as
$$
Q_{i j k}=\hat{R}_{i i^{\prime}} \hat{R}_{j j^{\prime}} \hat{R}_{k k^{\prime}} \hat{Q}_{i^{\prime} j^{\prime} k^{\prime}}^{\prime}.
$$

For a general rank-n-tensor the equation above looks like
$$
\chi_{i j \ldots n}=\hat{R}_{i i^{\prime}} \hat{R}_{j j^{\prime}} \cdots \hat{R}_{n n^{\prime}} \hat{\chi}_{i^{\prime} j^{\prime} \ldots n^{\prime}}^{\prime}.
$$

This notation may be used to classify the tensors, which relate physical quantities. 

### 1.3.2 Parity Transformations 

We additionally identify two groups of tensors from the rank of their tensors: Even and odd rank. These are labelled with $\mathrm{g}$ for even (german: gerade), and $\mathrm{u}$ for odd (uneven, german: ungerade):
$$
\begin{aligned}
\chi_{i j}, \chi_{i j k l}, \ldots &\quad\text {even} & \rightarrow &\quad\mathrm{g,} \\
\chi_{i}, \chi_{i j k}, \ldots &\quad\text {odd} & \rightarrow&\quad \mathrm{u} .
\end{aligned}
$$

For **spatial inversion,** writing an arbitrary tensor in index notation yields two possible results

$$
\left.\begin{array}{rl}
\hat{I} \chi_{i j \ldots n}^{+} & =\left(-\delta_{i i^{\prime}}\right)\left(-\delta_{j j^{\prime}}\right) \cdots\left(-\delta_{n^{\prime}}\right) \chi_{i^{\prime} j^{\prime} \ldots n^{\prime}}^{\prime} \\
& =(-1)^n \chi_{i^{\prime} j^{\prime} \ldots n^{\prime}}^{\prime}
\end{array}\right\} \text { polar }
$$
and
$$
\left.\begin{array}{rl}
\hat{I} \chi_{i j \ldots n}^{-} & =-\left(-\delta_{i i^{\prime}}\right)\left(-\delta_{j j^{\prime}}\right) \cdots\left(-\delta_{n^{\prime}}\right) \chi_{i^{\prime} j^{\prime} \ldots n^{\prime}}^{\prime} \\
& =(-1)^{n+1} \chi_{i^{\prime} j^{\prime} \ldots n^{\prime}}^{\prime}
\end{array}\right\} \text { axial .}
$$
Quantities transforming in the same way as spatial coordinates are said to be polar, whereas quantities showing the opposite behaviour are called axial. An example for a polar tensor is the electric field $(\hat{I} \mathbf{E}=-\mathbf{E})$, whereas the magnetic field is an axial quantity $(\hat{I} \mathbf{H}=\mathbf{H})$. 

Similarly, one classifies vectors as i-type if they are invariant under **temporal inversion** and as c-type, when they change sign.
$$
\begin{array}{ll}
\hat{T} \chi_{i j \ldots n}^{+}=\chi_{i^{\prime} j^{\prime} \ldots n^{\prime}}^{\prime} & \text {invariant under} \quad\hat{T}: \text { i-type,} \\
\hat{T} \chi_{i j \ldots n}^{\bar{j}}=-\chi_{i^{\prime} j^{\prime} \ldots n^{\prime}}^{\prime} & \text {changing under}\quad\hat{T}: \text { c-type.}
\end{array}
$$

Electric and magnetic field may also serve as examples for i- and c-type tensors:
$$
\begin{array}{ll}
\hat{T} \mathbf{E}=\mathbf{E} & \implies \text {Electric field is i-type,} \\
\hat{T} \mathbf{H}=-\mathbf{H} & \implies \text {Magnetic field is c-type.}
\end{array}
$$

Generally, the multiplication of two tensors of equal type yield a polar tensor, different tensor type leads to an axial product. Similarly, it works for temporal inversion: The multiplication of two tensors of equal temporal type results in an invariant i-type product, and the multiplication of two tensors of different type results in a c-type tensor. Again similarly it works for odd and even tensors:
- Even and odd tensors: even/odd $\times$ even/odd = even, but even/odd $\times$ odd/even = odd.
- Spatial inversion: polar/axial $\times$ polar/axial = polar, but polar/axial $\times$ axial/polar = axial.
- Temporal inversion: i/c $\times$ i/c = i, but i/c $\times$ c/i = c.

As an example, consider the piezoelectric effect: The polarisation $P_{i}$ is an add, polar and invariant under temporal inversion tensor, and therefore $\left(\mathrm{u}, \mathrm{p}, \mathrm{i}\right).$ The deformation $T_{i j}$ is even, polar, and invariant under temporal inversion, therefore $\left(\mathrm{g}, \mathrm{p}, \mathrm{i}\right).$ With the rules above, the piezoelectric tensor $Q_{i j k}$ must be uneven, polar and i-type $\left(\mathrm{u}, \mathrm{p}, \mathrm{i}\right).$ The same can be applied analogously to the piezomagnetic effect:
$$
\begin{array}{ll}
\text {Piezoelectric effect: } & \underbrace{P_{i}}_{(u, p, i)}=\underbrace{\tilde{Q}_{i j k}}_{(u, p, i)} \cdot \underbrace{T_{j k}}_{(g, p, i)} \\
\text {Piezomagnetic effect: } & \underbrace{M_{i}}_{(u, a, c)}=\underbrace{Q_{i j k}}_{(u, a, c)} \cdot \underbrace{T_{j k}}_{(g, p, i)}
\end{array}
$$

**Careful: Faraday effect**

Although the above rules sound fairly simple, special attention has to be paid to grasp all dependencies hidden within the participating tensors and quantities. As an example, we will discuss the Faraday effect. The Faraday effect describes the rotation of the polarisation of an electromagnetic wave within a material which is subjected to a static magnetic field. Therefore the general dependence may be written as
$$
\underbrace{P_{i}}_{(u, p, i)}(\omega)=\underbrace{F_{i j k}}_{(u, a, c) ?} \cdot \underbrace{H_{j}}_{(u, a, c)}(0) \cdot \underbrace{E_{k}}_{(u, p, i)}(\omega)
$$

As we established before the polarisation $P_{i}$ is of type $\left(\mathrm{u}, \mathrm{p}, \mathrm{i}\right)$, the magnetic field $H_{j}$ of type $\left(\mathrm{u}, \mathrm{a}, \mathrm{c}\right),$ while the electric field is of type $\left(\mathrm{u}, \mathrm{p}, \mathrm{i}\right).$ Therefore one would guess, that the tensor $F_{i j k}$ is of type $\left(\mathrm{u}, \mathrm{a}, \mathrm{c}\right).$ **This is wrong:** We forgot to take the frequency dependence of the electromagnetic wave into account. The thorough analysis yields the correct result:

By applying temporal inversion to the (frequency dependent) electric field, one finds, that the electromagnetic wave yields its complex conjugate
$$
\begin{aligned}
&\mathbf{E}(\omega)=\mathbf{E}_{0} e^{-i \omega t}, \\ 
\hat{T} &\mathbf{E}(\omega)=\mathbf{E_{0}} e^{-i \omega(-t)}=\mathbf{E^{*}}(\omega)=\mathbf{E}(-\omega).
\end{aligned}
$$
The same applies to the polarisation. Thus applying temporal inversion to equation (1.3) and taking the complex conjugate leads to
$$
\begin{aligned}
\hat{T} P_{i}(\omega) & =\hat{T} F_{i j k} \cdot \hat{T} H_{j}(0) \cdot \hat{T} E_{k}(\omega) \\
\iff P_{i}^{*}(\omega) & =\hat{T} F_{i j k} \cdot-H_{j}(0) \cdot E_{k}^{*}(\omega) \\
\implies P_{i}(\omega) & =-\hat{T} F_{i j k}^{*} \cdot H_{j}(0) \cdot E_{k}(\omega)
\end{aligned}
$$

The last line leaves us to figure out the complex conjugate of the tensor $F_{i j k}$. From physics we know, that $F_{i j k}$ parameterise the movement of the crystal electrons in the electromagnetic light field and in the applied static field $H$. The electrons are exposed to a Lorentz Force,
$$
\mathbf{F}=-e(\mathbf{E}+\mathbf{v} \times \mathbf{B}),
$$ 
which is parameterised by the tensor. The oscillating electric field leads to electric dipole oscillations, which are described by
$$
\mathbf{p}(t)=-e \mathbf{r}(t)=p_{0} e^{-i \omega t}
$$

Then, the velocity is deduced by inversion and differentiation:
$$
\mathbf{v}=\dot{\mathbf{r}}=-\frac{1}{e} \dot{\mathbf{p}}=-\frac{1}{e} \frac{d}{d t} \mathbf{p_{0}} e^{-i \omega t}=i \omega \frac{\mathbf{p}}{e}.
$$
Therefore, the velocity is purely imaginary and introduces a factor $i$ into $F_{i j k}$, from which we find, that $F_{i j k}$ is also purely imaginary: $F_{i j k}^{*}=-F_{i j k}$. Therefore, plugging this into the other equation yields
$$
P_{i}(\omega)=\hat{T} F_{i j k} \cdot H_{j}(0) \cdot E_{k}(\omega),
$$
and comparison reveals, that the tensor $F_{i j k}$ is invariant under temporal inversion:
$$
\implies -\hat{T} F_{i j k}^{*}=\hat{T} F_{i j k}=F_{i j k} \quad \implies F_{i j k}\quad\text{is i-type.}
$$

This astonishing result may be interpreted as the Faraday effect violating time reversal symmetry. The violation or symmetry breaking is a consequence of the external, static field $\mathbf{H}(0)$, **not** of the material, which may also be nonmagnetic (the Faraday effect may be observed also in fused silica $\mathrm{SiO}_{2}$ ). Therefore the Faraday effect is described by an i-tensor. In literature, the Faraday effect therefore also counts as a time reversal symmetry violating or reciprocal effect.

---
## 1.4 Symmetry Groups
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=14&selection=2,0,2,19|•]]


**A symmetry group of an object is the set of symmetry operations, that leave the system (so the crystal) invariant.** Symmetry operations are combinations of rotations, inversions, temporal reversal and, if considered, translations. Any combination of operations of the symmetry group yields also an element of this group.

A useful notation to describe a symmetry operation is the following, where each part of the notation denotes a property of the operation:

![Attachments/Notes/Crystal Optics in Intense Light Fields/1 Macrosopic Description of Crystal Optical Effects/Script (Unofficial) 3.webp](/img/user/Attachments/Notes/Crystal%20Optics%20in%20Intense%20Light%20Fields/1%20Macrosopic%20Description%20of%20Crystal%20Optical%20Effects/Script%20(Unofficial)%203.webp)

An example for a rotation would be the symmetry operation $\pm \underline{6}_{z}$. These are $60^{\circ}$-rotations in positive and negative direction around the $z$-axis combined with temporal inversion. Note, that the combination of rotations and temporal inversion may be a symmetry operation of the object although neither is one on its own. Similarly $\overline{2}_{x}$ denotes $180^{\circ}$ rotations around the $x$-axis with spatial inversion. The latter example corresponds to a mirror operation along the $y z$-plane $(\perp x)$, which may also be denoted by $m_{x}$.

Furthermore, for the axis of rotation, one may use $n_{\perp}$ which denotes a perpendicular axis with respect to a reference axis. The reference axis is usually chosen to be the axis with the highest symmetry.

Enclosing the notation introduced above in brackets preceded by a number $N(\ldots)$ means, that $N$ symmetry operations of this kinds are considered. The triangular lattice in two dimensions possesses $3180^{\circ}$-rotations along axes orthogonal to the vertical reference axis. The corresponding symmetry operations are abbreviated with $3\left(2_{\perp}\right)$:

![Attachments/Notes/Crystal Optics in Intense Light Fields/1 Macrosopic Description of Crystal Optical Effects/Script (Unofficial) 4.webp|700](/img/user/Attachments/Notes/Crystal%20Optics%20in%20Intense%20Light%20Fields/1%20Macrosopic%20Description%20of%20Crystal%20Optical%20Effects/Script%20(Unofficial)%204.webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=15&rect=207,671,319,759|•]]

### 1.4.1 Number of Symmetry Groups


**Rotations**

First of all, only rotations are considered. Considering rotations alone corresponds to  a conventional X-ray diffraction experiment, which is not sensitive to spatial or temporal inversion. Classically, rotations in crystallography are classified in 11 Laue-groups (not just 5 for $n=1,2,3,4,6$ as 3D-rotations have to be taken into account). Combining several Laue-groups may result in another symmetry group. The following symmetry operations and any combination of those leave the two dimensional hexagonal lattice invariant and therefore form the symmetry group of the lattice:
$$
\left\{1,2_{z}, 3\left(2_{x}\right), 3\left(2_{y}\right), \pm 3_{z}, \pm 6_{z}\right\} \equiv 622 \equiv D_{6}
$$

This group is also assigned the notation 622 (international- or Hermann-Mauguin-notation) or $D_{6}$ (Schönfliess, not as common).

**Rotations with Inversion**

Adding inversions to the rotations discussed above results in 32 crystallographic point groups and, when including translations, 230 space groups. These groups describe magnetically disordered systems.

**Rotations with Inversion and Time Reversal**

At last, one also considers time reversal which may be a symmetry operation for magnetically ordered crystals. This yields 122 magnetic point groups, which are also called Shubnikov-groups and 1651 magnetic space groups (including translations).

---
## 1.5 Obtaining Tensor Components
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=15&selection=134,0,134,31|•]]

This section is dedicated to the determination of tensor components used to describe physical relations. First, an analytical approach is discussed to acquire knowledge about the tensor. Afterwards, a more specific approach is introduced where the relations of tensor components may be looked up from reference tables.

### 1.5.1 Analytical Approach

To discuss the analytical approach, we will turn to the example of the dielectric shift, which is described by the dielectric tensor $\varepsilon_{i j}:$
$$
\mathbf{D}=\varepsilon_{0} \hat{\varepsilon} \mathbf{E} \quad \iff \quad D_{i}=\varepsilon_{0} \varepsilon_{i j} E_{j}.
$$

As both, the electric field $\mathbf{E}$ and the electric displacement field $\mathbf{D}$ are tensors of type $\left(\mathrm{u}, \mathrm{p}, \mathrm{i}\right),$ we already know, that the dielectric tensor $\varepsilon_{i j}$ must be of type $\left(\mathrm{g}, \mathrm{p}, \mathrm{i}\right).$ Furthermore, in three dimensions, the dielectric tensor corresponds to a $3 \times 3$-matrix with 9 components.

Considering the dielectric shift within a certain lattice helps us to deduce more information about $\varepsilon_{i j}$. The triangular lattice is invariant under a rotation $\hat{R}$ of $120^{\circ}$ 
$$
\hat{R}=\left(\begin{array}{ccc}
\cos 120^{\circ} & \sin 120^{\circ} & 0 \\
-\sin 120^{\circ} & \cos 120^{\circ} & 0 \\
0 & 0 & 1
\end{array}\right)=\left(\begin{array}{ccc}
-\frac{1}{2} & \frac{\sqrt{3}}{2} & 0 \\
-\frac{\sqrt{3}}{2} & -\frac{1}{2} & 0 \\
0 & 0 & 1
\end{array}\right),
$$
as can be seen here:

![Attachments/Notes/Crystal Optics in Intense Light Fields/1 Macrosopic Description of Crystal Optical Effects/Script (Unofficial) 5.webp|700](/img/user/Attachments/Notes/Crystal%20Optics%20in%20Intense%20Light%20Fields/1%20Macrosopic%20Description%20of%20Crystal%20Optical%20Effects/Script%20(Unofficial)%205.webp)[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=16&rect=164,645,486,760|•]]

Thus, this rotation $\hat{R}$ is a symmetry operation on the lattice and must leave the dielectric tensor unchanging. Therefore we may write as a coordinate transformation
$$
\varepsilon_{i j}=R_{i i^{\prime}} R_{j j^{\prime}} \varepsilon_{i^{\prime} j^{\prime}}^{\prime} \quad \text { with } \quad \varepsilon_{i j}=\varepsilon_{i^{\prime} j^{\prime}}^{\prime}.
$$

From these two conditions, we may calculate relations between the different tensor components which result in a linear system of equations left to solve. The elements $\varepsilon_{31}$ and $\varepsilon_{32}$ are given by
$$
\begin{aligned}
& \varepsilon_{31}=R_{3 i^{\prime}} R_{1 j^{\prime}} \varepsilon_{i^{\prime} j^{\prime}}^{\prime}=-\frac{1}{2} \varepsilon_{31}+\frac{\sqrt{3}}{2} \varepsilon_{32}, \\
& \varepsilon_{32}=R_{3 i^{\prime}} R_{2 j^{\prime}} \varepsilon_{i^{\prime} j^{\prime}}^{\prime}=-\frac{\sqrt{3}}{2} \varepsilon_{31}-\frac{1}{2} \varepsilon_{32}.
\end{aligned}
$$

This set of equation has only one solution, which is $\varepsilon_{31}=\varepsilon_{32}=0$. Similarly, information about the other tensor components can be found. Luckily, we do not have to do all these tedious calculations by ourselves as these relations can be found as tabulated data. 

**Acquiring Tensor Components from Tables**

To acquire the relations between the tensor components, one has to follow these steps:
1. **Determine the symmetry group of the system using Birss, tables 3 and 6:** Considering the triangular lattice from above, we find the symmetry operations
	$$\hat{O} \in\left\{1, \overline{2}_{z}, 3\left(2_{x}\right), 3\left(2_{y}\right), \pm 3_{z}, \pm \overline{6}_{z}\right\} \equiv \overline{6} m 2$$
	where the last equality denotes the corresponding symmetry group. In this example, time reversal was neglected.
2. **Determine the tensor type:** The dielectric tensor $\varepsilon_{i j}$ is a rank-2 $\left(\mathrm{g}, \mathrm{p}, \mathrm{i}\right)$ tensor.
3. **Determine the type of the set for the tensor components with Birss, tables 4 and 7:** $\left(\mathrm{g}, \mathrm{p}, \mathrm{i}\right)$ with symmetry $\overline{6} m 2 \Rightarrow P_{m}$, where $m$ denotes the rank. Therefore we find $P_{2}.$
4. **Look up the components in Birss, table 4:**
	$$P_{2} \rightarrow \varepsilon_{x x}=\varepsilon_{y y} \quad \varepsilon_{z z}, \varepsilon_{i j}=0 \text { for } i \neq j$$

	At this point one has to be careful with the abbreviated notation, as $x z(2)$ means $x z, z x$ and not $x z=z x!$ 
5. **Reassign the axes, if they are not the same as in Birss:** If we had chosen the $x$-axis to be vertical on the triangular lattice instead of the $z$-axis, then this reassignment would look like
	$$z \rightarrow x, x \rightarrow y, y \rightarrow z \Rightarrow P_{2}^{\text {reassign }}: \varepsilon_{y y}=\varepsilon_{z z} \quad \varepsilon_{x x}, \varepsilon_{i j}=0 \text { for } i \neq j$$

---
## 1.6 Beyond Group Theory
[[Notes/Crystal Optics in Intense Light Fields/PDFs/Script (Unofficial).pdf#page=17&selection=192,0,192,23|•]]

So far, we only looked at the symmetry and the related operations of a system. From now on, we will also include the physics of the system. Additional restrictions to the tensor components arise, resulting from physics. This is called 'particularisation'.

As an example consider second harmonic generation (SHG):
$$
P_{i}(2 \omega) \sim \chi_{i j k} E_{j}(\omega) E_{k}(\omega),
$$
where $P_{i}$ is the polarisation, $E_{j}$ and $E_{k}$ are the electric fields of two overlapping electromagnetic waves and $\chi_{i j k}$ is the electric susceptibility tensor. SHG may be understood as two photons of a light field with frequency $\omega$ being absorbed simultaneously and generating a new photon at frequency $2 \omega$.

The tensor $\chi_{i j k}$ is a rank- $3,\left(\mathrm{u}, \mathrm{p}, \mathrm{i}\right)$ tensor and the symmetry is assumed to be 622 . In Birss, we may look up the tensor components in the set $P_{3}.$ We find
$$
\chi_{x y z}=-\chi_{y x z}, \chi_{x z y}=-\chi_{y z x}, \chi_{z x y}=-\chi_{z y x}.
$$

Furthermore, consider the two cases
$$
\begin{array}{rl}
P_{z}(2 \omega) & \sim \chi_{z x y} E_{x}(\omega) E_{y}(\omega), \\
P_{z}(2 \omega) & \sim \chi_{z y x} E_{y}(\omega) E_{x}(\omega).
\end{array}
$$

These two cases are physically indistinguishable, as one may not differentiate which one of the two waves (x or y) arrives first. Therefore physics predicts $\chi_{z x y}=\chi_{z y x}.$ Together with the earlier result, this yields $\chi_{z x y}=\chi_{z y x}=0$.

If the two incoming waves have different frequencies, the original SHG equation is modified to
$$
P_{i}\left(\omega_{1}+\omega_{2}\right) \sim \chi_{i j k} E_{j}\left(\omega_{1}\right) E_{k}\left(\omega_{2}\right),
$$
such that the results is different, and $\chi_{z x y} \neq \chi_{z y x}$. This effect is called two photon sum frequency generation.

---