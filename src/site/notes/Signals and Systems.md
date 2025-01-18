---
{"dg-publish":true,"dg-path":"Notes/Signals and Systems","permalink":"/notes/signals-and-systems/","updated":"2025-01-18T23:10:12.322+01:00"}
---

This note will mostly follow along the book 'Signals and Systems - 2nd edition' by Alan V. Oppenheim and Alan S. Willsky. Not every chapter is covered, especially the more 'basic' ones. Also its not an in-depth note.

# 1 Signals and Systems
[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=32&selection=2,0,6,7|🔗]]

## 1.1 Continous-time and discrete-time signals 
[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=32&selection=69,0,79,7|🔗]]

Signals are represented mathematically as functions of one or more independent variables. Here, attention is on signals involving a single independent variable, usually time $t$ for convenience. In the case of continuous-time signals the independent variable is continuous, and thus these signals are defined for a continuum of values of the independent variable. On the other hand, discrete-time signals are defined only at discrete times, and consequently, for these signals, the independent variable takes on only a discrete set of values. For continuous-time signals we will enclose the independent variable in parentheses $( · )$, whereas for discrete-time signals we will use brackets $[ · ]$ to enclose the independent variable. A discrete-time signal $x[n]$ may represent a phenomenon for which the independent variable is inherently discrete. Signals such as demographic data are examples of this. On the other hand, a very important class of discrete-time signals arises from the sampling of continuous-time signals. In this case, the discrete-time signal $x[n]$ represents successive samples of an underlying phenomenon for which the independent variable is continuous. 

## 1.2 Energy and Power
[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=36&selection=158,0,170,5|🔗]]

In many applications, the signals considered are directly related to physical quantities capturing power and energy in a physical system. As starting example, consider voltage $v(t)$ and current $I(t)$ across a resistor with resistance $R$. The instantaneous power is $p(t)=v(t)I(t)=v^2(t)/R$. This allows to get the total energy expended over the time interval $t_1<t<t_2$ as 
$$\int_{t_1}^{t_2}dt\cdot p(t) $$ and the average power as
$$\frac{1}{t_2-t_1}\int_{t_1}^{t_2}dt\cdot p(t).$$ With these simple physical examples in mind, it is common to use similar terminiology for power and energy for _any_ continous-time signal $x(t)$ and _any_ discrete-time signal $x[n]$. 
The energy in a given time-interval $[t_1, t_2]$ is $$E=\int_{t_{1}}^{t_{2}} d t \cdot|x(t)|^{2}=\sum_{n=n_{1}}^{n_{2}}|x[n]|^{2},$$while the time-averaged power is $$P=\frac{E}{t_{2}-t_{1}}=\frac{E}{n_{2}-n_{1}+1}.$$
For signals over in finite time-interrals, we find $$E_{\infty}=\int_{-\infty}^{\infty} d t \cdot|x(t)|^{2}=\sum_{n=-\infty}^{\infty}|x[n]|^{2}.$$Note that for some signals, these integrals might not converge (for example a nonzero constant signal). These signals have infinite energy. The time-areraged power then becomes $$P_{\infty}=\lim _{T \rightarrow \infty} \frac{1}{2 T} \int_{-T}^{T} d t \cdot|x(t)|^{2}=\lim _{N \rightarrow \infty} \frac{1}{2 N+1} \sum_{n=-N}^{N}|x[n]|^{2}.$$These definitions allow us to identify three important classes of signals
1) Finite energy signals: $E_{\infty}<\infty \Rightarrow P_{\infty}=\lim \frac{E_{\infty}}{2 T}=0.$
2) Finite average power signals: $P_{\infty}<\infty \Rightarrow E_{\infty}=\infty.$
3) Signal with neither finite energy nor finite power, such as $x(t)=t$.

## 1.3 Transformations
[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=38&selection=226,0,236,8|🔗]]

A very central concept in signal and system analysis is that of the transformation of a signal. Transformations happen all around us: Digital-analog-converters or noise-reduction in music systems for example. 

Some important and very fundamental transformations:
- Time shift: $x(t) \rightarrow x\left(t-t_{0}\right)$, 
- Time-reversal: $x(t) \rightarrow x(-t)$, and
- Time scaling: $x(t) \rightarrow x(\alpha \cdot t)$.
## 1.4 Periodic signals 
[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=42&selection=502,0,506,7|🔗]]

A very important class of signals encountered frequently here, are periodic signals. The defining property is that, for a positive value of $T$, it holds that
$$x(t)=x(t)+T$$ for all values of $t$. In other words, a periodic signal is unchanged by a time shift $T$. Then, the signal $x(t)$ is periodic with period $T$. 
## 1.5 Even and odd signals
[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=44&selection=36,0,46,7|🔗]]

Another set of useful properties of signals relates to their symmetry under time reversal. A signal is considered even if $x(t)=x(-t)$, and odd if $x(-t)=-x(t)$. An odd signal must be zero at time zero, as we can see from the definition. Thus, every signal can be written as superposition of an odd and even part, $$x(t)=\mathcal{E}(x)+\mathcal{O}(x)=\frac{x(t)+x(-t)}{2}+\frac{x(t)-x(-t)}{2}.$$
## 1.6 Exponential signals
[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=46&selection=12,0,17,18|🔗]]

Consider the continous-time complex exponential signal of the form $x(t)=C \cdot e^{\alpha^{t}}$.
Depending on the values of $\alpha$ and $C$, these signals can have different characteristics:
1) Real exponential signals $\alpha, c \in \mathbb{R}$. They have two different behaviours:
	1) $\alpha<0 \Rightarrow$ exponential decrease, or
	2) $\alpha>0 \Rightarrow$ exponential increase with time.
2) Periodic complex exponential $\operatorname{Re}(\alpha)=0$. These signals are periodic with periodicity $T_{0}=\frac{2 \pi}{w_{0}}$ for $\alpha=i\omega_{0}$. Like any periodic signal, they have infinite total energy, but finite average power. 
3) General complex exponential signals $\alpha, C \in \mathbb{C}$. We can differentiate two cases:
	1) $\operatorname{Re}(\alpha)=0$ : $x(t)$ sinusoidal, or
	2) $\operatorname{Re}(\alpha)>0$ : sinusoidal multiplied by increasing exponential, or
	3) $\operatorname{Re}(\alpha)<0$ : sinusoidal multiplied by decaying exponential.

The discussions from [[Signals and Systems#1.3 Transformations\|#1.3 Transformations]] to [[Signals and Systems#1.6 Exponential signals\|#1.6 Exponential signals]] are exactly analogous in the case of a discrete-time signal and will not be repeated. Note that this is the last notice about this occurence.
## 1.7 Unit impulse and unit step
[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=61&selection=111,0,127,9|🔗]]

In this section, several other basic signals of considerable importance are introduced. Consider the unit impulse $$\delta[n] =
\begin{cases} 
1 & \text{if } n = 0, \\
0 & \text{otherwise}
\end{cases},$$ and the unit step $$u[n] = \begin{cases} 1 & \text{if } n \geq 0, \\ 0 & \text{otherwise.} \end{cases}$$ 
There is a close relation between the unit impulse and the unit step. In particular, the unit impulse is the _first difference_ of the unit step: $$\delta[n]=u[n]-u[n-1],$$ while the unit step is the _running sum_ of the unit sample: $$u[n]=\sum_{m=-\infty}^{n} \delta[n]=\sum_{k=0}^{\infty} \delta[n-k].$$
Further, we find that $x[n] \delta\left[n-n_{0}\right]=x\left[n_{0}\right] \delta\left[n-n_{0}\right]$. Instead, in continuous independant variables, the relation is  $$u(t)=\int_{-\infty}^t d\tau\cdot\delta(\tau)=\int_{0}^{\infty} d \sigma \cdot \delta(t-\sigma),$$and $$\delta(t)=\frac{d u(t)}{d t}.$$ The unit impulse should be considered an idealization of an infinitely short pulse. Any system has some 'inertia' associated to it, such that the response of a system to a _sufficiently short_ pulse is independent of the pulse duration or shape. The primary characteristic of the pulse is therefore only its integrated effect, e.g. its area. For system with a fast response, the pulse must be shorter as well for this to hold true. The ideal unit impulse is short enough for _any_ system. 
## 1.8 Interconnection of systems
[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=72&selection=144,0,150,7|🔗]]

