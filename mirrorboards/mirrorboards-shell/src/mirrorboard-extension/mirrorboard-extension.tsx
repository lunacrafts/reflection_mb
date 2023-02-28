interface MirrorboardExtensionConfig {
  namespace: string
}

export class MirrorboardExtension {
  constructor(private readonly config: MirrorboardExtensionConfig) { }
}
