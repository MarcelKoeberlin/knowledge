---
{"dg-publish":true,"permalink":"/notes/ultrafast-laser-physics/8-q-switching/","hide":"true","updated":"2026-06-07T00:00:00.000+02:00"}
---

Jump back to ==[[Notes/Ultrafast Laser Physics/Ultrafast Laser Physics#Table of Contents|chapter selection]]==.

---
**Table of Contents**

[[Notes/Ultrafast Laser Physics/8 Q-Switching#8.1 Basic Idea of Q-Switching|8.1 Basic Idea of Q-Switching]]
[[Notes/Ultrafast Laser Physics/8 Q-Switching#8.2 Active Q-Switching|8.2 Active Q-Switching]]
[[Notes/Ultrafast Laser Physics/8 Q-Switching#8.3 Rate-Equation Picture|8.3 Rate-Equation Picture]]
[[Notes/Ultrafast Laser Physics/8 Q-Switching#8.4 Passive Q-Switching|8.4 Passive Q-Switching]]
[[Notes/Ultrafast Laser Physics/8 Q-Switching#8.5 Passively Q-Switched Microchip Lasers|8.5 Passively Q-Switched Microchip Lasers]]

---
# 8 Q-Switching
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf#page=392)

Q-switching is a method for producing short, energetic laser pulses by modulating the cavity quality factor $Q$. The gain medium is pumped while the resonator loss is high, so lasing is suppressed and energy accumulates in the inversion. When the loss is suddenly reduced, the stored energy is released in a pulse.

This is fundamentally different from modelocking. A Q-switched pulse is much longer than the cavity roundtrip time and does not require phase-locking many axial modes. A modelocked laser emits pulses once per roundtrip because its axial modes are phase locked.

Historically, Q-switching was a crucial route to high peak powers before femtosecond modelocked oscillators and chirped-pulse amplification became routine. For attosecond science, however, Q-switched lasers are not usually the waveform source: their pulses are too long and their optical phase is not controlled at the cycle level. They remain important as pump sources and in high-energy laser systems.

---
## 8.1 Basic Idea of Q-Switching
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf#page=392)

The quality factor of a resonator describes how slowly energy decays from the cavity. A high-$Q$ cavity has low loss and a long photon lifetime. A low-$Q$ cavity has high loss and a short photon lifetime.

In Q-switching one cycles through three stages:

1. **Hold-off:** the cavity loss is high, so the laser cannot reach threshold. The pump builds inversion in the gain medium.
2. **Switching:** the loss is rapidly reduced. The stored inversion is now far above threshold.
3. **Pulse emission:** the photon number grows explosively, drains the inversion, and emits a short pulse.

The pulse duration is typically nanoseconds, much shorter than the upper-state lifetime but still much longer than the cavity roundtrip time. The pulse energy can be large because the gain medium stores pump energy over many lifetimes or many pump cycles before releasing it.

This energy-storage picture is the reason Q-switching and modelocking should not be confused. Q-switching stores energy in the *gain medium* and releases it by changing the cavity loss. Modelocking stores energy in a circulating *pulse pattern* that repeats every roundtrip. The first is mainly a gain-depletion event; the second is mainly a phase-coherent steady state.

---
## 8.2 Active Q-Switching
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf#page=396)

In active Q-switching, an external device controls the intracavity loss. Common implementations are:

- an acousto-optic modulator, which diffracts light out of the resonator while the RF drive is applied;
- an electro-optic modulator with polarisation optics, which rotates the polarisation to create controllable loss;
- a rotating mirror or chopper in older or high-energy systems.

The switching time should be short compared with the time scale on which the pulse builds up. If the switch opens too slowly, the laser starts to emit before the inversion has reached the desired value, reducing pulse energy and increasing pulse duration.

The initial inversion just before the pulse, $N_i$, is usually written relative to the threshold inversion:
$$
r=\frac{N_i}{N_{\mathrm{th}}}.
$$
Efficient Q-switching requires $r>1$. Larger $r$ means more stored energy and faster pulse buildup, but also larger optical fluence on cavity components.

---
## 8.3 Rate-Equation Picture
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf#page=401)

The same photon-number and inversion rate equations from [[Notes/Ultrafast Laser Physics/5 Laser Rate Equations|chapter 5]] are used, but now the cavity loss is time dependent:
$$
\begin{aligned}
\frac{dn}{dt}&=K N n-\gamma_c(t)n,\\
\frac{dN}{dt}&=R_p-\gamma_L N-KNn.
\end{aligned}
$$
The cavity decay rate is related to the roundtrip loss $l$ and roundtrip time $T_R$ by
$$
\gamma_c=\frac{l}{T_R}.
$$
The threshold inversion at a given loss is
$$
N_{\mathrm{th}}=\frac{\gamma_c}{K}.
$$

During the hold-off phase, $n\approx 0$ and the inversion grows approximately as
$$
N(t)=R_p\tau_L\left(1-\exp(-t/\tau_L)\right),
$$
where $\tau_L=1/\gamma_L$ is the upper-state lifetime. The maximum possible inversion for continuous pumping is therefore
$$
N_{\max}=R_p\tau_L.
$$

Once the switch opens, the loss drops and the existing inversion is above threshold. At the beginning of the pulse, the inversion is still approximately constant, so the photon number grows exponentially:
$$
n(t)\approx n_i\exp\!\left[(K N_i-\gamma_c)t\right]
=n_i\exp\!\left[\gamma_c(r-1)t\right].
$$
This buildup starts from spontaneous emission or from an injected seed.

During the main pulse, pumping and spontaneous decay are slow compared with stimulated emission, so
$$
R_p-\gamma_LN\ll KNn.
$$
The simplified equations give
$$
\frac{dn}{dN}=-1+\frac{N_{\mathrm{th}}}{N}.
$$
Integrating from $N_i$ to $N$ gives the photon number during the pulse:
$$
n(N)=N_i-N+N_{\mathrm{th}}\ln\!\left(\frac{N}{N_i}\right).
$$
The photon number is maximum when $N=N_{\mathrm{th}}$. The pulse ends when the photon number has decayed again, leaving a final inversion $N_f$ determined implicitly by
$$
N_i-N_f+N_{\mathrm{th}}\ln\!\left(\frac{N_f}{N_i}\right)=0.
$$
The extracted pulse energy is approximately proportional to the inversion removed:
$$
E_p\approx (N_i-N_f)h\nu,
$$
up to mode-volume, output-coupling, and quantum-efficiency factors. The extraction efficiency can be written as
$$
\eta_{\mathrm{ext}}=\frac{N_i-N_f}{N_i}.
$$

This model captures the main design trend: higher initial inversion gives higher pulse energy and shorter pulse buildup, but also increases optical stress and the risk of multimode or unstable operation.

The output coupling determines how much of the intracavity pulse energy leaves the cavity during the pulse. Too little output coupling leaves energy in the cavity and can lengthen the pulse or increase intracavity fluence. Too much output coupling raises the threshold and reduces buildup. Practical Q-switched designs therefore optimise output coupling together with pump rate, cavity length, and allowed optical fluence.

---
## 8.4 Passive Q-Switching
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf#page=410)

In passive Q-switching the external switch is replaced by a [[Notes/Ultrafast Laser Physics/7 Saturable Absorbers for Solid-State Lasers|saturable absorber]]. At low intensity, the absorber introduces high loss and prevents lasing. As the gain builds up, intracavity intensity eventually becomes large enough to bleach the absorber. The cavity loss then drops, the photon number rises, and a pulse is emitted.

The important difference to active Q-switching is that the pulse repetition rate is not set directly by an external clock. It is set by the pump rate, gain lifetime, absorber parameters, and cavity loss. Increasing pump power usually increases the repetition rate and can also change the pulse energy.

A passive Q-switched laser has to satisfy two competing requirements:

- before the pulse, the unsaturated absorber loss must keep the laser below threshold;
- during the pulse, the absorber must bleach fast enough and deeply enough that the stored inversion can be extracted.

If the absorber modulation depth is too small, Q-switching may not start. If it is too large, the laser may need excessive inversion, which increases pulse energy but can cause damage or unstable multimode operation. If the absorber saturation fluence is poorly matched to the intracavity mode area, the absorber may either saturate too early or not saturate at all.

Passive Q-switching is self-timed. After each pulse the gain is depleted and the absorber recovers. The next pulse occurs only after the pump has rebuilt enough inversion to bleach the absorber again. This is why passive Q-switched pulse trains often have repetition-rate and pulse-energy changes when the pump power is changed.

---
## 8.5 Passively Q-Switched Microchip Lasers
[ ](/img/user/Reading/Books/Lasers%20and%20Nonlinear%20Optics/UltraFastLasers_Keller.pdf#page=426)

Microchip lasers are very short monolithic or semi-monolithic solid-state lasers. Their short cavity length gives large axial-mode spacing and compact, robust operation. Combining a gain chip with a saturable absorber can produce passively Q-switched pulses from a very small device.

The short cavity has several consequences:

- the roundtrip time is small, so the pulse can build up quickly;
- the mode volume is small, so the intracavity intensity can be high;
- the device can be mechanically stable and alignment-insensitive;
- single-frequency operation is easier than in long cavities, because the axial-mode spacing is large.

SESAMs are useful for microchip lasers because their modulation depth and saturation fluence can be engineered. The absorber must still be chosen carefully: too much nonsaturable loss reduces efficiency, too low a damage threshold limits pulse energy, and too low a saturation fluence can cause premature bleaching.

Q-switched microchip lasers are therefore a good example of how the same rate-equation physics becomes a practical design problem: choose the gain medium, pump geometry, output coupling, cavity length, and absorber so that energy storage and absorber bleaching happen on the desired time scale.