An important idea is the concept of interconnecting systems, since many real systems are built as interconnections of several subsystems. By breaking down a system into its interconnection of simpler subsystems, it may be possible to synethize compelx systems out of simpler, basic building blocks. The most frequently encountered connections are the _series/cascade_ and _parallel_ type:
![Attachments/Signals and Systems/IMG-0118230516.webp|900](/img/user/Attachments/Signals%20and%20Systems/IMG-0118230516.webp)[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=73&rect=88,274,456,600|🔗]]

The symbol $\bigoplus$ denotes additions, so that the output of the parallel system is the sum of the outputs of systems 1 and 2. Another important type is the feedback interconnection:
![Attachments/Signals and Systems/IMG-0118230516-1.webp|900](/img/user/Attachments/Signals%20and%20Systems/IMG-0118230516-1.webp)[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=74&rect=54,505,325,597|🔗]]

The output of system 1 is the input to system 2, while the output of system 2 is fed back and added to the external input oto produce the actual input of system 1. These type of connection often arise in real systems. Consider figure (a) and note that it is equivalent to (b):
![Attachments/Signals and Systems/IMG-0118230516-2.webp|900](/img/user/Attachments/Signals%20and%20Systems/IMG-0118230516-2.webp)[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=74&rect=79,82,323,316|🔗]]
## 1.9 Basic properties
### 1.9.1 Memory
[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=75&selection=51,0,63,6|🔗]]

A system is said to be _memoryless_ if the output at a given time depends only on the input at that time. A basic memoryless system is the identity system, whose output is its input. As counterexamples, the accumulator $y[n]=\sum_{k=-\infty}^{n} x(n)$ has memory, as well as the delay $y[n]=x[n-1]$. A capacitor is an example of real system with memory, since the output (voltage) is $V(t)=\frac{1}{c} \int_{-\infty}^{t} d \tau \cdot I(\tau)$. 
Roughly speaking, the concept of memory in a system corresponds to the presence of a mechanism in the system that retains or stores information about input values at times other htna the current time. 

### 1.9.2 Invertibility and Inverse Systems
[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=76&selection=165,0,173,7|🔗]]

A system is said to be invertible, if distinct input implies distinct output. Then, an inverse system exist, such that
![Attachments/Signals and Systems/IMG-0118230516-3.webp|900](/img/user/Attachments/Signals%20and%20Systems/IMG-0118230516-3.webp)[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=77&rect=106,565,359,612|🔗]]

The concept of intervibility is important in many contexts: In systems for encoding and decoding, such as communication of cryptography. In the case of lossless coding, the input to the encoder must be exactly recoverable from the output, e.g. the encoder must be intertible. 
### 1.9.3 Causality, stability, time invariance
[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=77&selection=205,0,209,9|🔗]]

A system is called causal if the output at time $t$ depends only on values of the input at the present time or in the past. Such a system is often referred to as being nonanticipative, as the system output does not anticipate future values of the input. Consequently, if two inputs to a causal system are identical up to some point in time, the corresponding outputs must also be equal up to this same time.  
An example of two system that are _not_ causal:
$$y[n]=x[n]-x[n+1],$$
and $$y(t)=x(t+1).$$ All memoryless systems are causal, since the output response only to the current value of the input. 
### 1.9.4 Stability
[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=79&selection=55,0,59,9|🔗]]

A system is stable, if small inputs lead to non-diverging responses. The figure (a) and (b) show two examples of a stable and unstable systems:
![Attachments/Signals and Systems/IMG-0118230516-4.webp|400](/img/user/Attachments/Signals%20and%20Systems/IMG-0118230516-4.webp)[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=79&rect=188,46,306,245|🔗]]
For a stable system, if the input is bounded, then th eoutput must also be bounded and therefore cannot diverge. This is the definition that is most often used.

### 1.9.5 Time Invariance
[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=81&selection=204,0,206,15|🔗]]

A system is time-invariant, if its behavior and characteristics are fixed over time. Formally, it is time-invariant if $$x[n] \rightarrow y[n] \Leftrightarrow x\left[n-n_{0}\right] \rightarrow y\left[n-n_{0}\right],$$ so that it does not matter when the experiment is conducted. 

### 1.9.6 Linearity
[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=84&selection=70,0,74,9|🔗]]

A linear system fulfills 
1. Additivity $x_{1}+x_{2} \rightarrow y_{1}+y_{2}$, and 
2. Homogeneity $\alpha x_{1} \rightarrow \alpha y_{1}$.

Both statements can be combined : $\alpha x_{1}+\beta x_{2} \rightarrow \alpha y_{1}+\beta y_{2}$.

# 2 Linear time-invariant systems
[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=105&selection=2,0,6,7|🔗]]

In [[Signals and Systems#1 Signals and Systems\|Chapter 1]], a number of basic system properties have been discussed. Two of these, linearity and time invariance, play a fundamental role in signal and system analysis for two major reasons. First, many physical processes possess these properties and thus can be modeled as linear time-invariant (short: **LTI**) systems. In addition, LTI systems can be analyzed in considerable detail, providing both insight into their properties and a set of powerful tools that form the core of signal and system analysis. One reason why LTI systems are of interest is that any such system possesses the [[Signals and Systems#1.14 Linearity\|superposition property]]. As a consequence, if we can represent the input to an LTI system in terms of a linear combination of a set of basic signals, we can then use superposition to compute the output of the system in terms of its responses to these basic signals. Consider LTI systems for this chapter unless said otherwise.

## 2.1 The Convolution Sum
[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=106&selection=76,0,86,3|🔗]]

The so-called sifting (yes, not shifting) property of the discrete-time unit impulse is $$x[n]=\sum_{k=-\infty}^{\infty} x[k] \delta[n-k].$$Because the sequence $\delta[n-k]$ is nonzero only for $k$ equals $n$, the summation on the sight hand side 'sifts' through the sequence of values $x[k]$ and preserves only the corresponding value $k=n$. The importance of this property lies in the fact that it allows to represent $x[n]$ as a superposition of scaled versions of a very simple set of elementary functions. Moreover, the property of time invariance tells us that the responses of a time-invariant system to the time-shifted unit impulses are simply time-shifted versions of one another.
Let $h_{k}[n]$ be the response of a linear system with input $\delta[n-k]$, e.g. $\delta[n-k] \rightarrow h_{k}[n]$. Then, it holds $$y[n]=\sum_{k=-\infty}^{\infty} x[k] h_{k}[n],$$meaning that we are able to contruct the response to an arbitrary input. 
If the system is additionally time-invariant and $\delta[n] \rightarrow h[n]$, then $$y[n] \rightarrow \sum_{k} x(h) h[n-k].$$
We call this the convolution/ superposition sum, and also simply write $$y[n]=x[n] * h[n].$$
The LTI system is therefore completely characterized by its response to the unit impulse. For continous -time LTI systems, we have the sifting property $$x(t)=\int_{-\infty}^{\infty} d \tau \cdot x(\tau) \delta(t-\tau),$$and then $$y(t)=x(t) * h(t)=\int_{-\infty}^{\infty} d \tau \cdot x(\tau) h(t-\tau)$$ for $\delta(t) \rightarrow h(t)$. This is called convolution integral or the supoerposition integral.

## 2.2 Convolution Properties of LTI systems
[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=134&selection=16,0,26,7|🔗]]

LTI systems satisfy important properties:
1. Commutativity: $x(t) * h(t)=h(t) * x(t)$,
2. Distributivity: $x *\left(h_{1}+h_{2}\right)=x * h_{1}+x * h_{2}$, and
3. Associativity: $x *\left(h_{1} * h_{2}\right)=\left(x * h_{1}\right) * h_{2}$.

The second point, namely distributivity can be depiced graphically:
![Attachments/Signals and Systems/IMG-0118230516-5.webp|900](/img/user/Attachments/Signals%20and%20Systems/IMG-0118230516-5.webp)[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=136&rect=108,407,300,593|🔗]]
In the same way, associativity can be depiced graphically as:
![Attachments/Signals and Systems/IMG-0118230516-6.webp|900](/img/user/Attachments/Signals%20and%20Systems/IMG-0118230516-6.webp)[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=139&rect=94,310,303,595|🔗]]


## 2.3 Basic Properties
### 2.3.1 Memory
If a discrete-time LTI system has an impulse response $h[n]$ that is not identically zero for $n\neq 0$, then the system has memory. Then, $h[n] \sim \delta[n]$ and $y\sim x$. A continous-time LTI system is memoryless if $h(t)=0$ for $t\neq 0$, and such a system has the form $$y(t) = Kx(t),$$ meaning that $h=K\delta(t)$. If $K=1$, such systems satisfy $x=x * \delta=y$ and become identity systems, which reduces to the sifting property.
### 2.3.2 Invertibility
If an LTI system is invertible, its inverse is LTI as well. If $$\begin{aligned} x \xrightarrow{h} y&&\text{and we want}&&y \xrightarrow{h^{\prime}} x\end{aligned},$$
then we must have $h * h^{\prime}=1=\delta$ the identity.
### 2.3.3 Causality
Causality requires $h[n]=0$ for $n<0$. The impulse response must be zero before the impuslse occurs, consistent with the intuitive concept of causality. The equivalece of causality and the condition of initial rest applies only to linear systems:
$$\begin{aligned} x\left(t<t^{\prime}\right)=0 &&\text{then}&& y\left(t<t^{\prime}\right)=0.\end{aligned}$$

### 2.3.4 Stability
An LTI system is stable if it is absolutely summable, that is $$\sum_{k}|h[k]|<\infty,$$since then, for every $n$  $$|x[n]|<B<\infty \Rightarrow|y[n]| \leq B \cdot \sum_{k}|h [k]|<\infty,$$ for some bounding constant $B$.  For continuous variables, $$\int d t \cdot|h(t)|^{2}<\infty$$translates to absolutely integrable. The system is stable if the impulse response is absolutely integrable. 
### 2.3.5 Unit step response of an LTI system
Besides the impulse response, there is another basic but important signal. The step response is defined as $$s[n]=\sum_{k=-\infty}^{n} h[k]=u[n] * h[n],$$ or in continous-time: $$s(t)=\int_{-\infty}^{t} d \tau \cdot h(\tau).$$
Note also that $$\begin{aligned}h[n]=s[n]-s[n-1]&&\text{and}&&h(t)=\frac{d s}{d t}.\end{aligned}$$ 

## 2.4 Causal LTI Systems Described by Differential Equations
[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=147&selection=54,0,72,9|🔗]]

An important class of discrete-time systems is that for which the input and output are related through a _linear constant-coefficient difference equation_. They provide an implicit specification of the system, that is, they describe a relationship between input and output, rather than an explicit expression. To obtain an explicit expression, one must solve the differential equation.  The condition of initial rest makes a system described by a linear constant-coefficient difference equation time invariant. 
Consider a general _Nth_-order linear constant-coefficient differential equation:
$$\sum_{k=0}^{N} a_{k} \cdot \frac{d^{k} y(t)}{d t^{k}}=\sum_{k=0}^{M} b_{k} \cdot \frac{d^{k} x(t)}{d t^{k}},$$ 
which becomes $a_{n}$ explicit function for $N=0$, $$y(t)=\frac{1}{a_{0}} \sum_{k=0}^{M} b_{k} \frac{d^{k} x}{d t^{k}}.$$ 
For $N \geqslant 1$, the solution $y(t)$ consists of two parts, one being the particular solution plus the part that solves the homogeneous equation $$\sum_{k=0}^{N} a_{k} \cdot \frac{d^{k} y(t)}{d t^{k}}=0,$$the so-called natural responses of the system. In discrete-time variables, it is $$\sum_{k=0}^{N} a_{k} y[n-k]=\sum_{k=0}^{M} b_{k} x[n-k],$$ and the natural response are $$\sum_{k=0}^{N} a_{k} y[n-k]=0.$$ The discrete-time offers an alternate approach. We can rewrite $$y[n]=\frac{1}{a_{0}}\left(\sum_{k=0}^{M} b_{k} x[n-k]-\sum_{k=1}^{N} a_{k} y[n-k]\right),$$ which requires us to know $y[n-1]$ ... $y[n-N]$. This type of equation is also called a recursive equation. 
For $N=0$ we have $$y[n]=\sum_{k=0}^{M} \frac{b_{k}}{a_{0}} x[n-k]$$ so $h[n]=\frac{b_{n}}{a_{0}}$ if $0 \leq n \leq M$. This equation is nonresursive. As its impulse response $\frac{b_{n}}{a_{0}}$ is finite, we call the system that it describes as finite impulse response (short: **FIR**) system. Usually $_{y}$, for $N \geqslant 1$ when the differential equation is recursive, the impulse response is infinite, and they are called infinite impulse response (short: **IIR**) system. 
## 2.5 Block diagram representation
[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=155&selection=17,0,38,9|🔗]]

An important property of systems described by linear constant-coefficient differential equations is that they can be represented in very simple and natural ways in terms of block diagram interconnections of elementary operations. This is significant, because it provides a pictorial representation which can add to the understanding of the behaviour and properties of these systems. In addition, such representations can be of considerable value for the simulation or implementation of the systems. 
Start with the causal system described by the first-order difference equation $$y[n]+a y[n-1]=b x[n]$$ which we can rewrite as $$y[n]=b x[n]-a y[n-1].$$
The evaluation of this equation requires three basic operations: Addition, multiplication and delay:
![Attachments/Signals and Systems/IMG-0118230516-7.webp|700](/img/user/Attachments/Signals%20and%20Systems/IMG-0118230516-7.webp)[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=156&rect=113,383,295,597|🔗]]

Thus, the representation of the given equation is 
![Attachments/Signals and Systems/IMG-0118230517.webp|700](/img/user/Attachments/Signals%20and%20Systems/IMG-0118230517.webp)[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=156&rect=138,279,302,373|🔗]]
The feedback is a direct consequence of the fact that it is a recursive equation. Further, the block diagram makes it clear that memory is required in this system and the consequent need for initial conditions. In particular, a delay corresponds to a memory element.

Next, consider $$\frac{d y}{d t}+a y(t)=b x(t)$$ in continuous time. We find that this is equivalent to $$y(t)=-\frac{1}{a} \frac{d y}{d t}+b x(t),$$ which could be implemented with the elements before, however differentiators $D \hat{=} \frac{d}{d t}$ are both difficult to implement, as well as extremely sensitive to error and noise. Instead, rewriting yields $$y(t)=\int_{-\infty}^{t} d \tau(b x(\tau)-a y(\tau)) d\tau,$$ 
 assuming that $y(-\infty)=0$. In this form, the system can be implemented with an integrator: 
 ![Attachments/Signals and Systems/IMG-0118230517-1.webp|700](/img/user/Attachments/Signals%20and%20Systems/IMG-0118230517-1.webp)[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=158&rect=142,463,338,599|🔗]]
The upper image shows the pictorial representation of the integrator, while the bottom shows the representation of the equation. 
The integrator is a memory -element, which becomes clear when we write $$y(t)=y\left(t_{0}\right)+\int_{t}^{t} d \tau(b x(\tau)-a y(\tau)) d\tau,$$ where it must store $y\left(t_{0}\right)$.

## 2.6 Singularity functions
[[Books/Electrical Engineering and Signal Processing/Oppenheim,Willsky_Signals and Systems.pdf#page=158&selection=151,0,155,9|🔗]]

We define the unit impulse through convolution, so $x(t)=x(t) * \delta(t)$ for any signal $x(t)$.
This also implies $1=x=1 \times \delta=\int_{-\infty}^{\infty} d \tau \cdot \delta(\tau)$.

The unit impulse is of the class of singularity functions.
Consider the system that does $y(t)=\frac{d x}{d t}:=x(t): u_{1}(t)$ with $u_{1}$ the unit doublet.
If $\frac{d^{2} x}{d t^{2}}:=x * u_{2}=\left(x * u_{1}\right) * u_{1}$ if follows $u_{2}=u_{1} * u_{1}$ by associativity.
Further, consider $x=1$ so $0=\frac{d x}{d t}=\int_{-\infty}^{\infty} d \tau \cdot u_{1}(\tau)$ and $-g^{\prime}(0)=\int_{-\infty}^{\infty} d\tau \cdot g(\tau) \cdot u_{1}(\tau)$.

We can define the integrator $y(t)=x * u=\int_{-\infty}^{n_{0}} d \tau \cdot x(\tau)$.
We find $u(t)=\int_{-\infty}^{t} d \tau \cdot \delta(\tau)$ and $x(t) * u_{1}(t)=\int_{\infty}^{t} d \tau \cdot x(\tau)$.
Again, we define $u_{-2}(t)=u * u=\int_{-\infty}^{t} d\tau \cdot u(\tau)=t \cdot u(t)$ since $u(t)=1$ for $t>0$.
Therefore, $u_{-2}$ is also called the unit ramp function.
Then $u_{-k}=\int_{-\infty}^{t} d\tau \cdot u_{-(k-1)}(\tau)=\frac{t^{k-1}}{(k-1)!} u(t)$ is the cascade of integrators.
Alternative notations are $\delta(t)=u_{0}(t)$ and $u_{-1}(t)=u(t)$.

Then $\delta(t)=u_{1} * u_{-1}$ as expected, or generally $u_{k+r}(t)=u_{k}(t) * u_{r}(t)$.

# 3 Fourier series representation of periodic signals
In LTI systems, we have $e^{s t} \longrightarrow H(s) e^{s t}$ and $e^{z} \longrightarrow H(\tau) e^{z}$ for continons, respectively discrete time with a complex amplitude factor $H$.

A signal $x \longrightarrow a \cdot x$ is called eigenfunction of the system and the (complex) constant a
is called the eigenvalue. Therefore, we claim that exponentials are eigenfunctions of any
LTI system, we show $y(t)=\int_{-\infty}^{t} d \tau \cdot h(\tau) x(t-\tau)=\int_{-\infty}^{t} d \tau \cdot h(\tau) e^{s(t-\tau)}=e^{s t} \int_{-\infty}^{t} d \tau \cdot h(\tau) e^{-s \tau}$ assuming that the integral converges.

It is useful to decompose a general signal into eigenfunctions $x(t)=\sum_{n} a_{n} e^{s . t}$ such that $y(t)=\sum_{n} a_{n} H\left(s_{n}\right) e^{s_{n} t}$.

Fourier series representation continons-time periodic signals
The representation is $x(t)=\sum_{k=-\infty}^{\infty} a_{k} e^{i k \frac{2 \pi}{T} t}$ for a periodic signal with periodicity 7 .
For real $x=x^{*}$, we also get $a_{k}^{*}=a_{-k}$ which allows to write
$$
x(t)=a_{0}+\sum_{k=1}^{\infty}\left\{a_{k} e^{i k \omega_{0} t}+a_{k}^{*} e^{-i k \omega_{0} t}\right\}=a_{0}+\sum_{k=1}^{\infty} 2 \operatorname{Re}\left(a_{k} e^{i k \omega_{0} t}\right)=a_{0}+2 \cdot \sum_{k=1}^{\infty} A_{k} \cos \left(k \omega_{0} t+\theta_{k}\right)
$$
if we write $a_{k}=A_{k} e^{i \theta_{k}}$.
Equivalently, if $a_{k}=B_{k}+i C_{k}$, then $x(t)=a_{0}+2 \cdot \sum_{k=1}^{\infty}\left\{B_{k} \cos \left(k \omega_{0} t\right)-C_{k} \sin \left(k \omega_{0} t\right)\right\}$.
We still weed to proof that any periodic $x(t)$ can be written in that form.
Continuing the assumption, we $g e t \int_{0}^{T} d t \cdot x(t) e^{-i k n \omega_{0} t}=\int_{0}^{T} d t \cdot \sum_{k} a_{k} e^{i(k-n) \omega_{0} t}$ which eventually implies $\int_{t^{\prime}}^{t^{\prime}+T} d t \cdot e^{i(k-n) w_{0} t}=T$ if $k=n$ for any $t^{\prime}$.
We will write the integral $\int_{t^{\prime}}^{t^{\prime}+T}$ ar $\int_{T}$ from now on.
Then, $a_{n}=\frac{1}{T} \int_{T} d t \cdot x(t) e^{-i n \omega_{0} t}$ and $a_{0}=\frac{1}{T} \int_{T} d t \cdot x(t)=\bar{x}(t)$, so the average over one period.

# 4 Convergence of the Founder series
Approximate a general signal $x(t)$ as $x_{N}(t)=\sum_{k=-N}^{N} a_{k} e^{i k w_{0} t}$ such that the error of approximation becomes $e_{N}(t)=x(t)-x_{N}(t)=x(t)-\sum_{k=-N}^{N} a_{k} e^{i k w_{0} t}$
The energy over one period is $E_{N}=\int_{T} d t \cdot\left|e_{N}(t)\right|^{2}$ which is minimized by $a_{k}=\frac{1}{T} \int_{T} d t \cdot x(t) e^{-i k w_{0} t}$.
Obviously $\lim _{N \rightarrow \infty} E_{N}=0$ if $x(t)$ has a founder series representation.
Consider two classes of signals:
1) Periodic signals with finite power, $\int_{T} d t \cdot|x(t)|<\infty$ implying $\left|a_{k}\right|<\infty$, and $a \mid$ so $\int_{T} d t \cdot|e(t)|^{2}=0$ for $e(t)=x(t)-\sum_{k=-\infty}^{\infty} a_{k} e^{i k w_{0} t}$. However, this does not imply $x(t)=\sum_{k=-\infty}^{\infty} a_{k} e^{i k w_{0} t}$. It only means that their energies are equal. This is useful, since physical systems react to signal energy so that from their perspective, $x(t)$ and its fourier representation are equal.

The Dinchlet conditions are
1) Over one period, $x(t)$ must absolutely integrable, so $\int_{T} d t \cdot|x(t)|^{2}<\infty$.

This implies $\left|a_{k}\right| \leq \int_{T} d t \cdot|x(t)|^{2}<\infty$.
2) In any finite interval of time, $x(t)$ is of bounded variation. In other words, there ave only a finite number of minima and maxima per period.
3) In any finite interval of time, $x(t)$ has only a finite number of discontinonties, and each of them is finite.

While there are many functions violating one of the conditions, most signals in nature do fulfill them.

For a penodic signal without discontinuities, $x(t)=\sum_{k=-\infty}^{\infty} a_{k} e^{i k w_{0} t}$ for all $t$.
For a periodic signal with a finite number of discontinuities, $x(t)=\sum_{k=-\infty}^{\infty} a_{k} e^{i k w_{0} t}$ for all $t$, expect at the discontinuities. There, $\sum_{k=\infty}^{\infty} a_{k} e^{i k w_{0} t} \rightarrow \frac{1}{2}\left(x\left(t_{\text {dis is }}^{+}\right)+x\left(t_{\text {disc }}^{-}\right)\right)$the average valve on either side.

Their energy difference is zero, and since they only differ at isolated points, the integral over any interval is equal for both. Therefore, both signals behave equal under convolution, and are identical in LTI systems.

The Gibbs phenomenon implies that near to a discontinuity, the truncated Fourier sanies
will exhibit high -frequency riples that get wake with increasing $N$.
![](https://cdn.mathpix.com/cropped/2025_01_18_52f89a1b79001871df74g-10.jpg?height=269&width=1900&top_left_y=1162&top_left_x=55)

## 4.1 Properties of continous-time Founder series

|                                     Property                                      | Section |                                                                                              Periodic Signal                                                                                              |                                                                                                                                  Fourier Series Coefficients                                                                                                                                  |
| :-------------------------------------------------------------------------------: | :-----: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                   |         | $\left.\begin{array}{l} x(t) \\ y(t) \end{array}\right\} \begin{aligned} & \text { Periodic with period } \mathrm{T} \text { and } \\ & \text { fundamental frequency } \omega_0=2 \pi / T \end{aligned}$ |                                                                                                                        $\begin{aligned} & a_k \\ & b_k \end{aligned}$                                                                                                                         |
|                                     Linearity                                     |  3.5.1  |                                                                                              $A x(t)+B y(t)$                                                                                              |                                                                                                                                         $A a_k+B b_k$                                                                                                                                         |
|                                   Time Shifting                                   |  3.5.2  |                                                                                           $x\left(t-t_0\right)$                                                                                           |                                                                                                                    $a_k e^{-j k \omega_0 t_0}=a_k e^{-j k(2 \pi / T) t_0}$                                                                                                                    |
|                                Frequency Shifting                                 |         |                                                                              $e^{j M \omega_0 t}=e^{j M(2 \pi / T) r} x(t)$                                                                               |                                                                                                                                           $a_{k-M}$                                                                                                                                           |
|                                    Conjugation                                    |  3.5.6  |                                                                                                 $x^*(t)$                                                                                                  |                                                                                                                                          $a_{-k}^*$                                                                                                                                           |
|                                   Time Reversal                                   |  3.5.3  |                                                                                                  $x(-t)$                                                                                                  |                                                                                                                                           $a_{-k}$                                                                                                                                            |
|                                   Time Scaling                                    |  3.5.4  |                                                                        $x(\alpha t), \alpha>0$ (periodic with period $T / \alpha)$                                                                        |                                                                                                                                             $a_k$                                                                                                                                             |
|                               Periodic Convolution                                |         |                                                                                     $\int_T x(\tau) y(t-\tau) d \tau$                                                                                     |                                                                                                                                          $T a_k b_k$                                                                                                                                          |
|                                  Multiplication                                   |  3.5.5  |                                                                                                $x(t) y(t)$                                                                                                |                                                                                                                           $\sum_{l=-\infty}^{+\infty} a_l b_{k-l}$                                                                                                                            |
|                                  Differentiation                                  |         |                                                                                           $\frac{d x(t)}{d t}$                                                                                            |                                                                                                                          $j k \omega_0 a_k=j k \frac{2 \pi}{T} a_k$                                                                                                                           |
|                                    Integration                                    |         |                                        $\int_{-\infty}^t x(t) d t \stackrel{(f i n i t e ~ v a l u e d ~ a n d ~}{\text { periodic only if } \left.a_0=0\right)}$                                         |                                                                                                      $\left(\frac{1}{j k \omega_0}\right) a_k=\left(\frac{1}{j k(2 \pi / T)}\right) a_k$                                                                                                      |
|                        Conjugate Symmetry for Real Signals                        |  3.5.6  |                                                                                                $x(t)$ real                                                                                                | $\left\{\begin{array}{l} a_k=a_{-k}^* \\ \operatorname{Re}\left\{a_k\right\}=\operatorname{Re}\left\{a_{-k}\right\} \\ \mathscr{S} m\left\{a_k\right\}=-\mathscr{I}_n\left\{a_{-k}\right\} \\ \left\|a_k\right\|=\left\|a_{-k}\right\| \\ \Varangle a_k=-\Varangle a_{-k} \end{array}\right.$ |
|                               Real and Even Signals                               |  3.5.6  |                                                                                           $x(t)$ real and even                                                                                            |                                                                                                                                      $a_k$ real and even                                                                                                                                      |
|                               Real and Odd Signals                                |  3.5.6  |                                                                                            $x(t)$ real and odd                                                                                            |                                                                                                                                $a_k$ purely imaginary and odd                                                                                                                                 |
|                      Even-Odd Decomposition of Real Signals                       |         |                                $\begin{cases}x_e(t)=\mathcal{E}_v\{x(t)\} \quad[x(t) \text { real }] \\ x_o(t)=\mathcal{V}\{x(t)\} \quad[x(t) \text { real }]\end{cases}$                                 |                                                                                       $\begin{aligned} & \operatorname{Re}_2\left\{a_k\right\} \\ & j \mathscr{S n}_n\left\{a_k\right\} \end{aligned}$                                                                                        |
|                     Parseval's Relation for Periodic Signals                      |         |                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                               |
| $\frac{1}{T} \int_T\|x(t)\|^2 d t=\sum_{k=-\infty}^{+\infty}\left\|a_k\right\|^2$ |         |                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                               |
|                                                                                   |         |                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                               |

|                  Property                  |                                                                                                              Periodic Signal                                                                                                               |                                                                                                                                  Fourier Series Coefficients                                                                                                                                  |
| :----------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                            |                      $\left.\begin{array}{l} x[n] \\ y[n] \end{array}\right\} \begin{aligned} & \text { Periodic with period } N \text { and } \\ & \text { fundamental frequency } \omega_0=2 \pi / N \end{aligned}$                      |                                                                            $\left.\begin{array}{l} a_k \\ b_k \end{array}\right\} \begin{aligned} & \text { Periodic with } \\ & \text { period } N \end{aligned}$                                                                            |
|                 Linearity                  |                                                                                                              $A x[n]+B y[n]$                                                                                                               |                                                                                                                                         $A a_k+B b_k$                                                                                                                                         |
|               Time Shifting                |                                                                                                           $x\left[n-n_0\right]$                                                                                                            |                                                                                                                                 $a_k e^{-j k(2 \pi / N) n_0}$                                                                                                                                 |
|             Frequency Shifting             |                                                                                                        $e^{j M(2 \pi / N) n} x[n]$                                                                                                         |                                                                                                                                           $a_{k-M}$                                                                                                                                           |
|                Conjugation                 |                                                                                                                  $x^*[n]$                                                                                                                  |                                                                                                                                          $a_{-k}^*$                                                                                                                                           |
|               Time Reversal                |                                                                                                                  $x[-n]$                                                                                                                   |                                                                                                                                           $a_{-k}$                                                                                                                                            |
|                Time Scaling                | $\begin{aligned} & x_{(m)}[n]= \begin{cases}x[n / m], & \text { if } n \text { is a multiple of } m \\ 0, & \text { if } n \text { is not a multiple of } m\end{cases} \\ & \text { (periodic with period } m N \text { ) } \end{aligned}$ |                                                                                                               $\frac{1}{m} a_k\binom{$ viewed as periodic }{ with period $m N}$                                                                                                               |
|            Periodic Convolution            |                                                                                                  $\sum_{r=\langle N\rangle} x[r] y[n-r]$                                                                                                   |                                                                                                                                          $N a_k b_k$                                                                                                                                          |
|               Multiplication               |                                                                                                                $x[n] y[n]$                                                                                                                 |                                                                                                                            $\sum_{l=\langle N\rangle} a_l b_{k-l}$                                                                                                                            |
|              First Difference              |                                                                                                               $x[n]-x[n-1]$                                                                                                                |                                                                                                                           $\left(1-e^{-j k(2 \pi / N)}\right) a_k$                                                                                                                            |
|                Running Sum                 |                                                                         $\sum_{k=-x}^n x[k]\binom{\text { finite valued and periodic only }}{\text { if } a_0=0}$                                                                          |                                                                                                                $\left(\frac{1}{\left(1-e^{-j k(2 \pi / N)}\right)}\right) a_k$                                                                                                                |
|    Conjugate Symmetry for Real Signals     |                                                                                                                $x[n]$ real                                                                                                                 | $\left\{\begin{array}{l} a_k=a_{-k}^* \\ \operatorname{Re}\left\{a_k\right\}=\operatorname{Re}\left\{a_{-k}\right\} \\ \mathscr{I}_m\left\{a_k\right\}=-\mathscr{S}_m\left\{a_{-k}\right\} \\ \left\|a_k\right\|=\left\|a_{-k}\right\| \\ \Varangle a_k=-\Varangle a_{-k} \end{array}\right.$ |
| Real and Even Signals Real and Odd Signals |                                                                                               $x[n]$ real and even <br> $x[n]$ real and odd                                                                                                |                                                                                           $\begin{aligned} & a_k \text { real and even } \\ & a_k \text { purely imaginary and odd } \end{aligned}$                                                                                           |
|   Even-Odd Decomposition of Real Signals   |                                $\begin{cases}x_e[n]=\mathcal{E} v\{x[n]\} & {[\mathrm{x}[\mathrm{n}] \text { real }]} \\ x_o[n]=\mathcal{O}\{x[n]\} & {[\mathrm{x}[\mathrm{n}] \text { real }]}\end{cases}$                                |                                                                                 $\begin{aligned} & \operatorname{Re}_{\boldsymbol{e}}\left\{a_k\right\} \\ & j \mathscr{S}_m\left\{a_k\right\} \end{aligned}$                                                                                 |
|  Parseval's Relation for Periodic Signals  |                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                               |
|                                            |                                                                             $\frac{1}{N} \sum_{n=\langle N\rangle}\|x[n]\|^2=\sum_{k-(N)}\left\|a_k\right\|^2$                                                                             |                                                                                                                                                                                                                                                                                               |

| Section |                          Property                           |                                                            Aperiodic signal                                                            |                                                                                                                                                         Fourier transform                                                                                                                                                          |
| :-----: | :---------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|         |                                                             |                                                                 $x(t)$                                                                 |                                                                                                                                                           $X(j \omega)$                                                                                                                                                            |
|         |                                                             |                                                                 $y(t)$                                                                 |                                                                                                                                                           $Y(j \omega)$                                                                                                                                                            |
|  4.3.1  |                          Linearity                          |                                                            $a x(t)+b y(t)$                                                             |                                                                                                                                                   $a X(j \omega)+b Y(j \omega)$                                                                                                                                                    |
|  4.3.2  |                        Time Shifting                        |                                                         $x\left(t-t_0\right)$                                                          |                                                                                                                                                  $e^{-j \omega t_0} X(j \omega)$                                                                                                                                                   |
|  4.3.6  |                     Frequency Shifting                      |                                                        $e^{j \omega_0 t} x(t)$                                                         |                                                                                                                                          $X\left(j\left(\omega-\omega_0\right)\right.$ )                                                                                                                                           |
|  4.3.3  |                         Conjugation                         |                                                                $x^*(t)$                                                                |                                                                                                                                                          $X^*(-j \omega)$                                                                                                                                                          |
|  4.3.5  |                        Time Reversal                        |                                                                $x(-t)$                                                                 |                                                                                                                                                           $X(-j \omega)$                                                                                                                                                           |
|  4.3.5  |                 Time and Frequency Scaling                  |                                                                $x(a t)$                                                                |                                                                                                                                         $\frac{1}{\|a\|} X\left(\frac{j \omega}{a}\right)$                                                                                                                                         |
|   4.4   |                         Convolution                         |                                                             $x(t) * y(t)$                                                              |                                                                                                                                                     $X(j \omega) Y(j \omega)$                                                                                                                                                      |
|   4.5   |                       Multiplication                        |                                                              $x(t) y(t)$                                                               |                                                                                                                        $\frac{1}{2 \pi} \int_{-\infty}^{+\infty} X(j \theta) Y(j(\omega-\theta)) d \theta$                                                                                                                         |
|  4.3.4  |                   Differentiation in Time                   |                                                          $\frac{d}{d t} x(t)$                                                          |                                                                                                                                                       $j \omega X(j \omega)$                                                                                                                                                       |
|  4.3.4  |                         Integration                         |                                                         $\int_{-x}^t x(t) d t$                                                         |                                                                                                                                      $\frac{1}{j \omega} X(j \omega)+\pi X(0) \delta(\omega)$                                                                                                                                      |
|  4.3.6  |                Differentiation in Frequency                 |                                                                $t x(t)$                                                                |                                                                                                                                                 $j \frac{d}{d \omega} X(j \omega)$                                                                                                                                                 |
|  4.3.3  |             Conjugate Symmetry for Real Signals             |                                                              $x(t)$ real                                                               | $\left\{\begin{array}{l} X(j \omega)=X^*(-j \omega) \\ \mathfrak{R e}_{\mathscr{E}}\{X(j \omega)\}=\operatorname{Re}_{\mathscr{E}}\{X(-j \omega)\} \\ \mathscr{G}_{n t}\{X(j \omega)\}=-\mathscr{S}_{n t}\{X(-j \omega)\} \\ \|X(j \omega)\|=\|X(-j \omega)\| \\ \Varangle X(j \omega)=-\Varangle X(-j \omega) \end{array}\right.$ |
|  4.3.3  |             Symmetry for Real and Even Signals              |                                                          $x(t)$ real and even                                                          |                                                                                                                                                    $X(j \omega)$ real and even                                                                                                                                                     |
|  4.3.3  |              Symmetry for Real and Odd Signals              |                                                          $x(t)$ real and odd                                                           |                                                                                                                                               $X(j \omega)$ purely imaginary and odd                                                                                                                                               |
|  4.3.3  |           Even-Odd Decomposition for Real Signals           | $\begin{array}{ll} x_e(t)=\mathcal{E} v\{x(t)\} & {[x(t) \text { real }]} \\ x_t(t)=O d\{x(t)\} & {[x(t) \text { real }]} \end{array}$ |                                                                                                                  $\begin{gathered} G \mathscr{e}\{X(j \omega)\} \\ j \mathscr{G}_m\{X(j \omega)\} \end{gathered}$                                                                                                                  |
|  4.3.7  | Parseval's Relati $\int_{-\infty}^{+\infty}\|x(t)\|^2 d t=$ |                      n for Aperiodic Signals $\frac{1}{2 \pi} \int_{-\infty}^{+\infty}\|X(j \omega)\|^2 d \omega$                      |                                                                                                                                                                                                                                                                                                                                    |

![](https://cdn.mathpix.com/cropped/2025_01_18_52f89a1b79001871df74g-10.jpg?height=1143&width=1446&top_left_y=1567&top_left_x=74)

Parseval's Relation for Periodic Signals
$$
\frac{1}{T} \int_{T}|x(t)|^{2} d t=\sum_{k=-\infty}^{+\infty}\left|a_{k}\right|^{2}
$$ 
## 4.2 Fourier series representation of discreete-tiue periodic signals
As before, we consider periodic signals $x(n)=x(n+N)$ with $w_{0}=\frac{2 \pi}{N}$ the fundamental frequency.
Consider $x(n)=\sum_{k} a_{k} e^{i k w_{0} n}=\sum_{k=\langle N\rangle} a_{k} e^{i k w_{0} n}$ where $k=\langle N\rangle$ indicates a sum from $m$ to $m+N-1$.
This is a new set of $N$ equations with the $N$ unknowns being $a_{k}$. They are (without proof)
linearly independent and it can be solved for them.
What we obtain is $a_{k}=\frac{1}{N} \sum_{k=\langle N\rangle} x(n) \cdot e^{-i k w_{0} n}$, so a closed form. They satisfy $a_{k}=a_{k+N}$
It is important to note that the discrese--time founder serer representation is a finite series with $N$ terms.

| Section |                     Property                      |                                                                 Aperiodic Signal                                                                  |                                                                                                                                                                                                                                                     Fourier Transform                                                                                                                                                                                                                                                      |
| :-----: | :-----------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|         |                                                   |                                                                      $x[n]$                                                                       |                                                                                                                                                                                                                                         $X\left(e^{j \omega}\right)$ periodic with                                                                                                                                                                                                                                         |
|         |                                                   |                                                                      $y[n]$                                                                       |                                                                                                                                                                                                                                 $\left.Y\left(e^{j \omega}\right)\right\}$ period $2 \pi$                                                                                                                                                                                                                                  |
|  5.3.2  |                     Linearity                     |                                                                  $a x[n]+b y[n]$                                                                  |                                                                                                                                                                                                                                $a X\left(e^{j \omega}\right)+b Y\left(e^{j \omega}\right)$                                                                                                                                                                                                                                 |
|  5.3.3  |                   Time Shifting                   |                                                               $x\left[n-n_0\right]$                                                               |                                                                                                                                                                                                                                       $e^{-j \omega n_0} X\left(e^{j \omega}\right)$                                                                                                                                                                                                                                       |
| 5.3 .3  |                Frequency Shifting                 |                                                              $e^{j \omega_0 n} x[n]$                                                              |                                                                                                                                                                                                                                     $X\left(e^{j\left(\omega-\omega_0\right)}\right)$                                                                                                                                                                                                                                      |
| 5.3 .4  |                    Conjugation                    |                                                                     $x^*[n]$                                                                      |                                                                                                                                                                                                                                              $X^*\left(e^{-j \omega}\right)$                                                                                                                                                                                                                                               |
|  5.3.6  |                   Time Reversal                   |                                                                      $x[-n]$                                                                      |                                                                                                                                                                                                                                               $X\left(e^{-j \omega}\right)$                                                                                                                                                                                                                                                |
|  5.3.7  |                  Time Expansion                   | $x_{i k \mid}[n]= \begin{cases}x[n / k], & \text { if } n=\text { multiple of } k \\ 0, & \text { if } n \neq \text { multiple of } k\end{cases}$ |                                                                                                                                                                                                                                               $X\left(e^{j k \omega}\right)$                                                                                                                                                                                                                                               |
|   5.4   |                    Convolution                    |                                                                   $x[n] * y[n]$                                                                   |                                                                                                                                                                                                                                  $X\left(e^{j \omega}\right) Y\left(e^{j \omega}\right)$                                                                                                                                                                                                                                   |
|   5.5   |                  Multiplication                   |                                                                    $x[n] y[n]$                                                                    |                                                                                                                                                                                                           $\frac{1}{2 \pi} \int_{2 \pi} X\left(e^{j \theta}\right) Y\left(e^{j(\omega-\theta)}\right) d \theta$                                                                                                                                                                                                            |
| 5.3 .5  |               Differencing in Time                |                                                                   $x[n]-x[n-1]$                                                                   |                                                                                                                                                                                                                                 $\left(1-e^{-j \omega}\right) X\left(e^{j \omega}\right)$                                                                                                                                                                                                                                  |
|  5.3.5  |                   Accumulation                    |                                                             $\sum_{k=-\infty}^n x[k]$                                                             |                                                                                                                                                                                                                                   $\frac{1}{1-e^{-j \omega}} X\left(e^{j \omega}\right)$                                                                                                                                                                                                                                   |
|  5.3.8  |           Differentiation in Frequency            |                                                                     $n x[n]$                                                                      |                                                                                                                                                                            $\begin{aligned} & +\pi X\left(e^{j 0}\right) \sum_{k=-\infty}^{+\infty} \delta(\omega-2 \pi k) \\ & j \frac{d X\left(e^{j \omega}\right)}{d \omega} \end{aligned}$                                                                                                                                                                             |
| 5.3 .4  |        Conjugate Symmetry for Real Signals        |                                                                    $x[n]$ real                                                                    | $\left\{\begin{array}{l} X\left(e^{j \omega}\right)=X^*\left(e^{-j \omega}\right) \\ \operatorname{Re}\left\{X\left(e^{j \omega}\right)\right\}=\operatorname{Re}\left\{X\left(e^{-j \omega}\right)\right\} \\ \operatorname{S}_{\hbar}\left\{X\left(e^{j \omega}\right)\right\}=-G_t\left\{X\left(e^{-j \omega}\right)\right\} \\ \left\|X\left(e^{j \omega}\right)\right\|=\left\|X\left(e^{-j \omega}\right)\right\| \\ \Varangle X\left(e^{j \omega}\right)=-\Varangle X\left(e^{-j \omega}\right) \end{array}\right.$ |
|  5.3.4  |          Symmetry for Real, Even Signals          |                                                                $x[n]$ real an even                                                                |                                                                                                                                                                                                                                         $X\left(e^{j \omega}\right)$ real and even                                                                                                                                                                                                                                         |
|  5.3.4  |          Symmetry for Real, Odd Signals           |                                                                $x[n]$ real and odd                                                                |                                                                                                                                                                                                                                   $X\left(e^{j \omega}\right)$ purely imaginary and odd                                                                                                                                                                                                                                    |
|  5.3.4  |      Even-odd Decomposition of Real Signals       | $\begin{array}{ll} x_c[n]=\mathcal{E}_v\{x[n]\} & {[x[n] \text { real }]} \\ x_o[n]=\mathcal{O} d\{x[n]\} & {[x[n] \text { real }]} \end{array}$  |                                                                                                                                                                              $\begin{aligned} & \mathcal{R} \mathscr{e}\left\{X\left(e^{j \omega}\right)\right\} \\ & j \mathcal{S}_n\left\{X\left(e^{j \omega}\right)\right\} \end{aligned}$                                                                                                                                                                              |
|  5.3.9  | Parseval's R $\sum_{n=-\infty}^{+\infty}\|x[n]\|$ |                  ation for Aperiodic Signals $=\frac{1}{2 \pi} \int_{2 \pi}\left\|X\left(e^{j \omega}\right)\right\|^2 d \omega$                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

![](https://cdn.mathpix.com/cropped/2025_01_18_fe980612f9d3f033eaf5g-01.jpg?height=1623&width=1954&top_left_y=979&top_left_x=45)

Parseval's Relation for Periodic Signals

$$
\frac{1}{N} \sum_{n=(N)}|x[n]|^{2}=\sum_{k=(N)}\left|a_{k}\right|^{2}
$$

## 4.3 Fourier series and LTI systems
As a reminder, we have $y(t)=H(s) e^{s t}$ for $x(t)=e^{s t}$ and $H(s)=\int_{-\infty}^{\infty} h(\tau) e^{-s t} d \tau$ the system functions.
We will consider $\operatorname{Re}(s)=0$, egg $s=i w$. Then, $H(s)$ is called the frequency response.
For $x(t) \stackrel{F S}{\longleftrightarrow} a_{k}$ with period $T$, we obtain $y(t)=\sum_{k=-\infty}^{\infty} a_{k} \cdot H\left(i k w_{0}\right) e^{i k w_{0} t}$, also penodic with 7 . $O$ obviously, $y(t) \stackrel{F S}{\longleftrightarrow} a_{k} H\left(i k w_{0}\right)$.

As a side remark, a system with impulse response $\alpha^{n} u(n)$ is stable for $|\alpha|<1$ and unstable for $|\alpha|>1$. Stable means a converging sum in $H$.
## 4.4 Filtering

LTI systems that change the shape of the spectrum are called frequency-shaping filters. If they only let some frequencies pass, we call them frequency-selective filters.

One class of filters does $x(t)=e^{i n t} \rightarrow y(t)=\frac{d x}{d t}$ such that $H(i w)=$ in. Thus, the amplification increases with $w$. This is used in image processing to enhance edges. The signal here is $x\left(t_{1}, t_{2}\right)$ where $t_{i}$ are coordinates and $x$ the brightness.

To implement an ideal low pass filter with cutoff $w_{c}$, we would need $H(l i w)=1$ for $|w| \leq w_{c}$.

We call $w \in\left[-w_{c}, w_{c}\right]$ the pass band and outside the stopband.
![](https://cdn.mathpix.com/cropped/2025_01_18_fe980612f9d3f033eaf5g-02.jpg?height=295&width=729&top_left_y=2087&top_left_x=65)

For discrete-time signals, the frequency response $H\left(e^{i w)}\right.$ must high pars be periodic with $2 \pi$
![](https://cdn.mathpix.com/cropped/2025_01_18_fe980612f9d3f033eaf5g-02.jpg?height=172&width=734&top_left_y=2372&top_left_x=67)
band pass
![](https://cdn.mathpix.com/cropped/2025_01_18_fe980612f9d3f033eaf5g-02.jpg?height=182&width=729&top_left_y=2632&top_left_x=65)
(c)

## 4.5 Important examples: Continous time
$R C$-lowpass filter: we obtain $\quad R C \frac{d V_{c}}{d t}+V_{c}=V_{s}$ and is an LTI system.
UW~ Using $V_{c}(t)=e^{i \omega t}$ and, consequentely, $V_{s}(t)=H(w) \cdot e^{\text {int }}$, we
R
find $H(w)=\frac{1}{1+R C \cdot i w}$ with $|H| \approx 1$ for $w \approx 0$.

It changes its phase crossing $w=0$.
However, there is a trade-off. The impulse response is $h(t)=\frac{e^{-t / R C}}{R C} u(t)$ and the step response is $s(t)=\left(1-e^{-t / R C}\right) u(t)$ We define $\tau=R C$
![](https://cdn.mathpix.com/cropped/2025_01_18_fe980612f9d3f033eaf5g-03.jpg?height=312&width=976&top_left_y=968&top_left_x=51)
![](https://cdn.mathpix.com/cropped/2025_01_18_fe980612f9d3f033eaf5g-03.jpg?height=296&width=768&top_left_y=969&top_left_x=1046)
![](https://cdn.mathpix.com/cropped/2025_01_18_fe980612f9d3f033eaf5g-03.jpg?height=360&width=976&top_left_y=1401&top_left_x=51)
![](https://cdn.mathpix.com/cropped/2025_01_18_fe980612f9d3f033eaf5g-03.jpg?height=369&width=778&top_left_y=1387&top_left_x=1043)

If we want to only let small frequencies pars $1 / R C$ must be small, but that means a large $\tau$.

The system then responds slowly, e.g the step response taker long to reach its maximum value 1.
$\downarrow$ first-order
RC-highpass filter: Take the same circuit as before, but now the output is the voltage across the
![](https://cdn.mathpix.com/cropped/2025_01_18_fe980612f9d3f033eaf5g-03.jpg?height=113&width=1097&top_left_y=2210&top_left_x=59)
![](https://cdn.mathpix.com/cropped/2025_01_18_fe980612f9d3f033eaf5g-03.jpg?height=518&width=1061&top_left_y=2359&top_left_x=45)
![](https://cdn.mathpix.com/cropped/2025_01_18_fe980612f9d3f033eaf5g-03.jpg?height=659&width=792&top_left_y=2218&top_left_x=1226)

Since $v_{s}=v_{R}+v_{c}$, and if $v_{s}(t)=u(t)$, then $v_{R}(t)=e^{-t / R c} u(t)$. We obtain another trade-off.

## 4.6 Important examples: Discrete time

We differentiate between recursive with impulse responser of infinite length ( $\| R$ system,) and
non-recursive with impulse responses of finite length (FIR systems).
$\varsigma$ first-orders
Recursive filters: The counterpart to the firrt-order filters is the system described by
the equation $y(u)-a y(n-1)=x(n)$ which will lead to $H(w)=\frac{1}{1-a e^{-i w}}$ assuming $x(n)=e^{\text {in }}$
acc

There is again a trade-off, ar $h(n)=a^{n} \cdot u(n)$ and $s(n)=u(n) * h(n)=\frac{1-a^{n+1}}{1-a} u(n)$. Therefore,
|a| also controls the speed of which the step response approaches their maximum, where low
lat increases that speed. However, that also decreases the parrband size.

Note that the system is unstable for $|a| \geqslant 1$, since its response will not be finite any more otherwise.

Non-recursive filters: Generally we have $y(n)=\sum_{k=-N}^{M} b_{k} \cdot x(n-k)$ such that $y(n)$ is a weighted average of the $(N+M+1)$ values $x(n-M), \ldots, x(n+N)$. We can get the moving average filter, where the output $y\left(n_{0}\right)$ is the average of values close to $n_{0}$.

Consider the three-point moving average filter $y(n)=\frac{x(n-1)+x(n)+x(n+1)}{3}$.

Then, $h(n)=\frac{\delta(n-1)+\delta(n)+\delta(n+1)}{3}$ and $H(w)=\sum_{n} h(n) e^{-i n}=\frac{e^{i \omega}+1+e^{-i \omega}}{3}=\frac{1+2 \cos w}{3}$.
![](https://cdn.mathpix.com/cropped/2025_01_18_fe980612f9d3f033eaf5g-05.jpg?height=401&width=675&top_left_y=248&top_left_x=51)

The cutoff frequency can not be adjusted.

To generalize, we average over $N+M+1$ neighbouring points, $y(n)=\frac{1}{N+M+1} \sum_{k=-N}^{M} x(n-k)$ such that $h(n)=\frac{1}{N+M+1}$ for $-N \leq n \leq M$. Then, $H(w)=\frac{1}{N+M+1} \sum_{k=-N}^{M} e^{-i w k}$, which can be evaluated.

Adjusting $N+M+1$, the cutoff can be adjusted.
![](https://cdn.mathpix.com/cropped/2025_01_18_fe980612f9d3f033eaf5g-05.jpg?height=335&width=1130&top_left_y=1034&top_left_x=52)

To implement a highpass filling, one could implement $y(n)=\frac{x(n)-x(n-1)}{2}$ which surpresses slowly varying signals. We find $H(\omega)=i e^{i \omega / 2} \sin (\omega / 2)$.

All filters in $F \mathbb{R}$ systems are stable since they are absolutely summable over $b_{k}$.

# 5 Continous-time Fourier transform
As an illustrious example consider $x(t)=\left\{\begin{array}{ll}1 & \text { for }|t|<T_{1} \\ 0 & \text { for } T_{1}<|t|<T / 2\end{array} \quad\right.$ and it repeats with period 7 .
We found $T a_{k}=\left.\frac{2 \sin \left(\omega T_{1}\right)}{w}\right|_{w=k w_{0}}$, which can be interpreted as samples of an envelope function:
Think of $w$ as continuous, then $\frac{2 \sin \left(\omega T_{A}\right)}{w}$ represents the envelope of $T a_{n}$, with $a_{n}$ being the
equally samples. If $T$ increases, or $w_{0} \sim \frac{1}{T}$ decreases, the envelope is sampled with closer and closer spacing.

We can think of an aperiodic signal as a periodic signal with $T \rightarrow \infty$. Consider a finite $x(t)$ in
some interval $\left[-T_{1}, T_{1}\right]$. From this a periodic signal, we may construct a new periodic signal $\tilde{x}(t)$,
from which $x(t)$ is one period. Then, $\lim _{T \rightarrow \infty} \tilde{x}(t) \rightarrow x(t)$.
Then, $a_{k}=\frac{1}{T} \int_{-T / 2}^{T / 2} d t \cdot \tilde{x}(t) e^{-i k w_{0} t}=\frac{1}{T} \int_{-\infty}^{\infty} d t \cdot x(t) e^{-i k w_{0} t}:=\frac{1}{T} X\left(w_{0}\right)$ where $X(w)$ is the envelope.
Finally, $x(t)=\frac{1}{2 \pi} \int_{-\infty}^{\infty} d w \cdot X(w) e^{i w t}$ for $T \rightarrow \infty$. Note then $w_{0} \rightarrow 0$.

Further, $X(\omega)=\int_{-\infty}^{\infty} d t \cdot x(t) e^{-i \omega t}$.
## 5.1 Convergence of Fourier transforms

If $x(t)$ has finite energy, e.g it is square integrable, then $x(w)$ is finite. Then, also $e(t)=\hat{x}(t)-x(t)$
has no energy.

Sufficient conditions for $\hat{x}=x$ expect at discontinuities are the Dirichlet conditions:

1) The signal must be absolutely integrable, e.g. $\int_{-\infty}^{\infty} d t \cdot|x(t)|^{2}<\infty$
2) In any finite interval, $x(t)$ has a finite amount of maxima and minima
3) In any finite interval, there are a finite number of discontinonitier. Further, there are finite.

## 5.2 Properties of the continons time Fourier transform
![](https://cdn.mathpix.com/cropped/2025_01_18_fe980612f9d3f033eaf5g-07.jpg?height=1894&width=1934&top_left_y=195&top_left_x=67)
4.3.7 Parseval's Relation for Aperiodic Signals

$$
\int_{-\infty}^{+\infty}|x(t)|^{2} d t=\frac{1}{2 \pi} \int_{-\infty}^{+\infty}|X(j \omega)|^{2} d \omega
$$

Parseval's theorem states that total energy is energy per time integrated over all tines, or energy per frequency integrated over all frequencies. Therefore, $|\hat{x}(i w)|^{2}$ is considered an evergy-density spectrum.

# 6 The discrete-time Fourier transform
Consider the general sequence $x(n)$ of finite duration, e.g. $x(n)=0$ outride of $\left[-N_{1}, N_{2}\right]$.
Then, the discrete-time Fourier transform is $\tilde{x}\left(e^{i \omega}\right)=\sum_{n} x(n) e^{-i \omega n}$, and then also $\sim^{n}$ "Analysis equation" $x(n)=\frac{1}{2 \pi} \int_{2 \pi} d \omega \cdot \tilde{x}\left(e^{i \omega}\right) e^{i \omega}$. Note, $\tilde{x}\left(e^{i \omega}\right)$ has a period of $2 \pi$.
"Synthesis equation"
Thu, an aperiodic sequence can be thought of as a linear combination of complex exponentials.
## 6.1 Convergence issue
The analysis equation will converge either if
1)... $x(n)$ is absolutely summable: $\sum_{n}|x(n)|<\infty$
2)... $x(n)$ has finite energy: $\quad \sum_{n}|x(n)|^{2}<\infty$

The synthesis equation on the other hand will always converge, since the integral is over a finite interval.

## 6.2 Fourier transform for periodic signals
Consider the sequence $x(n)$ with periodicity $N$ and Fourier series representation
$x(n)=\sum_{k=\sim N} a_{k} e^{i k \frac{2 \pi}{N} n}$. Then, its Fourier transform is $\tilde{x}\left(e^{i \omega}\right)=\sum_{k} 2 \pi a_{k} \cdot \delta\left(\omega-\frac{2 \pi k}{N}\right)$.
## 6.3 Properties of the discrete-time Fourier transform
![](https://cdn.mathpix.com/cropped/2025_01_18_fe980612f9d3f033eaf5g-09.jpg?height=2682&width=1974&top_left_y=198&top_left_x=47)
![](https://cdn.mathpix.com/cropped/2025_01_18_fe980612f9d3f033eaf5g-10.jpg?height=641&width=1955&top_left_y=108&top_left_x=42)

